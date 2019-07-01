<template>
    <div class="center">
        <div class="body" @click="go">
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
          this.$router.push({path:'/suspendClasses'})
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
        background:url("http://www.zq100.com/api/files/file?fileId=77638b9bc44a4588958face442dc9920") no-repeat;
        background-size: 100% 100%;
        position: relative;
        cursor:pointer;
    }
</style>