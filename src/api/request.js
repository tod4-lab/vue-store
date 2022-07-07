// 对axios进行二次封装
import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'

// 1 利用axios create创建一个axios实例
// 2 requests就是配置参数后的axios实例
const requests = axios.create({
    // 基础路径，请求发出的时候，路径前面就会出现api
    baseURL: '/api',
    // 设置请求超出事件
    timeout: 5000
})
// 请求拦截器，在请求发出之前能够检测到，做一些指定的业务
requests.interceptors.request.use((config)=>{
    nprogress.start();
    // 参数为config的回调函数
    // config为配置对象，包含一个中要的属性headers请求头
    return config;
});
requests.interceptors.response.use((res)=>{
    nprogress.done();
    // 响应成功的回调函数
    return res.data;
}, error=>{
    // 响应失败的回调函数
    // 终止promise链
    return Promise.reject(new Error('faile'))
})

export default requests;