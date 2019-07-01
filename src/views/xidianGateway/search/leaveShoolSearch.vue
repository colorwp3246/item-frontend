<template>
  <div class="search">
    <!--header-->
    <xdAfterLandingOther otherTiTle="搜索" @scrollShowSearch="scrollShowSearch"></xdAfterLandingOther>

    <!--banner-->
    <xdBannerOther :bgImg="bgImg"  :searchSelect="false" :selectdie="false"></xdBannerOther>
    <div class="tip main">
      <span class="reminder">温馨提示:</span>
      正在办理
      <span class="tipCont">离校图书馆论文提交</span>
      事项
    </div>
    <div class="searchAllBox clear main">
      <div class="searchBoxBar" :class="sliderBarFixed?'searchFixed':''">
        <xdSearchBar :searchBar="searchBar" :sliderActive="sliderActive"></xdSearchBar>
      </div>
      <div class="searchBoxContent">
        <!--便捷服务-->
        <xdConvenientService class="xd_jump" :ApplyList="ApplyList" :loading="loading" SideServe="办事入口"></xdConvenientService>

        <!--服务事项-->
        <xdServiceMatters class="xd_jump" groupTitle="服务事项" :searchCell="searchCell" headlines="img"></xdServiceMatters>

        <!--常见问题-->
        <xdServiceMatters class="xd_jump" groupTitle="常见问题" :searchCell="problem"></xdServiceMatters>

        <!--政策新闻-->
        <xdServiceMatters class="xd_jump" groupTitle="政策新闻" :searchCell="news"></xdServiceMatters>

        <!--猜你想看-->
        <xdServiceMatters class="xd_jump" groupTitle="猜你想看（历史相关、系统推荐）" :searchCell="guess" :isApply="true"></xdServiceMatters>

      </div>
    </div>
    <Footer></Footer>
    <sidebar></sidebar>
  </div>
</template>

<script>
  import xdAfterLandingOther from '../public/AfterLandingOther'
  import xdBannerOther from '../public/BannerOther'
  import xdConvenientService from './ConvenientService'
  import xdServiceMatters from './ServiceMatters'
  import xdSearchBar from './SearchBar'
  import {getQueryString} from '@/js/base'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    name: "Search",
    components:{
      xdAfterLandingOther,
      xdBannerOther,
      xdConvenientService,
      xdServiceMatters,
      xdSearchBar,
      Footer,
      sidebar
    },
    data(){
      return{
        bgImg:`${process.env.PICTURE_SERVE}/file?fileId=ba337937a9c24b1ab804634a4bc7b924`,
        sliderActive:0,
        scrollShowSearchKey: false,  //是否隐藏大搜索框
        sliderBarFixed:false,
        loading:true, //数据加载中
        ApplyList:[
          {
            app_NAME:"离校场景",
            app_URL: "http://ehall.xidian.edu.cn/rsfw/sys/xjglxt/index.do",
            icon:`${process.env.PICTURE_SERVE}/file?fileId=7f32b2d666ca48a0b1962f4c8fce18f6`
          }
        ], //搜索应用入口
        searchBar:['办事入口','服务事项','常见问题','政策新闻','猜你想看'],
        searchCell:[
          {
            title:'离校财务手续办理'
          },
          {
            title:'离校退宿办理及水电费补交'
          },
          {
            title:'离校前学生贷款清欠手续办理'
          },
          {
            title:'离校图书馆欠费欠书办理'
          },
          {
            title:'离校前医疗手续办理及欠费补交'
          },
        ],
        problem:[
          {
            title:'离校手续办理环节有先后顺序离校手续办理环节有先吗'
          },
          {
            title:'此处为办理过程中常见问题此处为办理过程中常见问题'
          },
          {
            title:'此处为办理过程中常见问题此处为办理过程中常见问题'
          },
          {
            title:'此处为办理过程中常见问题此处为办理过程中常见问题'
          },
          {
            title:'此处为办理过程中常见问题此处为办理过程中常见问题'
          },
          {
            title:'此处为办理过程中常见问题此处为办理过程中常见问题'
          },
        ],
        news:[
          {
          title:'离校手续办理环节有先后顺序离校手续办理环节有先吗'
          },
          {
            title:'此处为办理过程中常见问题此处为办理过程中常见问题'
          },
          {
            title:'此处为办理过程中常见问题此处为办理过程中常见问题'
          },
          {
            title:'此处为办理过程中常见问题此处为办理过程中常见问题'
          },
          {
            title:'此处为办理过程中常见问题此处为办理过程中常见问题'
          },
          {
            title:'此处为办理过程中常见问题此处为办理过程中常见问题'
          },],
        guess:[
          {
            title:'西安电子科技大学“职为你来”第二届模拟招聘大赛在G楼118报告厅拉开帷幕'
          },
          {
            title:'关于化为事业单位招聘2019年优秀应届毕业生'
          },
          {
            title:'关于引导2019届毕业生到国家重点单位和基层就业的通知'
          },
          {
            title:'就业中心举办“JOB启航计划”求职训练营活动'
          },
          {
            title:'西安电子科技大学2019年实习就业网络视频招聘会邀请函（后附企业名单）'
          }
        ]
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll);
      this.searchTerm();
      this.testMode();
    },
    watch: {
      '$route': function (to, from) {//本页面跳转
        // this.searchTerm();
        this.testMode();
      }
    },
    methods:{
      searchTerm(){ //查询搜索'
        this.ApplyList=[{
          app_NAME:"离校场景",
          app_URL: "http://ehall.xidian.edu.cn/rsfw/sys/xjglxt/index.do",
          icon:`${process.env.PICTURE_SERVE}/file?fileId=7f32b2d666ca48a0b1962f4c8fce18f6`
          },
          {
            app_NAME:"财务系统",
            app_URL: "http://ehall.xidian.edu.cn/rsfw/sys/xjglxt/index.do",
            icon:`${process.env.PICTURE_SERVE}/file?fileId=e82cad9a42dc4d03b20a07515101b81f`
          },
          {
            app_NAME:"图书系统",
            app_URL: "http://ehall.xidian.edu.cn/rsfw/sys/xjglxt/index.do",
            icon:`${process.env.PICTURE_SERVE}/file?fileId=0f48bc3b0a6243379e58a90097a838b8`
          },
          {
            app_NAME:"宿管系统",
            app_URL: "http://ehall.xidian.edu.cn/rsfw/sys/xjglxt/index.do",
            icon:`${process.env.PICTURE_SERVE}/file?fileId=eb3acd31f9914c948428d395bdf1e7d1`
          },
        ]
        this.loading=false
      },
      testMode(){

      },
      scrollShowSearch(key){  //传递出来是否滚动固定头部
        this.scrollShowSearchKey = key;
      },
      getQueryString(name) {  //获取地址栏参数
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]); return null;
      },
      handleScroll () { //鼠标滚动，楼层效果
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop>220){  //添加固定左边导航class
          this.sliderBarFixed = true
        }else{
          this.sliderBarFixed = false
        }
        let xd_jump = [];   //所有楼层的元素
        let xd_jump2 = [];  //所有楼层元素的高度
        xd_jump.push(document.querySelectorAll('.xd_jump'));
        for (let i=0;i<xd_jump[0].length;i++){
          xd_jump2.push(xd_jump[0][i].offsetTop+200)
        }
        for (let i=0;i<xd_jump2.length;i++){  //循环楼层高度判断此时的楼层
          if (scrollTop > xd_jump2[i]) {
            this.sliderActive= Math.max(i);
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .search{
    .searchAllBox{
      position: relative;
      margin-top: 40px;
      .searchBoxBar{
        display: inline-block;
        width: 140px;
        position: absolute;
        top: 0;
        left: 0;
        &.searchFixed{
          position: fixed;
          left: auto;
          top: 80px;
          z-index: 1;
        }
      }
      .searchBoxContent{
        float: right;
        width: 1072px;
        padding-left: 36px;
        border-left: 1px solid #e2e2e2;
      }
    }
    .tip{
      height: 56px;
      line-height: 56px;
      margin-top: 22px;
      padding-left: 14px;
      font-size: 15px;
      background-color: #f1f2f3;
      color: #071435;
      .reminder{
        /*color: #071435;*/
        font-size: 15px;
        font-weight: bold;
        margin-right: 16px;
      }
      .tipCont{
        color: #f13939;
      }
    }
  }

</style>
