<template>
  <div class="eventServe">
    <!--头部-->
    <AfterLandingOther :inputSearchShow="true" :falsePage="false" otherTiTle="帮助中心"></AfterLandingOther>
    <!--头部下面得banner-->
    <xdBannerOther :bgImg="bgImg" @itemActive="activeRoute" @sureBtn="parseBtn"></xdBannerOther>
    <div class="box">
      <div class="item clearfix main">
        <span class="title">热门问题</span>
        <div class="content_box" v-if="hostQuestion.length>0">
          <div class="content">
            <a href="javascript:;" class="content_item" v-for="(item,index) in hostQuestion" :key="index">{{item.question}}</a>
          </div>
        </div>
        <noDatas v-if="hostQuestion.length<=0"></noDatas>
      </div>
      <div class="item clearfix main">
        <span class="title">常见问题</span>
        <div class="content" v-if="totalWorld.length>0">
          <div class="question_item" v-for="(item,index) in totalWorld" :key="index">
            <div class="fl question_item_title">
              <span>
                <img :src="hotImg[index].img"/><br><br>
                <label>{{item.menuName}}</label>
              </span>
            </div>
            <div class="fr question_item_content" v-if="item.helpCenterMenus.length>=2">
              <a v-for="(ite,ind) in item.helpCenterMenus.slice(0,2)" :key="ind" v-if="moreControl[index]" @click="goResource(ite)">{{ite.keywordName}}</a>
              <a v-for="(ite,ind) in item.helpCenterMenus" :key="ind" v-if="!moreControl[index]" @click="goResource(ite)">{{ite.keywordName}}</a>
              <a class="question_item_more" @click="moreData(index)" v-if="item.helpCenterMenus.length>1">{{nameControl[index]}}</a>
            </div>
            <div class="fr question_item_content" v-else>
              <a v-for="(ite,ind) in item.helpCenterMenus" :key="ind" @click="goResource(ite)">{{ite.keywordName}}</a>
            </div>
          </div>
        </div>
        <noDatas v-if="totalWorld.length<=0"></noDatas>
      </div>

      <div class="item clearfix main">
        <div class="content_box">
          <div class="fl">
            <span class="information">
              仍需要其他帮助?
            </span>
            <article>
              可以接人工电话<span class="tel">400-697-6662</span>,也可以通过以下方式咨询：
            </article>
          </div>
          <div class="fr">
             <button class="btn">智能客服</button>
             <button class="btn">留言咨询</button>
          </div>
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
  import xdBannerOther from './BannerOther'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  import {gethotquestions} from '@/api/article'
  import {getallkeyword} from '@/api/article'
  import noDatas from '../public/noData'
  export default {
    data() {
      return {
        help03: `${process.env.PICTURE_SERVE}/file?fileId=0848154ce6454127bb704bfd8f883d9e`,
        help06: `${process.env.PICTURE_SERVE}/file?fileId=99139687dcb44cf0a91fba95af619560`,
        bgImg: `${process.env.PICTURE_SERVE}/file?fileId=b07dbeb8bfeb4ce2a0fc74665a04547e`,
        tabStatus: 0,
        hostQuestion: [],
        hotImg: [
          {
            img: require('@/assets/helpImages/help_01.png',)
          },
          {
            img: `${process.env.PICTURE_SERVE}/file?fileId=0848154ce6454127bb704bfd8f883d9e`,
          },
          {
            img: `${process.env.PICTURE_SERVE}/file?fileId=99139687dcb44cf0a91fba95af619560`,
          },
          {
            img: require('@/assets/helpImages/help_04.png'),
          },
          {
            img: require('@/assets/helpImages/help_02.png')
          },
          {
            img: require('@/assets/helpImages/help_05.png')
          }
        ],
        totalWorld: [],
        moreControl: [],
        stateControl: [],
        nameControl: []
      }
    },
    components: {
      AfterLandingOther,
      xdBannerOther,
      Footer,
      sidebar,
      noDatas
    },
    mounted() {
      this.init()
    },
    methods: {
      activeRoute(data) {
        this.tabStatus = data
      },
      init() {
        gethotquestions().then(res => {
          if (res.data.code === 200) {
            this.hostQuestion = res.data.data.list
          }
        })
        getallkeyword().then(res => {
          console.log(res, 'bbbb')
          if (res.data.code === 200) {
            this.totalWorld = res.data.data
            this.totalWorld.forEach((item, index) => {
              this.moreControl.push(true)
              this.stateControl.push(true)
              this.nameControl.push("更多")
            })
            console.log(this.moreControl, '123123123123123123')
          }
        })
      },
      parseBtn(data) {
        if (data === '') {
          return
        }
        this.$router.push({path: '/helpDeskSearchReason', query: {search: data}});
      },
      moreData(ind) {
        if (this.stateControl[ind] === true) {
          this.moreControl.splice(ind, 1, false)
          this.nameControl.splice(ind, 1, '收起')
          this.stateControl.splice(ind, 1, false)
        } else if (this.stateControl[ind] === false) {
          this.moreControl.splice(ind, 1, true)
          this.nameControl.splice(ind, 1, '更多')
          this.stateControl.splice(ind, 1, true)
        }
      },
      goResource(item) {
        this.$router.push({path: '/helpDesk', query: {searchId: item.id, searchName: item.keywordName}});
      }
    }
  }
</script>
<style lang="scss">
  .box{
    padding:50px 0;
    background-color: #f7f7f7 ;
    margin-bottom:-60px;
  }
  .item{
    margin-bottom:30px;
    .title{font-size:24px;font-weight:bold;position:relative;display:block;margin-left:30px;margin-bottom:20px;color:#0d1c28;}
    .title:before{
      display: block;
      content: '';
      width: 6px;
      height: 26px;
      background: #5371ab;
      position: relative;
      left: -20px;
      top: 28px;
    }
    .mr{margin-top:20px;}
    .content_box{
      background:#fff;
      float:left;
      padding:30px 40px;
      width:100%;
      .content{
        .content_item{display:block;width:370px;height:50px;line-height:50px;float:left;font-size:15px;}
        .content_item:before{display:inline-block;content:'';width:10px;height:10px;border-radius:5px;background:#6989c9;margin-right:12px;}
      }
      .information{font-size:18px;display:inline-block;margin-bottom:15px;}
      .tel{font-size:18px;}
      .btn{width:140px;height:50px;background:#5371ab;color:#fff;border:0px;border-radius:3px;margin-left:10px;font-size:18px;}
    }
    .question_item{
      float:left;width:366px;height:366px;margin-left:50px;background:#fff;margin-bottom:50px;color:#0d1c28;
      padding:40px 20px;
      .question_item_title{
        width:40%;
        height:100%;
        font-size:20px;
        border-right:solid 1px #eee;
        span{
          margin-top:80px;display:block;text-align:center;padding-right:10px;
        }
      }
      .question_item_content{
        width:50%;
        a{display:block;padding:20px 0px;font-size:18px;}
        .question_item_more{text-align:right;text-decoration: underline;font-size:14px;color:#1890ff;}
      }
    }
    .question_item:nth-of-type(3n+1){margin-left:0px;}
    .question_item:hover{
      box-shadow: 0px 0px 30px #ccc;
      margin-top:-16px;
      margin-bottom: 66px;
    }
  }


</style>
