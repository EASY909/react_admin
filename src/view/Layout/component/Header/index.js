import React from 'react';
import PropTypes from 'prop-types';
import "./header.scss"
import { Fragment } from 'react';
import { useState } from 'react';
import { getUserName, removeToken, removeUserName } from "../../../../utils/session";
import {withRouter} from "react-router-dom"

const MyHeader = props => {
    const out = () => {
        removeToken();
        removeUserName();
        // console.log(props);
        props.history.push("/")
        
    }

    return (
        <Fragment>
            <div className="pull-left header-icon">
                {/* <svg-icon iconClass="menu" class="menu"></svg-icon> */}
            </div>
            <div className="pull-right">
                <div className="user-info pull-left">
                    <img src="./face.jpg" />
                    {getUserName()}
                </div>
                <div className="header-icon pull-left">
                    <button onClick={out}>退出</button>
                    {/* <svg-icon iconClass="exit" class="exit"></svg-icon> */}
                </div>
            </div>
        </Fragment>
    );
};

MyHeader.propTypes = {

};

export default withRouter(MyHeader) ;