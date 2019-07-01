<template>
  <div class="entryFlow main">
    <ModuleTitle moduleTitle="办理进度"></ModuleTitle>
    <div class="flowSpeed" v-if="flowSpeed">
      <div class="flowSpeedBar">
        <span class="flowArrowShadow" style="left:5%">
          <span>5%</span>
          <img :src="flowArrowShadow" alt="">
        </span>
      </div>
      <div class="flowSpeedText">
        当前办理环节：<span>个人信息填报</span>，下一环节为 <span>人员资格审查</span>。
      </div>
    </div>
    <div class="entryFlow-Box">
      <ul class="clear">
        <li class="entryFlow-item" v-for="(item, index) in entryFlowList" :class="{fr:index>7&&index<15}">
         <!-- <img class="flowArrow" v-if="index<7" src="@/assets/flowArrow.png" alt="">
          <img class="flowArrow" v-if="index>7&&index<14" src="@/assets/flowArrow1.png" alt="">
          <img class="flowArrow flowArrowInflection" v-if="index>=14" src="@/assets/flowArrow3.png" alt="">-->
          <i :class="{icon_arrow_r:index<7,icon_arrow_r_pos:index<7}" v-if="index<7"></i>
          <i :class="{icon_arrow_l:index>8&&index<15,icon_arrow_l_pos:index>8&&index<15}" v-if="index>8&&index<15"></i>
          <i :class="{icon_arrow:index===7,icon_arrow_pos:index===7}" v-if="index===7"></i>
          <div class="entryFlow-cell" :class="{cell_pos:index>7&&index<15}">
            <span class="entryFlow-img" :class="index==flowSpeedActive?'flowSpeedActive':''">
              <img :src="item.icon" alt="">
            </span>
            <p>{{item.title}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="otherTip">
      <span>注: </span>办理详情请登录后查看。
    </div>
  </div>
</template>

<script>
  import ModuleTitle from '../../../../public/ModuleTitle'
  export default {
    name: "EntryFlow",
    data(){
      return{
        flowArrowShadow:`${process.env.PICTURE_SERVE}/file?fileId=84b042bd9a5b43e89671a026d65af8b9`,
        
      }
    },
    props:{
      entryFlowList:{
        type:Array
      },
      flowSpeed:{
        type:Boolean
      },
      flowSpeedActive:{
        type:Number
      }
    },
    components:{
      ModuleTitle
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.entryFlow{
  .flowSpeed{
    margin: 30px 0;
    .flowSpeedBar{
      margin-top: 80px;
      width: 100%;
      height: 14px;
      border-radius: 8px;
      position: relative;
      filter: progid:DXImageTransform.Microsoft.Gradient(startColorStr=$entryBg1,endColorStr=$entryBg2,gradientType='1');
      background: -moz-linear-gradient(top, $entryBg1, $entryBg2);
      background: -o-linear-gradient(top, $entryBg1, $entryBg2);
      background: -webkit-gradient(linear, 0% 0%, 0% 100%, from($entryBg1), to($entryBg2));
      background: linear-gradient(to right, $entryBg1, $entryBg2);
      .flowArrowShadow{
        position: absolute;
        top: -40px;
        span{
          position: absolute;
          top: 6px;
          left: 0;
          width: 74px;
          text-align: center;
          display: inline-block;
          color: $entryActive;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
    .flowSpeedText{
      font-size: 16px;
      margin-top: 20px;
      span{
        color: $entryBg2;
        font-size: inherit;
      }
    }
  }
  .entryFlow-Box{
    .entryFlow-item{
      float: left;
      position: relative;
      width:148px;
      height:130px;
      .flowArrow{
        position: absolute;
        top: 58px;
        left: 120px;
        &.flowArrowInflection{
          top: -30px;
          left: 122px;
        }
      }
      .entryFlow-cell{
        display: inline-block;
        left:0;
        top:0;
        position:absolute;
        width: 110px;
        height: 140px;
        margin-bottom: 34px;
        text-align: center;
        .entryFlow-img {
          display: inline-block;
          margin-top: 35px;
          width: 64px;
          height: 64px;
          background-color: $active;
          position: relative;
          border-radius: 50%;
          color: $ModuleTitle;
          margin-bottom: 4px;
          &.flowSpeedActive{
            background-color: $entryActive;
          }
          img {
            position: absolute;
            top: 14px;
            left: 12px;
            font-size: 0;
          }
        }
      }
      .cell_pos{left:-16px;}
    }
    .fr{float:right;}
  }
}
  .icon_arrow_r{
    display:block;
    position:relative;
    height:2px;
    width:60px;
    background: #ccc;
  }
  .icon_arrow_r:after{
    display:block;
    content:'';
    position:absolute;
    height:0;
    width:0;
    border:solid 8px #ccc;
    border-left-width:16px;
    border-color:transparent transparent transparent #ccc;
    right:-10px;
    top:-7px;
  }

  .icon_arrow_l{
    display:block;
    position:relative;
    height:2px;
    width:60px;
    background: #ccc;
  }


  .icon_arrow_l:after{
    display:block;
    content:'';
    position:absolute;
    height:0;
    width:0;
    border:solid 8px #ccc;
    border-right-width:16px;
    border-color:transparent #ccc transparent transparent;
    left:-10px;
    top:-7px;
  }

  .icon_arrow{
    display:block;
    width:60px;
    height:132px;
    border:solid 2px #ccc;
    border-left:0;
    position:relative;
    background:transparent;
  }
  .icon_arrow:after{
    position:absolute;
    display:block;
    content:'';
    height:0;
    width:0;
    border:solid 8px #ccc;
    border-right-width:16px;
    border-color:transparent #ccc transparent transparent;
    left:-10px;
    bottom:-9px;
  }
  .icon_arrow_r_pos{
    left:97px;
    top:70px;
  }
  .icon_arrow_l_pos{
    left:80px;
    top:70px;
  }
  .icon_arrow_pos{
    left:100px;
    top:70px;
  }
</style>
