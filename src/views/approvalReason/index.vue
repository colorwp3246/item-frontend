<template>
  <div class="app-container">
    <div class="title">
      <el-row :gutter="20">
        <el-col :span="4">
          <!--<el-input v-model="input" placeholder="请输入内容" style="margin-right:5px;" id="Upbtn"></el-input>-->
          <input type="text" v-model="input" placeholder="请输入内容" class="Upbtn">
        </el-col>
        <el-col :span="1">
          <el-button type="primary" class="btnUp">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="form">
      <el-row>
        <el-col :span="24">
          <el-table
            v-loading="listLoading"
            :data="list"
            element-loading-text="Loading"
            border
            fit
            :cell-style="dialogStyle"
            highlight-current-row>
            <el-table-column align="center" label="#" width="95" type="selection">
            </el-table-column>
            <el-table-column align="center" label="子类名称" width="95" prop="subitemName">
            </el-table-column>
            <el-table-column label="子项编码" prop="subitemCode">
            </el-table-column>
            <el-table-column label="服务负责人" width="110" align="center" prop="operationPrincipal">
            </el-table-column>
            <el-table-column label="事项分类" width="110" align="center" prop="classification">
            </el-table-column>
            <el-table-column label="办理方式" width="110" align="center" prop="handleType">
            </el-table-column>
            <el-table-column label="版本号" width="110" align="center" prop="version">
            </el-table-column>
            <el-table-column class-name="status-col" label="状态" width="110" align="center" prop="state">
              <template slot-scope="scope">
                {{ scope.row.state|dataState }}
              </template>
            </el-table-column>
            <el-table-column align="center" prop="created_at" label="操作" width="200">
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
        <el-row>
          <el-col :span="8">
            <el-form-item label="主管部门:" :label-width="formLabelWidth">
              {{items.mainDepartment}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="事项分类:" :label-width="formLabelWidth">
              {{items.classification}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="状态:" :label-width="formLabelWidth">
              {{items.state|dataState}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="子项名称:" :label-width="formLabelWidth">
              {{items.subitemName}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="是否跨部门:" :label-width="formLabelWidth">
              {{items.transDepartment}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="子项编码:" :label-width="formLabelWidth">
              {{items.subitemCode}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="协同部门:" :label-width="formLabelWidth">
              {{items.collaborativeDepartment}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="办理方式:" :label-width="formLabelWidth">
              {{items.handleType}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="办理流程:" :label-width="formLabelWidth">
              {{items.handleProcedures}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="事项类型:" :label-width="formLabelWidth">
              {{items.timeLimit}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="是否收费:" :label-width="formLabelWidth">
              {{items.payment}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="收费方式:" :label-width="formLabelWidth">
              {{items.paymentType}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="网上缴费方式:" :label-width="formLabelWidth">
              {{items.paymentMethod}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="线下缴费部门:" :label-width="formLabelWidth">
              {{items.paymentDepartment}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="是否有现在的业务系统:" label-width="140">
              {{items.operationSystem}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="业务系统名称:" :label-width="formLabelWidth">
              {{items.operationName}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="业务系统网址:" :label-width="formLabelWidth">
              {{items.operationUrl}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="业务系统负责人:" :label-width="formLabelWidth">
              {{items.operationPrincipal}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="办理科室:" :label-width="formLabelWidth">
              {{items.handleDepartment}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="服务时间:" :label-width="formLabelWidth">
              {{items.handleTime}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="服务地址:" :label-width="formLabelWidth">
              {{items.handleAddress}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="服务负责人:" :label-width="formLabelWidth">
              {{items.handlePrincipal}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="科室电话:" :label-width="formLabelWidth">
              {{items.departmentTel}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="办理次数:" :label-width="formLabelWidth">
              {{items.handleTimes}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-form-item label="服务对象:" :label-width="formLabelWidth">
                <span v-for="(item,index) in targets" style="padding-right: 10px;">
                  {{item.target}}
                </span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-form-item label="服务场景:" :label-width="formLabelWidth">
                <span v-for="(item,index) in scenes" style="padding-right: 10px;">
                  {{item.scene}}
                </span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="常见问题:" :label-width="formLabelWidth">
              <div v-for="(item,index) in itemQuestions">
                <div>问题：<span>{{item.question}}</span>答案：<span>{{item.answer}}</span></div>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDetail=false">取 消</el-button>
        <el-button type="primary" @click="dialogDetail=false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {getStateData,pageSearch,searchDetail} from '@/api/table'
  import page from '@/components/paging'
  export default {
    filters: {
      dataState(data){
        switch (data) {
          case 0:
            return '未发布'
            break
          case 1:
            return '已发布待审批'
            break
          case 2:
            return '已审批'
            break
        }
      }
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
        items:[],
        itemQuestions:[],
        scenes:[],
        targets:[]
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
            this.listLoading=false
            this.list=res.data.data.list

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
        searchDetail(params).then(res=>{
          if(res.data.code===200){
            if(res.data.data.item.paymentType===0){
              res.data.data.item.paymentType='线上'
            }else if(res.data.data.item.paymentType===1){
              res.data.data.item.paymentType='线下'
            }
            if(res.data.data.item.handleTime!==''&&res.data.data.item.handleTime!==null){
              res.data.data.item.handleTime=res.data.data.item.handleTime.slice(0,10)
            }
            if(res.data.data.item.payment===1){
              res.data.data.item.payment='是'
            }else if(res.data.data.item.payment===0){
              res.data.data.item.payment='否'
            }
            if(res.data.data.item.operationSystem===1){
              res.data.data.item.operationSystem='是'
            }else if(res.data.data.item.operationSystem===0){
              res.data.data.item.operationSystem='否'
            }
            if(res.data.data.item.transDepartment===1){
              res.data.data.item.transDepartment='是'
            }else if(res.data.data.item.transDepartment===0){
              res.data.data.item.transDepartment='否'
            }
            if(res.data.data.item.handleType===1){
              res.data.data.item.handleType='线下'
            }else if(res.data.data.item.handleType===0){
              res.data.data.item.handleType='线上'
            }
            if(res.data.data.item.timeLimit===0){
              res.data.data.item.timeLimit='即时办件'
            }else{
              res.data.data.item.timeLimit='承诺时间'+res.data.data.item.timeLimit+'天'
            }
            this.items=res.data.data.item
            this.itemQuestions=res.data.data.itemQuestions
            this.scenes=res.data.data.scenes
            this.targets=res.data.data.targets
            console.log(this.items,'不出现数字')
          }
          console.log(res,'cha')
        })
      },

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
</style>

