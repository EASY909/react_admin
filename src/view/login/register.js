import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, SmileOutlined } from '@ant-design/icons';
import { checkPassword, validateCode } from "../../utils/validate";
import Code from "../../component/code"
const Register = () => {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
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
                    value={pwd}
                    onChange={(event) => setPwd(event.target.value)}
                />
            </Form.Item>
            <Form.Item
                name="repassword"
                rules={[
                    {
                      required: true,
                      message: '重复密码不能为空！',
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                         if(getFieldValue('password') !== value){
                            return Promise.reject('密码不相同！');
                         }
                         return Promise.resolve();
                        // if () {
                        //  
                        // }
                        // 
                      },
                    }),
                  ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="RePassword"
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
                    <Col span={8}><Code username={username} /></Col>
                </Row>
            </Form.Item>
            <Form.Item>
                <Button type="danger" block>
                    注册</Button>
            </Form.Item>
        </Form>
    )
};

export default Register;