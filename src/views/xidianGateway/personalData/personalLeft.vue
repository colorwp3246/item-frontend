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
        leftSliderBar:['首页','个人信息','个人发展','教学信息','科研信息','教改信息','论文信息','获奖信息','我的办事','对外交流','公共服务','生活服务','问卷调查']
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
        this.positionTop = (height/2 - sliderBar/2)-50;
      },
      sliderLeft(){  //slider定位top高度
        let width = document.documentElement.clientWidth;
        let sliderBar = document.getElementById("leftSliderBar").offsetWidth;
        width>1440? this.sliderBarShow=true: this.sliderBarShow = false;
        this.positionLeft = (width-1200)/2-sliderBar-30;
      },
      jump (index) {  //点击楼层滚动 用 class="d_jump" 添加锚点
        if(index===1){
          this.$router.push("/baseInfo")
        }else if(index===0){
          this.$router.push("/personalData")
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
          line-height: 45px;
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
