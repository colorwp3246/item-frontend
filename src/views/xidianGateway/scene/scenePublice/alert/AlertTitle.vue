<template>
  <div class="alertTitle">
    <div class="title">{{alertTitle}}</div>
  </div>
</template>

<script>
export default {
  name: "AlertTitle",
  props:{
    alertTitle:{
      type:String
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.alertTitle{
  .title{
    font-size: 16px;
    border-left: 4px solid $active;
    padding-left: 9px;
    height: 16px;
    line-height: 16px;
    font-weight: bold;
    color: $ModuleTitle;
  }
}
</style>
