<template>
  <div class="yearTitle">
    <div class="yearHead main">
      <span>{{yearTitle}}</span>
      <span class="commonProblem" v-if="commonProblem">{{commonProblem}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      yearTitle:{
        type:String,
      },
      commonProblem:{
        type:String,
      },
    },
    data(){
      return{

      }
    }
  }
</script>
<style lang="scss" scoped>
  .yearTitle{
    width: 100%;
    margin: 50px 0;
    .yearHead{
      /*width: 100%;*/
      height: 41px;
      line-height: 41px;
      border-bottom: 5px solid #0d1c28;
      span{
        color:#0d1c28;
        font-size: 22px;
        font-weight: bold;
      }
      .commonProblem{
        font-size: 22px;
        color: #666666;
        padding-left: 27px;
      }
    }
  }
</style>
