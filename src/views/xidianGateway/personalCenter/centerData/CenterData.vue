<template>
  <div class="centerData main">
    <ModuleTitle moduleTitle="我的数据"></ModuleTitle>
    <div class="baseData clear">
      <div class="baseData-left">
        <img :src="centerData1" alt="">
      </div>
      <div class="baseData-right">
        <div class="scrollBox">
          <table class="item scrollTitle">
            <tr v-for="(item, index) in listTitle" class="clear" :key="index">
              <td class="title"><span class="scroll-span">{{item.title}}</span></td>
              <td class="userTime"><span class="scroll-span">{{item.userTime}}</span></td>
              <td class="per"><span class="scroll-span">{{item.per}}</span></td>
            </tr>
          </table>
          <my-class :data="listData" class="warp" :class-option="classOption" @ScrollEnd="end">
            <table class="item">
              <tr v-for="(item, index) in listData" class="clear" :class="index==0?'firstTr':''" :key="index">
                <td class="title"><span class="scroll-span">{{item.title}}</span></td>
                <td class="userTime"><span class="scroll-span">{{item.userTime}}</span></td>
                <td class="per"><span class="scroll-span">
                  <span class="perBox">
                    <span class="perRang" :style="{'width':(item.per)*1.6+'px'}"></span>
                  </span>
                  {{item.per}}%
                </span></td>
              </tr>
            </table>
          </my-class>
        </div>
      </div>
    </div>
    <div class="applyData">
      <img :src="centerData2" alt="">
    </div>
  </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  import myClass from '../../public/MyClass'
  export default {
    name: "centerData",
    components:{
      ModuleTitle,
      myClass
    },
    data(){
      return{
        centerData1:`${process.env.PICTURE_SERVE}/file?fileId=74de845536ad479aa87504b596687979`,
        centerData2:`${process.env.PICTURE_SERVE}/file?fileId=72c29ecdd1ac43caaa21325a59a60946`,
        listTitle:[
          {'title': '个人收藏', 'userTime': '本月使用（次）','per':'使用率'},
        ],
        listData: [
          {'title': '通知公告', 'userTime': '55','per':'80'},
          {'title': '全流程采购', 'userTime': '25','per':'27'},
          {'title': '财务系统', 'userTime': '86','per':'55'},
          {'title': '研究生系统', 'userTime': '47','per':'48'},
          {'title': '2013教务系统', 'userTime': '99','per':'63'},
          {'title': '人事信息', 'userTime': '42','per':'72'},
          {'title': '评价管理系统', 'userTime': '28','per':'53'},
          {'title': '科研系统', 'userTime': '73','per':'88'}
          ],
      }
    },
    computed: {
      classOption () {
        return {
          step: 0.5,
          limitMoveNum: 8,
          openTouch: false
        }
      }
    },
    methods: {
      end () {
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .baseData{
    height: 450px;
    .baseData-left{
      display: inline-block;
      float: left;
      width: 486px;
      img{
        margin: 58px 0 0 18px;
      }
    }
    .baseData-right{
      width: 714px;
      display: inline-block;
      float: right;
      .scrollBox{
        width: 653px;
        margin-top: 46px;
        border-bottom: $centerData;
        .warp{
          max-height: 306px;
          overflow: hidden;
        }
        .item{
          border-spacing: 0;
          border-collapse: collapse;
          .title{
            width: 186px;
          }
          .userTime{
            width: 180px;
          }
          .per{
            width: 290px;
            .perBox{
              display: inline-block;
              width: 160px;
              height: 12px;
              background-color: $centerPerBg;
              position: relative;
              margin-right: 20px;
              .perRang{
                display: inline-block;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-color: $centerPerRangBg;
              }
            }
          }
          .firstTr{
            td{
              border-top: none;
            }
          }
          td{
            border: $centerData;
            .scroll-span{
              display: inline-block;
              width: 100%;
              height: 36px;
              line-height: 36px;
              text-align: center;
              font-size: 16px;
            }
          }
          &.scrollTitle{
            .scroll-span{
              height: 54px;
              line-height: 54px;
              background-color: $centerTh;
              font-size: 15px;
              font-weight: bold;
              color: #0d1c28;
            }
          }
        }
      }
    }
  }
</style>
