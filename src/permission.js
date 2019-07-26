// import router from './router'
// import store from './store'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
// import { Message } from 'element-ui'
// import {getTokenApi,getUserInfo} from '@/api/login'
// import { getToken } from '@/utils/auth' // getToken from cookie
// NProgress.configure({ showSpinner: false })// NProgress configuration
// //
// const whiteList = ['/example/operationRecord','/error'] // 不重定向白名单
// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   if(window.localStorage.getItem('userInfo')){
//     //   console.log(store.getters.rolesArr,'1')
//     //   console.log("走这里2")
//     // if(store.getters.rolesArr.length===0){
//     //   console.log(store.getters.rolesArr,'2')
//     //   store.dispatch('getYearUser').then(data => {
//     //     const roles = data.roleIds
//     //     store.dispatch('GenerateRoutes', {roles}).then(() => {
//     //       router.addRoutes(store.getters.addRouters)
//     //       next({...to, replace: true})
//     //       NProgress.done()
//     //     })
//     //   })
//     //   // })
//     // }else{
//     //   console.log('end')
//     //   next()
//     //   NProgress.done() // 结束Progress
//     // }
//     next()
//     NProgress.done()
//   }else{
//     if(whiteList.indexOf(to.path) !== -1){
//       if(to.path==='/example/operationRecord'){
//         store.dispatch('gettokensave').then(res=>{
//           store.dispatch('getuser').then(data=>{
//             console.log(data)
//             // const roles = data.roleIds
//             // store.dispatch('GenerateRoutes', { roles }).then(() => {
//             //   router.addRoutes(store.getters.addRouters)
//             //
//             //   NProgress.done()
//             // })
//             next({ ...to, replace: true })
//           })
//         },err=>{
//           console.log(err)
//         })
//       }else{
//         next(...to)
//       }
//     }else{
//       next(`/error?redirect=${to.path}`)
//     }
//   }
// })
//
// router.afterEach(() => {
//   NProgress.done() // 结束Progress
// })
