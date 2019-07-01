<template>
  <div class="app-container">
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>
    <el-tree
      class="filter-tree"
      :data="data2"
      :props="defaultProps"
      :filter-node-method="filterNode"
      ref="tree2"
      >
    </el-tree>
  </div>
</template>

<script>
  import {getAllList,getDetail} from '@/api/dictionary'
  import page from '@/components/paging'
  export default {
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      getOrganizationAll(){
        getAllList("api/v1/organizations").then(res=>{
           console.log(res.data);
           this.data2 = this.getOrganizationTree(res.data.data.childList);
        });
      },
      /*递归组织架构重构数据格式*/
      getOrganizationTree(list){
        let array = new Array();
        for(let item of list){
           if(item.childList.length===0)
           {
             array.push({id:item.obj.id,label:`${item.obj.name}`});
           }else
           {
             array.push({id:item.obj.id,label:`${item.obj.name}`,children:this.getOrganizationTree(item.childList)});
           }
        }
        return array;
      }
    },

    data() {
      return {
        filterText: '',
        data2: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    mounted(){
       this.getOrganizationAll();
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

