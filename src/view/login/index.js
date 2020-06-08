import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, SmileOutlined } from '@ant-design/icons';
import "./index.scss";
import LoginIndex from "./login"
import Register from "./register"
function Login(props) {
    const [formType, setformType] = useState("login")
    const [menuTab, setMenuTab] = useState([{ txt: "登录", current: true, type: "login" },
    { txt: "注册", current: false, type: "register" }])

    const handelTab = (data) => {

         menuTab.forEach(data => {
            data.current = false;
        });
       
        data.current = true;
        setMenuTab(menuTab)
        setformType(data.type);
    }

    return (
        <div className="login">
            <div className="login-wrap">
                <ul className="menu-tab">
                    {menuTab.map((item, index) => {
                        return <li onClick={handelTab.bind(this, item)} className={item.current ? "current" : null} key={index}>{item.txt}</li>
                    })}
                </ul>
                {formType === "login" ? <LoginIndex></LoginIndex> : <Register></Register>}
            </div >
        </div >
    )
}
export default Login;
