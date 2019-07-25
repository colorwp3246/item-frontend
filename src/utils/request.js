import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'
import router from '../router'
// 创建axios实例
// const service = axios.create({
// })
// service.interceptors.request.use(
//   config => {
//     config.headers['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyQ2F0ZWdvcnkiOiJ5anMiLCJ1c2VyVXVpZCI6ImZhYTBmZWU4ODM2MTQ2YWRhNTljNDNkZTAyZDlkOWFkIiwicGVybWlzc2lvbk5hbWVzIjoicGFnZTpxdWVyeSIsImV4cCI6MTU2MDU2NzE4MSwidXNlck51bWJlciI6IjE3MTAxMjEyNTE1Iiwicm9sZU5hbWVzIjoiYWRtaW4sbWFuYWdlcixub3JtYWwifQ.yTGg4D9sU53SRyrDACRMbFe_NbciGdjFpqGI9v_NhbU';
//     return config
//   },
//   error => {
//     console.log(error) // for debug
//     Promise.reject(error)
//   }
// )
// service.interceptors.response.use(
//   response => {
//     const res = response.data
//     console.log(response.code,'查看状态')
//       return response
//   },
//   error => {
//     console.log('err' + error) // for debug
//     return Promise.reject(error)
//   }
// )
//
export default function service(url, options) {
  let isRefreshing = true;
  let subscribers = [];
  const defaultOptions = {
    headers: {
      Authorization:localStorage.getItem("accessToken"),
      // Authorization :'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyQ2F0ZWdvcnkiOiJ5anMiLCJ1c2VyVXVpZCI6ImZhYTBmZWU4ODM2MTQ2YWRhNTljNDNkZTAyZDlkOWFkIiwicGVybWlzc2lvbk5hbWVzIjoicGFnZTpxdWVyeSIsImV4cCI6MTU2MDU2NzE4MSwidXNlck51bWJlciI6IjE3MTAxMjEyNTE1Iiwicm9sZU5hbWVzIjoiYWRtaW4sbWFuYWdlcixub3JtYWwifQ.yTGg4D9sU53SRyrDACRMbFe_NbciGdjFpqGI9v_NhbU'

},
    withCredentials: true,
    url: url,
    // baseURL: BASE_URL,
  };
  const newOptions = {...options, ...defaultOptions};
  return axios.request(newOptions)
    .then(checkStatus)
    .catch(error => console.log(error));

  function checkStatus(response) {
    console.log(response)
    if (response && response.data.code === 1005) {
      // 刷新token的函数,这需要添加一个开关，防止重复请求
      if (isRefreshing) {
        refreshTokenRequest()
      }
      isRefreshing = false;
      // 这个Promise函数很关键
      const retryOriginalRequest = new Promise((resolve) => {
        addSubscriber(() => {
          resolve(service(url, options))
        })
      });
      return retryOriginalRequest;
    }else if(response.data.code === 1004 || response.data.code === 1001){
      window.location.href = `${process.env.BASE_TOKEN}/api/auth/login?redirect=${process.env.BASE_TOKEN}/example`
    }else if(response.data.code === 1006){
      store.dispatch('LogOut').then(res => {
        window.location.href = `${process.env.BASE_TOKEN}/api/auth/login?redirect=${process.env.BASE_TOKEN}/example`
      }, err => {
        console.log(err)
      })
    }else {
      return response;
    }
  }

  function refreshTokenRequest() {
    let params = {
      refreshToken: window.localStorage.getItem("refreshToken")
    };
    axios.get(`${process.env.BASE_TOKEN}/api/auth/refreshToken`,{params,headers:{Authorization:localStorage.getItem("accessToken")}}).then(res =>{
      console.log(res,'fffff')
      let accessToken = res.data.data.accessToken;
      let refreshToken = res.data.data.refreshToken;
      window.localStorage.setItem("accessToken", accessToken);
      window.localStorage.setItem("refreshToken", refreshToken);
      onAccessTokenFetched();
      isRefreshing = true;
    }).catch(err => {
      console.log(err)
    })
  }
  function onAccessTokenFetched() {
    subscribers.forEach((callback)=>{
      callback();
    })
    subscribers = [];
  }
  function addSubscriber(callback) {
    subscribers.push(callback)
  }
}
