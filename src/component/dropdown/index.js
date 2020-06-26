import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;


const MyDropDown = memo((props) => {
    let { data } = props;
    return (
        <Select defaultValue="请选择" style={{ width: 120 }}>
            {
                data.map((item, index) => {
                   return <Option key={item.id} value={item.id}>{item.category_name}</Option>
                })
            }

        </Select>
    )
});

MyDropDown.defaultProps = {
    data: []
};
MyDropDown.propTypes = {
    data: PropTypes.array
};

export default MyDropDown;