"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true,
});
exports.handler = undefined;

var _imsLti = require("ims-lti");

var _imsLti2 = _interopRequireDefault(_imsLti);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var lti_shared_secret = "1234";

var handler = (exports.handler = function handler(event, context, callback) {
    var protocol = event.headers["x-forwarded-proto"];

    // Fix up the event to look like a node request for the ims-lti library
    event.url =
        protocol +
        "://" +
        event.headers.host +
        "/" +
        event.requestContext.stage +
        "/lti1p0auth-staging"; // Note that we hard code the path of 'lti' here. This must match the 'path' set in serverless.yml.
    event.protocol = protocol;

    event.method = event.requestContext.http.method;

    var temp = decodeURIComponent(
        Buffer.from(event.body, "base64").toString("utf8")
    );

    var a = temp.split("&");
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split("=", 2);
        if (p.length == 1) b[p[0]] = "";
        else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }

    event.body = b;

    console.log(
        "=================================================================="
    );
    console.log(event);
    console.log(
        "=================================================================="
    );

    // Validate the lti launch
    //   var provider = new _imsLti2.default.Provider(event.body.oauth_consumer_key, lti_shared_secret);
    var provider = new _imsLti2.default.Provider("demo", lti_shared_secret);

    const response = {
        statusCode: 301,
        headers: {
            Location: "https://master.d1q0eq3lbgake7.amplifyapp.com/",
        },
    };

    provider.valid_request(event, function (error, isValid) {
        var body = isValid
            ? "<html><body><h1>Hello " +
              event.body.lis_person_name_full +
              "</h1></body></html>"
            : "<html><body><h1>Error: Failed LTI Launch</h1><p>" +
              error +
              "</p></body></html>";
        console.log(isValid);
        console.log(error);
        //var redi = '<html><head><meta http-equiv="refresh" content="0;URL=\'http://www.example.com/\'" /></head><body><h1>Hello ' + event.body.lis_person_name_full + '</h1></body></html>'
        callback(null, response);
    });
});
