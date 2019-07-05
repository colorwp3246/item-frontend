
export function getToken() {
  return window.localStorage.getItem('accessToken')
}
export function getYearUser() {
  return window.localStorage.getItem('yearUser')
}
export function getRefreshTokens() {
  return window.localStorage.getItem('refreshToken')
}
export function getUserInfos() {
  return window.localStorage.getItem('userInfo')
}
export function getUserInfosName() {
  return window.localStorage.getItem('userInfoName')
}
export function setUserInfosName(userInfoName) {
  return window.localStorage.setItem('userInfoName',userInfoName)
}
export function setToken(accessToken) {
  return window.localStorage.setItem('accessToken', accessToken)
}
export function setRefreshToken(refreshToken) {
  return window.localStorage.setItem('refreshToken',refreshToken)
}
export function setUserInfo(userInfo) {
  return window.localStorage.setItem('userInfo',userInfo)
}
export function setYearUser(yearUser) {
  return window.localStorage.setItem('yearUser',yearUser)
}
export function removeToken(){
  window.localStorage.removeItem('accessToken')
  window.localStorage.removeItem('refreshToken')
  window.localStorage.removeItem('userInfo')
  window.localStorage.removeItem('yearUser')
  window.localStorage.removeItem('userInfoName')
}
