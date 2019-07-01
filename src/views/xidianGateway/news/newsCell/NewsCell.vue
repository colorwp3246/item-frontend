<template>
  <div class="newsCell">
    <!--header-->
    <AfterLandingOther :inputSearchShow="true"></AfterLandingOther>

    <!--banner-->
    <BannerOther :bgImg="bgImg" title="统一资讯中心" :selectdie="false"></BannerOther>

    <!--面包屑-->
    <xdCrumbs class="borderBottom" :crumbs="crumbs"></xdCrumbs>

    <!--新闻内容-->
    <div class="newsCellBox main">
      <h1 class="newsTitle tc">党委书记查显友带队赴蒲城调研推进定点扶贫工作</h1>
      <div class="newsTip tc">
        发布时间：<span>2018-12-05 23:54:02</span>
        来源：<span>新闻中心</span>
        点击：<span>3492</span>
      </div>
      <div class="newsContent">
        <p class="newText">
          西电新闻网讯（记者 田敬权）12月5日，伴着今冬的第一场瑞雪，西电党委书记郑晓静院士、副校长蒋舜浩一行来到蒲城，看望支教学生，与县领导座谈，实地调研“食用菌”产学研示范基地，深入推进校地联合脱贫攻坚工作。
        </p>
        <p class="newText newTextBold">
          情系未来：对接需求，督导检查扶贫主体责任
        </p>
        <p class="newText">
          为明确下一阶段扶贫目标任务，校地双方进行了座谈。会上，郑晓静一行与蒲城县县长张毅锋，县委副书记王恒，副县长张武军及蒲城县组织部、教育局、科技局、农业局等单位负责同志作了深入交流。
        </p>
        <p class="newText">
          王恒从顶层设计、党建引领、民生改善、扶智扶志等方面介绍了县委县政府的脱贫实绩和西电鼎力帮扶蒲城县脱贫攻坚工作情况，并提出下一步扶贫工作努力方向。
        </p>
        <p class="newText">
          张毅锋向郑晓静一行对蒲城扶贫工作的长久关心和大力支持表示感谢。他希望校地继续加强合作，帮助蒲城科技产业发展，提速科研成果转化，完善脱贫转型期返贫退出保障机制，把产业发展和乡村振兴战略结合起来，确保扶贫工作继续走在全省前列。
        </p>
        <p class="newText">
          郑晓静指出，她第三次来到蒲城，深刻感受到蒲城翻天覆地的变化，在最后冲刺阶段来访，除了传递学校上下与蒲城携手脱贫攻坚的坚定决心，还有一项任务就是落实中央单位督导检查蒲城县委落实脱贫攻坚主体责任情况，推动扶贫工作再上新台阶。
        </p>
        <p class="newText">
          郑晓静表示，在学校迁址西安办学60周年之际，她感谢蒲城为学校提供了展示西电“姓党、爱国、为民”特质的平台和机会。在校地双方努力下，西电成为陕西唯一获得2017年中央单位定点扶贫首次考核最高等次“好”的高校，且得到教育部网站多次肯定，成绩斐然。
        </p>
        <p class="newText">
          针对蒲城县提出的需求，郑晓静现场办公，明确各与会校内单位抓住服务地方的机会，发挥西电学科优势，与县里需求抓紧对接，尽快落实，在智力和资源上倾囊相助，怀着必胜的信心和一鼓作气的决心，做好已有动作，创新好落实好自选动作，同时抓住这个国情省情教育的机会和平台，继续做好宣传和统战工作，让党内外人士充分看到中国共产党带领人民脱贫致富、奔向全面小康的坚强决心，汇聚脱贫攻坚磅礴力量。
        </p>
        <p class="newText">
          此外，郑晓静还进一步提出三点要求。一是牢固树立四个意识，明确目标任务，不折不扣完成脱贫任务。要把扶贫工作上升到政治意识、政治担当、政治纪律的高度，不辜负全县干部群众的期盼。二是加大投入，真扶贫，扶真贫，继续做到精准到位。要解放思想、开拓思路，守住“六个200”的底线，设计好帮扶项目。三是加强经验总结，巩固扶贫成果，打造好维护好西电扶贫品牌。
        </p>
      </div>
      <div class="newPrevNext clear">
        <span class="newPrev">上一篇：<i>我国高校服务实现从就是就是啦啦啦事实上</i></span>
        <span class="newNext">下一篇：<i>我国高校服务实现从就是就是啦啦啦事实上</i></span>
      </div>
    </div>
    <sidebar></sidebar>
    <xdFooter></xdFooter>
  </div>
</template>

<script>
  import AfterLandingOther from '../../public/AfterLandingOther'
  import BannerOther from '../../public/BannerOther'
  import xdCrumbs from '../../public/Crumbs'
  import sidebar from '../../public/Sidebar'
  import xdFooter from '../../public/Footer'
  export default{
    name: "NewsCell",
    components:{
      AfterLandingOther,
      BannerOther,
      xdCrumbs,
      sidebar,
      xdFooter
    },
    data(){
      return{
        bgImg:`${process.env.PICTURE_SERVE}/file?fileId=f8667238656e41f6a34eaf673e952dba`,
        crumbs:['新闻内页']
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.newsCell{
  .newsCellBox{
    .newsTitle{
      font-size: 22px;
      color: $ModuleTitle;
      margin: 38px 0 24px 0;
    }
    .newsTip{
      font-size: 13px;
      color: $newsTextColor;
      border-bottom: 1px dashed $newsTextColor;
      padding-bottom: 10px;
      *{
        font-size: inherit;
        color: inherit;
      }
    }
    .newsContent{
      padding-top: 50px;
      .newText{
        font-size: 14px;
        color: #000000;
        line-height: 32px;
        text-indent: 2em;
        margin-bottom: 32px;
      }
      .newTextBold{
        font-weight: bold;
      }
    }
    .newPrevNext{
      margin-top: 150px;
      .newPrev{
        float: left;
      }
      .newNext{
        float: right;
      }
      span{
        font-weight: bold;
        cursor: pointer;
      }
      i{
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
      }
    }
  }
}
</style>
