<template>
  <div class="serveSence">
    <div class="main application">
      <div class="apply">
        <ul>
          <li v-for="(item,index) in smallApplyData" :key="index" @click="changeState(index)" :class="{active:index===applyStatus}">{{item.name}}</li>
        </ul>
      </div>
      <div class="allShow" @click="showTitle">
        <span>全部展开</span>
        <img :src="imgData" alt="">
      </div>
      <div class="serveApply">
        <div class="serveTitle">
          <div class="moreItem fl">
            <select>
              <option value='' disabled selected style='display:none;'>服务对象</option>
              <option value="" style="text-align: center">老师</option>
              <option value="" style="text-align: center">学生</option>
            </select>
            <input type="checkbox">可在线办理
            <span>共<i>{{serverTotal}}</i>个相关服务，其中<i>{{lineHandle}}</i>个可在线办理</span>
          </div>
          <div class="search fr"><div class="inputSearch"><input type="text" placeholder="请输入关键词"><img :src="search" alt=""></div></div>
        </div>
        <div class="applycontent">
          <ul>
            <li v-for="(item,index) in applyContent" :key="index" @click="go">
              <img :src="item.url" alt="">
              <p>{{item.title}}</p>
            </li>
          </ul>
          <xdPagination :pageAll="pageAll" @pageInfo="pageClick"></xdPagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import xdPagination from '../public/Pagination'
  export default {
    data(){
      return{
        search:`${process.env.PICTURE_SERVE}/file?fileId=e91c1b2d4002428ba10d2fed4da7a28e`,
        applyData:[
          {
            name:'教育教学'
          },
          {
            name:'学科科研'
          },
          {
            name:'人才人事'
          },
          {
            name:'国际交流'
          },
          {
            name:'财务资产'
          },
          {
            name:'后勤保卫'
          },
          {
            name:'平台基础'
          },
          {
            name:'教育教学'
          },
          {
            name:'教育教学'
          },
          {
            name:'学科科研'
          },
          {
            name:'教育教学'
          },
          {
            name:'教育教学'
          },
          {
            name:'教育教学'
          },
          {
            name:'教育教学'
          },
          {
            name:'教育教学'
          },
          {
            name:'教育教学'
          },
          {
            name:'教育教学'
          },
          {
            name:'教育教学'
          },
          {
            name:'教育教学'
          },
          {
            name:'教育教学'
          },
          {
            name:'教育教学'
          },
          {
            name:'教育教学'
          },
          {
            name:'教育教学'
          },
          {
            name:'教育教学'
          },
        ],
        applyContent:[
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=7f32b2d666ca48a0b1962f4c8fce18f6`,
            title:"信息查询"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=01bae301994241639129a5cc43461bbf`,
            title:"通知公告  "
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=7c149010b205494ab58a2198ff545cde`,
            title:" 数据资源"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=b1f3e83e8f3f4f689b7c24a17fc928fb`,
            title:"学习平台"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=e82cad9a42dc4d03b20a07515101b81f`,
            title:"缴费平台"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=18a35aab637f4e5a9f3c705d78caf247`,
            title:"故障报修"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=567f817462a94bd8abb3b8c1aa4e0b88`,
            title:"信息查询"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=7f32b2d666ca48a0b1962f4c8fce18f6`,
            title:"信息查询"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=01bae301994241639129a5cc43461bbf`,
            title:"通知公告  "
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=7c149010b205494ab58a2198ff545cde`,
            title:" 数据资源"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=b1f3e83e8f3f4f689b7c24a17fc928fb`,
            title:"学习平台"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=e82cad9a42dc4d03b20a07515101b81f`,
            title:"缴费平台"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=18a35aab637f4e5a9f3c705d78caf247`,
            title:"故障报修"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=567f817462a94bd8abb3b8c1aa4e0b88`,
            title:"信息查询"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=7f32b2d666ca48a0b1962f4c8fce18f6`,
            title:"信息查询"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=01bae301994241639129a5cc43461bbf`,
            title:"通知公告  "
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=7c149010b205494ab58a2198ff545cde`,
            title:" 数据资源"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=b1f3e83e8f3f4f689b7c24a17fc928fb`,
            title:"学习平台"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=e82cad9a42dc4d03b20a07515101b81f`,
            title:"缴费平台"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=18a35aab637f4e5a9f3c705d78caf247`,
            title:"故障报修"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=567f817462a94bd8abb3b8c1aa4e0b88`,
            title:"信息查询"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=7f32b2d666ca48a0b1962f4c8fce18f6`,
            title:"信息查询"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=01bae301994241639129a5cc43461bbf`,
            title:"通知公告  "
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=7c149010b205494ab58a2198ff545cde`,
            title:" 数据资源"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=b1f3e83e8f3f4f689b7c24a17fc928fb`,
            title:"学习平台"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=e82cad9a42dc4d03b20a07515101b81f`,
            title:"缴费平台"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=18a35aab637f4e5a9f3c705d78caf247`,
            title:"故障报修"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=567f817462a94bd8abb3b8c1aa4e0b88`,
            title:"信息查询"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=7f32b2d666ca48a0b1962f4c8fce18f6`,
            title:"信息查询"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=01bae301994241639129a5cc43461bbf`,
            title:"通知公告  "
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=7c149010b205494ab58a2198ff545cde`,
            title:" 数据资源"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=b1f3e83e8f3f4f689b7c24a17fc928fb`,
            title:"学习平台"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=e82cad9a42dc4d03b20a07515101b81f`,
            title:"缴费平台"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=18a35aab637f4e5a9f3c705d78caf247`,
            title:"故障报修"
          },
          {
            url:`${process.env.PICTURE_SERVE}/file?fileId=567f817462a94bd8abb3b8c1aa4e0b88`,
            title:"信息查询"
          }
        ],
        applyStatus:0,
        smallApplyData:[],
        dataState:false,
        imgData:`${process.env.PICTURE_SERVE}/file?fileId=30d303ac55954a28a465b2367a04feae`,
        serverTotal:176,
        lineHandle:58,
        pageAll:5,
      }
    },
    created(){
      this.smallApplyData=this.applyData.slice(0,16)
    },
    components:{
      xdPagination
    },
    methods:{
      changeState(index){
        this.applyStatus=index
      },
      showTitle(){
        if(this.dataState===false){
          this.smallApplyData=this.applyData
          this.imgData=`${process.env.PICTURE_SERVE}/file?fileId=ee787ddabcd24687a33689465706909a`
          this.dataState=true
        }else if(this.dataState===true){
          this.smallApplyData=this.applyData.slice(0,16)
          this.imgData=`${process.env.PICTURE_SERVE}/file?fileId=30d303ac55954a28a465b2367a04feae`
          this.dataState=false
        }
      },
      pageClick(data){

      },
      go(){
        this.$router.push({path:'/Application'})
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "~@/styles/variables.scss";

  .serveSence{
    width: 100%;
    margin-top:$itemMargeTop;
    .application{
      .apply{
        ul{
          overflow: hidden;
          li{
            width: 139px;
            height: 46px;
            line-height: 46px;
            margin-right:12px;
            margin-bottom: 19px;
            font-size: 15px;
            float: left;
            text-align: center;
            background-color: $itemBackground;
            color: #000000;
          }
          li:nth-child(8n+0){
            margin-right:0px;
          }
          li:hover{
            cursor: pointer;
          }
          .active{
            background-color: #4373a8;
            color:#ffffff;
          }
        }
      }
      .allShow{
        height: 42px;
        line-height: 42px;
        background-color: $itemBackground;
        text-align: center;
        span{
          color:#3E97DF;
        }
        img{
          width: 10px;
          height: 10px;
        }
      }
      .allShow:hover{
        cursor: pointer;
      }
      .serveApply{
        margin-top:$itemMargeTop;
        .serveTitle{
          height: 45px;
          line-height: 45px;
          clear: both;
          border-bottom:5px solid #0d1c28;
          .moreItem{
            font-size: 14px;
            select{
              color:$fontColor;
              margin-right: 36px;
              border:none;
              outline: none;
              background: url("http://www.zq100.com/api/files/file?fileId=30d303ac55954a28a465b2367a04feae") no-repeat scroll right center transparent;
              background-size:10px 10px;
              padding-right: 14px;
              appearance:none;
              -moz-appearance:none;
              -webkit-appearance:none;
            }
            select::-ms-expand { display: none; }
            input{
              width: 13px;
              height: 13px;
              margin-right: 5px;
              position: relative;
              top: 2px;
            }
            span{
              margin-left: 34px;
              i{
                color:#3E97DF;
              }
            }
          }
          .search{
            width: 289px;
            height: 35px;
            background-color: #ffffff;
            border: 1px solid #f1f2f3;
            position: relative;
            .inputSearch{
              height: 35px;
              line-height: 35px;
              input{
                width: 255px;
                height: 30px;
                border:none;
                outline: none;
                padding-left: 10px;
              }
              img{
                position: absolute;
                right: 0;
                top: 8px;
                width: 20px;
                height: 20px;
              }
            }
          }
        }
        .applycontent{
          margin-top: 41px;
          ul{
            overflow: hidden;
            margin-bottom: 66px;
            li{
              width: 144px;
              height: 144px;
              margin-bottom: 43px;
              margin-right: 29px;
              margin-top: 2px;
              margin-left: 2px;
              background-color: #ffffff;
              box-shadow: 1px 1px 7px 2px #eeeeef;
              text-align: center;
              float: left;
              img{
                width: 49px;
                height: 46px;
                margin-top: 25px;
              }
              p{
               margin-top: 21px;
                font-size: 16px;
                color:$fontColor;
              }
            }
            li:nth-child(7n+0){
              margin-right: 0;
            }
            li:hover{
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
