<template>
  <div class="flow main">
    <ModuleTitle moduleTitle="办理流程"></ModuleTitle>
    <div class="flowBox clear">
      <div class="flowItem" v-for="(item, index) in flow" :key="index" :class="index==0?'flowLeft':'flowRight'">
        <h1>{{item.title}}</h1>
        <p>{{item.describe}}</p>
        <button class="change hoverTop">查看流程图</button>
      </div>
    </div>
  </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  export default {
    name: "Flow",
    props:{
      'flow':{
        type:Array
      }
    },
    components:{
      ModuleTitle
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.flow{
  .flowBox{
    .flowItem{
      width: 600px;
      h1{
        font-size: 18px;
        color: $ModuleTitle;
        margin-top: 34px;
      }
      p{
        font-size: 15px;
        color: $ModuleTitle;
        margin: 14px 0 12px 0;
      }
      .hoverTop{
        width: 100px;
        height: 36px;
        line-height: 36px;
      }
    }
    .flowLeft{
      float: left;
    }
    .flowRight{
      float: right;
    }
  }
}
</style>
