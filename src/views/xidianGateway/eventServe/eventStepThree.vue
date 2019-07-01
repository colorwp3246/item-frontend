<template>
  <div>
    <AfterLandingOther :inputSearchShow="false" otherTiTle=""></AfterLandingOther>
    <!--<div class="main">-->
      <!--<div class="menu_position">当前位置：首页 > 网上申办 > <span>申报告知</span></div>-->
      <!--<div>-->

      <!--</div>-->
    <!--</div>-->

    <!--&lt;!&ndash;脚部&ndash;&gt;-->
    <div class="body"></div>
    <sidebar></sidebar>
    <Footer></Footer>
    <!--<img src="@/assets/head.png" alt="">-->
    <!--<img src="@/assets/body3.png" alt="" @click="go">-->
  </div>
</template>
<script>
  import AfterLandingOther from '../public/AfterLandingOther'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    data() {
      return {

      }
    },
    components: {
      AfterLandingOther,
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
  .menu_position{
    margin-top:30px;
    span{color:#1f73cf;}
  }
  .title{
    margin-top:60px;
    border-bottom:dashed 1px #ccc;
    padding-bottom:20px;
    span,label{font-size:20px;color:#666;}
    .ellipsis{
      display: inline-block;
      width: 620px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
    }
  }
  .content{
    padding:70px;
    .list{
      margin-bottom:30px;
      dt{float:left;width:200px;text-align:right;padding-right:30px;}
      dd{float:left;width:80%;text-align:left;margin:0;}
      .message{
        width:650px;height:180px;
        resize: none;
        padding:10px;
      }
      .button{padding-left:100px;}
      .btn{
        width:200px;border:0px;height:35px;background:#4473a9;color:#fff;margin-left:10px;border-radius:3px;display:inline-block;
      }
    }
  }
  .w40{
    width:40%;
  }
  .w60{
    width:60%;
  }
  .body{
    width: 1920px;
    height:1216px;
    margin: 0 auto;
    background:url("http://www.zq100.com/api/files/file?fileId=c2625620cd944e6081d1bb775a01014e") no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: 7px;
  }
</style>
