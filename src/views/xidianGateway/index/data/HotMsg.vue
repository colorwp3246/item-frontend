<template>
    <div class="main hot_msg_bg">
      <div class="fl">
        <i class="icon mb fl"></i>
        <span class="fl">
          <h3 class="hot_title">
          下午时间，只有奋斗的人生才称得上幸福的人生！
          </h3>
          <span class="hot_date">2019年6月4日 星期二</span>
        </span>
      </div>
      <div class="fr" style="padding-top:20px;">
        <div class="fl">
          <ul class="hot_content">
            <li>
              <a href="">公开课停开课申请只有奋斗的人生才称得上幸福的人生！</a>
              <i>热点</i>
            </li>
            <li>
              <a href="">公开课停开课申请</a>
              <i>热点</i>
            </li>
            <li>
              <a href="">公开课停开课申请</a>
              <i>主推</i>
            </li>
          </ul>
        </div>
        <div class="fl">
          <button class="hot_refresh">刷新</button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Data",
    components:{

    },
    data(){
      return{
        tabs: ["学生总览", "就业","一卡通"],
        tabContents: ["内容一", "内容二","内容三"],
        num: '学生总览'
      }
    },
    methods:{
      tab:function(index){
        this.num = index;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .hot_msg_bg{
    background:#f1f2f4;
    height:80px;
    margin-top:38px;
    padding:10px;
  }
  .fl{float:left;}
  .fr{float:right;}
  .hot_title{margin-bottom:5px;font-size:$fontSize14;color:#1f252a}
  .hot_date{color:#666666;font-size:12px;}
  .hot_content{
    li{
      float:left;
      width:230px;
      font-size: $fontSize14;
      a{display:inline-block;text-overflow:ellipsis;white-space: nowrap;overflow:hidden;width:140px;height:22px;line-height:22px;vertical-align: bottom;}
      i{
        display:inline-block;
        width:50px;height:22px;
        background:#c8dbf4;
        color:#4d7ab7;
        font-style:normal;
        text-align:center;
        line-height:22px;
      }
    }

  }
  .hot_refresh{
    width: 50px;
    height: 22px;
    background-color: #f1f2f3;
    border: solid 1px #dedede;
    font-size: 14px;
    color: #333333;
    position: relative;
    cursor:pointer;
  }
  .mb{
    margin:13px 10px 0px 10px;
    background-position: 0 18px;
  }
</style>
