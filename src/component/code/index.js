import React, { memo, useState, useEffect } from 'react';
import { Button, message } from 'antd';
import { getSms } from "../../api/login"
import { PoweroffOutlined } from '@ant-design/icons';
import PropTypes from "prop-types"
const Code = memo((props) => {
    const { username,module } = props;
    const [isSend, setIsSend] = useState(false);
    const [but, setBut] = useState({
        butLoading: false,
        butTxt: "获取验证码",
        butDis: false
    });
 
    const countDown = useEffect(() => {
        let sec = 10, timer = null;
        if (timer) clearInterval(timer);
        if (isSend) {
            timer = setInterval(() => {
                if (sec <= 0) {
                    clearInterval(timer);
                    setIsSend(false)
                    setBut({
                        butLoading: false,
                        butTxt: "重新获取"
                    })
                    return;
                }
                setBut({
                    butLoading: false,
                    butTxt: `倒计时${sec--}秒`,
                    butDis: true
                })
            }, 1000)
        }
        return () => {
            clearInterval(timer)
        }
    }, [isSend])
    const GetSms = () => {
        if (!username) {
            message.warning('邮箱不能为空！', 2);
            return;
        }
        setBut({
            butLoading: true,
            butTxt: "发送中",
            butDis: true
        })

        let resData = {
            username: username,
            module: module
        }

        getSms(resData).then(res => {
            message.success(res.data.message, 3);
            setIsSend(true)
        }).catch(error => {
            message.warning(error.message, 3);
            setBut({
                butLoading: false,
                butTxt: "重新获取"
            })

        })
    }
    return (
        <Button type="primary" disabled={but.butDis} loading={but.butLoading} onClick={GetSms}>{but.butTxt}</Button>
    );
});

Code.defaultProps = {
    username: ""
};

Code.propTypes = {
    username: PropTypes.string

};
export default Code;