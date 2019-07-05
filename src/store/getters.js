const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  kaitoen:state=>state.user.kaitoken,
  loginName:state=>state.user.userInfo,
  powerName:state=>state.user.powerName,
  rolesArr:state=>state.user.rolesArr,
  addRouters:state=>state.user.addRouters,
  routers:state=>state.user.routers,
}
export default getters
