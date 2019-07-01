<template>
    <div class="business main">
        <el-tabs class="main mt10" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="我的办件" name="first">
                <div class="inquire" style="margin-top:10px;margin-bottom:15px">
                    <el-select v-model="select1" slot="prepend" placeholder="全部">
                        <!-- <el-option label="餐厅名" value="1"></el-option>
                        <el-option label="订单号" value="2"></el-option>
                        <el-option label="用户电话" value="3"></el-option> -->
                    </el-select>
                    <!-- <select style="width:15%;height:30px;" id="">
                        <option value ="全部">全部</option>
                    </select> -->
                    <span style="color:grey">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时间范围&nbsp;&nbsp;</span>
                    
                    <!-- <input style="width:15%;height:30px;"/>
                    
                    <input style="width:15%;height:30px;"/>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input style="width:15%;height:30px;" value="请输入搜索关键词"/> -->
                    <el-input style="width:15%;height:30px;" placeholder="2019-10-25" suffix-icon="el-icon-date" v-model="input1">
                    </el-input>
                    <span style="color:grey">&nbsp;&nbsp;至&nbsp;&nbsp;</span>
                    <el-input style="width:15%;height:30px;" placeholder="2019-10-25" suffix-icon="el-icon-date" v-model="input2">
                    </el-input>
                    <el-input style="margin-left:20px;width:25%;height:30px;" placeholder="请输入关键词" suffix-icon="el-icon-search" v-model="input3">
                    </el-input>
                    <!-- <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input1">
                    </el-input>
                    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2">
                    </el-input> -->
                </div>
            
                <div class="businessContent">
                    <div class="click" @click="go"></div>
                    <!-- <select name="" id="" value="全部"></select> -->
                    <table width="100%" border="0" cellspacing="1" cellpadding="0">
                        <tr class="title">
                        <td style="width: 35%">事项名称</td>
                        <td style="text-align:center;">办理部门</td>
                        <td style="text-align:center;">收藏时间</td>
                        <td style="text-align:center;">处理状态</td>
                        <td style="text-align:center;">操作</td>
                        </tr>
                        <tr class="content" v-for="(item,index) in tableArr" :key="index">
                        <td style="width:35%">{{item.itemName}}</td>
                        <td style="text-align:center;">{{item.department}}</td>
                        <td style="text-align:center;">{{item.date}}</td>
                        <td style="text-align:center;">{{item.status}}</td>
                        <td style="text-align:center;"><span style="margin-right:0px;">{{item.operating}}</span>
                        </td>
                        </tr>
                    </table>
                        <xdPagination :pageAll="pageAll1" @pageInfo="pageClick"></xdPagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="我的咨询" name="second">
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
            <div class="businessContent">
                <table width="100%" border="0" cellspacing="1" cellpadding="0">
                    <tr class="title">
                        <td style="width: 45%;">咨询时间</td>
                        <td style="text-align:center;">咨询主题</td>
                        <td style="text-align:center;">状态</td>
                    </tr>
                    <tr class="content" v-for="(item,index) in consultationArr" :key="index">
                        <td style="width: 45%;">{{item.date}}</td>
                        <td style="text-align:center;">{{item.topic}}</td>
                        <td style="text-align:center;">{{item.status}}</td>
                    </tr>
                </table>
                <xdPagination :pageAll="pageAll1" @pageInfo="pageClick"></xdPagination>
            </div>
            </el-tab-pane>
            <el-tab-pane label="我的投诉" name="third">
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
                <div class="businessContent">
                    <table width="100%" border="0" cellspacing="1" cellpadding="0">
                        <tr class="title">
                            <td style="width: 45%;">投诉时间</td>
                            <td style="text-align:center;">投诉主题</td>
                            <td style="text-align:center;">投诉事项</td>
                        </tr>
                        <tr class="content" v-for="(item,index) in complaintArr" :key="index">
                            <td style="width: 45%;">{{item.date}}</td>
                            <td style="text-align:center;">{{item.topic}}</td>
                            <td style="text-align:center;">{{item.status}}</td>
                        </tr>
                    </table>
                    <xdPagination :pageAll="pageAll1" @pageInfo="pageClick"></xdPagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="我的建议" name="fourth">
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
                <div class="businessContent">
                    <table width="100%" border="0" cellspacing="1" cellpadding="0">
                        <tr class="title">
                            <td style="width: 55%;">提交时间</td>
                            <td>类型</td>
                            <td>主题</td>
                        </tr>
                        <tr class="content" v-for="(item,index) in suggestionArr" :key="index">
                            <td style="width: 35%;">{{item.date}}</td>
                            <td>{{item.status}}</td>
                            <td>{{item.topic}}</td>
                        </tr>
                    </table>
                    <xdPagination :pageAll="pageAll1" @pageInfo="pageClick"></xdPagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="我的纠错" name="fifth">
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
                <div class="businessContent">
                    <table width="100%" border="0" cellspacing="1" cellpadding="0">
                        <tr class="title">
                            <td style="width: 55%;">提交时间</td>
                            <td>类型</td>
                            <td>描述</td>
                        </tr>
                        <tr class="content" v-for="(item,index) in errorCorrectionArr" :key="index">
                            <td style="width: 35%;">{{item.date}}</td>
                            <td>{{item.topic}}</td>
                            <td>{{item.status}}</td>
                        </tr>
                    </table>
                    <xdPagination :pageAll="pageAll1" @pageInfo="pageClick"></xdPagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="我的收藏" name="sixth">
            <div class="inquire" style="margin-top:10px;margin-bottom:15px">
                <el-select v-model="value" placeholder="请选择" >
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
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
            <div  v-if="value=='2'">
                <div class="applycontent">
                    <ul>
                        <li v-for="(item,index) in applyContent" :key="index">
                        <img :src="item.url" alt="">
                        <p>{{item.title}}</p>
                        </li>
                    </ul>
                    <xdPagination :pageAll="pageAll2" @pageInfo="pageClick"></xdPagination>
                </div>
                </div>
            <div  v-if="value=='1'">
                <div class="businessContent">
                    <!-- <select name="" id="" value="全部"></select> -->
                    <table width="100%" border="0" cellspacing="1" cellpadding="0">
                        <tr class="title">
                        <td style="width: 35%">事项名称</td>
                        <td style="text-align:center;">办理部门</td>
                        <td style="text-align:center;">收藏时间</td>
                        <td style="text-align:center;">操作</td>
                        </tr>
                        <tr class="content" v-for="(item,index) in collectionArr" :key="index">
                        <td style="width:35%">{{item.itemName}}</td>
                        <td style="text-align:center;">{{item.department}}</td>
                        <td style="text-align:center;">{{item.date}}</td>
                        <td style="text-align:center;"><span style="margin-right:0px;">{{item.operating}}</span>
                        </td>
                        </tr>
                    </table>
                        <xdPagination :pageAll="pageAll1" @pageInfo="pageClick"></xdPagination>
                </div>
            </div>
            </el-tab-pane>
            <el-tab-pane label="我的签名" name="seventh">
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    import xdApply from '../../public/Apply'
    import xdHotItem from '../../public/HotItem'
    import xdPagination from '../../public/Pagination'
    export default {

        name: "businessContent",
        components:{
        xdPagination,
        xdApply,
        xdHotItem
        },
        data(){
        return{
            activeName:'first',
            tableArr:[
            {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                status:"已办结",
                operating:"评价",
            },
            {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                status:"办理中",
                operating:"查看",
            },
            {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                status:"办理中",
                operating:"查看",
            },
            {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                status:"办理中",
                operating:"查看",
            },
            {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                status:"办理中",
                operating:"查看",
            },
            {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                status:"办理中",
                operating:"查看",
            },
            {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                status:"办理中",
                operating:"查看",
            },
            {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                status:"办理中",
                operating:"查看",
            },
            {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                status:"办理中",
                operating:"查看",
            },
            ],
            consultationArr:[
                {
                date:"2019-05-25 15:26:12",
                topic:"数据资源",
                status:"办理中",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据资源",
                status:"办理中",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据资源",
                status:"办理中",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据资源",
                status:"办理中",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据资源",
                status:"办理中",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据资源",
                status:"办理中",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据资源",
                status:"办理中",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据资源",
                status:"办理中",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据资源",
                status:"办理中",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据资源",
                status:"办理中",
                },
            ],
            complaintArr:[
                {
                date:"2019-05-25 15:26:12",
                topic:"数据",
                status:"数据资源",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据",
                status:"数据资源",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据",
                status:"数据资源",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据",
                status:"数据资源",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据",
                status:"数据资源",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据",
                status:"数据资源",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据",
                status:"数据资源",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据",
                status:"数据资源",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据",
                status:"数据资源",
                },
                {
                date:"2019-05-25 15:26:12",
                topic:"数据",
                status:"数据资源",
                },
            ],
            collectionArr:[
                {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                operating:"取消收藏",
                },
                {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                operating:"取消收藏",
                },
                {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                operating:"取消收藏",
                },
                {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                operating:"取消收藏",
                },
                {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                operating:"取消收藏",
                },
                {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                operating:"取消收藏",
                },
                {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                operating:"取消收藏",
                },
                {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                operating:"取消收藏",
                },
                {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                operating:"取消收藏",
                },
                {
                itemName:"此处为相关事项名称此处为相关事项名称…",
                department:"党政办",
                date:"2019-05-25 15:26:12",
                operating:"取消收藏",
                },
            ],
            errorCorrectionArr:[
                {
                date:"2019-05-25 15:26:12",
                status:"问题",
                topic:"内容无法显示",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"问题",
                topic:"内容不完整",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"问题",
                topic:"内容不准确",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"问题",
                topic:"链接无效",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"问题",
                topic:"内容无法显示",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"问题",
                topic:"内容不完整",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"问题",
                topic:"内容不准确",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"问题",
                topic:"链接无效",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"问题",
                topic:"内容不准确",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"问题",
                topic:"链接无效",
                },
            ],
            suggestionArr:[
                {
                date:"2019-05-25 15:26:12",
                status:"功能建议",
                topic:"建议",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"页面建议",
                topic:"建议",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"操作建议",
                topic:"建议",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"事项办理建议",
                topic:"建议",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"功能建议",
                topic:"建议",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"页面建议",
                topic:"建议",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"操作建议",
                topic:"建议",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"事项办理建议",
                topic:"建议",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"操作建议",
                topic:"建议",
                },
                {
                date:"2019-05-25 15:26:12",
                status:"事项办理建议",
                topic:"建议",
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
            }
            ],
            options: [
                {
                value: '1',
                label: '事项类'
                }, 
                {
                value: '2',
                label: '应用类'
                }, 
            ],
            value: '1',
            moduleEl:false,
            applyStatus: 0,
            smallApplyData: [],
            dataState: false,
            serverTotal: 176,
            lineHandle: 58,
            pageAll1: 3,
            pageAll2: 3,
            activeName:'first'
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
    .business{
        // box-shadow: $infBoxShadow;
        position: relative;
        padding: 20px;
        margin: 25px auto;
        height: auto;
        background-color: white;
        
        .el-tabs /deep/{
            .el-tabs__item{
              height:50px;font-size:24px;font-weight:bold;
            }
            .el-tabs__nav-wrap::after {
            height: 5px;
              background-color: #0d1c28;
            width:97%;
            }
            .el-tabs__active-bar {
            height:5px;
            // margin:0 40px 0 0;
            background-color: #0d1c28;
            }
            .is-active,.el-tabs__item:hover{
              color:#4373a8;
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
        .applycontent{
          margin-top: 31px;
          ul{
            
            overflow: hidden;
            margin-bottom: 66px;
            li{
              margin-top: 3px;
              margin-left: 3px;
              width: 144px;
              height: 144px;
              margin-bottom: 43px;
              margin-right: 23px;
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
          }
        }
        .mt10{margin-top:10px;}
    }
</style>
