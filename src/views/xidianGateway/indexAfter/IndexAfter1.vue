<template>
  <div class="indexAfter">
    <!--header-->
    <div class="index-wrap">
      <div :class="searchShow?'boxShadow fixed':'boxShadow1'">
        <div class="AfterLandingOther main">
          <xdLogo :alsoUser="nextUser"></xdLogo>
          <span class="myCenter" v-if="true">
        <i></i>
        <!--<em>{{otherTiTle}}</em>-->
      </span>
          <div class="search-box" v-if="true">
            <input type="text" class="headSearch" v-model="searchTerm"  @keydown="keyDown($event)" placeholder="请输入您需要办理的服务"/>
            <span class="search-btn" @click="searchAll()">
            <img :src="search" alt="">
          </span>
          </div>
          <div class="login-box">
            <ul class="login clear">
              <li><span class="alarm" :style="{backgroundImage:'url(http://www.zq100.com/api/files/file?fileId=e32aee2bdccd464488eeb675c4728e8a)'}"></span></li>
              <li class="line">|</li>
              <li class="backOld"><a href="http://ehall.xidian.edu.cn/new/index_xd.html#/home">回旧版</a></li>
              <li class="line">|</li>
              <li class="showAdmin" @mouseover="showAdmin()" @mouseout="hideAdmin()" v-if="true">欢迎您,{{userName}}<span class="arrow" :style="{backgroundImage:'url(http://www.zq100.com/api/files/file?fileId=7a90098d7e504107b3196f2f3f33ebaa)'}"></span></li>
              <li class="showAdmin" @click="logout"><a href="#">登出</a></li><!-- -->
            </ul>
            <transition name="bounce">
              <div class="adminList" v-if="showAdmins"  @mouseover="showAdmin()" @mouseout="hideAdmin()">
                <img class="adminList-arrow" :src="loginArrow" alt="">
                <ul>
                  <li v-for="(item, index) in adminList" :key="index" :class="index == adminList.length-1?'lastLi':''">
                    <span v-if="index==adminList.length-1" @click="signOut" class="signOut"><a :href="signOutClick">{{item.title}}</a></span>
                    <span v-else @click="go(item.key)">{{item.title}}</span>
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <!--banner-->
    <xdBannerOther :tab="true"
                   :bgImg="bgImg"
                   :tabNav="tabNav"
                   @itemActive="itemActive"></xdBannerOther>

    <!--热门应用-->
    <xdApply :moduleElShow="moduleElShow" :applyList="ApplyList" itemNum="14"></xdApply>

    <!--场景是服务-->
    <xdHall></xdHall>

    <!--数据中心-->
    <xdData></xdData>

    <!--数据展示-->
    <xdMainData></xdMainData>

    <!--全债清单-->
    <xdPower></xdPower>

    <!--便民服务-->
    <xdConvenient></xdConvenient>

    <!--新闻中心-->
    <xdNews></xdNews>
    <!--侧边栏-->
    <!--<xdSidebar @sidebarClick="parentClick"></xdSidebar>-->
  </div>
</template>

<script>
  // import xdAfterLanding from '../AfterLanding'
  import { mapGetters } from 'vuex'
  import AfterLandingOther from '../public/AfterLandingOther'
  import xdBannerOther from '../public/BannerOther'
  import xdApply from '../public/Apply'
  import xdHall from '../index/hall/Hall'
  import xdData from '../index/data/Data'
  import xdMainData from '../index/data/MainData'
  import xdPower from '../index/power/Power'
  import xdConvenient from '../index/convenient/Convenient'
  import xdNews from '../index/news/News'
  // import {getUserInfo} from '@/api/apiPublic'
  import xdSidebar from '../public/Sidebar'
  import {getQueryString} from '@/js/base'
  import xdLogo from '../public/Logo'
  export default {
    name: "IndexAfter",
    components: {
      AfterLandingOther,
      xdBannerOther,
      xdApply,
      xdHall,
      xdData,
      xdPower,
      xdConvenient,
      xdMainData,
      xdNews,
      xdSidebar,
      xdLogo
    },
    data() {
      return {
        search:`${process.env.PICTURE_SERVE}/file?fileId=e91c1b2d4002428ba10d2fed4da7a28e`,
        loginArrow:`${process.env.PICTURE_SERVE}/file?fileId=469e52f807934f40a523d36a1230a97d`,
        moduleElShow: false,
        bgImg: `${process.env.PICTURE_SERVE}/file?fileId=1d727c2f16a24ffd9a510e953edce631`,
        tabNav: [
          {id: 1, title: '我的收藏'},
          {id: 2, title: '推荐应用'},
          {id: 3, title: '热门应用'},
          {id: 4, title: '常用应用'},
        ],
        ApplyList: [],
        users:'',
        searchShow:false,
        searchTerm:null,//搜索关键词
        nextUser:'',
        userName:null,
        login:`${process.env.ZQ_SERVE_URL}/login/caslogin.do`,
        adminList:[
          {id:1,key:'0',title:'个人中心'},
          {id:2,key:'1',title:'我的任务'},
          {id:3,key:'2',title:'我的数据'},
          {id:4,key:'3',title:'相关推荐'},
          {id:5,title:'退出登录'},
        ],
        signOutClick:`${process.env.ZQ_SERVE_URL}/login/caslogout.do`,
        showAdmins:false, //是否显示个人中心,
      }
    },
    computed: {
      ...mapGetters({
        logins: 'loginInfo'
      }),
    },
    mounted() {
      this.userInfo()
    },
    methods: {
      itemActive(key) {
        // let userType = JSON.parse(sessionStorage.getItem('xd_userType'));
        let userType = 1
        if (userType == 1) {
          switch (key) {
            case 0:
              this.ApplyList = []
              break;
            case 1:
              this.ApplyList = [
                {
                  app_ID: 4631209396750621,
                  icon: `default.png`,
                  app_NAME: '教职工信息管理',
                  app_URL: 'http://ehall.xidian.edu.cn/rsfw/sys/jzgxxglxt/index.do'
                },
                {
                  app_ID: 4766870889730636,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=080277c54c244c51ade777eb0012dae0`,
                  app_NAME: '教学日历维护',
                  app_URL: 'http://ehall.xidian.edu.cn/jwapp/sys/grjxrw/*default/index.do'
                },
                {
                  app_ID: 4900820857767248,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=65f1c5085fd74f6a8a981ffa6bc0509d`,
                  app_NAME: '成绩录入',
                  app_URL: 'http://ehall.xidian.edu.cn/jwapp/sys/cjlr/*default/index.do'
                },
                {
                  app_ID: 5105527285068955,
                  icon: `default.png`,
                  app_NAME: '教师互评管理',
                  app_URL: 'http://ehall.xidian.edu.cn/jwapp/sys/jshpgl/*default/index.do'
                },
                {
                  app_ID: 5127149155785195,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=0e9382db247041e78cc255e8b42aedae`,
                  app_NAME: '寒暑假留校',
                  app_URL: 'http://ehall.xidian.edu.cn/xsfw/sys/hsjlxapp_xidian/*default/index.do'
                },
                {
                  app_ID: 5242101268190110,
                  icon: `default.png`,
                  app_NAME: '教材信息管理',
                  app_URL: 'http://ehall.xidian.edu.cn/jwapp/sys/jcxxgl/*default/index.do'
                },
                {
                  app_ID: 5391421816570538,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=6aaf44a9e3b24bada69d1d509804c354`,
                  app_NAME: 'OA办公',
                  app_URL: 'http://noa.xidian.edu.cn'
                },
                {
                  app_ID: 5391426849513416,
                  icon: `default.png`,
                  app_NAME: '教师主页',
                  app_URL: 'https://faculty.xidian.edu.cn/'
                },
                {
                  app_ID: 5396547675342700,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=c4542de0a92b474fb3ec463e65918af8`,
                  app_NAME: '毕业设计',
                  app_URL: 'http://ehall.xidian.edu.cn/jwapp/sys/xdbysj/*default/index.do'
                },
                {
                  app_ID: 5440819718704995,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=1ae2e18c11264597b2a35c0c83e20e27`,
                  app_NAME: '论文管理系统',
                  app_URL: 'http://index.xidian.edu.cn'
                },
              ];
              break;
            case 2:
              this.ApplyList = [
                {
                  app_ID: 4890433873240143,
                  icon: `default.png`,
                  app_NAME: '成绩管理',
                  app_URL: 'http://ehall.xidian.edu.cn/jwapp/sys/cjgl/*default/index.do'
                },
                {
                  app_ID: 5130505994684740,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=9ceab4e3f3b045f08ae59a5471291a07`,
                  app_NAME: '校车查询',
                  app_URL: 'http://hqbzb.xidian.edu.cn/fwxm/ysfw.htm'
                },
                {
                  app_ID: 5130577274686190,
                  icon:`${process.env.PICTURE_SERVE}/file?fileId=42365cb4e9bf49c7b6881480f595c25d`,
                  app_NAME: '学费查询',
                  app_URL: 'http://www.xidian.edu.cn/index/jfxt.htm'
                },
                {
                  app_ID: 5130586873568159,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=0d127220e41b423f968b9b5558e13327`,
                  app_NAME: 'vpn访问',
                  app_URL: 'https://vpn.xidian.edu.cn/por/login_psw.csp?rnd=0.6577289504583206#https%3A%2F%2Fvpn.xidian.edu.cn%2F'
                },
                {
                  app_ID: 5130614149529716,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=d426ff9e15844073a2dcb24557d5dfd2`,
                  app_NAME: '科研系统',
                  app_URL: 'http://202.117.121.190/business/sso.jsp'
                },
                {
                  app_ID: 5391428037096033,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=76e1996bf328479aa2f964d9f18b1b1a`,
                  app_NAME: '快速采购',
                  app_URL: 'http://easybuy.xidian.edu.cn'
                },
                {
                  app_ID: 5409097059820174,
                  icon:`${process.env.PICTURE_SERVE}/file?fileId=c6f74a15174c49cfa9e49704acc93a59`,
                  app_NAME: '二级域名申请',
                  app_URL: 'https://service.xidian.edu.cn/v2/service/detail?id=167'
                },
                {
                  app_ID: 5409105909440774,
                  icon:`${process.env.PICTURE_SERVE}/file?fileId=8e8883ba4c3d42eab2da34d66e2237c2`,
                  app_NAME: '教工邮箱申请',
                  app_URL: 'https://service.xidian.edu.cn/v2/service/detail?id=169'
                },
                {
                  app_ID: 5440819718704995,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=1ae2e18c11264597b2a35c0c83e20e27`,
                  app_NAME: '论文管理系统',
                  app_URL: 'http://index.xidian.edu.cn'
                },
              ];
              break;
            case 3:
              this.ApplyList = [
                {
                  app_ID: 4585275700341858,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=6be3f263c9804c78b83a7bf745d63fe1`,
                  app_NAME: '学生基本信息管理',
                  app_URL: 'http://ehall.xidian.edu.cn/xsfw/sys/jbxxapp/*default/index.do'
                },
                {
                  app_ID: 4624132882764983,
                  icon: `default.png`,
                  app_NAME: '人事合同',
                  app_URL: 'http://ehall.xidian.edu.cn/rsfw/sys/htglxt/index.do'
                },
                {
                  app_ID: 4631212307551655,
                  icon: `default.png`,
                  app_NAME: '人事信息',
                  app_URL: 'http://ehall.xidian.edu.cn/rsfw/sys/jzgxxbgglxt/index.do'
                },
                {
                  app_ID: 5130588907266048,
                  icon:`${process.env.PICTURE_SERVE}/file?fileId=776262968f3f4010be9ee752c68a9157`,
                  app_NAME: '2013教务系统',
                  app_URL: 'http://jwxt.xidian.edu.cn/caslogin.jsp'
                },
                {
                  app_ID: 5130597364010170,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=d68349280b884bbba61b79454df60301`,
                  app_NAME: '研究生系统',
                  app_URL: 'http://yjsxt.xidian.edu.cn/teacher/index.jsp'
                },
                {
                  app_ID: 5130614149529716,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=d426ff9e15844073a2dcb24557d5dfd2`,
                  app_NAME: '科研系统',
                  app_URL: 'http://202.117.121.190/business/sso.jsp'
                },
                {
                  app_ID: 5130624713378299,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=765e2bf7304f4d42854ef20ce9a4a15a`,
                  app_NAME: '财务系统',
                  app_URL: 'http://202.117.121.139:80/tysfrz/caslogin.aspx'
                },
                {
                  app_ID: 5239538745845227,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=a694c1b446064e788aea4e02869f7297`,
                  app_NAME: '全流程采购',
                  app_URL: 'http://cgglxt.xidian.edu.cn/sso/caslogin.jsp'
                },
              ];
              break;
          }
        } else {
          switch (key) {
            case 0:
              this.ApplyList = [];
              break;
            case 1:
              this.ApplyList = [
                {
                  app_ID: 4585275700341858,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=6be3f263c9804c78b83a7bf745d63fe1`,
                  app_NAME: '学生基本信息管理',
                  app_URL: 'http://ehall.xidian.edu.cn/xsfw/sys/jbxxapp/*default/index.do'
                },
                {
                  app_ID: 4626034165844765,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=f0a98b9fa48c416ea172cfa85530df87`,
                  app_NAME: '勤工助学',
                  app_URL: 'http://ehall.xidian.edu.cn/publicapp/sys/rcglxt/index.do'
                },
                {
                  app_ID: 4741788073121251,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=78a172e78fff4ae2adf38a239d45bac5`,
                  app_NAME: '个人日程',
                  app_URL: 'http://ehall.xidian.edu.cn/xsfw/sys/qgzxapp/*default/index.do'
                },
                {
                  app_ID: 4766960573884517,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=78a172e78fff4ae2adf38a239d45bac5`,
                  app_NAME: '全校课表',
                  app_URL: 'http://ehall.xidian.edu.cn/jwapp/sys/kcbcx/*default/index.do'
                },
                {
                  app_ID: 4768402106681759,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=e281285565a748f98becf159ad00cb52`,
                  app_NAME: '南校区空闲教室',
                  app_URL: 'http://ehall.xidian.edu.cn/jwapp/sys/kxjas/*default/index.do'
                },
                {
                  app_ID: 4792812354642924,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=5bf3658137ac4feb9c3d6102f692fabe`,
                  app_NAME: '免听选课办理',
                  app_URL: 'http://ehall.xidian.edu.cn/jwapp/sys/mtxkbl/*default/index.do'
                },
                {app_ID: 5130605538044518, icon: `${process.env.PICTURE_SERVE}/file?fileId=0f48bc3b0a6243379e58a90097a838b8`, app_NAME: '图书馆', app_URL: 'http://202.117.124.133/'},
                {
                  app_ID: 4805898343228636,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=6bb059180af446719691bcdfe4cc4437`,
                  app_NAME: '统一认证信息完善',
                  app_URL: 'http://ids.xidian.edu.cn/authserver/index.do'
                },
                {
                  app_ID: 5287964511245705,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=63517daeef124d0287db02c38f27e826`,
                  app_NAME: '学生违纪处分撤销申请',
                  app_URL: 'https://service.xidian.edu.cn/v2/service/detail?id=186'
                },
                {
                  app_ID: 5368317913098085,
                  icon: `default.png`,
                  app_NAME: '问卷调查',
                  app_URL: '/publicapp/sys/pubwjdcapp/modules/web.do'
                },
              ];
              break;
            case 2:
              this.ApplyList = [
                {
                  app_ID: 5415694065375456,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=fd1116ae25b24b3eae5c26133846cb27`,
                  app_NAME: '评价管理系统',
                  app_URL: 'https://evaluation.xidian.edu.cn'
                },
                {
                  app_ID: 4954694242540058,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=edb7e33c18764e6aa9c71685f0743b1a`,
                  app_NAME: '综合测评',
                  app_URL: 'http://ehall.xidian.edu.cn/xsfw/sys/zhcpapp_xidian/*default/index.do'
                },
                {
                  app_ID: 5130603870534315,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=60de09ab02ff4eba981974310ff065ac`,
                  app_NAME: '四六级查询',
                  app_URL: 'http://cet.neea.edu.cn/cet'
                },
                {
                  app_ID: 4598215922499875,
                  icon:`${process.env.PICTURE_SERVE}/file?fileId=d0c85ca9fea0406a8e9c524eb0836048`,
                  app_NAME: '学生离校',
                  app_URL: 'http://ehall.xidian.edu.cn/xsfw/sys/leaveSchool/*default/index.do'
                },
                {
                  app_ID: 4816852720318599,
                  icon:`${process.env.PICTURE_SERVE}/file?fileId=715b11aed2be49a68692cc0c9df22392`,
                  app_NAME: '一卡通中心',
                  app_URL: 'http://ecard.xidian.edu.cn/sso_jump.jsp'
                },
                {
                  app_ID: 5130577274686190,
                  icon:`${process.env.PICTURE_SERVE}/file?fileId=42365cb4e9bf49c7b6881480f595c25d`,
                  app_NAME: '学费查询',
                  app_URL: 'http://www.xidian.edu.cn/index/jfxt.htm'
                },
                {app_ID: 5130605538044518, icon: `${process.env.PICTURE_SERVE}/file?fileId=0f48bc3b0a6243379e58a90097a838b8`, app_NAME: '图书馆', app_URL: 'http://202.117.124.133/'},
                {
                  app_ID: 5130505994684740,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=9ceab4e3f3b045f08ae59a5471291a07`,
                  app_NAME: '校车查询',
                  app_URL: 'http://hqbzb.xidian.edu.cn/fwxm/ysfw.htm'
                },
                {
                  app_ID: 5130614149529716,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=d426ff9e15844073a2dcb24557d5dfd2`,
                  app_NAME: '科研系统',
                  app_URL: 'http://202.117.121.190/business/sso.jsp'
                },
                {
                  app_ID: 5130588907266048,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=776262968f3f4010be9ee752c68a9157`,
                  app_NAME: '2013教务系统',
                  app_URL: 'http://jwxt.xidian.edu.cn/caslogin.jsp'
                },
              ];
              break;
            case 3:
              this.ApplyList = [
                {
                  app_ID: 4671873484017906,
                  icon: `default.png`,
                  app_NAME: '我的校园卡',
                  app_URL: 'http://ehall.xidian.edu.cn/publicapp/sys/myyktzd/index.do'
                },
                {
                  app_ID: 4816837091791771,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=88d25bbc2bbb4664be6896414c70e99e`,
                  app_NAME: '学生网络故障报修',
                  app_URL: 'http://wlbx.xidian.edu.cn'
                },
                {
                  app_ID: 5127149155785195,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=0e9382db247041e78cc255e8b42aedae`,
                  app_NAME: '寒暑假留校',
                  app_URL: 'http://ehall.xidian.edu.cn/xsfw/sys/hsjlxapp_xidian/*default/index.do'
                },
                {
                  app_ID: 5130577274686190,
                  icon:`${process.env.PICTURE_SERVE}/file?fileId=42365cb4e9bf49c7b6881480f595c25d`,
                  app_NAME: '学费查询',
                  app_URL: 'http://www.xidian.edu.cn/index/jfxt.htm'
                },
                {
                  app_ID: 5130588907266048,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=776262968f3f4010be9ee752c68a9157`,
                  app_NAME: '2013教务系统',
                  app_URL: 'http://jwxt.xidian.edu.cn/caslogin.jsp'
                },
                {
                  app_ID: 5287966277682974,
                  icon: `${process.env.PICTURE_SERVE}/file?fileId=07bb3098d4cb41feae7940e91f8e2c56`,
                  app_NAME: '学生请销假',
                  app_URL: 'https://service.xidian.edu.cn/v2/service/detail?id=189'
                },
                {
                  app_ID: 5368317913098085,
                  icon: `default.png`,
                  app_NAME: '问卷调查',
                  app_URL: '/publicapp/sys/pubwjdcapp/modules/web.do'
                },
              ];
              break;
          }
        }

      },
      userInfo() {
        // getUserInfo().then(response => {
        //   if(response.data.data){
        //     this.userName=response.data.data.xm
        //     let userInfos=response.data.data
        //     let loginStatues=true
        //     let user ={
        //       userInfos,
        //       loginStatues
        //     }
        //     this.$store.dispatch("userInfo",user)
        //   }else{
        //     console.log('数据为空')
        //   }
        // }).catch(error => {
        //   console.log(error)
        // })
      },
      keyDown(e) {
        let _this = this;
        let theEvent = window.event || e;
        let code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {
          _this.searchAll();
          _this.searchTerm = ''
        }
      },
      scroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 1) {
          this.searchShow = true;
        } else {
          this.searchShow = false;
        }
        this.$emit('scrollShowSearch', this.searchShow)
      },
      searchAll() {  //搜索跳转
        let search = this.searchTerm;
        if (search) {
          this.$router.push({
            path: '/Search',
            name: 'Search',
            query: {
              searchTerm: search
            }
          });
          this.searchTerm = ''
        }
      },
      showAdmin() {
        this.showAdmins = true;
      },
      hideAdmin() {
        this.showAdmins = false;
      },
      signOut() {
        //退出删除sessionStorage
        sessionStorage.clear();
      },
      go(key) {
        this.$nextTick(() => {
          this.$router.push({
            path: '/PersonalCenter',
            query: {
              key: key
            }
          })
        })
      },
      logout() {
        this.$store.dispatch('setloginout', false)
        window.location.href=`${process.env.BASE_API}logout?redirect=http://47.104.107.44`
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";

  $top:51px;
  .index-wrap{
    background-size: 100% 100%;
    height: 76px;
    .AfterLandingOther{
      height: $headerHeight;
      position: relative;

    }
    .search-box{
      position: absolute;
      top: 17px;
      left: 446px;
      .headSearch{
        background-color: $heardSearchBg;
        width: 470px;
        height: 42px;
        border: none;
        padding-left: 18px;
        padding-right: 42px;
        font-size: 16px;
        color: $heardInputColor;
      }
      .search-btn{
        position: absolute;
        right: 0;
        top: 0;
        display: inline-block;
        width: 42px;
        height: 42px;
        img{
          margin: 8px;
        }
      }
    }
    .myCenter{
      display: inline-block;
      position: absolute;
      top: 20px;
      left: 220px;
      i{
        display: inline-block;
        height: 24px;
        border-left: $sliderBorder;
        position: relative;
        top: 4px;
      }
      em{
        font-size: 20px;
        font-weight: bold;
        font-style: normal;
        color: #112534;
        margin-left: 10px;
      }
    }
  }
  .login-box{
    display: inline-block;
    position: absolute;
    top: 28px;
    right: 0;
    .adminList{
      position: absolute;
      width: 110px;
      top: $loginTop;
      right: 0;
      z-index: 999;
      &:hover{
        cursor: pointer;
      }
      .adminList-arrow{
        width: 18px;
        position: absolute;
        top: 1px;
        left: 44px;
      }
      ul{
        border: $sliderBorder;
        margin-top: 10px;
        li{
          padding: 0 8px 0 8px;
          background-color: #ffffff;
          line-height: 32px;
          border-bottom: 1px solid $loginBorderColor;
          text-align: center;
          .signOut{
            color: $xd-red;
            a{
              color: inherit;
              text-decoration: none;
            }
          }
          &.lastLi{
            border-bottom: none;
          }
          &:hover{
            background-color: $loginBorderColor;
          }
        }
      }
    }
    .login{
      .alarm{
        display: inline-block;
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        position: relative;
        top: 3px;
      }
      .danger-tip{
        font-size: 16px;
        font-weight: bold;
        margin-right: 20px;
        position: relative;
        top: -1px;
      }
      .backOld{
        a{
          text-decoration: none;
          color: $ModuleTitle;
          font-size: 14px;
        }
      }
      li{
        float: left;
        margin: 0 5px;
        height: 30px;
        &.line{
          color: $hallTextColor;
          font-size: 13px;
          padding-top: 2px;
        }
        .arrow{
          display: inline-block;
          width: 10px;
          height: 10px;
          background-repeat: no-repeat;
          position: relative;
          top: 2px;
        }
        &.showAdmin{
          a{
            text-decoration: none;
          }
          &:hover{
            cursor: pointer;
          }
        }
      }
    }
  }

  .bounce-enter-active {
    animation: bounce-in .3s;
  }
  @keyframes bounce-in {
    0% {
      top: 30px;
      opacity: 0;
      transition: $transition;
    }
    100% {
      top: $loginTop;
      opacity: 1;
      transition: $transition;
    }
  }


</style>
