import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Nav from "./component/Nav";
import MyHeader from "./component/Header";
import Main from "./component/Main";
import "./index.scss";
import * as actionTypes from 'src/store/login/actionCreators';
import { connect } from 'react-redux';
const { Header, Footer, Sider, Content } = Layout;
const myLayout = props => {
    const {isCollapse}=props;
    // console.log(isCollapse);
    return (
        <div>
            <Layout className={[isCollapse?'close':'open']}>
                <Sider collapsed={isCollapse}>
                    <Nav></Nav>
                </Sider>
                <Layout>
                    <Header className="headerIndex"><MyHeader></MyHeader> </Header>
                    <Content className="mainIndex">
                        <Main>
                            {/* {props.children} */}
                            {/* <ContainerMain/> */}
                        </Main>
                    </Content>
                    {/* <Footer>Footer</Footer> */}
                </Layout>
            </Layout>
        </div>
    );
};

myLayout.propTypes = {

};
const mapStateToProps = state => {
    return {
        isCollapse: state.login.isCollapse
    }
}
export default connect(
    mapStateToProps
    
)(myLayout);
