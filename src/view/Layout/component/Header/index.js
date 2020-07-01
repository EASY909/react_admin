import React from 'react';
import PropTypes from 'prop-types';
import "./header.scss"
import { Fragment } from 'react';
import { useState } from 'react';
import { getUserName, removeToken, removeUserName } from "../../../../utils/session";
import { withRouter } from "react-router-dom";
import { UnorderedListOutlined, CloseCircleOutlined } from '@ant-design/icons';
import * as actionTypes from 'src/store/login/actionCreators';
import { connect } from 'react-redux';
const MyHeader = props => {
    const { isCollapse, toggleIsCollapseDispatch } = props;
    // console.log(isCollapse);

    const handlerIsCollse = () => {
        // console.log(111);
        toggleIsCollapseDispatch()
    }
    const out = () => {
        removeToken();
        removeUserName();
        // console.log(props);
        props.history.push("/")

    }

    return (
        <Fragment>
            <div className="pull-left header-icon">
                <UnorderedListOutlined onClick={handlerIsCollse} />
            </div>
            <div className="pull-right">
                <div className="user-info pull-left">
                    <img src="./face.jpg" />
                    {getUserName()}
                </div>
                <div className="header-icon pull-left">
                    <CloseCircleOutlined onClick={out} />
                </div>
            </div>
        </Fragment>
    );
};

MyHeader.propTypes = {

};


const mapStateToProps = state => {
    return {
        isCollapse: state.login.isCollapse
    }

}

// 映射 dispatch 到 props 上
const mapDispatchToProps = dispatch => {
    return {
        toggleIsCollapseDispatch() {

            dispatch(actionTypes.changeisCollapse());
        },
    };
};
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(MyHeader)) 
