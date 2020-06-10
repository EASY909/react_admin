import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col, message } from 'antd';
import { UserOutlined, LockOutlined, SmileOutlined } from '@ant-design/icons';
import { checkPassword, validateCode } from "../../utils/validate";
import { Login } from "../../api/login"
import Code from "../../component/code"
function LoginIndex(props) {
    const [username, setUsername] = useState("");

    const onFinish = values => {
        Login().then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })
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
                rules={[{ required: true, message: '邮箱不能为空！' },
                { type: "email", message: "邮箱格式不正确！" }
                ]}
            >
                <Input value={username} onChange={(event) => setUsername(event.target.value)} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '密码不能为空！' },
                { pattern: checkPassword, message: "密码不小于6位，大小写字母数字组成！" }
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item
                name="Code"
                rules={[{ required: true, message: 'Please input your Code!' },
                { pattern: validateCode, message: "验证码格式不正确！" }
                ]}
            >
                <Row gutter={13}>
                    <Col span={16}>
                        <Input
                            prefix={<SmileOutlined className="site-form-item-icon" />}
                            placeholder="Code"
                        /></Col>
                    <Col span={8}>
                        <Code username={username} />
                    </Col>
                </Row>
            </Form.Item>
            <Form.Item>
                <Button type="danger" htmlType="submit" block>
                    登录</Button>
            </Form.Item>
        </Form>
    )
}
export default LoginIndex;
