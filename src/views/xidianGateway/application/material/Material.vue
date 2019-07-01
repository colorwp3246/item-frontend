<!--申请材料-->
<template>
  <div class="Material main">
    <ModuleTitle moduleTitle="申请材料"></ModuleTitle>
    <div class="materialItems" v-for="(item, index) in material" :key="index">
      <h2>
        <img class="itemsPng" :src="items" alt="">
        {{item.title}}
      </h2>
      <ul class="materialCell">
        <li v-for="(value, indexOf) in item.items" :key="indexOf">{{indexOf+1}}、{{value}};</li>
      </ul>
    </div>
    <div class="materialItems">
      <h2>
        <img class="itemsPng" :src="items" alt="">
        申请材料目录
      </h2>
      <table class="materialTable materialTableTh">
        <tr v-for="(item, index) in materialTableTh" :key="index">
          <td class="names">{{item.names}}</td>
          <td class="source">{{item.source}}</td>
          <td class="types">{{item.types}}</td>
          <td class="numbers">{{item.numbers}}</td>
          <td class="forms">{{item.forms}}</td>
          <td class="marks">{{item.marks}}</td>
          <td class="necessity">{{item.necessity}}</td>
          <td class="exampleTable">{{item.exampleTable}}</td>
          <td class="blankTable">{{item.blankTable}}</td>
        </tr>
      </table>
      <table class="materialTable">
        <tr v-for="(item, index) in materialTable" :key="index">
          <td class="names textLeft">{{item.names}}</td>
          <td class="source">{{item.source}}</td>
          <td class="types">{{item.types}}</td>
          <td class="numbers">{{item.numbers}}</td>
          <td class="forms">{{item.forms}}</td>
          <td class="marks">{{item.marks}}</td>
          <td class="necessity">{{item.necessity}}</td>
          <td class="exampleTable">
            <button v-if="item.exampleTable" class="change hoverTop">下载查看</button>
          </td>
          <td class="blankTable">
            <button v-if="item.blankTable" class="change hoverTop">表格查看</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  export default {
    name: "Material",
    props:{
      'material':{
        type:Array
      },
      'materialTableTh':{
        type:Array
      },
      'materialTable':{
        type:Array
      }
    },
    data(){
      return{
        items:`${process.env.PICTURE_SERVE}/file?fileId=b341615442b74131a362e730adb01a1d`,
      }
    },
    components:{
      ModuleTitle
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.Material{
  .materialItems{
    margin-bottom:30px;
    .materialTable{
      border-spacing: 0;
      border-collapse: collapse;
      &.materialTableTh{
        background-color: $materialTableTh;
        margin-top: 20px;
      }
      td{
        border: 1px solid $mateTableBorder;
        font-size: 15px;
        color: $ModuleTitle;
        height: 50px;
        padding: 0 10px;
        text-align: center;
        &.textLeft{
          text-align: left;
        }
      }
      .names{
        width: 322px;
      }
      .source{
        width: 114px;
      }
      .types{
        width: 106px;
      }
      .numbers{
        width: 112px;
      }
      .forms{
        width: 102px;
      }
      .marks{
        width: 112px;
      }
      .necessity{
        width: 104px;
      }
      .exampleTable{
        width: 114px;
      }
      .blankTable{
        width: 114px;
      }
    }
    h2{
      font-size: 16px;
      font-weight: bold;
      margin: 20px 0 6px 0;
      position: relative;
      padding-left: 36px;
      .itemsPng{
        position: absolute;
        top: -4px;
        left: 0;
      }
    }
    .materialCell{
      li{
        line-height: 38px;
        font-size: 15px;
      }
    }
  }
}
</style>
