// 1、创建一个新的axios实例
// 2、请求拦截器，如果有token进行头部携带
// 3、响应拦截器：1、剥离无效数据 2、处理token失效
// 4、到处一个函数，调用当前的axios实例发请求，返回值promise

import axios from 'axios'

//到处基准地址，原因：其他地方不是通过axios发送请求的地方用上基准地址
export const baseURL = ''
const instance = axios.create({
    // axios的一些配置，baseURL timeout
    baseURL,
    timeout:5000
})
