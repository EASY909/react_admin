import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { useRef } from 'react';

const { Option } = Select;


const MyDropDown = memo((props) => {
    let { data,change } = props;
    let [category, setCategory] = useState("");
    function handleChange(value) {
        change(value)
    }
    return (
        <Select onChange={handleChange} defaultValue="请选择" style={{ width: 120 }}>
            {
                data.map((item, index) => {
                    return <Option key={item.id} value={item.id}>{item.category_name}</Option>
                })
            }

        </Select>
    )
});

MyDropDown.defaultProps = {
    data: [],
    change:null
};
MyDropDown.propTypes = {
    data: PropTypes.array,
    change:PropTypes.func
};

export default MyDropDown;