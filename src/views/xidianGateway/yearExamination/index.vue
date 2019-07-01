<template>
  <div class="examination">
    <AfterLandingOther :inputSearchShow="true"></AfterLandingOther>
    <xdBannerOther :tab="false" :bgImg="bgImg" @itemActive="activeRoute" :selectdie="false" :title="title"></xdBannerOther>
    <xdIntroduce :title="titleText"
                 :introduce="introduce"
                 :img="imgs"
                 :entryBtn="entryBtn"></xdIntroduce>
    <xdTitle yearTitle="考核情况"></xdTitle>
    <div class="assesSituation main">
      <div class="fl comprehensive commonComp">
        <p class="assessp">2019年度综合业绩点</p>
        <div class="total">{{thisYearPoint}}<span class="yearTotal" @click="dialogTableVisible=true">年度业绩总汇</span></div>
      </div>
      <div class="fl commonComp scientific">
        <p class="assessp">科研类</p>
        <div class="assessClass">
          <p class="performance">业绩点<span>12</span></p>
          <p class="Number">数量<span>12</span></p>
        </div>
        <img :src="greenImg" alt="" class="greenimg" v-if="annualAssess.status==='达标'">
        <img :src="redImg" alt="" class="redimg" v-if="annualAssess.status==='不达标'">
      </div>
      <div class="fl commonComp scientific">
        <p class="assessp">教学类</p>
        <div class="assessClass">
          <p class="performance">业绩点<span>14</span></p>
          <p class="Number">数量<span>3}</span></p>
        </div>
        <img :src="greenImg" alt="" class="greenimg" v-if="annualAssess.status==='达标'">
        <img :src="redImg" alt="" class="redimg" v-if="annualAssess.status==='不达标'">
      </div>
      <div class="fl commonComp equal">
        <p class="assessp">{{level}}</p>
        <div class="total">教学科研<span class="yearTotal">聘期标准</span></div>
      </div>
      <div class="fl commonComp teacherCard">
        <p class="assessp">教师考情统计</p>
        <div class="assessClass">
          <p class="performance">病假<span>14.37</span>天</p>
          <p class="Number">事假<span>7</span>天</p>
          <p class="Number">旷工<span>7</span>天</p>
        </div>
      </div>
    </div>
    <xdTitle yearTitle="办理进度"></xdTitle>
    <div class="progress main">
      <div class="progressColor">
        <div class="colorImg" :style="{position:'absolute',top:'-38px',left:currentProcess/4*100+'%'}">
          <span>{{currentProcess/4*100}}%</span>
        </div>
      </div>
      <div class="handleLink">
        <div class="fl">当前办理环节：<span>个人信息填报</span>下一环节为<span>人员资格审查</span>预计办理时间还需<span>3</span>天</div>
        <div class="fr"><span>流程详解</span><img :src="arrow1" alt=""></div>
      </div>
      <div class="assessTotal">
        共计：<span class="sevenArticle">{{recordDataCount}}</span>录入数据<span class="oneItem">{{recordDataCount-distributionWorkCount}}项</span>待分配
      </div>
      <div class="foreParts">
        <div class="recordData fl">
          <!--<img src="@/assets/blues.png" alt="">-->
          <div class="img" :style="{backgroundColor:currentProcess===1?'#FF6622':'#4393e8'}">01</div>
          <p>教职工录入数据</p>
        </div>
        <div class="fl line">
          <img src="connect" alt="">
          <div class="leftCircular circular"></div>
          <div class="rightCircular circular"></div>
        </div>
        <div class="recordData fl">
          <!--<img src="@/assets/blueTwo.jpg" alt="">-->
          <div class="img">02</div>
          <p>工作量分配</p>
        </div>
        <div class="fl line">
          <img src="connect" alt="">
          <div class="leftCircular circular"></div>
          <div class="rightCircular circular"></div>
        </div>
        <div class="recordData fl">
          <!--<img src="@/assets/originTree.jpg" alt="">-->
          <div class="img">03</div>
          <p>提交审核</p>
        </div>
        <div class="fl line">
          <img src="connect" alt="">
          <div class="leftCircular circular"></div>
          <div class="rightCircular circular"></div>
        </div>
        <div class="recordData fl">
          <!--<img src="@/assets/bothBluefore.jpg" alt="">-->
          <div class="img">04</div>
          <p>结果反馈</p>
        </div>
      </div>
      <xdTitle yearTitle="办理进度" commonProblem="常见问题"></xdTitle>
      <div class="endProcess main">
        <div class="dataEntry">
          <div class="processBall fl">
            <div class="ball"></div>
          </div>
          <img :src="dataEntry" alt="" class="fl">
          <div class="dataDetail fl">
            <div class="fl">这里是详细描述。</div>
            <div class="fr"><button>数据录入</button></div>
          </div>
        </div>
        <div class="assignJob">
          <div class="processBall fl" style="background-color: #e0effe;">
            <div class="ball" style="background-color: #1f73cf;"></div>
          </div>
          <img :src="assignJob" alt="" class="fl">
          <div class="dataDetail1 fl">
            <div class="fl">这里是详细描述。</div>
            <div class="fr twoDeil"  @click="gggg"><span style="color:#1f73cf">{{upyear}}年考核明细</span> <img :src="arrow1" alt="" style="width: 15px;height:10px;"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="assessDialog main" v-if="yearState">
        <div class="yearDialog">
          <ul>
            <li v-for="(item,index) in years" :key="index" @click="upYear(item)">{{item}}</li>
          </ul>
        </div>
    </div>
    <div class="stateDialog main">
      <div class="select">
        <span style="color:#4393e8;">{{state}} <img :src="arrow1" alt="" style="width: 15px;height:10px;" @click="downStatus=true"></span>
        <span class="selectNumber">全部<span style="color:#4393e8;padding-left:11px;">{{recordDataCount}}</span></span>
        <div class="selectDialog" v-if="downStatus">
          <ul>
            <li v-for="(item,index) in status" :key="index" @click="changeStatus(item.label)">{{item.label}}</li>
          </ul>
        </div>
      </div>
      <div class="table">
        <el-table
          :data="totalArr.items"
          ref="multipleTable"
          tooltip-effect="dark"
          @cell-mouse-leave="cellMouseLeave"
          @cell-mouse-enter="cellMouseEnter"
          :cell-class-name="tableRowClassName"
          style="width:100%"
          :span-method="objectSpanMethod"
          border
          :header-cell-style="{background:'#f4f4f4',color:'#000000'}"
        >
          <el-table-column
            label="模块"
            prop="module"
            align="center">
          </el-table-column>
          <el-table-column
            type="selection"
            align="center"
            width="35px">
          </el-table-column>
          <el-table-column
            label="名称"
            prop="name"
            :show-overflow-tooltip="true"
            width="100px"
            align="center">
          </el-table-column>
          <el-table-column
            label="类型"
            align="center"
            prop="type">
          </el-table-column>
          <el-table-column
            label="时间"
            align="center"
            prop="allocationTime">
          </el-table-column>
          <el-table-column
            label="状态"
            align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.status==='0'" style="color:#81E581;font-size:15px;">未分配</span>
              <span v-if="scope.row.status==='1'" style="color:#6AC5FF;font-size:15px;">待审核</span>
              <span v-if="scope.row.status==='3'" style="color:red;font-size:15px;">不通过</span>
              <span v-if="scope.row.status==='2'" style="color:#d2d2d2;font-size:15px;">通过</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <button class="endBtns" style="background:#7193ba;color:#fff;"  @click="searchData(scope.row.id,scope.row.typeId,'assign')">分配</button>
              <!--<button class="endBtns" style="background:#ccc;color:#666;" v-if="scope.row.status==='2'||scope.row.status==='1' || scope.row.status==='3'" @click="searchData(scope.row.id,scope.row.typeId,'detail')">查看</button>-->
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="endBtn main">
      <button>确认提交</button>
    </div>
    <Footer></Footer>

    <distribut-work :distribut="distribut" :oData="oData" @assign="assign" :allotArr="allotArr" :typeid="typeid"></distribut-work>
    <detail-dialog :examine="examine" @detailCancle="uploadDetail" :oData="oData"></detail-dialog>
    <yearTotalDialog :dialogTableVisible="dialogTableVisible" @tableClose="uploadTable"></yearTotalDialog>
    <sidebar></sidebar>
  </div>
</template>
<script>
  import AfterLandingOther from '../public/AfterLandingOther'
  import xdBannerOther from '../public/BannerOther'
  import xdIntroduce from '../scene/scenePublice/Introduce'
  import xdTitle from '../public/yearTitle'
  import Footer from '../public/Footer'
  import DetailDialog from './detailDialog'
  import DistributWork from './distributWork'
  import yearTotalDialog from './yearTotalDialog'
  import sidebar from '../public/Sidebar'
  import {getWordCnt} from '@/utils/common'
  import {submitSave,getPageList,submitUpdate,batchDelete,getDetail,getAllList,getWorkStatus,getDialogItems,getYears,getAllotDegree} from '@/api/annualreview'
  export default {
    data() {
      return {
        redImg:`${process.env.PICTURE_SERVE}/file?fileId=fc04c6b7de5f4660a3a3156a21918d0b`,
        assignJob:`${process.env.PICTURE_SERVE}/file?fileId=b99ec4c68a2c4c1c813dcd352e2aa347`,
        dataEntry:`${process.env.PICTURE_SERVE}/file?fileId=e991a0c35add4e64a1863028f50fd9c5`,
        greenImg:`${process.env.PICTURE_SERVE}/file?fileId=f312b77af5f84aaeb5743d09e676ff33`,
        arrow1:`${process.env.PICTURE_SERVE}/file?fileId=30d303ac55954a28a465b2367a04feae`,
        conncet:`${process.env.PICTURE_SERVE}/file?fileId=46d0080fe8624e52acbeddbbeae80d2f`,
        bgImg:`${process.env.PICTURE_SERVE}/file?fileId=87cff468a82c45899d392f9ba1bf7f1d`,
        titleText: '年终考核管理大厅',
        introduce: ['年终考核管理大厅   此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，以及包含业务分类此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍，以及包含业务分类。', '依托一站式惠民服务平台，提供网上申请、信息核对、公示公告、结果查询一站式服务，方便师生'],
        imgs:`${process.env.PICTURE_SERVE}/file?fileId=32034498568b40d28f59649b2db88ebe`,
        entryBtn: {title: '年终考核管理大厅', href: '/LeaveSchoolAfter', show: false},
        yearState:false,
        title:'年终考核管理大厅',
        iconState:false,
        dialogTableVisible:false,
        distribut:false,
        examine:false,
        years:[2018,2019,2020],
        status:[{label:"未审核",value:0},{label:"审核中",value:1},{label:"已通过",value:2}],
        totalArr: {},/*页面上绑定数据的源*/
        cacheArr:[],
        totalAchievement:"",
        annualAssess: {
          "year": "2019年",
          "points": [
            {
              "name": "教学",
              "point": 2.1,
              "standard": 10
            },
            {
              "name": "科研",
              "point": 2.29,
              "standard": 12
            }
          ],
          "sumOfPoint": 4.4,
          "status": "不达标",
          "sumOfStandard": 22
        },
        oData:{
          "obj": [],
          "allocationDetails": [],
          "feedBackMsg": ""
        },
        typeArr:[],
        hoverOrderArr:[],
        rowIndex: '-1',
        upyear:new Date().getFullYear(),
        downyear:2018,
        downStatus:false,
        thisYearPoint:'',
        recordDataCount:'',
        currentProcess:'',
        position:'',
        distributionWorkCount:'',
        workloads:[],
        workArr:[],
        level:'',
        state:'全部',
        allotArr:[],/*工作理分配类型*/
        typeid:0
      }
    },
    components: {
      AfterLandingOther,
      xdBannerOther,
      xdIntroduce,
      xdTitle,
      Footer,
      DetailDialog,
      DistributWork,
      yearTotalDialog,
      sidebar
    },
    mounted(){
      this.initData();
      this.rowCol();
      this.getAllotDegree();
    },
    methods: {
      assign(data){
        this.distribut=data;
      },
      initData() {
        getAllList(`examination/teachers/index_data?year=${this.upyear}`).then(res => {
          console.log(this.upyear,'门户数据')
          if (res.data.code === 200) {
            this.thisYearPoint=res.data.data.thisYearPoint
            this.cacheArr = res.data.data.items;
            this.totalArr=res.data.data
            this.recordDataCount=res.data.data.recordDataCount
            this.position=res.data.data.positionInfo.name
            this.level=res.data.data.positionInfo.level
            this.distributionWorkCount=res.data.data.distributionWorkCount
            this.workloads=res.data.data.positionInfo.workloads
            console.log(this.totalArr,'我的数据')
            if(res.data.data.currentProcess==='教职工录入数据'){
              this.currentProcess=1
            }else if(res.data.data.currentProcess==='工作量分配'){
              this.currentProcess=2
            }else if(res.data.data.currentProcess==='提交审核'){
              this.currentProcess=3
            }else if(res.data.data.currentProcess==='结果反馈'){
              this.currentProcess=4
            }
            this.rowCol()
          }
        })
        getYears().then(res=>{
          console.log(res,'不知道')
        })
      },
      /*工作量分配 选择类型或等级*/
      getAllotDegree(){
        let self = this;
        self.allotArr = new Array();
        getAllotDegree("api/examine/getallworkloadbyorganizationod?organizationId=27412").then(res=>{
          if (res.data.code === 200) {
            res.data.data.forEach(function (item) {
              self.allotArr.push({label:item.workloadClassification,value:item.id})
            });
          }
        })
      },
      /*根据状态查询数据*/
      filterDataByState()
      {
         let s=0;
         if(this.state==="全部")
         {
           return;
         }
         if(this.state==="未审核")
         {
           s=0;
         }else if(this.state==="审核中")
         {
           s=1;
         }else
         {
           s=2;
         }
         this.totalArr.items = this.cacheArr;
         let items = this.totalArr.items.filter(item=>item.status==s);
         this.totalArr.items = items;
         this.recordDataCount = this.totalArr.items.length;

      },

      //年份点击1
      upYear(item){
        this.upyear=item
        this.yearState=false
        this.initData();
      },

      //状态点击
      changeStatus(item){
          this.state=item;
          this.downStatus=false;
          this.filterDataByState();
      },
      rowCol(){
        let OrderObj = {}
        this.totalArr.items.forEach((element, index) => {
          element.rowIndex = index
          if (OrderObj[element.module]) {
            OrderObj[element.module].push(index)
          } else {
            OrderObj[element.module] = []
            OrderObj[element.module].push(index)
          }
        })
        for (let k in OrderObj) {
            this.typeArr.push(OrderObj[k])
        }
      },
      searchData(id,typeid,type){
        if(type==="assign")
        {
          this.distribut=true;
        }else
        {
          this.examine=true
        }

        let params={
          type_id:typeid,
          item_id:id
        };
        this.typeid = params.type_id;
        getDetail(params,`examination/teachers/items`).then(res=>{
          if(res.data.code===200){
            this.oData = res.data.data;
          }
        })
      },
      uploadTable(data){
        this.dialogTableVisible=!data
      },
      activeRoute() {

      },
      gggg(){
        if(this.iconState===false){
          this.yearState=true
          this.iconState=true
        }else if(this.iconState===true){
          this.yearState=false
          this.iconState=false
        }
      },
      renderHeader(h,{column}){
        return h(
          'div',
          [
            h('span', column.label),
            h('el-checkbox',{
              style:'display:inline-flex;margin-left:5px;',
              // on:{
              //   change: ($event, column) => this.select($event, column),
              // }
            }),
          ],
        )
      },
      tryout(item,index){
        console.log(item,index)
      },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          for (let i = 0; i < this.typeArr.length; i++) {
            let element = this.typeArr[i]
            for (let j = 0; j < element.length; j++) {
              let item = element[j]
              if (rowIndex === item) {
                if (j === 0) {
                  return {
                    rowspan: element.length,
                    colspan: 1
                  }
                } else if (j !== 0) {
                  return {
                    rowspan: 0,
                    colspan: 0
                  }
                }
              }
            }
          }
        }
      },
      tableRowClassName({row,rowIndex}) {
        let arr = this.hoverOrderArr
        for (let i = 0; i < arr.length; i++) {
          if (rowIndex === arr[i]) {
            return 'hovered-row'
          }
        }
      },
      cellMouseEnter(row, column, cell, event) {
        this.rowIndex = row.rowIndex;
        this.hoverOrderArr = [];
        this.typeArr.forEach(element => {
          if (element.indexOf(this.rowIndex) >= 0) {
            this.hoverOrderArr = element
          }
        })
      },
      cellMouseLeave(row, column, cell, event) {
        this.rowIndex = '-1'
        this.hoverOrderArr = [];
      },
      uploadDetail(data){
        this.examine=!data
      },
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@/styles/gatewayBase.scss";
  .examination {
    .assesSituation {
      overflow: hidden;
      .comprehensive {
        width: 300px;

        .total {
          font-size: 24px;
          color: $fontcolor2;
          margin-top: 40px;

          .yearTotal {
            font-size: 13px;
            color: #1f73cf;
            margin-left: 14px;
          }
        }
      }
      .commonComp {
        padding-left: 40px;
        padding-top: 24px;
        height: 150px;
        background-color: #f4f4f4;
        border: solid 1px #d2d2d2;
        /*opacity: 0.5;*/
      }
      .assessp {
        font-size: $fontSize16;
        color: $fontcolor2;
        font-weight: bold;
        margin: 0;
      }
      .scientific {
        width: 200px;
        margin-left: 19px;
        position: relative;

        .assessClass {
          margin-top: 40px;

          p {
            color: #777777;
            margin: 0;

            span {
              color: #454545;
              font-weight: bold;
            }
          }

          .performance {
            span {
              padding-left: 17px;
            }
          }

          .Number {
            margin-top: 10px;

            span {
              padding-left: 35px;
            }
          }
        }
      }
      .greenimg {
        width: 52px;
        height: 65px;
        position: absolute;
        right: -5px;
        top: -3px;
      }
      .redimg {
        width: 52px;
        height: 65px;
        position: absolute;
        right: -3px;
        top: -5px;
      }
      .equal {
        width: 230px;
        margin-left: 19px;
        .total {
          font-size: 25px;
          color: $fontcolor2;
          margin-top: 40px;
          .yearTotal {
            font-size: 13px;
            color: #1f73cf;
            margin-left: 14px;
          }
        }
      }
      .teacherCard {
        width: 194px;
        margin-left: 19px;

        .assessClass {
          margin-top: 23px;

          p {
            margin: 0;

            span {
              color: #454545;
              font-weight: bold;
            }
          }

          .Number {
            margin-top: 10px;
            color: #777777;

            span {
              padding-left: 21px;
            }
          }

          .performance {
            color: #777777;

            span {
              padding-left: 14px;
            }
          }
        }
      }
    }
    .progress {
      margin-top: 100px;

      .progressColor {
        width: 100%;
        height: 14px;
        background-image: linear-gradient(90deg,
          #cfecff 0%,
          #4293e8 100%);
        border-radius: 7px;
        position: relative;

        .colorImg {
          width: 63px;
          height: 34px;
          text-align: center;
          background-image: url("http://www.zq100.com/api/files/file?fileId=36d41a45b90743d8a1d98e0db4208c67");
          background-size: 100% 100%;

          span {
            color: #ff6621;
            font-size: $fontSize16;
          }
        }
      }

      .handleLink {
        margin-top: 28px;
        height: 20px;
        line-height: 20px;
        font-size: $fontSize19;
        color: $fontcolor2;
        overflow: hidden;

        .fl {
          span {
            color: #4393e8;
          }
        }

        .fr {
          font-size: $fontSize15;

          span {
            color: #4393e8;
            padding-right: 10px;
          }

          img {
            width: 15px;
            height: 10px;
          }
        }
      }

      .assessTotal {
        font-size: $fontSize18;
        color: $fontcolor2;
        margin-top: 21px;

        .sevenArticle {
          color: #4393e8;
        }

        .oneItem {
          color: #ff6621;
        }
      }

      .foreParts {
        overflow: hidden;
        margin-top: 50px;
        .recordData {
          width: 129px;
          height: 129px;
          text-align: center;
          .img {
            margin-left: 25px;
            width: 80px;
            height: 80px;
            line-height: 80px;
            border-radius: 50%;
            text-align: center;
            background-color:#4393e8;
            font-size:40px;
            color:$fontcolor;
          }
          p {
            margin: 0;
            font-size: $fontSize18;
            color: $fontcolor2;
            margin-top: 19px;
          }
        }

        .line {
          height: 129px;
          width: 220px;
          padding-top: 30px;
          position: relative;
         img{
           max-width: 100%;
           height: 26px;
         }
          .circular{
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: #fff;
            position: absolute;
            top: 30px;
            border:1px solid #d0d0d0;
          }
          .leftCircular{
            left: 0;
          }
          .rightCircular{
            right: 0;
          }
        }
      }
      .endProcess{
        overflow: hidden;
        position: relative;
        &:before{
          content: '';
          height: 100%;
          position: absolute;
          left: 11px;
          top: -25px;
          display: inline-block;
          border-left: 1px solid #e3e3e3;
          z-index: -1;
        }
        &.last:before{
          border-left: none;
        }
        .dataEntry{
         overflow: hidden;
          height: 50px;
          padding-top: 4px;
        }
        .processBall{
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background-color: #ffe1d4;
          position: relative;
          margin-right: 22px;
          top: -4px;
          .ball{
            width: 14px;
            height: 14px;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: #ff6621;
          }
        }
        .dataDetail{
          width: 977px;
          /*margin-top:4px;*/
          height: 40px;
          line-height: 32px;
          padding-bottom:5px;
          border-bottom: 1px dashed #0d1c28;
          /*overflow: hidden;*/
          position: relative;
          top: -5px;
          .fl{
            font-size: $fontSize18;
          }
          .fr{
            button{
              width: 88px;
              height: 30px;
              background-color: #eef3f9;
              border: solid 1px #8fa8c3;
              font-size: $fontSize15;
              color:#3b699a;
              border-radius: 5px;
            }
          }
        }
          .dataDetail1{
          width: 957px;
          height: 40px;
          line-height: 32px;
          padding-bottom:5px;
            margin-left: 20px;
          border-bottom: 1px dashed #0d1c28;
          overflow: hidden;
          position: relative;
          top: -5px;
          .fl{
            font-size: $fontSize18;
          }
        }
        .assignJob{
          padding-top: 10px;
          overflow: hidden;
          margin-top:55px;
        }
      }
    }
    .assessDialog{
      position: relative;
      .yearDialog{
        width: 80px;
        height: 110px;
        position: absolute;
        top: 10px;
        right: 0;
        background-color: #ffffff;
        box-shadow: 1px 1px 7px 2px
        #eeeeef;
        border-radius: 5px;
        z-index: 2;
        ul{
          margin:10px 0;
          li{
            height:30px;
            line-height:30px;
            text-align: center;
          }
          li:hover{
            background-color:$loginBorderColor;
          }
        }
      }
    }
    .stateDialog{
      padding-left: 51px;
      padding-top: 45px;
      position: relative;
      .selectNumber{
        padding-left: 50px;
      }
      .selectDialog{
        z-index: 1;
        width: 80px;
        height: 110px;
        position: absolute;
        top: 70px;
        left: 27px;
        background-color: #ffffff;
        box-shadow: 1px 1px 7px 2px
        #eeeeef;
        border-radius: 5px;
        ul{
          margin:10px 0;
          li{
            height:30px;
            line-height:30px;
            text-align: center;
          }
          li:hover{
            background-color:$loginBorderColor;
          }
        }
      }
      .table/deep/{
        margin-top: 30px;
        thead>tr,tbody>tr{
          height: 50px;
          line-height: 50px;
          font-size: 14px;
          text-align: center;
          .el-table_1_column_2{
            border-right:none;
          }
          button{
            width: 78px;
            height: 30px;
            background-color: #999999;
            border: solid 1px #8fa8c3;
            border-radius: 3px;
            color:$fontcolor2;
          }
        }
      }
    }
    .endBtn{
      margin-top: 100px;
      margin-bottom: 100px;
      text-align: center;
      button{
        width: 240px;
        height: 60px;
        background-color: #537eab;
        border-radius: 6px;
        color:$fontcolor;
        font-size: $fontSize20;
        outline:none;
        border:none;
      }
    }
  }
</style>
