<template>
  <div class="leaveSchoolInformation main">
    <div class="recomHeard">
      <ModuleTitle moduleTitle="个人信息"></ModuleTitle>
      <!--<span class="tip clear">
        <img src="../../../../../assets/seaceTime.png" alt="">
        <span>
          办理时长<em>6</em>天
        </span>
      </span>-->
    </div>
    <div class="InformationBox clear">
      <div class="myPhoto">
        <img :src="myPhoto" alt="">
      </div>
      <div class="InformationItem">
        <div class="InformationCell clear" v-for="(item, index) in InformationList" :key="index">
          <span :class="index%2 ==0?'Information-key':'Information-value'">{{item}}</span>
        </div>
      </div>
    </div>
    <div class="InformationBox clear ">
      <div class="InformationBlock" v-for="(item, index) in InformationBlock" :key="index" :style="{marginRight:(index+1)%4==0?'0px':'21px'}">
        <img :src="item.icon" alt="">
        <h2 class="infoText">{{item.fraction}}</h2>
        <div class="infoText">{{item.item}}</div>
        <p class="infoText">查看更多></p>
      </div>
    </div>
  </div>
</template>

<script>
  import ModuleTitle from '../../../../public/ModuleTitle'
  export default {
    name: "LeaveSchoolInformation",
    components:{
      ModuleTitle
    },
    props:{
      InformationList:{
        type:Array
      },
      InformationBlock:{
        type:Array
      }
    },
    data(){
      return{
        myPhoto:`${process.env.PICTURE_SERVE}/file?fileId=e515eda9986a43b18923a359d8b58519`,
      }
    },
    created(){
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.leaveSchoolInformation{
  .recomHeard {
    position: relative;
    .tip {
      position: absolute;
      right: 0;
      bottom: 9px;

      color: $ModuleTitle;
      img{
        float: left;
        margin-right: 4px;
      }
      span{
        font-size: 16px;
        float: left;
        margin-top: 2px;
        em{
          color: $xd-red;
          margin: 0 2px;
          font-style: normal;
        }
      }
    }
  }
  .InformationBox{
    padding-top: 22px;
    position: relative;
    .myPhoto{
      width: 160px;
      display: inline-block;
      float: left;
    }
    .InformationItem{
      width: 1020px;
      display: inline-block;
      float: right;
      .InformationCell{
        display: inline-block;
        float: left;
        height: 46px;
        line-height: 46px;
        .Information-key{
          display: inline-block;
          width: 120px;
          font-size: 15px;
          font-weight: bold;
        }
        .Information-value {
          display: inline-block;
          width: 220px;
          font-size: 16px;
        }
      }
    }
    .InformationBlock{
      background-color: $leaveFraction;
      width: 284px;
      height: 100px;
      display: inline-block;
      cursor: pointer;
      box-shadow: $boxShadowHover1;
      img{
        float: left;
        margin: 24px 0 0 50px;
      }
      .infoText{
        padding-left: 124px;
        color: $ModuleTitle;
      }
      h2.infoText{
        margin: 0;
        margin-top: 16px;
        font-size: 22px;
      }
      div.infoText{
        font-size: 14px;
        margin: 2px 0;
      }
      p.infoText{
        color: $leaveMoreColor;
        font-size: 12px;
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
