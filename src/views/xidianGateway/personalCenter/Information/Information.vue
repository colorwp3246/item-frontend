<template>
  <div class="Information main">
    <div class="baseInformation clear" v-if="myBaseMsg!=null">
      <div class="myPhoto">
        <img :src="myPhoto" alt="">
      </div>
      <div class="myData">
        <div class="myDataItem">
          <img class="titleIcon" :src="myDataIcon1" alt="">
          <div class="myDataItem-box">
            <span class="myDataItem-bold">{{adminName}}</span>
          </div>
        </div>
        <div class="myDataItem">
          <img class="titleIcon" :src="myDataIcon2" alt="">
          <div class="myDataItem-box" v-for="(value, index) in myStep" :key="index">
            <img class="myStep" :src="value.icon" alt="">
            <span>{{value.step}}</span>
          </div>
        </div>
        <div class="myDataItem">
          <img class="titleIcon" :src="myDataIcon3" alt="">
          <div class="myDataItem-box">
            <div class="myDataItem-item" v-for="(item, index) in myBaseMsg" :key="index">
              <span :class="index%2 ==0?'myDataItem-key':'myDataItem-value'">{{item}}</span>
            </div>
          </div>
        </div>
      </div>
      <!--<button class="edit">编辑</button>-->
    </div>
    <div class="dataInformation clear">
      <div class="dataInfItem" v-for="(item, index) in myDataInf" :key="index" v-if="item">
        <span class="iconBox">
          <img :src="item.icon" alt="">
        </span>
        <h2>{{item.title}}</h2>
        <span class="number-box" v-if="item.detailedShow">
          <span v-if="item.result">
            <span class="number" v-if="item.hide">***</span>
            <span class="number" v-else>{{item.result}}</span>
          </span>
          <span class="loadNumber" v-else>加载中...</span>
          <span class="check" @click="showMoney(index)">
            <img :src="check" alt="">
          </span>
          <a href="javascript:;" @click="vueLayer()">查询明细</a>
        </span>
        <span class="number-box" v-else>
          <span class="number" v-if="item.result">{{item.result}}</span>
          <span class="loadNumber" v-else>加载中...</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters} from 'vuex'
  export default {
    name: "Information",
    data(){
      return{
        myDataIcon1:`${process.env.PICTURE_SERVE}/file?fileId=a49da79b02f7435c8f87c661bad16406`,
        myDataIcon2:`${process.env.PICTURE_SERVE}/file?fileId=77503f9def8849c785c0d0e9f8082336`,
        check:`${process.env.PICTURE_SERVE}/file?fileId=159ebf4885814ac2a0b95fc1b97d7b70`,
        myPhoto:`${process.env.PICTURE_SERVE}/file?fileId=e515eda9986a43b18923a359d8b58519`,
        myDataIcon3:`${process.env.PICTURE_SERVE}/file?fileId=6c765fb86442477890c2a99c93f1af2b`,
        adminName:null,
        myStep:[{'icon':`${process.env.PICTURE_SERVE}/file?fileId=0537db8cfa5e400aa13996027eb1850c`,'step':163}],
        myBaseMsg:null, //个人信息
        myDataInf:[
          {
            icon: `${process.env.PICTURE_SERVE}/file?fileId=dfcd5eb68b704e9d96ddd60b154f1d96`,
            title: '一卡通余额（元）',
            result: null,
            detailedShow: true,
            hide: true
          },
          {
            icon: `${process.env.PICTURE_SERVE}/file?fileId=dfcd5eb68b704e9d96ddd60b154f1d96`,
            title: '剩余网费（元）',
            result: null,
            detailedShow: true,
            hide: true
          },
          {
            icon: `${process.env.PICTURE_SERVE}/file?fileId=dfcd5eb68b704e9d96ddd60b154f1d96`,
            title: '未读邮件（封）',
            result: null,
            detailedShow: false,
            hide: false
          },
          {
            icon: `${process.env.PICTURE_SERVE}/file?fileId=dfcd5eb68b704e9d96ddd60b154f1d96`,
            title: '外借图书（本）',
            result: null,
            detailedShow: false,
            hide: false
          }
        ], //个人数据
      }
    },
    computed:{
      ...mapState({ //获取vuex中state数据
        token: state =>state.loginStatus
      })
    },
    created(){
      //本科生 open_api/customization/tydbtbksjbxx/list
      //研究生 open_api/customization/tydbtyjs/list
      //教职工 open_api/customization/tydbtjzgjbxx/list
      console.log(this.token,'获取token')
      // this.getToken().then(()=>{
      //   let userList = JSON.parse(sessionStorage.getItem('xd_userList'));
      //   let userTpye = JSON.parse(sessionStorage.getItem('xd_userType'));
      //   console.log(userList,'userList是啥')
      //   //个人姓名
      //   this.adminName = userList.data[0]['XM'];
      //   if(userTpye==1){  //教职工
      //
      //     this.myBaseMsg = [
      //       userList.data_struct['SZDWDM'], //院系名
      //       userList.data[0]['SZDWDM'],
      //       userList.data_struct['MZDM'], //民族
      //       userList.data[0]['MZDM'],
      //       userList.data_struct['SFZJH'],//身份证
      //       userList.data[0]['SFZJH'],
      //       userList.data_struct['ZYJSZWDM'], //专业技术职务
      //       userList.data[0]['ZYJSZWDM'],
      //       '职务级别',  //副高级
      //       userList.data[0]['ZYJSZWJBDM'],
      //       userList.data_struct['DZXX'],//邮箱
      //       userList.data[0]['DZXX'],
      //     ];
      //   }else if(userTpye==2){  //本科生
      //     //基本信息
      //     this.myBaseMsg = [
      //       userList.data_struct['XSM'], //院系名
      //       userList.data[0]['XSM'],
      //       userList.data_struct['ZYM'], //专业名称
      //       userList.data[0]['ZYM'],
      //       userList.data_struct['XH'],  //学号
      //       userList.data[0]['XH'],
      //       userList.data_struct['RXNJ'],//入学年级
      //       userList.data[0]['RXNJ'],
      //       userList.data_struct['MZMC'],//民族
      //       userList.data[0]['MZMC'],
      //       userList.data_struct['ZZMMMC'],//政治面貌
      //       userList.data[0]['ZZMMMC'],
      //     ];
      //   }else if(userTpye==3){  //研究生
      //     //个人信息
      //     this.myBaseMsg = [
      //       userList.data_struct['YXDM'], //院系名
      //       userList.data[0]['YXDM'],
      //       userList.data_struct['RXZYDM'], //专业名称
      //       userList.data[0]['RXZYDM'],
      //       userList.data_struct['XH'],  //学号
      //       userList.data[0]['XH'],
      //       userList.data_struct['RXNJ'],//入学年级
      //       userList.data[0]['RXNJ'],
      //       userList.data_struct['SJ'],//电话
      //       userList.data[0]['SJ'],
      //       userList.data_struct['ZZMMDM'],//政治面貌
      //       userList.data[0]['ZZMMDM'],
      //     ];
      //   }
      //
      //   /*if(userTpye==3 ||userTpye==2){  //剩余网费
      //     this.$axios.get(`https://10.255.44.1:8001/api/v1/package/users-packages`,{
      //       params: {
      //         access_token: 'PqgYa9RMPvojPpSD4zWQu3qrTLuLf1OP',
      //         user_name:JSON.parse(sessionStorage.getItem('xd_userBH')),
      //       }
      //     }).then((res)=>{
      //       console.log(res);
      //       this.myDataInf[1]['result'] = res.data.data[0]['user_balance']
      //     })
      //   }*/
      //
      //   //一卡通 公共部分
      //   this.$axios.get(`${process.env.NODE_BASE_INFO}/open_api/customization/tydbvyktuserinfo/list`,{
      //     params: {
      //       access_token: this.token,
      //       IDSERIAL: JSON.parse(sessionStorage.getItem('xd_userBH'))
      //     }
      //   }).then((res)=>{
      //     return res.data.result.data[0]['ID'];
      //   }).then((res)=>{
      //     return this.$axios.get(`${process.env.NODE_BASE_INFO}/open_api/customization/tydbvyktzhaccountinfo/list`,{
      //       params: {
      //         access_token: this.token,
      //         USERID: res
      //       }
      //     })
      //   }).then((res)=>{
      //     this.myDataInf[0]['result'] = res.data.result.data[0]['CARDBAL']/100
      //   }).then(()=>{
      //     //图书
      //     return this.$axios.get(`${process.env.NODE_BASE_INFO}/open_api/customization/tydbttsg/list`,{
      //       params: {
      //         access_token: this.token,
      //         ZGH:JSON.parse(sessionStorage.getItem('xd_userBH')),
      //       }
      //     })
      //   }).then((res)=>{
      //     if(res.data.code =='20013'){  //查询结果为空
      //       this.myDataInf[3]['result'] = '0';
      //     }
      //     if(res.data.code=='10000') {  //查询结果不为空
      //       this.myDataInf[3]['result'] = res.data.result.total
      //     }
      //   }).then(()=>{//未读邮件
      //     //return this.$axios.get(`${process.env.XD_DOMAIN_NAME}/jsonp/personalRemind/getView.do`)
      //   }).then((res)=>{
      //      // console.log(res)
      //   }).then(()=>{
      //     return this.$axios.get(`https://10.255.44.1:8001/api/v1/package/users-packages`,{
      //       params: {
      //         access_token: 'PqgYa9RMPvojPpSD4zWQu3qrTLuLf1OP',
      //         user_name:JSON.parse(sessionStorage.getItem('xd_userBH')),
      //       }
      //     })
      //   }).then((res)=>{
      //     console.log(res.data.message,'有数据吗');
      //     if(res.data.message.indexOf('不存在')>=0){
      //       this.myDataInf[1]['result'] = '∞'
      //     }else{
      //       this.myDataInf[1]['result'] = res.data.data[0]['user_balance']
      //     }
      //   }).catch(function(error) {
      //     console.log('发生错误！', error);
      //   });
      // })
    },
    methods: {
      // ...mapActions({
      //   getToken: 'loginStatus'
      // }),
      showMoney(i){
        this.myDataInf[i].hide = !this.myDataInf[i].hide
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.Information{
  margin-top: 22px;
  box-shadow: $infBoxShadow;
  position: relative;
  &:hover{
    box-shadow: $boxShadowHover;
    transition:  $transition;
  }
  .baseInformation{
    padding: 22px 0 0 16px;
    position: relative;
    .edit{
      position: absolute;
      right: 20px;
      top: 20px;
      background-color: $infEditBg;
      width: 110px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      border: 1px solid transparent;
      font-size: 16px;
      border-radius: 3px;
      color: $ModuleTitle;
      cursor: pointer;
      font-size: 16px;
      &:hover{
        box-shadow: $boxShadowHover1;
        border: 1px solid #c7c7ca;
        transition: all .3s;
      }
    }
    .myPhoto{
      width: 160px;
      display: inline-block;
      float: left;
    }
    .myData{
      width: 1020px;
      display: inline-block;
      float: right;
      .myDataItem{
        position: relative;
        line-height: 46px;
        min-height: 46px;
        .titleIcon{
          position: absolute;
          left: 30px;
          top: 8px;
        }
        .myDataItem-box{
          width: 100%;
          padding-left: 90px;
          font-size: 15px;
          .myDataItem-bold{
            font-weight: bold;
          }
          .myStep{
            position: relative;
            top: 4px;
            margin-right: 16px;
          }
          .myDataItem-item{
            display: inline-block;
            float: left;
            .myDataItem-key{
              display: inline-block;
              font-size: 15px;
              font-weight: bold;
              width: 100px;
              color: $ModuleTitle;
            }
            .myDataItem-value{
              display: inline-block;
              width: 200px;
              color: $infTableValueColor;
            }
          }
        }
      }
    }
  }
  .dataInformation{
    border-top: 1px solid $infLine;
    margin-top: 30px;
    .dataInfItem{
      float: left;
      width: 300px;
      height: 150px;
      position: relative;
      .iconBox{
        width: 40px;
        height: 40px;
        display: inline-block;
        border-radius: 50%;
        background-color: $infIconBg;
        margin: 50px 0 0 34px;
        img{
          margin: 10px 0 0 10px;
        }
      }
      h2{
        position: absolute;
        top: 42px;
        left: 92px;
        font-size: 15px;
        color: $infTitleColor;
      }
      .number-box{
        position: absolute;
        left: 90px;
        top: 74px;
        .loadNumber{
          color: $newsTimeColor;
          font-size: 14px;
        }
        .number{
          display: inline-block;
          width: 76px;
          font-size: 20px;
          color: $xd-red;
        }
        .check{
          margin-right: 10px;
          cursor: pointer;
          img{
            position: relative;
            top: 3px;
          }
        }
        a{
          color: $xd-lan1;
        }
      }
    }
  }
}
</style>
