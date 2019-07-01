<template>
    <div class="license main">
        <div class="title">
            我的证照
        </div>
        <div class="licenseContent" >
            <div class="licenseContentDetails" style="background-repeat:no-repeat;cursor:pointer;" :style="{backgroundImage: 'url(' + item.ImgUrl + ') ' }" v-for="(item, index) in myDataInf" :key="index" v-if="item"  @click="goOneCard(index)">
                <div class="iconBox">
                    <img :src="item.icon" alt="">
                </div>
                <div class="details">
                    <h2>{{item.title}}</h2>
                    <span class="status">{{item.status}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
    name: "Information",
    data(){
      return{
        adminName:null,
        // myStep:[{'icon':`${process.env.PICTURE_SERVE}/file?fileId=0537db8cfa5e400aa13996027eb1850c`,'step':163}],
        myBaseMsg:null, //个人信息
        myDataInf:[
          {
            icon: `${process.env.PICTURE_SERVE}/file?fileId=73e55ea63c4d44869fe6d56c79d06ddd`,
            title: '一卡通',
            status: '一卡通申请、补办……',
            ImgUrl: `${process.env.PICTURE_SERVE}/file?fileId=cfe9ccaf3ac84c528cab39b0cf7197eb`,
          },
          {
            icon: `${process.env.PICTURE_SERVE}/file?fileId=48d41b88fb7f43b7ba759253d66830a7`,
            title: '学生证',
            status: '学生证挂失、补办……',
            ImgUrl: `${process.env.PICTURE_SERVE}/file?fileId=1ef3f96e2155452ca840979253596883`,
          },
          {
            icon: `${process.env.PICTURE_SERVE}/file?fileId=6c765fb86442477890c2a99c93f1af2b`,
            title: '身份证',
            status: '公安户籍业务、身份证补换……',
            ImgUrl: `${process.env.PICTURE_SERVE}/file?fileId=8d847ddf500f42f8819cc5571ef25b37`,
          },
          {
            icon: `${process.env.PICTURE_SERVE}/file?fileId=10e420c7eb12456d914fa22ddb0b5c3a`,
            title: '驾驶证',
            status: '行驶证、驾驶证补换……',
            ImgUrl: `${process.env.PICTURE_SERVE}/file?fileId=331f5147fc4a4d108d2feaacb61b428e`,
          },

        ], //个人数据
      }
    },
      methods:{
        goOneCard(ind){
          console.log(ind)
          if(ind===0){
            this.$router.push({path:'/oneCard'})
          }
        }
      }
    }
</script>
<style lang="scss" scoped>
    @import "~@/styles/variables.scss";
    .license{
        // box-shadow: $infBoxShadow;
        position: relative;
        padding: 20px;
        margin: 25px auto;
        height: auto;
        background-color: white;
        .title{
            color: #0d1c28;
            font-size: 24px;
            font-weight: bold;
        }
        .licenseContent{
            position: relative;
            // padding: 10px;
            margin: 20px 0 0 -10px;
            height: auto;
            .licenseContentDetails{
                position: relative;
                display: inline-block;
                margin-top:0px;
                width: 24%;
                height:98px;
                margin-left: 1%;
                padding:19px 0 12px 0;
                text-align:center;
                // background:#f1f2f4;
                // border-radius: 2%;
                .iconBox{
                    position: absolute;
                    width: 40px;
                    height: 40px;
                    display: inline-block;
                    border-radius: 50%;
                    // background-color: $infIconBg;
                    // margin: 0 0 0 0;
                }
                img{

                    margin: 10px 10px -20px -220px ;
                    width: 45px;
                    height: 45px;
                }
                .details{
                    position: absolute;
                    display:inline-block;
                    margin-left:-60px;
                    // vertical-align: middle;
                    h2{
                      text-align: left;
                      margin-top:10px;
                      margin-bottom:10px;
                        top: 42px;
                        left: 92px;
                        font-size: 15px;
                        color:white;
                    }
                    .status{
                        color:white;
                        display:inline;
                        white-space:nowrap;
                    }
                }
            }
        }
    }
</style>
