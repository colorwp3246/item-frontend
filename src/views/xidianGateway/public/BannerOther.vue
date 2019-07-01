<template>
    <div class="BannerOther" :style="{backgroundImage:'url(' + bgImg + ')'}">
      <div class="main BannerOther-Box">
        <span class="xdTitle" v-text="title?title:xdTitle"></span>
        <div class="select" style="text-align: center;" v-if="selectdie!==false">
          <select @click="state=true">
            <option value ="volvo" style="display: none;">院系</option>
          </select>
          <div class="serveSence" v-if="state">
            <div class="clearfloat h5">
              <div class="fl"><span>通信工程学院</span></div>
              <i class="fr el-icon-close" @click="state=false"></i>
            </div>
            <div class="zd_list">
              <ul class="clearfloat">
                <li v-for="(item,index) in zd_list" :key="index">{{item}}</li>
              </ul>
            </div>
            <div class="choosed clearfloat">
              <div class="leftItem fl">
                <p>西电网：</p>
                <button id="submit" @click="state=false">确定</button>
              </div>
              <div class="rightItem fl">
                <h5><span>通信工程学院</span></h5>
              </div>
            </div>
          </div>
        </div>
        <div class="BannerOther-tab" v-if="tab">
          <ul class="clear">
            <li v-for="(item, index) in tabNav" :key="index" :style="{width:(1200/tabNav.length)-2+'px'}" :class="index==itemActive?'active':''" @click="itemClick(index)">
              <span :style="{backgroundImage:'url(http://www.zq100.com/api/files/file?fileId=907c933e37a845f29f90449f4fc3ae4d)'}">{{item.title}}</span>
            </li>
          </ul>
        </div>
        <div class="centerSearch" v-if="searchSelect===false">
          <div style="background:#fff;height:60px;padding-left:16px;">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{names}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="事项">事项</el-dropdown-item>
              <el-dropdown-item command="应用">应用</el-dropdown-item>
              <el-dropdown-item command="人才">人才</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <input type="text" placeholder="请输入搜索条件">
          </div>
          <button>搜 索</button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "BannerOther",
    props:{
      tab:{
        type: Boolean
      },
      title:{//传递的标题
        type:String
      },
      bgImg:{
        type:String
      },
      tabNav:{
        type:Array
      },
      searchSelect:{
        type:Boolean,
        default:true
      },
      selectdie:{
        type:Boolean,
        default:true
      }
    },
    data(){
      return{
        xdTitle:'',
        itemActive:0,
        zd_list:['通信工程系','电子技术系','信息工程系','实验教学中心','信息科学研究所','信息保密研究所','重点实验室','通讯技术研究所','网络联合中心','实验教学研究i中心','创新引智基地','支撑服务平台'],
        state:false,
        names:'事项'
      }
    },
    methods:{
      handleCommand(command) {
        //this.$message('click on item ' + command);
        this.names=command;
      },
      itemClick(i){
        this.itemActive = i;
        this.$emit('itemActive',i)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.BannerOther{
  width: 100%;
  height: 204px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  .BannerOther-Box{
    height: inherit;
    position: relative;
    .centerSearch{
      width: 660px;
      height: 60px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      input{
        width: 580px;
        height: 100%;
        background-color: #ffffff;
        border:none;
        outline: none;
        font-size: 18px;
        padding:0px 16px;
      }
      button{
        width: 80px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        position: absolute;
        top: 0;
        right: 0;
        background-color: red;
        font-size: 18px;
        color: #ffffff;
        border:none;
        outline: none;
        font-weight:bold;
      }
    }
    .select{
      position: relative;
      select{
        font-size: 16px;
        border:none;
        outline: none;
        padding:5px 4px;
        color: #ffffff;
        background-color:#6D7D91;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        overflow: hidden;
      }
      .serveSence{
        position: absolute;
        top: 35px;
        left:0px;
        width: 1080px;
        min-height: auto;
        text-align: left;
        padding: 23px 29px 24px 29px;
        padding-bottom: 20px;
        background-color: #ffffff;
        color:#333333;
        z-index: 1200;
        box-shadow: -2px 0px 5px 1px #eeeeee,0px -2px 5px 1px #eeeeee,2px 0px 5px 1px #eeeeee,0px 2px 5px 1px #eeeeee;
        .h5{
          font-size: 18px;
          color: #333333;
        }
        .zd_list{
          margin-top: 32px;
          min-height: 102px;
          ul{
            border-bottom: 1px solid #eeeeee;
            padding-bottom: 20px;
            li{
              float: left;
              width: 116px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 14px;
              color: #333;
              margin-bottom: 24px;
              cursor: pointer;
              padding: 0 9px;
              line-height: 26px;
              font-weight: normal;
            }
          }
        }
        .choosed{
          height: 96px;
          margin-top: 19px;
          .leftItem{
            width: 112px;
            height: 82px;
            p{
              font-size: 14px;
              color: #333;
              padding-top: 1px;
              margin-bottom: 19px;
          }
            button{
              width: 95px;
              height: 40px;
              cursor: pointer;
              background: #33A0E5;
              font-size: 16px;
              color: #f8f8f8;
              border:none;
              border-radius:3px;
            }
          }
          .rightItem{
            width: 65%;
            min-height: 82px;
            h5{
              font-size: 16px;
              color: #333333;
              margin-bottom: 14px;
              display: inline-block;
              span{
                position: relative;
                top: -13px;
              }
            }
          }
        }
      }
    }

    /*select::-ms-expand { display: none; }*/
    .xdTitle{
      font-size: 36px;
      color: #ffffff;
      letter-spacing:2px;
      font-weight: normal;
      margin-top: 82px;
      display: inline-block;
    }
    .BannerOther-tab{
      position: absolute;
      bottom: 0;
      left: 0;
      li{
        /*width: 298px;*/
        height: 62px;
        line-height: 62px;
        float: left;
        margin-right: 2px;
        cursor: pointer;
        &.active{
          background-color: #ffffff;
          >span{
            color: $ModuleTitle
          }
        }
        &>span{
          width: inherit;
          height: inherit;
          line-height: inherit;
          text-align: center;
          display: inline-block;
          font-size: 20px;
          color: #ffffff;
        }
      }
    }
  }
}
  .el-dropdown-link{font-size:18px;}
</style>
