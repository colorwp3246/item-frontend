<template>
  <div class="electricity">
    <xdAfterLandingOther otherTiTle="关于聆听" :inputSearchShow="true" :userinfo="true" :falsePage="false"></xdAfterLandingOther>
    <div class="banner">
      <div class="nav clearfloat">
        <ul>
          <li v-for="(item,index) in arr" :key="index" @click="go(index)" :class="{liborder:index===state}"><img :src="people" alt="" style="position:relative;top:7px;" v-if="index===arr.length-1">{{item}}</li>
        </ul>
      </div>
      <div class="btn">
        <button class="Consultation" @click="consult">建议</button>
        <button class="myConsultation" @click="myconsult">我的建议</button>
      </div>
    </div>
    <div class="body" @click="goListenSearch"></div>
    <Footer></Footer>
    <sidebar></sidebar>
  </div>
</template>
<script>
  import xdAfterLandingOther from '../public/AfterLandingOther'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    data(){
      return{
        people:`${process.env.PICTURE_SERVE}/file?fileId=39b93c46555344d7bcbbd18b7c6aff52`,
        arr:[
          "客服知识库",
          "智能小电",
          "关于聆听",
          "投诉",
          "个人主页"
        ],
        state:2
      }
    },
    components:{
      Footer,
      xdAfterLandingOther,
      sidebar
    },
    methods:{
      go(ind) {
        this.state = ind
        if (ind === 1) {
          this.$router.push({path: '/electricity'})
        } else if (ind === 2) {
          this.$router.push({path: '/listen'})
        } else if (ind === 4) {
          this.$router.push({path: '/myIndex'})
        }else if (ind === 0) {
          this.$router.push({path: '/Intelligence'})
        }
      },
      consult(){
        this.$router.push({path:'/suggest'})
      },
      myconsult(){
        this.$router.push({path:'/myIndex'})
      },
      goListenSearch(){
        this.$router.push({path:'/allListen'})
      }
    }
  }
</script>
<style scoped lang="scss">
  .electricity{
    width: 100%;
    height: 100%;
    .banner{
      position: relative;
      width:1920px;
      height:310px;
      margin: 0 auto;
      background-image: url("http://www.zq100.com/api/files/file?fileId=0848154ce6454127bb704bfd8f883d9e");
      background-size: 100% 100%;
      &:hover{
        cursor: pointer;
      }
      .nav{
        position: absolute;
        left: 334px;
        top: 1px;
        width:588px;
        height: 52px;
        border-radius: 5px;
        ul{
          width: 100%;
          height: 100%;
          li{
            height:50px;
            line-height: 50px;
            margin-left: 30px;
            float: left;
            font-size: 16px;
            color:#fff;
            &:hover{
              cursor: pointer;
            }
          }
          .liborder{
            border-bottom: 2.5px solid #B9FEFB;
          }
        }
      }
      .btn{
        position: absolute;
        left: 660px;
        bottom: 19px;
        button{
          width: 162px;
          height: 43px;
          border:none;
          outline: none;
          &:hover{
            cursor: pointer;
          }
        }
        .Consultation{
          margin-right: 22px;
          background-color: #00C2DE;
          color:#fff;
        }
        .myConsultation{
          background-color: #4650D2;
          border:1px solid #fff;
          color:#fff;
        }
      }
    }
    .body{
      width: 1920px;
      height: 1414px;
      margin: 0 auto;
      background-image: url('http://www.zq100.com/api/files/file?fileId=cfcc50e5035440daa3c2493442219867');
      background-size: 100% 100%;
    }
  }
</style>
