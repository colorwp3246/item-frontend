<template>
  <div class="errDetail">
    <AfterLandingOther :inputSearchShow="true"></AfterLandingOther>
    <div class="title main">
      这里是问题描述，哲理诗问题描述，这里是问题描述,哲理诗问题描述，这里是问题描述
    </div>
    <div class="detailFrom main">
      <ul>
        <li class="clearfloat">
          <div class="fromDate fl">查询日期</div>
          <div class="dateContent fl fonts">2019-05-14 14：12：33</div>
          <div class="fromObject fl">查询对象</div>
          <div class="objectContent fl fonts">财务</div>
        </li>
        <li>
          <div class="fromDate fl">咨询主题</div>
          <div class="aloneCol fl fonts">咨询主题</div>
        </li>
        <li>
          <div class="fromDate fl">相关材料</div>
          <div class="aloneCol fl fonts"></div>
        </li>
        <li class="clearfloat">
          <div class="fromDate fl">答复时间</div>
          <div class="dateContent fl fonts">2019-05-14 14：12：33</div>
          <div class="fromObject fl">回复部门</div>
          <div class="objectContent fl fonts">财务部</div>
        </li>
        <li>
          <div class="fromDate fl">答复内容</div>
          <div class="aloneCol fl fonts">阿里山扩大飞机啊看电视剧覅偶尔加二房东靠</div>
        </li>
      </ul>
    </div>
    <sidebar></sidebar>
    <Footer></Footer>
  </div>
</template>
<script>
  import AfterLandingOther from '../public/AfterLandingOther'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    data(){
      return{

      }
    },
    components:{
      AfterLandingOther,
      Footer,
      sidebar
    },
    methods:{

    }
  }
</script>
<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .errDetail{
    .title{
      margin-top:60px;
      margin-bottom:50px;
      font-size: 20px;
    }
    .detailFrom ul li{
      border-top: solid 1px #e0e2ea;
      height: 50px;
      line-height: 50px;
      overflow: hidden;
      font-size: $fontSize14;
      .fromDate{
        width: 200px;
        height: 50px;
        text-align: center;
        background-color: #f4f4f4;
        border-left: solid 1px #e0e2ea;
        font-weight: bold;
      }
      .dateContent{
        height: 100%;
        width:431px;
        text-align: left;
        border-left: solid 1px #e0e2ea;
        padding-left: 15px;
      }
      .fromObject{
        height: 100%;
        width: 170px;
        text-align: center;
        background-color: #f4f4f4;
        border-left: solid 1px #e0e2ea;
        font-weight: bold;
      }
      .objectContent{
        height: 100%;
        width:398px;
        text-align: left;
        border-left: solid 1px #e0e2ea;
        border-right: solid 1px #e0e2ea;
        padding-left: 15px;
      }
      .aloneCol{
        height: 100%;
        width:999px;
        text-align: left;
        border-left: solid 1px #e0e2ea;
        border-right: solid 1px #e0e2ea;
        padding-left: 15px;
      }
    }
    .detailFrom ul li:last-child{
      border-bottom: solid 1px #e0e2ea;
    }
    .fonts{

    }
  }
</style>
