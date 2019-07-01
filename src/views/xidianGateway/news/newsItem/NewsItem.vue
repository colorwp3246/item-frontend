<template>
  <div class="newsItem main">
    <div class="newsCell clear" v-for="(item, index) in newsList" :key="index" @click="news(item)">
      <span class="newsDate">
        <img :src="newsDate" alt="">
        <i>{{item.date[1]}}</i>
        <em>{{item.date[0]}}</em>
      </span>
      <div class="newsBox">
        <h1 @click="newsCell()">{{item.title}}</h1>
        <p>{{item.summary}}</p>
        <p>{{item.describe}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewsItem",
    props:{
      newsList:{
        type:Array
      }
    },
    data() {
      return {
        newsDate:`${process.env.PICTURE_SERVE}/file?fileId=6d7a053d4b6343c98014777345ad81ed`,
      }
    },
    methods:{
      // newsCell(){
      //   this.$router.push('/NewsCell')
      // },
      news(item){
        window.open(item.url)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.newsItem{
  .newsCell{
    padding: 30px 0;
    border-bottom: 1px dashed $newsBottomColor;
    .newsBox{
      float: right;
      width: 1110px;
      margin-top: -6px;
      h1{
        font-size: 18px;
        color: $ModuleTitle;
        margin-bottom: 16px;
        margin-top: 5px;
        cursor: pointer;
      }
      p{
        font-size: 14px;
        color: $newsTextColor;
        line-height: 24px;
      }
    }
    .newsDate{
      width: 66px;
      height: 88px;
      display: inline-block;
      position: relative;
      i{
        position: absolute;
        top: 34px;
        left: 16px;
        font-weight: bold;
        font-size: 27px;
        font-style: normal;
        display: inline-block;
        font-family: Arial, Helvetica, sans-serif;
      }
      em{
        position: absolute;
        top: 69px;
        left: 9px;
        font-size: 12px;
        font-weight: bold;
        font-style: normal;
        display: inline-block;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
  }
}
</style>
