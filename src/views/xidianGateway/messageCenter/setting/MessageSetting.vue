<template>
  <div>
    <!--头部-->
    <AfterLandingOther :inputSearchShow="true" :falsePage="false"  otherTiTle="消息配置"></AfterLandingOther>
    <xdBannerOther :bgImg="bgImg" @itemActive="activeRoute" :selectdie="false"></xdBannerOther>
    <div class="win">
      <div class="side">
        <div class="block0">
          <div class="side-line0">
            <div class="circle0"></div>
            <div class="line0"></div>
          </div>
        </div>
        <div class="block">
          <div class="title">
            <div class="btitle" @click="go1">站内消息</div>
            <div class="ptitle">全部消息</div>
            <div class="ptitle">未读消息</div>
            <div class="ptitle">已读消息</div>
          </div>
          <div class="side-line">
            <div class="circle"></div>
            <div class="line"></div>
          </div>
        </div>
        <div class="block2">
          <div class="title2">
            <div class="btitle2">消息配置</div>
          </div>
          <div class="side-line2">
            <div class="circle2"></div>
            <div class="line2"></div>
          </div>
        </div>
      </div>
      <div class="msgsetting_content">
        <table>
          <tr>
            <th>
              消息类型
            </th>
            <th>
              站内信
            </th>
            <th>
              邮件
            </th>
            <th>
              短信
            </th>
            <th class="import_title">
              重要程度
            </th>
          </tr>
          <tr>
            <td colspan="5"><i class="arrow-down"></i><input type="checkbox" @click="selectAll"/> 财务消息</td>
          </tr>
          <tbody>
            <tr>
              <td class="msg_name"><input type="checkbox" /> 账户欠费通知</td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
              <td>
                <div class="import_content">
                  <div><input type="radio" name="1"/> <span>重要</span></div>
                  <div><input type="radio" name="1"/> <span>一般</span></div>
                  <div><input type="radio" name="1"/> <span>不重要</span></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="msg_name"><input type="checkbox" /> 账户欠费通知</td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
              <td>
                <div class="import_content">
                  <div><input type="radio" /> <span>重要</span></div>
                  <div><input type="radio" /> <span>一般</span></div>
                  <div><input type="radio" /> <span>不重要</span></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="msg_name"><input type="checkbox" /> 账户欠费通知</td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
              <td>
                <div class="import_content">
                  <div><input type="radio" /> <span>重要</span></div>
                  <div><input type="radio" /> <span>一般</span></div>
                  <div><input type="radio" /> <span>不重要</span></div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="msg_name"><input type="checkbox" /> 账户欠费通知</td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
              <td>
                <div class="import_content">
                  <div><input type="radio" /> <span>重要</span></div>
                  <div><input type="radio" /> <span>一般</span></div>
                  <div><input type="radio" /> <span>不重要</span></div>
                </div>
              </td>
            </tr>
          </tbody>
          <tr>
            <td colspan="5"><i class="arrow-down"></i><input type="checkbox" /> 财务消息</td>
          </tr>
          <tbody>
          <tr>
            <td class="msg_name"><input type="checkbox" /> 账户欠费通知</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>
              <div class="import_content">
                <div><input type="radio" name="1"/> <span>重要</span></div>
                <div><input type="radio" name="1"/> <span>一般</span></div>
                <div><input type="radio" name="1"/> <span>不重要</span></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="msg_name"><input type="checkbox" /> 账户欠费通知</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>
              <div class="import_content">
                <div><input type="radio" /> <span>重要</span></div>
                <div><input type="radio" /> <span>一般</span></div>
                <div><input type="radio" /> <span>不重要</span></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="msg_name"><input type="checkbox" /> 账户欠费通知</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>
              <div class="import_content">
                <div><input type="radio" /> <span>重要</span></div>
                <div><input type="radio" /> <span>一般</span></div>
                <div><input type="radio" /> <span>不重要</span></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="msg_name"><input type="checkbox" /> 账户欠费通知</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>
              <div class="import_content">
                <div><input type="radio" /> <span>重要</span></div>
                <div><input type="radio" /> <span>一般</span></div>
                <div><input type="radio" /> <span>不重要</span></div>
              </div>
            </td>
          </tr>
          </tbody>
          <tr>
            <td colspan="5"><i class="arrow-down"></i><input type="checkbox" /> 财务消息</td>
          </tr>
          <tbody>
          <tr>
            <td class="msg_name"><input type="checkbox" /> 账户欠费通知</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>
              <div class="import_content">
                <div><input type="radio" name="1"/> <span>重要</span></div>
                <div><input type="radio" name="1"/> <span>一般</span></div>
                <div><input type="radio" name="1"/> <span>不重要</span></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="msg_name"><input type="checkbox" /> 账户欠费通知</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>
              <div class="import_content">
                <div><input type="radio" /> <span>重要</span></div>
                <div><input type="radio" /> <span>一般</span></div>
                <div><input type="radio" /> <span>不重要</span></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="msg_name"><input type="checkbox" /> 账户欠费通知</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>
              <div class="import_content">
                <div><input type="radio" /> <span>重要</span></div>
                <div><input type="radio" /> <span>一般</span></div>
                <div><input type="radio" /> <span>不重要</span></div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="msg_name"><input type="checkbox" /> 账户欠费通知</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td>
              <div class="import_content">
                <div><input type="radio" /> <span>重要</span></div>
                <div><input type="radio" /> <span>一般</span></div>
                <div><input type="radio" /> <span>不重要</span></div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer></Footer>
    <sidebar></sidebar>
  </div>
</template>

<script>
  import AfterLandingOther from '../../public/AfterLandingOther'
  import xdBannerOther from '../../messageService/BannerOther'
  import Footer from '../../public/Footer'
  import sidebar from '../../public/Sidebar'
  export default {
    name: 'MessageSetting',
    components:{
      AfterLandingOther,
      Footer,
      sidebar,
      xdBannerOther
    },
    data(){
      return{
        bgImg:`${process.env.PICTURE_SERVE}/file?fileId=cac314a280a247ab911ae41de15b6f73`
      }

    },
    methods:{
      go1(){
        this.$router.push({path:'/messageCenter'})
      },
      selectAll(){
        console.log("selectALL");
      }
    }
  }
</script>

<style scoped lang="scss">
  img {
    width: 100%;
  }
  .win {
    display: flex;
    width: 80%;
    margin: auto;
    .side {
      display: flex;
      flex-direction: column;
      width: 200px;
      position: relative;
      margin-right: 30px;
      padding-top: 20px;
      .block0 {
        display: flex;
        justify-content: flex-end;
        height: 50px;
        .side-line0 {
          height: 100%;
          position: relative;
          .circle0 {
            border: 3px solid #aaa;
            height: 17px;
            width: 17px;
            border-radius: 50%;
          }
          .line0 {
            position: absolute;
            top: 17px;
            bottom: 0px;
            width: 9px;
            border-right: 1px solid #aaa;
          }
        }
      }
      .block {
        display: flex;
        justify-content: flex-end;
        height: 150px;
        .title {
          text-align: right;
          .btitle {
            font-weight: bold;
            font-size: 16px;
            margin: 0 15px 26px 15px;
          }
          .ctitle {
            color: #85b6f9;
            margin: 15px;
            font-size:14px;
          }
          .ptitle {
            color: #999;
            margin: 15px;
            font-size:14px;
          }
        }
        .side-line {
          height: 100%;
          position: relative;
          .circle {
            border: 3px solid #fff;
            height: 17px;
            width: 17px;
            border-radius: 50%;
            background-color: #ccc;
          }
          .line {
            position: absolute;
            top: 17px;
            bottom: 0px;
            width: 9px;
            border-right: 1px solid #aaa;
          }
        }
      }
      .block2 {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        position: absolute;
        top: 220px;
        left: 0px;
        bottom: 0px;
        .title2 {
          text-align: right;
          .btitle2 {
            font-weight: bold;
            font-size: 16px;
            margin: 0 15px 0 15px;
          }
        }
        .side-line2 {
          height: 100%;
          position: relative;
          .circle2 {
            border: 3px solid #d3dde8;
            background-color: #5b87dd;
            height: 17px;
            width: 17px;
            border-radius: 50%;
          }
          .line2 {
            position: absolute;
            top: 17px;
            bottom: 0px;
            width: 9px;
            border-right: 1px solid #aaa;
          }
        }
      }
    }
    .msgsetting_content{
      table {
         margin-top: 20px;
         width: 1060px;
         min-height: 60px;
         line-height: 60px;
         border-collapse: collapse;
         padding:5px;
         border-bottom:1px solid #ddd;
         tr {
           border-bottom:1px solid #ddd;
           th {
             border-bottom:1px solid #ececec;
             text-align: left;
             color: #999;
             font-weight: normal;
           }
           .arrow-down{
             display:inline-block;
             width:9px;
             height:10px;
             margin-right:10px;
             background:url("~@/assets/arrow.png") no-repeat 0 0;
           }
           .msg_name {
             padding-left: 40px;
           }
           .import_title {
             text-align: center;
           }
           td {
             border-bottom:1px solid #ececec;
             .import_content {
               display: flex;
               justify-content: space-around;
               align-items: center
             }
           }
         }
      }
    }
  }
</style>
