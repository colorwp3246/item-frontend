<template>
  <div class="baseInfo">
    <xdAfterLandingOther :falsePage="false" otherTiTle="个人信息"></xdAfterLandingOther>
    <div class="por main">
    </div>
    <Footer></Footer>
    <sidebar></sidebar>
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

      }
    },
    components:{
      Footer,
      xdAfterLandingOther,
      sidebar,
      personalData
    },
  }
</script>
<style scoped lang="scss">
  .por{
    height:930px;
    margin: 20px auto;
    background:url("http://www.zq100.com/api/files/file?fileId=cd3ff54553f44ee58e7e296cdeabec10") no-repeat;
    background-size: 100% 100%;
  }
</style>
