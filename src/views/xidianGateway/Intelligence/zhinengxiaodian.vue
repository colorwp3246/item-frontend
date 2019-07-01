<template>
  <div class="Intelligence">
    <xdAfterLandingOther otherTiTle="统一智能总客服" :inputSearchShow="true" :userinfo="true" :falsePage="false"></xdAfterLandingOther>
    <!--banner-->
    
    <div class="banner">
      <BannerOther :bgImg="bgImg" title="" :selectdie="false"></BannerOther>
      <!--<img src="@/assets/IntelligenceBanner.png" alt="">-->
      <!-- <div class="nav clearfloat">
        <ul>
          <li v-for="(item,index) in arr" :key="index" @click="go(index)" :class="{liborder:index===state}"><img :src="people" alt="" style="position:relative;top:7px;" v-if="index===arr.length-1">{{item}}</li>
        </ul>
      </div> -->
      <div class="title">
        <h1>统一智能总客服</h1>
      </div>
      <div class="shuju">
        <div class="details" v-for="(item, index) in myDataInf" :key="index">
          <p class="tubiao">
            <img class="tupian" :src="item.icon" alt="">
          </p>
          <p class="left">
            <span class="shuzi">{{item.shuzi}}</span>
          </p>
          <p class="right">
            <span class="shuxing">{{item.shuxing}}</span>
            <span class="total">{{item.total}}</span>
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="IntelligenceBody"> -->
      <!--<img src="@/assets/IntelligenceBody.png" alt="">-->
      <div class="click1" @click="goo"></div>
          <!--数据展示-->
        
    <!-- </div> -->
    <xdMainData></xdMainData>
    <xdmyRecord></xdmyRecord>
    <Footer></Footer>
    <sidebar></sidebar>
  </div>
</template>
<script>
  import xdAfterLandingOther from '../public/AfterLandingOther'
  import BannerOther from '../public/BannerOther'
  import xdMainData from '../index/data/MainData'
  import xdmyRecord from './myRecord/myRecord'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    data(){
      return{
        bgImg:require('@/assets/kfBanner.png'),
        people:`${process.env.PICTURE_SERVE}/file?fileId=39b93c46555344d7bcbbd18b7c6aff52`,
        myDataInf:[
          {
            icon: require('@/assets/xuanguang.png'),
            shuzi: '34568',
            shuxing: '个咨询',
            total: '累计服务',
            path:""
          },
          {
            icon: require('@/assets/xuanguang.png'),
            shuzi: '13582',
            shuxing: '条投诉',
            total: '累计已受理',
            path:""
          },
          {
            icon: require('@/assets/xuanguang.png'),
            shuzi: '11237',
            shuxing: '条建议',
            total: '累计已实现',
            path:""
          },
        ],
        state:0
      }
    },
    components:{
      Footer,
      BannerOther,
      xdAfterLandingOther,
      xdMainData,
      xdmyRecord,
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
      // width:1920px;
      // height:309px;
      margin: 0 auto;
      // background-image: url("../../../assets/kfBanner.png");
      background-size: 100% 100%;
        h1{
          margin:0 0 0 0;
          color:white; 
          font-size:28px;
          font-weight:400;
          letter-spacing:6px;
          position: absolute;
          left:444px;
          top:48.8px;
        }
        .shuju{
          position: absolute;
        // display: inline-block;
        // background: red;
          margin-left:100px;
          width:1200px;
          height:60px;
          top: 133px;
          left: 160px;
          color:white;
      .details{
        display: inline-block;
        // margin-left:20px;
        width:200px;
        height:60px;
        color:white;
        .tubiao{
          display:inline-block;
          margin:0 0 0 0;
          height:37px;
          width:33px;
          // background:blue;
          .tupian{
            height:40px;
            width:33px;
          }
        }
        .left{
          display:inline-block;
          vertical-align:top;
          margin:5px 0 0 0;
          // margin-top:10px;
          .shuzi{
            display:block;
            // margin-top:-10px 0 0 0;
            // padding:0 0 0 0;
            // height:auto;
            // width:auto;
            // background:blue;
            font-size:28px;
            // font-weight:800;
          }
        }
        .right{
          display:inline-block;
          vertical-align:top;
          margin:5px 0 0 0;
          .shuxing{
            display:block;
            font-size:5px;
            // margin-bottom:7px;
          }
          .total{
            display:block;
            font-size:5px;
            margin-top:5px;
          }
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
