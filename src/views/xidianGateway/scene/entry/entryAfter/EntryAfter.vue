<template>
  <div class="">
    <!--header-->
    <AfterLandingOther :inputSearchShow="true"></AfterLandingOther>

    <!--banner-->
    <xdBannerOther :title="titleText"
                   :tab="false"
                   :bgImg="bgImg"
                   :tabNav="tabNav"></xdBannerOther>

    <!--介绍-->
    <xdEntryIntroduce :entryIntroduce="entryIntroduce"></xdEntryIntroduce>


    <!--办理流程-->
    <xdEntryFlow :entryFlowList="entryFlowList"
                 :flowSpeed="flowSpeed"
                 :flowSpeedActive="flowSpeedActive"></xdEntryFlow>

    <!--入职办理\常见问题-->
    <xdUserTab></xdUserTab>
    <!--相关推荐-->
    <xdRecommend :recommendList="recommendList"></xdRecommend>
    <xdFooter></xdFooter>
    <sidebar></sidebar>
  </div>
</template>

<script>
  import AfterLandingOther from '../../../public/AfterLandingOther'
  import xdBannerOther from '../../../public/BannerOther'
  import xdEntryFlow from '../../../scene/entry/entryBefore/entryFlow/EntryFlow'
  import xdUserTab from '../../../scene/entry/entryAfter/tab/UserTab'
  import xdRecommend from '../../../scene/scenePublice/SceneRecommend'
  import xdEntryIntroduce from '../../../scene/scenePublice/EntryIntroduce'
  import xdFooter from '../../../public/Footer'
  import sidebar from '.././../../public/Sidebar'
  export default {
    name: "EntryAfter",
    components:{
      AfterLandingOther,
      xdBannerOther,
      xdEntryFlow,
      xdUserTab,
      xdRecommend,
      xdEntryIntroduce,
      xdFooter,
      sidebar
    },
    data(){
      return{
        moduleElShow: false,
        titleText:'新员工入职管理大厅',
        bgImg:`${process.env.PICTURE_SERVE}/file?fileId=8988e8a791e94dbdb79b61286a26d220`,
        tabNav: [
          {title: '新进教职工'},
          {title: '新进临聘人员'},
        ],
        introduce:['此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍','依托一站式惠民服务平台，提供网上申请、信息核对、公示公告、结果查询一站式服务，方便师生。'],
        entryBtn:{title:'入职办理',href:'/EntryAfter',show:true},
        img: `${process.env.PICTURE_SERVE}/file?fileId=32034498568b40d28f59649b2db88ebe`,
        entryIntroduce:[
          {
            title:'报道须知',
            items:['您需要完成个人信息填报并下载根据您填报信息生成的住房申请表','人事处审核通过后系统会通过短信和邮件通知您前往单位报到','所有环节流转完成后短信和邮件通知您起薪的日期']
          }
        ],
        entryFlowList:[
          {title:'个人信息填报',icon:`${process.env.PICTURE_SERVE}/file?fileId=3af1decf4b4c4b31abd5c3930e04f605`},
          {title:'人员资格审查',icon:`${process.env.PICTURE_SERVE}/file?fileId=3af1decf4b4c4b31abd5c3930e04f605`},
          {title:'分配工号',icon:`${process.env.PICTURE_SERVE}/file?fileId=3af1decf4b4c4b31abd5c3930e04f605`},
          {title:'上网账号和邮箱',icon:`${process.env.PICTURE_SERVE}/file?fileId=3af1decf4b4c4b31abd5c3930e04f605`},
          {title:'一卡通办理',icon:`${process.env.PICTURE_SERVE}/file?fileId=3af1decf4b4c4b31abd5c3930e04f605`},
          {title:'住房申请',icon:`${process.env.PICTURE_SERVE}/file?fileId=3af1decf4b4c4b31abd5c3930e04f605`},
          {title:'党组织转接',icon:`${process.env.PICTURE_SERVE}/file?fileId=3af1decf4b4c4b31abd5c3930e04f605`},
          {title:'财务缴费',icon:`${process.env.PICTURE_SERVE}/file?fileId=3af1decf4b4c4b31abd5c3930e04f605`},
          {title:'新进人员登记表',icon:`${process.env.PICTURE_SERVE}/file?fileId=3af1decf4b4c4b31abd5c3930e04f605`},
          {title:'干部履历表',icon:`${process.env.PICTURE_SERVE}/file?fileId=3af1decf4b4c4b31abd5c3930e04f605`},
          {title:'起薪办理',icon:`${process.env.PICTURE_SERVE}/file?fileId=3af1decf4b4c4b31abd5c3930e04f605`},
          {title:'档案信息审核',icon:`${process.env.PICTURE_SERVE}/file?fileId=3af1decf4b4c4b31abd5c3930e04f605`},
          {title:'单位报到反馈',icon:`${process.env.PICTURE_SERVE}/file?fileId=3af1decf4b4c4b31abd5c3930e04f605`},
          {title:'单位报到',icon:`${process.env.PICTURE_SERVE}/file?fileId=3af1decf4b4c4b31abd5c3930e04f605`},
          {title:'户籍办理',icon:`${process.env.PICTURE_SERVE}/file?fileId=3af1decf4b4c4b31abd5c3930e04f605`},
        ],
        flowSpeed:true,//显示流程进度
        flowSpeedActive:0,//显示流程进度
        recommendList:[
          {icon:`${process.env.PICTURE_SERVE}/file?fileId=deadec5aa248420e83e3d10ab041d2a8`,fraction:'就业信息网'},
          {icon:`${process.env.PICTURE_SERVE}/file?fileId=d519caa475a140c38424c40796c1feb7`,fraction:'校友总会'},
          {icon:`${process.env.PICTURE_SERVE}/file?fileId=deadec5aa248420e83e3d10ab041d2a8`,fraction:'就业信息网'},
          {icon:`${process.env.PICTURE_SERVE}/file?fileId=d519caa475a140c38424c40796c1feb7`,fraction:'校友总会'}
        ],

      }
    }
  }
</script>

<style scoped lang="scss">

</style>
