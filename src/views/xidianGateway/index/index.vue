<template>
  <div class="index">
    <!--头部-->
    <xdHeard></xdHeard>
    <xdHotMsg></xdHotMsg>
    <xdHotTab :arrSingle="arrSingle"></xdHotTab>
    <!--数据中心-->
    <xdData></xdData>
    <!--新闻中心-->
    <xdNews :news="newslist"></xdNews>
    <!--数据展示-->
    <xdMainData></xdMainData>
    <!--便民服务-->
    <xdConvenient></xdConvenient>
    <!--侧边栏-->
    <!--<xdSidebar @sidebarClick="parentClick"></xdSidebar>-->
    <!--网站底部-->
    <xd-footer></xd-footer>
    <sidebar></sidebar>
  </div>
</template>

<script>
  import xdHeard from './heard/Heard'
  import xdHotTab from './tab/HotTab'
  import xdFooter from '../public/Footer'
  import xdData from './data/Data'
  import xdHotMsg from './data/HotMsg'
  import xdMainData from './data/MainData'
  import xdConvenient from './convenient/Convenient'
  import xdNews from './news/xdNews'
  import sidebar from '../public/Sidebar'
  import {mapState, mapActions, mapGetters} from 'vuex'
  import xdSidebar from '../public/Sidebar'
  import {getQueryString,b64DecodeUnicode} from '@/js/base'
  // import {getNews} from '@/api/apiPublic'
  import {parseTime} from '@/utils/common'
  export default {
    name: "Index",
    components: {
      xdHeard,
      xdFooter,
      xdHotTab,
      xdData,
      xdHotMsg,
      xdConvenient,
      xdMainData,
      xdNews,
      xdSidebar,
      sidebar
    },
    data(){
      return{
        moduleElShow: true,
        ApplyList:[
          {id:5391432320238220, icon:`${process.env.PICTURE_SERVE}/file?fileId=142375d43f0a4eed9c57d19c8f9d9963`,app_NAME:'学习平台',app_URL:'http://learning.xidian.edu.cn/'},
          {id:5130624713378299, icon:`${process.env.PICTURE_SERVE}/file?fileId=765e2bf7304f4d42854ef20ce9a4a15a`,app_NAME:'财务系统',app_URL:'http://202.117.121.139:80/tysfrz/caslogin.aspx'},
          {id:4598215922499875, icon:`${process.env.PICTURE_SERVE}/file?fileId=d0c85ca9fea0406a8e9c524eb0836048`,app_NAME:'学生离校',app_URL:'http://ehall.xidian.edu.cn/xsfw/sys/leaveSchool/!*default/index.do'},
          {id:5414986933351161, icon:`${process.env.PICTURE_SERVE}/file?fileId=4fa85dccfc804adab7aa9bfb921df51c`,app_NAME:'资产管理',app_URL:'http://zcgl.xidian.edu.cn/sso_assets/caslogin.jsp'},
          {id:5130594084931750, icon:`${process.env.PICTURE_SERVE}/file?fileId=0a26f21bee8c4c9abe9b066191e9ed4b`,app_NAME:'就业信息',app_URL:'http://job.xidian.edu.cn/'},
          {id:5130505994684740, icon:`${process.env.PICTURE_SERVE}/file?fileId=9ceab4e3f3b045f08ae59a5471291a07`,app_NAME:'校车查询',app_URL:'http://hqbzb.xidian.edu.cn/fwxm/ysfw.htm'},
          {id:5130605538044518, icon:`${process.env.PICTURE_SERVE}/file?fileId=0f48bc3b0a6243379e58a90097a838b8`,app_NAME:'图书馆',app_URL:'http://202.117.124.133/'},
        ],
        arrSingle:[// 0全部角色进入，1老师权限，2学生权限
          [
            {icon:`${process.env.PICTURE_SERVE}/file?fileId=2ee86c70c4444a56a64eac83252d9894`,title:'学生离校大厅',href:'/LeaveSchool',sceneType:1,explain:'此处为本版块场景介绍，此处为本版块场景介绍此处为...'},
            {icon:`${process.env.PICTURE_SERVE}/file?fileId=8fe471b802e3440290b4ae0c399f8c2a`,title:'新员工入职大厅',href:'/Entry',sceneType:2,explain:'此处为本版块场景介绍，此处为本版块场景介绍此处为...'},
            {icon:`${process.env.PICTURE_SERVE}/file?fileId=2ee86c70c4444a56a64eac83252d9894`,title:'信息服务大厅',href:'/FullService',sceneType:3,explain:'此功能模块正在开发中，此处为本版块场景介绍此处为...'},
            {icon:`${process.env.PICTURE_SERVE}/file?fileId=e600799521c14752a7d85d0d1c953c2e`,title:'敬请期待',href:'',explain:'此功能模块正在开发中，敬请期待！！！'},
          ],
          [
            {icon:`${process.env.PICTURE_SERVE}/file?fileId=e600799521c14752a7d85d0d1c953c2e`,title:'敬请期待',href:'',explain:'此功能模块正在开发中，敬请期待！！！'},
            {icon:`${process.env.PICTURE_SERVE}/file?fileId=e600799521c14752a7d85d0d1c953c2e`,title:'敬请期待',href:'',explain:'此功能模块正在开发中，敬请期待！！！'},
            {icon:`${process.env.PICTURE_SERVE}/file?fileId=e600799521c14752a7d85d0d1c953c2e`,title:'敬请期待',href:'',explain:'此功能模块正在开发中，敬请期待！！！'},
            {icon:`${process.env.PICTURE_SERVE}/file?fileId=e600799521c14752a7d85d0d1c953c2e`,title:'敬请期待',href:'',explain:'此功能模块正在开发中，敬请期待！！！'},
          ]
        ],
        userUrl:null,
        userObjList:null,
        page:1,
        newslist:[],
      }
    },
    computed:{
      ...mapGetters({
        status : 'status'
      })
    },
    created(){
      // if(true){
      //   this.$router.push({path:'/indexAfter'})
      // }
    },
    mounted(){
      this.newPolitical()
    },
    methods:{
      newPolitical(){
        // getNews(this.page,3).then(res=>{
        //   console.log(res.data.data.list,'三条数据')
        //   this.newslist=[...res.data.data.list]
        //   for(var item of this.newslist){
        //     item.date=parseTime(item.date,'{y}-{m}-{d} {h}:{i}:{s}')
        //   }
        //   console.log(this.newslist,'之后的数据')
        // })
      }
    }
  }
</script>
