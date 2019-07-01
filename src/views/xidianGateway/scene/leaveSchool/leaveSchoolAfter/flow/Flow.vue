<template>
  <div class="flow main">
    <div class="recomHeard">
      <ModuleTitle :moduleTitle="flowList.flowTitle"></ModuleTitle>
      <span class="tip">
        <!--办理时长天-->
      </span>
    </div>
    <div class="noMassage" v-if="flowList.flow.length==0">没有离校数据</div>
    <div class="flowBox" v-else>
      <div class="flowExplain">
        <span class="flowExplain-title">您的手续办理情况:</span>
        <span class="flowExplain-item" v-for="(item,index) in flowList.explain" :key="index">
          <img :src="item.icon" alt="">{{item.title}}
        </span>
      </div>
      <dl class="flowList" v-for="(item,index) in flowList.flow" :key="index" :class="index==flowList.flow.length-1?'last':''">
        <div class="line"></div>
        <dt>
          <div class="flowItem">
            <img :src="flowList.explain[item.complete].icon" alt="">
            {{item.title}}
            <span class="mark" @click="modelAlert(index)">
            <img src="mark"/>
            办理详情
          </span>
          </div>
        </dt>
        <dd v-for="(cell,key) in item.list" :key="key" class="flowCell" v-if="cell.title">
          {{key+1}}、{{cell.title}}
          <img src="flowFinish" alt="" v-if="cell.complete">
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
  import ModuleTitle from '../../../../public/ModuleTitle'
  import HandlingDetails from '../../../../scene/scenePublice/alert/HandlingDetails'
  export default {
    name: "Flow",
    props:{
      flowList:{
        type:Object
      }
    },
    data(){
      return{
        mark:`${process.env.PICTURE_SERVE}/file?fileId=f1bb7da298ba4d0586d41d67e209b6fa`,
        flowFinish:`${process.env.PICTURE_SERVE}/file?fileId=80395ca9beb44d8aab4225867e8e54c0`,
        detailsList:{
          baseInfo:[
            {
              title:'基本信息',
              describe:[]
              // describe:['此处为宿舍手续办理基本介绍，此处为宿舍手续办理基本介绍此处为宿舍手续办理基本介绍，此处为宿舍手续办理基本介绍此处为宿舍手续办理基本介绍此处为宿舍手续办理基本介绍，宿舍手续必须在财务手续办理完成后才可以办理。']
            }
          ],
          matter:[
            {
              title:'办理事项',
              items:[
                {item:'样例下载',title:'在楼管办理退宿（如果是在职，办理需要提供相应证明文件方可办理'},
                {item:'立即缴费',title:'缴清水电费，您当前欠费86元 '},
              ]
            }
          ],
          explain:[
            {
              title:'办理说明',
              items:[
                {title:'办理地点：所在学生公寓'},
                {title:'办理时间：6月19~6月30  （周一至周五：上午8：00—12：00、下午14：00—18：00）'},
                {title:'咨询电话：029-XXXXXXX ; 029-XXXXXXX'}
              ]
            }
          ],
          flow:[
            {
              title:'办理流程',
              items:[
                {describe:'此处为流程简单说明此处为流程简单说明',title:'网上办理流程',item:'查看流程图'},
                {describe:'此处为流程简单说明此处为流程简单说明',title:'窗口办理流程',item:'查看流程图'},
              ]
            }
          ],
          problem:[
            {
              title:'常见问题',
              items:[
                {list:'问题一',problem:'此处为办理过程中常见问题此处为办理过程中常见问题? ',answer:'此处为问题专业解答'},
                {list:'问题二',problem:'此处为办理过程中常见问题此处为办理过程中常见问题? ',answer:'此处为问题专业解答'},
              ]
            }
          ],
          recommend:{
            title:'相关推送'
          }
        }
      }
    },
    components:{
      ModuleTitle
    },
    methods:{
      modelAlert(i){
        if(this.flowList.flow[i].title.indexOf('财务') !=-1){
          this.detailsList.baseInfo[0].describe[0]='财务手续办理';
          this.detailsList.matter[0].items[0]='缴清学费';
          this.detailsList.matter[0].items[1]='缴清住宿费';
        }else if(this.flowList.flow[i].title.indexOf('宿舍')!=-1){
          this.detailsList.baseInfo[0].describe[0]='宿舍手续办理';
          this.detailsList.matter[0].items[0]='在楼管办理退宿（如果是在职，办理需要提供相应证明文件方可办理）';
          this.detailsList.matter[0].items[1]='缴清水电费';
        }else if(this.flowList.flow[i].title.indexOf('欠书')!=-1){
          this.detailsList.baseInfo[0].describe[0]='图书馆欠费欠书'
        }else if(this.flowList.flow[i].title.indexOf('论文')!=-1){
          this.detailsList.baseInfo[0].describe[0]='图书馆论文提交'
        }else if(this.flowList.flow[i].title.indexOf('贷款')!=-1){
          this.detailsList.baseInfo[0].describe[0]='图书馆论文提交'
        }else if(this.flowList.flow[i].title.indexOf('户口')!=-1){
          this.detailsList.baseInfo[0].describe[0]='户口迁移证办理'
        }else if(this.flowList.flow[i].title.indexOf('医疗')!=-1){
          this.detailsList.baseInfo[0].describe[0]='医疗手续办理'
        }else if(this.flowList.flow[i].title.indexOf('实验室')!=-1){
          this.detailsList.baseInfo[0].describe[0]='实验室手续办理'
        }else if(this.flowList.flow[i].title.indexOf('派遣')!=-1) {
          this.detailsList.baseInfo[0].describe[0]='派遣证发放'
        }
        this.$layer.iframe({
          content: {
            content: HandlingDetails,
            parent: this,
            data:{
              details:JSON.stringify(this.detailsList)
            },
          },
          area:['970px',"700px"],
          title: this.flowList.flow[i].title+'详情',
          // shadeClose: false,//点击遮罩是否关闭
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
.flow{
  .noMassage{
    text-align: center;
    margin: 40px 0;
    color: $hallTextColor;
    font-size: 16px;
  }
  .recomHeard {
    position: relative;
    .tip {
      position: absolute;
      right: 0;
      bottom: 9px;
      font-size: 16px;
      color: $leaveMoreColor;
      cursor: pointer;
    }
  }
  .flowBox{
    .flowExplain{
      margin: 30px 0;
      font-size: 18px;
      .flowExplain-title{
        margin-right: 12px;
        font-size: inherit;
      }
      .flowExplain-item{
        font-size: inherit;
        margin-right: 50px;
        img{
          position: relative;
          top: 5px;
          margin-right: 4px;
        }
      }
    }
    .flowList{
      position: relative;
      padding:  0 10px 30px 0;
      &:before{
        content: '';
        height: 100%;
        position: absolute;
        left: 10px;
        top: 20px;
        display: inline-block;
        border-left: 1px solid $heardLine;
        z-index: -1;
      }
      &.last:before{
        border-left: none;
      }
      dt{

        position: relative;
        z-index: 5;
        .flowItem{
          font-size: 20px;
          color: $ModuleTitle;
          padding-bottom: 10px;
          border-bottom: 1px dashed $heardLine;
          width: 1170px;
          margin-left: 30px;
          img{
            position: absolute;
            left: 0;
            top: 3px;
          }
        }
        &>img{
          position: relative;
          top: 5px;
          margin-right: 6px;
        }
        .mark{
          font-size: 16px;
          color: $ModuleTitle;
          float: right;
          cursor: pointer;
          img{
            position: relative;
            top: 6px;
          }
          &:hover{
            color: $active;
            transition: $transition;
          }
        }
      }
      .flowCell{
        padding: 0 120px 0 34px;
        font-size: 15px;
        color: $ModuleTitle;
        line-height: 34px;
        img{
          margin-left: 10px;
          position: relative;
          top: 3px;
        }
      }
    }
  }
}
</style>
