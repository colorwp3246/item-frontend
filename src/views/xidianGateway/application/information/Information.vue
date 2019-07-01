<template>
  <div class="information main">
    <ModuleTitle moduleTitle="基本信息"></ModuleTitle>
    <div class="infTable clear" v-for="(item, index) in BaseMsg" :key="index">
      <span  v-for="(value, key, indexOf) in item" :key="indexOf">
        <span class="infItems tableTitle">{{key}}</span>
        <span class="infItems tableItem" :class="indexOf ==4?'langTd':''">{{value}}</span>
      </span>
    </div>


  </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  export default {
    name: "Information",
    components:{
      ModuleTitle,
    },
    data(){
      return{
        BaseMsg:[
          {'服务名称':'师生服务事项信息采集','服务部门':'信息网络技术中心','服务对象':'全体师生','服务时间':'长期','服务描述':'此处为该服务应用的具体描述信息，此处为该服务应用的具体描述信息此处为该服务应用的具体描述信息。'},
        ],
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.information{
  .infTable{
    border-top: $recomBorder;
    border-left: $recomBorder;
    margin-top: 18px;
    span{
      float: left;
    }
    .infItems{
      height: 48px;
      line-height: 48px;

      border-right: $recomBorder;
      border-bottom: $recomBorder;
      color: $ModuleTitle;
    }
    .tableTitle{
      width: 124px;
      text-align: center;
      background-color: $infTableBg;
    }
    .tableItem{
      width: 475px;
      padding: 0 10px;
      &.langTd{
        width: 1074px;
      }
    }
  }
}
</style>
