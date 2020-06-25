import React from 'react';
import PropTypes from 'prop-types';
import "./nav.scss";
import { NavLink } from "react-router-dom"
import { Fragment } from 'react';
import { Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Nav = props => {
    return (
        <div className="navIndex">

            <h1 className="logo">
                <img src="./logo192.png" />
            </h1>
            <Menu
                mode="inline"
                theme="dark"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu key="sub1" icon={<UserOutlined />} title="控制台">

                    <Menu.Item key="1">
                        {/* <NavLink exact to="/consoleIndex"> */}
                            主页
                        {/* </NavLink> */}

                    </Menu.Item>

                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="信息管理">
                    <Menu.Item key="5">信息列表</Menu.Item>
                    <Menu.Item key="6">信息分类</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="用户管理">
                    <Menu.Item key="9">用户列表</Menu.Item>

                </SubMenu>
            </Menu>
        </div>
    );
};

Nav.propTypes = {

};

export default Nav;