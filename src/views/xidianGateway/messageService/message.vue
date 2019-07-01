<template>
  <div class="eventServe">
    <!--头部-->
    <AfterLandingOther :inputSearchShow="true"  otherTiTle=""></AfterLandingOther>
    <!--头部下面得banner-->
    <xdBannerOther :tab="true" :tabNav="tabNav" :bgImg="bgImg" @itemActive="activeRoute"></xdBannerOther>
    <div class="main">
      <div class="content h01">

      </div>
      <ModuleTitle moduleTitle="业务分类"></ModuleTitle>
      <div class="content h02">

      </div>
      <ModuleTitle moduleTitle="服务运维保障"></ModuleTitle>
      <div class="content h03">
<!--        <a href="#" class="abs-link pos_one">&nbsp;</a>-->
<!--        <a href="#" class="abs-link pos_two">&nbsp;</a>-->
      </div>
      <ModuleTitle moduleTitle="应用入口"></ModuleTitle>
      <div class="content h04">
<!--        <ul class="application">-->
<!--          <li>-->
<!--            <a href="">-->

<!--            </a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a href="">-->

<!--            </a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a href="">-->

<!--            </a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a href="">-->

<!--            </a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a href="">-->

<!--            </a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a href="">-->

<!--            </a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a href="">-->

<!--            </a>-->
<!--          </li>-->
<!--          <li>-->
<!--            <a href="">-->

<!--            </a>-->
<!--          </li>-->
<!--        </ul>-->
      </div>
      <ModuleTitle moduleTitle="相关推荐"></ModuleTitle>
      <div class="content">
        <table class="newslist">
          <thead>
            <tr>
              <th>政策资讯</th>
              <th width="200">发布部门</th>
              <th width="100">发布时间</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="#">此处为相关通知公告类信息此处为相关通知公告类信息</a></td>
              <td>计划财务处</td>
              <td>2018-12-25</td>
            </tr>
            <tr>
              <td><a href="">此处为相关通知公告类信息此处为相关通知公告类信息</a></td>
              <td>计划财务处</td>
              <td>2018-12-25</td>
            </tr>
            <tr>
              <td><a href="">此处为相关通知公告类信息此处为相关通知公告类信息</a></td>
              <td>计划财务处</td>
              <td>2018-12-25</td>
            </tr>
            <tr>
              <td><a href="">此处为相关通知公告类信息此处为相关通知公告类信息</a></td>
              <td>计划财务处</td>
              <td>2018-12-25</td>
            </tr>
            <tr>
              <td><a href="">此处为相关通知公告类信息此处为相关通知公告类信息</a></td>
              <td>计划财务处</td>
              <td>2018-12-25</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--脚部-->
    <sidebar></sidebar>
    <Footer></Footer>
  </div>
</template>
<script>
  import AfterLandingOther from '../public/AfterLandingOther'
  import xdBannerOther from './BannerOther'
  import ModuleTitle from '../public/ModuleTitle'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    data(){
      return{
        bgImg:`${process.env.PICTURE_SERVE}/file?fileId=562ebfdebc8e479197064e67a4deaaba`,
        tabStatus:0,
      }
    },
    components:{
      AfterLandingOther,
      xdBannerOther,
      ModuleTitle,
      Footer,
      sidebar
    },
    methods:{
      activeRoute(data){
        this.tabStatus=data
      }
    }
  }
</script>
<style lang="scss">
  .content{
    position: relative;
  }
  .h01{
    height:250px;margin-top:10px;
    background:url("http://www.zq100.com/api/files/file?fileId=09cd0938d21948b3b169c256dfd9bc4c") no-repeat;
  }
  .h02{
    height:845px;
    background:url('http://www.zq100.com/api/files/file?fileId=c9c5ced24dd54679946777eca183dd9b') no-repeat;
  }
  .h03{
    height:350px;
    margin-top: 10px;
    background:url("http://www.zq100.com/api/files/file?fileId=c40c287a803148f78970496be2287920") no-repeat;
  }
  .h04{
    height:500px;
    background:url("http://www.zq100.com/api/files/file?fileId=134951f2033d4e3498112830538cb109") no-repeat;
  }
  .h05{
    height: 325px;
    margin-top: 10px;
    background:url("http://www.zq100.com/api/files/file?fileId=30b4ce66c148443e94cfd3b58251f3f5") no-repeat;
  }
  .newslist{
    width:100%;text-align:left;
    border-collapse: collapse;
    td,th{height:50px;border-bottom:solid 1px #ccc;color:#333;}
    th{color:#666;}
  }
  .abs-link{position:absolute;width:60px;height:20px;display:block;}
  .pos_one{right:1px;top:10px;}
  .pos_two{
    left: 42px;
    top: 247px;
    height: 40px;
    width: 118px;
  }

  .application{
    li{
      width: 300px;
      height: 224px;
      float: left;

      margin-top: 27px;
      padding: 8px;
      a{display:block;width:100%;height:100%;}
    }

  }
</style>
