<template>
  <div class="dialogTime">
    <div class="title">
      {{dialogTitle}}
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      dialogTitle:{
        type:String
      }
    },
    data(){
      return{

      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@/styles/gatewayBase.scss";
  .dialogTime{
    margin:21px 0;
    .title{
      font-size:$fontSize18;
      color:$fontcolor2;
      font-weight:bold;
    }
  }
</style>
