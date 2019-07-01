<template>
  <div class="eventServe">
    <!--头部-->
    <AfterLandingOther :inputSearchShow="true" :falsePage="false"></AfterLandingOther>
    <!--头部下面得banner-->
    <xdBannerOther :tab="true" :bgImg="bgImg" @itemActive="activeRoute"></xdBannerOther>
    <div class="box">
      <div class="main clearfix">
        <div class="fl leftmenu">
          <div class="item">
            <h3 class="on" @click="heatQuestion">热门问题<em></em></h3>
          </div>
          <div class="item" v-for="(item,index) in totalWorld" :key="index">
            <h3 :class="{on:item.id==isActive}" @click="changeContent(item.id)">{{item.menuName}}<em></em></h3>
            <ul :class="{on:item.id==isActive}">
              <li v-for="(ite,ind) in item.helpCenterMenus" :key="ind" @click="sliderContent(ite.keywordName,ite.id)"><a
                href="#">{{ite.keywordName}}</a></li>
            </ul>
          </div>
        </div>
        <div class="fr content_box">
          <div v-if="slideArr.length>0&&questionStatus==='slideArr'">
            <span class="title">{{slideTitle}}</span>
            <div class="item_list">
              <ul>
                <li v-for="(item,index) in slideArr" :key="index">
                  <p :class="{on:item.moreDoubles}" @click="changeItemContent(item,index)"><em></em>{{item.question}}
                  </p>
                  <div v-if="moreDouble[index]">
                    <div v-html="differArr[index]"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--<div v-if="questionArr.length>0&&questionStatus==='search'">-->
          <!--<div class="item_list">-->
          <!--<ul>-->
          <!--<li v-for="(item,index) in questionArr" :key="index">-->
          <!--<p :class="{on:item.moreDoubles}" @click="changeItemContent(item,index)"><em></em>{{item.question}}</p>-->
          <!--<div v-if="moreDouble[index]">-->
          <!--<div v-html="item.htmlContent"></div>-->
          <!--</div>-->
          <!--</li>-->
          <!--</ul>-->
          <!--</div>-->
          <!--</div>-->
          <div v-if="hostQuestion.length>0&&questionStatus==='hotquestion'">
            <span class="title">{{slideTitle}}</span>
            <div class="content_box">
              <div class="content">
                <a href="javascript:;" class="content_item" v-for="(item,index) in hostQuestion" :key="index">{{item.question}}</a>
              </div>
            </div>
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
  import {getallkeyword, getbykeywordid, getSelecthtmlbyid, gethotquestions, getSearchquestion} from '@/api/article'
  import {setTimeStamp} from '@/utils/common'

  export default {
    data() {
      return {
        bgImg: `${process.env.BASE_UPLOADFILE}/file?fileId=b07dbeb8bfeb4ce2a0fc74665a04547e`,
        tabStatus: 0,
        isActive: 0,
        isItemActive: 0,
        totalWorld: [],
        slideArr: [],
        doubleBlockStatus: false,
        doubleBlock: false,
        moreDouble: [],
        moreStatus: [],
        endArr: {},
        slideTitle: '',
        hostQuestion: [],
        questionStatus: '',
        questionArr: [],
        differArr: []
      }
    },
    components: {
      AfterLandingOther,
      xdBannerOther,
      Footer,
      sidebar
    },
    mounted() {
      this.init()
    },
    methods: {
      //初始化函数
      init() {
        let arrStr = this.$route.query.searchId
        getallkeyword().then(res => {
          if (res.data.code === 200) {
            this.totalWorld = res.data.data
            if (this.$route.query.searchId && this.$route.query.searchName) {
              res.data.data.forEach((item,index)=>{
                item.helpCenterMenus.forEach((ite,ind)=>{
                  if(ite.id===Number(this.$route.query.searchId)){
                    this.isActive=item.id
                    console.log("gg")
                  }
                })
              })
            }
          }
        })
        if(this.$route.query.searchId&&this.$route.query.searchName){
            this.sliderContent(this.$route.query.searchName,this.$route.query.searchId)
        }
      },
      activeRoute(data) {
        this.tabStatus = data
      },
      changeContent(index) {
        this.isActive = index;
      },
      changeItemContent(item, index) {
        this.isItemActive = index;
        console.log(item.id, 'id对吗')
        if (item.moreDoubles === false) {
          item.moreDoubles = true
          this.moreDouble.splice(index, 1, true)
          this.doubleBlock = true
          let params = {
            id: item.id
          }
          getSelecthtmlbyid(params).then(res => {
            this.endArr = res.data.data
            this.differArr.splice(index, 1, res.data.data.htmlContent)
          })
        } else if (item.moreDoubles === true) {
          item.moreDoubles = false
          this.moreDouble.splice(index, 1, false)
          this.differArr.splice(index, 1, null)
          this.doubleBlock = false
        }
      },
      //点击左边查询右边
      sliderContent(itemName, ind) {
        this.slideTitle = itemName
        let params = {
          keywordId: ind
        }
        getbykeywordid(params).then(res => {
          console.log(res, '我是侧边的')
          if (res.data.code === 200) {
            this.questionStatus = 'slideArr'
            this.slideArr = res.data.data.list
            this.slideArr.forEach((item, index) => {
              item.moreDoubles = false
            })
            if(this.$route.query.searchConten){
              let arrId=''
              this.slideArr.forEach((item,index)=>{
                if(item.id===this.$route.query.searchConten){
                  arrId=index
                }
              })
              let params = {
                id:this.$route.query.searchConten
              }
              getSelecthtmlbyid(params).then(res => {
                this.endArr = res.data.data
                this.moreDouble.splice(arrId,1, true)
                this.differArr.splice(arrId, 1, res.data.data.htmlContent)
              })
            }
          }
        })
      },
      //热门问题点击
      heatQuestion() {
        this.slideTitle = '热门问题'
        gethotquestions().then(res => {
          if (res.data.code === 200) {
            this.questionStatus = 'hotquestion'
            this.hostQuestion = res.data.data.list
          }
        })
      },
      //
    }
  }
</script>
<style lang="scss">
  .box {
    padding: 50px 0;
    background: #f7f7f7;
    margin-bottom: -60px;
  }

  .leftmenu, .content_box {
    background: #fff;
  }

  .leftmenu {
    width: 200px;
    padding-top: 30px;
    padding-bottom: 10px;

    .item {
      h3 {
        padding: 10px 20px 10px 30px;
        cursor: pointer;

        em {
          float: right;
          width: 11px;
          height: 6px;
          background: url("~@/assets/helpImages/help_arrow_down.png") no-repeat;
          margin-top: 5px;
        }
      }

      h3.on {
        em {
          background: url("~@/assets/helpImages/help_arrow_up.png") no-repeat;
        }
      }

      ul {
        display: none;

        li {
          padding: 15px 20px 15px 50px;
        }

        li:hover, li.on {
          background: #ebf4fb;
          border-left: solid 3px #4293f4;
          padding-left: 47px;
        }
      }

      ul.on {
        display: block;
      }
    }
  }

  .content_box {
    width: 950px;
    margin-bottom: 30px;
    padding: 0px 20px;

    .title {
      font-size: 24px;
      font-weight: bold;
      position: relative;
      display: block;
      margin-left: 30px;
      margin-bottom: 20px;
      color: #0d1c28;
    }

    .title:before {
      display: block;
      content: '';
      width: 6px;
      height: 40px;
      background: #5371ab;
      position: relative;
      left: -20px;
      top: 36px;
    }

    .item_list {
      padding: 20px 30px;

      li {
        padding: 15px 6px;
        border-bottom: solid 1px #ccc;

        div {
          padding: 10px;
          border-radius: 6px;
          background: #f3f4f6;
          line-height: 25px;
        }

        p {
          cursor: pointer;

          em {
            float: left;
            width: 16px;
            height: 16px;
            background: url("~@/assets/helpImages/help_item_close.png") no-repeat;
            margin-right: 16px;
          }
        }

        p.on {
          em {
            background: url("~@/assets/helpImages/help_item_open.png") no-repeat;
          }
        }

        div.on {
          display: block;
        }
      }

      li:first-child {
        border-top: solid 1px #ccc;
      }
    }

    .content_box {
      background: #fff;
      float: left;
      padding: 30px 40px;
      width: 100%;

      .content {
        .content_item {
          display: block;
          width: 370px;
          height: 50px;
          line-height: 50px;
          float: left;
          font-size: 15px;
        }

        .content_item:before {
          display: inline-block;
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background: #6989c9;
          margin-right: 12px;
        }
      }

      .information {
        font-size: 18px;
        display: inline-block;
        margin-bottom: 15px;
      }

      .tel {
        font-size: 18px;
      }

      .btn {
        width: 140px;
        height: 50px;
        background: #5371ab;
        color: #fff;
        border: 0px;
        border-radius: 3px;
        margin-left: 10px;
        font-size: 18px;
      }
    }
  }
</style>
