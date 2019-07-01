<template>
  <div class="tab main">
    <el-tabs class="main mt10" v-model="activeName">
      <el-tab-pane label="热门场景" name="first">
        <xdHall :singleArr="arrSingle"></xdHall>
      </el-tab-pane>
      <el-tab-pane label="热门应用" name="second">
        <xdApply :applyList="ApplyList" :moduleElShow="moduleEl" itemNum="14"></xdApply>
      </el-tab-pane>
      <el-tab-pane label="高频事项" name="third">
        <xdHotItem :hotItemList="HotItemList" :moduleElShow="moduleEl" itemNum="5"></xdHotItem>
      </el-tab-pane>
    </el-tabs>
    <div class="more"><a href="/EventServe">更多>></a></div>
  </div>

</template>

<script>
  // import {getUserInfo} from '@/api/apiPublic'
  // import layer from 'vue-layer'
  import xdHeard from '../heard/Heard'
  import xdApply from '../../public/Apply'
  import xdHotItem from '../../public/HotItem'
  import xdHall from '../hall/Hall'
  export default {
    props:{
      arrSingle:{
        type:Array,
        default:[]
      }
    },
    name: "hot-tab",
    components:{
      xdHall,
      xdApply,
      xdHotItem
    },
    data(){
      return{
        activeName:'first',
        ApplyList:[
          {id:5391432320238220, icon:`${process.env.PICTURE_SERVE}/file?fileId=142375d43f0a4eed9c57d19c8f9d9963`,app_NAME:'学习平台',app_URL:'http://learning.xidian.edu.cn/'},
          {id:5130624713378299, icon:`${process.env.PICTURE_SERVE}/file?fileId=765e2bf7304f4d42854ef20ce9a4a15a`,app_NAME:'财务系统',app_URL:'http://202.117.121.139:80/tysfrz/caslogin.aspx'},
          {id:4598215922499875, icon:`${process.env.PICTURE_SERVE}/file?fileId=d0c85ca9fea0406a8e9c524eb0836048`,app_NAME:'学生离校',app_URL:'http://ehall.xidian.edu.cn/xsfw/sys/leaveSchool/!*default/index.do'},
          {id:5414986933351161, icon:`${process.env.PICTURE_SERVE}/file?fileId=4fa85dccfc804adab7aa9bfb921df51c`,app_NAME:'资产管理',app_URL:'http://zcgl.xidian.edu.cn/sso_assets/caslogin.jsp'},
          {id:5130594084931750, icon:`${process.env.PICTURE_SERVE}/file?fileId=0a26f21bee8c4c9abe9b066191e9ed4b`,app_NAME:'就业信息',app_URL:'http://job.xidian.edu.cn/'},
          {id:5130505994684740, icon:`${process.env.PICTURE_SERVE}/file?fileId=9ceab4e3f3b045f08ae59a5471291a07`,app_NAME:'校车查询',app_URL:'http://hqbzb.xidian.edu.cn/fwxm/ysfw.htm'},
          {id:5130605538044518, icon:`${process.env.PICTURE_SERVE}/file?fileId=0f48bc3b0a6243379e58a90097a838b8`,app_NAME:'图书馆',app_URL:'http://202.117.124.133/'},

          {id:5391432320238211, icon:`${process.env.PICTURE_SERVE}/file?fileId=6be3f263c9804c78b83a7bf745d63fe1`,app_NAME:'学生信息',app_URL:'http://learning.xidian.edu.cn/'},
          {id:5130624713378212, icon:`${process.env.PICTURE_SERVE}/file?fileId=c4542de0a92b474fb3ec463e65918af8`,app_NAME:'毕业设计',app_URL:'http://202.117.121.139:80/tysfrz/caslogin.aspx'},
          {id:4598215922499813, icon:`${process.env.PICTURE_SERVE}/file?fileId=233912533dc1488098a837d2a28e5885`,app_NAME:'课表',app_URL:'http://ehall.xidian.edu.cn/xsfw/sys/leaveSchool/!*default/index.do'},
          {id:5414986933351114, icon:`${process.env.PICTURE_SERVE}/file?fileId=78a172e78fff4ae2adf38a239d45bac5`,app_NAME:'个人日程',app_URL:'http://zcgl.xidian.edu.cn/sso_assets/caslogin.jsp'},
          {id:5130594084931715, icon:`${process.env.PICTURE_SERVE}/file?fileId=28a25998f98d42acb9e12f6f84cb1a42`,app_NAME:'缴费平台',app_URL:'http://job.xidian.edu.cn/'},
          {id:5130505994684716, icon:`${process.env.PICTURE_SERVE}/file?fileId=5c0b71e051e04da8998c5864cefa125a`,app_NAME:'通知公告',app_URL:'http://hqbzb.xidian.edu.cn/fwxm/ysfw.htm'},
          {id:5130605538044517, icon:`${process.env.PICTURE_SERVE}/file?fileId=715b11aed2be49a68692cc0c9df22392`,app_NAME:'一卡通',app_URL:'http://202.117.124.133/'},

          {id:6691432320238211, icon:`${process.env.PICTURE_SERVE}/file?fileId=edb7e33c18764e6aa9c71685f0743b1a`,app_NAME:'综合测评',app_URL:'http://learning.xidian.edu.cn/'},
          {id:6630624713378212, icon:`${process.env.PICTURE_SERVE}/file?fileId=d525771fd01c4c44aed77a7700fd518d`,app_NAME:'教室借用',app_URL:'http://202.117.121.139:80/tysfrz/caslogin.aspx'},
          {id:6698215922499813, icon:`${process.env.PICTURE_SERVE}/file?fileId=42365cb4e9bf49c7b6881480f595c25d`,app_NAME:'学费查询',app_URL:'http://ehall.xidian.edu.cn/xsfw/sys/leaveSchool/!*default/index.do'},
          {id:6614986933351114, icon:`${process.env.PICTURE_SERVE}/file?fileId=114c67562b824273aef9c2e34f6e6ce3`,app_NAME:'助学金',app_URL:'http://zcgl.xidian.edu.cn/sso_assets/caslogin.jsp'},
          {id:6630594084931715, icon:`${process.env.PICTURE_SERVE}/file?fileId=d33e6d7d4c344956b58af142a80c22fe`,app_NAME:'教学任务',app_URL:'http://job.xidian.edu.cn/'},
          {id:6630505994684716, icon:`${process.env.PICTURE_SERVE}/file?fileId=60de09ab02ff4eba981974310ff065ac`,app_NAME:'四六查询',app_URL:'http://hqbzb.xidian.edu.cn/fwxm/ysfw.htm'},
          {id:6630605538044517, icon:`${process.env.PICTURE_SERVE}/file?fileId=8cd949f114ff465c816b406d205083e3`,app_NAME:'奖学金',app_URL:'http://202.117.124.133/'}
        ],
        HotItemList:[
          {title:'师生服务事项信息采集',id:1},
          {title:'通知选修课停开申请',id:2},
          {title:'资助学金申请',id:3},
          {title:'资产管理',id:4},
          {title:'就业信息',id:5},
          {title:'校车查询',id:6},
          {title:'图书馆',id:7},
        ],
        moduleEl:false
      }
    }
  }
</script>

<style scoped lang="scss">
  .tab{
    /*重写element-ui tab组件的样式*/
    position: relative;
    .el-tabs /deep/{
      .el-tabs__item{
        height:50px;font-size:24px;font-weight:bold;
      }
      .el-tabs__nav-wrap::after ,.el-tabs__active-bar{
        height: 5px;
        background-color: #0d1c28;
      }
      .el-tabs__header{
        margin:40px 0 0;
      }
      .is-active,.el-tabs__item:hover{
        color:#4373a8;
      }
      .el-tabs__content{
        overflow: visible;
      }
    }
    .mt10{margin-top:10px;}
    .more{
      position: absolute;
      right: 0;
      top:20px;
      font-size:15px;
      color:#0d1c28;
      cursor:pointer;
    }
  }

</style>
