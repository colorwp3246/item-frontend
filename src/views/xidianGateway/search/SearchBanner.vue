<template>
  <div class="searchBanner" :style="{backgroundImage:'url(http://www.zq100.com/api/files/file?fileId=9d4be7ea214643369c43591c2f7d7511)'}">
    <div class="main">
      <xdSearch class="searchCell" :scrollShowSearchKey="scrollShowSearchKey"></xdSearch>
    </div>
  </div>
</template>

<script>
  import xdSearch from '../public/Search'
  export default {
    name: "SearchBanner",
    props:{
      scrollShowSearchKey:{
        type:Boolean
      }
    },
    components:{
      xdSearch
    }
  }
</script>

<style scoped lang="scss">
.searchBanner{
  height: 184px;
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  >.main{
    padding: 68px 0 0 280px;
  }
}
</style>
