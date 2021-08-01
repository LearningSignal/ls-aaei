import React, { Component } from "react";
import { HashRouter, Route, Switch, useLocation } from "react-router-dom";
import "./scss/style.scss";

import queryString from "query-string";

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

class App extends Component {
    render() {
        const { search } = window.location;
        const query = queryString.parse(search);
        console.log(query);

        return (
            <HashRouter>
                <div>{search}</div>
                <React.Suspense fallback={loading}>
                    <Switch>
                        <Route
                            exact
                            path="/404"
                            name="Page 404"
                            render={(props) => <Page404 {...props} />}
                        />
                        <Route
                            exact
                            path="/500"
                            name="Page 500"
                            render={(props) => <Page500 {...props} />}
                        />
                        <Route
                            path="/"
                            name="Home"
                            render={(props) => <TheLayout {...props} />}
                        />
                    </Switch>
                </React.Suspense>
            </HashRouter>
        );
    }
}

export default App;
