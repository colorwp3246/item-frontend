<template>
  <div class="eleName">
    <xdAfterLandingOther :falsePage="false" otherTiTle="我的签名"></xdAfterLandingOther>
    <div class="body"></div>
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
  }
</script>
<style scoped lang="scss">
  .eleName{
    .body{
      width: 1920px;
      height: 1000px;
      margin:0 auto;
      background:url('http://www.zq100.com/api/files/file?fileId=cca5f98313e745e79cecd46ee8d740b6');
    }
  }
</style>
