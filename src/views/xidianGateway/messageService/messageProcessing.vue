<template>
  <div class="eventServe">
    <!--头部-->
    <AfterLandingOther :inputSearchShow="true"></AfterLandingOther>
    <!--头部下面得banner-->
    <xdBannerOther :tab="true" :tabNav="tabNav" :bgImg="bgImg" @itemActive="activeRoute"></xdBannerOther>
    <div class="main">
      <ModuleTitle moduleTitle="我的进度"></ModuleTitle>
      <div class="content h01">

      </div>
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
    height:600px;margin-top:10px;
    background:url(http://www.zq100.com/api/files/file?fileId=509e0313124e4c93844526f0b1c732aa) no-repeat;
  }
</style>
