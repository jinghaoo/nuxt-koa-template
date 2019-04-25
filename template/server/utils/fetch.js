import axios from 'axios';
 
//创建axios实例
const service = axios.create({
    timeout: 10000 //请求的超时时间
})

service.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    return Promise.reject(error)
})

export default service