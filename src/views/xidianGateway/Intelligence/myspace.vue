<template>
  <div class="myspace">
    <xdAfterLandingOther :falsePage="false" otherTiTle="智能客服"></xdAfterLandingOther>
    <div class="myspace"></div>
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
    methods:{

    }
  }
</script>
<style scoped lang="scss">
  .myspace{
    width: 100%;
    height: 100%;
    .myspace{
      position: relative;
      top: 7px;
      width: 1920px;
      height: 950px;
      margin: 0 auto;
      background-image: url("http://www.zq100.com/api/files/file?fileId=05b2309a92504b21905f29c5e06fae6f");
      background-size: 100% 100%;
    }
  }
</style>
