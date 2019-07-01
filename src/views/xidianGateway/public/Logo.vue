<template>
  <div class="logo">
    <img :src="logo2" @click="index()" class="heard-logo" :alt="xdTitle" :title="xdTitle">
  </div>
</template>

<script>
export default {
  name: "AfterLanding",
  data(){
    return{
      logo2:`${process.env.PICTURE_SERVE}/file?fileId=6dce5655b4d04ea4a124dbad63a5b82e`,
      xdTitle:process.env.NODE_TITLE
    }
  },
  methods:{
    index(){
      if(JSON.parse(sessionStorage.getItem('loginStatus'))){
        this.$router.push('/IndexAfter')
      }else{
        this.$router.push('/IndexAfter')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";

  .logo{
    .heard-logo{
      margin-top: 14px;
      cursor: pointer;
    }
  }


</style>
