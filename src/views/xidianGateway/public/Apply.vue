<template>
    <div class="apply main">
      <!--<ModuleTitle moduleTitle="热门应用" v-if="moduleElShow"></ModuleTitle>-->
      <div class="apply-list-box">
        <div v-if="loading" class="noData">数据加载中...</div>
        <div v-else>
          <div v-if="applyList && applyList.length>0">
            <ul class="apply-list clear">
              <!--显示传入条数-->
              <li v-for="(item, index) in applyList" v-if="index<itemNum &&!searchMore" :key="index" @click="appGo(item.app_URL,item.app_NAME,item.app_ID)" :title="item.app_NAME">
              <span>
                <img :src="item.icon" alt=""/>
                <p>{{item.app_NAME}}</p>
              </span>
              </li>
              <!--显示全部-->
              <li v-for="(item, index) in applyList" v-if="searchMore" :key="index" @click="appGo(item.app_URL,item.app_NAME,item.appID)" :title="item.app_NAME">
            <span>
              <img :src="item.icon" alt="">
              <p>{{item.app_NAME}}</p>
            </span>
              </li>
            </ul>
            <ShowMore :showMore="!moduleElShow" @clickMore="clickMore" v-if="applyList.length>itemNum"></ShowMore>
          </div>
          <div v-else class="noData">查询结果为空</div>
        </div>
      </div>
    </div>
</template>

<script>
  import ModuleTitle from './ModuleTitle'
  import ShowMore from './ShowMore'
  export default {
    name: "Apply",
    props:{
      moduleElShow:{
        type:Boolean
      },
      'applyList':{
        type:Array
      },
      'itemNum':{
        type:String
      },
      loading:{
        type: Boolean
      }
    },
    components:{
      ModuleTitle,
      ShowMore
    },
    data(){
      return{
        searchMore:false,  //显示全部展开
        baseUrl:''
      }
    },
    methods:{
      appGo(url,name,id){
        this.$router.push({
          path: '/Application',
          name: 'Application',
          query: {
            title:name,
            appId:id,
            href:url,
          }
        })
      },
      clickMore(key){ //点击展示更多
        this.searchMore = key;
      }
    },
    created(){

    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .apply-list-box{
    margin-top: 28px;
    overflow: hidden;
    .apply-list{
      display: table;
      width: calc(100% + 22px);
      table-layout: fixed;
      li{
        float: left;
        width: 173px;
        height: 164px;
        padding: 6px 0 6px 4px;
        display: table-cell;
        span{
          height: 154px;
          width: 154px;
          display: inline-block;
          box-shadow: $boxShadow;
          position: relative;
          top: 0;
          text-align: center;
          &:hover{
            box-shadow: $boxShadowHover;
            cursor: pointer;
            top: $top;
            transition:  $transition;
          }
          img{
            margin-top: 36px;
            height: 40px;
          }
          p{
            text-align: center;
            font-size: 16px;
            color: $applyColor;
            margin-top: 12px;
          }
        }
      }
    }
  }
  .convenientService .searchApply .apply-list li{
    width: 174px;
  }
  .searchApply{
    width: inherit;
    .apply-list{
      li{
        width: 182px;
      }
    }
  }
</style>

