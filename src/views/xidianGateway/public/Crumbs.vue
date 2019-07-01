<!--面包屑导航-->
<template>
  <div class="Crumbs main">
    <ul class="clear">
      <li>当前位置：</li>
      <li @click="go()" class="crumbsItem">首页
        <span class="arrow">></span>
      </li>
      <li class="crumbsItem" v-for="(item, index) in crumbs" :key="index" :class="index == (crumbs.length-1)?'crumbsLast':''">
        {{item}}
        <span class="arrow" v-if="index !=(crumbs.length-1)">></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Crumbs",
  props:{
    'crumbs':{
      type: Array,
      required:true
    }
  },
  methods:{
    go(){
      if(sessionStorage.getItem('loginStatus')){
        this.$router.push('/IndexAfter')
      }else{
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .Crumbs{
    ul{
      margin: 30px 0 26px 0;
      li{
        float: left;
        &.crumbsLast{
          color: $centerPerRangBg ;
        }
        &.crumbsItem{
          cursor: pointer;
        }
        .arrow{
          font-family: '宋体';
          margin: 0 6px 0 1px;
        }
      }
    }
  }
  .Crumbs.borderBottom{
    ul{
      margin-bottom: 16px;
    }
  }
</style>
