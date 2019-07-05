<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      :collapse-transition="false"
      mode="vertical"
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import SidebarItem from './SidebarItem'

export default {
  data(){
    return{
      shuju:[
        {
          path: '/example',
          redirect: '/example/operationRecord',
          name: 'Example',
          meta: { title: '目录清单管理模块', icon: 'example'},
          children: [
            {
              path: 'operationRecord',
              name: 'operationRecord',
              meta: { title: '实施清单', icon: 'tree' }
            },
            {
              path: 'approval',
              name: 'approval',
              meta: { title: '待审批', icon: 'tree' }
            },
            {
              path: 'releaseList',
              name: 'releaseList',
              meta: { title: '已发布清单', icon: 'tree' }
            },
            {
              path: 'releaseArticle',
              name: 'releaseArticle',
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
              meta: { title: '日志记录', icon: 'tree' }
            },
            {
              path: 'dataDictionary',
              name: 'dataDictionary',
              meta: { title: '数据字典', icon: 'tree' },
              children:[
                {
                  path: 'organization',
                  name: 'organization',
                  meta: { title: '组织架构', icon: 'form' }
                },
                {
                  path: 'itemtype',
                  name: 'itemtype',
                  meta: { title: '办件类型', icon: 'form' }
                },
                {
                  path: 'servicescene',
                  name: 'servicescene',
                  meta: { title: '服务场景', icon: 'form' }
                },
                {
                  path: 'theme',
                  name: 'theme',
                  meta: { title: '事项主题', icon: 'form' }
                },
                {
                  path: 'operationsystem',
                  name: 'operationsystem',
                  meta: { title: '业务系统', icon: 'form' }
                },
                {
                  path: 'serviceobject',
                  name: 'serviceobject',
                  meta: { title: '服务对象', icon: 'form' }
                },
                {
                  path: 'officelist',
                  name: 'officelist',
                  meta: { title: '办理科室', icon: 'form' }
                },
              ]
            },
          ]
        },
      ]
    }
  },
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar',
      'menu',
      'routers'
    ]),
    routes() {
      // if(this.menu.length<=0){
      //   return this.$router.options.routes
      // }else{
      //   return [this.menu]
      // }
      return this.routers
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  mounted() {
    console.log(this.routes,'还有router吗')
    console.log(this.shuju,'数据对吗')
  }
}
</script>
