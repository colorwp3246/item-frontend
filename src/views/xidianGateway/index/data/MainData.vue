<template>
    <div class="mainData" :style="{backgroundImage:'url(http://www.zq100.com/api/files/file?fileId=3eae82b94ce6463ebade04242750f848)'}">
      <div class="main">
        <my-class :class-option="classOption3" class="scrollWarp"  :data="dataList" :confine="confine">
          <span class="scrollTip" v-if="dataList.length>3" slot="left-switch" @mouseover="hallNextOver()" @mouseout="hallNextOut()">
            <img :src="hallPreV1" v-if="showTrue" alt="">
            <img :src="hallPrevH1" v-else alt="">
          </span>
          <ul class="dataList clear" :style="{width:dataList.length*400+'px'}">
            <li class="liItem" v-for="(item, index) in dataList" :key="index" :style="{}">
              <span :style="{backgroundImage:'url(http://www.zq100.com/api/files/file?fileId=2bfcc5997656413281de01629fc94e56)'}">
              <span class="itemTitle">
                {{item.title}}
                <img class="dataTip" :src="mainDataItemTip" alt="">
                <img class="imgs" :src="item.icon" alt="">
              </span>
              <div class="dataDec">{{item.item}}</div>
            </span>
            </li>
          </ul>
          <span class="scrollTip" v-if="dataList.length>3" slot="right-switch" @mouseover="hallNextOver()" @mouseout="hallNextOut()">
            <img :src="hallNext1" v-if="showTrue" alt="">
            <img :src="hallNextH1" v-else alt="">
          </span>
        </my-class>
      </div>
    </div>
</template>

<script>
  import myClass from '../../public/MyClass'
  export default {
    name: "MainData",
    components:{
      myClass
    },
    data(){
      return{
        mainDataItemTip:`${process.env.PICTURE_SERVE}/file?fileId=e5390fb20a8a4a3cbc13571857a12198`,
        hallPreV1:`${process.env.PICTURE_SERVE}/file?fileId=477cfd40f49a41d18065bcde8c02c6b0`,
        hallPrevH1:`${process.env.PICTURE_SERVE}/file?fileId=28ed5383c24840879fa1bc7697cfe3e5`,
        hallNext1:`${process.env.PICTURE_SERVE}/file?fileId=e85b8a4796b04ee3a6988ed141841431`,
        hallNextH1:`${process.env.PICTURE_SERVE}/file?fileId=a3ecce660bfc41749266df7159487675`,
        showTrue: true,
        confine:{
          start:0,
          end:3
        },
        dataList:[
          {id:1,title:'事项进驻情况',icon:`${process.env.PICTURE_SERVE}/file?fileId=ce6e6f60a5b54fc08e72a999c0c98ebf`,item:'截止到上个自然月统计的数据'},
          {id:2,title:'在线办理深度',icon:`${process.env.PICTURE_SERVE}/file?fileId=7e1403d7360947faa2a48e82602fdb01`,item:'上个自然月数据'},
          {id:3,title:'异常数统计',icon:`${process.env.PICTURE_SERVE}/file?fileId=e07baf27fce14f0881fe88e44bf17bab`,item:'2018年数据'},
          {id:1,title:'事项进驻情况',icon:`${process.env.PICTURE_SERVE}/file?fileId=ce6e6f60a5b54fc08e72a999c0c98ebf`,item:'截止到上个自然月统计的数据'},
          {id:2,title:'在线办理深度',icon:`${process.env.PICTURE_SERVE}/file?fileId=7e1403d7360947faa2a48e82602fdb01`,item:'上个自然月数据'},
          {id:3,title:'异常数统计',icon:`${process.env.PICTURE_SERVE}/file?fileId=e07baf27fce14f0881fe88e44bf17bab`,item:'2018年数据'}
        ],
        hallPower:[ //左右按钮图片
          {id:1,icon:`${process.env.PICTURE_SERVE}/file?fileId=3c69247ec86e4f48a6bea3409849cd1a`,iconH:`${process.env.PICTURE_SERVE}/file?fileId=eff4718ee6cf4ac1b1bb6296afd5a2ba`},
          {id:2,icon:`${process.env.PICTURE_SERVE}/file?fileId=2204b68e052949ec9142244a21045644`,iconH:`${process.env.PICTURE_SERVE}/file?fileId=b89f2dec87b644258db0bc1f631d57a2`},
        ],
      }
    },
    computed:{
      classOption3 () {
        return {
          autoPlay: false,
          switchSingleStep:400,
          switchOffset:0
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
  .mainData{
    height: 412px;
    width: 100%;
    .scrollWarp{
      width: 1200px !important;
      height: 360px;
      overflow: hidden;
      .scrollTip{
        cursor: pointer;
      }
    }
    .dataList{
      display: table;
      padding-top: 62px;
      .liItem{
        width: 400px;
        height: 300px;
        display: inline-block;
        float: left;
        &>span{
          width: 380px;
          height: 280px;
          display: inline-block;
          padding: 16px 24px;
          position: relative;
          margin-left: 8px;
          .itemTitle{
            color: $titleColor;
            font-size: 17px;
            .dataTip{
              position: relative;
              top: 4px;
            }
          }
          .imgs{
            position: relative;
            top: 0;
            left: -20px;
          }
          .dataDec{
            color: $titleColor;
            position: absolute;
            bottom: 5px;
            text-align: center;
            font-size: 14px;
            width: 334px;
            height: 20px;
            line-height: 20px;
          }
        }
      }
    }
  }
</style>
