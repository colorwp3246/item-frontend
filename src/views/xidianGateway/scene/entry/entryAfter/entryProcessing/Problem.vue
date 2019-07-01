<template>
  <div class="problem">
    <div class="problemTitle" v-for="(item, index) in problemList" :key="index" @click="problemShow(index)">
      <dl>
        <dt>
          <span>问：</span>
          {{item.title}}
          <img v-if="index ==showActive" class="arrow" :src="arrow2" alt="">
          <img v-else class="arrow" :src="arrow1" alt="">
        </dt>
        <dd v-if="index ==showActive" :class="key==0?'first':key==item.items.length-1?'last':''" v-for="(value, key) in item.items" :key="key">
          <span v-if="key==0">答：</span>
          <img :src="entryArrow" alt="">
          {{value}}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>

export default {
  name: "Problem",
  props:{
    problemList:{
      type:Array
    }
  },
  data(){
    return{
      entryArrow:`${process.env.PICTURE_SERVE}/file?fileId=7a90098d7e504107b3196f2f3f33ebaa`,
      arrow1:`${process.env.PICTURE_SERVE}/file?fileId=30d303ac55954a28a465b2367a04feae`,
      arrow2:`${process.env.PICTURE_SERVE}/file?fileId=ee787ddabcd24687a33689465706909a`,
      showActive:0
    }
  },
  methods:{
    problemShow(i){
      if(this.showActive == i){
        this.showActive = -1
      }else{
        this.showActive = i
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.problemTitle{
  border: 1px solid $footerBgLine;
  padding: 0 20px;
  margin-top: 20px;
  dl{
    dt{
      font-size: 17px;
      line-height: 50px;
      cursor: pointer;
      position: relative;
      span{
        font-size: 16px;
        color: $active;
        font-weight: bold;
      }
      .arrow{
        position: absolute;
        top: 15px;
        right: 0px;
        width: 24px;
      }
    }
    dd{
      padding-left: 30px;
      position: relative;
      line-height: 26px;
      font-size: 16px;
      margin-left:0px;
      img{
        position: relative;
        top: 7px;
        left: 3px;
      }
      span{
        position: absolute;
        top: 6px;
        left: 0;
        font-size: 16px;
        color: $entryAnswer;
        font-weight: bold;
      }
      &.first{
        border-top: 1px dashed $footerBgLine;
      }
      &.last{
        padding-bottom: 20px;
      }
    }
  }
}
</style>
