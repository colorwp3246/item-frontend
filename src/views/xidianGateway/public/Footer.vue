<template>
    <div class="footer">
      <div class="footer-box footerchild">
        <ul class="clear">
          <li v-for="(item, index) in footerList" :key="index">
              <span v-if="index == footerList.length-1">
                <a :href="item.url">{{item.title}}</a>
              </span>
            <span v-else>
              <a :href="item.url">{{item.title}}</a>
              &nbsp;|&nbsp;
            </span>
          </li>
        </ul>
      </div>
      <div class="footer-msg">
        <div class="main">
          <div>主办：西安电子科技大学&nbsp;&nbsp;&nbsp;&nbsp;技术支持：信息网络技术中心</div>
          <p>Copyright © 2015-2018 西安电子科技大学 All Rights Reserved&nbsp;&nbsp;&nbsp;&nbsp;地址：西安市雁塔区太白南路2号/长安区西沣路266号</p>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Footer",
    data(){
      return{
        footerList:[
          {id:1,title:'办公系统',url:'http://res.xidian.edu.cn/file/xgindex.htm'},
          {id:2,title:'研究生系统',url:'http://yjsxt.xidian.edu.cn'},
          {id:3,title:'人事系统',url:'http://ids.xidian.edu.cn/authserver/login?service=http%3A%2F%2Fehall.xidian.edu.cn%2Flogin%3Fservice%3Dhttp%3A%2F%2Fehall.xidian.edu.cn%2Fnew%2Findex.html'},
          {id:4,title:'学工系统',url:'http://res.xidian.edu.cn/file/xgindex.htm'},
          {id:5,title:'宿管系统',url:'http://sg.xidian.edu.cn/'},
          {id:6,title:'离校系统',url:'http://ehall.xidian.edu.cn/'},
          {id:7,title:'论文管理系统',url:'http://index.xidian.edu.cn'},
          {id:8,title:'督办系统',url:'http://dcdb.xidian.edu.cn'},
          {id:9,title:'教务系统',url:'http://ehall.xidian.edu.cn/new/index.html'},
          {id:10,title:'科研系统',url:'http://202.117.121.190/index.jsp'},
          {id:11,title:'财务系统',url:'http://202.117.121.139/tysfrz/caslogin.aspx'},
          {id:12,title:'资产系统',url:'http://zcgl.xidian.edu.cn/sso_assets/caslogin.jsp'},
          {id:13,title:'合同系统',url:'http://nkxt.xidian.edu.cn/'},
          {id:14,title:'学费自助缴费',url:'http://www.xidian.edu.cn/index/jfxt.htm'},
          {id:14,title:'学费自助缴费',url:'http://www.xidian.edu.cn/index/jfxt.htm'},
          // {id:15,title:'高性能计算',url:'http://xdhpc.xidian.edu.cn/'},
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .footer{
    margin-top: 60px;
    background-color: $footerBg;
    border-top: 1px solid $footerBgLine;
    .footerchild{
      width: 1240px;
      margin:0 auto;
    }
    .footer-box{
      padding-top: 34px;
      height: 70px;
      ul{
        display: table;
        width: calc(100% + 22px);
        table-layout: fixed;
        li{
          float: left;
          span{
            a{
              font-size: 13px;
              padding: 0 2px;
              color: $footerTextColor;
              text-decoration: none;
            }
          }
        }
      }
    }
    .footer-msg{
      background-color: $footerBg;
      height: 154px;
      border-top: 1px solid $footerBgLine;
      .main{
        div{
          margin-top: 18px;
        }
        *{
          text-align: center;
          color: $footerAddColor;
          font-size: 12px;
          padding-top: 12px;
        }
      }
    }
  }
</style>
