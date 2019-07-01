<template>
  <div class="portrait">
    <xdAfterLandingOther  otherTiTle="个人画像"  :falsePage="false"></xdAfterLandingOther>
    <div class="body">

    </div>
    <Footer></Footer>
    <sidebar></sidebar>
  </div>
</template>
<script>
  import xdAfterLandingOther from '../public/newHead'
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
<style lang="scss" scoped>
  .body{
    width: 1920px;
    height:3136px;
    margin: 0 auto;
    background: url(http://www.zq100.com/api/files/file?fileId=42f0d927420945369ab4cc0fc6cff952);
    background-size: 100% 100%;
  }
</style>
