<template>
  <div class="index-wrap">
    <div :class="searchShow?'boxShadow fixed':'boxShadow'">
      <div class="AfterLandingOther main">
        <xdLogo :alsoUser="nextUser"></xdLogo>
        <span class="myCenter" v-if="otherTiTle">
        <i></i>
        <em>{{otherTiTle}}</em>
      </span>
        <xdLogin></xdLogin>
        <div v-if="falsePage">
          <xdNavigation></xdNavigation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import xdLogin from './Login'
  import xdLogo from './Logo'
  import xdNavigation from './NavigationBar'
  import {getQueryString} from '@/js/base'
  export default {
    name: "AfterLanding",
    props:{
      otherTiTle:{
        type: String
      },
      inputSearchShow:{
        type: Boolean
      },
      falsePage:{
        type:Boolean,
        default:true
      }
    },
    components:{
      xdLogin,
      xdLogo,
      xdNavigation
    },
    data(){
      return{
        searchShow:false,
        searchTerm:null,//搜索关键词
        nextUser:'',
        userName:null,
        login:`${process.env.ZQ_SERVE_URL}/login/caslogin.do`,
        adminList:[
          {id:1,key:'0',title:'个人中心'},
          {id:2,key:'1',title:'我的任务'},
          {id:3,key:'2',title:'我的数据'},
          {id:4,key:'3',title:'相关推荐'},
          {id:5,title:'退出登录'},
        ],
        signOutClick:`${process.env.ZQ_SERVE_URL}/login/caslogout.do`,
        showAdmins:false, //是否显示个人中心,
        information:'',
        slideName:''
      }
    },
    computed: {
      ...mapGetters({
        logins: 'loginInfo'
      })
    },
    mounted () {
      window.addEventListener('scroll', this.scroll);//鼠标滚动事件
    },
    methods: {

      scroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 1) {
          this.searchShow = true;
        } else {
          this.searchShow = false;
        }
        this.$emit('scrollShowSearch', this.searchShow)
      },
      searchAll() {  //搜索跳转
        let search = this.searchTerm;
        if (search) {
          this.$router.push({
            path: '/Search',
            name: 'Search',
            query: {
              searchTerm: search
            }
          });
          this.searchTerm = ''
        }
      },
      showAdmin() {
        this.showAdmins = true;
      },
      hideAdmin() {
        this.showAdmins = false;
      },
      signOut() {
        //退出删除sessionStorage
        sessionStorage.clear();
      },
      go(key) {
        this.$nextTick(() => {
          this.$router.push({
            path: '/PersonalCenter',
            query: {
              key: key
            }
          })
        })
      },
      logout() {
        this.$store.dispatch('setloginout', false)
        window.location.href=`${process.env.BASE_API}logout?redirect=http://47.104.107.44`
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";

  $top:51px;
  .index-wrap{
    background-size: 100% 100%;
    .AfterLandingOther{

      position: relative;
    }
    .myCenter{
      display: inline-block;
      position: absolute;
      top: 20px;
      left: 220px;
      i{
        display: inline-block;
        height: 24px;
        border-left: $sliderBorder;
        position: relative;
        top: 4px;
      }
      em{
        font-size: 20px;
        font-weight: bold;
        font-style: normal;
        color: #112534;
        margin-left: 10px;
      }
    }
  }
  .login-box{
    display: inline-block;
    position: absolute;
    top: 28px;
    right: 0;
    .adminList{
      position: absolute;
      width: 110px;
      top: $loginTop;
      right: 0;
      z-index: 999;
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
        border: $sliderBorder;
        margin-top: 10px;
        li{
          padding: 0 8px 0 8px;
          background-color: #ffffff;
          line-height: 32px;
          border-bottom: 1px solid $loginBorderColor;
          text-align: center;
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
          &:hover{
            background-color: $loginBorderColor;
          }
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
</style>
