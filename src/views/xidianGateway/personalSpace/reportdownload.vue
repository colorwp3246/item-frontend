<template>
  <div class="leaveSchoolBefore">
    <!--header-->
    <AfterLandingOther :inputSearchShow="true"></AfterLandingOther>

    <!--banner-->
    <xdBannerOther :title="titleText"
                   :tab="true"
                   :bgImg="bgImg"
                   :tabNav="tabNav"
                   :selectdie="false"
                   @itemActive="itemActive"></xdBannerOther>

    <!--大厅简介-->
    <xdIntroduce  :title="titleText"
                  :introduce="introduce"
                  :img="img"
                  :entryBtn="entryBtn"></xdIntroduce>
    <xdFooter></xdFooter>
  </div>
</template>

<script>
  import AfterLandingOther from '../public/AfterLandingOther'
  import xdFooter from '../public/Footer'
  import xdBannerOther from '../public/BannerOther'
  import xdIntroduce from './report-tab'
  export default {
    name: "LeaveSchoolBefore",
    components: {
      AfterLandingOther,
      xdBannerOther,
      xdIntroduce,
      xdFooter
    },
    data(){
      return {
        moduleElShow: false,
        titleText:'报表下载',
        bgImg: `${process.env.PICTURE_SERVE}/file?fileId=b617320cc9f94dad92b0fac3b811223d`,
        tabNav: [
          {title: '官方发布'},
          {title: '个人申报'}
        ],
        introduce:['此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍','依托一站式惠民服务平台，提供网上申请、信息核对、公示公告、结果查询一站式服务，方便师生。'],
        entryBtn:{title:'离校办理',href:'/LeaveSchoolAfter',show:true},
        img: require('@/assets/reportdown.png'),
        serviceList:['此处为服务对象此处为服务对象','此处为服务对象此处为服务对象此处为服务对象此处为服务对象','此处为服务对象此处为服务对象此处为服务对象','此处为服务对象此处为服务对象此处为'],
        processingFlow:[
          {title:'财务手续办理'},
          {title:'宿舍手续办理'},
          {title:'图书馆欠费欠书'},
          {title:'图书馆论文提交'},
          {title:'户口迁移证办理'},
          {title:'医疗手续办理'},
          {title:'实验室手续办理'},
          {title:'派遣证发放'},
          {title:'清欠贷款办理'},
        ],
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
          {title:'科研系统',icon:`${process.env.PICTURE_SERVE}/file?fileId=70ca7659e14e44988d05e0e07cd09d60`,describe:'此处为应用介绍此处为应用介绍此处为应用介绍此处为应用介绍'},
          {title:'财务系统',icon:`${process.env.PICTURE_SERVE}/file?fileId=13efec8785c24543ac02fe0e6ec05a06`,describe:'此处为应用介绍此处为应用介绍此处为应用介绍此处为应用介绍'}
        ]
      }
    },
    methods:{
      itemActive(i){
        console.log('-'+i)
      },
    }
  }
</script>

<style scoped lang="scss">

</style>
