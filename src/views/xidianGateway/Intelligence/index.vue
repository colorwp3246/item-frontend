<template>
  <div class="Intelligence">
    <!--<div class="IntelligenceHead">-->
      <!--&lt;!&ndash;<img src="@/assets/IntelligenceHead.png" alt="">&ndash;&gt;-->
    <!--</div>-->
    <xdAfterLandingOther otherTiTle="统一智能总客服" :inputSearchShow="true" :userinfo="true" :falsePage="false"></xdAfterLandingOther>
    <!--banner-->
    <!-- <BannerOther :bgImg="bgImg" title="统一智能总客服" :selectdie="false"></BannerOther> -->
    <div class="banner">
      <!--<img src="@/assets/IntelligenceBanner.png" alt="">-->
      <!-- <div class="nav clearfloat">
        <ul>
          <li v-for="(item,index) in arr" :key="index" @click="go(index)" :class="{liborder:index===state}"><img :src="people" alt="" style="position:relative;top:7px;" v-if="index===arr.length-1">{{item}}</li>
        </ul>
      </div> -->
    </div>
    <div class="IntelligenceBody">
      <!--<img src="@/assets/IntelligenceBody.png" alt="">-->
      <div class="click1" @click="goo"></div>
    </div>
    <Footer></Footer>
    <sidebar></sidebar>
  </div>
</template>
<script>
  import xdAfterLandingOther from '../public/AfterLandingOther'
  // import BannerOther from '../public/BannerOther'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    data(){
      return{
        bgImg:require('@/assets/kfBanner.png'),
        people:`${process.env.PICTURE_SERVE}/file?fileId=39b93c46555344d7bcbbd18b7c6aff52`,
        // arr:[
        //   "客服知识库",
        //   "智能小电",
        //   "关于聆听",
        //   "投诉",
        //   "个人主页"
        // ],
        state:0
      }
    },
    components:{
      Footer,
      xdAfterLandingOther,
      // BannerOther,
      sidebar
    },
    methods:{
      go(ind){
        this.state=ind
        if(ind===1){
          this.$router.push({path:'/electricity'})
        }else if(ind===2){
          this.$router.push({path:'/listen'})
        }else if(ind===4){
          this.$router.push({path:'/myIndex'})
        }
      },
      goo(){
        this.$router.push('/myIndex')
      }
    }
  }
</script>
<style scoped lang="scss">
  .Intelligence{
    width: 100%;
    height: 100%;
    .banner{
      position: relative;
      width:1920px;
      height:309px;
      margin: 0 auto;
      background-image: url("../../../assets/kfBanner.png");
      background-size: 100% 100%;
      .nav{
        position: absolute;
        left: 334px;
        top: 0;
        width:588px;
        height: 51px;
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
    }
    .IntelligenceBody{
      width: 1920px;
      height:2732px;
      margin: 0 auto;
      background-image: url("../../../assets/IntelligenceBody.png");
      background-size: 100% 100%;
      .click1{
        width:120px;
        height:36px;
        // background: red;
        position:absolute;
        left:1440px;
        top:1730px;
        cursor:pointer;
    }
    }
  }

</style>
