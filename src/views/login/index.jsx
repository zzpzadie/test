import {useEffect, useState} from "react";
import styles from "@/views/login/login.module.scss"
import "./login.less"
// import 'antd/dist/antd.css'
import initLoginBg from "@/views/login/init.js"
import {Button, Input, message, Space} from 'antd';
import {useNavigate} from "react-router-dom";
import {ChangeEvent} from "react";
// import {captchaAPI} from "@/request/api.js";

const View = () => {
    let NavigateTo = useNavigate();
    //加载完这个组件之后，加载背景
    useEffect(() => {
        initLoginBg();
        window.onresize = function () {
            initLoginBg();
        }
    }, []);
    //获取用户输入信息
    const [usernameVal, setUsernameVal] = useState("")
    const [passwordVal, setPasswordVal] = useState("")
    const [captchaVal, setCaptcha] = useState("")
    const usernameChange = (e) => {
        //获取用户输入用户名
        //修改usernameVal这个变量为用户输入值，以后拿到usernameVal就相当于拿到用户输入信息
        setUsernameVal(e.target.value)
    }
    const passwordChange = (e) => {
        //获取用户输入密码
        //修改usernameVal这个变量为用户输入值，以后拿到usernameVal就相当于拿到用户输入信息
        setPasswordVal(e.target.value)
    }
    // const captchaChange = (e) => {
    //     //获取用户输入验证码
    //     //修改usernameVal这个变量为用户输入值，以后拿到usernameVal就相当于拿到用户输入信息
    //     setCaptcha(e.target.value)
    // }
    //点击登录事件
    const gotoLogin = () => {
        console.log('点击', usernameVal, passwordVal)
        //验证账号密码

        //跳转进入主页
        message.success("登录成功！")
        // 保存token
        localStorage.setItem("my-project-token","zzp")
        NavigateTo("/test/home")
    }
    // //验证码获取事件
    // const getcaptchImag = () => {
    //     // alert(123)
    //     // captchaAPI().then((res)=>{
    //     //     console.log(res)
    //     // })
    // }
    return (
        <div className={styles.loginPage}>
            {/*存放背景*/}
            <div className={"back"}>
                <canvas id={"canvas"} style={{display: "block"}}></canvas>
            </div>
            {/*登录盒子*/}
            <div className={styles.loginBox + " loginBox"}>
                {/*标题部分*/}
                <div className={styles.title}>
                    <h1>平看世界</h1>
                </div>
                {/*登录表单*/}
                <div className={"form"}>
                    <Space direction="vertical" size={"middle"} style={{display: 'flex'}}>
                        <Input placeholder="用户名" onChange={usernameChange}/>
                        <Input.Password placeholder="密码" onChange={passwordChange}/>
                        {/*<div className={"captchaBox"}>*/}
                        {/*    <Space direction="horizontal" size={"middle"} style={{display: 'flex'}}>*/}
                        {/*        /!*<Input placeholder={"验证码"} onChange={captchaChange}/>*!/*/}
                        {/*        <div className={"captchaImg"} onClick={getcaptchImag}>*/}
                        {/*            <img height={38} src={"wordLevel"} alt={"验证码"}/>*/}
                        {/*        </div>*/}
                        {/*    </Space>*/}
                        {/*</div>*/}
                        <Button type="primary" className={"loginBtn"} block onClick={gotoLogin}>登录</Button>
                    </Space>
                </div>
                {/*版权信息*/}
                <div className={styles.title}>
                    <p>Copyright@ 2024 zzp</p>
                </div>
            </div>
            <p>这是login页面</p>
        </div>
    )

}

export default View
