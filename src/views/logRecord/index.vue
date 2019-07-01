<template>
  <div class="app-container">
    <div class="title">
      <div class="btn">
        <div class="left">

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
            fit
            :cell-style="dialogStyle"
            highlight-current-row>
            <el-table-column align="center" label="#" width="95" type="selection">
            </el-table-column>
            <el-table-column align="center" label="子类名称" width="95" prop="subitemName">
            </el-table-column>
            <el-table-column label="子项编码" prop="zxbm">
            </el-table-column>
            <el-table-column label="服务负责人" width="110" align="center" prop="subitemCode">
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
                <el-button @click="updateData(scope.row)" type="primary" class="btnstyle">修改</el-button>
                <el-button type="danger" @click="delteBtns(scope.row)" class="btnstyle">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <page :pageTotal="totalData" @pageClick="pageEvent"></page>
        </el-col>
      </el-row>
    </div>
    <!--详情的弹框-->
    <el-dialog title="详情"  :visible.sync="dialogDetail" width="60%">
      <el-form :model="form" class="demo-ruleForm" ref="ruleForm">
        <el-row>
          <el-col :span="8">
            <el-form-item label="主管部门:" :label-width="formLabelWidth">
              {{detailList.zgbm}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="事项分类:" :label-width="formLabelWidth">
              {{detailList.sxfl}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="子项名称:" :label-width="formLabelWidth">
              {{detailList.zxmc}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="子项编码:" :label-width="formLabelWidth">
              {{detailList.zxbm}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="事项主题:" :label-width="formLabelWidth">
              {{detailList.sxzt}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="子项内容:" :label-width="formLabelWidth">
              {{detailList.zxny}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="实现方式:" :label-width="formLabelWidth">
              {{detailList.szfs}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="协同部门:" :label-width="formLabelWidth">
              {{detailList.xtbm}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="归属场景:" :label-width="formLabelWidth">
              {{detailList.gscj}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="办理方式:" :label-width="formLabelWidth">
              {{detailList.blfs}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="办理流程:" :label-width="formLabelWidth">
              {{detailList.bllc_xs}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="办理网址:" :label-width="formLabelWidth">
              {{detailList.blwz}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="办理地址:" :label-width="formLabelWidth">
              {{detailList.bldz}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="所属科室:" :label-width="formLabelWidth">
              {{detailList.ssks}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="负责人:" :label-width="formLabelWidth">
              {{detailList.fzr}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="提交方式:" :label-width="formLabelWidth">
              {{detailList.fzr}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="所需资料:" :label-width="formLabelWidth">
              {{detailList.fzr}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="负责人电话:" :label-width="formLabelWidth">
              {{detailList.sxzl}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="报告上级审批:" :label-width="formLabelWidth">
              {{detailList.bsjsp}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="是否收费:" :label-width="formLabelWidth">
              {{detailList.sfsf}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="线上缴费:" :label-width="formLabelWidth">
              {{detailList.xxjf}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="时限类型:" :label-width="formLabelWidth">
              {{detailList.sxlx}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="线下缴费:" :label-width="formLabelWidth">
              {{detailList.sxjf}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="状态:" :label-width="formLabelWidth">
              {{detailList.state|dataState}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-form-item label="服务对象:" :label-width="formLabelWidth">
                <span v-for="(item,index) in detailList.fwdxes" style="padding-right: 10px;">
                  {{item.fwdx}}
                </span>
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
  import {getOperationRecord} from '@/api/table'
  import page from '@/components/paging'
  export default {
    filters: {
      dataState(data){
        switch (data) {
          case '0':
            return '未发布'
            break
          case '1':
            return '已发布待审批'
            break
          case '2':
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
          page,
          size:'10'
        }
        getOperationRecord(params).then(res=>{
          if(res.data.code===200){
            this.list=res.data.data.list
            this.totalData=res.data.data.total
            this.listLoading=false
          }
          console.log(res.data.data.list,'操作记录')
        })
      },
      pageEvent(page){
        this.pageIndex=page
        console.log(page,'我是父元素的page')
        this.fetchData(this.pageIndex)
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

