<!--通用title-->
<template>
    <div class="ModuleTitle">
      <!--<a :href="to?to:'#'">{{moduleTitle}}</a>-->
      <a @click="toTitle">{{moduleTitle}}</a>
    </div>
</template>

<script>
  export default {
    name: "ModuleTitle",
    props:['moduleTitle','to'],
    methods:{
      toTitle(){
        this.$router.push({"path":this.to})
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";

  .ModuleTitle{
    border-bottom: 5px solid $ModuleTitle;

    padding-bottom: 12px;
    padding-top: 40px;
    a{
      color: $ModuleTitle;
      font-size: 24px;
      font-weight:bold;
      cursor: pointer;
      text-decoration: none;
      &:hover{
        color: $active;
      }
    }
  }

</style>
