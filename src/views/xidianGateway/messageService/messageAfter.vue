<template>
  <div class="eventServe">
    <!--头部-->
    <AfterLandingOther :inputSearchShow="true"></AfterLandingOther>
    <!--头部下面得banner-->
    <xdBannerOther :tab="true" :tabNav="tabNav" :bgImg="bgImg" @itemActive="activeRoute"></xdBannerOther>
    <div class="main">
      <div class="content h01">
        <a href="/messageProcessing" style="display:block;width:100%;height:100%;"></a>
      </div>
      <ModuleTitle moduleTitle="信息服务"></ModuleTitle>
      <div class="content h02">
         <h1 class="title"></h1>
         <ul class="items clearfix">
           <li>
             <a href="/messageCharging">&nbsp;</a>
           </li>

         </ul>
        <h1 class="title"></h1>
        <ul class="items clearfix">

        </ul>
        <h1 class="title"></h1>
        <ul class="items clearfix">

        </ul>
        <h1 class="title"></h1>
        <ul class="items clearfix">

        </ul>
      </div>
      <ModuleTitle moduleTitle="数据分析"></ModuleTitle>
      <div class="content h03">

      </div>
      <ModuleTitle moduleTitle="相关推荐"></ModuleTitle>
      <div class="content h04">

      </div>
    </div>
    <!--脚部-->
    <sidebar></sidebar>
    <Footer></Footer>
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
        // after01:,
        // after02:,
        // after03:,
        // after04:,
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
    height:250px;margin-top:10px;
    background:url("http://www.zq100.com/api/files/file?fileId=20153d53f7574f73b419ba967d94d0bf") no-repeat;
  }
  .h02{
    height: 1075px;
    margin-top: 10px;
    background:url("http://www.zq100.com/api/files/file?fileId=af036a818ad04394886b8f2c76dc11e9") no-repeat;
  }
  .h03{
    height:840px;
    margin-top: 10px;
    background:url("http://www.zq100.com/api/files/file?fileId=21c3eb6ae57e4844ae632c794b09c220") no-repeat;
  }
  .h04{
    height:500px;
    background:url("http://www.zq100.com/api/files/file?fileId=bfac46a738844406a18f1b5e0ea2b804") no-repeat;
  }
  .title{padding-top:45px;}
  .items{
    li{
      float: left;
      width: 400px;
      height: 82px;
      //background: green;
      padding: 10px;
      a{
        display:block;width:100%;height:100%;//background:hotpink;
      }
    }
  }

</style>
