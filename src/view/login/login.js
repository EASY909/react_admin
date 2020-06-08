import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, SmileOutlined } from '@ant-design/icons';

function LoginIndex(props) {

    // const [sliderSwiper, setSliderSwiper] = useState(null);
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="Email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item
                name="Code"
                rules={[{ required: true, message: 'Please input your Code!' }]}
            >
                <Row gutter={13}>
                    <Col span={16}>
                        <Input
                            prefix={<SmileOutlined className="site-form-item-icon" />}
                            placeholder="Code"
                        /></Col>
                    <Col span={8}><Button type="primary">获取验证码</Button></Col>
                </Row>
            </Form.Item>
            <Form.Item>
                <Button type="danger" block>
                    登录</Button>
            </Form.Item>
        </Form>
    )
}
export default LoginIndex;
