import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal, Button } from 'antd';
const Info = memo((props) => {
    let { visible: pvisible, close } = props;
    let [loading, setLoading] = useState(false);
    console.log(pvisible);
    const handleOk = () => {
        setLoading(true)
        setTimeout(() => {
            close();
            setLoading(false)
        }, 3000);
    };

    const handleCancel = () => {
        close();
    };

    return (
        <div>
            <div>
                {/* <Button type="primary" onClick={showModal}>
                    Open Modal with customized footer
                 </Button> */}
                <Modal
                    visible={pvisible}
                    title="Title"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            Return
            </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                            Submit
            </Button>,
                    ]}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        </div>
    );
});


Info.defaultProps = {
    visible: false,
    close: null
};
Info.propTypes = {
    data: PropTypes.bool,
    close: PropTypes.func
};

export default Info;