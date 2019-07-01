<template>
    <div class="mySuggestion">
        <el-tabs class="main mt10" v-model="activeName"  @tab-click="handleClick">
            <el-tab-pane label="我的咨询" name="first">
                

            </el-tab-pane>
            <el-tab-pane label="我的投诉" name="second">

            </el-tab-pane>
            <el-tab-pane label="我的建议" name="third">
                <div class="inquire" style="margin-top:10px;margin-bottom:15px">
                    <el-select v-model="select2" slot="prepend" placeholder="应用">
                    </el-select>
                    <span style="color:grey">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时间范围&nbsp;&nbsp;</span>
                    <el-input style="width:15%;height:30px;" placeholder="2019-10-25" suffix-icon="el-icon-date" v-model="input1">
                    </el-input>
                    <span style="color:grey">&nbsp;&nbsp;至&nbsp;&nbsp;</span>
                    <el-input style="width:15%;height:30px;" placeholder="2019-10-25" suffix-icon="el-icon-date" v-model="input2">
                    </el-input>
                    <el-input style="margin-left:20px;width:25%;height:30px;" placeholder="请输入关键词" suffix-icon="el-icon-search" v-model="input3">
                    </el-input>
                </div>
                <div class="content" v-for="(item, index) in myDataInf" :key="index">
                    <div class="figure">
                        <img class="lottie" :src="item.icon" alt="">
                        <span class="lottieName">{{item.lottieName}}</span>
                    </div>
                    <div class="details">
                        <h2 class="title">{{item.title}}</h2>
                        <span class="status">{{item.status}}</span>
                        <span class="time">{{item.time}}</span>
                        <span class="neirong">
                            {{item.neirong}}
                        </span>
                    </div>
                </div>
                <xdPagination :pageAll="pageAll" @pageInfo="pageClick"></xdPagination>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    // import xdApply from '../../public/Apply'
    // import xdHotItem from '../../public/HotItem'
    import xdPagination from '../../public/Pagination'
    export default {

        name: "businessContent",
        components:{
        xdPagination,
        // xdApply,
        // xdHotItem
        },
        data(){
        return{
            activeName:'third',
            myDataInf:[
                {
                icon: require('@/assets/lottie.png'),
                lottieName: 'Lottie',
                title: '【功能建议】建议个人用户的实名认证信息应提供修改功能',
                status: '已实现',
                time: '2019-08-05',
                neirong:"大多数小公司在初次使用阿里云时，都是小范围尝试使用。所以，注册的用户大多都是以公司员工的个人身份进行的申请和认证，并陆续购买了ECS或相关服务，并提供公司使用。但随着公司业务的发展，在已经开通的个人账户名下已经申请了……"
                },
                {
                icon: require('@/assets/lottie.png'),
                lottieName: 'Lottie',
                title: '【功能建议】建议个人用户的实名认证信息应提供修改功能',
                status: '已实现',
                time: '2019-08-05',
                neirong:"大多数小公司在初次使用阿里云时，都是小范围尝试使用。所以，注册的用户大多都是以公司员工的个人身份进行的申请和认证，并陆续购买了ECS或相关服务，并提供公司使用。但随着公司业务的发展，在已经开通的个人账户名下已经申请了……"
                },
                {
                icon: require('@/assets/lottie.png'),
                lottieName: 'Lottie',
                title: '【功能建议】建议个人用户的实名认证信息应提供修改功能',
                status: '已实现',
                time: '2019-08-05',
                neirong:"大多数小公司在初次使用阿里云时，都是小范围尝试使用。所以，注册的用户大多都是以公司员工的个人身份进行的申请和认证，并陆续购买了ECS或相关服务，并提供公司使用。但随着公司业务的发展，在已经开通的个人账户名下已经申请了……"
                },
                {
                icon: require('@/assets/lottie.png'),
                lottieName: 'Lottie',
                title: '【功能建议】建议个人用户的实名认证信息应提供修改功能',
                status: '已实现',
                time: '2019-08-05',
                neirong:"大多数小公司在初次使用阿里云时，都是小范围尝试使用。所以，注册的用户大多都是以公司员工的个人身份进行的申请和认证，并陆续购买了ECS或相关服务，并提供公司使用。但随着公司业务的发展，在已经开通的个人账户名下已经申请了……"
                },
                {
                icon: require('@/assets/lottie.png'),
                lottieName: 'Lottie',
                title: '【功能建议】建议个人用户的实名认证信息应提供修改功能',
                status: '已实现',
                time: '2019-08-05',
                neirong:"大多数小公司在初次使用阿里云时，都是小范围尝试使用。所以，注册的用户大多都是以公司员工的个人身份进行的申请和认证，并陆续购买了ECS或相关服务，并提供公司使用。但随着公司业务的发展，在已经开通的个人账户名下已经申请了……"
                },
                {
                icon: require('@/assets/lottie.png'),
                lottieName: 'Lottie',
                title: '【功能建议】建议个人用户的实名认证信息应提供修改功能',
                status: '已实现',
                time: '2019-08-05',
                neirong:"大多数小公司在初次使用阿里云时，都是小范围尝试使用。所以，注册的用户大多都是以公司员工的个人身份进行的申请和认证，并陆续购买了ECS或相关服务，并提供公司使用。但随着公司业务的发展，在已经开通的个人账户名下已经申请了……"
                },
                {
                icon: require('@/assets/lottie.png'),
                lottieName: 'Lottie',
                title: '【功能建议】建议个人用户的实名认证信息应提供修改功能',
                status: '已实现',
                time: '2019-08-05',
                neirong:"大多数小公司在初次使用阿里云时，都是小范围尝试使用。所以，注册的用户大多都是以公司员工的个人身份进行的申请和认证，并陆续购买了ECS或相关服务，并提供公司使用。但随着公司业务的发展，在已经开通的个人账户名下已经申请了……"
                },
        ],
            // value: '1',
            // moduleEl:false,
            // applyStatus: 0,
            // smallApplyData: [],
            // dataState: false,
            // serverTotal: 176,
            // lineHandle: 58,
            pageAll:'3',
            // activeName:'first'
            }
        },
        methods:{
            searchprocess(){

            },
            go(){
                this.$router.push({path:'/eventAppraise'})
            },
            pageClick(){

            },
            handleClick(){
                if(this.activeName==='seventh'){
                  let routeData = this.$router.resolve({
                    path: "/eleName"
                  });
                  window.open(routeData.href, '_blank');
                }
            },
            
        }
    }
</script>
<style lang="scss" scoped>
    @import "~@/styles/variables.scss";
    @import "~@/styles/gatewayBase.scss";
    .mySuggestion{
        // box-shadow: $infBoxShadow;
        position: relative;
        padding: 20px;
        margin: 25px auto;
        height: auto;
        background-color: white;
        
        .el-tabs /deep/{
            .el-tabs__item{
                height:50px;
                font-size:28px;
                font-weight:500;
                // width:40%;
                // float:left
            }
            .el-tabs__nav-wrap::after {
                height: 5px;
                background-color:black;
                width:100%;
            }
            .el-tabs__active-bar {
                height:5px;
                width:20px;
                // margin:0 40px 0 0;
                background-color: #4373a8;
            }
            .is-active,.el-tabs__item:hover{
                color:#4373a8;
            }
            .record{
                display:block;
                background-color: #5389C7;
                border-radius: 18px;
                width:120px;
                height:36px;
                line-height:36px;
                text-align: center;
                color:white;
                margin:10px 0 30px 10px;
                font-size:18px;
                float:right;
                cursor:pointer;
            }
            .content{
                box-shadow: $infBoxShadow;
                display:block;
                padding: 40px 20px 40px 25px;
                margin: 0 5px 50px 5px;
                height: auto;
                width:99%; 
                clear:both;
                background-color: white;
                .figure{
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    
                    border-radius: 50%;
                    // background-color: $infIconBg;
                    margin: 0 0 20 0;
                    .lottie{
                        width: 60px;
                        height: 60px;
                        margin-top:-20px;
                    }
                    .lottieName{
                        margin-left:5px;
                        // margin-bottom:20px;
                        font-size:18px;
                        color:cadetblue;
                    }
                }
                .details{
                    display:inline-block;
                    width:94%;
                    margin-left:20px;
                    .title{
                        display:inline-block;
                        font-size:18px;
                        font-weight: bold;
                    }
                    .status{
                        display:inline-block;
                        margin-left:50px;
                        color:green;
                        padding:2px;
                        border:1px solid green;
                        font-size:2px;
                    }
                    .time{
                        float:right;
                        margin:15px 15px 0 0;
                    }
                    .neirong{
                        display:block;
                    }
                }
            }
            .businessContent{
                margin-top: 10px;
                .click{
                    width:40px;
                    height:20px;
                    // background: red;
                    position:absolute;
                    left:1100px;
                    top:120px;
                    cursor:pointer;
                }
                table{
                    width:97%;
                    font-size: 13px;
                    color: #727475;
                    .title{
                        font-size:13px;
                        color:#666;
                        height: 25px;
                        line-height: 40px;
                    }
                    .content{
                        font-size:14px;
                        color:#000;
                        height: 55px;
                        line-height: 55px;
                    }
                    
                    td{
                        border-bottom:1px solid #ebeef5;
                        img{
                        margin-right: 12px;
                        }
                        span{
                        color:#3E97DF;
                        }
                        span:nth-child(1){
                        margin-right:30px;
                        }
                        // span:nth-child(1){
                        // color:green;
                        // }
                    }
                
                }
            }
        }
        
        .mt10{margin-top:10px;}
    }
</style>
