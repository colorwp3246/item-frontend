<template>
  <div class="heard-banner">
    <div class="main">
      <div class="banner-box">
        <h1 class="xd-text">“一网通办”服务门户</h1>
        <!--搜索-->
        <xdSearch></xdSearch>
      </div>
    </div>
  </div>
</template>

<script>
  import xdSearch from '../../public/Search'
  export default {
    name: "heard-banner",
    components:{
      xdSearch
    },
    data(){
      return{
        hotList:[
          {app_ID:4766960573884517, icon:`${process.env.PICTURE_SERVE}/file?fileId=78a172e78fff4ae2adf38a239d45bac5`,app_NAME:'全校课表',app_URL:'http://ehall.xidian.edu.cn/jwapp/sys/kcbcx/*default/index.do'},
          {app_ID:4816852720318599, icon:`${process.env.PICTURE_SERVE}/file?fileId=715b11aed2be49a68692cc0c9df22392`,app_NAME:'一卡通中心',app_URL:'http://ecard.xidian.edu.cn/sso_jump.jsp'},
          {app_ID:5130577274686190, icon:`${process.env.PICTURE_SERVE}/file?fileId=42365cb4e9bf49c7b6881480f595c25d`,app_NAME:'学费查询',app_URL:'http://www.xidian.edu.cn/index/jfxt.htm'},
          {app_ID:5391428037096033, icon:`${process.env.PICTURE_SERVE}/file?fileId=76e1996bf328479aa2f964d9f18b1b1a`,app_NAME:'快速采购',app_URL:'http://easybuy.xidian.edu.cn'},
          {app_ID:5130624713378299, icon:`${process.env.PICTURE_SERVE}/file?fileId=765e2bf7304f4d42854ef20ce9a4a15a`,app_NAME:'财务系统',app_URL:'http://202.117.121.139:80/tysfrz/caslogin.aspx'},
          {app_ID:5391432320238220, icon:`${process.env.PICTURE_SERVE}/file?fileId=142375d43f0a4eed9c57d19c8f9d9963`,app_NAME:'学习平台',app_URL:'http://learning.xidian.edu.cn/'},
          {app_ID:5130605538044518, icon:`${process.env.PICTURE_SERVE}/file?fileId=0f48bc3b0a6243379e58a90097a838b8`,app_NAME:'图书馆',app_URL:'http://202.117.124.133/'},
          {app_ID:5130505994684740, icon:`${process.env.PICTURE_SERVE}/file?fileId=9ceab4e3f3b045f08ae59a5471291a07`,app_NAME:'校车查询',app_URL:'http://hqbzb.xidian.edu.cn/fwxm/ysfw.htm'},
        ],
        // xdTitle:process.env.NODE_TITLE
      }
    },
    methods:{
      appGo(url,name,id){
        // this.$router.push({
        //   path: '/Application',
        //   name: 'Application',
        //   query: {
        //     title:name,
        //     appId:id,
        //     href:url,
        //   }
        // })
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .heard-banner{
    height: 333px;
    .banner-box{
      position: relative;
      margin-top:80px;
      .search-hot{
        width: 414px;
        height: 258px;
        background-repeat: repeat;
        display: inline-block;
        position: absolute;
        top: 42px;
        right: 0;
        padding: 30px;

        p{
          font-size: 16px;
          color:$heardHotServe;
        }
        .item{
          margin-top: 14px;
          li{
            color: $heardSearchColor;
            font-size: 16px;
            float: left;
            width: 176px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            line-height: $hot-lingHight;
            cursor: pointer;
            &:before{
              content: "";
              display: inherit;
              width: 6px;
              height: 6px;
              border-radius: 5px;
              background-color:$heardSearchColor;
              float: left;
              position: relative;
              top: ($hot-lingHight/2)-2;
              margin-right: 7px;
            }
          }
        }
      }
      .welcome{
        font-size: 16px;
        color: $xd-lan1;
        padding-top: 52px;
      }
      .xd-text{
        font-size: 44px;
        font-family:"Microsoft YaHei";
        color:$fontcolor;
        font-weight: normal;
        margin-top: 28px;
        text-align:center;
        letter-spacing:2px;
        text-shadow: 2px 2px 1px #666;
      }
    }

  }
  .main{
    width: 1200px;
    margin:0 auto;
  }
</style>
