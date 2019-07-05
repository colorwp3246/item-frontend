import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)
/* Layout */
import Layout from '../views/layout/Layout'
/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/error', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/example/operationRecord',
    name: 'Dashboard',
    hidden: true,
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/operationRecord',
    name: 'Example',
    meta: { title: '目录清单管理模块', icon: 'example'},
    children: [
      {
        path: 'operationRecord',
        name: 'operationRecord',
        component: () => import('@/views/operationRecord/index'),
        meta: { title: '实施清单', icon: 'tree' }
      },
      {
        path: 'approval',
        name: 'approval',
        component: () => import('@/views/approval/index'),
        meta: { title: '待审批', icon: 'tree' }
      },
      {
        path: 'releaseList',
        name: 'releaseList',
        component: () => import('@/views/releaseList/index'),
        meta: { title: '已发布清单', icon: 'tree' }
      },
      {
        path: 'releaseArticle',
        name: 'releaseArticle',
        component: () => import('@/views/releaseArticle'),
        meta: { title: '发布文章', icon: 'tree' }
      },
      {
        path: 'articleManage',
        name: 'articleManage',
        component: () => import('@/views/articleManage'),
        meta: { title: '文章管理', icon: 'tree' }
      },
      {
        path: 'dataAnalysis',
        name: 'dataAnalysis',
        component: () => import('@/views/dataAnalysis/index'),
        meta: { title: '统计分析', icon: 'tree' }
      },
      {
        path: 'logRecord',
        name: 'logRecord',
        component: () => import('@/views/logRecord/index'),
        meta: { title: '日志记录', icon: 'tree' }
      },
      {
        path: 'dataDictionary',
        name: 'dataDictionary',
        component:() => import('@/views/dataDictionary/index'),
        meta: { title: '数据字典', icon: 'tree' },
        children:[
          {
            path: 'organization',
            name: 'organization',
            component:() => import('@/views/dataDictionary/organization'),
            meta: { title: '组织架构', icon: 'form' }
          },
          {
            path: 'itemtype',
            name: 'itemtype',
            component:() => import('@/views/dataDictionary/itemtype'),
            meta: { title: '办件类型', icon: 'form' }
          },
          {
            path: 'servicescene',
            name: 'servicescene',
            component:() => import('@/views/dataDictionary/servicescene'),
            meta: { title: '服务场景', icon: 'form' }
          },
          {
            path: 'theme',
            name: 'theme',
            component:() => import('@/views/dataDictionary/theme'),
            meta: { title: '事项主题', icon: 'form' }
          },
          {
            path: 'operationsystem',
            name: 'operationsystem',
            component:() => import('@/views/dataDictionary/operationsystem'),
            meta: { title: '业务系统', icon: 'form' }
          },
          {
            path: 'serviceobject',
            name: 'serviceobject',
            component:() => import('@/views/dataDictionary/serviceobject'),
            meta: { title: '服务对象', icon: 'form' }
          },
          {
            path: 'officelist',
            name: 'officelist',
            component:() => import('@/views/dataDictionary/officelist'),
            meta: { title: '办理科室', icon: 'form' }
          },
        ]
      },
    ]
  },
  { path: '*', redirect: '/error', hidden: true }
]
export const asyncRouterMap=[
  {
    path: '/example',
    component: Layout,
    redirect: '/example/operationRecord',
    name: 'Example',
    meta: { title: '目录清单管理模块', icon: 'example'},
    children: [
      {
        path: 'operationRecord',
        name: 'operationRecord',
        component: () => import('@/views/operationRecord/index'),
        meta: { title: '实施清单', icon: 'tree' }
      },
      {
        path: 'approval',
        name: 'approval',
        component: () => import('@/views/approval/index'),
        meta: { title: '待审批', icon: 'tree' }
      },
      {
        path: 'releaseList',
        name: 'releaseList',
        component: () => import('@/views/releaseList/index'),
        meta: { title: '已发布清单', icon: 'tree' }
      },
      {
        path: 'releaseArticle',
        name: 'releaseArticle',
        component: () => import('@/views/releaseArticle'),
        meta: { title: '发布文章', icon: 'tree' }
      },
      {
        path: 'articleManage',
        name: 'articleManage',
        component: () => import('@/views/articleManage'),
        meta: { title: '文章管理', icon: 'tree' }
      },
      {
        path: 'dataAnalysis',
        name: 'dataAnalysis',
        component: () => import('@/views/dataAnalysis/index'),
        meta: { title: '统计分析', icon: 'tree' }
      },
      {
        path: 'logRecord',
        name: 'logRecord',
        component: () => import('@/views/logRecord/index'),
        meta: { title: '日志记录', icon: 'tree' }
      },
      {
        path: 'dataDictionary',
        name: 'dataDictionary',
        component:() => import('@/views/dataDictionary/index'),
        meta: { title: '数据字典', icon: 'tree' },
        children:[
          {
            path: 'organization',
            name: 'organization',
            component:() => import('@/views/dataDictionary/organization'),
            meta: { title: '组织架构', icon: 'form' }
          },
          {
            path: 'itemtype',
            name: 'itemtype',
            component:() => import('@/views/dataDictionary/itemtype'),
            meta: { title: '办件类型', icon: 'form' }
          },
          {
            path: 'servicescene',
            name: 'servicescene',
            component:() => import('@/views/dataDictionary/servicescene'),
            meta: { title: '服务场景', icon: 'form' }
          },
          {
            path: 'theme',
            name: 'theme',
            component:() => import('@/views/dataDictionary/theme'),
            meta: { title: '事项主题', icon: 'form' }
          },
          {
            path: 'operationsystem',
            name: 'operationsystem',
            component:() => import('@/views/dataDictionary/operationsystem'),
            meta: { title: '业务系统', icon: 'form' }
          },
          {
            path: 'serviceobject',
            name: 'serviceobject',
            component:() => import('@/views/dataDictionary/serviceobject'),
            meta: { title: '服务对象', icon: 'form' }
          },
          {
            path: 'officelist',
            name: 'officelist',
            component:() => import('@/views/dataDictionary/officelist'),
            meta: { title: '办理科室', icon: 'form' }
          },
        ]
      },
    ]
  },
  { path: '*', redirect: '/error', hidden: true }
]
export default new Router({
  mode: 'history', // require service support
  base: '/example/',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
