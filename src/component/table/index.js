import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';




const MyTable = memo((props) => {

    const [selectionType, setSelectionType] = useState('checkbox');
    let { columns, data, pagination, deleteAll, setDeleteId } = props;
    // const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (selectedRowKeys, selectedRows) => {
        let deteId = [];
        selectedRows.forEach(item => {
            // console.log(item);
            deteId.push(item.id)
        })
        // console.log(deteId);
        setDeleteId(deteId);
        // setSelectedRowKeys(null)
    }
    const rowSelection = {
        type: selectionType,
        onChange: onSelectChange
    };
    return (
        <div>
            <Button onClick={deleteAll}>
                批量删除
            </Button>
            <Table rowSelection={rowSelection} pagination={pagination} columns={columns} dataSource={data} />
        </div>
    );
});
MyTable.defaultProps = {
    columns: [],
    data: [],
    pagination: null,
    deleteAll: null,
    setDeleteId: null
};

MyTable.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
    pagination: PropTypes.object,
    deleteAll: PropTypes.func,
    setDeleteId: PropTypes.func
};

export default MyTable;