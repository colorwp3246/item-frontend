<template>
  <div class="entryBefore">
    <!--header-->
    <AfterLandingOther :inputSearchShow="true"></AfterLandingOther>

    <!--banner-->
    <xdBannerOther :title="titleText"
                   :tab="true"
                   :bgImg="bgImg"
                   :selectdie="false"
                   :tabNav="tabNav"
                   @itemActive="itemActive"></xdBannerOther>

    <!--大厅简介-->
    <xdIntroduce  :title="titleText"
                  :introduce="introduce"
                  :img="img"
                  :entryBtn="entryBtn"></xdIntroduce>

    <!--办理流程-->
    <xdEntryFlow :entryFlowList="entryFlowList"
                 :flowSpeed="flowSpeed"
                 :flowSpeedActive="flowSpeedActive"></xdEntryFlow>

    <!--数据-->
    <xdMainData></xdMainData>

    <!--应用入口-->
    <xdApplication :application="application"
                   showNumber="8"></xdApplication>

    <!--相关推荐-->
    <xdRecommend></xdRecommend>
    <xdFooter></xdFooter>
    <sidebar></sidebar>
  </div>
</template>

<script>
  import AfterLandingOther from '../../../public/AfterLandingOther'
  import xdBannerOther from '../../../public/BannerOther'
  import xdIntroduce from '../../../scene/scenePublice/Introduce'
  import xdEntryFlow from '../../../scene/entry/entryBefore/entryFlow/EntryFlow'
  import xdMainData from '../../../index/data/MainData'
  import xdApplication from '../../../scene/scenePublice/Application'
  import xdRecommend from '../../../personalCenter/recommend/Recommend'
  import xdFooter from '../../../public/Footer'
  import sidebar from '.././../../public/Sidebar'
  export default {
    name: "EntryBefore",
    components: {
      AfterLandingOther,
      xdBannerOther,
      xdIntroduce,
      xdEntryFlow,
      xdMainData,
      xdApplication,
      xdRecommend,
      xdFooter,
      sidebar
    },
    data(){
      return{
        moduleElShow: false,
        titleText:'新员工入职大厅',
        bgImg:`${process.env.PICTURE_SERVE}/file?fileId=8988e8a791e94dbdb79b61286a26d220`,
        tabNav: [
          {title: '新进教职工'},
          {title: '新进临聘人员'},
        ],
        introduce:['此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍','依托一站式惠民服务平台，提供网上申请、信息核对、公示公告、结果查询一站式服务，方便师生。'],
        entryBtn:{title:'入职办理',href:'/EntryAfter',show:true},
        img: `${process.env.PICTURE_SERVE}/file?fileId=32034498568b40d28f59649b2db88ebe`,
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
        flowSpeed:false,//显示流程进度
        flowSpeedActive:0,//显示流程进度
        application:[
          {title:'图书馆',icon:`${process.env.PICTURE_SERVE}/file?fileId=6eda3baea4004a5e91ee67c95ae4c438`,describe:'此处为应用介绍此处为应用介绍此处为应用介绍此处为应用介绍'},
          {title:'科研系统',icon:`${process.env.PICTURE_SERVE}/file?fileId=70ca7659e14e44988d05e0e07cd09d60`,describe:'此处为应用介绍此处为应用介绍此处为应用介绍此处为应用介绍'},
          {title:'财务系统',icon:`${process.env.PICTURE_SERVE}/file?fileId=13efec8785c24543ac02fe0e6ec05a06`,describe:'此处为应用介绍此处为应用介绍此处为应用介绍此处为应用介绍'},
          {title:'学生离校',icon:`${process.env.PICTURE_SERVE}/file?fileId=88b5f8ed438f4cda9f5d4d1b65255d72`,describe:'此处为应用介绍此处为应用介绍此处为应用介绍此处为应用介绍'},
          {title:'图书馆',icon:`${process.env.PICTURE_SERVE}/file?fileId=6eda3baea4004a5e91ee67c95ae4c438`,describe:'此处为应用介绍此处为应用介绍此处为应用介绍此处为应用介绍'},
          {title:'科研系统',icon:`${process.env.PICTURE_SERVE}/file?fileId=70ca7659e14e44988d05e0e07cd09d60`,describe:'此处为应用介绍此处为应用介绍此处为应用介绍此处为应用介绍'},
          {title:'财务系统',icon:`${process.env.PICTURE_SERVE}/file?fileId=13efec8785c24543ac02fe0e6ec05a06`,describe:'此处为应用介绍此处为应用介绍此处为应用介绍此处为应用介绍'},
          {title:'学生离校',icon:`${process.env.PICTURE_SERVE}/file?fileId=88b5f8ed438f4cda9f5d4d1b65255d72`,describe:'此处为应用介绍此处为应用介绍此处为应用介绍此处为应用介绍'},
          {title:'图书馆',icon:`${process.env.PICTURE_SERVE}/file?fileId=6eda3baea4004a5e91ee67c95ae4c438`,describe:'此处为应用介绍此处为应用介绍此处为应用介绍此处为应用介绍'},
        ]
      }
    },
    methods:{
      itemActive(i){
        console.log('-'+i)
        if(i==1){
          //this.$router.push('/LeaveSchoolAfter')
        }
      },
    }
  }
</script>

<style scoped lang="scss">
.entryBefore{

}
</style>
