import request from "./index.js"

//验证码请求
// export const captchaAPI = () =>request.get("/prode-api/captchaImage")
//登录请求
export function LoginAPI (data) {
    return request({
        url:'/user/login',
        method:'post',
        data:data
    })
}


//用户管理查询请求
export function getUserList (data) {
    return request({
        url:'/user/listP',
        method:'post',
        data:data
    })
}
//用户管理新增请求
export function getAddList (data) {
    return request({
        url:'/user/save',
        method:'post',
        data:data
    })
}
//用户管理修改请求
export function getEditList (data) {
    return request({
        url:'/user/mod',
        method:'post',
        data:data
    })
}

//用户管理删除请求
export function getDeleteList (Id) {
    return request({
        url:'/user/delete?id=' + Id,
        method:'get',
    })
}
