<template>
  <div class="Recommend main">
    <ModuleTitle moduleTitle="相关推荐"></ModuleTitle>
    <img :src="leaveSchool" alt="">
    <div class="RecommendBox">
      <div class="RecommendTitle">相关服务入口</div>
      <div class="RecommendList">
        <div class="RecommendBlock" v-for="(item, index) in recommendList" :key="index" :style="{marginRight:(index+1)%4==0?'0px':'21px'}">
          <img :src="item.icon" alt="">
          <h2 class="RecText">{{item.fraction}}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  export default {
    name: "Recommend",
    components:{
      ModuleTitle
    },
    props:{
      recommendList:{
        type:Array
      }
    },
    data(){
      return{
        leaveSchool:`${process.env.PICTURE_SERVE}/file?fileId=51576d9680cd43908d53989a9de8bd44`,
        
      }
    },
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .Recommend{
    .RecommendTitle{
      font-size: 16px;
      color: $ModuleTitle;
      padding: 10px 0;
      font-weight: bold;
      border-bottom: $sliderBorder;
    }
    .RecommendList{
      margin-top: 26px;
      .RecommendBlock{
        background-color: $leaveFraction;
        width: 284px;
        height: 100px;
        display: inline-block;
        cursor: pointer;
        box-shadow: $boxShadowHover1;
        img{
          float: left;
          margin: 34px 0 0 62px;
        }
        .RecText{
          padding-left: 110px;
          color: $ModuleTitle;
          margin-top: 40px;
          font-size: 18px;
        }
        &:hover{
          box-shadow: $boxShadowHover;
          transition: $transition;
          background-color: $heardSearchBg;
        }
      }
    }
  }
</style>
