<template>
  <div>
    <!--头部-->
    <AfterLandingOther :inputSearchShow="true" :falsePage="false" otherTiTle="消息中心"></AfterLandingOther>
    <BannerOther :bgImg="bgImg" title="消息中心" :selectdie="false"></BannerOther>
    <div class="win main clearfloat">
      <div class="side">
        <div class="block0">
          <div class="side-line0">
            <div class="circle0"></div>
            <div class="line0"></div>
          </div>
        </div>
        <div class="block">
          <div class="title">
            <div class="btitle">站内消息</div>
            <div class="ctitle" @click="allMessage(0)" :class="{activeIndex:messageIndex===0}">全部消息</div>
            <div class="ptitle" @click="allMessage(1)" :class="{activeIndex:messageIndex===1}">未读消息</div>
            <div class="ptitle" @click="allMessage(2)" :class="{activeIndex:messageIndex===2}">已读消息</div>
          </div>
          <div class="side-line">
            <div class="circle">
              <div class="s-circle"></div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="block2" @click="go3">
          <div class="title2">
            <div class="btitle2">消息配置</div>
          </div>
          <div class="side-line2">
            <div class="circle2"></div>
            <div class="line2"></div>
          </div>
        </div>
      </div>
      <div class="rights">
        <div class="navigation">
          <div
            v-for="(type,index) in types"
            :key="index"
            class="type"
            @click="switchColor(index)"
            :class="currentType==index?'type-check':'type-uncheck'">
            {{type.name}}<span style="color:red;margin-left:5px;">({{type.num}})</span>
          </div>
        </div>
        <div class="msgbody">
          <table class="msgtable">
            <tr>
              <th>
                <input type="checkbox">
                <span class="th-title">消息名称</span>
              </th>
              <th>
                时间
              </th>
              <th>
                来源
              </th>
              <th>
                类型
              </th>
              <th>
                状态
              </th>
            </tr>
            <tbody>
              <tr
                v-for="message in messages"
                :key="message.id">
                <td><input type="checkbox"><span class="t-title">{{message.title}}</span></td>
                <td>{{message.time}}</td>
                <td>{{message.source}}</td>
                <td>{{message.type}}</td>
                <td :class="message.status=='已读'?'status-read':'status-unread'">{{message.status}}</td>
              </tr>
            </tbody>
          </table>
          <div class="clearfix">
            <div style="float:left;">
              <input type="checkbox">已选0项
              <select><option value ="volvo">标记已读</option></select>
              <select><option value ="volvo">删除</option></select>
            </div>
            <div class="right">
              <Pagination :pageAll="5"></Pagination>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!--脚部-->
    <Footer></Footer>
    <sidebar></sidebar>
  </div>
</template>

<script>
  import AfterLandingOther from '../../public/newHead'
  import BannerOther from '../../public/BannerOther'
  import Footer from '../../public/Footer'
  import Sidebar from '../../public/Sidebar'
  import Pagination from '../../public/Pagination'
  import sidebar from '../../public/Sidebar'
  import {getPage} from '@/api/messageCenter'
  export default {
    name: 'MessageCenter',
    components:{
      AfterLandingOther,
      Footer,
      Sidebar,
      Pagination,
      sidebar,
      BannerOther
    },
    data () {
      return {
        currentType: 0,
        types: [
          {
            id: 0,
            name: '全部类型消息',
            num:17
          },
          {
            id: 1,
            name: '申报事项',
            num:2
          },
          {
            id: 2,
            name: '业务审核',
            num:3
          },
          {
            id: 3,
            name: '邮件提醒',
            num:1
          },
          {
            id: 4,
            name: '短信提醒',
            num:6
          },
          {
            id: 5,
            name: '通知公告',
            num:3
          },
          {
            id: 6,
            name: '站内推送',
            num:2
          }
        ],
        messages: [
          {
            id: 0,
            title: '此处为为消息相关类标题',
            time: '2018-12-25',
            source: '计划财务处',
            type: '申报事项',
            status: '未读'
          },
          {
            id: 1,
            title: '此处为为消息相关类标题',
            time: '2018-12-25',
            source: '计划财务处',
            type: '申报事项',
            status: '未读'
          },
          {
            id: 2,
            title: '此处为为消息相关类标题',
            time: '2018-12-25',
            source: '计划财务处',
            type: '申报事项',
            status: '未读'
          },
          {
            id: 3,
            title: '此处为为消息相关类标题',
            time: '2018-12-25',
            source: '计划财务处',
            type: '申报事项',
            status: '已读'
          },
          {
            id: 4,
            title: '此处为为消息相关类标题',
            time: '2018-12-25',
            source: '计划财务处',
            type: '申报事项',
            status: '已读'
          },
          {
            id: 0,
            title: '此处为为消息相关类标题',
            time: '2018-12-25',
            source: '计划财务处',
            type: '申报事项',
            status: '未读'
          },
          {
            id: 1,
            title: '此处为为消息相关类标题',
            time: '2018-12-25',
            source: '计划财务处',
            type: '申报事项',
            status: '未读'
          },
          {
            id: 2,
            title: '此处为为消息相关类标题',
            time: '2018-12-25',
            source: '计划财务处',
            type: '申报事项',
            status: '未读'
          },
          {
            id: 3,
            title: '此处为为消息相关类标题',
            time: '2018-12-25',
            source: '计划财务处',
            type: '申报事项',
            status: '已读'
          },
          {
            id: 4,
            title: '此处为为消息相关类标题',
            time: '2018-12-25',
            source: '计划财务处',
            type: '申报事项',
            status: '已读'
          }
        ],
        bgImg:require('@/assets/messageBanner.png'),
        messageIndex:0
      }
    },
    mounted(){
      this.init()
    },
    methods:{
      go3(){
        console.log('ggg')
        this.$router.push({path:'/messageSetting'})
      },
      switchColor(ind){
        this.currentType=ind
      },
      init(){
        getPage().then(res=>{
          console.log(res,'renrenrenren')
        })
      },
      allMessage(ind){
        this.messageIndex=ind
      }
    }

  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .win {
    .side {
      /*display: flex;*/
      /*flex-direction: column;*/
      width: 115px;
      position: relative;
      margin-right: 42px;
      padding-top: 20px;
      float: left;
      .block0 {
        display: flex;
        justify-content: flex-end;
        height: 50px;
        .side-line0 {
          height: 100%;
          position: relative;
          .circle0 {
            border: 3px solid #aaa;
            height: 17px;
            width: 17px;
            border-radius: 50%;
          }
          .line0 {
            position: absolute;
            top: 17px;
            bottom: 0px;
            width: 9px;
            border-right: 1px solid #aaa;
          }
        }
      }
      .block {
        display: flex;
        justify-content: flex-end;
        height: 150px;
        .title {
          text-align: right;
          .btitle {
            font-weight: bold;
            font-size: 16px;
            margin: 0 15px 26px 15px;
            cursor:pointer;
          }
          .ctitle {
            margin: 15px;
            font-size:14px;
          }
          .ptitle {
            color: #999;
            margin: 15px;
            font-size:14px;
          }
          .activeIndex{
            color: #85b6f9;
          }
        }
        .side-line {
          height: 100%;
          position: relative;
          .circle {
            border: 3px solid #d3dde8;
            background-color: #5b87dd;
            height: 17px;
            width: 17px;
            border-radius: 50%;
          }
          .line {
            position: absolute;
            top: 17px;
            bottom: 0px;
            width: 9px;
            border-right: 1px solid #aaa;
          }
        }
      }
      .block2 {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        position: absolute;
        top: 218px;
        .title2 {
          text-align: right;
          .btitle2 {
            font-weight: bold;
            font-size: 16px;
            margin: 0 15px 0 15px;
            cursor:pointer;
          }
        }
        .side-line2 {
          height: 100%;
          position: relative;
          .circle2 {
            border: 3px solid #fff;
            background-color: #aaa;
            height: 17px;
            width: 17px;
            border-radius: 50%;
          }
          .line2 {
            position: absolute;
            top: 17px;
            bottom: 0px;
            width: 9px;
            height: 665px;
            border-right: 1px solid #aaa;
          }
        }
      }
    }
    .rights {
      padding-top: 30px;
      float: left;
      .navigation {
        display: flex;
        .type {
          width: 135px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          margin-right: 4px;
        }
        .type-check {
          background-color: #5b87dd;
          color: white;
        }
        .type-uncheck {
          background-color: #e7eaee;
          color: #666;
        }
      }

      table {
        margin-top: 20px;
        width: 100%;
        min-height: 50px;
        line-height: 50px;
        border-collapse: collapse;
        padding:5px;
        border-bottom:1px solid #ddd;
        tr {
          th {
            border-bottom:1px solid #e6e9f1;
            text-align: left;
            color: #727475;
            font-weight: normal;
            height:60px;
            .th-title{
              margin-left:12px;
              color: #727475;
            }
          }
          td {
            border-bottom:1px solid #e6e9f1;
            height:60px;
            .t-title{
              margin-left:12px;
            }
          }
          .status-unread {
            color: red;
          }
          .status-read {
            color: black;
          }
        }
      }
    }
  }
</style>
