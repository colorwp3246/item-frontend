<template>
  <div class="eventServe">
    <!--头部-->
    <AfterLandingOther :inputSearchShow="true" ></AfterLandingOther>
    <!--头部下面得banner-->
    <xdBannerOther :tab="true" :tabNav="tabNav" :bgImg="bgImg" @itemActive="activeRoute"></xdBannerOther>
    <div class="main">
      <ModuleTitle moduleTitle="我的账户"></ModuleTitle>
      <div class="content h01">

      </div>
      <UserTab></UserTab>
    </div>
    <!--脚部-->
    <Footer></Footer>
    <sidebar></sidebar>
  </div>
</template>
<script>
  import AfterLandingOther from '../public/AfterLandingOther'
  import xdBannerOther from './BannerOther'
  import ModuleTitle from '../public/ModuleTitle'
  import UserTab from './UserTab'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    data(){
      return{
        bgImg:`${process.env.PICTURE_SERVE}/file?fileId=7f8911c4e0124d3cbe967aa2deea624e`,
        tabStatus:0,
      }
    },
    components:{
      AfterLandingOther,
      xdBannerOther,
      ModuleTitle,
      UserTab,
      Footer,
      sidebar
    },
    methods:{
      activeRoute(data){
        this.tabStatus=data
      }
    }
  }
</script>
<style lang="scss">
  .content{
    position: relative;
  }
  .h01{
    height:310px;margin-top:10px;
    background:url("http://www.zq100.com/api/files/file?fileId=d307ba4d54a64d6688b00ff324b99bc1") no-repeat;
  }
  .h02{
    height: 500px;
    margin-top: 10px;
    background:url("http://www.zq100.com/api/files/file?fileId=15819cee5b0742df8e351a4208c4dd7d") no-repeat;
  }
  .h03{
    height: 660px;
    margin-top: 10px;
    background:url("http://www.zq100.com/api/files/file?fileId=3632da6574f84ff1b33379df24ee5a62") no-repeat;
  }
</style>
