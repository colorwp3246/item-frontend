<template>
  <div class="articleManage app-container">
    <div class="articleForm">
      <el-row>
        <el-col :span="24">
          <el-table
            v-loading="listLoading"
            :data="listArr"
            element-loading-text="Loading"
            border
            fit
            empty-text="暂无记录"
            @selection-change="updateState"
            highlight-current-row>
            <el-table-column align="center" label="#" width="50" type="selection">
            </el-table-column>
            <el-table-column align="center" label="全部问题" prop="question">
            </el-table-column>
            <el-table-column label="浏览" prop="searchTimes" width="200" align="center">
            </el-table-column>
            <el-table-column label="日期" align="center" prop="updateTime" show-overflow-tooltip width="200">
            </el-table-column>
            <el-table-column label="操作" width="180" align="center" prop="handleType">
              <template slot-scope="scope">
                  <button class="commonBtn uploadBtn" @click="uploadArr(scope.row)">更新</button>
                  <button class="commonBtn deleteBtn" @click="deleteArr(scope.row)">刪除</button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <page :pageTotal="pageTotal" @pageClick="pageEvent"></page>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import {getallquestions,getDeletebyids} from '@/api/article'
  import page from '@/components/paging'
  export default {
    data(){
      return{
        listLoading:true,
        listArr:[],
        pageTotal:'',
        pageData:1,
      }
    },
    mounted(){
      this.init(this.pageData)
    },
    components:{
      page
    },
    methods:{
      init(data){
        let params={
          page:data,
          size:'10'
        }
        getallquestions(params).then(res=>{
          if(res.data.code===200){
            console.log(res,'allquert')
            this.listLoading=false
            this.pageTotal=res.data.data.total
            this.listArr=res.data.data.list
          }
        })
      },
      updateState(){

      },
      pageEvent(data){
        this.pageData=data
        console.log(this.pageData)
        this.init(this.pageData)
      },
      deleteArr(item){
        this.$confirm('此操作将删除这条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let params={
            ids:item.id
          }
          getDeletebyids(params).then(res=>{
            if(res.data.code===200){
              this.init(this.pageData)
              this.$message({
                message: '恭喜你,删除成功',
                type: 'success'
              });
            }
          }).catch(err=>{
            console.log(err)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      uploadArr(item){
        this.$router.push({path:'/example/releaseArticle',query:{itemArr:item.id}});
      }
    }
  }
</script>
<style lang="scss">
  .commonBtn {
    color: #ffffff;
    padding: 4px 6px;
    border: none;
    outline: none;
    text-align: center;
    font-size:14px;
    border-radius: 4px;
  }
  .uploadBtn{
    background: #409EFF;
  }
  .deleteBtn{
    background-color:red;
  }
</style>
