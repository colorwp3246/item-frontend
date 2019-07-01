<template>
  <div class="entryIntroduce main">
    <div class="entryIntroduceBox">
      <div class="entryIntroduceTitle">{{entryIntroduce[0].title}}</div>
      <ul>
        <li v-for="(item, index) in entryIntroduce[0].items" :key="index"><span class="sequence">{{index+1}}</span>{{item}}</li>
      </ul>
      <img class="scenePubliceTtile" :src="scenePubliceTtile" alt="">
      <img class="scenePubliceFooter" :src="scenePubliceFooter" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "EntryIntroduce",
  props:{
    entryIntroduce:{
      type:Array
    }
  },
  data(){
      return{
        scenePubliceFooter:`${process.env.PICTURE_SERVE}/file?fileId=cbf5eacb1a0a41b9ab467007b29534dd`,
        scenePubliceTtile:`${process.env.PICTURE_SERVE}/file?fileId=37acff3c8f274380abb4c6700baec6bb`,
      }
    },
}
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.entryIntroduceBox{
  min-height: 250px;
  position: relative;
  padding: 50px 0px 80px 60px;
  box-shadow: $infBoxShadow;
  margin-top: 44px;
  &:hover{
    box-shadow: $boxShadowHover;
    transition: $transition;
  }
  .entryIntroduceTitle{
    position: absolute;
    top: 5px;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 66;
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
  }
  .scenePubliceTtile{
    position: absolute;
    top: 0;
    left: 0;
  }
  .scenePubliceFooter{
    position: absolute;
    bottom: 0;
    left: 0;
  }
  ul{
    li{
      line-height: 38px;
      font-size: 16px;
      color: $ModuleTitle;
    }
  }
}
</style>
