import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Nav from "./component/Nav";
import MyHeader from "./component/Header";
import Main from "./component/Main";
import "./index.scss";
const { Header, Footer, Sider, Content } = Layout;
const myLayout = props => {
    return (
        <div>
            <Layout>
                <Sider>
                    <Nav></Nav>
                </Sider>
                <Layout>
                    <Header className="headerIndex"><MyHeader></MyHeader> </Header>
                    <Content className="mainIndex">
                        <Main></Main>
                    </Content>
                    {/* <Footer>Footer</Footer> */}
                </Layout>
            </Layout>
        </div>
    );
};

myLayout.propTypes = {

};

export default myLayout ;