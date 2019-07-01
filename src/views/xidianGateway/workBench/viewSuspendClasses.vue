<template>
    <div class="center">
        <div class="body">
          <div class="click1" @click="go"></div>
          <div class="click2" @click="goo"></div>
          <div class="click3" @click="gooo"></div>
          <div class="click4" @click="goooo"></div>
          <div class="click5" @click="gooooo"></div>
          <div class="home" @click="home"></div>
        </div>
        <!-- <div>
            <img src="@/assets/suspendClasses_01.png" alt="" @click="go">
            <img src="@/assets/suspendClasses_02.png" alt="" @click="goo">
            <img src="@/assets/suspendClasses_03.png" alt="">
            <div class="click1" @click="goooo"></div>
            <div class="click2" @click="gooooo"></div>
            <div class="click3" @click="gooo"></div>
        </div> -->
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
          this.$router.push({path:'/allThePieces'})
          this.state=true
        }else if(this.state===true){
          this.$router.push({path:'/'})
          this.state=false
        }
      },
      goooo(){
        if(this.state===false){
          this.$router.push({path:'/viewSuspendClasses1'})
          this.state=true
        }else if(this.state===true){
          this.$router.push({path:'/'})
          this.state=false
        }
      },
      gooooo(){
        if(this.state===false){
          this.$router.push({path:'/viewSuspendClasses2'})
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
        background:url("http://www.zq100.com/api/files/file?fileId=f6e9ef6214864ac3b31d9513bd5e36b6") no-repeat;
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
        cursor:pointer;
    }
    .click4{
        width:80px;
        height:35px;
        // background: red;
        position:absolute;
        left:488px;
        top:233px;
        cursor:pointer;
    }
    .click5{
        width:80px;
        height:35px;
        // background: red;
        position:absolute;
        left:638px;
        top:233px;
        cursor:pointer;
    }
    .home{
        width:220px;
        height:45px;
        // background: red;
        position:absolute;
        left:0px;
        top:10px;
        cursor:pointer;
    }
</style>