<template>
  <div class="problem main">
    <ModuleTitle moduleTitle="常见问题"></ModuleTitle>
    <dl class="problemBox" v-for="(item, index) in problem" :key="index">
      <dt class="title"><img class="itemsPng" :src="items" alt="">{{item.title}}</dt>
      <dd class="problem"><span>问题：</span>{{item.problem}}</dd>
      <dd class="answer"><span>答案：</span>{{item.answer}}</dd>
    </dl>
  </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  export default {
    name: "Problem",
    props:{
      'problem':{
        type:Array
      }
    },
    data(){
      return{
        items:`${process.env.PICTURE_SERVE}/file?fileId=b341615442b74131a362e730adb01a1d`,
      }
    },
    components:{
      ModuleTitle
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.problem{
  .problemBox{
    .title{
      font-size: 16px;
      font-weight: bold;
      margin: 34px 0 6px 0;
      position: relative;
      padding-left: 36px;
      .itemsPng{
        position: absolute;
        top: -4px;
        left: 0;
      }
    }
    .problem{
      span{
        color: $xd-red;
      }
    }
    .answer{
      span{
        color: $xd-lan1;
      }
    }
    dd{
      line-height: 38px;
      font-size: 15px;
    }
  }
}
</style>
