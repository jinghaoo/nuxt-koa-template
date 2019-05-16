import axios from 'axios'

let options = {
  timeout: 5000 // 请求的超时时间
}
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

// 创建axios实例
const service = axios.create(options)

service.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default service
