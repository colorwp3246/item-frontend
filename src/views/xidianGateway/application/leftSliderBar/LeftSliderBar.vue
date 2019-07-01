<template>
  <div class="leftSliderBar">
    <div id="leftSliderBar" v-show="sliderBarShow" :style="{'top':positionTop+'px','left':positionLeft+'px'}">
      <ul>
        <li @click="jump(index)" v-for="(item, index) in leftSliderBar" :key="index" :class="index == sliderActive?'active':''">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSliderBar",
  props:{
    sliderActive:{
      type:Number
    }
  },
  data(){
    return{
      sliderBarShow: true,
      positionTop: 0,
      positionLeft: 0,
      leftSliderBar:['基本信息','受理条件','申请材料','办理流程','办理方式','咨询投诉','常见问题']
    }
  },
  mounted(){
    this.sliderTop();
    this.sliderLeft();
  },
  methods:{
    sliderTop(){  //slider定位top高度
      let height = document.documentElement.clientHeight;
      let sliderBar = document.getElementById("leftSliderBar").offsetHeight;
      this.positionTop = height/2 - sliderBar/2;
    },
    sliderLeft(){  //slider定位top高度
      let width = document.documentElement.clientWidth;
      let sliderBar = document.getElementById("leftSliderBar").offsetWidth;
      width>1440? this.sliderBarShow=true: this.sliderBarShow = false;
      this.positionLeft = (width-1200)/2-sliderBar-30;
    },
    jump (index) {  //点击楼层滚动 用 class="d_jump" 添加锚点
      let jump = document.querySelectorAll('.xd_jump');
      let total = jump[index].offsetTop-40;
      let distance = document.documentElement.scrollTop || document.body.scrollTop;// 平滑滚动，时长500ms，每10ms一跳，共50跳
      let step = total / 50;
      if (total > distance) {
        smoothDown()
      } else {
        let newTotal = distance - total
        step = newTotal / 50
        smoothUp()
      }
      function smoothDown () {
        if (distance < total) {
          distance += step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothDown, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
        }
      }
      function smoothUp () {
        if (distance > total) {
          distance -= step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothUp, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.leftSliderBar{
  #leftSliderBar{
    position: fixed;
    top: 50%;
    left:30px;
    background-color: #fff;
    ul{
      width: 90px;
      border-right: $appLeftBarLine;
      li{
        line-height: 50px;
        font-size: 16px;
        cursor: pointer;
        &.active{
          color: $active;
          border-right: 5px solid $active;
        }
      }
    }
  }
}
</style>
