<template>
  <div class="dashboard-container">
    <el-row>
      <!--<i class="iconfont icon-iconfontshouji"></i>-->
      <el-col :span="12"> <div class="dashboard-text">欢迎您:{{name}}</div></el-col>
      <el-col :span="12"><div class="dashboard-text contentright">账号:<span v-for="role in roles" :key="role">{{ role }}</span></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <template>
          <el-table
            :data="tableArr"
            border
            style="width: 100%">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              fixed
              prop="id"
              label="id"
              width="200">
            </el-table-column>
            <el-table-column
              prop="menuname"
              label="菜单姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="component"
              label="内容"
              width="180">
            </el-table-column>
            <el-table-column
              prop="menupath"
              label="菜单路径"
              width="200">
            </el-table-column>
            <el-table-column
              prop="menutype"
              label="菜单类型"
              width="300">
            </el-table-column>
            <el-table-column
              prop="menuparid"
              label="菜单id"
              width="200">
            </el-table-column>
            <el-table-column
              prop="createtime"
              label="创建时间"
              width="180">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="200">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CryptoJS from 'crypto-js';
export default {
  data(){
    return{
      tableArr:[]
    }
    },
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles',
      'kaitoen'
    ])
  },
  mounted(){
    // this.$axios.get(`${process.env.BASE_TABLE}/getToken`).then((data)=>{
    //   console.log(data.data,'能获取吗')
    // })
    // console.log(JSON.parse(this.kaitoen).token,'疑惑')
    this.getTable()
  },
  methods:{
    handleClick(row) {
      console.log(row);
    },
    getTable(){

      // this.$axios.get(`http://10.170.51.175:3001/system/sysMenu/getPage`,{headers:{'authorize':JSON.parse(this.kaitoen).token}}).then(res=>{
      //   console.log(res,'有data吗')
      //   let key  = CryptoJS.enc.Latin1.parse('1234567890123456');
      //   let iv   = CryptoJS.enc.Latin1.parse('1234567890123456');
      //   let data=res.data
      // // var encrypted = CryptoJS.AES.encrypt(data,key,{iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding});
      // var decrypted = CryptoJS.AES.decrypt(data,key,{iv:iv,padding:CryptoJS.pad.ZeroPadding});
      //   console.log(JSON.parse(decrypted.toString(CryptoJS.enc.Utf8)));
      // //   console.log(encrypted,'打印')
      //   if(res){
      //     this.tableArr=JSON.parse(decrypted.toString(CryptoJS.enc.Utf8)).tables
      //   }
      // }).catch(err=>{
      //   console.log(err)
      // })
    },
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .contentright{
    text-align: right;
  }
}
</style>
