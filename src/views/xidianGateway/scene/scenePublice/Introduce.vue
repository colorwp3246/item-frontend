<template>
  <div class="introduce main">
    <div class="sceneIntroduce">
      <p class="sceneIntroduce-text" v-for="(item,index) in introduce" :key="index">
        <span class="title" v-if="index==0">{{titleText}}</span>
        {{item}}
        <button v-if="index==introduce.length-1 &&entryBtn.show" class="change" @click="entry(entryBtn.href)">{{entryBtn.title}}</button>
      </p>
    </div>
    <img class="introduceImg" :src="img" alt="">
  </div>
</template>

<script>
  export default {
    name: "Introduce",
    props:{
      titleText:{
        type:String
      },
      introduce:{
        type: Array
      },
      img:{
        type:String
      },
      entryBtn:{
        type: Object
      }
    },
    methods:{
      entry(href){
        /*if(JSON.parse(sessionStorage.getItem('xd_loginPower'))){
          this.$router.push(href)
        }else{*/
          // this.$layer.alert("请先登录！");
        /*}*/
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .introduce{
    margin: 45px auto 0 auto;
    padding: 40px 16px;
    min-height: 218px;
    box-shadow: $infBoxShadow;
    position: relative;
    &:hover{
      box-shadow: $boxShadowHover;
      transition: all .3s;
    }
    .introduceImg{
      position: absolute;
      right: 20px;
      top: 20px;
    }
    .sceneIntroduce{
      width: 950px;
      .sceneIntroduce-text{
        text-indent: 2em;
        color: $ModuleTitle;
        font-size: 16px;
        line-height: 34px;
        .title{
          font-size: 22px;
          padding-right: 8px;
        }
      }
    }
  }
</style>
