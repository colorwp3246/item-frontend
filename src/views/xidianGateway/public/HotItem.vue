<template>
    <div class="apply main">
      <!--<ModuleTitle moduleTitle="热门事项" v-if="moduleElShow"></ModuleTitle>-->
      <div class="apply-list-box">
        <div v-if="loading" class="noData">数据加载中...</div>
        <div v-else>
          <div v-if="hotItemList && hotItemList.length>0">
            <ul class="apply-list clear">
              <!--显示传入条数-->
              <li v-for="(item, index) in hotItemList" v-if="index<itemNum &&!searchMore" :key="index"  :title="item.app_NAME">
                <a @click="getHref(item.title)">{{item.title}}</a><span><a @click="getHref(item.title)" class="item_btn">指南</a><a @click="appGo(item.app_URL,item.app_NAME,item.app_ID)" class="item_btn">办理</a></span>
              </li>
              <!--显示全部-->
              <li v-for="(item, index) in hotItemList" v-if="searchMore" :key="index"  :title="item.app_NAME">
                <a @click="getHref(item.title)">{{item.title}}</a><span><a @click="getHref(item.title)" class="item_btn">指南</a><a @click="appGo(item.app_URL,item.app_NAME,item.app_ID)" class="item_btn">办理</a></span>
              </li>
            </ul>
            <ShowMore :showMore="!moduleElShow" @clickMore="clickMore" v-if="hotItemList.length>itemNum"></ShowMore>
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
    name: "hotItem",
    props:{
      'moduleElShow':{
        type:Boolean
      },
      'hotItemList':{
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
          path: '/eventStepOne',
          name: 'eventStepOne',
        })
      },
      getHref(title){
        this.$router.push({ path: '/Application',name:'Application', query: { title: title }})
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
      li{
        padding: 18px 0 15px 4px;
        border-bottom:solid 1px #e1e1e1;
        color:#666;
        span{
          float:right;
        }
        background:url('http://www.zq100.com/api/files/file?fileId=244c0961d75a478b9477eb137d607258') no-repeat left center;
        padding-left:20px;
        .item_btn{
          display:inline-block;
          padding:5px 10px;
          background:#e0f2f9;
          color:#169bd5;
          border-radius:3px;
          margin-left:5px;
        }
      }
    }
  }
</style>

