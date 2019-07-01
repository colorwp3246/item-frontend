import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'
import router from '../router'
// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  // timeout: 5000 // 请求超时时间
})
// const service=axios
// request拦截器
service.interceptors.request.use(
  config => {
    // config.headers['Content-Type']="application/json"

    //if (localStorage.getItem("accessToken")) {
      //config.headers['Authorization'] = localStorage.getItem("accessToken") // 让每个请求携带自定义token 请根据实际情况自行修改
   // }
    config.headers['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyQ2F0ZWdvcnkiOiJ5anMiLCJ1c2VyVXVpZCI6ImZhYTBmZWU4ODM2MTQ2YWRhNTljNDNkZTAyZDlkOWFkIiwicGVybWlzc2lvbk5hbWVzIjoicGFnZTpxdWVyeSIsImV4cCI6MTU2MDU2NzE4MSwidXNlck51bWJlciI6IjE3MTAxMjEyNTE1Iiwicm9sZU5hbWVzIjoiYWRtaW4sbWFuYWdlcixub3JtYWwifQ.yTGg4D9sU53SRyrDACRMbFe_NbciGdjFpqGI9v_NhbU';
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    console.log(response.code,'查看状态')
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    //
    //   // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //   if (res.code === 1006) {
    //     MessageBox.confirm(
    //       '你已被登出，可以取消继续留在该页面，或者重新登录',
    //       '确定登出',
    //       {
    //         confirmButtonText: '重新登录',
    //         cancelButtonText: '取消',
    //         type: 'warning'
    //       }
    //     ).then(() => {
    //       store.dispatch('FedLogOut').then(() => {
    //         // location.reload() // 为了重新实例化vue-router对象 避免bug
    //         router.push({path:'/'})
    //       })
    //     })
    //   }else if(response.data.code===1005){
    //     store.dispath('setToken')
    //   }
      return response

      // return Promise.reject('error')
    // } else {
    //   return response.data
    // }
  },
  error => {
    console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
