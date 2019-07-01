<template>
    <div class="convenient main">
      <ModuleTitle moduleTitle="便民查询"></ModuleTitle>
      <my-class :class-option="classOption3" class="scrollWarp" v-if="dataList"  :data="dataList">
          <span class="scrollTip" v-if="dataList.length>1" slot="left-switch" @mouseover="hallNextOver()" @mouseout="hallNextOut()">
            <img :src="hallPrev" v-if="showTrue" alt="">
            <img :src="hallPrevH" v-else alt="">
          </span>
        <div class="conItem clear" :style="{width:dataList.length*1200+'px'}">
          <div class="conItemCell" v-for="(items, index) in dataList" :key="index">
            <ul class="clear">
              <li v-for="(item, index) in items" :key="index" :title="item.title">
                <a :href="item.href" target="_blank">
                  <img :src="item.icon" alt="">
                  <p>{{item.title}}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <span class="scrollTip" v-if="dataList.length>1" slot="right-switch" @mouseover="hallNextOver()" @mouseout="hallNextOut()">
            <img src="hallnext" v-if="showTrue" alt="">
            <img src="hallNextH" v-else alt="">
          </span>
      </my-class>
    </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  import MyClass from '../../public/MyClass'
  export default {
    name: "convenient",
    components: {
      ModuleTitle,
      MyClass
    },
    data(){
      return{
        hallPrev:`${process.env.PICTURE_SERVE}/file?fileId=3c69247ec86e4f48a6bea3409849cd1a`,
        hallPrevH:`${process.env.PICTURE_SERVE}/file?fileId=eff4718ee6cf4ac1b1bb6296afd5a2ba`,
        hallnext:`${process.env.PICTURE_SERVE}/file?fileId=2204b68e052949ec9142244a21045644`,
        hallNextH:`${process.env.PICTURE_SERVE}/file?fileId=b89f2dec87b644258db0bc1f631d57a2`,
        showTrue:true,
        dataList:[
          [
            {title:'公共支付',icon:`${process.env.PICTURE_SERVE}/file?fileId=ff83f6a37a464c8eb1256850252d4f2b`,href:'http://www.xa.gov.cn/ptl/def/def/index_1121_7953.html'},
            {title:'车辆违章查询',icon:`${process.env.PICTURE_SERVE}/file?fileId=64c56a8ac2c1436d91dcdc543f0ebd1f`,href:'http://sn.122.gov.cn/'},
            {title:'我的快递查询',icon:`${process.env.PICTURE_SERVE}/file?fileId=7adddf9acee249adafebac4cf4a5bf1a`,href:'http://www.kuaidi100.com/'},
            {title:'车辆年审预约',icon:`${process.env.PICTURE_SERVE}/file?fileId=d5a0dd09ce0a4ce1ac8a6f25d2be044f`,href:'https://sn.122.gov.cn/m/login'},
            {title:'驾驶人违法查询',icon:`${process.env.PICTURE_SERVE}/file?fileId=162941cfa000423b992d438e841c4c36`,href:'http://sn.122.gov.cn/'},
            {title:'出入境业务办理',icon:`${process.env.PICTURE_SERVE}/file?fileId=7c3461563e554a6da4c7e6355a798889`,href:'http://219.136.255.192/'},
            {title:'在线学历认证',icon:`${process.env.PICTURE_SERVE}/file?fileId=fcb514147ab94a0b93955ab80c90cd70`,href:'https://www.chsi.com.cn/'},
            {title:'公积金查询',icon:`${process.env.PICTURE_SERVE}/file?fileId=9c42623c27aa4cfc98343f14c8b1afc9`,href:'http://query.xazfgjj.gov.cn/'}

          ],
          [
            {title:'社保服务',icon:`${process.env.PICTURE_SERVE}/file?fileId=6a465e93fe81457ea94e6fbda12f0a7a`,href:'http://www.xahrss.gov.cn/'},
            {title:'看病就医',icon:`${process.env.PICTURE_SERVE}/file?fileId=2c1bdf653cb94c89881fa32dd1c3707d`,href:'http://www.sxhealth.sn.cn/register/docList'},
            {title:'火车高铁',icon:`${process.env.PICTURE_SERVE}/file?fileId=6229822c56824d2684bc5a4ead3be524`,href:'https://www.12306.cn/index/'},
            {title:'飞机票',icon:`${process.env.PICTURE_SERVE}/file?fileId=374de7811c0641369ef0b1c63b19df8a`,href:'http://www.xxia.com/'}
          ]
        ],
      }
    },
    computed:{
      classOption3 () {
        return {
          autoPlay: false,  //是否为自动切换
          switchSingleStep:1200,  //切换宽度
          switchOffset:0    //按钮位置
        }
      }
    },
    methods:{
      hallNextOver: function () { //鼠标移上按钮
        this.showTrue =!this.showTrue;
      },
      hallNextOut: function () { //鼠标移出按钮
        this.showTrue =!this.showTrue;
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .scrollWarp{
    width: 1200px;
    height: 180px;
    overflow: hidden;
    .scrollTip{
      cursor: pointer;
    }
    .conItemCell{
      width: 1200px;
      float: left;
      .clear{
        display: table;
        width: calc(100% + 28px);
        table-layout: fixed;
        margin-top: 30px;
      }
    }
    li{
      width: 307px;
      height: 64px;
      display: inline-block;
      float: left;
      margin-bottom: 20px;
      &>a{
        width: 278px;
        height: inherit;
        display: inline-block;
        background-color: $convBg;
        position: relative;
        text-decoration: none;
        color: transparent;
        &:hover{
          cursor: pointer;
          background-color: $convHoverBg;
          transition: $transition;
        }

        &>img{
          position: absolute;
          top: 16px;
          left: 40px;
          color: transparent;
        }
        &>p{
          font-size: 16px;
          padding: 9px 0 0 86px;
          font-weight: bold;
          color: #0d1c28;
        }
      }
    }
  }
</style>
