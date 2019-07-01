<template>
  <div class="eventProgress">
    <AfterLandingOther :inputSearchShow="false" otherTiTle="办理进度查询"></AfterLandingOther>
    <xdBannerOther :bgImg="bgImg" @itemActive="activeRoute" :selectdie="false" title="办件进度查询"></xdBannerOther>
    <div class="methodOne main">
      <span class="stepOne">方法一：</span>
      <span class="entrySearch">进入用户中心查询</span>
      <a href="/personalSpace"><span class="entry">进入</span></a>
    </div>
    <div class="main methodTwo">
      <p class="methodTop">
        <span class="stepOne">方法一：</span>
        <span class="entrySearch">直接输入申报号·申报密码</span>
      </p>
      <div class="methodInput">
        <p><label>申报号：</label><input type="text"></p>
        <p><label>查询密码：</label><input type="text"></p>
        <p><button class="search" @click="searchprocess">查询</button></p>
      </div>
    </div>
    <!--脚部-->
    <sidebar></sidebar>
    <Footer></Footer>
  </div>
</template>
<script>
  import AfterLandingOther from '../public/AfterLandingOther'
  import xdBannerOther from '../public/BannerOther'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    data() {
      return {
        bgImg:`${process.env.PICTURE_SERVE}/file?fileId=b410b7b7980640c9b5b323e04bdbfdaf`,
      }
    },
    components: {
      AfterLandingOther,
      xdBannerOther,
      Footer,
      sidebar
    },
    methods:{
      searchprocess(){

      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@/styles/gatewayBase.scss";

  .eventProgress {
    .methodOne {
      margin-top: 40px;
      height: 80px;
      line-height: 80px;
      text-align: left;
      border-bottom: 1px dashed #6d6d6d;
      padding-left:340px;
    }

    .stepOne {
      color: $fontcolor7;
      font-size: $fontSize16;
    }

    .entrySearch {
      font-size: $fontSize16;
      color: $fontcolor8;
      margin-right: 24px;
    }

    .entry {
      font-size: 22px;
      color: $fontcolor2;
    }

    .methodTwo {
      margin-top: 40px;
      .methodTop{
        margin: 0;
        height: 20px;
        line-height: 20px;
        text-align: left;
        padding-left:340px;
      }
      .methodInput{
        width:400px;
        margin:0 auto;
        p {
          text-align: left;

          label {
            font-size: $fontSize14;
            color: $fontcolor2;
            width: 100px;
            display: inline-block;
            text-align: right;
            padding-right: 5px;
          }

          input {
            width:200px;
            padding:3px;
          }
          .search{width:200px;border:0px;height:35px;background:#4473a9;color:#fff;margin-left:100px;margin-top:10px;border-radius:3px;}
        }
      }
    }
  }
</style>
