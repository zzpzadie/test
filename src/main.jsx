import React from 'react'
import ReactDOM from 'react-dom/client'
//样式初始化一般放在最前
import "reset-css"
//UI框架样式

//全局样式
import "@/assets/styles/global.scss"
//组件样式

import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
// import Router from "./router"
//状态管理
import {Provider} from "react-redux";
import store from "@/store/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        {/*<Router/>*/}
    </Provider>,
)
