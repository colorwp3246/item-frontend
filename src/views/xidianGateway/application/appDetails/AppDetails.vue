<template>
    <div class="appDetails main">
      <div class="appDetails-box">
        <div class="appDetails-item" v-for="(item, index) in appData" :key="index" :class="index>=1?'borderLine':''">
          <h1>{{appTitle}}</h1>
          <p>{{item.describe}}</p>
          <div class="appDetails-btn">
            <button class="btn over"  @click="go">立即办理</button>
            <button class="normal">指南下载</button>
            <button class="normal"><i class="sc"></i>收藏</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {getQueryString} from '@/js/base'
  export default {
    name: "AppDetails",
    data(){
      return{
        appPower:false,
        appTitle:null,
        loginPower:false
      }
    },
    props:{
      appData:{
        type: Array
      },
      appHref:{
        type:String
      }
    },
    created(){
      // if(JSON.parse(sessionStorage.getItem('xd_userList'))){
        this.loginPower = true;
      // }
    },
    mounted(){
      this.$nextTick(()=>{
        this.appTitle = getQueryString('title');
        // this.$axios.get(`${process.env.ZQ_SERVE_URL}/appPermissions/allowInto.do`,{
        //   params:{
        //     appId:getQueryString('appID'),
        //     userId:JSON.parse(sessionStorage.getItem('xd_userBH'))
        //   }
        // }).then((res)=>{
        //   console.log(res)
        //   if(res.data==1){
            this.appPower = true;
        //   }else{
        //     this.appPower = false;
        //   }
        // })
      })
    },
    methods:{
      go(){
        this.$router.push({path:'/eventStepOne'})
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.appDetails{
  &:hover{
    box-shadow: $boxShadowHover;
    transition:  $transition;
  }
  .appDetails-box{
    padding: 12px 22px 12px 22px;
    box-shadow: $infBoxShadow;
    .appDetails-item{
      position: relative;
      padding: 10px 0;
      margin: 10px 0;
      &.borderLine{
        border-top: 1px dashed #a0a0a0;
      }
      h1{
        font-size: 26px;
        font-weight: normal;
        color: $ModuleTitle;
      }
      p{
        font-size: 15px;
        line-height: 40px;
        color: $ModuleTitle;
      }
      .btn,.normal{
        width: 140px;
        height: 45px;
        background-color: #eef3f9;
        border-radius: 3px;
        border: solid 1px #8fa8c3;
        position: relative;
        cursor:pointer;
      }
      .normal:hover{
        background-color: #f3f3f3;
      }
      .over{
        color:#fff;
        background-color: #4373a8;
        border-radius: 3px;
      }

      .sc,.qx{
        position: absolute;
        left: 23px;
        top: 13px;
        width: 19px;
        height: 16px;
        background: url("http://www.zq100.com/api/files/file?fileId=20ba4caede304491adf4e83d3b695deb") no-repeat 0px 0px;
      }
      .qx{
        background-position: -30px 0px;
      }
      .statistics{
        color: $statistics;
        font-size: 13px;
        display: inline-block;
        margin: 14px 16px 0 0;
      }
      .appLink{
        position: absolute;
        right: 0;
        top: 40px;
        .powerT{
          width: 112px;
          height: 40px;
          line-height: 40px;
          font-size: 16px;
          background-color: $xd-red;
          border-radius: $borderRadius;
          border: none;
          color: #ffffff;
        }
        .powerF{
          width: 112px;
          height: 40px;
          line-height: 40px;
          font-size: 16px;
          background-color: $convHoverBg;
          border-radius: $borderRadius;
          color: $ModuleTitle;
          border: none;
          cursor: pointer;
          &:hover{
            transition: none;
            cursor: not-allowed;
            box-shadow: none;
          }
        }
      }
    }
  }
}
</style>
