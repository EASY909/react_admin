import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Button, Checkbox, message } from 'antd';
import MyDropDown from "../../../component/dropdown";
import { AddInfo } from "../../../api/news.js";

const Info = memo((props) => {
    let { visible: pvisible, close, data,getList } = props;
    let [loading, setLoading] = useState(false);
    let [formValue, setForm] = useState({
        categoryId: "",
        title: "",
        content: ""
    });

    const [form] = Form.useForm();

    const onFinish = values => {
        if (formValue.categoryId === "" || formValue.title === "" || formValue.content === "") {
            message.success("不能为空！", 3);
            return
        }

        setLoading(true)

        AddInfo(formValue)
            .then(Response => {
                message.success(Response.data.message, 3);
                form.resetFields();
                close();
                setLoading(false);
                getList(1)
                // this.$emit("getList", false);
            })
            .catch(error => {
                setLoading(false)
            });

    };
    const handleCancel = () => {
        form.resetFields();
        close();
    };

    const DropDownChange = (val) => {
        setForm({
            ...formValue,
            categoryId: val
        })
    }
    return (
        <div>
            <div>
                {/* <Button type="primary" onClick={showModal}>
                    Open Modal with customized footer
                 </Button> */}
                <Modal
                    visible={pvisible}
                    title="新增"
                    onOk={onFinish}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            取消
                         </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={onFinish}>
                            确定
                         </Button>,
                    ]}
                >
                    <Form
                        name="basic"
                        onFinish={onFinish}
                        form={form}
                    // onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="类型"
                            name="categroy"
                            rules={[{ required: true, message: '请输入类型！' }]}
                        >

                            <MyDropDown change={DropDownChange} data={data} />
                        </Form.Item>

                        <Form.Item
                            label="标题"
                            name="title"
                            rules={[{ required: true, message: '请输入标题！' }]}
                        >
                            <Input
                                value={formValue.title}
                                onChange={(event) => setForm({ ...formValue, title: event.target.value })} />
                        </Form.Item>
                        <Form.Item
                            label="概况"
                            name="content"
                            rules={[{ required: true, message: '请输入概况！' }]}
                        >
                            <Input.TextArea value={formValue.content} onChange={(event) => setForm({ ...formValue, content: event.target.value })} />
                        </Form.Item>
                    </Form>

                </Modal>
            </div>
        </div>
    );
});


Info.defaultProps = {
    visible: false,
    close: null,
    data: [],
    getList:null
};
Info.propTypes = {
    visible: PropTypes.bool,
    close: PropTypes.func,
    data: PropTypes.array,
    getList:PropTypes.func
};

export default Info;