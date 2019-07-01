<template>
  <el-tabs class="main mt10" v-model="activeName">
    <el-tab-pane label="入职办理" name="first">
      <!--入职办理-->
      <xdEntryProcessing></xdEntryProcessing>
    </el-tab-pane>
    <el-tab-pane label="常见问题" name="second">
     <!--常见问题-->
      <xdProblem :problemList="problemList"></xdProblem>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  // import {getUserInfo} from '@/api/apiPublic'
  // import layer from 'vue-layer'


  import xdProblem from '../../../../scene/entry/entryAfter/entryProcessing/Problem'
  import xdEntryProcessing from '../../../../scene/entry/entryAfter/entryProcessing/EntryProcessing'

  export default {

    name: "hot-tab",
    components:{
      xdProblem,
      xdEntryProcessing
    },
    data(){
      return{
        activeName:'first',
        problemList:[
          {
            title:'新进A类（直接引进）人员及师资博后需要提交哪些材料？',
            items:[
              '体验报告（原则上一个月有效）',
              '干部履历表',
              '工资核定表',
              '报到证/行政介绍信/离职证明/博士后入站介绍信原件',
              '工作合同一份',
              '有工作经历者需提供个人养老保险缴费明细'
            ]
          },
          {
            title:'办理社保需要提交哪些材料？',
            items:[

            ]
          },
          {
            title:'新进B类人员需要提交哪些材料？',
            items:[

            ]
          },
          {
            title:'Ａ类人员、师资博后与Ｂ类人员五险一金缴纳方式有何区别？',
            items:[

            ]
          },
          {
            title:'新来人员工资何时发放？',
            items:[

            ]
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  /*重写element-ui tab组件的样式*/
  .el-tabs /deep/{
    .el-tabs__item{
      height:50px;font-size:24px;
    }
    .el-tabs__nav-wrap::after {
      height: 5px;
      background-color: #0d1c28;
    }
    .el-tabs__active-bar {
      height:5px;
      background-color: #0d1c28;
    }
    .el-tabs__header{
      margin:40px 0 0;
    }
  }
  .mt10{margin-top:10px;}
</style>
