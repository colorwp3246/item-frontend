<!--搜索结果页 服务事项 常见问题 政策新闻 猜你想看-->
<template>
  <div class="searchCell">
    <div v-if="searchCell.length>0">
      <ul class="searchCellBox">
        <li class="searchCellItem" v-for="(item, index) in searchCell" v-if="index < showNumber && !searchMore" :key="index">
          <img :src="diamond" alt="" v-if="headlines"><span v-else>{{index+1}}、</span>{{item.title}}
        </li>
        <li class="searchCellItem" v-for="(item, index) in searchCell" v-if="searchMore" :key="index">
          {{index+1}}、{{item.title}}
        </li>
      </ul>
      <ShowMore :showMore="searchCell.length>showNumber" @clickMore="clickMore"></ShowMore>
    </div>
    <div v-else>
      <div class="searchNull">没有相关信息</div>
    </div>
  </div>
</template>

<script>
  import ShowMore from '../public/ShowMore'
  export default {
    name: "SearchCell",
    components:{
      ShowMore
    },
    data(){
      return{
        diamond:`${process.env.PICTURE_SERVE}/file?fileId=d6b3f50127ae453f9f1a12665ed8051b`,
        searchMore:false  //显示全部展开
      }
    },
    props:{
      'searchCell':{
        type:Array
      },
      'showNumber':{
        type:Number,
        default:true
      },
      headlines:{
        type:String
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
.searchCell{
  .searchCellBox{
    margin-top: 20px;
    .searchCellItem{
      height: 50px;
      line-height: 50px;
      color: $ModuleTitle;
      border-bottom: 1px dashed $searchCellBorderColor;
      img{
        margin-right: 13px;
      }
    }
  }
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
  .searchNull{
    font-size: 16px;
    color: $ModuleTitle;
    text-align: center;
    margin: 50px 0;
  }
}
</style>
