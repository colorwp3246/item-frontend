<template>
  <div class="pagination noselect" :style="{textAlign:pagestion}">
    <ul class="paginationBox clear">
      <li v-if="pageCur>1"><a @click="pageCur=1">首页</a></li>
      <li v-if="pageCur==1"><a class="banClick">首页</a></li>

      <li v-if="pageCur>1"><a @click="pageCur--,pageClick()">上一页</a></li>
      <li v-if="pageCur==1"><a class="banClick">上一页</a></li>

      <li v-for="index in pagination"  :class="{ 'active': pageCur == index}">
        <a @click="btnClick(index)">{{ index }}</a>
      </li>

      <li v-if="pageCur!=pageAll"><a @click="pageCur++,pageClick()">下一页</a></li>
      <li v-if="pageCur == pageAll"><a class="banClick">下一页</a></li>

      <li v-if="pageCur!=pageAll"><a @click="pageCur=pageAll">末页</a></li>
      <li v-if="pageCur == pageAll"><a class="banClick">末页</a></li>

      <li class="allPage"><a>共<i>{{pageAll}}</i>页</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props: {
      pageAll: {
        type: Number
      },
      pagestion:{
        type:String,
        default:'center'
      }
    },
    data(){
      return{
        pageCur: 1,   //分页-当前页码
      }
    },
    computed: {
      pagination: function(){
        let left = 1;
        let right = this.pageAll;
        let pagArr = [];
        if(this.pageAll>= 5){
          if(this.pageCur > 3 && this.pageCur < this.pageAll-2){
            left = this.pageCur - 2;
            right = this.pageCur + 2;
          }else{
            if(this.pageCur<=3){
              left = 1;
              right = 5;
            }else{
              right = this.pageAll;
              left = this.pageAll -4;
            }
          }
        }
        while (left <= right){
          pagArr.push(left);
          left ++;
        }
        return pagArr
      }
    },
    methods: {
      btnClick: function(data){//页码点击事件
        if(data != this.pageCur){
          this.pageCur = data
        }
      },
      pageClick: function(){
        console.log('现在在'+this.pageCur+'页');
      }
    },
    watch: {
      pageCur: function(oldValue , newValue){
        this.$emit('pageInfo', this.pageCur)
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .pagination{
    margin: 50px auto;
    /*text-align: start;*/
    .paginationBox{
      display: inline-block;
      li{
        float: left;
        margin: 0 2px;
        cursor: pointer;
        color: $ModuleTitle;
        border: 1px solid $newsBottomColor;
        &.active{
          border:none;
          a{
            background-color: $active;
            color: #ffffff;
          }
        }
        a{
          display: inline-block;
          padding: 6px 12px;
          &.banClick{
            cursor:not-allowed;
          }
          i{
            font-style: normal;
          }
        }
        &.allPage{
          cursor: auto;
        }
      }
    }
  }
</style>
