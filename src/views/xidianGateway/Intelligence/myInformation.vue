<template>
  <div class="myInformation">
    <xdAfterLandingOther otherTiTle="统一智能总客服" :inputSearchShow="true" :userinfo="true" :falsePage="false"></xdAfterLandingOther>
    <!--banner-->
    
    <div class="banner">
      <BannerOther :bgImg="bgImg" title="" :selectdie="false"></BannerOther>
        <div class="message">
            <span class="iconBox">
                <img :src="lottie" alt="">
            </span>
            <div class="detailsFirst">
                <h2>Lormen</h2>
                <span class="status">教师</span>
                <span class="statusNumber">信息化建设处</span>
            </div>
        </div>
        <div class="shuju">
            
            <div class="details" v-for="(item, index) in myDataInf" :key="index">
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


    <xdmySuggestion></xdmySuggestion>
    <Footer></Footer>
    <sidebar></sidebar>
  </div>
</template>
<script>
  import xdAfterLandingOther from '../public/AfterLandingOther'
  import BannerOther from '../public/BannerOther'
  import xdMainData from '../index/data/MainData'
  import xdmySuggestion from './mySuggestion/mySuggestion'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    data(){
      return{
        lottie:require('@/assets/lottie.png'),
        bgImg:require('@/assets/mySuggestionBanner.png'),
        people:`${process.env.PICTURE_SERVE}/file?fileId=39b93c46555344d7bcbbd18b7c6aff52`,
        myDataInf:[
          {
            shuzi: '11',
            shuxing: '条咨询',
          },
          {
            shuzi: '13',
            shuxing: '条投诉',
          },
          {
            shuzi: '11',
            shuxing: '条建议',
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
      xdmySuggestion,
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
  .myInformation{
    width: 100%;
    height: 100%;
    .banner{
      position: relative;
      margin: 0 auto;
      // background-image: url("../../../assets/mySuggestionBanner.png");
      background-size: 100% 100%;
        .message{
            position: absolute;
            // display: inline-block;
            // background: red;
            margin-left:90px;
            width:1200px;
            height:60px;
            top: 35px;
            left: 200px;
            color:white;
            .iconBox{
                    width: 80px;
                    height: 80px;
                    display: inline-block;
                    border-radius: 50%;
                    // background-color: $infIconBg;
                    margin: 0 0 20 0;
                }
                img{
                    margin: 10px 10px 0 0 ;
                    width: 80px;
                    height: 75px;
                }
                .detailsFirst{
                    display:inline-block;
                    margin-top:10px;
                    margin-left:15px;
                    vertical-align: top;
                    h2{
                        margin-bottom:20px;
                      
                        font-size:14px;
                        // color:#666666;
                        // color: $infTitleColor;
                    }
                    .status{
                        display:inline;
                        white-space:nowrap;
                        font-size:10px;
                        // color:#666666;
                    }
                    .statusNumber{
                        display:inline;
                        white-space:nowrap;
                        margin-left:10px;
                        font-size:10px;
                    }
                }
        }
        .shuju{
            position: absolute;
            // display: inline-block;
            // background: red;
            margin-left:60px;
            width:800px;
            height:60px;
            top: 138px;
            left: 220px;
            color:white;
            .details{
                // position: absolute;
                display: inline-block;
                // background: red;
                margin-left:20px;
                width:150px;
                height:60px;
                // top: 200px;
                // left: 340px;
                color:white;
                .left{
                display:inline-block;
                margin:0 0 0 0;
                margin-top:10px;
                .shuzi{
                    // display:inline;
                    margin-top:0 0 0 0;
                    height:45px;
                    width:auto;
                    // background:blue;
                    font-size:28px;
                    font-weight:800;
                }
                }
                .right{
                display:inline-block;
                margin:0 0 0 0;
                .shuxing{
                    display:block;
                    font-size:10px;
                    // margin-bottom:7px;
                }
                .total{
                    display:block;
                    font-size:16px;
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
