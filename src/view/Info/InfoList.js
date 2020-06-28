import React from 'react';
import PropTypes from 'prop-types';
import MyDropDown from "../../component/dropdown";
import { Row, Col, DatePicker, Input, Button, Tag, Space } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import "./InfoList.scss";
import MyTable from "../../component/table";
import { GetCategory, GetList } from "../../api/news"
import { useEffect, useCallback, useState, memo } from 'react';
import Info from "./dialog/info";
import { timestampToTime } from "../../utils/validate"

const { RangePicker } = DatePicker;

const InfoList = memo(props => {
    let [category, setCategory] = useState([]);
    let [visible, setVisible] = useState(false);
    let [data, setData] = useState([]);
    let [columns, setColumns] = useState([]);

    const onChange = page => {
        getList(page);
    };
    let [pagination, setPagination] = useState({
        pageSize: 5,
        defaultCurrent: 1,
        total: 0, showTotal: (total) => "共" + total + "条数据",
        onChange: onChange
    })

    useEffect(() => {
        GetCategory().then(res => {
            let data = res.data.data.data;
            setCategory(data);
        })
        getList(1);
    }, [])


    const showModal = useCallback(() => {
        setVisible(true)
    }, []);
    const close = useCallback(() => {
        setVisible(false)
    }, [])


    const getList = (pageNumber) => {
        let resData = {
            categoryId: "",
            startTiem: "",
            endTime: "",
            title: "",
            id: "",
            pageNumber: pageNumber,
            pageSize: pagination.pageSize
        };
        // this.loading = true;
        GetList(resData)
            .then(res => {
                let data = res.data.data;
                // console.log(data);
                pagination.total = data.total;

                const tdata = data.data;
                tdata.forEach((item, index) => {
                    item.key = index;
                })
                setData(tdata);

            })
            .catch(error => {

            });
    }
    const handlerDel=(val)=>{
        console.log(val);
    }
    useEffect(() => {
        const columns = [
            {
                title: '标题',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: '类别',
                dataIndex: 'categoryId',
                key: 'categoryId',
                render: (text, record) => {
                    let data = category.filter((item, index) => {
                        return item.id === text;
                    });
                    if (data.length === 0) return;
                    return data[0].category_name;
                },
            },
            {
                title: '日期',
                dataIndex: 'createDate',
                key: 'createDate',
                render: (text, record) => (
                    timestampToTime(text)
                ),
            },
            {
                title: '操作',
                key: 'option',
                render: (text, record) => (
                    <Space size="middle">
                        <Button type="primary" onClick={()=>handlerDel(text.id)} danger>删除</Button>
                        <Button type="primary">编辑</Button>
                        <Button >编辑详情</Button>
                    </Space>
                ),
            },
        ];
        setColumns(columns)

    }, [category])

    return (
        <div>
            <Row gutter={16}>
                <Col className="gutter-row" span={4}>
                    <div className="label-wrap categroy">
                        <label>类型：</label>
                        <div className="wrap-content">
                            <MyDropDown data={category} />
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" span={8}>
                    <div className="label-wrap date">
                        <label>日期：&nbsp;&nbsp;</label>
                        <div className="wrap-content">
                            <RangePicker locale={locale} />
                        </div>
                    </div>
                </Col>

                <Col className="gutter-row" span={3}>
                    <div className="label-wrap search_key">
                        <label>关键字：&nbsp;&nbsp;</label>
                        <div className="wrap-content">
                            <MyDropDown />
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" span={1}>&nbsp;</Col>
                <Col className="gutter-row" span={2}>
                    <Input placeholder="请输入内容" />
                    {/* <div style={style}>col-6</div> */}
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button type="primary" >
                        搜索
                        </Button>
                    {/* <div style={style}>col-6</div> */}
                </Col>

                <Col className="gutter-row" span={1}>&nbsp;</Col>
                <Col className="gutter-row" span={2}>
                    <Button type="primary" onClick={showModal}>
                        新增
                    </Button>
                </Col>

            </Row>
            <div className="black-space-30"></div>
            <MyTable pagination={pagination} columns={columns} data={data} />

            <Info data={category} visible={visible} close={close} />
        </div >
    );
})


InfoList.propTypes = {

};

export default InfoList;