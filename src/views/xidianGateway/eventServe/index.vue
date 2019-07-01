<template>
  <div class="eventServe">
    <!--头部-->
    <AfterLandingOther :inputSearchShow="true"></AfterLandingOther>
    <!--头部下面得banner-->
    <xdBannerOther :tab="true" :tabNav="tabNav" :bgImg="bgImg" @itemActive="activeRoute"></xdBannerOther>
    <!--三个tab的切换-->
    <!--<router-view></router-view>-->
    <serveScene v-if="tabStatus===0"></serveScene>
    <allObject v-if="tabStatus===1"></allObject>
    <all-item v-if="tabStatus===2"></all-item>
    <sidebar></sidebar>
    <!--脚部-->
    <Footer></Footer>
  </div>
</template>
<script>
  import AfterLandingOther from '../public/AfterLandingOther'
  import xdBannerOther from '../public/BannerOther'
  import serveScene from './serveScene'
  import allObject from './allObject'
  import allItem from './allItem'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    data(){
      return{
        bgImg:`${process.env.PICTURE_SERVE}/file?fileId=b410b7b7980640c9b5b323e04bdbfdaf`,
        tabNav: [
          {id: 1, title: '服务场景'},
          {id: 2, title: '全部应用'},
          {id: 3, title: '全部事项'},
        ],
        tabStatus:0,
      }
    },
    components:{
      AfterLandingOther,
      xdBannerOther,
      serveScene,
      allObject,
      allItem,
      Footer,
      sidebar
    },
    methods:{
      activeRoute(data){
        this.tabStatus=data
        // if(data===0){
        //   this.$router.push({path:"/EventServe/serveScene"})
        // }else if(data===1){
        //   this.$router.push({path:"/EventServe/allObject"})
        // }else if(data===2){
        //   this.$router.push({path:"/EventServe/allItem"})
        // }
      }
    }
  }
</script>
<style lang="scss">

</style>
