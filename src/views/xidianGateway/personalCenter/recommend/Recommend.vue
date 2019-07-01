<template>
    <div class="recommend main">
      <div class="recomHeard">
        <ModuleTitle moduleTitle="相关推荐"></ModuleTitle>
        <ul class="switchBox clear">
          <li class="switchTitle" @click="clickTitle(index,$event)" v-for="(item, index) in switchTitle" :key="index" :class="index ==activeTitle?'active':''">
            {{item}}
          </li>
        </ul>
      </div>
      <div class="switchContent">
        <div class="switchItem" v-for="arr in 3" v-show="(arr-1) ==activeTitle">
          <table class="item scrollTitle">
            <tr v-for="(item, index) in listTitle" class="clear" :key="index">
              <td class="title"><span class="scroll-span">{{item.title}}</span></td>
              <td class="department"><span class="scroll-span">{{item.department}}</span></td>
              <td class="time"><span class="scroll-span">{{item.time}}</span></td>
            </tr>
          </table>
          <my-class :data="listData" class="warp" :class-option="classOption" @ScrollEnd="end">
            <table class="item">
              <tr v-for="(item, index) in listData" class="clear" :class="index==0?'firstTr':''" :key="index">
                <td class="title"><span class="scroll-span">{{item.title}}{{arr}}</span></td>
                <td class="department"><span class="scroll-span">{{item.department}}{{arr}}</span></td>
                <td class="time"><span class="scroll-span">{{item.time}}</span></td>
              </tr>
            </table>
          </my-class>
        </div>
      </div>
    </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  import myClass from '../../public/MyClass'

  export default {
    name: "Recommend",
    components:{
      ModuleTitle,
      myClass
    },
    data(){
      return{
        switchTitle:['政策资讯','通知公告','历史相关'],
        activeTitle:0,
        listTitle:[
          {'title': '政策咨询', 'department': '发布部门','time':'发布时间'},
        ],
        listData: [
          {'title': '此处为相关政策资讯类信息此处为相关政策资讯类信息', 'department': '计划财务处','time':'2018-10-22'},
          {'title': '此处为相关政策资讯类信息此处为相关政策资讯类信息', 'department': '计划财务处','time':'2018-10-22'},
          {'title': '此处为相关政策资讯类信息此处为相关政策资讯类信息', 'department': '计划财务处','time':'2018-10-22'},
          {'title': '此处为相关政策资讯类信息此处为相关政策资讯类信息', 'department': '计划财务处','time':'2018-10-22'},
          {'title': '此处为相关政策资讯类信息此处为相关政策资讯类信息', 'department': '计划财务处','time':'2018-10-22'},
          {'title': '此处为相关政策资讯类信息此处为相关政策资讯类信息', 'department': '计划财务处','time':'2018-10-22'},
          {'title': '此处为相关政策资讯类信息此处为相关政策资讯类信息', 'department': '计划财务处','time':'2018-10-22'},
          ]
      }
    },
    methods:{
      clickTitle: function (i,e) {
        this.activeTitle = i
      },
      end () {
      }
    },
    computed: {
      classOption () {
        return {
          step: 0.5,
          limitMoveNum: 5,
          openTouch: false
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .recommend{
    .recomHeard{
      position: relative;
      .switchBox{
        position: absolute;
        right: 0;
        bottom: 14px;
        li{
          float: left;
          margin-left: 20px;
          font-size: 14px;
        }
      }
    }
    .switchBox{
      .switchTitle{
        cursor: pointer;
        &.active{
          color: $recomActiveTitle;
          font-weight: bold;
        }
      }
    }
    .switchContent{
      .switchItem{
        .scrollTitle{
          td{
            height: 54px;
            border-bottom: $recomTrBorder;
            color: $recomThColor;
            font-size: 13px;
          }
        }
        .item{
          border-collapse: collapse;
          border-spacing: 0;
        }
        td{
          height: 40px;
          line-height: 40px;
          border-bottom: $recomBorder;
          span{
            font-size: 16px;
          }
        }
        .title{
          width: 700px;
        }
        .department{
          width: 300px;
        }
        .time{
          width: 200px;
          text-align: right;
          padding-right: 10px;
        }
        .warp{
          overflow: hidden;
          height: 300px;
        }
      }
    }
  }


</style>
