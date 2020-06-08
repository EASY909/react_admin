import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom"
import Login from "./view/login"

function App() {
    return (

        <HashRouter>
            <Switch>
                <Route exact component={Login} path="/"></Route>
            </Switch>
        </HashRouter>

    );
}

export default App;