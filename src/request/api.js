import request from "./index.js"

//验证码请求
export const captchaAPI = () =>request.get("/prode-api/captchaImage")
