<template>
  <div class="sceneTitle">
    <div class="sceneTitleBox main" v-for="(item,index) in sceneTitle">
      <i :class="item.active?'active':''"><em></em></i>
      <em>{{item.num}}</em>
      <span class="sceneCellTitle">{{item.title}}</span>
      <img :src="senceTitle">
      <div class="sceneTitleText">
        {{item.items}}
        <span>{{item.itemsTip}}</span>
        <button v-if="item.btnText" class="change" @click="dialogVisible = true">{{item.btnText}}</button>
        <el-dialog
          title="信息填报"
          :visible.sync="dialogVisible"
          width="600" height="900">
          <div>
            <img src="~@/assets/fillinformation.png"/>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sceneTitle",
    props:{
      sceneTitle:{
        type:Array
      }
    },
    data() {
      return {
        dialogVisible: false,
        senceTitle:`${process.env.PICTURE_SERVE}/file?fileId=cae194e88b82436bad8091e896fbc2f9`,
      };
    },
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .sceneTitle{
    margin-top: 40px;
    .sceneTitleBox{
      position: relative;
      left: -14px;
      top: -8px;
      margin: 20px 0;
      &>i{
        display: inline-block;
        width: 28px;
        height: 28px;
        background-color: $entrySliderBg;
        border-radius: 50%;
        position: absolute;
        top: 8px;
        left: 0;
        z-index: 55;
        &.active{
          background-color: $entryActive1;
          em{
            background-color: $entryActive;
          }
        }
        em{
          display: inline-block;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: $active1;
          position: absolute;
          top: 7px;
          left: 7px;
          z-index: 66;
        }
      }
      &>em{
        font-style: normal;
        font-size: 44px;
        color: $active1;
        position: absolute;
        top: -10px;
        left: 72px;
        z-index: 6;
        font-weight: bold;
      }
      .sceneCellTitle{
        position: absolute;
        top: 4px;
        left: 108px;
        font-size: 20px;
        color: $ModuleTitle;
      }
      .sceneTitleText{
        margin-left: 220px;
        font-size: 18px;
        line-height: 40px;
        border-bottom: 1px dashed #a6a8ab;
        span{
          font-size: inherit;
          color: $xd-red;
        }
        .change{
          float: right;
        }
      }
    }
  }
  .doclist{
    width:100%;
    td,th{
      text-align:center;
      border-bottom:dashed 1px #d0d0d0;
      a{
        margin-left:5px;
        color:#1f73cf;
      }
    }
    td{
      color:#333;
    }
    th{
      color:#666;
    }
    .title{
      text-align:left;
    }
  }
  .message{
    text-align:center;
    padding-top:10px;
    color:#333;
    p{
      line-height:25px;
    }
  }
  .sceneTitleText /deep/{
    .el-dialog{
      width: 1030px !important;
    }
    .el-dialog__body{
      padding: 10px 30px 30px;
    }
    .el-dialog__header{
      background:#3888c6;
      .el-dialog__title{
        color:#fff;
      }
      .el-dialog__close{
        color:#fff;
      }
    }
  }
</style>
