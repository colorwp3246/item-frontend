<template>
  <div class="detailDialog">
    <el-dialog title="详情" :visible.sync="examine" width="820px" :show-close="false" :center="true" top="3vh" :close-on-click-modal="false">
      <dialogTime dialogTitle='基本信息'></dialogTime>
      <div class="baseInfo clearfix">
        <div v-for="(item,index) of oData.obj" v-if="index>0">
          <div class="paperTitle fl">{{item.standardName}}</div>
          <div class="titleContent fl">{{item.value}}</div>
        </div>
      </div>
      <dialogTime dialogTitle='附件信息'></dialogTime>
      <div class="attaches">
        <ul>
          <li v-for="(item,index) in this.oData.attaches"><span class="file">[{{item.type}}]{{item.name}}</span><span class="down">{{item.downloadUri}}下载</span>
          </li>
        </ul>
      </div>
      <dialogTime dialogTitle='作者信息'></dialogTime>
      <div class="authorInfo">
        <ul>
          <li v-for="(item,index) in this.oData.allocationDetails"><span class="firstAuthor">第{{item.rank}}作者：{{item.teacherName}}</span><span
            class="jobNumber">工号：{{item.teacherNum}}</span><span class="Workload jobNumber">工作量：{{item.allocation}}</span>
          </li>
        </ul>
      </div>
      <dialogTime dialogTitle='反馈结果'></dialogTime>
      <div class="process" >
        <p v-for="msg of feedBackMsgArray">{{msg}}</p>
      </div>
      <div slot="footer" class="authorfooter">
        <button @click="cancle">确 定</button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import dialogTime from './dialogTime'
  import {getDetail} from '@/api/annualreview'
  export default {
    props:['examine','oData'],
    data() {
      return {
        formLabelWidth: '120px',
        form: {},
        // examine: false,
        author: [
          {
            author: '张三',
            jobNumber: '001',
            workload: '007'
          },
          {
            author: '张三',
            jobNumber: '001',
            workload: '007'
          }
        ],
        process: [
          {
            ite: '已通过',
            date: '2019-08-20',
            state:1
          },
          {
            ite: '审核意见：无异议，同意通过',
            date: '2019-08-30'
          },
        ],
      }
    },
    components: {
      dialogTime
    },
    computed:{
      feedBackMsgArray(){
        if(this.oData.obj.length>0)
        {
          return this.oData.feedBackMsg.split("\r\n");
        }else
        {
          return null;
        }
      }
    },
    methods: {
      cancle(){
        this.$emit("detailCancle",this.examine)
      }

    }
  }
</script>
<style lang="scss" scoped>
  @import "~@/styles/gatewayBase.scss";
  .detailDialog /deep/ {
    padding: 0 30px;
    .el-dialog__title {
      font-size: 22px;
      color: $fontcolor2;
      font-weight: bold;
    }
    .baseInfo {
      margin-bottom: 40px;
      width:771px;
      border-left:solid 1px #e0e2ea;
      border-top:solid 1px #e0e2ea;
      .paperTitle {
        height: 50px;
        line-height: 50px;
        width: 121px;
        text-align: left;
        padding-left:6px;
        background-color: #f4f4f4;
        border-bottom: solid 1px #e0e2ea;
        border-right: solid 1px #e0e2ea
      }
      .titleContent {
        height: 50px;
        width: 264px;
        text-align: left;
        padding-left:6px;
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #e0e2ea;
        border-right:solid 1px #e0e2ea
      }
    }

        .endBorder {
          border-bottom: solid 1px #e0e2ea;
        }
    .enclosure {
      margin-left: 13px;
      margin-bottom: 15px;

      img {
        width: 27px;
        height: 34px;
      }

      span {
        font-size: $fontSize15;
        color: $fontcolor2;
        margin-left: 12px;
      }
    }
    .authorInfo {
      margin-left: 19px;
      margin-bottom: 20px;
      font-size: $fontSize15;
      color: #454545;
      ul {
        li {
          margin-top: 13px;

          .jobNumber {
            padding-left: 50px;
          }
        }
      }
    }
    .attaches{
      padding-left:20px;
      ul{
        li{
          height:30px;
          .file{
            float:left;width:80%;
          }
          .down{
            float:right;width:20%;
          }
        }
      }
    }
    .process {
    margin-left: 20px;
    ul {
      overflow: hidden;
      position: relative;
      li{
        padding-bottom: 30px;
        overflow: hidden;
        position: relative;
        &:before{
          content: '';
          height: 100%;
          position: absolute;
          left: 5px;
          top:0;
          display: inline-block;
          border-left: 2px solid #e4e7ed;
          z-index: 1;
        }
        &.last:before{
          border-left: none;
        }
        .ball {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #e4e7ed;
          position: absolute;
          top: 1px;
          left: 0;
          z-index: 2;
        }
        .mainInfo {
          margin-left:20px;
          p {
            margin: 0;
            font-size: $fontSize15;
            color:#454545;
          }
          p:nth-child(2){
            margin-top: 10px;
            font-size:12px;
            color:#666666;
          }
        }
      }
    }
  }
    .authorfooter{
      button{
        width: 98px;
        height: 40px;
        background-color: #537eab;
        border: solid 1px #8fa8c3;
        color:$fontcolor;
        font-size: $fontSize15;
        border-radius:6px;
      }
    }
  }
</style>
