import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import "./main.scss";
import { Route, Switch } from "react-router";
import PrivateRouter from "../../../../component/privateRouter"
// import Console from "../../../Console";
// import InfoCategory from "../../../Info/InfoCategory";
// import InfoList from "../../../Info/InfoList";
// import User from "../../../User/User";
const Console = lazy(() => import("../../../Console"));
const InfoCategory = lazy(() => import("../../../Info/InfoCategory"));
const InfoList = lazy(() => import("../../../Info/InfoList"));
const User = lazy(() => import("../../../User/User"));

const Main = props => {
    return (

        <div className="main-content">
            <div className="content">
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <PrivateRouter exact path="/layout/consoleIndex" component={Console} />
                        <PrivateRouter exact path="/layout/infolist" component={InfoList} />
                        <PrivateRouter exact path="/layout/infocategory" component={InfoCategory} />
                        <PrivateRouter exact path="/layout/userlist" component={User} />
                    </Switch>
                </Suspense>
            </div>
        </div>

    );
};

Main.propTypes = {

};

export default Main;