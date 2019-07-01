<template>
  <div class="serveSence">
      <div class="main serveScene">
        <ul>
          <li v-for="(item,index) in moreScene" :key="index" @click="go(item.goFunction)">
            <img :src="item.url" alt="">
            <p class="staffWork">{{item.title}}</p>
            <!--<div style="margin:0 auto;">-->
              <p class="introduct textHidden">{{item.content}}</p>
            <!--</div>-->
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        moreScene:[
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=fe55f00c24c34a15830e87fc1e8cbe48`,
            title:'员工入职场景',
            content:'员工入职场景是帮助新员工尽快、方便、高效办理入职手续...',
            goFunction:'EntryAfter'
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=c406806b1a0341779c62843fc1a50ec2`,
            title:"信息服务场景",
            content:"信息服务场景是方便用户在线上办理各种信息业务的...",
            goFunction:'messageAfter'
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=441477a10aa74e0f86743bfa61f58dc7`,
            title:"学生离校场景",
            content:"学生离校场景办理能快速实现学生离校手续的办理...",
            goFunction:'LeaveSchoolAfter'
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=bb68340182944fefa5faca3d9b37face`,
            title:"年终考核场景",
            content:"年终考核场景是在传统的、人为的、主观评定的考核制...",
            goFunction:'yearExamination'
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=1900e3640cab4e81b301bda9dda48399`,
            title:"项目采购场景",
            content:"通过打造全校统一的采购与招标管理信息场景，为教职...",
            goFunction:''
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=b567b35eeaa247c986678e69ac0abd82`,
            title:"获奖管理场景",
            content:"年终考核场景是在传统的、人为的、主观评定的考核制...",
            goFunction:''
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=60387267515347c181847e470ee51771`,
            title:"资金监管场景",
            content:"年终考核场景是在传统的、人为的、主观评定的考核制...",
            goFunction:''
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=ff71fd218e1c4cf48be3e74926b4371f`,
            title:"资源服务场景",
            content:"年终考核场景是在传统的、人为的、主观评定的考核制...",
            goFunction:''
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=fe55f00c24c34a15830e87fc1e8cbe48`,
            title:'员工入职场景',
            content:'员工入职场景是帮助新员工尽快、方便、高效办理入职手续...',
            goFunction:'EntryAfter'
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=441477a10aa74e0f86743bfa61f58dc7`,
            title:"学生离校场景",
            content:"学生离校场景办理能快速实现学生离校手续的办理...",
            goFunction:'LeaveSchoolAfter'
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=441477a10aa74e0f86743bfa61f58dc7`,
            title:"学生离校场景",
            content:"学生离校场景办理能快速实现学生离校手续的办理...",
            goFunction:'LeaveSchoolAfter'
          }
        ]
      }
    },
    methods:{
      go(item){
        if(item){
          this.$router.push({path:`/${item}`})
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "~@/styles/variables.scss";
  .serveSence{
    width: 100%;
    margin-top:$itemMargeTop;
    .serveScene{
      ul{
        overflow: hidden;
        li{
          width: 278px;
          height: 279px;
          background-color: #fbfbfc;
          box-shadow: 1px 1px 7px 2px #eeeeef;
          margin-right: 29px;
          text-align: center;
          float:left;
          margin-bottom: 36px;
          img{
            width: 100%;
            height: 138px;
          }
          p{
            padding:0;
            margin:0;
          }
          .staffWork{
            font-size: 18px;
            color: #0d1c28;
            font-weight: bold;
            text-align:center;
            margin-top: 31px;
          }
          .introduct{
            font-size: 13px;
            color: #727475;
            text-align: center;
            margin-top: 13px;
            line-height: 22px;
            /*width: 195px;*/
            padding-right: 35px;
            padding-left:38px;
          }
        }
        li:nth-child(4n+0){
          margin-right:0px;
        }
        li:hover{
          cursor: pointer;
        }
      }
    }
  }
</style>
