import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom"
import Login from "./view/Login"
import Layout from "./view/Layout"
import PrivateRouter from "./component/privateRouter";

function App() {
    return (

        <HashRouter>
            <Switch>
                <Route exact render={() => <Login />} path="/"></Route>
                {/* <Route exact render={() => <Layout />} path="/layout"></Route> */}
                <PrivateRouter component={Layout} path="/layout">
                </PrivateRouter>
            </Switch>
        </HashRouter>

    );
}

export default App; 