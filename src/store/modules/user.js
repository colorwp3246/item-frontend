import {getTokenApi, getRefreshToken, getUserInfo} from '@/api/login'
// import {getToken, setToken, removeToken} from '@/utils/auth'
import Cookies from "js-cookie";
import {getMenu} from "@/api/table"
import axios from 'axios'

const user = {
  state: {
    token:'',
    name: '',
    avatar: '',
    roles: [],
    menu: [],
    statues: true,
    accessToken: localStorage.getItem("accessToken") || '',
    refreshToken: localStorage.getItem("refreshToken") || '',
    user:'',
    userInfo:localStorage.getItem("userInfo") || ''
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
    GETMENUS: (state, data) => {
      state.menu = data
    },
    GETUSER: (state, data) => {
      state.userInfo = data
    },
    GETTOKEN: (state, data) => {
      state.accessToken=data.accessToken
      state.refreshToken=data.refreshToken
    },
  },

  actions: {
    //获取token
    getToken({commit,state}) {
      return new Promise((resolve, reject) => {
        getTokenApi().then(res => {
          let accessToken = res.data.data.accessToken
          let refreshToken = res.data.data.refreshToken
          localStorage.setItem("accessToken",accessToken)
          localStorage.setItem("refreshToken",refreshToken)
          commit('GETTOKEN', {accessToken,refreshToken})
          resolve(accessToken)
        }).catch(err=>{
          console.log(err)
        })
      })
    },
    //刷新token
    setToken({commit}) {
      let refreshToken = localStorage.getItem("refreshToken")
      let params={

      }
      getRefreshToken(refreshToken).then(res => {
        let accessToken = res.data.data.accessToken
        localStorage.setItem("accessToken",accessToken)
      }).catch(err => {
        console.log(err)
      })
    },
    //获取用户信息
    getuser({commit}) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          console.log(res, '我是用户信息哦')
          commit('GETUSER',res.data.data)
          localStorage.setItem("userInfo",JSON.stringify(res.data.data))
          resolve()
        }).catch(err => {
          reject()
        })
      })
    },
    // 登录
    Login({commit}, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        // login(username, userInfo.password).then(response => {
        //   const data = response.data
        //   setToken(data.token)
        //   commit('SET_TOKEN', data.token)
        //   resolve()
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },
    //获取凯哥的toekn
    // 获取用户信息
    GetInfo({commit, state}) {
      return new Promise((resolve, reject) => {
        // getInfo(state.token).then(response => {
        //   const data = response.data
        //   if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
        //     commit('SET_ROLES', data.roles)
        //   } else {
        //     reject('getInfo: roles must be a non-null array !')
        //   }
        //   commit('SET_NAME', data.name)
        //   commit('SET_AVATAR', data.avatar)
        //   resolve(response)
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 登出
    LogOut({commit, state}) {
      return new Promise((resolve, reject) => {
        // logout(state.token).then(() => {
        //   commit('SET_TOKEN', '')
        //   commit('SET_ROLES', [])
        //   removeToken()
        //   resolve()
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },
    // 前端 登出
    FedLogOut({commit}) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        localStorage.removeItem('refreshToken')
        // removeToken()
        resolve()
      })
    },
    //获取侧边栏
    getmenus({commit}, data) {
      let params = {
        role: data
      }
      getMenu(params).then(res => {
        if (res.data.code === 200) {
          console.log(res.data.data, 'menu')
          commit('GETMENUS', res.data.data)
        }
      })
    }
  }
}

export default user
