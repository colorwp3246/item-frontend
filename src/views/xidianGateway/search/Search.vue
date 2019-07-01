<template>
  <div class="search">
    <!--header-->
    <xdAfterLandingOther @scrollShowSearch="scrollShowSearch" :inputSearchShow="true"></xdAfterLandingOther>
    <xdBannerOther :bgImg="bgImg" @itemActive="activeRoute" :searchSelect="false" :selectdie="false"></xdBannerOther>
    <!--<select-contiton @tabHead="tableHead"></select-contiton>-->
    <div class="FullService-choice main">
      <div class="service-choice-box choice-key">
        <span class="choice-title">已选条件</span>
        <div class="choice-item-box clear">
          <span class="choice-key-item" v-for="(choiceKey,index) in choiceBox" :key="index" v-if="choiceKey">
            {{choiceKey}}
            <i class="delete-choice-key" @click="deleteChoiceKey(index)">&times;</i>
          </span>
          <span class="choice-key-clear" v-if="choiceClear" @click="deleteChoiceAll">· 清除全部</span>
        </div>
      </div>
      <div class="service-choice-box" v-for="(item,index) in choice" :key="index">
        <span class="choice-title">{{item.title}}</span>
        <div class="choice-item-box clear">
          <div class="fl">
            <span class="choice-item" :class="item.active===null?'active':''" @click="choiceAll(index)">全部</span>
          </div>
          <div class="fl" style="width:90%;position:relative;top:-7px;">
            <ul>
              <li class="choice-item" :class="item.active===key?'active':''" @click="choiceClick(index,key,serveItem)" v-for="(serveItem,key) in item.serveList" :key="key">{{serveItem}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="directives main">
      <select @mouseover="framover" @mouseout="framout">
        <option>自定义指令</option>
      </select>
      <div class="floatFrame" v-if="framChange" @click.stop="">
        <div class="outer">
          <span class="choice-title">已选</span>
          <div class="choice-item-box clear">
          <span class="choice-key-item" v-for="(choiceKey,index) in choiceBox" :key="index" v-if="choiceKey">
            {{choiceKey}}
            <i class="delete-choice-key" @click="deleteChoiceKey(index)">&times;</i>
          </span>
            <span class="choice-key-clear" v-if="choiceClear" @click="deleteChoiceAll">· 清除全部</span>
          </div>
        </div>
        <div class="outerCont">
          <el-checkbox-group v-model="checkList" @change="checkTab">
            <el-checkbox :label="item.lable" :value='item.value' v-for="(item,index) in creatTab.slice(1)" :key="index"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </div>
    <div class="main searchTable">
      <el-table
        :data="searchArr"
        ref="multipleTable"
        tooltip-effect="dark"
        style="width:100%"
        >
        <el-table-column label="序号" width="62px" type="index">
        </el-table-column>
        <template v-for='(col) in searchHead'>
          <el-table-column
            :show-overflow-tooltip="true"
            :prop="col.value"
            align='center'
            :label="col.lable"
            :key="col.value"
            >
          </el-table-column>
        </template>
        <el-table-column label="操作" width="100" align="center">
          <template slot-scope="scope">
            <el-button size="primary" class="del-com detailBtn" @click="delTabColOne()" >查看详情</el-button>
          </template>
        </el-table-column>
        <el-table-column label="电子档案" width="100" align="center">
          <template slot-scope="scope">
            <span style="color:#1f73cf;">下载<i class="el-icon-download" style="color:#1f73cf;"></i></span>
          </template>
        </el-table-column>
      </el-table>
      <xdPagination :pageAll="pageAll" @pageInfo="pageClick" pagestion="start"></xdPagination>
    </div>
    <Footer></Footer>
    <sidebar></sidebar>
  </div>
</template>

<script>
  import xdAfterLandingOther from '../public/AfterLandingOther'
  import xdBannerOther from '../public/BannerOther'
  import SelectContiton from '../public/SelectContiton'
  import xdPagination from '../public/Pagination'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    name: "Search",
    components: {
      xdAfterLandingOther,
      xdBannerOther,
      SelectContiton,
      xdPagination,
      Footer,
      sidebar
    },
    data() {
      return {
        searchBar: ['便捷服务', '服务事项', '常见问题', '政策新闻', '猜你想看'],
        guess: [],
        bgImg: `${process.env.PICTURE_SERVE}/file?fileId=ba337937a9c24b1ab804634a4bc7b924`,
        pageAll: 3,
        searchArr: [
          {
            id: 1,
            name: '李四',
            mostHonor: '省级一等奖',
            Education: '本科',
            sex: '男',
            age: 18,
            WhetherSchool: '是',
            WhetherInto: '是',
            teaching: "好的",
            dataTotal: 120,
            Institute:'交大1'
          },
          {
            id: 2,
            name: '张三',
            mostHonor: '省级一等奖',
            Education: '本科',
            sex: '男',
            age: 18,
            WhetherSchool: '是',
            WhetherInto: '是',
            teaching: "好的2",
            dataTotal: 130,
            Institute:'交大2'
          },
          {
            id: 2,
            name: '王五',
            mostHonor: '省级一等奖',
            Education: '本科',
            sex: '男',
            age: 18,
            WhetherSchool: '是',
            WhetherInto: '是',
            teaching: "好的3",
            dataTotal: 140,
            Institute:'交大3'
          },
          {
            id: 2,
            name: '赵四',
            mostHonor: '省级一等奖',
            Education: '本科',
            sex: '男',
            age: 18,
            WhetherSchool: '是',
            WhetherInto: '是',
            teaching: "好的2",
            dataTotal: 130,
            Institute:'交大2'
          },
          {
            id: 2,
            name: '刘能',
            mostHonor: '省级一等奖',
            Education: '本科',
            sex: '男',
            age: 18,
            WhetherSchool: '是',
            WhetherInto: '是',
            teaching: "好的3",
            dataTotal: 140,
            Institute:'交大3'
          },
          {
            id: 2,
            name: '王贵',
            mostHonor: '省级一等奖',
            Education: '本科',
            sex: '男',
            age: 18,
            WhetherSchool: '是',
            WhetherInto: '是',
            teaching: "好的2",
            dataTotal: 130,
            Institute:'交大2'
          },
          {
            id: 2,
            name: '法海',
            mostHonor: '省级一等奖',
            Education: '本科',
            sex: '男',
            age: 18,
            WhetherSchool: '是',
            WhetherInto: '是',
            teaching: "好的3",
            dataTotal: 140,
            Institute:'交大3'
          },
          {
            id: 2,
            name: '士林',
            mostHonor: '省级一等奖',
            Education: '本科',
            sex: '男',
            age: 18,
            WhetherSchool: '是',
            WhetherInto: '是',
            teaching: "好的3",
            dataTotal: 140,
            Institute:'交大3'
          },
          {
            id: 2,
            name: '许仙',
            mostHonor: '省级一等奖',
            Education: '本科',
            sex: '男',
            age: 18,
            WhetherSchool: '是',
            WhetherInto: '是',
            teaching: "好的3",
            dataTotal: 140,
            Institute:'交大3'
          },
          {
            id: 2,
            name: '黄尚',
            mostHonor: '省级一等奖',
            Education: '本科',
            sex: '男',
            age: 18,
            WhetherSchool: '是',
            WhetherInto: '是',
            teaching: "好的3",
            dataTotal: 140,
            Institute:'交大3'
          }
        ],
        framChange: false,
        tabCont: [],
        tabTitle: [],
        choiceClear:'',
        choiceBox:[null,null,null,null,null,null,null],
        choice:[
          {
            title:'学历',
            active:null,
            serveList:['本科','硕士','博士'],
          },
          {
            title:'性别',
            active:null,
            serveList:['男','女']
          },
          {
            title:'在校',
            active:null,
            serveList:['在校','离校']
          },
          {
            title:'获奖情况',
            active:null,
            serveList:['网上办事','信息查询','教务系统','数据服务','学习资源','效能评价','咨询建议','故障保修']
          },
          {
            title:'留学情况',
            active:null,
            serveList:['网上办事','信息查询','教务系统','数据服务','学习资源','效能评价','咨询建议','故障保修']
          },
          {
            title:'所属部门',
            active:null,
            serveList:['本科生院 ','本科生院 ','本科生院','本科生院','本科生院','本科生院 ','本科生院','本科生院','本科生院','本科生院 ','本科生院','本科生院','本科生院','本科生院','本科生院','本科生院']
          }
        ],
        creatTab:[
          {lable:"姓名",value:'name'},
          {lable:"最高荣誉",value:'mostHonor'},
          {lable:"学历",value:'Education'},
          {lable:"性别",value:'sex'},
          {lable:"年龄",value:'age'},
          {lable:"是否留校",value:'WhetherSchool'},
          {lable:"是否本校考入",value:'WhetherInto'},
          {lable:"教育教学",value:'teaching'},
          {lable:"数据总计",value:'dataTotal'},
          {lable:"所在学院",value:'Institute'},
        ],
        checkList:["最高荣誉","学历","性别","年龄","是否留校","是否本校考入","教育教学","数据总计","所在学院"],//复选框的数组
        checkHead:['最高荣誉','学历','姓别','年龄','是否留校','是否本校考入','教育教学','数据总计','所在学院'],
        searchHead:this.creatTab,
      }
    },
    mounted() {
      window.addEventListener('click', this.handleClick);
      this.searchHead=this.creatTab
    },
    watch: {},
    methods: {
      pageClick(data) {

      },
      scrollShowSearch() {

      },
      activeRoute() {

      },
      framover() {
        this.framChange = true
      },
      framout() {
        // this.framChange = false
      },
      choiceClick(i,k,n){ //筛选
        this.choice[i].active=k;
        // this.choiceBox[i]=n;
        this.choiceBox.splice(i,1,n)
        this.choiceClearKey();
      },
      choiceAll(i){     //筛选全部
        this.choice[i].active=null;
        // this.choiceBox[i]=null;
        this.choiceBox.splice(i,1,null)
        this.choiceClearKey()
      },
      deleteChoiceKey(i){ //删除赛选
        this.choiceBox.splice(i,1,null)
        // this.choiceBox[i]=null;
        this.choice[i].active=null;
        console.log('次数'+i)
        this.choiceClearKey()
      },
      deleteChoiceAll(){  //清除全部
        this.choiceBox=[];
        // this.choice[0].active=this.choice[1].active=this.choice[2].active=this.choice[3].active=null;
        this.choice.forEach(item=>item.active=null)
        this.choiceClearKey()
      },
      choiceClearKey(){ //显示/隐藏全部清除按钮
        if(this.choiceBox[0]==null&&this.choiceBox[1]==null&&this.choiceBox[2]==null&&this.choiceBox[3]==null){
          this.choiceClear= false;
        }else{
          this.choiceClear= true;
        }
      },
      // tableHead(data) {
      //   console.log(data, '父给子传值')
      //   this.tabCont = data.newVal
      //   this.tabTitle = data.arr
      // },
      checkTab(){
        this.searchHead=[];
        this.checkList.forEach(item=>{
          this.creatTab.forEach(ite=>{
            if(item===ite.lable){
              this.searchHead.push(ite)
            }
          })
        })
      },
      handleClick(){
        this.framChange = false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";

  .search {
    .directives {
      margin-top: 50px;
      position: relative;

      .floatFrame {
        width: 680px;
        height: 180px;
        position: absolute;
        left: 0;
        top: 40px;
        z-index: 1000;
        background-color: #ffffff;
        box-shadow: 1px 1px 7px 2px #eeeeef;
        .outer {
          padding-left: 10px;
          padding-top: 10px;
          .choice-title {
            color: $ModuleTitle;
            font-size: 15px;
            font-weight: bold;
            margin-left: 10px;
            margin-right: 20px;
            position: absolute;
            top: 9px;
            left: 0;
            cursor: pointer;
          }
          .choice-item-box {
            margin-left: 60px;

            .choice-key-item {
              font-size: 15px;
              color: $ModuleTitle;
              /*margin-top: 4px;*/
              margin-right: 20px;
              padding: 2px 2px 2px 10px;
              cursor: pointer;
              height: 26px;
              line-height: 18px;
              border-radius: $borderRadius;
              border: 1px solid $choiceBorder;
              background-color: $choiceBg;

              .delete-choice-key {
                display: inline-block;
                width: 16px;
                text-align: center;
                font-style: normal;
                color: $choiceColor;
                height: 21px;
                font-size: 18px;
              }
            }

            .choice-key-clear {
              color: $choiceClear;
              margin-top: 5px;
              cursor: pointer;
            }
          }
        }
        .outerCont{
            margin-top: 50px;
            padding-left: 10px;
            .el-checkbox-group{
              width: 680px;
              .el-checkbox{
                width: 136px;

              }
            }
          .el-checkbox+.el-checkbox{
            margin-left: 0;
          }
            span{
              font-size: 16px;
              color:$ModuleTitle;
              margin-right: 30px;
            }
      }
      }

      select {
        border-color: #1f73cf;
      }
    }

    .searchTable {
      margin-top: 20px;
      .el-table{

      }
    }
    .detailBtn{
      padding:5px 6px;
      font-size: 10px;
      color:white;
    }
  }
  .FullService-choice{
    box-shadow: $infBoxShadow;
    position: relative;
    padding: 20px;
    margin: 25px auto;
    &:hover{
      box-shadow: $boxShadowHover;
      transition: all .3s;
    }
    .choice-key{
      border-bottom: 1px solid $footerBgLine;
      .choice-key-item{
        font-size: 15px;
        color: $ModuleTitle;
        margin-top: 4px;
        margin-right: 20px;
        padding: 2px 2px 2px 10px;
        cursor: pointer;
        height: 26px;
        line-height: 18px;
        border-radius: $borderRadius;
        border: 1px solid $choiceBorder;
        background-color: $choiceBg;
        .delete-choice-key{
          display: inline-block;
          width: 16px;
          text-align: center;
          font-style: normal;
          color: $choiceColor;
          height: 21px;
          font-size: 18px;
        }
      }
      .choice-key-clear{
        color: $choiceClear;
        margin-top: 5px;
        cursor: pointer;
      }
    }
    .service-choice-box{
      margin: 6px 0;
      position: relative;
      min-height: 40px;
      padding-top: 10px;
      .choice-title{
        color: $ModuleTitle;
        font-size: 15px;
        font-weight: bold;
        margin-right: 30px;
        position: absolute;
        top: 9px;
        left: 0;
        cursor: pointer;
      }
      .choice-item-box{
        margin-left: 100px;
        ul{
          clear:both;
          li{
            float: left;
          }
        }
        .choice-item{
          font-size: 15px;
          color: $ModuleTitle;
          margin-top: 4px;
          margin-right: 20px;
          padding: 3px 14px;
          cursor: pointer;
          border:1px solid transparent;
          &:hover{
            border:1px solid $choiceBorder;
            border-radius: $borderRadius;
            background-color: $choiceBg;
          }
          &.active{
            background-color: $active;
            color: #ffffff;
            border-radius: $borderRadius;
          }
        }
      }

    }
  }
</style>
