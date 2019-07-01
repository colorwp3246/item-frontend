<template>
    <div class="card main">
        <div class="figure">
            <img :src="touxiang" class="touxiang">
            <button class="edit" @click="goData" style="cursor:pointer;">编辑资料</button>
        </div>
        <div class="xinxi">
            <h2 class="wenhou">中午好，丛京生</h2>
            <!-- <div class="dangan" @click="goData">个人档案</div> -->
              <span class="neirong">院系/部门：信息化建设处</span>
              <span class="neirong">联系电话：130******851</span>
              <span class="neirong">邮箱地址：zqsoft@126.com</span>
        </div>
        <div class="shuxian">
        </div>
        <div class="right">
            <div style="margin-left:530px;margin-top:5px;">
              <img class="fanye"  :src="fanye" alt="">
            </div>
            <div class="dataInfItem" v-for="(item, index) in myDataInf" :key="index" v-if="item">
                <a :href="item.path" v-if="item.path!=''">
                    <span class="iconBox">
                        <img :src="item.icon" alt="">
                    </span>
                    <div class="details">
                        <h2>{{item.title}}</h2>
                        <span class="status">{{item.status}}</span>
                        <span class="statusNumber">{{item.statusNumber}}</span>
                    </div>
                </a>
                <div v-else>
                    <span class="iconBox">
                        <img :src="item.icon" alt="">
                    </span>
                    <div class="details">
                      <h2>{{item.title}}</h2>
                      <span class="status">{{item.status}}</span>
                      <span class="statusNumber">{{item.statusNumber}}</span>
                    </div>
                </div>
            </div>
            </div>
    </div>
</template>
<script>
    // import xdAfterLandingOther from '../public/AfterLandingOther'
    // import Footer from '../public/Footer'
    // export default {
    //     name: "personalSpace",
    //     components:{
    //     xdAfterLandingOther,
    //     Footer,
    //     },
    // }

    export default {
    name: "Information",
    data(){
      return{
        fanye:`${process.env.PICTURE_SERVE}/file?fileId=0d7affe716814dd4ab60dffad39aabfd`,
        touxiang:`${process.env.PICTURE_SERVE}/file?fileId=9cc58498760d4e1e82b7cb60bd161b15`,
        adminName:null,
        myStep:[{'icon':`${process.env.PICTURE_SERVE}/file?fileId=0537db8cfa5e400aa13996027eb1850c`,'step':163}],
        myBaseMsg:null, //个人信息
        myDataInf:[
          {
            icon: `${process.env.PICTURE_SERVE}/file?fileId=0871af8c130b4309bb24e51d9fc6701f`,
            title: '一卡通余额',
            status: '余额',
            statusNumber: '268.6',
            path:""
          },
          {
            icon: `${process.env.PICTURE_SERVE}/file?fileId=01d6a265006f45ab8f76a81c2b113eaa`,
            title: '图书借阅',
            status: '待还',
            statusNumber: '59',
            path:""
          },
          {
            icon: `${process.env.PICTURE_SERVE}/file?fileId=0848154ce6454127bb704bfd8f883d9e`,
            title: '年终考核',
            status: '业绩点',
            statusNumber: '22.15',
            path:"/yearExamination"
          },
          {
            icon: `${process.env.PICTURE_SERVE}/file?fileId=dd86acc6657a4c39844d2eee242c740b`,
            title: '未读消息',
            status: '待查看',
            statusNumber: '13',
            path:""
          },
          {
            icon: `${process.env.PICTURE_SERVE}/file?fileId=29238e1744f241a191eb5022b6471390`,
            title: '报表下载',
            status: '新增',
            statusNumber: '20',
            path:"/reportdownload"
          },
          {
            icon: `${process.env.PICTURE_SERVE}/file?fileId=99139687dcb44cf0a91fba95af619560`,
            title: '我的办件',
            status: '待审核',
            statusNumber: '16',
            path:""
          },
        ], //个人数据
      }
    },
      methods:{
        goData(){
          // this.$router.push({path:'/personalData'})
        },
      }
    }

</script>
<style lang="scss" scoped>
    @import "~@/styles/variables.scss";
    // .center{
    //     background-color:#F2F5FA;
    // }
    .card{
    // box-shadow: $infBoxShadow;
      position: relative;
      padding: 20px;
      margin: 25px auto;
      height: auto;
      background-color: white;
        .figure{
            border-radius: 50%;
            margin-top:15px;
            margin-left:50px;
            display: inline-block;
            vertical-align: top;
            .edit{
                position: absolute;
                margin:20px 0 0 25px;
                width: 78px;
                height: 24px;
                background-color: white;
                border: 1px solid grey;
                border-radius: 3px;
              cursor:pointer;
            }
        }
        .xinxi{
            margin-left:50px;
            margin-top:30px;
            // margin-bottom:10px;
            // margin:20px 500px 10px 50px;
            position: absolute;
            display: inline-block;
            .dangan{
                display:inline-block;
                background-color: #5389C7;
                border-radius: 15px;
                width:80px;
                height:25px;
                line-height:25px;
                text-align: center;
                color:white;
                margin:0 0 0 10px;
            }
            .wenhou{
                display:inline-block;
                margin:0px 0 33px 0;
                font-size: 22px;
            }
            .neirong{
                display:block;
                line-height: 34px;
                font-size: 16px;
            }
        }
        .shuxian{
            display:inline-block;
            width:120px;
            border-right: 1px dashed darkgrey;
            padding-bottom:210px;  /*关键*/
            // margin-bottom:-20px;  /*关键*/
            margin-left:230px;
        }
        .right{
            display: inline-block;
            vertical-align:top;
            // margin-left:100px;
            // position: absolute;
            width:550px;
            .fanye{

              position: absolute;
              cursor:pointer;
              // background: red;

              // background:url('@/assets/fanye.png');
            }
            .dataInfItem{
                display: inline-block;
                margin-left:64px;
                // margin-bottom:20px;
                margin-top:33px;
                white-space:normal;
                .iconBox{
                    width: 40px;
                    height: 40px;
                    display: inline-block;
                    border-radius: 50%;
                    // background-color: $infIconBg;
                    margin: 0 0 20 0;
                }
                img{
                    margin: 10px 10px 0 0 ;
                    width: 40px;
                    height: 40px;
                }
                .details{
                    display:inline-block;
                    h2{
                        margin-bottom:10px;
                        top: 42px;
                        left: 92px;
                        font-size:15px;
                        color:#666666;
                        // color: $infTitleColor;
                    }
                    .status{
                        display:inline;
                        white-space:nowrap;
                        font-size:13px;
                        color:#666666;
                    }
                    .statusNumber{
                        display:inline;
                        white-space:nowrap;
                        color:red;
                        font-size:15px;
                    }
                }
            }
        }
    }
</style>
