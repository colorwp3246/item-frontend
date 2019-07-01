<!--通用title-->
<template>
    <div class="groupTitle">
      {{groupTitle}}
      <span class="aboutNumber">
        相关结果约<i>{{aboutNumber}}</i>条
      </span>
    </div>
</template>

<script>
  export default {
    name: "groupTitle",
    props:['groupTitle','aboutNumber']

  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .groupTitle{
    color: $ModuleTitle;
    font-size: 18px;
    padding-left: 20px;
    font-weight: bold;
    background-color: $groupTitleBg;
    border-left: 3px solid $active;
    height: 44px;
    line-height: 44px;
    margin-top: 35px;
    .aboutNumber{
      float: right;
      font-weight: normal;
      color: $groupNumberColor;
      font-size: 14px;
      padding-right: 8px;
      i{
        font-style: normal;
        color: $xd-red;
        margin: 0 2px;
      }
    }
  }

</style>
