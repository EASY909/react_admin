import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';



const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
const MyTable = memo((props) => {
    const [selectionType, setSelectionType] = useState('checkbox');
    let {columns,data,pagination}=props;

    return (
        <Table rowSelection={{
            type: selectionType,
            ...rowSelection,
        }}  pagination={pagination}  columns={columns} dataSource={data} />
    );
});
MyTable.defaultProps = {
    columns:[],
    data:[],
    pagination:null
};

MyTable.propTypes = {
    columns:PropTypes.array,
    data:PropTypes.array,
    pagination:PropTypes.object
};

export default MyTable;