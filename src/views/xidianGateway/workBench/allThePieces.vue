<template>
    <div class="center">
      <div class="body">
        <div class="click1" @click="go"></div>
        <div class="click2" @click="goo"></div>
        <div class="click3" ></div>
        <div class="click4" @click="gooo"></div>
        <div class="click5" @click="goooo"></div>
        <div class="home" @click="home"></div>
      </div>
    </div>
</template>
<script>    
  // import AfterLandingOther from '../public/AfterLandingOther'
  // import Footer from '../public/Footer'
  // import ModuleTitle from '../public/ModuleTitle'

  export default {
    data() {
      return {
        state:false
      }
    },
    // components: {
    //   AfterLandingOther,
    //   Footer,
    //   ModuleTitle
    // },
    methods:{
      searchprocess(){

      },
      go(){
        if(this.state===false){
          this.$router.push({path:'/workBench'})
          this.state=true
        }else if(this.state===true){
          this.$router.push({path:'/'})
          this.state=false
        }
      },
      goo(){
        if(this.state===false){
          this.$router.push({path:'/matterManagement'})
          this.state=true
        }else if(this.state===true){
          this.$router.push({path:'/'})
          this.state=false
        }
      },
      gooo(){
        if(this.state===false){
          this.$router.push({path:'/suspendClasses'})
          this.state=true
        }else if(this.state===true){
          this.$router.push({path:'/'})
          this.state=false
        }
      },
      goooo(){
        if(this.state===false){
          this.$router.push({path:'/viewSuspendClasses'})
          this.state=true
        }else if(this.state===true){
          this.$router.push({path:'/'})
          this.state=false
        }
      },
      home(){
        if(this.state===false){
          this.$router.push({path:'/indexAfter'})
          this.state=true
        }else if(this.state===true){
          this.$router.push({path:'/'})
          this.state=false
        }
      },
    }
  }
</script>
<style lang="scss" scoped>
    @import "~@/styles/variables.scss";
    .body{
    width: 1920px;
    height:1080px;
    margin: 0 auto;
    background:url("http://www.zq100.com/api/files/file?fileId=6b1b9138f1024cca93c4504324f843b5") no-repeat;
    background-size: 100% 100%;
    position: relative;
    }
    .click1{
        width:130px;
        height:40px;
        // background: red;
        position:absolute;
        left:1590px;
        top:15px;
        cursor:pointer;
    }
    .click2{
        width:80px;
        height:30px;
        // background: red;
        position:absolute;
        left:50px;
        top:90px;
        cursor:pointer;
    }
    .click3{
        width:80px;
        height:30px;
        // background: red;
        position:absolute;
        left:50px;
        top:155px;
    }
    .click4{
        width:50px;
        height:30px;
        // background: red;
        position:absolute;
        left:1770px;
        top:360px;
        cursor:pointer;
    }
    .click5{
        width:50px;
        height:30px;
        // background: red;
        position:absolute;
        left:1770px;
        top:410px;
        cursor:pointer;
    }
    .home{
        width:220px;
        height:50px;
        // background: red;
        position:absolute;
        left:10px;
        top:10px;
        cursor:pointer;
    }
</style>