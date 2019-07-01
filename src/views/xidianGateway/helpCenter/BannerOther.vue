<template>
    <div class="BannerOther" :style="{backgroundImage:'url(' + bgImg + ')'}">
      <div class="search_box">
        <input type="text" v-model="inputValue"/><span @click="searchkey">&nbsp;</span>
      </div>
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
        inputValue:''
      }
    },
    methods:{
      searchkey(){
        this.$emit('sureBtn',this.inputValue)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.BannerOther{
  height: 350px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
}
.search_box{
  position: absolute;
  left: 33%;
  top: 55%;
  width: 34%;
  height: 17%;
  input{
    border: 0px;
    width: 88%;
    height: 100%;
    padding: 10px;
    outline: none;
    background: transparent;
  }
  span{
    display: block;
    width: 12%;
    height: 100%;
    float: right;
  }
}
</style>
