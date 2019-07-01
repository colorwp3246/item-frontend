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
          <div class="search fr"><div class="inputSearch"><input type="text" style="padding:0px 8px;" placeholder="请输入关键词"><img :src="search" alt=""></div></div>
        </div>
        <div class="applycontent">
          <table width="100%" border="0" cellspacing="1" cellpadding="0">
            <tr>
              <td style="width: 45%">事项名称</td>
              <td style="text-align:center;">部门</td>
              <td style="text-align:center;width: 20%;">操作</td>
            </tr>
            <tr  v-for="(item,index) in tableArr" :key="index">
              <td style="width:45%;cursor:pointer;" @click="getHref(item.itemName)"><img src="smallArrow" alt="">{{item.itemName}}</td>
              <td style="text-align:center;">{{item.department}}</td>
              <td style="text-align:center;width: 20%;"><span @click="getHref(item.itemName)">办事指南</span><span @click="appGo(item.app_URL,item.itemName,item.app_ID)">在线办理</span>
              </td>
            </tr>
          </table>
          <xdPagination :pageAll="pageAll" @pageInfo="pageClick"></xdPagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import xdPagination from '../public/Pagination'
  export default {
    data() {
      return {
        search:`${process.env.PICTURE_SERVE}/file?fileId=e91c1b2d4002428ba10d2fed4da7a28e`,
        smallArrow:`${process.env.PICTURE_SERVE}/file?fileId=244c0961d75a478b9477eb137d607258`,
        applyData: [
          {
            name: '教育教学'
          },
          {
            name: '学科科研'
          },
          {
            name: '人才人事'
          },
          {
            name: '国际交流'
          },
          {
            name: '财务资产'
          },
          {
            name: '后勤保卫'
          },
          {
            name: '平台基础'
          },
          {
            name: '教育教学'
          },
          {
            name: '教育教学'
          },
          {
            name: '学科科研'
          },
          {
            name: '教育教学'
          },
          {
            name: '教育教学'
          },
          {
            name: '教育教学'
          },
          {
            name: '教育教学'
          },
          {
            name: '教育教学'
          },
          {
            name: '教育教学'
          },
          {
            name: '教育教学'
          },
          {
            name: '教育教学'
          },
          {
            name: '教育教学'
          },
          {
            name: '教育教学'
          },
          {
            name: '教育教学'
          },
          {
            name: '教育教学'
          },
          {
            name: '教育教学'
          },
          {
            name: '教育教学'
          },
        ],
        tableArr:[
          {
            itemName:"高校毕业生就业手续办理",
            department:"教育教学",
          },
          {
            itemName:"高校毕业生就业手续办理",
            department:"教育教学",
          },
          {
            itemName:"高校毕业生就业手续办理",
            department:"教育教学",
          },
          {
            itemName:"高校毕业生就业手续办理",
            department:"教育教学",
          },
          {
            itemName:"高校毕业生就业手续办理",
            department:"教育教学",
          },
          {
            itemName:"高校毕业生就业手续办理",
            department:"教育教学",
          },
          {
            itemName:"高校毕业生就业手续办理",
            department:"教育教学",
          },
          {
            itemName:"高校毕业生就业手续办理",
            department:"教育教学",
          },
          {
            itemName:"高校毕业生就业手续办理",
            department:"教育教学",
          },
          {
            itemName:"高校毕业生就业手续办理",
            department:"教育教学",
          },
          {
            itemName:"高校毕业生就业手续办理",
            department:"教育教学",
          },
          {
            itemName:"高校毕业生就业手续办理",
            department:"教育教学",
          },
          {
            itemName:"高校毕业生就业手续办理",
            department:"教育教学",
          },
          {
            itemName:"高校毕业生就业手续办理",
            department:"教育教学",
          }
        ],
        applyStatus: 0,
        smallApplyData: [],
        dataState: false,
        imgData:`${process.env.PICTURE_SERVE}/file?fileId=30d303ac55954a28a465b2367a04feae`,
        serverTotal: 176,
        lineHandle: 58,
        pageAll: 5,
      }
    },
    components: {
      xdPagination
    },
    created(){
      this.smallApplyData=this.applyData.slice(0,16)
    },
    methods: {
      changeState(index) {
        this.applyStatus = index
      },
      showTitle() {
        if (this.dataState === false) {
          this.smallApplyData = this.applyData
          this.imgData = `${process.env.PICTURE_SERVE}/file?fileId=ee787ddabcd24687a33689465706909a`
          this.dataState = true
        } else if (this.dataState === true) {
          this.smallApplyData = this.applyData.slice(0, 16)
          this.imgData = `${process.env.PICTURE_SERVE}/file?fileId=30d303ac55954a28a465b2367a04feae`
          this.dataState = false
        }
      },
      appGo(url,name,id){
        this.$router.push({
          path: '/eventStepOne',
          name: 'eventStepOne',
        })
      },
      getHref(title){
        this.$router.push({ path: '/Application',name:'Application', query: { title: title }})
      },
      pageClick(data) {

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
                right: 8px;
                top: 8px;
                width: 20px;
                height: 20px;
                cursor:pointer;
              }
            }
          }
        }
        .applycontent{
          margin-top: 41px;
          table{
            font-size: 13px;
            color: #727475;
            tr{
              height: 60px;
              line-height: 60px;
              td{
                border-bottom:1px solid #ebeef5;
                img{
                  margin-right: 12px;
                }
                span{
                  color:#3E97DF;
                  cursor:pointer;
                }
                span:nth-child(1){
                  margin-right:30px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
