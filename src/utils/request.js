// axios 请求库二次封装

import axios from "axios";

// 创建请求实例
const instance = axios({
    baseURL: '/api',
    // 指定请求超时的毫秒数
    timeout: 20000,
    // 表示跨域请求时是否需要使用凭证
    withCredentials: false
});

// 请求拦截器
instance.interceptors.request.use((config)=>{
    return config;
}, (error)=>{
    return Promise.reject(error);
})

// 后置拦截器
instance.interceptors.response.use((response)=>{
    return response;
}, (error)=>{
    const {response} = error;
    if(response && response.data){
        return Promise.reject(error);
    }
    const {message} = error;
    console.error(message);
    return Promise.reject(error)
})


// 导出常用函数
export function post (url, data = {}, params = {}){
    return instance({
        method: 'post',
        url,
        data,
        params,
    })
}

export function get(url, params = {}){
    return instance({
        method: 'get',
        url,
        params,
    })
}

export default instance;
