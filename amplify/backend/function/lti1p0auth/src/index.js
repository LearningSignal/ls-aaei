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
        "==============================modified event===================================="
    );
    console.log(event);
    console.log(
        "==============================modified event===================================="
    );

    // Validate the lti launch
    var provider = new _imsLti2.default.Provider(
        event.body.oauth_consumer_key,
        lti_shared_secret
    );

    var queryString = Object.keys(b)
        .map(function (key) {
            return key + "=" + b[key];
        })
        .join("&");

    const response = {
        statusCode: 301,
        headers: {
            Location:
                "https://master.d1q0eq3lbgake7.amplifyapp.com?" + queryString,
        },
    };

    provider.valid_request(event, function (error, isValid) {
        console.log("isValid: " + isValid);
        console.log("error: " + error);
        callback(null, response);
    });
});
