<template>
  <div class="myIndex">
    <xdAfterLandingOther :falsePage="false" otherTiTle="统一智能总客服"></xdAfterLandingOther>
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

      }
    },
    components:{
      Footer,
      xdAfterLandingOther,
      sidebar
    },
    methods:{
      goListen(){
        this.$router.push('/listen')
      }
    }
  }
</script>
<style scoped lang="scss">
  .myIndex{
    width: 100%;
    height: 100%;
      .banner{
        position: relative;
        width:1920px;
        height:309px;
        margin: 0 auto;
        background-image: url("../../../assets/mySuggestionBanner.png");
        background-size: 100% 100%;
      }
      .IntelligenceBody{
        width: 1920px;
        height: 2154px;
        margin: 0 auto;
        background-image: url("../../../assets/mySuggestion.png");
        background-size: 100% 100%;
      }
  }
</style>
