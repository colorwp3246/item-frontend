<template>
  <div class="Application main">
    <ModuleTitle moduleTitle="应用入口"></ModuleTitle>
    <div class="ApplicationBox clear">
      <div class="ApplicationCell" v-for="(item, index) in application" v-if="index<showNumber && !searchMore" :key="index" :style="{marginRight:(index+1)%4==0?'0px':'23px'}">
        <img class="img" :src="item.icon" alt="">
        <div class="title">{{item.title}}</div>
        <p class="describe">{{item.describe}}</p>
      </div>
      <div class="ApplicationCell" v-for="(item, index) in application" v-if="searchMore" :key="index" :style="{marginRight:(index+1)%4==0?'0px':'23px'}">
        <img class="img" :src="item.icon" alt="">
        <div class="title">{{item.title}}</div>
        <p class="describe">{{item.describe}}</p>
      </div>
    </div>
    <ShowMore :showMore="application.length>showNumber" @clickMore="clickMore"></ShowMore>
  </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  import ShowMore from '../../public/ShowMore'

  export default {
    name: "Application",
    components:{
      ModuleTitle,
      ShowMore
    },
    props:{
      application:{
        type:Array
      },
      showNumber:{
        type:String
      }
    },
    data(){
      return{
        searchMore:false
      }
    },
    methods:{
      clickMore(key){ //点击展示更多
        this.searchMore = key;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.Application{
  .ApplicationBox{
    padding-top: 40px;
    .ApplicationCell{
      width: 282px;
      height: 226px;
      margin-bottom: 16px;
      float: left;
      cursor: pointer;
      box-shadow: $boxShadow;
      position: relative;
      top: 0;
      &:hover{
        box-shadow: $boxShadowHover;
        transition: all .3s;
        top: $top;
      }
      .img{
        margin: 50px 0 0 114px;
      }
      .title{
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin: 6px 0 6px 0;
      }
      .describe{
        width: 230px;
        margin: 0 auto;
        text-align: center;
        font-size: 13px;
        line-height: 20px;
        color: $newsItemColor;
      }
    }
  }
}

</style>
