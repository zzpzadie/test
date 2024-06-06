import axios from "axios";
//创建axios实例
const instance = axios.create({
    //基本请求路径的抽取
    baseURL:"http://localhost:2804",
    //这个世界是每次请求的过期时间，这次请求认为20秒之后这个请求就是失败的
    timeout:20000
})
instance.interceptors.request.use(config=>{

})
