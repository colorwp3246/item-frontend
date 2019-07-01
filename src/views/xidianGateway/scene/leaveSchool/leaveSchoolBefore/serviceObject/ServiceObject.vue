<template>
  <div class="serviceObject main">
    <ModuleTitle moduleTitle="服务对象"></ModuleTitle>
    <ul class="serviceList">
      <li v-for="(item, index) in serviceList" :key="index" :style="{backgroundImage:'url(http://www.zq100.com/api/files/file?fileId=8b2025c6f6704665a726e6b430d3d9a0)'}">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  import ModuleTitle from '../../../../public/ModuleTitle'
  export default {
    name: "ServiceObject",
    components:{
      ModuleTitle
    },
    props:{
      serviceList:{
        type:Array
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.serviceList{
  margin: 20px 0;
  li{
    line-height: 38px;
    font-size: 16px;
    color: $ModuleTitle;
    background-repeat: no-repeat;
    background-position: 0px 12px;
    padding-left: 22px;
  }
}
</style>
