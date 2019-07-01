<template>
    <div class="main">
      <div class="ModuleTitle">
        <a>专题大数据</a>
        <span class="tab-title">
          <span v-for="(index,item) in tabs" :class="{tabactive:index==num}" @click="tab(index)">{{index}}</span>
        </span>
      </div>
      <img :src="data" alt="" style="margin-top:10px;">
    </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  export default {
    name: "Data",
    components:{
      ModuleTitle,
    },
    data(){
      return{
        data: `${process.env.PICTURE_SERVE}/file?fileId=170c5018a0de4b50a6848ec13b94d025`,
        tabs: ["学生总览", "就业","一卡通"],
        tabContents: ["内容一", "内容二","内容三"],
        num: '学生总览'
      }
    },
    methods:{
      tab:function(index){
        this.num = index;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";

  .ModuleTitle{
    border-bottom: 5px solid $ModuleTitle;
    position:relative;
    padding-bottom: 12px;
    padding-top: 40px;
  a{
    color: #0d1c28;
    font-size: 24px;
    cursor: pointer;
    font-weight:bold;
    text-decoration: none;
  &:hover{
     color: $active;
   }
  }
  }
  .tab-title{
    position:absolute;
    right:10px;
    bottom:5px;
    span{
      display:inline-block;
      width:70px;
      text-align:right;
      cursor:pointer;
      font-size: 14px;
      color: #0d1c28;
    }
    span.tabactive{color: #f13939;}
  }

</style>
