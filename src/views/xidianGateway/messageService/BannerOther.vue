<template>
    <div class="BannerOther" :style="{backgroundImage:'url(' + bgImg + ')'}">
    </div>
</template>

<script>
  export default {
    name: "BannerOther",
    props:{
      bgImg:{
        type:String
      }
    },
    data(){
      return{

      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.BannerOther{
  width: 1920px;
  height: 250px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  margin:0 auto;
}
</style>
