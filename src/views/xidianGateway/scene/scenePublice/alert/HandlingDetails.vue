<template>
  <div class="HandlingDetails" v-if="alertList">

    <!--基本介绍-->
    <AlertTitle class="HandlingDetails-title first" :alertTitle="alertList.baseInfo[0].title"></AlertTitle>
    <div class="alertText" v-for="(item, index) in alertList.baseInfo[0].describe">{{item}}</div>

    <!--办理事项-->
    <AlertTitle class="HandlingDetails-title" :alertTitle="alertList.matter[0].title"></AlertTitle>
    <div class="alertText" v-for="(value, index) in alertList.matter[0].items">
      {{index+1}}、{{value}};
      <button class="change hoverTop" v-if="value.item">{{value.item}}</button>
    </div>

    <!--办理说明-->
    <AlertTitle class="HandlingDetails-title first" :alertTitle="alertList.explain[0].title"></AlertTitle>
    <div class="alertText" v-for="(value, index) in alertList.explain[0].items">
      {{index+1}}、{{value.title}};
    </div>

    <!--办理流程-->
    <AlertTitle class="HandlingDetails-title" :alertTitle="alertList.flow[0].title"></AlertTitle>
    <div class="flowImg clear">
      <div class="flowCell" v-for="(value,index) in alertList.flow[0].items" :key="index">
        <h2>{{value.title}}</h2>
        <p>{{value.describe}}</p>
        <button class="change hoverTop" v-if="value.item">{{value.item}}</button>
      </div>
    </div>

    <!--常见问题-->
    <AlertTitle class="HandlingDetails-title" :alertTitle="alertList.problem[0].title"></AlertTitle>
    <div class="alertText" v-for="(value, index) in alertList.problem[0].items">
      <dl class="problems">
        <dt>
          <img :src="items" alt="">
          {{value.list}}
        </dt>
        <dd>
          <span class="problemCell">问题：</span>
          {{value.problem}}
        </dd>
        <dd>
          <span class="answer">答案：</span>
          {{value.answer}}
        </dd>
      </dl>
    </div>

    <!--相关推荐-->
    <AlertTitle class="HandlingDetails-title" :alertTitle="alertList.recommend.title"></AlertTitle>
    <img :src="alertImg" alt="">



  </div>
</template>

<script>
  import AlertTitle from './AlertTitle'
  export default {
    name: "HandlingDetails",
    components:{
      AlertTitle
    },
    data(){
      return{
        alertList:null,
        alertImg:`${process.env.PICTURE_SERVE}/file?fileId=d926cac2cd634577aebd095edb3b8971`,
        items:`${process.env.PICTURE_SERVE}/file?fileId=b341615442b74131a362e730adb01a1d`,
      }
    },
    props:{
      details:{
        type:String
      }
    },
    mounted(){
      this.$nextTick(()=>{  //接收layer的data
        this.alertList = JSON.parse(this.details);
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .HandlingDetails{
    .HandlingDetails-title{
      margin: 40px 0 8px 0;
      &.first{
        margin-top: 10px;
      }
    }
    .alertText{
      font-size: 16px;
      line-height: 30px;
      color: $ModuleTitle;
    }
    .hoverTop{
      width: 80px;
      height: 30px;
      line-height: 30px;
      margin-left: 10px;
    }
    .flowImg{
      .flowCell{
        float: left;
        width: 454px;
        height: 100px;
        padding-left: 10px;
        .hoverTop{
          margin-left: 0;
        }
        h2{
          font-size: 15px;
          margin-top: 10px;
        }
        p{
          font-size: 15px;
          color: $ModuleTitle;
          margin: 14px 0 10px 0;
        }
      }
    }
    .problems{
      margin: 20px 0 6px 0;
      dt{
        font-size: 17px;
        color: $ModuleTitle;
        img{
          position: relative;
          top: 9px;
        }
      }
      dd{
        padding-left: 30px;
        .problemCell{
          color: $xd-red;
        }
        .answer{
          color: $xd-lan1;
        }
      }
    }
  }
</style>
