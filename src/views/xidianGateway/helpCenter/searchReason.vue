<template>
  <div class="search">
    <AfterLandingOther :inputSearchShow="true" :falsePage="false"></AfterLandingOther>
    <!--头部下面得banner-->
    <xdBannerOther :tab="true" :bgImg="bgImg"  @sureBtn="parseBtn"></xdBannerOther>
    <!--搜索内容部分-->
    <div class="main content">
      <div class="contentHead clearfloat" v-if="questionArr.length>0">
        <p class="fl">
          <span class="boldSize" style="font-size: 20px;padding-right:1px;">＜</span>
          <span class="boldSize" style="padding-right:30px;">返回帮助中心首页</span>
          <span>共找到与<span class="boldSize">登录</span>”相关的信息9条"</span>
        </p>
        <p class="fr"><span>如何绑定/解除绑定手机账号？</span></p>
      </div>
      <div class="question" v-if="questionArr.length>0">
        <ul>
          <li v-for="(item,index) in questionArr" :key="index" @click="goDictionaries(item)">
            <p class="loginStyle" v-html="item.question"></p>
            <p class="loginContent textHidden" v-html="item.htmlContent"></p>
          </li>
        </ul>
      </div>
      <noDatas v-if="questionArr.length<=0"></noDatas>
      <div class="otherTitle main">
        仍需要其他帮助？
      </div>
      <div class="others clearfloat">
        <p class="fl">可以拨打人工电话<span>400-623-88523</span>也可通过以下方式联系我们。</p>
        <p class="fl otherBtn"><button>智能客服</button><button>留言咨询</button></p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import AfterLandingOther from '../public/AfterLandingOther'
  import xdBannerOther from './BannerOther'
  import noDatas from '../public/noData'
  import Footer from '../public/Footer'
  import {getSearchquestion} from '@/api/article'
  export default {
    data(){
      return{
        bgImg:`${process.env.BASE_UPLOADFILE}/file?fileId=b07dbeb8bfeb4ce2a0fc74665a04547e`,
        arrs:[],
        arrf:[],
        questionArr:[]
      }
    },
    computed:{
      signArrs(){
      }
    },
    components:{
      AfterLandingOther,
      xdBannerOther,
      Footer,
      noDatas
    },
    mounted(){
      this.init(this.$route.query.search)
    },
    methods:{
      init(data){
        let params={
          condition:data
        }
        getSearchquestion(params).then(res=>{
          if(res.data.data){
            console.log(res,'woderes')
            this.questionArr=res.data.data.list
            // this.questionArr.forEach((item,index)=>{
            //   let replaceReg = new RegExp(this.$route.query.search, 'g')
            //   // 高亮替换v-html值
            //   let replaceString = '<span class="search-text" style="color:red;">' + this.$route.query.search + '</span>'
            //   this.questionArr[index].htmlContent = item.htmlContent.replace(
            //     replaceReg,
            //     replaceString
            //   )
            // })
          }
          console.log(res,'我是搜索')
        })
      },
      parseBtn(data){
        this.init(data)
      },
      goDictionaries(data){
        this.$router.push({path: '/helpDesk',query:{searchId:data.helpCenterKeywords[0].id,searchName:data.helpCenterKeywords[0].keywordName,searchConten:data.id}});
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@/styles/gatewayBase.scss";
  .search{
    .content{
      .contentHead{
        span{
          font-size:$fontSize16;
          color: #0d1c28;
        }
        .boldSize{
          font-size:$fontSize16;
          color: #0d1c28;
          font-weight: bold;
        }
      }
      .question{
        width: 1000px;
        /*background-color:red;*/
        ul{
          width: 100%;
          li{
            padding:5px 0;
            border-bottom: 1px solid #dfe1e2;
            .loginContent{
              line-height:24px;
              font-size:$fontSize16;
              color:$fontcolor6;
            }
            .loginStyle{
              padding: 0;
              padding-bottom:7px;
              font-size: $fontSize18;
            }
          }
        }
      }
      .otherTitle{
        margin-top: 100px;
        font-size: $fontSize20;
        color: #0d1c28;
        .endOther{

        }
      }
    .others{
      height: 60px;
      line-height: 60px;
      p{
        padding: 0;
        margin: 0;
      }
      .otherBtn{
        button{
          width: 140px;
          height: 50px;
          background-color: #7496ba;
          border-radius: 6px;
          margin-left:15px;
        }
      }
    }
    }
  }
  .search-text{
    color:red;
  }
</style>
