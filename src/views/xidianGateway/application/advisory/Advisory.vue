<template>
  <div class="advisory main">
    <ModuleTitle moduleTitle="咨询投诉"></ModuleTitle>
    <div class="flowBox clear">
      <div class="flowItem" v-for="(item, index) in advisory" :key="index" :class="index==0?'flowLeft':'flowRight'">
        <h1>{{item.title}}</h1>
        <p>{{item.tel}}</p>
        <p>{{item.net}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  export default {
    name: "Advisory",
    props:{
      'advisory':{
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
.advisory{
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
  }
  .flowLeft{
    float: left;
  }
  .flowRight{
    float: right;
  }
}
</style>
