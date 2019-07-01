<template>
  <div>
    <AfterLandingOther :inputSearchShow="false" otherTiTle="办件评价"></AfterLandingOther>
    <div class="main">
      <div class="menu_position">当前位置：首页 > 我的办件 > <span>办件评价</span></div>
      <div>
         <div class="title clearfix">
           <div class="fl w30"><label>事项编码：</label><span>BM5487487487487487487487</span></div>
           <div class="fr w60"><label>事项名称：</label><span class="ellipsis">事项名称事项名称事项名称事项名称事项名称事项名称事项名称事项名称事项名称事项名称事项名称事项名称事项名称事项名称事项名称事项名称事项名称事项名称事项名称事项名称事项名称</span></div>
         </div>
        <div class="content">
          <dl class="list clearfix">
            <dt>办事指南符合度</dt>
            <dd><i class="star_yes"></i><i class="star_yes"></i><i class="star_yes"></i><i class="star_yes"></i><i class="star_yes"></i></dd>

          </dl>
          <dl class="list clearfix">
            <dt>办事效率</dt>
            <dd><i class="star_yes"></i><i class="star_yes"></i><i class="star_yes"></i><i class="star_no"></i><i class="star_no"></i></dd>

          </dl>
          <dl class="list clearfix">
            <dt>服务质量</dt>
            <dd><i class="star_yes"></i><i class="star_yes"></i><i class="star_no"></i><i class="star_no"></i><i class="star_no"></i></dd>

          </dl>
          <dl class="list clearfix">
            <dt>评价留言</dt>
            <dd>
              <textarea class="message"></textarea>
            </dd>
          </dl>
          <dl class="list clearfix">
            <dt>&nbsp;</dt>
            <dd>
              <div class="button">
                <button class="btn">确定</button>
                <button class="btn">重置</button>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>

    <!--脚部-->
    <sidebar></sidebar>
    <Footer></Footer>
  </div>
</template>
<script>
  import AfterLandingOther from '../public/AfterLandingOther'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    data() {
      return {

      }
    },
    components: {
      AfterLandingOther,
      Footer,
      sidebar
    },
    methods:{
      searchprocess(){

      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@/styles/gatewayBase.scss";
  .menu_position{
    margin-top:30px;
    span{color:#1f73cf;}
  }
  .title{
    margin-top:60px;
    border-bottom:dashed 1px #ccc;
    padding-bottom:20px;
    span,label{font-size:20px;color:#666;}
    .ellipsis{
      display: inline-block;
      width: 620px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
    }
  }
  .content{
    padding:70px;
    .list{
      margin-bottom:30px;
      dt{float:left;width:200px;text-align:right;padding-right:30px;}
      dd{
        float:left;width:80%;text-align:left;margin:0;
        i{
          display:inline-block;width:22px;height:22px;
          margin-left:5px;
          background:url("http://www.zq100.com/api/files/file?fileId=9ad718d638b64f7f9e3d7187b93fc767") no-repeat;
        }
        .star_yes{
          background-position: 0px 0px;
        }
        .star_no{
          background-position: -26px 0px;
        }
      }
      .message{
        width:650px;height:180px;
        resize: none;
        padding:10px;
      }
      .button{padding-left:100px;}
      .btn{
        width:200px;border:0px;height:35px;background:#4473a9;color:#fff;margin-left:10px;border-radius:3px;display:inline-block;
      }
    }
  }
  .w40{
    width:40%;
  }
  .w60{
    width:60%;
  }
</style>
