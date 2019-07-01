<template>
  <div class="headNav">
    <ul class="clearfloat">
      <li v-for="(item,index) in arr" :key="index"  @click="gos(index)"><span :class="{bottomNav:$route.meta.title===item}">{{item}}</span></li>
    </ul>
    <div class="search-box">
      <div class="search-key" v-if="searchShow || inputSearchShow">
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
        <input type="text" class="headSearch" v-model="searchTerm"  @keydown="keyDown($event)" placeholder="请输入您需要办理的服务"/>
      </div>
      <span class="search-btn" @click="searchAll()">
        <!--<img src="~@/assets/search.png" alt="">-->
        <i class="icon_search icon_pos"></i>
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "heard-banner",
    components:{
    },
    data(){
      return{
        names:'事项',
        searchShow:true,
        searchTerm:null,//搜索关键词
        arr:[
          "首页","我要办事","西电资讯","智能客服","校能监督","专题大数据"
        ],
        indx:0
      }
    },
    methods:{
      handleCommand(command) {
        //this.$message('click on item ' + command);
        this.names=command;
      },
      keyDown: function (e) {
        let _this = this;
        let theEvent = window.event || e;
        let code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {
          _this.searchAll();
          _this.searchTerm = ''
        }
      },
      gos(ind){
        this.indx=ind
        if(this.indx===0){
          this.$router.push({path:'/'})
        }else if(this.indx===1){
          this.$router.push({path:'/EventServe'})
        }else if(this.indx===2){
          this.$router.push({path:'/News'})
        }else if(this.indx===3){
          this.$router.push({path:'/intelligence'})
        }
      },
      searchAll(){
        // let search = this.searchTerms;
        console.log(this.names)
        if(this.searchShow)
        {
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
          }
        }
        this.searchShow = true;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .headNav{
    /*margin-bottom: 15px;*/
    ul{
      li{
        float: left;
        color: #000000;
        margin-left: 15px;
        height: 40px;
        line-height: 40px;
        width:110px;
        font-size: 16px;
        span{
          color:#666666;
          padding-bottom:6px;
        }
      }
      li:nth-child(1){
        margin-left:0px;
      }
      li:hover span,.bottomNav{
        border-bottom:4px solid #2c8cc8;
        color: #2c8cc8;
        cursor: pointer;
      }
    }
  }
  .search-box{
    position: absolute;
    top: 60px;
    left: 870px;
    width: 330px;
    height: 40px;
    .search-key{
      //background-color: $heardSearchBg;
      border:solid 1px $heardSearchBg;
      width: 330px;
      height: 40px;
      padding-top:7px;
      padding-left:14px;
    }
    .headSearch{
      //background-color: $heardSearchBg;
      outline: none;
      border: none;
      padding-left: 6px;
      padding-right: 42px;
      width:250px;
      font-size: 14px;
      color: $heardInputColor;
    }
    .headSearch::-webkit-input-placeholder,textarea::-webkit-input-placeholder { /* WebKit browsers */
      color:$fontcolor10;
    }
    .headSearch:-moz-placeholder,textarea::-moz-placeholder{ /* Mozilla Firefox 4 to 18 */
      color:$fontcolor10;
    }
    .headSearch::-moz-placeholder,textarea::-moz-placeholder { /* Mozilla Firefox 19+ */
      color:$fontcolor10;
    }
    .headSearch:-ms-input-placeholder,textarea::-ms-input-placeholder{ /* Internet Explorer 10+ */
      color:$fontcolor10;
    }
    .search-btn{
      position: absolute;
      right: 0;
      top: 0;
      display: inline-block;
      width: 42px;
      height: 42px;
      img{
        margin: 8px;
      }
    }
  }
  .icon_pos{
    left:7px;
    top:10px;
  }
  .icon_search{
    display:block;
    border:solid 2px #666;
    border-radius:13px;
    height:17px;
    width:17px;
    background:transparent;
    position:relative;
  }
  .icon_search:after{
    position:absolute;
    display:block;
    content:'';
    height:2px;
    width:8px;
    background:#666;
    right:-8px;
    top:13px;
    transform:rotate(35deg);
    -ms-transform:rotate(35deg);
    -moz-transform:rotate(35deg);
    -webkit-transform:rotate(35deg);
    -o-transform:rotate(35deg);
  }
  .el-dropdown-link{
    font-size: 14px;
  }
</style>
