<template>
    <div class="Sidebar" id="Sidebar" :style="{'top':positionTop+'px'}">
      <ul>
        <li v-for="(item, index) in sliderBar" :key="index">
          <span @click="goFunction(item.goFun,index)" @mouseover="goOver(index)" @mouseout="SidebarShow=3">
            <i :class="item.icon"></i>
            <p>{{item.title}}</p>
          </span>
          <div class="sidebarShow" v-if="index===1&&index===SidebarShow" @mouseover="SidebarShow=1" @mouseout="SidebarShow=3">
            <ul>
              <li v-for="(ite,ind) in item.arr" :key="ind" @click="twoGO(ite.goAddress)">
               <i :class="ite.icon"></i>
                <p>{{ite.title}}</p>
              </li>
            </ul>
              <div class="triangle"></div>
          </div>
        </li>
        <li v-if="searchShow" class="endColor">
           <span @click="goTop()">
            <img :src="back" alt="" style="margin: 10px 0 0 22px;">
            <p style="margin-top:10px">返回顶部</p>
          </span>
        </li>
      </ul>
    </div>
</template>

<script>
  import {mapGetters} from "vuex"
  let timer = null;
  export default {
    name: "Sidebar",
    data(){
      return{
        back:`${process.env.PICTURE_SERVE}/file?fileId=3ad03a0ef3d747f6bd935054c4437807`,
        positionTop: 0,
        isTop: true,
        sliderBar:[
          {id:1,title:'智能小电',goFun:'https://ykf-webchat.7moor.com/wapchat.html?accessId=807c6d40-8e40-11e9-8069-6f9ac4df1a49&fromUrl=xidian&urlTitle=xazq',key:'0',icon:'man'},
          {id:2,title:'师生互动',key:'1',icon:'work',
            arr:[{title:'我要咨询',icon:'consult',goAddress:'consult'},{title:'我要投诉',icon:'complaint',goAddress:'complaint'},{title:'我要建议',icon:'suggest',goAddress:'suggest'},{title:'我要纠错',icon:'err',goAddress:'errorCorrection'}]
          },
          {id:3,title:'办件进度',goFun:'eventProgress',icon:'zyk'},
          {id:4,title:'待办任务',goFun:'',icon:'exit'},
          // {id:5,title:'返回顶部',goFun:'',icon:require('../../../assets/back.jpg')}
        ],
        loginStatus:false,
        information:JSON.parse(localStorage.getItem('userInfo')),
        SidebarShow:'',
        searchShow:false
      }
    },
    mounted () {
      this.needScroll();
      this.sliderTop();
      window.addEventListener('scroll', this.scroll);//鼠标滚动事件
    },
    computed:{
      ...mapGetters({
        logins : 'loginInfo'
      })
    },
    methods:{
      //滚动事件
      scroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >1080) {
          this.searchShow = true;
        } else {
          this.searchShow = false;
        }
      },
      needScroll () {
        window.onscroll = function () {
          if (!this.isTop) {
            clearInterval(timer)
          }
          this.isTop = false
        }
      },
      goTop: function () {
        timer = setInterval(function () {
          let osTop = document.documentElement.scrollTop || document.body.scrollTop;
          let ispeed = Math.floor(-osTop / 5);
          document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
          this.isTop = true;
          if (osTop === 0) {
            clearInterval(timer)
          }
        }, 50)
      },
      sliderTop(){  //slider定位top高度
        let height = document.documentElement.clientHeight;
        let sliderBar = document.getElementById("Sidebar").offsetHeight;
        this.positionTop = height/2 - sliderBar/2;
      },
      goFunction(go,k){//跳转路由
        this.SidebarShow=k
        if(go){
          window.open(go)
        }
      },
      twoGO(address){
        if(address){
          this.$router.push({path: `/${address}`,})
        }
      },
      //鼠标悬浮是否展开
      goOver(ind){
        this.SidebarShow=ind
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.Sidebar{
  position: fixed;
  /*right: 30px;*/
  right: 0;
  width: 70px;
  background-color: #ffffff;
  z-index: 999;
  box-shadow: 0px 1px 5px 0px
  rgba(208, 208, 208, 0.7);
  li{
    height: 74px;
    position: relative;
    &>span{
      display: inline-block;
      width: 100%;
      height: inherit;
      i{
        background:url('http://www.zq100.com/api/files/file?fileId=4fb014cd1e91423b85d7e3e550a2cd2d') no-repeat 0 0;
        display:block;
        width:30px;
        height:30px;
        margin-bottom:3px;
        position: relative;
        left: 19px;
        margin-top: 12px;
      }
      .man{
        background-position: -30px 0px;
      }
      .work{
        background-position: -29px -47px;
      }
      .zyk{
        background-position: -30px -83px;
      }
      .exit{
        background-position: -30px -126px;
      }
      &>img{
        margin: 7px 0 0 16px;
      }
      &>p{
        text-align: center;
        font-size: 13px;
        color: $sliderTextColor;
        margin-top:5px;
      }
    }
    .sidebarShow{
      width: 70px;
      height: 294px;
      background-color: #ffffff;
      box-shadow: 0px 1px 5px 0px
      rgba(208, 208, 208, 0.7);
      position: absolute;
      right:84px;
      top: -85px;
      ul{
        position: relative;
        top: -12px;
        li{
          text-align: center;
          height: 64px;
          width: 70px;
          i{
            background:url('http://www.zq100.com/api/files/file?fileId=4fb014cd1e91423b85d7e3e550a2cd2d') no-repeat 0 0;
            display:block;
            width:30px;
            height:30px;
            margin-bottom:3px;
            position: relative;
            left: 22px;
            margin-top: 13px;
          }
          .consult{
            background-position: -71px 0px;
          }
          .complaint{
            background-position:-71px -47px;
          }
          .suggest{
            background-position:-71px -83px;
          }
          .err{
            background-position:-71px -126px;
          }
          p{
            margin-top:5px;
          }
        }
        li:last-child{
          img{
            margin-top:5px;
          }
          p{
            margin-top: 5px;
          }
        }
        li:hover{
          background-color: $sliderBg;
          cursor: pointer;
        }
      }
    }
    .triangle{
      position: absolute;
      top: 33%;
      right: -14px;
      width:0;
      height:0;
      border-top:15px solid transparent;
      border-bottom:15px solid transparent;
      border-left:15px solid #fff;
    }
  }
  li:hover{
    background-color: $sliderBg;
    transition: $transition;
    cursor: pointer;
  }
  .endColor{
    background-color:#4373a8;
    span{
      p{
        color:$fontcolor;
      }
    }
  }
  .endColor:hover{
    background-color:#4373a8!important;

  }
}
</style>
