<template>
    <div class="news main">
      <ModuleTitle :to="to" moduleTitle="政策新闻"></ModuleTitle>
      <div class="newsList-box" @click="go()">
        <ul class="newsList">
          <li v-for="(item, index) in news" :key="index" :title="item.title.substring(0,26)">
            <div>
              <h1>{{item.title}}</h1>
              <p>{{item.summary.substring(0,64)}}...</p>
              <span class="news-time">{{item.date}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  export default {
    props:{
      news:{
        type:Array,
        default:[]
      }
    },
    name: "Apply",
    components: {
      ModuleTitle,
    },
    data(){
      return{
        to:'/News',
        newsList:[],
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .news{
    padding-top: 28px;
    .newsList-box{
      margin-top: 36px;
      .newsList{
        display: table;
        width: calc(100% + 34px);
        table-layout: fixed;
        li{
          float: left;
          width: 410px;
          height: 242px;
          display: table-cell;
          div{
            width: 380px;
            height: 242px;
            display: inline-block;
            padding: 30px 40px;
            box-shadow: $boxShadow;
            position: relative;
            top: 0;
            &:hover{
              box-shadow: $boxShadowHover;
              cursor: pointer;
              top: $top;
              transition:  $transition;
            }
            h1{
              font-size: 20px;
              color: $newsTitleColor;
              font-weight: normal;
              line-height: 34px;
            }
            p{
              line-height: 18px;
              color: $newsItemColor;
              margin-top: 10px;
              font-size: 13px;
              text-indent: 2em;
            }
            .news-time{
              position: absolute;
              bottom: 10px;
              left: 36px;
              color: $newsTimeColor;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
</style>
