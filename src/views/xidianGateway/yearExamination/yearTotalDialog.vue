<template>
  <div class="yearTotalDialog">
    <el-dialog title="个人年度业绩总汇" :visible.sync="dialogTableVisible" width="820px" :close-on-click-modal="false" :show-close="false" >
      <div slot="title" class="header-title">
        <div class="title-name fl">个人年度业绩总汇</div>
        <div class="title-age fr"><i class="el-icon-close" @click="closeTable"></i></div>
      </div>
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <td>年度业绩汇总</td>
            <td>教学业绩点</td>
            <td>科研业绩点</td>
            <td>综合业绩点</td>
            <td>岗位业绩指标</td>
            <td>是否合格</td>
          </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in dataArr" :key="index">
          <td>{{item.year}}</td>
          <td>{{item.points[0].point}}</td>
          <td>{{item.points[1].point}}</td>
          <td>{{item.sumOfPoint}}</td>
          <td>{{item.sumOfStandard}}</td>
          <td>{{item.status}}</td>
        </tr>
        </tbody>
      </table>
    </el-dialog>
  </div>
</template>
<script>
  import {getYears} from '@/api/annualreview'
  export default {
    props:['dialogTableVisible'],
    data(){
      return{
        dataArr: [
          {
            "year": "2019年",
            "points": [
              {
                "name": "教学",
                "point": 2.1,
                "standard": 10
              },
              {
                "name": "科研",
                "point": 2.29,
                "standard": 12
              }
            ],
            "sumOfPoint": 4.4,
            "status": "不达标",
            "sumOfStandard": 22
          }
        ]
      }
    },
    mounted(){
      this.init()
    },
    methods:{
      closeTable(){
        // let state=this.dialogTableVisible
        this.$emit('tableClose',this.dialogTableVisible)
        console.log(this.dialogTableVisible)
      },
      init(){
        getYears().then(res=>{
          console.log(res)
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .yearTotalDialog/deep/{
    .header-title{
      margin-bottom: 15px;
      .title-name{
        font-size: 18px;
      }
    }
    .el-dialog__header{
      /*padding:0 20px;*/
    }
    .el-dialog__body{
      padding:5px 20px;
      padding-bottom: 20px;
      table{
        thead{
          tr{
            line-height: 40px;
            background-color:#d2d2d2;
          }
        }
        tbody{
          tr{
            line-height: 40px;
          }
        }
      }
    }
  }
</style>
