<template>
  <div class="oneCard">
    <xdAfterLandingOther :falsePage="false"></xdAfterLandingOther>
    <div class="cardHead">
      <div class="back" @click="back"></div>
    </div>
    <div class="cardBody commonBody"  v-if="state===1">
      <ul class="clearfloat">
        <li @click="go1"></li>
        <li @click="go2"></li>
        <li @click="go3"></li>
      </ul>
    </div>
    <div class="cardBody1 commonBody"  v-if="state===2">
      <ul class="clearfloat">
        <li @click="go1"></li>
        <li @click="go2"></li>
        <li @click="go3"></li>
      </ul>
    </div>
    <div class="cardBody2 commonBody"  v-if="state===3">
      <ul class="clearfloat">
        <li @click="go1"></li>
        <li @click="go2"></li>
        <li @click="go3"></li>
      </ul>
    </div>
    <div class="footOne foot" v-if="state===1"></div>
    <div class="footTwo foot" v-if="state===2"></div>
    <div class="footTree foot" v-if="state===3"></div>
    <Footer></Footer>
    <sidebar></sidebar>
  </div>
</template>
<script>
  import xdAfterLandingOther from '../public/newHead'
  import  Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    data(){
      return{
          state:1
      }
    },
    components:{
      Footer,
      xdAfterLandingOther,
      sidebar
    },
    methods:{
      go1(){
        this.state=1
      },
      go2(){
        this.state=2
      },
      go3(){
        this.state=3
      },
      back(){
        this.$router.push({path:'/personalSpace'})
      },
    }
  }
</script>
<style scoped lang="scss">
  .oneCard{
    width: 100%;
    height: 100%;
    .cardHead{
      position: relative;
      top: 6px;
      width:1920px;
      height:592px;
      margin: 0 auto;
      background-image: url(http://www.zq100.com/api/files/file?fileId=8f1c1fbe7bde4a5880da51b32c9b3228);
      background-size: 100% 100%;
      .back{
        width:130px;
        height:40px;
        // background: red;
        position:absolute;
        left:350px;
        top:35px;
        cursor:pointer;
    }
    }
    .commonBody{
      width:1920px;
      height: 264px;
      margin: 0 auto;
      position: relative;
      background-size: 100% 100%;
      ul{
        position: absolute;
        top: 67px;
        left:363px;
        width: 100%;
        height: 100%;
        li{
          float: left;
          width:380px;
          height: 215px;
          margin-right: 30px;
        }
      }
    }
    .cardBody{
      background-image: url("http://www.zq100.com/api/files/file?fileId=822b5006c8074f449c0b7940af80a899");
    }
    .cardBody1{
      background-image: url("http://www.zq100.com/api/files/file?fileId=3fcbac99c7454648ad446ee55dbfe0d5");
    }
    .cardBody2{
      background-image: url("http://www.zq100.com/api/files/file?fileId=72c081e9f29f478a9493b05291f06bf6");
    }
    .foot{
      width:1920px;
      height:570px;
      margin: 0 auto;
      background-size: 100% 100%;
    }
    .footOne{
      height:570px;
      background-image: url("http://www.zq100.com/api/files/file?fileId=5536fe05b2a742b9a91af4efb8ba9e78");
    }
    .footTwo{
      height:940px;
      background-image: url("http://www.zq100.com/api/files/file?fileId=bbfca8b2db2348f5a68598bf8f38ba7f");
    }
    .footTree{
      height:960px;
      background-image: url("http://www.zq100.com/api/files/file?fileId=43fd1238b95a40f5a9bbaabab2e9f0b5");
    }
  }
</style>
