import React from 'react';
import PropTypes from 'prop-types';
import "./main.scss";
import { Route, Switch } from "react-router";

const Main = props => {
    return (

        <div className="main-content">
            <div className="content">
                <Switch>
                    <Route exact path="/consoleIndex">
                        {/* <Home /> */}
                        控制台
                    </Route>
                    <Route path="/infolist">
                        {/* <About /> */}
                        infolist
                    </Route>
                    <Route path="/infocategory">
                        {/* <User /> */}
                        infocategory
                    </Route>
                    <Route path="/userlist">
                        {/* <NoMatch /> */}
                        userlist
                    </Route>
                </Switch>
            </div>
        </div>

    );
};

Main.propTypes = {

};

export default Main;