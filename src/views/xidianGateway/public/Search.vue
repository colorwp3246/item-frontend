<!--首页搜索框-->
<template>
  <div class="search-box clear" v-if="!scrollShowSearchKey">
    <div>
      <div class="search-text">
         <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{names}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="事项">事项</el-dropdown-item>
              <el-dropdown-item command="应用">应用</el-dropdown-item>
              <el-dropdown-item command="人才">人才</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <input class="search" type="text" v-model="searchTerms" @keydown="keyDown($event)" placeholder="请输入你需要搜索的服务">
      </div>
      <button @click="searchAlls" class="btnSearch">搜索</button>
    </div>
    <div class="search-hot">
      <div class="search-hot-key">
        <span>热搜：</span>
        <a >学生离校</a>
        <a >一卡通</a>
        <a >新员式入职</a>
        <a >充值缴费</a>
      </div>
      <span class="search-hot-button" @click="btn_search">
        <i class="icon mb" :class="{reCircle:this.refresh===true}"></i>
        <span>换一批</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Search",
    props:{
      scrollShowSearchKey:{
        type:Boolean
      }
    },
    data(){
      return{
        refresh:false,
        searchTerms:null,
        names:'事项'
      }
    },
    methods:{
      handleCommand(command) {
        //this.$message('click on item ' + command);
        this.names=command;
      },
      btn_search(){
         var self = this;
         if(self.refresh===false)
         {
           self.refresh = true;
           setTimeout(function(){
             self.refresh = false;
           },500);
         }
      },
      keyDown(e){
        let _this = this;
        let theEvent = window.event || e;
        let code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {
          _this.searchAlls();
          _this.searchTerms=''
        }
      },
      searchAlls(){
        // let search = this.searchTerms;
        console.log(this.names)
        if(this.names==="人才"){
          this.$router.push({
            path: '/Search',
          });
          this.names=''
        }else if(this.names==="应用"){
          this.$router.push({
            path: '/leaveShoolSearch',
          });
          this.names=''
        }else if(this.names==="事项")
        {
          this.$router.push({
            path: '/Application',
            query:{title:'通知选修课停开申请'}
          });
          this.names=''
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";

.search-box{
  margin-top: 22px;
  text-align:center;
  .search-text{
    background:#fff;
    display:inline-block;
    width:646px;
    height:60px;
    padding-top: 14px;
    padding-left: 14px;
  }
  &.searchCell{
    margin: 0;
    .search{
      width: 580px;
    }
    display:inline-block;
  }
  .dropdownlist{
    padding: 19px;
    border: 0;
    outline:0;
    border-right: solid 1px #ccc;
    display:inline-block;
  }
  .search{
    width: 568px;
    height: 30px;
    padding-left: 20px;
    font-size:$fontSize18;
    color: $heardInputColor;
    border:0px;
    outline: 0px;
  }
  .search::-webkit-input-placeholder,textarea::-webkit-input-placeholder { /* WebKit browsers */
    color:$fontcolor10;
    font-size:$fontSize18;
  }
  .search:-moz-placeholder,textarea::-moz-placeholder{ /* Mozilla Firefox 4 to 18 */
    color:$fontcolor10;
    font-size:$fontSize18;
  }
  .search::-moz-placeholder,textarea::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:$fontcolor10;
    font-size:$fontSize18;
  }
  .search:-ms-input-placeholder,textarea::-ms-input-placeholder{ /* Internet Explorer 10+ */
    color:$fontcolor10;
    font-size:$fontSize18;
  }
  button{
    border: 0;
    outline:0;
    background-color: $xd-red;
    color: #fff;
    font-size: 17px;
    height: 60px;
    line-height: 60px;
    width: 102px;
    cursor:pointer;
    vertical-align: bottom;
    margin-left: -5px;
    letter-spacing:8px;
    font-weight:bold;
  }
  .search-hot{
    color:#fff;
    margin:0 auto;
    margin-top:10px;
    span,a,i,.search-hot-button{
      color:#fff;
      font-size:$fontSize15;
    }
    a{margin-left:20px;}
    width:665px;
    height:30px;
  }
  .search-hot-key{
    float:left;
    position: relative;
    left: -18px;
  }
  .search-hot-button{
    float:right;
    padding-right:50px;
    position:relative;
    right: 10px;
    .mb{margin-bottom:-3px;}
  }
  .el-dropdown-link{
    font-size: $fontSize18;
    color:$fontcolor9;
  }
  .btnSearch{
    font-size:$fontSize18;
    color:$fontcolor;
  }
}
</style>
