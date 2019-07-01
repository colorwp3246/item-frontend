<template>
  <div class="task main">
    <!--http://ehall.xidian.edu.cn/taskcenterapp/sys/taskCenter/portalDataReceive/getAllPortalTask.do-->
    <ModuleTitle moduleTitle="我的任务" to=""></ModuleTitle>
    <div class="taskBox clear">
      <div class="taskLeft">
        <img :src="task" alt="" style="margin-top: 20px">
      </div>
      <div class="taskRight clear">
        <div class="taskItem needTask">
          <div>56</div>
          <p>代办任务</p>
        </div>
        <div class="taskItem doneTask">
          <div>272</div>
          <p>已办任务</p>
        </div>
        <div class="taskItem myTask">
          <div>28</div>
          <p>我的发起</p>
        </div>
      </div>
    </div>
    <div class="taskMsgBox">
      <ul class="taskMsgTitle clear">
        <li v-for="(item, index) in taskTitle" :key="index" :class="index==activeTitle?'active':''" @click="clickTitle(index,$event)">
          {{item}}
        </li>
      </ul>
      <div v-for="arr in 3" v-show="(arr-1) ==activeTitle">
        <table class="item scrollTitle">
          <tr v-for="(item, index) in listTitle" class="clear" :key="index">
            <td class="title">{{item.title}}</td>
            <td class="source">{{item.source}}</td>
            <td class="startTime">{{item.startTime}}</td>
            <td class="endTime">{{item.endTime}}</td>
            <td class="state">{{item.state}}</td>
          </tr>
        </table>
        <my-class :data="listData" class="warp" :class-option="classOption">
          <table class="item">
            <tr v-for="(item, index) in listData" class="clear" :class="index==0?'firstTr':''" :key="index">
              <td class="title">{{item.title}}{{arr}}</td>
              <td class="source">{{item.source}}</td>
              <td class="startTime">{{item.startTime}}</td>
              <td class="endTime">{{item.endTime}}</td>
              <td class="state">{{item.state}}</td>
            </tr>
          </table>
        </my-class>
      </div>
    </div>
  </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  import MyClass from '../../public/MyClass'
  import 'jquery'
  export default {
    name: "Task",
    components:{
      ModuleTitle,
      MyClass
    },
    data(){
      return{
        task:`${process.env.PICTURE_SERVE}/file?fileId=b117f96ed3994000b8747a79217caeb5`,
        activeTitle:0,
        taskTitle:['待办任务','已办任务','我的发起'],
        listTitle:[
          {'title': '任务名称', 'source': '任务来源','startTime':'发起时间','endTime':'办理时间','state':'状态'}
        ],
        listData: [
          {'title': '上官一哲的新进职工待您审批，请及时进行审批确认 ', 'source': '西电HR','startTime':' 2018-10-25 12:12:23','endTime':'2018-11-25 09:56:23','state':'进行中'},
          {'title': '上官一哲的新进职工待您审批，请及时进行审批确认 ', 'source': '西电HR','startTime':' 2018-10-25 12:12:23','endTime':'2018-11-25 09:56:23','state':'进行中'},
          {'title': '上官一哲的新进职工待您审批，请及时进行审批确认 ', 'source': '西电HR','startTime':' 2018-10-25 12:12:23','endTime':'2018-11-25 09:56:23','state':'进行中'},
          {'title': '上官一哲的新进职工待您审批，请及时进行审批确认 ', 'source': '西电HR','startTime':' 2018-10-25 12:12:23','endTime':'2018-11-25 09:56:23','state':'进行中'},
          {'title': '上官一哲的新进职工待您审批，请及时进行审批确认 ', 'source': '西电HR','startTime':' 2018-10-25 12:12:23','endTime':'2018-11-25 09:56:23','state':'进行中'},
          {'title': '上官一哲的新进职工待您审批，请及时进行审批确认 ', 'source': '西电HR','startTime':' 2018-10-25 12:12:23','endTime':'2018-11-25 09:56:23','state':'进行中'},
          {'title': '上官一哲的新进职工待您审批，请及时进行审批确认 ', 'source': '西电HR','startTime':' 2018-10-25 12:12:23','endTime':'2018-11-25 09:56:23','state':'进行中'},
          {'title': '上官一哲的新进职工待您审批，请及时进行审批确认 ', 'source': '西电HR','startTime':' 2018-10-25 12:12:23','endTime':'2018-11-25 09:56:23','state':'进行中'},
          {'title': '上官一哲的新进职工待您审批，请及时进行审批确认 ', 'source': '西电HR','startTime':' 2018-10-25 12:12:23','endTime':'2018-11-25 09:56:23','state':'进行中'},
          {'title': '上官一哲的新进职工待您审批，请及时进行审批确认 ', 'source': '西电HR','startTime':' 2018-10-25 12:12:23','endTime':'2018-11-25 09:56:23','state':'进行中'},
        ],
      }
    },
    computed: {
      classOption () {
        return {
          step: 0.5,
          limitMoveNum: 7,
          openTouch: false
        }
      }
    },
    created(){
      /*$.ajax({
        url: 'http://ehall.xidian.edu.cn/taskcenterapp/sys/taskCenter/portalDataReceive/getAllPortalTask.do', //不同的域
        type: 'GET', // jsonp模式只有GET是合法的
        dataType: 'jsonp', // 数据类型
        jsonp: 'callback', // 指定回调函数名，与服务器端接收的一致，并回传回来
        success: function(data) {
          console.log(data);
        }
      })*/
      /*this.$jsonp(`http://ehall.xidian.edu.cn/rsfw/sys/htglxt/index.do`, {
      }, (err, m) => {
        if (err) {
          console.error(err.message)
        } else {
          console.log(m,666)
        }
      })*/
      //console.log(getRecommend())
      /*getRecommend().then((res) => {
        console.log(res);
        if (res.code === ERR_OK) {
          console.log(res.data)
        }
      })*/
    },
    methods:{
      clickTitle: function (i,e) {
        this.activeTitle = i
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.task{
  .taskBox{
    border-bottom: 1px solid $heardLine;
    padding: 40px 0;
    .taskLeft{
      width: 450px;
      float: left;
    }
    .taskRight{
      width: 750px;
      float: right;
      .taskItem{
        float: left;
        width: 234px;
        height: 158px;
        background-color: $taskBgColor;
        border: 1px solid $taskBorderColor;
        margin-left: 16px;
        text-align: center;
        margin-top: 90px;
        cursor: pointer;
        &:hover{
          background-color: #dee8ff;
          transition: all .3s;
        }
        div{
          font-size: 58px;
          color: $taskColor;
          margin-top: 20px;
        }
        p{
          font-size: 20px;
          color: $ModuleTitle;
          margin-top: 4px;
        }
      }
    }
  }
  .taskMsgBox{
    .taskMsgTitle{
      margin:  40px 0 18px 0;
      li{
        float: left;
        padding: 8px 20px;
        background-color: $taskTitleBg;
        margin-right: 10px;
        font-size: 16px;
        color: $ModuleTitle;
        border-radius: 4px;
        cursor: pointer;
        &.active{
          background-color: $active;
          color: #ffffff;
        }
      }
    }
    .warp{
      max-height: 290px;
      overflow: hidden;
      border-bottom: $centerData;
    }
    .item{
      border-spacing: 0;
      border-collapse: collapse;
      &.scrollTitle{
        background-color: $taskTitleBg;
        td{
          height: 54px;
          font-weight: bold;
          text-align: center;
        }
      }
      td{
        border: $centerData;
        text-align: center;
        height: 42px;
        line-height: 42px;
        font-size: 16px;
        padding: 0 6px;
      }
      .title{
        width: 430px;
        text-align: left;
      }
      .source{
        width: 150px;
      }
      .startTime{
        width: 240px;
      }
      .endTime{
        width: 240px;
      }
      .state{
        width: 140px;
      }
    }
  }
}
</style>
