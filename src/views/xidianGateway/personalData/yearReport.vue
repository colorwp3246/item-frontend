<template>
  <div class="portrait">
    <xdAfterLandingOther  otherTiTle="个人年报" :falsePage="false"></xdAfterLandingOther>
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
    width: 1200px;
    height:1528px;
    margin: 20px auto;
    background: url('http://www.zq100.com/api/files/file?fileId=9ad55349600e4a0f8fae048ef689e2ef');
    background-size: 100% 100%;
  }
</style>
