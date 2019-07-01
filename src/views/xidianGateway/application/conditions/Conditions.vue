<!--受理条件-->
<template>
   <div class="conditions main">
     <ModuleTitle moduleTitle="受理条件"></ModuleTitle>
     <h1>下列人员需及时完成{{title}}：</h1>
     <ul>
       <li v-for="(item, index) in conditions">{{index+1}}、{{item}};</li>
     </ul>
   </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  export default {
    name: "Conditions",
    props:{
      'conditions':{
        type:Array
      },
      'title':{
        type: String
      }
    },
    components:{
      ModuleTitle,
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.conditions{
  h1{
    font-size: 16px;
    font-weight: bold;
    color: $ModuleTitle;
    margin: 20px 0 12px 0;
  }
  ul{
    li{
      font-size: 15px;
      color: $ModuleTitle;
      line-height: 38px;
    }
  }
}
</style>
