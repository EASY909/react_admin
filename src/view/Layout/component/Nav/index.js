import React from 'react';
import PropTypes from 'prop-types';
import "./nav.scss";
import { Link } from "react-router-dom"
import { Fragment } from 'react';
import { Menu } from 'antd';
import { LaptopOutlined, ProfileOutlined, TeamOutlined } from '@ant-design/icons';
import Router from "../../../../router/index";

const { SubMenu } = Menu;

const Nav = props => {
    const {isCollapse}=props;
    // console.log(isCollapse);
    const handleIcon = (icon) => {
        switch (icon) {
            case "layout":
                return <LaptopOutlined />
                break;
            case "info":
                return <ProfileOutlined />
                break;

            case "user":
                return <TeamOutlined />
                break;

            default:
                break;
        }
    }

    // 无子级菜单处理
    const renderMenu = ({ title, key }) => {
        return (
            <Menu.Item key={key}>
                <Link to={key}><span>{title}</span></Link>
            </Menu.Item>
        )
    }

    // 子级菜单处理
    const renderSubMenu = ({ title, key, children, icon }) => {
        return (
            <SubMenu key={key} icon={handleIcon(icon)} title={title}>
                {
                    children && children.map(item => {
                        return item.children && item.children.length > 0 ? renderSubMenu(item) : renderMenu(item);
                    })
                }
            </SubMenu>
        )
    }
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
                {
                    Router && Router.map(firstItem => {
                        return firstItem.children && firstItem.children.length > 0 ? renderSubMenu(firstItem) : renderMenu(firstItem);
                    })
                }
                {/* <SubMenu key="sub1" icon={<UserOutlined />} title="控制台">

                    <Menu.Item key="1">
                        <NavLink exact to="/layout/consoleIndex">
                            主页
                        </NavLink>
                    </Menu.Item>

                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="信息管理">
                    <Menu.Item key="5">
                        <NavLink exact to="/layout/infolist">
                            信息列表
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <NavLink exact to="/layout/infocategory">
                            信息分类
                        </NavLink>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<TeamOutlined />} title="用户管理">
                <Menu.Item key="9">
                    <NavLink exact to="/layout/userlist">
                        用户列表
                        </NavLink>
                </Menu.Item>

                </SubMenu> */}
            </Menu>
        </div >
    );
};

Nav.propTypes = {

};

export default Nav;