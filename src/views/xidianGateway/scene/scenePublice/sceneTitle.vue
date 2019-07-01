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
          title="办理材料目录"
          :visible.sync="dialogVisible"
          width="950px">
         <table class="doclist">
           <thead>
             <th>
               材料名称
             </th>
             <th>
               来源渠道
             </th>
             <th>
               材料要求
             </th>
             <th>
               填报须知
             </th>
             <th>
               操作
             </th>
           </thead>
          <tbody>
           <tr>
             <td class="title">《西安电子科技大学新进教职工无房专项补贴申请表》</td>
             <td>申请人自备</td>
             <td>纸质</td>
             <td>一式两份</td>
             <td><a href="javascript:;">空表下载</a><a href="javascript:;">示例查看</a></td>
           </tr>
           <tr>
             <td class="title">《新进教职工无房专项补贴申请表》</td>
             <td>申请人自备</td>
             <td>纸质</td>
             <td>一式两份</td>
             <td><a href="javascript:;">空表下载</a><a href="javascript:;">示例查看</a></td>
           </tr>
           <tr>
             <td class="title">《大学新进教职工无房专项补贴申请表》</td>
             <td>申请人自备</td>
             <td>纸质</td>
             <td>一式两份</td>
             <td><a href="javascript:;">空表下载</a><a href="javascript:;">示例查看</a></td>
           </tr>
          </tbody>
         </table>
          <div class="message">
            <p>温馨提示：<br>
           请前往相关单位盖章后交由各相关部门。</p>
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
      img{
        position: absolute;
        left: 50px;
        top:0;
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
