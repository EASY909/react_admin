import React from 'react';
import PropTypes from 'prop-types';
import MyDropDown from "../../component/dropdown";
import { Row, Col, DatePicker, Input, Button } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import "./InfoList.scss";
import MyTable from "../../component/table";
import { GetCategory } from "../../api/news"
import { useEffect, useCallback, useState, memo } from 'react';
import Info from "./dialog/info"
const { RangePicker } = DatePicker;
const InfoList = memo(props => {
    let [category, setCategory] = useState([]);
    let [visible, setVisible] = useState(false);
    useEffect(() => {
        GetCategory().then(res => {
            let data = res.data.data.data;
            setCategory(data);
        })
    }, [])
    const showModal = useCallback(() => {
        setVisible(true)
    },[]);
    const close = useCallback(() => {
        setVisible(false)
    },[])

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
            <MyTable />

            <Info visible={visible} close={close} />
        </div >
    );
})


InfoList.propTypes = {

};

export default InfoList;