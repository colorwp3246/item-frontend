<template>
  <el-tabs class="main mt10" v-model="activeName">
    <el-tab-pane label="充值缴费" name="first">
      <div class="content h02">

      </div>
    </el-tab-pane>
    <el-tab-pane label="账单查询" name="second">
      <div class="content h03">

      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {

    name: "hot-tab",
    components:{

    },
    data(){
      return{
        activeName:'first'
      }
    }
  }
</script>

<style scoped lang="scss">
  /*重写element-ui tab组件的样式*/
  .el-tabs /deep/{
    .el-tabs__item{
      height:50px;font-size:24px;
      font-weight:bold;
    }
    .el-tabs__nav-wrap::after {
      height: 5px;
      background-color: #0d1c28;
    }
    .is-active,.el-tabs__item:hover{
      color:#4373a8;
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
