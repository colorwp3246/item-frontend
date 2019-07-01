<template>
  <div class="pading">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="Number(pageTotal)"
      @current-change="change"
    >
    </el-pagination>
  </div>
</template>
<script>
  export default {
    // props:{
    //   pageTotal:{
    //     type: Number,
    //     default:undefined
    //   }
    // },
    props:['pageTotal'],
    data(){
      return{
      }
    },
    mounted(){
      console.log( typeof this.pageTotal ,'输出类型')
    },
    methods:{
      change(e){
        this.$emit("pageClick",e)
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
