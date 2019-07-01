<template>
  <div class="serviceMatters">
    <xdGroupTitle :groupTitle="groupTitle" :aboutNumber="searchCell.length"></xdGroupTitle>
    <div class="hotlink" v-if="isApply">
      <ul class="items clearfix">
        <li><i></i><a>西电就业信息网</a><span class="more"></span></li>
        <li><i class="icon1"></i><a>西电跳蚤市场</a><span class="more"></span></li>
        <li><i class="icon2"></i><a>西电校友总会</a><span class="more"></span></li>
      </ul>
    </div>
    <xdSearchCell :searchCell="searchCell" :showNumber="5" :headlines="headlines"></xdSearchCell>
  </div>
</template>

<script>
  import xdGroupTitle from '../public/GroupTitle'
  import xdSearchCell from './SearchCell'
  export default {
    name: "ServiceMatters",
    props:{
      searchCell:{
        type:Array
      },
      groupTitle:{
        type: String
      },
      headlines:{
        type:String
      },
      isApply:{
        type:Boolean,
        default:false
      }
    },
    components:{
      xdGroupTitle,
      xdSearchCell
    },
    data(){
      return{

      }
    }
  }
</script>

<style scoped lang="scss">
  .hotlink{}
  .items{
    padding-top:20px;
    li{
      float:left;width:340px;height:60px;border:solid 1px #ccc;
      position:relative;
      margin-right:6px;
      text-align:left;
      padding-left:10px;
      i,span{
        display:inline-block;
        margin-right:6px;
        width:22px;
        height:20px;
        background:url('~@/assets/cainixiangkan_bg.png') no-repeat 0px 0px;
        vertical-align: middle;

      }
      .icon1{
        background-position: -38px 0px;
      }
      .icon2{
        background-position: -76px 0px;
      }
      .more{
        background-position: -116px 0px;
        position:absolute;
        top:20px;right:5px;
      }
      a{
        color:#496b8e;font-weight:bold;line-height:60px;
      }
    }
    li:last-child{margin-right:0px;}
  }
</style>
