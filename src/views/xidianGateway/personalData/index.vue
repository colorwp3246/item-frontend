<template>
  <div class="peoplespan">
    <xdAfterLandingOther :falsePage="false" otherTiTle="个人档案库"></xdAfterLandingOther>
    <!--<div class="clearfloat">-->
      <!--<div class="fl poa"><img src="@/assets/edge.png" alt="" @click="go4"></div>-->
      <!--<div class="fr por">-->
        <!--<img src="@/assets/rightPart.png" alt="">-->
        <!--<img src="@/assets/rightEnd.png" alt="" @click="go1" v-if="!state">-->
        <!--<img src="@/assets/rightEnd2.png" alt="" @click="go2" v-if="state">-->
        <!--<img src="@/assets/generateData.png" alt="" @click="go3">-->
      <!--</div>-->
    <!--</div>-->
    <div class="upPersonal main">
      <div class="portrait">
        <ul class="clearfloat">
          <li @click="go5"></li>
          <li @click="go6"></li>
        </ul>
      </div>
    </div>
    <div class="generalFile main" v-if="!state" @click="go1"></div>
    <div class="defineFile main" v-if="state" @click="go2"></div>
    <div class="foot main" @click="go3"></div>
    <sidebar></sidebar>
    <Footer></Footer>
    <personalData></personalData>
  </div>
</template>
<script>
  import xdAfterLandingOther from '../public/newHead'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  import personalData from './personalLeft'
  export default {
    data(){
      return{
        state:false
      }
    },
    components:{
      Footer,
      xdAfterLandingOther,
      sidebar,
      personalData
    },
    methods:{
      go1(){
        this.state=true
      },
      go2(){
        this.state=false
      },
      go3(){
        this.$router.push({path:'/generateData'})
      },
      go4(){
        this.$router.push({path:'/baseInfo'})
      },
      go5(){
        this.$router.push({path:'/portrait'})
      },
      go6(){
        this.$router.push({path:'/yearReport'})
      }
    }
  }
</script>
<style scoped lang="scss">
  .upPersonal{
    height:711px;
    margin: 20px auto;
    background:url("http://www.zq100.com/api/files/file?fileId=89b5cfa52b274959a1c6ac6ab28deb4b") no-repeat;
    position: relative;
    .goPage{
      position: absolute;
      left: 20px;
      top: 100px;
      width: 80px;
      height: 30px;
    }
    .portrait{
      position: absolute;
      left: 476px;
      top:14px;
      width: 180px;
      height: 40px;
      ul{
        li{
          width: 80px;
          height: 40px;
          margin-right: 10px;
          float: left;
        }
      }
    }
  }
  .generalFile{
    height:2800px;
    margin: 0 auto;
    background:url(http://www.zq100.com/api/files/file?fileId=79e5604bfc7748068c443dbc2c32e900) no-repeat;
    /*background-size: 100% 100%;*/
  }
  .foot{
    height:151px;
    margin: 0 auto;
    background:url("http://www.zq100.com/api/files/file?fileId=916505b8808a48cbaac8607db15cfce5") no-repeat;
    background-size: 100% 100%;
  }
  .defineFile{
    height:1428px;
    margin: 0 auto;
    background:url(http://www.zq100.com/api/files/file?fileId=5eefe666a33942bf8168efa2408e417a) no-repeat;
    /*background-size: 100% 100%;*/
  }
</style>
