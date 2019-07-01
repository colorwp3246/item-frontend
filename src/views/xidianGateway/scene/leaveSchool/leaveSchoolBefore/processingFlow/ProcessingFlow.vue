<template>
  <div class="processingFlow main">
    <ModuleTitle moduleTitle="办理流程"></ModuleTitle>
    <div class="processingFlow-list">
      <button @click="modelAlert" v-for="(item, index) in processingFlow" class="hoverTop" :key="index" :style="{marginRight:(index+1)%5==0?'0px':'17px',backgroundImage:'url(http://www.zq100.com/api/files/file?fileId=8b2025c6f6704665a726e6b430d3d9a0)'}">
        {{item.title}}
      </button>
      <div class="otherTip">
        <span>注：</span>离校服务以上手续无先后顺序，但宿舍手续办理需在财务手续办理完成后进行，请同学们悉知。
      </div>
    </div>
  </div>
</template>

<script>
  import ModuleTitle from '../../../../public/ModuleTitle'
  import Notice from '../../../../scene/scenePublice/alert/Notice'
  export default {
    name: "ProcessingFlow",
    props:{
      processingFlow:{
        type:Array
      }
    },
    components:{
      ModuleTitle
    },
    methods:{
      modelAlert(){
        this.$layer.iframe({
          content: {
            content: Notice,
            parent: this,
            data:{},
          },
          area:['800px'],
          title: '财务手续办理-办理须知',

        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.processingFlow{
  .processingFlow-list{
    button{
      width: 226px;
      height: 62px;
      border: none;
      margin-top: 22px;
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
      text-align: left;
      padding-left: 64px;
      background-position: 38px 25px;
      background-repeat: no-repeat;
      background-color: $leaveBtnBg;
      border-radius: $borderRadius;
      cursor: pointer;
      &:hover{
        background-color: $centerPerRangBg;
        transition: all .3s;
      }
    }
    .otherTip{
      margin-top: 20px;
      border-top: 1px dashed $heardLine;
      padding: 24px 0 50px 0;
      color: $newsTimeColor;
      span{
        color: $xd-red;
      }
    }
  }
}
</style>
