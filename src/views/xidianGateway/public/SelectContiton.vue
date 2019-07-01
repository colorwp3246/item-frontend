<template>
  <div class="selectionContiton">

  </div>
</template>
<script>
  export default {
    data(){
      return{
        choiceBox:[null,null,null,null,null,null,null],
        choiceClear:"",
        choice:[
          {
            title:'学历',
            active:null,
            serveList:['本科','硕士','博士'],
          },
          {
            title:'性别',
            active:null,
            serveList:['男','女']
          },
          {
            title:'在校',
            active:null,
            serveList:['在校','离校']
          },
          {
            title:'获奖情况',
            active:null,
            serveList:['网上办事','信息查询','教务系统','数据服务','学习资源','效能评价','咨询建议','故障保修']
          },
          {
            title:'留学情况',
            active:null,
            serveList:['网上办事','信息查询','教务系统','数据服务','学习资源','效能评价','咨询建议','故障保修']
          },
          {
            title:'所属部门',
            active:null,
            serveList:['本科生院 ','本科生院 ','本科生院','本科生院','本科生院','本科生院 ','本科生院','本科生院','本科生院','本科生院 ','本科生院','本科生院','本科生院','本科生院','本科生院','本科生院']
          }
        ],
        defaultTitle:[]
      }
    },
    watch:{
      choiceBox:{
      handler(newVal,oldVal) {
        let arr=[]
        newVal.forEach((item,index)=>{
          this.choice.forEach((ite,ind)=>{
            if(ite.serveList.includes(item)===true&&index===ind){
              arr.push(ite.title)
            }
          })
        })
        this.$emit("tabHead",{arr,newVal})
        console.log(arr,'监听数组')
    },
    deep: true
  }

  },
    methods:{
      choiceClick(i,k,n){ //筛选
        this.choice[i].active=k;
        // this.choiceBox[i]=n;
        this.choiceBox.splice(i,1,n)
        this.choiceClearKey();
      },
      choiceAll(i){     //筛选全部
        this.choice[i].active=null;
        // this.choiceBox[i]=null;
        this.choiceBox.splice(i,1,null)
        this.choiceClearKey()
      },
      deleteChoiceKey(i){ //删除赛选
        this.choiceBox.splice(i,1,null)
        // this.choiceBox[i]=null;
        this.choice[i].active=null;
        console.log('次数'+i)
        this.choiceClearKey()
      },
      deleteChoiceAll(){  //清除全部
        this.choiceBox=[];
        // this.choice[0].active=this.choice[1].active=this.choice[2].active=this.choice[3].active=null;
        this.choice.forEach(item=>item.active=null)
        this.choiceClearKey()
      },
      choiceClearKey(){ //显示/隐藏全部清除按钮
        if(this.choiceBox[0]==null&&this.choiceBox[1]==null&&this.choiceBox[2]==null&&this.choiceBox[3]==null){
          this.choiceClear= false;
        }else{
          this.choiceClear= true;
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@/styles/gatewayBase.scss";
 .selectionContiton{
   width: 100%;

 }
</style>
