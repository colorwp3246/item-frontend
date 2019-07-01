const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  status:state=>state.user.statues,
  name: state => state.user.name,
  roles: state => state.user.roles,
  kaitoen:state=>state.user.kaitoken,
  menu:state=>state.user.menu,
  accessToken:state=>state.user.accessToken,
  refreshToken:state=>state.user.refreshToken,
  userInfo:state=>state.user.userInfo
}
export default getters
