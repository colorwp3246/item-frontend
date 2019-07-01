<template>
  <div class="eventServe">
    <!--头部-->
    <AfterLandingOther :inputSearchShow="true" falsePage="false"></AfterLandingOther>
    <!--头部下面得banner-->
    <xdBannerOther :tab="true" :tabNav="tabNav" :bgImg="bgImg" @itemActive="activeRoute"></xdBannerOther>
    <div class="box">
      <div class="hottopic"></div>
    </div>
    <!--脚部-->
    <sidebar></sidebar>
    <Footer></Footer>
  </div>
</template>
<script>
  import AfterLandingOther from '../public/AfterLandingOther'
  import xdBannerOther from './BannerOther'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    data(){
      return{
        bgImg:`${process.env.PICTURE_SERVE}/file?fileId=92602a7485f147cfb47707746170078e`,
        tabStatus:0,
      }
    },
    components:{
      AfterLandingOther,
      xdBannerOther,
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
  .box{
    background: #f7f7f7;
    padding:50px 0;
  }
  .hottopic{
    width:1206px;
    height:1388px;
    margin:0 auto;
    background:url("http://www.zq100.com/api/files/file?fileId=06bb428e18e94c9abe33b93b60c03d3b") no-repeat;
  }
</style>
