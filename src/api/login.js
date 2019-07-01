import request from '@/utils/request'
//获取用token
export function getTokenApi() {
  return request({
    url: `${process.env.BASE_LOGIN}/auth/getToken`,
    method: 'get'
})
}
//刷新token
export function getRefreshToken(params){
  return request({
    url: `${process.env.BASE_LOGIN}/auth/refreshToken`,
    method: 'get',
    params
  })
}
//获取用户信息
export function getUserInfo() {
  return request({
    url: `${process.env.BASE_SERVE}/user/getUserInfo`,
    method: 'get',
  })
}
