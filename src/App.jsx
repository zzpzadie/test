import {useState, useEffect} from 'react'

import {useRoutes, Link, useLocation, useNavigate} from "react-router-dom"
import router from "./router";
import {message} from "antd";


// 2.如果访问的不是登录页，且没有token，跳转到登录页
function ToLogin() {
    const NavigateTo = useNavigate();
    useEffect(() => {
        NavigateTo("/test/login")
        message.warning("您还没登陆！")
    })
    return <div></div>

}

// 1.如果访问的是登录页，且有token，跳转到主页
function ToHome() {
    const NavigateTo = useNavigate();
    useEffect(() => {
        NavigateTo("/test/home")
    })
    return <div></div>
}

function BeforeRouterEnter() {
    const outlet = useRoutes(router)
    const location = useLocation()
    let token = localStorage.getItem("my-project-token")
    console.log('location.pathname', location.pathname, token)
    if (location.pathname !== "/test/login" && !token) {
        console.log('1')
        // 2.如果访问的不是登录页，且没有token，跳转到登录页
        return <ToLogin/>
    } else if (location.pathname === "/test/login" && token) {
        console.log('2')
        // 1.如果访问的是登录页，且有token，跳转到主页
        return <ToHome/>
    }
    return outlet
}

function App() {
    return (
        <div className="App">
            {/* outlet占位符组件，类似于窗口，用来展示组件的，有点像vue中的router-view */}
            <Link to="/test/home">主页</Link>
            <Link to="/test/accountInfo">我的</Link>
            {/*{outlet}*/}
            <BeforeRouterEnter/>
        </div>
    )
}

export default App
