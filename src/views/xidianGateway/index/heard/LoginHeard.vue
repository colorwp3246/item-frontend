<template>
    <div class="index-wrap" :style="{backgroundImage:'url(' + 'http://www.zq100.com/api/files/file?fileId=4e911c700c584cd1ba25e70752eb8910' + ')'}">
      <div class="heard-public">
        <div class="main head">
          <img :src="logo" class="heard-logo" alt="">
          <ul class="login clearfix">
            <li><a href="/hotTopic" class="f14">帮助中心</a></li>
            <li><a href="/messageCenter"><img :src="messageCenter" alt=""></a></li>
            <li @mouseover="showAdmin"><a href="#" class="userinfo f14">欢迎，丛京生</a></li>
          </ul>
          <transition name="bounce">
            <div class="adminList" v-if="showAdmins" @mouseout="hideAdmin" @mouseover="showAdmin">
              <!--<img class="adminList-arrow" src="~@/assets/loginArrow.png" alt="">-->
              <ul>
                <li v-for="(item, index) in adminList" :key="index" :class="index == adminList.length-1?'lastLi':''"  @click="go(index)">
                  <!--<span v-if="index==adminList.length-1" @click="signOut"><a href="#"><i :class="item.icon"></i>{{item.title}}</a></span>-->
                  <span><i :class="item.icon"></i>{{item.title}}</span>
                </li>
                <!--<li class="endLi"style="text-align:center;color: inherit;font-size:10px;" @click="secede">-->
                 <!--退出登录-->
                <!--</li>-->
              </ul>
            </div>
          </transition>
          <navigationBar></navigationBar>
        </div>
      </div>
      <heard-banner></heard-banner>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import heardBanner from './Banner'
  import navigationBar from './NavigationBar'
  // import {getUserInfo} from '@/api/apiPublic'
  // import layer from 'vue-layer'
  export default {
    name: "heard-public",
    components:{
      heardBanner,
      navigationBar
    },
    data(){
      return{
        logo:`${process.env.PICTURE_SERVE}/file?fileId=ee4991c7b7b6487c8d5e9624e4e8ecb6`,
        messageCenter:`${process.env.PICTURE_SERVE}/file?fileId=d9d22d6ed76b4f1e9279bd115bc2a5ad`,
        // login:`${process.env.ZQ_SERVE_URL}/login/caslogin.do`,
        isActive:false,
        adminList:[
          {id:2,key:'1',title:'工作台',icon:'work'},
          {id:1,key:'0',title:'个人主页',icon:'man'},
          {id:3,key:'2',title:'个人档案库',icon:'zyk'},
          {id:3,key:'2',title:'退出登录',icon:'exit'},
        ],
        showAdmins:false,
      }
    },
    computed:{
      ...mapGetters({
        logins : 'loginInfo',
        userInfo:'userInfo'
      })
    },
    mounted(){
      console.log(this.logins,'获取logins')
      // console.log(`${process.env.NODE_BASE_INFO}`,'是你输出的吗')
      // console.log(`${process.env.BASE_API}`,'你的输出')
      // console.log(JSON.parse({"userInfos":{"uid":"17101212515","xm":"谭文宇","type":"yjs"},"loginStatues":'true'}),'输出')
    },
    methods:{
      login(){
        // this.$axios.get(`http://47.104.107.44/basic-service-1.0/login?redirect=`).then(data=>{
        //   console.log(data,'掉的新的接口')
        // }).catch(err=>{
        //   console.log(err)
        // })
        // console.log(`${process.env.ZQ_SERVE_URL}`)
        // window.location.href=`${process.env.BASE_API}login?redirect=http://47.104.107.44/indexAfter&origin=xdu`
        // this.$router.push({path:'/indexAfter'})
      },
      loginss(){

      },
      logout(){
        // this.$store.dispatch('setloginout','')
        // sessionStorage.removeItem('userInfo')
        // Cookies.remove('loginStatus')
        // window.location.href=`${process.env.BASE_API}successlogout`
        // window.location.href=`${process.env.BASE_API}logout?redirect=http://47.104.107.44`
      },
      showAdmin() {
        this.showAdmins = true;
      },
      hideAdmin() {
        this.showAdmins = false;
      },
      signOut(){

      },
      go(ind){
        if(ind===0){
          this.$router.push({path:'/matterManagement'})
        }else if(ind===1){
          this.$router.push({path:'/personalSpace'})
          // window.open(`${process.env.BASE_TABLE}/auth/login?redirect=http://www.zq100.com/assess`)
        }else if(ind===2){
          this.$router.push({path:'/personalData'})
        }else if(ind===3){
          this.$router.push({path:'/'})
          window.location.href=`${process.env.BASE_GATEWAY}/auth/logout`
          // `${process.env.BASE_TABLE}/api/auth/login?redirect=${process.env.BASE_TABLE}/indexAfter`
          // window.location.href=`${process.env.BASE_TABLE}/auth/logout`
        }
      },
      go2(){

      },
      go3(){
        this.$router.push({path:'/messageCenter'})
      },
      secede(){
        this.$router.push({path:'/'})
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  /*@import "~@//style/vars.less";*/
  .index-wrap{
    background-size: 100% 100%;
    .heard-public{
      height: 116px;
      border-bottom: 1px solid $xd-lan2;
      .bell{width:22px;height:22px;margin-bottom:-7px;}
      .head{
        position: relative;
        .heard-logo{
          margin-top: 15px;
        }
        .login{
          float: right;
          margin-top: 28px;
          text-align:center;

          .line{
            color: $heardLine;
          }

          .danger-tip{
            font-size: 16px;
            font-weight: bold;
            margin-right: 20px;
            position: relative;
            top: -1px;
            color:red;
          }

          li{
            float: left;
            padding:0 15px;
            &.line{
              color: #ffffff;
              position: relative;
              top: -2px;
            }
            a{
              color: #ffffff;
              text-decoration: none;
              &:hover{
                cursor: pointer;
              }

            }
            .userinfo{
              position:relative;
              &:after{
                position:absolute;

                content:'';
                display:block;
                height:0;
                weight:0;
                border:solid 6px #fff;
                border-color:#fff transparent transparent transparent;
                top:8px;
                right:-18px;
              }
            }
            .f14{
              font-size:14px !important;
              cursor:pointer;
            }
          }
          li+li{border-left:solid 1px #fff;}
          .backOld{
            border-right:solid 1px #fff;padding-right:9px;
          }
        }
        .adminList{
          position: absolute;
          width: 238px;
          top: 50px;
          right: -3px;
          z-index: 999;
          padding: 10px 20px;
          background: #ffffff;
          box-shadow: 0px 3px 4px #666;
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
            li{
              padding: 0 8px 0 8px;
              background-color: #ffffff;
              line-height: 50px;
              border-bottom: 1px solid $loginBorderColor;
              text-align: left;
              padding-left:10px;

              span{
                color: inherit;
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
              }
            }
            li:last-child{
              border:0px;
            }
            li:hover{
              background-color: $loginBorderColor;
            }
          }
        }
        @-webkit-keyframes changeColor { /*声明动画*/
          0% {height:0;}
          50%{height:50px;}
          100%{background:150px;}
        }
        @keyframes changeColor {
          0% {height:0;}
          50%{height:50px;}
          100%{background:150px;}
        }
        .endLi{
          text-align: center;
        }
      }
    }
  }
</style>
