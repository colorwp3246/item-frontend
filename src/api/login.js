import request from '@/utils/request'
//获取用token
export function getUserInfo() {
  return request(`${process.env.BASE_SERVE}/user/getUserInfo`,{
    method: 'get',
  })
}
//年终考核用户信息
export function getYearUserInfo() {
  return request(`${process.env.BASE_YEAR}/user/getUserInfo`,{
    method: 'get',
  })
}
//获取token
export function getTokenApi() {
  return request(`${process.env.BASE_TOKEN}/api/auth/getToken`,{
    method: 'get'
  })
}
//刷新token
export function getRefreshToken(params) {
  return request(`${process.env.BASE_TOKEN}/api/auth/refreshToken`,{
    method: 'get',
    params
  })
}
