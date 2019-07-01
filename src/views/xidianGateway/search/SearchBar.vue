<template>
  <div class="searchBar">
    <ul>
      <li @click="jump(index)" v-for="(item, index) in searchBar" :key="index" :class="index ==sliderActive?'active':''" :style="index ==sliderActive?{backgroundImage:'url(http://www.zq100.com/api/files/file?fileId=d7bff92db57e46e98f2f73b4438cce24)'}:''">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "SearchBar",
    props:{
      searchBar:{
        type:Array
      },
      sliderActive:{
        type:Number
      }
    },
    data(){
      return{
        active:0
      }
    },
    methods:{
      jump (index) {  //点击楼层滚动 用 class="d_jump" 添加锚点
        this.$emit('activeItem',index);
        let jump = document.querySelectorAll('.xd_jump');
        let total = jump[index].offsetTop+220;
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
.searchBar{
  li{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    color: $ModuleTitle;
    margin-bottom: 16px;
    padding-left: 18px;
    background-repeat: no-repeat;
    cursor: pointer;
    &.active{
      color: #ffffff;
      position: relative;
      z-index: 9999;
    }
  }
}
</style>
