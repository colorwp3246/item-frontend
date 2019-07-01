<template>
  <div class="mode main">
    <ModuleTitle moduleTitle="办理方式"></ModuleTitle>
    <div class="modeBox">
      <p class="modeText" v-for="(item, index) in modes" :key="index">
        {{item}}
      </p>
    </div>
  </div>
</template>

<script>
import ModuleTitle from '../../public/ModuleTitle'
export default {
  name: "Mode",
  props:{
    'modes':{
      type:Array
    }
  },
  components:{
    ModuleTitle
  }
}
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.mode{
  .modeBox{
    padding-top: 40px;
    .modeText{
      line-height: 34px;
    }
  }

}
</style>
