<template>
  <div class="convenientService">
    <xdGroupTitle :groupTitle=SideServe :aboutNumber="ApplyList.length"></xdGroupTitle>
    <xdApply class="searchApply" :applyList="ApplyList" :moduleElShow="false" itemNum="6" :loading="loading"></xdApply>
  </div>
</template>

<script>
  import xdApply from '../public/Apply'
  import xdGroupTitle from '../public/GroupTitle'
  export default {
    name: "ConvenientService",
    props:{
      ApplyList:{
        type:Array
      },
      loading:{
        type:Boolean
      },
      SideServe:{
        type:String,
        default:'便捷服务'
      }
    },
    components:{
      xdGroupTitle,
      xdApply
    },
    data(){
      return{
        showMore:false,
      }
    }
  }
</script>

<style scoped lang="scss">
.convenientService {
  .groupTitle{
    margin-top: 0;
  }
}
</style>
