<template>
    <div class="news main">
      <div class="ModuleTitle">
        <a href="#">西电资讯</a>
        <span class="tab-title" @click="btn_search">
          <span><i class="icon mb" :class="{reCircle:this.refresh===true}"></i>换一批</span>
        </span>
      </div>
      <div class="newsList-box">
        <div>
          <ul class="clearfix">
            <li class="newsclass-item active" @click="xidianNew"><a>西电要闻</a></li>
            <li class="newsclass-item"><a >西电科大报</a></li>
            <li class="newsclass-item"><a >西电学子</a></li>
            <li class="newsclass-item"><a >西电往事</a></li>
            <li class="newsclass-item"><a >西电名师</a></li>
            <li class="newsclass-item"><a >获奖信息</a></li>
            <li class="newsclass-item"><a >竞赛信息</a></li>
            <li class="newsclass-item"><a >就业信息</a></li>
          </ul>
        </div>
        <div class="newslist clearfix">
          <div class="newslist-item">
            <ul>
              <li>
                <span class="newslist-item-title"><a href="#" title='关于公布2016、2017年新实验开发与新实验设备研制及实验教学改革项目结题验收结果的通知'>关于公布2016、2017年新实验开发与新实验设备研制及实验教学改革项目结题验收结果的通知</a></span>
                <span class="newslist-item-num">点击量：116</span>
                <span class="newslist-item-source">来源：党委统战部</span>
                <span class="newslist-item-time">2019-04-08</span>
              </li>
              <li>
                <span class="newslist-item-title"><a href="#" title='西电举行2019年"书记面对面"本科生座谈会'>西电举行2019年"书记面对面"本科生座谈会</a></span>
                <span class="newslist-item-num">点击量：11611</span>
                <span class="newslist-item-source">来源：党委统战部</span>
                <span class="newslist-item-time">2019-04-08</span>
              </li>
              <li>
                <span class="newslist-item-title"><a href="#" title='关于举办2019年西安电子科技大学全国大学生数学建模竞赛校内选拔赛的通知'>关于举办2019年西安电子科技大学全国大学生数学建模竞赛校内选拔赛的通知</a></span>
                <span class="newslist-item-num">点击量：1166</span>
                <span class="newslist-item-source">来源：党委统战部</span>
                <span class="newslist-item-time">2019-04-08</span>
              </li>
              <li>
                <span class="newslist-item-title"><a href="#" title='西电举行2019年"书记面对面"本科生座谈会'>西电举行2019年"书记面对面"本科生座谈会</a></span>
                <span class="newslist-item-num">点击量：116116</span>
                <span class="newslist-item-source" title='来源：党委统战部党委统战部'>来源：党委统战部党委统战部</span>
                <span class="newslist-item-time">2019-04-08</span>
              </li>
              <li>
                <span class="newslist-item-title"><a href="#" title='西电举行2019年"书记面对面"研究生座谈会'>西电举行2019年"书记面对面"研究生座谈会</a></span>
                <span class="newslist-item-num">点击量：116116</span>
                <span class="newslist-item-source" title='来源：党委统战部党委统战部'>来源：党委统战部党委统战部</span>
                <span class="newslist-item-time">2019-04-08</span>
              </li>
            </ul>
            <div class="newslist-item-more">
              <a >了解更多</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  // import xdFocus from './ImgFocus'
  export default {
    props:{
      news:{
        type:Array,
        default:[]
      }
    },
    name: "Apply",
    components: {
      ModuleTitle,
      // xdFocus
    },
    data(){
      return{
        to:'/News',
        refresh:false,
        newsList:[],
      }
    },
    methods:{
      btn_search(){
        var self = this;
        if(self.refresh===false)
        {
          self.refresh = true;
          setTimeout(function(){
            self.refresh = false;
          },500);
        }
      },
      xidianNew(){
        this.$router.push({path:'/News'})
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .news{
    .clearfix:after{
      display:block;
      content:'';
      clear:both;
      visibility: hidden;
      height:0;
    }
    padding-top: 28px;
    .newsList-box{
      margin-top: 10px;
      .newsclass-item{
        float:left;
        margin-left:6px;
        margin-top:10px;
        padding:12px 39px;
        text-align:center;

        background:#f1f2f4;
        a{
          display:block;
          font-size: 16px;
          color: #000000;
        }
      }
      .newsclass-item:nth-child(1){
        margin-left:0px;
      }
      .active,.newsclass-item:hover{
        background:#4473a9;
        a{
          color:#fff;
        }
      }
      .bg{background:#f2f2f2;}
      .pd60{padding:12px 60px;}
      .pd110{padding:12px 110px;}
    }
    .newslist{
      margin-top: 32px;
      padding:6px 8px;
      .newslist-item{
        li{
          height:50px;
          line-height:50px;
          border-bottom:solid 1px #ececec;
          span{
            display:inline-block;
            overflow: hidden;
          }
        }
        .newslist-item-title{
          width:768px;
          padding-left:6px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow:ellipsis;
        }

        .newslist-item-num{
          width:140px;
          padding-left:10px;
          font-size: 14px;
          color: #666666;
        }
        .newslist-item-source{
          width:150px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow:ellipsis;
          font-size: 14px;
          color: #666666;
        }
        .newslist-item-time{
          color: #122534;
          font-size: 14px;
        }
        .newslist-item-more{
          text-align:center;
          a{
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            color: #3e71a8;

            text-align: center;
            font-weight: bold;
            margin-top: 20px;
            cursor: pointer;
          }
          background-color: #f1f2f3;
          height:30px;
          margin-bottom:25px;
        }
      }

    }
    .ModuleTitle{
      border-bottom: 5px solid $ModuleTitle;
      position:relative;
      padding-bottom: 12px;
      padding-top: 40px;
      a{
        color: #0d1c28;
        font-size: 24px;
        cursor: pointer;
        text-decoration: none;
        font-weight:bold;
        &:hover{
          color: $active;
        }
      }
    }
    .tab-title{
      position:absolute;
      right:10px;
      bottom:5px;

      span{
        display:inline-block;
        width:80px;
        text-align:right;
        cursor:pointer;
        color: #0d1c28;
        font-size: 15px;
      }
    }
  }
  .mb{
    background-position: 0 45px;
    margin-bottom:-3px;
    margin-right:10px;
  }

</style>
