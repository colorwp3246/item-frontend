<template>
    <div class="hall main">
      <!--<ModuleTitle moduleTitle="场景式服务"></ModuleTitle>-->
      <div class="hall-list-box">
        <div class="mis-slider-content clear">
          <my-class :class-option="classOption3" class="scrollWarp" v-if="singleArr" :data="singleArr">
            <span class="scrollTip" v-if="singleArr.length>1" slot="left-switch" @mouseover="hallNextOver()" @mouseout="hallNextOut()">
              <img :src="hallPreV1" v-if="showTrue" alt="">
              <img :src="hallPrevH" v-else alt="">

            </span>

            <div class="hallItem clear" :style="{width:singleArr.length*1200+'px'}">
              <div class="hallItemCell" v-for="(items, index) in singleArr" :key="index">
                <ul class="hall-list clear">
                  <li v-for="(item, index) in items" :key="index" v-if="item" @click="scene(item)" :title="item.title">
                    <span>
                      <img :src="item.icon" alt="">
                      <div class="hall-text">{{item.title}}</div>
                      <p class="hall-text">{{item.explain}}</p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <span class="scrollTip" v-if="singleArr.length>1" slot="right-switch" @mouseover="hallNextOver()" @mouseout="hallNextOut()">
              <img :src="hallNext1" v-if="showTrue" alt="">
              <img :src="hallNextH" v-else alt="">
            </span>
          </my-class>

          <!--<div class="mis-slider-item">
            <ul>
              <li v-for="(item, index) in ApplyList" :class="index==sliderCounter?'active':''" @click="clickItem(index,$event)"></li>
            </ul>
          </div>-->
        </div>
      </div>
    </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  import MyClass from '../../public/MyClass'
  export default {
    props:{
      singleArr:{
        type:Array,
        default:[]
      }
    },
    name: "Hall",
    components:{
      ModuleTitle,
      MyClass
    },
    data(){
      return{
        hallPreV1:`${process.env.PICTURE_SERVE}/file?fileId=477cfd40f49a41d18065bcde8c02c6b0`,
        hallPrevH:`${process.env.PICTURE_SERVE}/file?fileId=eff4718ee6cf4ac1b1bb6296afd5a2ba`,
        hallNext1:`${process.env.PICTURE_SERVE}/file?fileId=e85b8a4796b04ee3a6988ed141841431`,
        hallNextH:`${process.env.PICTURE_SERVE}/file?fileId=b89f2dec87b644258db0bc1f631d57a2`,
        ListNumber:4,
        //ApplyList:null,
        showTrue:true,  //hover按钮显示控制
      }
    },
    computed:{
      classOption3 () {
        return {
          autoPlay: false,  //是否为自动切换
          switchSingleStep:1200,  //切换宽度
          switchOffset:0    //按钮位置
        }
      },
    },
    created() {

    },
    methods:{
      hallNextOver: function () { //鼠标移上按钮
        this.showTrue =!this.showTrue;
      },
      hallNextOut: function () { //鼠标移出按钮
        this.showTrue =!this.showTrue;
      },
      scene(item){
        console.log(item)
        if(item.sceneType){
          if(item.sceneType===1){
            console.log('0')
            this.$router.push({path:'/LeaveSchoolBefore'})
          }else if(item.sceneType===2){
            console.log('1')
            this.$router.push({path:'/EntryBefore'})
          }else if(item.sceneType===3){
            this.$router.push({path:'/message'})
          }
        }
        if(item.sceneTypeAfter){
          if(item.sceneTypeAfter===1){
            this.$router.push({path:'/LeaveSchoolAfter'})
          }else if(item.sceneTypeAfter===2){
            this.$router.push({path:'/EntryAfter'})
          }else if(item.sceneTypeAfter===3){
            this.$router.push({path:'/messageAfter'})
          }
          else if(item.sceneTypeAfter===4){
            this.$router.push({path:'/yearExamination'})
          }
        }
        // if(JSON.parse(sessionStorage.getItem('xd_userList'))){
        //   if(JSON.parse(sessionStorage.getItem('xd_userType')) ==1 && types==1){
        //     this.$router.push(`${href}After`)
        //   }else if(JSON.parse(sessionStorage.getItem('xd_userType')) ==1 && types==2){
        //     this.$router.push(`${href}Before`)
        //   }else if(JSON.parse(sessionStorage.getItem('xd_userType')) !=1 && types==2){
        //     this.$router.push(`${href}After`)
        //   }else if(JSON.parse(sessionStorage.getItem('xd_userType')) !=1 && types==1){
        //     this.$router.push(`${href}Before`)
        //   }else if(types==0){
        //     this.$router.push(`${href}`)
        //   }
        // }else{
        //   if(types==0){
        //     this.$router.push(`${href}`)
        //   }else{
        //     this.$router.push(`${href}Before`)
        //   }
        // }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .hall-list-box{
    margin-top: 10px;
    position: relative;
    .hall-power{
      position: absolute;
      &:hover{
        cursor: pointer;
      }
      &.hall-prev{
        left: -74px;
        top: 43%;
      }
      &.hall-next{
        right: -74px;
        top: 43%;
      }
    }
    .scrollWarp{
      width: 1200px !important;
      max-height: 606px;
      overflow: hidden;
      .scrollTip{
        cursor: pointer;
      }
      .hallItem{
        .hallItemCell{
          float: left;
          width: 1200px;
        }
      }
    }
    .mis-slider-item{
      position: absolute;
      bottom: -18px;
      width: 100%;
      text-align: center;
      ul{
        display: inline-block;
        li{
          float: left;
          margin: 0 5px;
          width: 20px;
          height: 4px;
          line-height: 20px;
          background-color: $hallSliderItemBg;
          display: inline-block;
          font-size: 12px;
          &:hover{
            cursor: pointer;
          }
          &.active{
            background-color: $hallSliderActiveBg;
          }
        }
      }
    }
    .hall-list{
      display: table;
      width: calc(100% + 26px);
      table-layout: fixed;
      li{
        float: left;
        width: 298px;
        height: 290px;
        margin-left: 5px;
        margin-top: 10px;
        display: table-cell;
        &>span{
          height: 280px;
          width: 280px;
          display: inline-block;
          box-shadow: $boxShadow;
          position: relative;
          top: 0;
          &:hover{
            box-shadow: $boxShadowHover;
            cursor: pointer;
            top: $top;
            transition:  $transition;
          }
          img{
            width: 280px;
            height: 140px;
          }
          div{
            font-size: 18px;
            color: $hallTitleColor;
            font-weight: bold;
            text-align: center;
            margin-top: 32px;
            margin-bottom: 10px;
            padding: 0 4px;
          }
          p{
            font-size: 13px;
            color: $hallTextColor;
            text-align: center;
            padding: 0 42px;
          }
        }
      }
    }
  }

</style>
