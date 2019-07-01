<template>
  <div class="FullService">
    <!--header-->
    <AfterLandingOther :inputSearchShow="true"></AfterLandingOther>

    <!--banner-->
    <xdBannerOther :title="titleText"
                   :tab="false"
                   :bgImg="bgImg"></xdBannerOther>

    <!--筛选条件-->
    <div class="FullService-choice main">
      <div class="service-choice-box choice-key">
        <span class="choice-title">已选条件</span>
        <div class="choice-item-box clear">
          <span class="choice-key-item" v-for="(choiceKey,index) in choiceBox" :key="index" v-if="choiceKey">
            {{choiceKey}}
            <i class="delete-choice-key" @click="deleteChoiceKey(index)">&times;</i>
          </span>
          <span class="choice-key-clear" v-if="choiceClear" @click="deleteChoiceAll">· 清除全部</span>
        </div>
      </div>
      <div class="service-choice-box" v-for="(item,index) in choice" :key="index">
        <span class="choice-title">{{item.serviceTypeName}}</span>
        <div class="choice-item-box clear">
          <span class="choice-item" :class="item.active===''?'active':''" @click="choiceAll(index)">全部</span>
          <span class="choice-item" :class="item.active===key?'active':''" @click="choiceClick(index,key,serveItem)" v-for="(serveItem,key) in item.labels" :key="key">{{serveItem.labelName}}</span>
        </div>
      </div>
    </div>

    <div class="FullService-content main">
      <div class="borderBottom">
        <span class="noselect" ref="sortEl" v-for="(item,index) in choiceTitle.choiceTitleList" :key="index" @click="choiceSearch(index,$event)">
          {{item.title}}
          <i class="choiceArrow"></i>
        </span>
        <div class="fr choiceTip">
          共<span>{{total}}</span>个相关服务
        </div>
      </div>
      <div v-if="choiceList && choiceList.length>0">
        <div class="choiceList-item" v-for="(item,index) in choiceList" :key="index"><!--:class="index==0?'active':''"-->
          <span class="choiceList-title">
            <img src="arrowTip" alt="">
            {{item.app_NAME}}
          </span>
          <span class="choiceList-department">所属：{{item.department}}</span>
          <span class="choiceList-score">
            <i v-for="cell in item.score" class="Stars Stars-solid"></i>
            <i v-for="cell in (5-item.score)" class="Stars"></i>
            {{item.score}}分
          </span>
          <div class="choiceList-Matter">
            <span class="hoverBorder matter-details" @click="appGo(item.cell.details.app_URL,item.cell.details.app_NAME,item.cell.details.app_ID)"><i></i>查看详情</span>
            <span class="hoverBorder matter-handle" :class="item.cell.handle==true?'':'handFalse'"><i></i>在线办理</span>
            <span class="hoverBorder matter-collection"><i :class="item.cell.collection==true?'collectionTrue':''"></i>收藏</span>
          </div>
        </div>
      </div>
      <div v-else class="dataUpData">
        <span v-if="choiceList.length==0">查询结果为空</span>
      </div>

      <Pagination :pageAll="pageAll" @pageInfo="pageInfo"></Pagination>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import AfterLandingOther from '../../public/AfterLandingOther'
  import xdBannerOther from '../../public/BannerOther'
  import Pagination from '../../public/Pagination'
  import Footer from '../../public/Footer'
  import {getparentLlabel,getlabelbyparentoriginId} from  '@/api/gateway'
  export default {
    name: "FullService",
    components:{
      AfterLandingOther,
      xdBannerOther,
      Pagination,
      Footer
    },
    data(){
      return{
        arrowTip:`${process.env.PICTURE_SERVE}/file?fileId=d2f7b73ba1814ae187e8671e217f8bd7`,
        titleText:'网上办事全服务大厅',
        bgImg:`${process.env.PICTURE_SERVE}/file?fileId=b3b700a5393542e9b1f8fc9150470148`,
        choiceBox:[null,null,null,null],  //赛选条件信息
        ChoiceKeyArr:[],    //赛选条件id
        choiceClear:false,  //全部清除按钮显示/隐藏
        loading:true, //加载中
        orderBy:['appName'],
        choice:[],
        choiceTitle:{
          active:null,
          choiceTitleList:[ //0未选中顺序，1未选中倒序,2选中顺序，3选中倒序
            // {title:'最近使用量',sort:0},
            // {title:'总使用量',sort:0},
            // {title:'首字母',sort:0},
            // {title:'评分',sort:0},
            {title:'名称',sort:0}
          ]
        },
        choiceList:[
          {app_NAME:'学生基本信息管理',department:'教育教学',score:4,cell:{details:true,handle:true,collection:false}},
          {app_NAME:'学生基本信息管理',department:'教育教学',score:0,cell:{details:true,handle:false,collection:true}},
          {app_NAME:'学生基本信息管理',department:'教育教学',score:2,cell:{details:true,handle:true,collection:true}},
          {app_NAME:'学生基本信息管理',department:'教育教学',score:3,cell:{details:true,handle:true,collection:false}},
          {app_NAME:'学生基本信息管理',department:'教育教学',score:5,cell:{details:true,handle:false,collection:true}},
          {app_NAME:'学生基本信息管理',department:'教育教学',score:1,cell:{details:true,handle:true,collection:false}},
          {app_NAME:'学生基本信息管理',department:'教育教学',score:3,cell:{details:true,handle:false,collection:true}},
          {app_NAME:'学生基本信息管理',department:'教育教学',score:4,cell:{details:true,handle:true,collection:false}},
          {app_NAME:'学生基本信息管理',department:'教育教学',score:2,cell:{details:true,handle:false,collection:true}},
          {app_NAME:'学生基本信息管理',department:'教育教学',score:0,cell:{details:true,handle:true,collection:true}},
        ],
        pageItem:10,  //每页数据条数
        pageAll: 0,   //总页数
        total:0,      //总条数
        upData:false  //正在查询显示/隐藏
      }
    },
    created(){
      this.getCondition();
      this.getApplication();
      this.init()
    },
    methods:{
      init(){
        getparentLlabel().then(res=>{
          console.log(res)
          if(res.data.code===200){
            console.log(res.data.data)
            this.choice=res.data.data
            this.choiceBox=new Array(this.choice.length).fill("")
          }
        })
      },
      choiceClick(i,k,n){ //筛选
        this.choice[i].active=k;
        // this.choiceBox[i]=n;
        this.choiceBox.splice(i,1,n.labelName)
        let params={
          labelOriginId:n.labelOriginId
        }
        getlabelbyparentoriginId(params).then(res=>{
          console.log(res,'子集数据')
        })
        this.choiceClearKey();

      },
      choiceAll(i){//筛选全部
        this.choice[i].active="";
        // this.choiceBox[i]=null;
        this.choiceBox.splice(i,1,"")
        this.choiceClearKey()
      },
      deleteChoiceKey(i){ //删除赛选
        this.choiceBox.splice(i,1,'')
        this.choice[i].active=''
        // this.choiceBox[i]=null;
        // this.choice[i].active=null;

        this.choiceClearKey()
      },
      deleteChoiceAll(){  //清除全部
        this.choiceBox=new Array(this.choice.length).fill("");
        // this.choice[0].active=this.choice[1].active=this.choice[2].active=this.choice[3].active=null;
        this.choice.forEach(item=>item.active="")
        this.choiceClearKey()
      },
      choiceClearKey(){ //显示/隐藏全部清除按钮
        if(this.choiceBox[0]==""&&this.choiceBox[1]==""&&this.choiceBox[2]==""&&this.choiceBox[3]==""){
          this.choiceClear= false;
        }else{
          this.choiceClear= true;
        }
        let ChoiceKeyArr = [];
        for (let i =0;i<=this.choiceBox.length;i++){
          if(this.choiceBox[i]){
            ChoiceKeyArr.push(this.choiceBox[i].label_ID);
          }
        }
        this.ChoiceKeyArr = ChoiceKeyArr;
        console.log(this.ChoiceKeyArr);
        for (let j=0;j<=this.$refs.sortEl.length-1;j++){  //筛选重置排序箭头为默认排序
          this.$refs.sortEl[j].classList.remove('choiceArrowActiveTop');
          this.$refs.sortEl[j].classList.remove('choiceArrowActiveBottom');
        }
        this.searchChoice(this.ChoiceKeyArr,'')
      },
      getCondition(){ //默认请求搜索条件
      },
      getApplication(){ //默认请求应用数据
        // this.choiceList=[];
        this.upData=true;
        let parmaObj = {
          pageNum:1,
          pageSize:this.pageItem,
          orderStandesc:"appId asc"
        };
      },
      searchChoice(ChoiceKey,orderPower){  //条件搜索

      },
      pageInfo(pageInfo){ //点击分页
        console.log(pageInfo[0])
        let parmaObj = {
          pageNum:pageInfo[0],
          pageSize:this.pageItem,
          orderStandesc:"appId asc"
        }
      },
      appGo(url,name,id) {  //进入应用界面
        this.$router.push({
          path: '/Application',
          name: 'Application',
          query: {
            title: name,
            appId: id,
            href: url,
          }
        })
      },
      choiceSearch(index,event){ //排序按钮
        console.log(index,event,'看看')
        console.log(this.$refs.sortEl)
        this.choiceTitle.active = index;
        let spanArr = event.currentTarget.classList;

        //设置当前元素兄弟元素
        for (let j=0;j<=this.$refs.sortEl.length-1;j++){
          if(index == j){ //如果为当前退出
            continue;
          }
          if(this.$refs.sortEl[j].className.indexOf('choiceArrowActiveTop')>-1){//如果为选中顺序
            this.$refs.sortEl[j].classList.remove('choiceArrowActiveTop');      //移除选中顺序class类
            this.choiceTitle.choiceTitleList[index].sort = 0;                   //设置为选中顺序标志
          }else if(this.$refs.sortEl[j].className.indexOf('choiceArrowActiveBottom')>-1){//如果为选中倒序
            this.$refs.sortEl[j].classList.remove('choiceArrowActiveBottom');   //移除选中倒序class类
            this.$refs.sortEl[j].classList.add('choiceArrowBottom');            //移除未选中倒序class类
            this.choiceTitle.choiceTitleList[index].sort = 1;                   //设置为选中顺序标志
          }
          if(this.choiceTitle.choiceTitleList[j].sort == 2){  //如果标志为选中顺序
            this.choiceTitle.choiceTitleList[j].sort = 0;     //设置标志为未选中顺序
          }else if(this.choiceTitle.choiceTitleList[j].sort == 3){//如果标志为选中倒序
            this.choiceTitle.choiceTitleList[j].sort = 1;     //设置标志为未选中倒序
          }
        }
        //设置当前元素
        if(this.choiceTitle.choiceTitleList[index].sort==0 ||this.choiceTitle.choiceTitleList[index].sort==3){// 如果为初始值或者选中倒序
          spanArr.remove("choiceArrowActiveBottom");  //移除选中倒序class类
          spanArr.remove("choiceArrowBottom");        //移除未选中倒序class类
          spanArr.remove("choiceArrowTop");           //移除未选中顺序class类
          spanArr.add("choiceArrowActiveTop");        //设置未选中顺序class类
          this.choiceTitle.choiceTitleList[index].sort = 2; //设置为选中顺序标志
        }else if(this.choiceTitle.choiceTitleList[index].sort==2 ||this.choiceTitle.choiceTitleList[index].sort==1){//如果选中顺序
          spanArr.remove("choiceArrowActiveTop");   //删除选中顺序class类
          spanArr.remove("choiceArrowTop");         //删除未未选中倒序class类
          spanArr.remove("choiceArrowBottom");      //删除未选中倒序class类
          spanArr.add("choiceArrowActiveBottom");   //添加选中倒序class类
          this.choiceTitle.choiceTitleList[index].sort = 3;//设置为选中倒序标志
        }

        let sortArr=[];   //排序标志数字
        for (let k=0;k<=this.choiceTitle.choiceTitleList.length-1;k++) {
          sortArr.push(this.choiceTitle.choiceTitleList[k].sort);
        }
        // this.searchChoice(this.ChoiceKeyArr,`${this.orderBy[index]} ${sortArr[index]==2?'desc':'asc'}`)
      }
    },
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .FullService{
    .FullService-choice{
      box-shadow: $infBoxShadow;
      position: relative;
      padding: 20px;
      margin: 25px auto;
      &:hover{
        box-shadow: $boxShadowHover;
        transition: all .3s;
      }
      .choice-key{
        border-bottom: 1px solid $footerBgLine;
        .choice-key-item{
          font-size: 15px;
          color: $ModuleTitle;
          margin-top: 4px;
          margin-right: 20px;
          padding: 2px 2px 2px 10px;
          cursor: pointer;
          height: 26px;
          line-height: 18px;
          border-radius: $borderRadius;
          border: 1px solid $choiceBorder;
          background-color: $choiceBg;
          .delete-choice-key{
            display: inline-block;
            width: 16px;
            text-align: center;
            font-style: normal;
            color: $choiceColor;
            height: 21px;
            font-size: 18px;
          }
        }
        .choice-key-clear{
          color: $choiceClear;
          margin-top: 5px;
          cursor: pointer;
        }
      }
      .service-choice-box{
        margin: 6px 0;
        position: relative;
        min-height: 40px;
        .choice-title{
          color: $ModuleTitle;
          font-size: 15px;
          font-weight: bold;
          margin-right: 30px;
          position: absolute;
          top: 9px;
          left: 0;
          cursor: pointer;
        }
        .choice-item-box{
          margin-left: 100px;
          &>span{
            float: left;
          }
          .choice-item{
            font-size: 15px;
            color: $ModuleTitle;
            margin-top: 4px;
            margin-right: 20px;
            padding: 3px 14px;
            cursor: pointer;
            border:1px solid transparent;
            &:hover{
              border:1px solid $choiceBorder;
              border-radius: $borderRadius;
              background-color: $choiceBg;
            }
            &.active{
              background-color: $active;
              color: #ffffff;
              border-radius: $borderRadius;
            }
          }
        }

      }
    }

    .FullService-content{
      .borderBottom{
        line-height: 40px;
        &>span{
          font-size: 16px;
          margin-right: 20px;
          cursor: pointer;
        }
        .choiceArrowBottom { //未选中倒序
          .choiceArrow {
            background-position: -14px 1px;
          }
        }
        .choiceArrowActiveBottom{ //选中倒序
          .choiceArrow{
            background-position: -14px -17px;
          }
        }
        .choiceArrowActiveTop{ //选中顺序
          .choiceArrow{
            background-position: 2px -17px;
          }
        }
        .choiceArrowTop{ //选中顺序
          .choiceArrow{
            background-position: 2px 1px;
          }
        }

        .choiceArrow{ //未选中顺序
          width: 20px;
          height: 20px;
          display: inline-block;
          background: url("http://www.zq100.com/api/files/file?fileId=3c3dc0c8dcee49b1bb92dcf9e045c7f4");
          background-repeat: no-repeat;
          position: relative;
          top: 3px;
          left: -4px;
          background-position: 2px 1px;
        }
        .choiceTip{
          span{
            color: $active;
          }
        }
      }
      .choiceList-item{
        height: 70px;
        padding-top: 25px;
        border-bottom: 1px solid $choiceListBorder;
        overflow: hidden;
        &:hover{
          height: 120px;
          background-color: $heardSearchBg;
        }
        &.active{
          height: 120px;
          background-color: $heardSearchBg;
        }
        .choiceList-Matter{
          padding: 27px 22px;
          span{
            padding: 3px 8px;
            border-radius: $borderRadius;
            font-size: 14px;
            color: $choiceColor;
            margin-right: 10px;
            cursor: pointer;
            &:hover{
              background: $choiceListBorder;
            }
            i{
              display: inline-block;
              width: 20px;
              height: 18px;
              position: relative;
              top: 5px;
              background: url("http://www.zq100.com/api/files/file?fileId=2bab692a2c894887b8ca114d7f23ada6");
              background-repeat: no-repeat;
            }
            &.matter-details{
              i{
                background-position: 1px -1px;
              }
            }
            &.matter-handle{
              i{
                background-position: -21px -1px;
              }
            }
            &.matter-collection{
              i{
                background-position: -44px -1px;
                &.collectionTrue{
                  background-position: -65px -1px;
                }
              }
            }
          }
        }
        .choiceList-title{
          padding-left: 8px;
          font-size: 16px;
          width: 550px;
          display: inline-block;
        }
        .choiceList-department{
          font-size: 16px;
        }
        .choiceList-score{
          display: inline-block;
          float: right;
          width: 150px;
          font-size: 16px;
          .Stars{
            display: inline-block;
            position: relative;
            top: 2px;
            width: 18px;
            height: 18px;
            background: url("http://www.zq100.com/api/files/file?fileId=9dc11e19d13440f8b3a6cda948f270b3");
            background-repeat: no-repeat;
            &.Stars-solid{
              background-position: -20px 0;
            }
          }
        }
      }
    }
  }
</style>
