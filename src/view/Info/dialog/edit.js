import React, { memo, useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Button, Checkbox, message, Select } from 'antd';
import MyDropDown from "../../../component/dropdown";
import { AddInfo } from "../../../api/news.js";
import { GetList } from "src/api/news";
const { Option } = Select;
const Edit = memo((props) => {
    console.log(122);
    let { visible: pvisible, close, data, editId } = props;
    let [loading, setLoading] = useState(false);
    let [formValue, setForm] = useState({
        categoryId: "",
        title: "",
        content: ""
    });
    // let [title, setTitle] = useState("");
    let [listData, setDataList] = useState([])
    // let { data,change,cateId } = props;
    let [category, setCategory] = useState("");
    function handleChange(value) {
        // change(value)
        // console.log(value);
        setForm({
            ...formValue,
            categoryId: value
        })
    }
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log(formValue);
        // if (formValue.categoryId === "" || formValue.title === "" || formValue.content === "") {
        //     message.success("不能为空！", 3);
        //     return
        // }

        // setLoading(true)

        // AddInfo(formValue)
        //     .then(Response => {
        //         message.success(Response.data.message, 3);
        //         form.resetFields();
        //         close();
        //         setLoading(false);
        //         getList(1)
        //         // this.$emit("getList", false);
        //     })
        //     .catch(error => {
        //         setLoading(false)
        //     });

    };
    const handleCancel = () => {
        form.resetFields();
        close();
    };

    // const DropDownChange = (val) => {
    //     setForm({
    //         ...formValue,
    //         categoryId: val
    //     })
    // }
    // useEffect(() => {
    //     // console.log(editId);
    //     // if (editId === "") return;
    //     // if(list.length!==0) return;
    //     getList(1);
    // }, [editId])






    // const changeformValue = useCallback((data) => {
    //     setForm({
    //         categoryId: data[0].categoryId,
    //         title: data[0].title,
    //         content: data[0].content
    //     })
    // }, [editId]);
    // useEffect(() => {
    //     console.log(list);
    //     if (list.length === 0) {
    //         return
    //     };

    // })
    const getList = (pageNumber) => {

        let resData = {
            id: editId,
            pageNumber: 1,
            pageSize: 1
        };
        // this.loading = true;
        GetList(resData)
            .then(res => {
                let data = res.data.data.data;
                // form.setFieldsValue({
                //     categroy: data[0].categoryId,
                //     title: data[0].title,
                //     content: data[0].content,
                // })
                // console.log(data);
                // console.log( data[0].categoryId);
                // console.log( data[0].title);
                // console.log( data[0].content);
                setDataList(data);
                // return data;
            })
            .catch(error => {

            });
    }
    const list = useMemo(() => {
        // return getList(1);
        // console.log(getList(1));
        // console.log(list);
        // if (list.length !== 0) {

        // }
        getList(1);
        return listData;
        // return 
    }, [editId])


    useEffect(() => {
        if(listData.length!==0){
            form.setFieldsValue({
                categroy: listData[0].categoryId,
                title: listData[0].title,
                content: listData[0].content,
            })
        }
    })
    return (
        <div>
            <div>
                {/* <Button type="primary" onClick={showModal}>
                    Open Modal with customized footer
                 </Button> */}

                <Modal
                    visible={pvisible}
                    title="修改"
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
                            <Select onChange={handleChange} style={{ width: 120 }}>
                                {
                                    data.map((item, index) => {
                                        return <Option key={item.id} value={item.id}>{item.category_name}</Option>
                                    })
                                }

                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="标题"
                            name="title"
                            rules={[{ required: true, message: '请输入标题！' }]}
                        >
                            {/* <input type="text" value={formValue.title}/> */}
                            <Input
                                // defaultValue={title}
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


Edit.defaultProps = {
    visible: false,
    close: null,
    data: [],
    getList: null,
    editId: ""
};
Edit.propTypes = {
    visible: PropTypes.bool,
    close: PropTypes.func,
    data: PropTypes.array,
    getList: PropTypes.func,
    editId: PropTypes.string
};

export default Edit;