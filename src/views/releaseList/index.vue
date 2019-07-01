<template>
  <div class="app-container">
    <div class="title">
      <div class="btn">
        <div class="left">
          <button class="search" @click="dataRecovery">恢复</button>
          <button class="search" @click="dataPause">暂停</button>
          <button class="search" @click="dataAbolish">废除</button>
        </div>
        <div class="right">
          <input type="text" class="serach_input border_right">
          <button class="search border_left">搜索</button>
        </div>
      </div>
    </div>
    <div class="form">
      <el-row>
        <el-col :span="24">
          <el-table
            v-loading="listLoading"
            :data="list"
            element-loading-text="Loading"
            border
            ref="multipleTable"
            fit
            empty-text="暂无记录"
            :cell-style="dialogStyle"
            @selection-change="updateState"
            highlight-current-row>
            <el-table-column align="center" label="#" width="50" type="selection" :selectable='isDisabled'>
            </el-table-column>
            <el-table-column align="center" label="事项名称" width="150" prop="subitemName">
            </el-table-column>
            <el-table-column label="事项编码" prop="subitemCode" width="200" align="center">
            </el-table-column>
            <el-table-column label="办理地址" align="center" prop="handleAddress" show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="办理时间" width="350" align="center" prop="handleTime">
            </el-table-column>
            <el-table-column label="办理电话" width="180" align="center" prop="handlePhone">
            </el-table-column>
            <el-table-column label="办理方式" width="80" align="center" prop="handleType">
              <template slot-scope="scope">
                {{scope.row.handleType|handleTypes}}
              </template>
            </el-table-column>
            <el-table-column label="是否收费" width="80" align="center" prop="payment">
              <template slot-scope="scope">
                {{scope.row.payment|paymentOperation}}
              </template>
            </el-table-column>
            <el-table-column class-name="status-col" label="数据状态" width="110" align="center" prop="state">
              <template slot-scope="scope">
                {{ scope.row.state|dataState }}
              </template>
            </el-table-column>
            <el-table-column label="事项状态" width="110" align="center" prop='itemState'>
              <template slot-scope="scope">
                {{ scope.row.itemState|itemStateDetail }}
              </template>
            </el-table-column>
            <el-table-column label="更新时间" width="210" align="center" prop="updatetime">
            </el-table-column>
            <el-table-column align="center" prop="created_at" label="操作" width="70">
              <template slot-scope="scope">
                <el-button @click="detailData(scope.row)" type="primary" class="btnstyle">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <page :pageTotal="10" @pageClick="pageEvent"></page>
        </el-col>
      </el-row>
    </div>
    <!--详情的弹框-->
    <el-dialog title="详情"  :visible.sync="dialogDetail" width="60%">
      <el-form :model="form" class="demo-ruleForm formss" ref="ruleForm">
        <el-tabs v-model="addName" @tab-click="handleClick">
          <el-tab-pane label="基本信息" name="first">
            <el-row>
              <el-col :span="8">
                <el-form-item label="事项名称" :label-width="formLabelWidth" prop="subitemName">
                  {{items.subitemName}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="事项编码" :label-width="formLabelWidth" prop="subitemCode">
                  {{items.subitemCode}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="事项主题" :label-width="formLabelWidth" prop="itemTheme">
                  {{itemTheme.remarks}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="归属部门" class="zhuguan" :label-width="formLabelWidth" prop="mainDepartment">
                  {{itemdepart.nodeName}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="办件类型" :label-width="formLabelWidth" prop="itemType">
                  {{items.itemType}}
                </el-form-item>
              </el-col>
              <!--<el-col :span="8" v-if="form.itemType===4">-->
              <!--<el-form-item label="承诺天数:" :label-width="formLabelWidth">-->

              <!--</el-form-item>-->
              <!--</el-col>-->
            </el-row>
            <el-row>
              <el-col :span="20">
                <el-form-item label="业务介绍" :label-width="formLabelWidth" prop="itemIntroduction">
                  {{items.itemIntroduction}}
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="办理信息" name="second">
            <el-row>
              <el-col :span="8">
                <el-form-item label="办理科室" :label-width="formLabelWidth" prop="office">
                  {{itemoffice.officeName}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="科室地址" :label-width="formLabelWidth">
                  {{itemoffice.officeAddress}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="科室电话" :label-width="formLabelWidth">
                  {{itemoffice.officeNumber}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="服务时间" :label-width="formLabelWidth">
                  {{itemoffice.officeWorkTime}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="服务负责人" :label-width="formLabelWidth">
                  {{itemoffice.officePrincipal}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="负责人电话" :label-width="formLabelWidth">
                  {{itemoffice.officePrincipalTel}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="办理方式" :label-width="formLabelWidth" prop="handleType">
                  {{items.handleType}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="线上办理次数" :label-width="formLabelWidth" v-if="items.handleType==='线上'">
                  {{items.handleTimes}}
                </el-form-item>
                <el-form-item label="最多跑几次" :label-width="formLabelWidth" v-if="items.handleType==='线下'">
                  {{items.handleTimes}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="办理地址" :label-width="formLabelWidth" prop="handleAddress">
                  {{items.handleAddress}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="办理时间" :label-width="formLabelWidth" prop="handleTime">
                  {{items.handleTime}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="办理电话" :label-width="formLabelWidth" prop="handlePhone">
                  {{items.handlePhone}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="是否有业务系统" label-width="125px" prop="wheSystem">
                  {{itemSystem===''?'否':'是'}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row v-if='itemSystem!==""'>
              <el-col :span="8">
                <el-form-item label="业务系统" label-width="120px">
                  {{itemSystem.operationName}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="系统地址" label-width="120px">
                  {{itemSystem.operationUrl}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="系统负责人" label-width="120px">
                  {{itemSystem.operationPrincipal}}
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="扩展信息" name="third">
            <el-row>
              <el-col :span="8">
                <el-form-item label="是否跨部门" :label-width="formLabelWidth" prop="transDepartment">
                  {{items.transDepartment}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="协同部门名称" :label-width="formLabelWidth">
                  {{items.collaborativeDepartment}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="是否收费" :label-width="formLabelWidth" prop="payment">
                  {{items.payment}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row v-if="items.payment==='是'">
              <el-col :span="8">
                <el-form-item label="缴费方式" :label-width="formLabelWidth">
                  {{items.payment}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="缴费部门" :label-width="formLabelWidth">
                  {{itempayment.nodeName}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="收费依据" :label-width="formLabelWidth">
                  {{items.paymentGist}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="22" class="serveCheckbox">
                <el-form-item label="服务对象" :label-width="formLabelWidth" prop="serveObj">
                     <span v-for="(item,index) in targets" style="padding-right: 10px;">
                      {{item.target}}
                      </span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="22">
                <el-form-item label="服务场景" :label-width="formLabelWidth" prop="sceneArr">
                     <span v-for="(item,index) in scenes" style="padding-right: 10px;">
                        {{item.scene}}
                     </span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="办理流程:" :label-width="formLabelWidth">
                  <div v-for="(item,index) in itemProcesses" style="padding-right: 10px;">
                    {{item.processName}}
                    <el-button type="primary" class="btnstyle" v-if="itemProcesses.length>0"
                               @click="downProcessName(item.processId)">下载
                    </el-button>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="材料信息" name="four">
            <table width="100%" bgcolor="#e9faff">
              <tr align="center">
                <td>材料名称</td>
                <td>材料形式</td>
                <td>纸张大小</td>
                <td>份数</td>
                <td>空表</td>
                <td>样表</td>
                <td>备注</td>
                <td></td>
              </tr>
              <tr v-for="(item,index) in materalItem" :key="index" align="center">
                <td width="110px">
                  {{item.materialName}}
                </td>
                <td width="120px">
                  {{item.materialForm}}
                </td>
                <td width="120px">
                  {{item.materialPaper}}
                </td>
                <td width="120px">
                  {{item.materialCopies}}
                </td>
                <td width="110px">
                  {{item.materialDemoName}}
                  <button @click="demoload(item.id)" v-if="item.materialDemoName">下载</button>
                </td>
                <td width="110px">
                  {{item.materialSheetName}}
                  <button @click="sheetload(item.id)" v-if="item.materialSheetName">下载</button>
                </td>
                <td width="100px">
                  {{item.materialExtras}}
                </td>
              </tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="常见问题" name="five">
            <el-row>
              <el-col :span="22">
                <el-form-item label="常见问题:" :label-width="formLabelWidth" style="margin-bottom: 0;">
                  <ul v-for="(item,index) in itemQuestions">
                    <li style="background-color:#dcdfe6; padding-left: 10px;">问题: {{item.question}}</li>
                    <li style="background-color:#ecf5ff; padding-left: 10px;">答案: {{item.answer}}</li>
                  </ul>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDetail=false">取 消</el-button>
        <el-button type="primary" @click="dialogDetail=false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {getStateData,pageSearch,searchDetail,setPauseItem,setReviveItem,setAbolishItem} from '@/api/table'
  import page from '@/components/paging'
  import {dataState,handleTypes,paymentOperation,itemStateDetail}from '@/utils/filters'
  export default {
    filters: {
      dataState,
      handleTypes,
      paymentOperation,
      itemStateDetail,
    },
    data() {
      return {
        input:'',
        formInline:{
          region:''
        },
        list: [],
        listLoading: true,
        totalPage:'',
        pageIndex:1,
        detailList:{},
        dialogDetail:false,
        formLabelWidth:'120px',
        form:{},
        totalData:'',
        dialogStyle:{
          padding:'8px 0'
        },
        scenes:[],
        addName:'first',
        items: [],//详情
        itemTheme: {},//主题对象
        itemdepart: {},//归属部门
        itemoffice: {},//科室详情
        itemSystem: '',//操作系统
        itemProcesses: [],//办理流程
        itempayment: {},//缴费部门
        itemQuestions: [],
        scen: [],
        targets: [],
        materalItem: [],//材料部门
        checkboxArr:[]
      }
    },
    components:{
      page
    },
    watch: {},
    mounted(){
      this.fetchData(this.pageIndex)
      // this.trytest(this.pageIndex)
    },
    methods: {
      fetchData(page) {
        let params={
          state:'2',
          page,
          size:'10'
        }
        getStateData(params).then(res=>{
          if(res.data.code===200){
            console.log(res)
            this.listLoading=false
            this.list=res.data.data.list
            console.log(this.list,'我的list')
          }
        })
      },
      pageEvent(page){
        this.pageIndex=page
        this.fetchData(this.pageIndex)
      },
      detailData(el){
        this.detailList=el
        this.items=[]
        this.itemQuestions=[]
        this.scenes=[]
        this.targets=[]
        this.dialogDetail=true
        let params={
          uuid:el.uuid
        }
        searchDetail(params).then(res => {
          console.log(res, '详细')
          if (res.data.code === 200) {
            this.dialogDetail = true
            if (res.data.data.item.paymentType === 0) {
              res.data.data.item.paymentType = '线上'
            } else if (res.data.data.item.paymentType === 1) {
              res.data.data.item.paymentType = '线下'
            }
            if (res.data.data.item.payment === 1) {
              res.data.data.item.payment = '是'
            } else if (res.data.data.item.payment === 0) {
              res.data.data.item.payment = '否'
            }
            if (res.data.data.item.operationSystem === 1) {
              res.data.data.item.operationSystem = '是'
            } else if (res.data.data.item.operationSystem === 0) {
              res.data.data.item.operationSystem = '否'
            }
            if (res.data.data.item.transDepartment === 1) {
              res.data.data.item.transDepartment = '是'
            } else if (res.data.data.item.transDepartment === 0) {
              res.data.data.item.transDepartment = '否'
            }
            if (res.data.data.item.handleType === 1) {
              res.data.data.item.handleType = '线下'
            } else if (res.data.data.item.handleType === 0) {
              res.data.data.item.handleType = '线上'
            }
            if (res.data.data.item.handleType === 1) {
              res.data.data.item.handleType = '线下'
            } else if (res.data.data.item.handleType === 0) {
              res.data.data.item.handleType = '线上'
            }
            res.data.data.item.handleTimes = '办理' + res.data.data.item.handleTimes + '次'
            if (res.data.data.operation) {
              this.itemSystem = res.data.data.operation
            } else {
              this.itemSystem = ''
            }
            this.items = res.data.data.item
            this.itemTheme = res.data.data.theme
            this.itemdepart = res.data.data.mainDepartment
            this.itemoffice = res.data.data.office
            this.itempayment = res.data.data.paymentDepartment
            this.itemProcesses = res.data.data.processes
            this.itemQuestions = res.data.data.itemQuestions
            this.scenes = res.data.data.scenes
            this.targets = res.data.data.targets
            this.materalItem = res.data.data.materials
            console.log(this.items)
          }
        })
      },
      //恢复
      dataRecovery(){
        if(this.checkboxArr.length>0){
          this.$confirm('此操作将恢复此文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let itemStateList=[]
            this.checkboxArr.forEach(item=>{
              itemStateList.push({
                uuid:item.uuid,
                itemState:item.itemState
              })
            })
            let params={
              itemStateList
            }
            setReviveItem(params).then(res=>{
              if(res.data.code===200){
                this.$message({
                  type: 'success',
                  message: '恢复成功!'
                });
                this.fetchData(this.pageIndex)
              }
            }).catch(err=>{
              this.$message.error('出错了哦');
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消恢复'
            });
          });
        }else{
          this.$message({
            message: '请选择需要审批的数据行',
            type: 'warning'
          });
        }

      },
      //暂停
      dataPause(){
        if(this.checkboxArr.length>0){
          this.$confirm('此操作将暂停此文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let itemStateList=[]
            this.checkboxArr.forEach(item=>{
              itemStateList.push({
                uuid:item.uuid,
                itemState:item.itemState
              })
            })
            let params={
              itemStateList
            }
            setPauseItem(params).then(res=>{
              if(res.data.code===200){
                this.$message({
                  type: 'success',
                  message: '暂停成功!'
                });
                this.fetchData(this.pageIndex)
              }
            }).catch(err=>{
              this.$message.error('出错了哦');
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消暂停'
            });
          });
        }else{
          this.$message({
            message: '请选择需要审批的数据行',
            type: 'warning'
          });
        }

      },
      //废除
      dataAbolish(){
        if(this.checkboxArr.length>0){
          this.$confirm('此操作将废除此文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let itemStateList=[]
            this.checkboxArr.forEach(item=>{
              itemStateList.push({
                uuid:item.uuid,
                itemState:item.itemState
              })
            })
            let params={
              itemStateList
            }
            setAbolishItem(params).then(res=>{
              if(res.data.code===200){
                this.$message({
                  type: 'success',
                  message: '废除成功!'
                });
                this.fetchData(this.pageIndex)
              }
            }).catch(err=>{
              this.$message.error('出错了哦');
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消废除'
            });
          });
        }else{
          this.$message({
            message: '请选择需要审批的数据行',
            type: 'warning'
          });
        }

      },
      //tab
      handleClick(){

      },
      //获取勾选得内容
      updateState(row){
        if (row) {
          this.checkboxArr = [...row]
          console.log(row)
        } else {
          this.$refs.multipleTable.clearSelection();
          this.checkboxArr = []
        }
      },
      isDisabled(row,index){
        if(row.itemState===2){
          return false
        }else{
          return true
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .form{
    margin-top: 15px;
  }
  .btnstyle{
    padding:6px 10px;
    font-size: 12px;
  }
  .btnUp{
    padding:10px 10px;
    font-size: 13px;
  }
  .Upbtn{
    width: 100%;
    height: 35px;
    line-height:35px;
    outline: none;
    font-size: 12px;
    padding-left: 5px;
  }
  .formss{
    .el-row{
      margin-bottom: 0;
    }
  }
  .btn {
    width: 100%;
    overflow: hidden;
  }

  .left {
    float: left;
    width: 700px;
  }

  .right {
    float: right;
  }
  .serach_input{
    width: 200px;
    border:solid 1px #dcdcdc;
    padding:6px;
    position: relative;
    top:1px;
    right: -6px;
    border-radius: 4px;
  }
  .search {
    background: #409EFF;
    color: #ffffff;
    padding: 8px 8px;
    border: none;
    outline: none;
    text-align: center;
    padding-right: 16px;
    /*margin-right: 15px;*/
    font-size:14px;
    border-radius: 4px;
  }
</style>

