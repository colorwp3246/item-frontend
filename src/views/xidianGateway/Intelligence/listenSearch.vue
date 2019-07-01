<template>
  <div class="Intelligence">
    <!--<div class="IntelligenceHead">-->
    <!--&lt;!&ndash;<img src="@/assets/IntelligenceHead.png" alt="">&ndash;&gt;-->
    <!--</div>-->
    <xdAfterLandingOther otherTiTle="智能客服" :inputSearchShow="true" :userinfo="true" :falsePage="false"></xdAfterLandingOther>
    <div class="banner">

    </div>
    <div class="IntelligenceBody">
    </div>
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
        arr:[
          "客服知识库",
          "智能小电",
          "关于聆听",
          "投诉",
          "个人主页"
        ],
        state:0
      }
    },
    components:{
      Footer,
      xdAfterLandingOther,
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
      height:310px;
      margin: 0 auto;
      background-image: url("http://www.zq100.com/api/files/file?fileId=c6a78acc87764f5fbcd4ef72030ea5be");
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
          }
          .liborder{
            border-bottom: 2.5px solid #B9FEFB;
          }
        }
      }
    }
    .IntelligenceBody{
      width: 1920px;
      height:1791px;
      margin: 0 auto;
      background-image: url(http://www.zq100.com/api/files/file?fileId=9b7d3c71c7924f7eb2f8c9c9ba497e28);
      background-size: 100% 100%;
    }
  }

</style>
