<template>
  <div class="news">
    <!--header-->
    <AfterLandingOther :inputSearchShow="true" otherTiTle="统一资讯中心"></AfterLandingOther>

    <!--banner-->
    <BannerOther :bgImg="bgImg" title="统一资讯中心" :selectdie="false"></BannerOther>

    <!--面包屑-->
    <xdCrumbs class="borderBottom" :crumbs="crumbs"></xdCrumbs>

    <!--新闻列表-->
    <xdNewsItem :newsList="newsList"></xdNewsItem>

    <!--分页-->
    <xdPagination :pageAll="pageAll" @pageInfo="pageClick"></xdPagination>
    <sidebar></sidebar>
    <xdFooter></xdFooter>
  </div>
</template>

<script>
  // import AfterLanding from '../indexAfter/AfterLanding'
  import AfterLandingOther from '../public/AfterLandingOther'
  import BannerOther from '../public/BannerOther'
  import xdCrumbs from '../public/Crumbs'
  import xdNewsItem from './newsItem/NewsItem'
  import xdPagination from '../public/Pagination'
  import sidebar from '../public/Sidebar'
  import xdFooter from '../public/Footer'
  import {getNews} from '@/api/gateway'
  import {parseTime} from '@/utils/common'
  export default {
    name: "News",
    components:{
      AfterLandingOther,
      BannerOther,
      xdCrumbs,
      xdNewsItem,
      xdPagination,
      sidebar,
      xdFooter
    },
    data(){
      return{
        bgImg:`${process.env.PICTURE_SERVE}/file?fileId=f8667238656e41f6a34eaf673e952dba`,
        crumbs:['政策新闻'],
        newsList:[
          // {id:1,day:'29',years:'2018/12',title:'党委书记查显友带队赴蒲城调研推进定点扶贫工作',describe:'查显友对蒲城脱贫攻坚取得的成就高度肯定，对蒲城成功脱贫摘帽表示祝贺，并对其为脱贫付出的艰辛努力表示敬意。他简要介绍了西电扶贫攻坚的有力举措，并就促进扶贫攻坚与乡村振兴有机结合提出四方面要求。一是要认真学习习近平总书记关于脱贫攻坚的重要论述，并将其运用到工作中去，进一步提高政治站位，以“四个不变”继续抓好各项工作。二是要继续履行好西电责任，不折不扣落实，力争取得更好成绩。三是要全力打好“后脱贫时代”脱贫攻坚战，双方要发挥各自优势，立足长远，理顺帮扶机制，紧扣需求契合点紧密对接，共同发力'},
          // {id:2,day:'28',years:'2018/12',title:'学校领导带队赴陕西省蒲城县开展系列扶贫活动',describe:'艳艳高照，热情似火。25日上午，蒲城县闫家村金银花产业示范基地旁热闹非凡，由学校团委大学生艺术团舞蹈团及民乐团，陕西省文联、陕西省音乐家协会“好歌唱三秦文艺宣传队”，国际教育学院留学生代表带来的丰盛文化大餐在这里精彩“开宴”。陕西文联副主席、著名歌唱家冯建雪携省内多位歌唱家倾情演唱专业歌曲10余首，优美的舞蹈、动人的旋律，引得现场千余名观众纷纷举起手机拍照录像欢呼叫好'},
          // {id:3,day:'26',years:'2018/12',title:'素质拓展｜“瑞金之星”大骨班走进阿里对话未来',describe:'“走进阿里，对话未来”教育实践活动以引导青年学生树立习近平新时代中国特色社会主义思想为主线，围绕坚定理想信念毫不动摇、加强理论武装毫不松懈、积极投身实践毫不退缩、牢记初心使命毫不褪色的培养要求，近八十名大骨班成员抵达阿里巴巴集团丝路总部，受到了口碑政府事务总监马燕军、阿里云丝路总部业务总监张一帆、口碑业务拓展经理高浩等的热情接待。'},
          // {id:4,day:'14',years:'2018/12',title:'研究生国奖人物｜​朱秋云：始终不渝 厚积薄发​',describe:'科研对于刚步入研究生阶段的朱秋云来说是很陌生的，在刘爱军导师的悉心指导下，她渐渐找到了自己的研究方向，慢慢进入了科研状态。在此过程中她遇到过很多瓶颈，永不放弃的决心与毅力使她始终保持着学习的动力和热情。面对挫折，她从不退缩，认真地总结经验，整理心情后再次前行，也正是这一次次的挫折促使她不断成长，使她向成功的大门不断迈进'},
          // {id:5,day:'22',years:'2018/12',title:'西电学子在“挑战杯”陕西省赛中获佳绩',describe:'共青团陕西省委副书记鲁镇在闭幕式讲话中指出，“挑战杯”系列竞赛为青年学生学习知识、增长才干、锤炼本领搭建了重要平台，在促进青年创新人才成长、深化高校素质教育、推动经济社会发展等方面发挥了积极作用，已成为陕西省高校展示学生科研水平的重要窗口、社会选拔创新人才和科技成果的重要平台、青年学生开展科技创新实践的青春盛会'},
          // {id:7,day:'18',years:'2018/12',title:'教育中心召开本科教育学生座谈会',describe:'很羡慕海棠书院的环境，宿舍楼内有图书角、咖啡厅、自习室、舞蹈室。作为学长，每次进入到书院与学弟学妹交流，就能强烈感受到浓郁的文化氛围。希望学校能够在高年级宿舍楼进行推广。'},
          // {id:8,day:'15',years:'2018/12',title:'听党话•跟党走｜空间学院笃行致远深化育人实效',describe:'矢志不渝听党话，铸就丹心跟党走，不负韶华报党恩。为贯彻落实学校要求，空间科学与技术学院结合自身实际，因时而化聆听意见，因势而新制定方案,持续开展“听党话·跟党走”主题系列教育实践活动，旨在引领广大学生砥砺躬行显担当，凝神聚笔绘华章。'},
          // {id:9,day:'12',years:'2018/12',title:'第14届青年教师讲课赛举办 三教师直接晋升副教授',describe:'在5月24日上午开幕式上，本科生院常务副院长兼教务处处长肖嵩教授代表学校致辞，她介绍了教育部近期出台本科教育“双万工程”的重大举措，指出坚持“以本为本”，推进“四个回归”，人才培养的质量和效果是检验高校工作的根本标准。学校高度重视本科教育工作、高度重视青年教师的培养工作，已形成了多方位、滴灌式的教学培训体系。青年教师讲课竞赛为青年教师提供了展示风采与实力的平台，是落实全教会精神和传承学校优良教学传统的具体体现'},
          // {id:10,day:'09',years:'2018/12',title:'段宝岩院士为机电工程学院2017级本科生授课',describe:'从尘埃到星球，从星球到宇宙，段院士用一张张生动的对比图给同学们展示了宇宙的宏大与神秘。同学们纷纷惊叹于宇宙的奥妙，一个个听得聚精会神。“一点一点推理，一点一点前进”，段院士用简单而精炼的语言向同学们展现了人类对于宇宙未知的渴望和探索，“面对这个浩渺的宇宙，我们正尝试逐步去揭开它的神秘面纱”'},
          //
        ],
        pageAll: 5,  //分页-总页数
        page:1,
        arrDate:[]
      }
    },
    mounted(){
      this.getNewss(this.page)
    },
    methods:{
      getNewss(page){
        getNews(page,10).then(res=>{
          console.log(res,'新闻')
            let arr=[...res.data.data.list]
            for(var i=0;i<=arr.length-1;i++){
              arr[i].date=parseTime(arr[i].date,'{y}-{m}-{d}')
              let front= arr[i].date.substring(0,arr[i].date.lastIndexOf('-'))
              let next= arr[i].date.substring(arr[i].date.lastIndexOf('-')+1)
              arr[i].date=[front,next]
              this.newsList.push(arr[i])
            }
        }).catch(err=>{
          console.log(err)
        })
      },
      pageClick(data){
        this.newsList=[]
        this.page=data
        this.getNewss(this.page)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.news{

}
</style>
