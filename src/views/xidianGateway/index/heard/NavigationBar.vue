<template>
  <div class="headNav">
    <ul class="clearfloat">
      <li v-for="(item,index) in arr" :key="index"  @click="gos(index)"><span :class="{bottomNav:indx===index}">{{item}}</span></li>
    </ul>
  </div>
</template>
<script>
  import xdSearch from '../../public/Search'
  export default {
    name: "heard-banner",
    components:{
      xdSearch
    },
    data(){
      return{
        arr:[
          "首页","我要办事","西电资讯","智能客服","校能监督","专题大数据"
        ],
        indx:0
      }
    },
    methods:{
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
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .headNav{
    margin-top: 8px;
    ul{
      li{
        float: left;
        color:$fontcolor;
        margin-left: 2px;
        height: 40px;
        line-height: 40px;
        width:125px;
        span{
          color:$fontcolor;
          text-align:center;
          padding: 0px 3px 9px 3px;
          font-size:16px;
          cursor:pointer;
        }
      }
      li:nth-child(1){
        margin-left:0px;
      }
      li:hover span,.bottomNav{
        border-bottom:4px solid #ffffff;
        cursor: pointer;
      }
    }
  }
</style>
