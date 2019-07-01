<template>
  <div class="ShowMore">
    <div v-if="showMore" class="searchMore" @click="clickShowMores()" v-html="searchMore?'收起':'全部展开'"></div>
  </div>
</template>

<script>
  export default {
    name: "ShowMore",
    props:{
      showMore:{
        type:Boolean
      }
    },
    data(){
      return{
        searchMore:false
      }
    },
    methods:{
      clickShowMores(){
        this.searchMore = !this.searchMore;
        this.$emit('clickMore',this.searchMore)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.ShowMore{
  .searchMore{
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: $active;
    background-color: $searchMoreBg;
    text-align: center;
    font-weight: bold;
    margin-top: 20px;
    cursor: pointer;
    &:hover{
      background-color: $searchMoreBgH;
    }
  }
}
</style>
