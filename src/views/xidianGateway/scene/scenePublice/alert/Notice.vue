<template>
  <div class="Notice">
    <p class="notice-text">办理地点：所在学生公寓</p>
    <p class="notice-text">办理时间：6月19~6月30  <span class="notice-text-ccc">（周一至周五：上午8:00—12:00、下午14：00—18:00）</span></p>
    <p class="notice-text">咨询电话：029-XXXXXXX ; 029-XXXXXXX</p>
    <p class="notice-text">办理流程：先缴清水电欠费，然后在楼管处办理退宿。</p>

    <div class="notice-tip">注：如需详细介绍，可<em>登录</em>后查看！</div>
  </div>
</template>

<script>
  export default {
    name: "Notice"
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.Notice{
  .notice-text{
    line-height: 42px;
    color: $ModuleTitle;
    font-size: 16px;
  }
  .notice-tip{
    color: $heardHotServe;
    font-size: 14px;
    margin: 20px 0;
    em{
      color: $active;
      font-style: normal;
      font-size: 14px;
    }
  }
  .notice-text-ccc{
    color: $heardHotServe;
  }
}
</style>
