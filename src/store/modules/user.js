import {constantRouterMap,asyncRouterMap} from '@/router'
import {getToken, getRefreshTokens, getUserInfos,setToken,setRefreshToken,setUserInfo,removeToken,setYearUser,getYearUser,getUserInfosName,setUserInfosName} from '@/utils/auth'
import {getTokenApi,getUserInfo,getRefreshToken,getYearUserInfo} from '@/api/login'
function filterAsyncRouter(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}
const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    accessToken: getToken()|| '',
    refreshToken: getRefreshTokens()|| '',
    userInfo:JSON.parse(getUserInfos())|| '',
    routers: [],
    addRouters: [],
    powerName:getUserInfosName()||'',
    rolesArr:[],
    roleData:setYearUser()||''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SETTOKEN: (state, data) => {
      state.kaitoken = data
    },
    GETTOKENSAVE: (state, data) => {
      state.accessToken = data.accessToken
      state.refreshToken = data.refreshToken
    },
    GETUSER: (state, data) => {
      state.userInfo = data
      state.powerName=data.userName
    },
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    GETYEARUSER:(state,data)=>{
      state.roleData=data
      state.rolesArr=data.roleIds
    }
  },
  actions: {
    // 登录
    Login({commit}, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    //获取token并存贮
    gettokensave({commit}, data) {
      return new Promise((resolve, reject) => {
        getTokenApi().then(res => {
          console.log(res,'我是token1')
          let accessToken = res.data.data.accessToken
          let refreshToken = res.data.data.refreshToken
          let dataArr={
            accessToken,
            refreshToken
          }
          let params = {
            accessToken,
            refreshToken
          }
          commit("GETTOKENSAVE",dataArr)
          setToken(accessToken)
          setRefreshToken(refreshToken)
          resolve(accessToken)
        }).catch(err => {
          reject(err)
        })
      })
    },
    //如果token过期则调刷新token
    // setToken({commit}) {
    //   return new Promise((resolve, reject) => {
    //     let params = {
    //       refreshToken: window.localStorage.getItem("refreshToken")
    //     }
    //     getRefreshToken(params).then(res => {
    //       let accessToken = res.data.data.accessToken;
    //       let refreshToken = res.data.data.refreshToken;
    //       window.localStorage.setItem("accessToken", accessToken)
    //       window.localStorage.setItem("refreshToken", refreshToken)
    //
    //     }).catch(err => {
    //       reject(err)
    //     })
    //   })
    // },

    //当refreshToken过期时重新登录清除缓存
    LogOut({commit}){
      return new Promise((resolve, reject) => {
        commit('GETUSER',"")
        commit("GETTOKENSAVE","")
        removeToken()
        resolve()
      }).catch(err=>{
        reject()
      })
    },
    //获取一站式用户信息
    getuser({commit}){
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          console.log(res,'我是一站式用户')
          commit('GETUSER',res.data.data)
          setUserInfo(JSON.stringify(res.data.data))
          setUserInfosName(res.data.data.userName)
          // getYearUserInfo().then(data => {
          //   console.log(data,'我是年终考核的用户')
          //   commit('GETYEARUSER',data.data.data)
          //   setYearUser(JSON.stringify(data.data.data))
          //   resolve(data.data.data)
          // }).catch(err => {
          //   reject()
          // })
          resolve(res.data.data)
        }).catch(err => {
          reject()
        })
      })
    },
    // 获取年终考核用户信息
    getYearUser({commit}){
      return new Promise((resolve, reject) => {
        getYearUserInfo().then(data => {
          console.log(data,'我是年终考核的用户')
          commit('GETYEARUSER',data.data.data)
          setYearUser(JSON.stringify(data.data.data))
          resolve(data.data.data)
        }).catch(err => {
          reject()
        })
      })
    },
    //配置权限
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters=[]
        accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default user
