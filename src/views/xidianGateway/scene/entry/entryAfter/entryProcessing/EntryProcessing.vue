<template>
  <div class="EntryProcessing main">
    <div class="sceneTitleContent">
      <!--信息填报-->
      <xdFillInformation :sceneTitle="sceneTitle1"></xdFillInformation>

      <!--材料上传-->
      <xdSceneTitle :sceneTitle="sceneTitle2"></xdSceneTitle>

      <div class="tables">
        <table class="materialTable materialTableTh">
          <tr v-for="(item, index) in materialTableTh" :key="index">
            <td class="names">{{item.names}}</td>
            <td class="types">{{item.types}}</td>
            <td class="source">{{item.source}}</td>
            <td class="company">{{item.company}}</td>
            <td class="operation">{{item.operation}}</td>
            <td class="feedback">{{item.feedback}}</td>
          </tr>
        </table>
        <table class="materialTable">
          <tr v-for="(item, index) in materialTable" :key="index">
            <td class="names textLeft">{{item.names}}</td>
            <td class="types">{{item.types}}</td>
            <td class="source">{{item.source}}</td>
            <td class="company">{{item.company}}</td>
            <td class="operation">
              <button class="change hoverTop" @click="resultVisible=true">
                预览
              </button>
              <button class="change hoverTop">
                上传
              </button>
            </td>
            <td class="feedback">{{item.feedback}}</td>
          </tr>
        </table>
      </div>

      <el-dialog
        title="简历预览"
        :visible.sync="resultVisible"
        width="1200" height="900">
        <div>
          <img src="~@/assets/resume.png"/>
        </div>
      </el-dialog>

      <!--材料提交-->
      <xdSceneTitle :sceneTitle="sceneTitle3"></xdSceneTitle>

      <div class="materials">
        <ul class="materialsList clear">
          <li class="materialsItem" v-for="(item, index) in materialsList" :key="index">
<!--            <img v-if="item.nonEssential" class="nonEssential" src="~@/assets/nonEssential.png" alt="">-->
            <div class="silk_wrap" v-if="item.nonEssential">
              <span class="silk_icon">非必需</span>
            </div>
            <h1>{{item.title}}</h1>
            <div class="materialsItemScroll">
              <p v-for="(value, key) in item.items" :key="key">{{key+1}}.{{value}}</p>
              <p><img :src="entryAdd" alt="">{{item.address}}</p>
              <p><img :src="entryTime" alt="">{{item.time}}</p>
              <!--<p><img src="~@/assets/entryTel.png" alt="">{{item.tel}}</p>-->
              <!--<p v-if="item.tip"><img src="~@/assets/entryTip.png" alt="">{{item.tip}}</p>-->
            </div>
          </li>
        </ul>
        <img class="materialsImg" :src="materialsImg" alt="">
      </div>
      <!--等待通知-->
      <xdSceneTitle :sceneTitle="sceneTitle4"></xdSceneTitle>
      <div class="entryNotice">
        <ul>
          <li class="entryNoticeItems" v-for="(item, index) in entryNotice" :key="index">
            <span class="sequence">{{index+1}}</span>
            {{item.title}}
            <img v-if="item.items" class="checkMark" :src="checkMark" alt="">
            <span v-if="item.items" class="checkMarkText">{{item.items}}</span>
          </li>
        </ul>
      </div>

      <!--报到起薪-->
      <xdSceneTitle :sceneTitle="sceneTitle5"></xdSceneTitle>
      <div class="entryNotice">
        <ul>
          <li class="entryNoticeItems" v-for="(item, index) in report" :key="index">
            <span class="sequence">{{index+1}}</span>
            {{item.title}}
            <img v-if="item.items" class="checkMark" :src="checkMark" alt="">
            <span v-if="item.items" class="checkMarkText">{{item.items}}</span>
          </li>
        </ul>
      </div>
    </div>

    <!--<problem :problemList="problemList"></problem>-->
  </div>
</template>

<script>
  import ModuleTitle from '../../../../public/ModuleTitle'
  import problem from './Problem'
  import xdSceneTitle from '../../../../scene/scenePublice/sceneTitle'
  import xdFillInformation from '../../../../scene/scenePublice/fillInformation'
  // import 'jquery'
  // import 'jquery.nicescroll';
  export default {
    name: "EntryProcessing",
    components:{
      ModuleTitle,
      problem,
      xdSceneTitle,
      xdFillInformation
    },
    data(){
      return{
        checkMark:`${process.env.PICTURE_SERVE}/file?fileId=3281c2de4c9f45da913c5d78359860e2`,
        entryAdd:`${process.env.PICTURE_SERVE}/file?fileId=764cc6780efc4ec9919641f870a6ee8f`,
        entryTime:`${process.env.PICTURE_SERVE}/file?fileId=9667e44ef2c54cbfba44b428f4fbe89b`,
        materialsImg:`${process.env.PICTURE_SERVE}/file?fileId=36a18a7265f64599a68bd3ed088d1845`,
        resultVisible:false,
        problemList:[
          {
            title:'新进A类（直接引进）人员及师资博后需要提交哪些材料？',
            items:[
              '体检报告（原则上一个月内有效）',
              '干部履历表',
              '工资核定表',
              '报到证 / 行政介绍信 / 离职证明 / 博士后入站介绍信原件',
              '工作合同一份',
              '有工作经历者需提供个人养老保险缴费明细'
            ],
          },
          {
            title:'新进A类（直接引进）人员及师资博后需要提交哪些材料？',
            items:[
              '体检报告（原则上一个月内有效）',
              '干部履历表',
              '工资核定表',
              '报到证 / 行政介绍信 / 离职证明 / 博士后入站介绍信原件',
              '工作合同一份',
              '有工作经历者需提供个人养老保险缴费明细'
            ],
          },
          {
            title:'新进A类（直接引进）人员及师资博后需要提交哪些材料？',
            items:[
              '体检报告（原则上一个月内有效）',
              '干部履历表',
              '工资核定表',
              '报到证 / 行政介绍信 / 离职证明 / 博士后入站介绍信原件',
              '工作合同一份',
              '有工作经历者需提供个人养老保险缴费明细'
            ],
          }
        ],
        sceneTitle1:[
          {
            title:'信息填报',
            num:1,
            active:true,
            items:'填报新入职员工信息并提交。',
            itemsTip:'工资卡为交通银行卡，请线下办理并完善银行卡信息。',
            btnText:'信息填报',
            href:''
          }
        ],
        sceneTitle2:[
          {
            title:'材料上传',
            num:2,
            active:false,
            items:'按要求上传所需表单，若信息不完整请返回第一步补充完成后提交。',
            itemsTip:'',
            btnText:'',
            href:''
          }
        ],
        sceneTitle3:[
          {
            title:'材料提交',
            num:3,
            active:false,
            items:'按要求去各部门提交书面纸质材料。',
            itemsTip:'',
            btnText:'下载表单',
            href:''
          }
        ],
        sceneTitle4:[
          {
            title:'等待通知',
            num:4,
            active:false,
            items:'审核通过后将通过短信或邮件通知，请注意查收。',
            itemsTip:'',
            btnText:'',
            href:''
          }
        ],
        sceneTitle5:[
          {
            title:'报到起薪',
            num:5,
            active:false,
            items:'前往二级单位报到并等待起薪通知',
            itemsTip:'',
            btnText:'',
            href:''
          }
        ],
        materialTableTh:[{names:'材料名称',types:'材料填写样本',source:'来源渠道',company:'接收单位',operation:'操作',feedback:'提交反馈'}],
        materialTable:[
          {names:'《申请表》',types:'样表.jpg',source:'自动生成',company:'人事处劳资科',operation:[{btn:'预览',href:''},{btn:'上传',href:''}],feedback:''},
          {names:'《审批表》',types:'样表.jpg',source:'自动生成',company:'人事处劳资科',operation:[{btn:'预览',href:''},{btn:'上传',href:''}],feedback:''},
          {names:'最高学历证书扫描件',types:'样表.jpg',source:'自动生成',company:'人事处劳资科',operation:[{btn:'预览',href:''},{btn:'上传',href:''}],feedback:''},
          {names:'身份证扫描件',types:'样表.jpg',source:'自动生成',company:'人事处劳资科',operation:[{btn:'预览',href:''},{btn:'上传',href:''}],feedback:''},
          {names:'《干部履历表》',types:'样表.jpg',source:'自动生成',company:'人事处劳资科',operation:[{btn:'预览',href:''},{btn:'上传',href:''}],feedback:''},
          {names:'《新进人员登记表》',types:'样表.jpg',source:'自动生成',company:'人事处劳资科',operation:[{btn:'预览',href:''},{btn:'上传',href:''}],feedback:''},
        ],
        materialsList:[
          {
            title:'人事处劳资科',
            items:[
              '《劳务合同》'
            ],
            address:'南校区办公楼415',
            time:'工作日  9:00 - 17:30',
            tel:'88435519',
            tip:'首先办理',
            nonEssential:false
          },
          {
            title:'党支部、分党委',
            items:[
              '《组织关系介绍信》 '
            ],
            address:'南校区办公楼412',
            time:'工作日  9:00 - 17:30',
            tel:'88435519',
            tip:'',
            nonEssential:false
          },
          {
            title:'职工住房管理科',
            items:[
              '《西安电子科技大学新进教职工无房专项补贴申请表》',
            ],
            address:'南校区行政楼714',
            time:'工作日  9:00 - 17:30',
            // tel:'88435519',
            tip:'',
            nonEssential:true
          }
        ],
        entryNotice:[
          {title:'教职工号信息（南校区办公楼415  81891775）',items:'工号：7204'},
          {title:'上网账号和邮箱（北校区：图书馆11楼 88201252     南校区：图书馆一楼西北角81891357）',items:''},
          {title:'一卡通办理信息（南校区：图书馆一楼西北角  81891135    北校区：车队对面 88204626）',items:''},
        ],
        report:[
          {title:'起薪消息通知',items:' '}
        ],
      }
    },
    mounted(){
      $('.materialsItemScroll').niceScroll({
        cursorcolor:'#454545'
      });
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.tables{
  width: 1150px;
  margin-left: 40px;
  .materialTable{
    border-spacing: 0;
    border-collapse: collapse;
    &.materialTableTh{
      background-color: $materialTableTh;
      margin-top: 20px;
    }
    td{
      border: 1px solid $mateTableBorder;
      font-size: 15px;
      color: $ModuleTitle;
      height: 50px;
      padding: 0 10px;
      text-align: center;
      /*&.textLeft{
        text-align: left;
      }*/
    }
    .names{
      width: 360px;
    }
    .source{
      width: 120px;
    }
    .types{
      width: 180px;
    }
    .company{
      width: 180px;
    }
    .operation{
      width: 190px;
    }
    .feedback{
      width: 114px;
    }
    .change{
      width: 70px;
      height: 30px;
      line-height: 30px;
    }
  }
  h2{
    font-size: 16px;
    font-weight: bold;
    margin: 20px 0 6px 0;
    position: relative;
    padding-left: 36px;
    .itemsPng{
      position: absolute;
      top: -4px;
      left: 0;
    }
  }
  .materialCell{
    li{
      line-height: 38px;
      font-size: 15px;
    }
  }
}

.materials{
  padding-left: 38px;
  padding-top: 30px;
  .materialsImg{
    width: 400px;
    float: right;
    position: relative;
    top: -20px;
    border-radius: 6px;
  }
  .materialsList{
    display: inline-block;
    padding-top: 5px;
    .materialsItem{
      display: inline-block;
      width: 230px;
      height: 360px;
      box-shadow: $infBoxShadow;
      position: relative;
      float: left;
      margin-right: 20px;
      border-radius: 8px;
      .nonEssential{
        position: absolute;
        top: -12px;
        left: -13px;
      }
      .materialsItemScroll{
        height: 304px;
        width: 230px;
        text-align: center;
        padding-bottom: 20px;
        p{
          width: 170px;
          text-align: left;
          display: inline-block;
          line-height: 26px;
        }
        img{
          position: relative;
          top: 8px;
          margin-right: 4px;
        }
      }
      h1{
        font-size: 20px;
        color: #454545;
        text-align: center;
        margin: 20px auto 10px auto;
      }
      p{
        font-size: 15px;
        color: $entryText1;
      }
      &:hover{
        box-shadow: $boxShadowHover;
        transition: $transition;
      }
    }
  }
}

.entryNotice{
  padding-left: 38px;
  .entryNoticeItems{
    font-size: 16px;
    line-height: 34px;
    color: $entryText;
    .checkMark{
      position: relative;
      top: 7px;
      margin: 0 10px 0 20px;
    }
    .checkMarkText{
      color: $checkMark;
      font-size: 16px;
    }
  }
}
  .silk_wrap{
    width:84px;
    height:84px;
    background:transparent;
    overflow:hidden;
    position:absolute;
    left:-8px;
    top:-8px;
  }
  .silk_wrap:before{
    display:block;
    position:absolute;
    content:'';
    height:8px;
    width:20px;
    border-radius:6px 0px 0px 0px;
    background:#1091c8;
    transform: rotate(-90deg);
    -ms-transform:rotate(-90deg);
    -moz-transform:rotate(-90deg);
    -webkit-transform:rotate(-90deg);
    -o-transform:rotate(-90deg);
    left:-6px;
    bottom:6px;
  }
  .silk_wrap:after{
    display:block;
    position:absolute;
    content:'';
    height:8px;
    width:20px;
    border-radius:0px 5px 0px 0px;
    background:#1091c8;
    right:2px;
    top:0px;
  }
  .silk_icon{
    width:120px;
    height:28px;
    line-height:28px;
    position:absolute;
    background:#3bc3f7;
    transform: rotate(-45deg);
    -ms-transform:rotate(-45deg);
    -moz-transform:rotate(-45deg);
    -webkit-transform:rotate(-45deg);
    -o-transform:rotate(-45deg);
    left:-27px;
    top:14px;
    color:#fff;
    text-align:center;
    z-index:2;
  }

  .sceneTitleContent /deep/{
    .el-dialog{
      width: 1490px;
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
