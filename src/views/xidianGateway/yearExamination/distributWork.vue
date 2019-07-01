<template>
  <div class="distriWork">
    <el-dialog title="分配工作量" :visible.sync="distribut" width="820px" :show-close="false" :center="true" :close-on-click-modal="false">
      <dialogTime dialogTitle='基本信息'></dialogTime>
      <div class="baseInfo clearfix">
        <div v-for="(item,index) of oData.obj" v-if="index>0">
          <div class="paperTitle fl">{{item.standardName}}</div>
          <div class="titleContent fl">{{item.value}}</div>
        </div>
      </div>
      <dialogTime dialogTitle='工作量分配'></dialogTime>
      <div class="distribut clearfloat">
        <div class="classify fl">
          <span class="grade">选择类型或等级</span>
        </div>
        <el-select v-model="selVal" placeholder="请选择" @change="currentSel">
          <el-option
            v-for="item in allotArr"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="distribut">
          可分配工作量
          <span class="number">
          <el-select v-model="values" placeholder="请选择">
          <el-option
            v-for="item in workNumArr"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
          </span>
        </span>
        <div class="fr">
          <i class="el-icon-question" style="color:#1f73cf;" @click="question"></i>工作量计算标准
        </div>
        <div class="blackTab" v-if="blackTab">
          <table  width="100%" border="0" cellspacing="1" cellpadding="0">
            <tr>
              <td style="text-align:left;">类型</td>
              <td>数据</td>
              <td>业绩点</td>
            </tr>
            <tr v-for="(item,index) in standardArr" :key="index">
              <td style="text-align:left;">{{item.name}}</td>
              <td>{{item.quantity}}</td>
              <td>{{item.achievementPoint}}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="endCheckox">
        <div class="Custom">
          <p>
            <el-radio v-model="checked" label="1">自定义分配</el-radio>
          </p>
          <div class="checkContent">
            <ul>
              <li v-for="(item,index) in this.oData.members" :key="index">
                <span>{{item.comment}}：{{item.teacherName}}</span>
                <span class="card">工号：{{item.teacherNum}}</span>
                <span class="workLoad">工作量：<input type="text" style="padding:0 6px;" v-model="items[index]"/></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="Undistributed">
          <p>
            <el-radio v-model="checked" label="0">不分配</el-radio>
          </p>
        </div>
      </div>
      <div slot="footer" class="authorfooter">
        <button @click="closeDialog" class="woring">纠错</button>
        <button @click="closeDialog" class="btn">确认分配</button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import dialogTime from './dialogTime'
  import {submitSave,getPageList,submitUpdate,batchDelete,getDetail,getAllList,getWorkStatus,getDialogItems,getYears,getAllotDegree} from '@/api/annualreview'
  export default {
    props:['distribut','oData','workArr','allotArr','typeid'],
    data(){
      return{
        values:'',
        blackTab:false,
        state:false,
        checked:'1',
        items:[],
        fData:[]/*提交的表单数据*/,
        selVal:''/*工作量分配选中的值*/,
        workNumArr:[],
        standardArr:[]//工作量分配标准
      }

    },
    components: {
      dialogTime
    },
    methods:{
      currentSel(selVal){
        var self =this;
        self.selVal = selVal;
        let year = new Date().getFullYear();
        self.workNumArr = new Array();
        self.values='';//清空工作量选择下拉列表框
        /*获取工作分配等级或类型下的工作量*/
        getAllotDegree(`api/examine/getworkloadclassificationBbyworkloadclassificationid?organizationId=27412&workloadClassificationId=${self.selVal}&year=${year}`).then(res=>{
          if(res.data.code===200)
          {
             res.data.data.forEach(function(item){
               self.workNumArr.push({label:item.number,value:item.number});
             });
          }
        });
        getAllList(`examination/teachers/examine_standark?type_id=${self.selVal}`).then(res=>{
           if(res.data.code===200)
           {
             self.standardArr = res.data.data;
           }
        })
      },
      question(){
        if(this.state===false){
          this.blackTab=true
          this.state=true
        }else if(this.state===true){
          this.blackTab=false
          this.state=false
        }
      },
      /*检查分配工作量的值是否已超出*/
      checkAssignNum(){
        let sum=0;
        let flag = true;
        for(let i=0;i<this.items.length;i++)
        {
          sum+=this.items[i];
        }
        if(this.values==='')
        {
          flag = false;
          this.$message({
            message: '没有可分配的工作量',
            type: 'warning'
          });
        }else if(this.checked==="1" && sum>parseFloat(this.values))
        {
          flag = false;
          this.$message({
            message: '分配错误，不能大于工作量',
            type: 'warning'
          });
        }else if(this.checked==="1" && sum===0)
        {
          flag = false;
          this.$message({
            message: '请分配工作量',
            type: 'warning'
          });
        }
        return flag;
      },
      closeDialog(){
        if(this.checkAssignNum())
        {
          this.fData=[];
          let allocationArray = new Array();
          for(let i=0;i<this.oData.members.length;i++)
          {
            this.fData.push({JobNumber:'"'+this.oData.members[i].teacherNum+'"',ItemId:'"'+this.oData.members[i].itemId+'"',ClassificationId:'"'+this.oData.members[i].classificationId+'"'})
            allocationArray.push({teacherNum:this.oData.members[i].teacherNum,workloadAllocation:this.items[i]});
          }
          if(this.fData.length>0)
          {
            submitSave(this.fData,"activiti/workloadAllocation").then(res=>{

            })
            let url = "examination/teachers/allocation_records";
            let params = {
              typeId:this.typeid,
              itemId:this.oData.obj[0].value,
              refId:this.selVal,
              allocationRecords:allocationArray
            }
            if(this.checked==="0")
            {
              url = "examination/teachers/allocation_records_default";
              params.allocationRecords=null;
            }
            submitSave(params,url).then(res=>{
              if(res.data.code===200)
              {
                alert(res.data.msg);
              }
            })
          }
          this.$emit("assign",false);
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .distriWork{
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
    .distribut{
      height: 60px;
      line-height:60px;
      padding-left:15px;
      padding-right:15px;
      background-color:#f4f4f4;
      font-size: $fontSize15;
      color:$fontcolor2;
      position: relative;
      .grade{
        margin-right:16px;
      }
      .distribut{
        margin-left: 16px;
      }
      .number{
        color:#e02c16;
        margin-left: 5px;

      }
      .number /deep/ .el-input--medium .el-input__inner{width:100px;}

      .blackTab{
        position: absolute;
        right:0px;
        top: -290px;
        width: 280px;
        height: 314px;
        padding:10px 18px;
        /*overflow: hidden;*/
        overflow-y:scroll;
        background-image: url("http://www.zq100.com/api/files/file?fileId=dcfa8040d35849a881949cffd6ee1615");
        table{
          width:100%;
          tr td{
            color:$fontcolor;
            text-align: center;
          }
        }
      }
    }
    .endCheckox{
      padding:0 17px;
      .Custom{
        .checkContent{
          margin-left:26px;
          ul{
            li{
              font-size: 15px;
              margin-top: 10px;
             color: #454545;
              .card{
                margin-left:100px;
              }
              .workLoad{
                margin-left:100px;
                input{
                  width: 60px;
                  height: 30px;
                  background-color: #ffffff;
                  border-radius: 4px;
                  border: solid 1px #1f73cf;
                  margin-left: 10px;
                }
              }
            }
          }
        }
      }
    }
    .authorfooter{
      button{
        width: 98px;
        height: 40px;
        text-align: center;
        color:$fontcolor;
        font-size: $fontSize15;
        border:none;
        border-radius: 6px;
      }
      .woring{
        background-color:#e02c16;
      }
      .btn{
        background-color:#537eab;
      }
    }
  }
</style>
