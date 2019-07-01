<template>
    <div class="Center">
      <!--头部-->
      <xdAfterLandingOther otherTiTle="个人空间" :inputSearchShow="true" :userinfo="true"></xdAfterLandingOther>

      <!--个人信息-->
      <xdInformation class="sliderTo"></xdInformation>

      <!--我的任务-->
      <xdTask class="sliderTo"></xdTask>

      <!--我的数据-->
      <xdCenterData class="sliderTo"></xdCenterData>

      <!--相关推荐-->
      <xdRecommend class="sliderTo"></xdRecommend>
      <Footer></Footer>
    </div>
</template>

<script>
  import xdAfterLandingOther from '../public/AfterLandingOther'
  import xdInformation from './Information/Information'
  import xdCenterData from './centerData/CenterData'
  import xdTask from './task/Task'
  import xdRecommend from './recommend/Recommend'
  import Footer from '../public/Footer'
  export default {
    name: "PersonalCenter",
    components: {
      xdAfterLandingOther,
      xdInformation,
      xdCenterData,
      xdTask,
      xdRecommend,
      Footer
    },
    computed:{
      urlQuery(){ //监控url参数变化
        return this.$route.query.key;
      }
    },
    mounted(){
      this.sliderTo(this.$route.query.key);//页面初始化跳转到相应位置
    },
    methods:{
      sliderTo(index){  //点击传参跳转到相应位置
        let jump = document.querySelectorAll('.sliderTo');
        let total = index==0?0:jump[index].offsetTop-40;
        let distance = document.documentElement.scrollTop || document.body.scrollTop;// 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 6;
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total
          step = newTotal / 50
          smoothUp()
        }
        function smoothDown () {
          if (distance < total) {
            distance += step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
        }
      }
    },
    watch:{
      urlQuery(key){  //监控url变化
        this.sliderTo(key)
      }
    }
  }
</script>

<style scoped lang="scss">


</style>
