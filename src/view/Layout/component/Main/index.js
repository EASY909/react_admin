import React from 'react';
import PropTypes from 'prop-types';
import "./main.scss";
import { Route, Switch } from "react-router";
import Console from "../../../Console";
import InfoCategory from "../../../Info/InfoCategory";
import InfoList from "../../../Info/InfoList";
import User from "../../../User/User"
const Main = props => {
    return (

        <div className="main-content">
            <div className="content">
                <Switch>
                    <Route exact path="/layout/consoleIndex">
                        <Console />

                    </Route>
                    <Route path="/layout/infolist">
                        
                        <InfoList />
                    </Route>
                    <Route path="/layout/infocategory">
                       
                        <InfoCategory />
                    </Route>
                    <Route path="/layout/userlist">
                        
                        <User />
                    </Route>
                </Switch>
            </div>
        </div>

    );
};

Main.propTypes = {

};

export default Main;