<template>
  <div class="login-box">
      <ul class="login clear"><li class="helpCenter" @click="goHelp">帮助中心</li>
        <li class="line">|</li>
        <li><span class="alarm" :style="{backgroundImage:'url(http://www.zq100.com/api/files/file?fileId=e32aee2bdccd464488eeb675c4728e8a)'}" @click="go3" v-if="$route.meta.title!=='离校前'"></span><span v-if="$route.meta.title==='离校前'">登录</span></li>
        <li class="line"  v-if="$route.meta.title!=='离校前'">|</li>
        <li class="showAdmin" @mouseover="showAdmin()" @mouseout="hideAdmin()" v-if="$route.meta.title!=='离校前'">欢迎您，{{slideName}} <span class="arrow" :style="{backgroundImage:'url(http://www.zq100.com/api/files/file?fileId=7a90098d7e504107b3196f2f3f33ebaa)'}"></span></li>
      </ul>
      <transition name="bounce">
        <div class="adminList" v-if="showAdmins"  @mouseover="showAdmin()" @mouseout="hideAdmin()">
          <!--<img class="adminList-arrow" src="~@/assets/loginArrow.png" alt="">-->
          <ul>
            <li v-for="(item, index) in adminList" :key="index" :class="index == adminList.length-1?'lastLi':''" @click="go(index)">
              <span @click=""><i :class="item.icon"></i>{{item.title}}</span>
            </li>
          </ul>
        </div>
      </transition>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
export default {
  name: "AfterLanding",
  data(){
    return{
      userName:null,
      login:`${process.env.ZQ_SERVE_URL}/login/caslogin.do`,
      adminList:[
        {id:2,key:'1',title:'工作台',icon:'work'},
        {id:1,key:'0',title:'个人主页',icon:'man'},
        {id:3,key:'2',title:'个人档案库',icon:'zyk'},
        {id:5,title:'退出登录',icon:'exit'},
      ],
      signOutClick:`${process.env.ZQ_SERVE_URL}/login/caslogout.do`,
      showAdmins:false,    //是否显示个人中心
      slideName:'丛京生'
    }
  },
  mounted(){
      if(this.logins.userInfos!==undefined){
        this.slideName=this.logins.userInfos.xm
      }else{
        this.slideName=JSON.parse(localStorage.getItem('userInfo')).userInfos.xm
      }
      console.log(this.logins.userInfos,'输出')
  },
  computed:{
    ...mapGetters({
      logins : 'loginInfo'
    })

  },
  methods:{
    showAdmin() {
      this.showAdmins = true;
    },
    hideAdmin() {
      this.showAdmins = false;
    },
    signOut(){
      //退出删除sessionStorage
      sessionStorage.clear();
    },
    go1(ind){
      if(ind===0){
        this.$router.push({path:'/personalSpace'})
      }
    },
    logout(){
      this.$store.dispatch('setloginout',false)
      window.location.href=`${process.env.BASE_API}logout?redirect=http://47.104.107.44`
    },
    go3(){
      this.$router.push({path:'/messageCenter'})
    },
    go(ind){
      if(ind===0){
        this.$router.push({path:'/matterManagement'})
      }else if(ind===1){
        this.$router.push({path:'/personalSpace'})
      }else if(ind===2){
        this.$router.push({path:'/personalData'})
        //window.open(' http://192.168.1.198:8080/example')
      }else if(ind===3){
        window.location.href=`${process.env.BASE_GATEWAY}/auth/logout`
        // this.$router.push({path:'/'})
      }
    },
    goHelp(){
      this.$router.push({path:'/hotTopic'})
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .login-box{
    display: inline-block;
    position: absolute;
    top: 28px;
    right: 0;
    .adminList{
      position: absolute;
      width: 238px;
      top: 22px;
      right: 4px;
      z-index: 999;
      background-color: #fff;
      padding: 10px 15px;
      /* border: solid; */
      box-shadow: 0px 0px 2px #666;
      &:hover{
        cursor: pointer;
      }
      .adminList-arrow{
        width: 18px;
        position: absolute;
        top: 1px;
        left: 44px;
      }
      ul{
        padding:2px 8px;
        li{
          padding: 0 8px 0 8px;
          background-color: #ffffff;
          line-height: 50px;
          border-bottom: 1px solid $loginBorderColor;
          text-align: left;
          span{
            font-size:14px;
            i{
              background:url('http://www.zq100.com/api/files/file?fileId=4fb014cd1e91423b85d7e3e550a2cd2d') no-repeat 0 0;
              display:inline-block;
              width:25px;
              height:18px;
              margin-bottom:-3px;
            }
            .man{
              background-position: 0 -35px;
            }
            .work{
              background-position: 0 -66px;
            }
            .zyk{
              background-position: 0 -96px;
            }
            .exit{
              background-position: 0 -126px;
            }
          }
          .signOut{
            color: $xd-red;
            a{
              color: inherit;
              text-decoration: none;
            }
          }
          &.lastLi{
            border-bottom: none;
          }
        }
        li:last-child{
          border:0px;
        }
      }
    }
    .login{
      .alarm{
        display: inline-block;
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        position: relative;
        top: 3px;
      }
      .danger-tip{
        font-size: 16px;
        font-weight: bold;
        margin-right: 20px;
        position: relative;
        top: -1px;
      }
      .backOld{
        a{
          text-decoration: none;
          color: $ModuleTitle;
          font-size: 14px;
        }
      }
      li{
        float: left;
        margin: 0 5px;
        height: 30px;
        &.line{
          color: $hallTextColor;
          font-size: 13px;
          padding-top: 2px;
        }
        .arrow{
          display: inline-block;
          width: 10px;
          height: 10px;
          background-repeat: no-repeat;
          position: relative;
          top: 2px;
        }
        &.showAdmin{
          a{
            text-decoration: none;
          }
          &:hover{
            cursor: pointer;
          }
        }
      }
    }
  }

  .bounce-enter-active {
    animation: bounce-in .3s;
  }
  @keyframes bounce-in {
    0% {
      top: 30px;
      opacity: 0;
      transition: $transition;
    }
    100% {
      top: $loginTop;
      opacity: 1;
      transition: $transition;
    }
  }
  .helpCenter{
    color: #000000;
    font-size: 14px;
  }
  .helpCenter:hover,.alarm:hover{
    cursor: pointer;
  }
</style>
