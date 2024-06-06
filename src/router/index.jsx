import React, {lazy} from "react";
import Home from "@/views/Home.jsx";
import About from "@/views/About.jsx";
import Login from "@/views/login";
// import PlanLine from "@/views/PlanLine.jsx";
// import AccountInfo from "@/views/AccountInfo.jsx";
//重定向组件
import {Navigate} from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
const PlanLine = lazy(() => import("../views/PlanLine.jsx"))
// eslint-disable-next-line react-refresh/only-export-components
const AccountInfo = lazy(() => import("../views/AccountInfo.jsx"))
// eslint-disable-next-line react-refresh/only-export-components
const WillGo = lazy(() => import("../views/WillGo.jsx"))
// eslint-disable-next-line react-refresh/only-export-components
const OnceGo = lazy(() => import("../views/OnceGo.jsx"))
const routes = [
//新的对象形式写法
    {
        path: "/test",
        element: <Navigate to={"/test/login"}/>
    }, {
        path: "/test/login",
        element: <Login/>
    },
    {
        path: "/test/home",
        element: <Home/>
    }, {
        path: "/test/about",
        element: <About/>
    },
    {
        path: "/",
        element: <About/>,
        children: [{
            path: "/test/accountInfo",
            element:
                <React.Suspense fallback={<div>Loading...</div>}>
                    <AccountInfo/>
                </React.Suspense>
        },{
            path: "/test/planLine",
            element:
                <React.Suspense fallback={<div>Loading...</div>}>
                    <PlanLine/>
                </React.Suspense>
        },{
            path: "/test/willGo",
            element:
                <React.Suspense fallback={<div>Loading...</div>}>
                    <WillGo/>
                </React.Suspense>
        },{
            path: "/test/onceGo/site",
            element:
                <React.Suspense fallback={<div>Loading...</div>}>
                    <OnceGo/>
                </React.Suspense>
        },]
    },
    // 除了配置的路径，访问其余路径都返回这里
    {
        path: "*",
        element: <Navigate to={"/test/accountInfo"}/>
    },
]

export default routes
