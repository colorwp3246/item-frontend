<template>
  <div class="app-container">
    <div class="title">
      <div class="btn">
        <div class="left">
          <button class="search" @click="addData">新增</button>
          <button class="search" @click="updateData">修改</button>
          <button class="search" @click="deleteData">删除</button>
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
            @selection-change="updateCheckboxState"
            :cell-style="dialogStyle"
            highlight-current-row>
            <el-table-column align="center" label="#" :selectable="checkboxT" disabled="true" width="95" type="selection">
            </el-table-column>
            <el-table-column align="left" prop="target" label="服务对象">
            </el-table-column>
            <el-table-column align="center" prop="updatetime" label="时间" width="200" :formatter="dateFormat">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="end">
        <el-col :span="6" style="text-align: right;">
          <page :pageTotal="totalPage" @pageClick="pageEvent"></page>
        </el-col>
      </el-row>
    </div>
    <!--新增的弹框-->
    <el-dialog :title="dialogTitle" :visible.sync="dialogForm" width="400px" id="formdialog"
               :close-on-click-modal="false" @close="newAddClose">
      <el-form :model="form" class="demo-ruleForm forms" id="formdata" ref="ruleForm" :rules="rules">
        <el-row>
          <el-col>
            <el-form-item label="服务对象" :label-width="formLabelWidth" prop="target">
              <el-input v-model="form.target" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancleForm">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {submitSave,getPageList,submitUpdate,batchDelete,getDetail} from '@/api/dictionary'
  import {parseTime} from '@/utils/common'
  import page from '@/components/paging'
  export default {
    data() {
      const validateName = (rule, value, callback) => {
        console.log(value+","+!value);
        if (!value) {
          callback(new Error('请输入场景名称'));
        } else {
          callback();
        }
      }
      return {
        model:'target',//接口模块名称
        totalPage:'',
        pageIndex:1,
        list: [],
        selectedCheckbox:[],
        listLoading: true,
        formLabelWidth:'80px',
        form:{
          id:0,
          target:'',
        },
        rules: {
          target: [
            {required: true, trigger: 'blur', validator: validateName},
          ],
        },
        dialogStyle:{
          padding:'8px 0'
        },
        dialogForm: false,
        dialogTitle: '',
      }
    },
    components:{
      page
    },
    watch: {},
    mounted(){
      this.getPageList()
    },
    methods: {
      dateFormat:function(row, column) {
        var date = row[column.property];
        if (date == undefined) {
          date = new Date();
        }
        return parseTime(date,"{y}-{m}-{d}");
      },
      checkboxT(row,index){
        if(row.allowDel===0 && row.allowUpdate===0){
          return 1;
        }else{
          return 0;
        }
      },
      getPageList()
      {
        let params={
          page:this.pageIndex,
          size:'10'
        }
        console.log(params);
        getPageList(params,`${this.model}/selectpage`).then(res=>{
          if(res.data.code===200){
            this.listLoading=false;
            this.list=res.data.data.list
            this.totalPage = res.data.data.total
          }
        })
      },
      pageEvent(page){
        this.pageIndex=page
        this.getPageList()
      },
      //打开新增对话框
      addData() {
        this.dialogTitle = '新增';
        this.dialogForm = true;
      },
      submitForm(ruleForm){
        this.$refs[ruleForm].validate((valid) => {

          if(valid)
          {
            if(this.form.id===0)
            {
              submitSave(this.form,`${this.model}/insert`).then(res=>{
                if(res.data.code===200)
                {
                  this.$message({
                    message: '保存成功',
                    type: 'success'
                  });
                  this.dialogForm = false
                  this.getPageList();
                }
              })
            }else
            {
              submitUpdate(this.form,`${this.model}/update`).then(res=>{
                if(res.data.code===200)
                {
                  this.$message({
                    message: '保存成功',
                    type: 'success'
                  });
                  this.dialogForm = false
                  this.getPageList();
                }
              })
            }
          }
        });
      },
      //关闭弹框的回调
      newAddClose() {
        this.reset();
      },
      reset() {
        this.form = {
          id:0
        }
      },
      //新增表单时弹出框消失调重置函数
      cancleForm() {
        this.dialogForm = false;
        this.reset();
      },
      updateData() {
        if (this.selectedCheckbox.length === 1) {
          if (this.selectedCheckbox[0].allowUpdate===0) {
            this.dialogTitle = '修改';
            this.dialogForm = true;
            let params = {
              id:this.selectedCheckbox[0].id
            };
            getDetail(params,`${this.model}/selectbyid`).then(res => {
              console.log(res);
              if (res.data.code === 200) {
                this.form = res.data.data
              }
            })
          } else {
            this.$message({
              message: '系统数据不充许修改',
              type: 'warning'
            });
          }

        } else {
          this.$message({
            message: '只能允许选一条数据进行修改',
            type: 'warning'
          });
        }

      },
      //删除接口
      deleteData() {
        if (this.selectedCheckbox.length > 0) {
          let isdelete = true;
          for(let item of this.selectedCheckbox)
          {
             if(item.allowDel!==0)
             {
                isdelete = false;
                break;
             }
          }
          if (isdelete) {
            this.$confirm('此操作将删除这条数据, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              let deleteData = "";
              for(let item of this.selectedCheckbox)
              {
                deleteData+=item.id+",";
              }
              deleteData = deleteData.substring(0,deleteData.length-1);
              console.log(deleteData);
              let params = {
                ids: deleteData
              }
              console.log(params)
              batchDelete(params,`${this.model}/delbyids`).then(res => {
                console.log(res);
                if (res.data.code === 200) {
                  this.$message({
                    type: 'success',
                    message: '删除成功'
                  });
                  this.getPageList();
                }
              })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          } else {
            this.$message({
              message: '系统数据不充许删除',
              type: 'success'
            });
          }

        } else {
          this.$message({
            message: '至少选中一行数据',
            type: 'warning'
          });
        }

      },
      //点击复选框
      updateCheckboxState(row) {
        if (row) {
          this.selectedCheckbox = [...row]
          // this.moreUuid = [...el]
          console.log(row)
        } else {
          this.$refs.multipleTable.clearSelection();
          this.selectedCheckbox = []
        }
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

  #formdialog /deep/{
    .el-dialog__body{
      padding: 0px 30px;
    }
  }
</style>

