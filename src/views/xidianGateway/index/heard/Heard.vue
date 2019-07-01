<template>
    <div class="index-wrap" :style="{backgroundImage:'url(' + 'http://www.zq100.com/api/files/file?fileId=4e911c700c584cd1ba25e70752eb8910' + ')'}">
      <div class="heard-public">
        <div class="main">
          <img :src="logo" class="heard-logo" alt="">
          <ul class="login">
            <li class="backOld"><a href="/hotTopic" class="f14">帮助中心</a></li>
            <!--<li class="line">|</li>-->
            <li @click="login" v-if="!logins" class="f14">登录</li>
            <li @click="logout" v-if="logins" class="f14">注销</li>
            <!--<li class="line">|</li>-->
            <!--<li class="line">|</li>
            <li>注册</li>-->
          </ul>
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
        // login:`${process.env.ZQ_SERVE_URL}/login/caslogin.do`,
        logo:`${process.env.PICTURE_SERVE}/file?fileId=ee4991c7b7b6487c8d5e9624e4e8ecb6`,
        isActive:false,
        arr:[
          "首页","我要办事","年终考核","智能客服","校能监督","专题大数据"
        ],
        indx:0
      }
    },
    computed:{
      ...mapGetters({
        logins : 'loginInfo'
      })
    },
    mounted(){
      // console.log(this.logins,'获取logins')
      // console.log(`${process.env.NODE_BASE_INFO}`,'是你输出的吗')
      // console.log(`${process.env.BASE_API}`,'你的输出')
      // console.log(JSON.parse({"userInfos":{"uid":"17101212515","xm":"谭文宇","type":"yjs"},"loginStatues":'true'}),'输出')
    },
    methods:{
      login(){
        // this.$router.push({path:'/indexAfter'})
        // console.log(`${process.env.ZQ_SERVE_URL}`)
        window.location.href=`${process.env.BASE_GATEWAY}/api/auth/login?redirect=${process.env.BASE_GATEWAY}/indexAfter`
        // store.dispatch('getToken').then(res => { // 拉取用户信息
        //   console.log(res)
        // }).catch((err) => {
        //   console.log(err)
        // })
        // this.$router.push({path:'/indexAfter'})
      },
      loginss(){
        // this.$layer.msg( `<div>你好</div>`);
        // this.$layer.confirm("请问是否确定删除，删除后不可恢复？", {
        //   btn: ["确定","取消"] //按钮
        // }, function(){
        //   alert(123);
        // }, function(index){
        //   // alert(456)
        //   // this.$layer.close(shishi)
        //   layer.close(layer.index);
        // });
        // this.$layer.msg('你确定你很帅么？', {
        //   time: 0 //不自动关闭
        //   ,btn: ['必须啊', '丑到爆']
        //   ,yes: function(index){
        //     this.$layer.close(index);
        //     this.$layer.msg('雅蠛蝶 O.o', {
        //       icon: 6
        //       ,btn: ['嗷','嗷','嗷']
        //     });
        //   }
        // });
      },
      logout(){
        // this.$store.dispatch('setloginout','')
        // sessionStorage.removeItem('userInfo')
        // Cookies.remove('loginStatus')
        // window.location.href=`${process.env.BASE_API}successlogout`

      },
      gos(ind){
        this.indx=ind
        if(this.indx===0){
          this.$router.push({path:'/'})
        }else if(this.indx===1){
          this.$router.push({path:'/EventServe'})
        }else if(this.indx===2){
          this.$router.push({path:'/yearExamination'})
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
        }
      },
      go(ind){
        if(ind===0){
          this.$router.push({path:'/PersonalCenter'})
        }else if(ind===1){
          this.$router.push({path:'/assess'})
        }else if(ind===2){
          this.$router.push({path:'/personalData'})
          //window.open(' http://192.168.1.198:8080/example')
        }else if(ind===3){
          window.location.href=`${process.env.BASE_GATEWAY}/api/auth/logout?redirect=${process.env.BASE_GATEWAY}/indexAfter`
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .index-wrap{
    background-size: 100% 100%;
    .heard-public{
      height: 116px;
      border-bottom: 1px solid #73c0ec;
        .heard-logo{
          margin-top: 8px;
        }
        .login{
          float: right;
          margin-top: 21px;
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
            margin: 0 5px;color: #ffffff;

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

          }
          .f14{
            font-size:14px;
            cursor:pointer;
          }
          .backOld{
            border-right:solid 1px #fff;padding-right:9px;
          }
        }
    }
    .headNav{
      margin-top: 15px;
      ul{
        li{
          float: left;
          color:$fontcolor;
          margin-left: 15px;
          height: 40px;
          line-height: 40px;
          width:110px;
          span{
            color:$fontcolor;
            padding-bottom:12px;
          }

        }
        li:nth-child(1){
          margin-left:0px;
        }
        li:hover span,.bottomNav{
          border-bottom:4px solid #ffffff;
        }
      }
    }
  }
</style>
