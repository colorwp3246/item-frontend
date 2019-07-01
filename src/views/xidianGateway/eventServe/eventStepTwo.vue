<template>
  <div>
    <AfterLandingOther :inputSearchShow="false" otherTiTle=""></AfterLandingOther>
    <!--<div class="main">-->
      <!--<div class="menu_position">当前位置：首页 > 网上申办 > <span>申报信息</span></div>-->
      <!--<div>-->

      <!--</div>-->
    <!--</div>-->

    <!--&lt;!&ndash;脚部&ndash;&gt;-->
    <div class="body">
      <div  @click="model" style="position: absolute;left: 39%;top: 84%;width: 113px;height: 41px;cursor:pointer;"></div>
    </div>
    <div class="btn" @click="go"></div>
    <sidebar></sidebar>
    <Footer></Footer>
    <!--<img src="@/assets/head.png" alt="">-->
    <!--<img src="@/assets/body2.png" alt="" @click="go">-->
  </div>
</template>
<script>
  import AfterLandingOther from '../public/AfterLandingOther'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    data() {
      return {
        state:false
      }
    },
    components: {
      AfterLandingOther,
      Footer,
      sidebar
    },
    methods: {
      searchprocess() {

      },
      go() {
        if (this.state === false) {
          this.$router.push({path: '/eventStepThree'})
          this.state = true
        } else if (this.state === true) {
          this.$router.push({path: '/'})
          this.state = false
        }
      },
      model(){
        this.$router.push({path: '/modelPage'})
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
    height:1218px;
    margin: 0 auto;
    background:url("http://www.zq100.com/api/files/file?fileId=1d2c7047a0c74371a9a4bc98363c02cc") no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: 7px;
  }
  .btn{
    width: 1920px;
    height:194px;
    margin: 0 auto;
    background:url("../../../assets/bodyBtn.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
</style>
