<template>
  <div class="modePage">
    <div class="body" @click="go">

    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      go(){
        console.log("gggg")
        this.$router.push({path:'/eventStepTwo'})
      }
    }
  }
</script>
<style scoped lang="scss">
  .modePage{
    width: 100%;
    height: 100%;
    .body{
      width: 1920px;
      height:1614px;
      margin: 0 auto;
      background:url("http://www.zq100.com/api/files/file?fileId=878689a3952e40feafbe1dfe8c6f2518") no-repeat;
      background-size: 100% 100%;
      position: relative;
      top: 7px;
    }
  }
</style>
