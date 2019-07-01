<template>
    <div class="main power">
      <ModuleTitle moduleTitle="责权清单"></ModuleTitle>
      <div class="clear">
        <div class="power-left">
          <ul class="clear">
            <li v-for="(item, index) in powerList" :key="index" :title="item.title">
            <span>
              <img :src="item.icon" alt="">
              <div class="power-text">{{item.title}}</div>
            </span>
            </li>
          </ul>
        </div>
        <div class="power-right">
          <img :src="powerData" alt="">
        </div>
      </div>
    </div>
</template>

<script>
  import ModuleTitle from '../../public/ModuleTitle'
  export default {
    name: "Power",
    components: {
      ModuleTitle,
    },
    data(){
      return{
        powerData:`${process.env.PICTURE_SERVE}/file?fileId=8455671767814f988f04dc54c5620630`,
        powerList:[
          {id:1,title:'权力清单',icon:`${process.env.PICTURE_SERVE}/file?fileId=041cdf3bde3b4ab8b97ae0159ea77ebc`},
          {id:2,title:'责任清单',icon:`${process.env.PICTURE_SERVE}/file?fileId=342c900748654a2bb584f5e82b20aad6`},
          {id:3,title:'负面清单',icon:`${process.env.PICTURE_SERVE}/file?fileId=e3ac86bbd58549fe803f52179e62d4dd`},
          {id:4,title:'服务清单',icon:`${process.env.PICTURE_SERVE}/file?fileId=d803a724ead0494b89da5d895d9f71ec`},
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/styles/gatewayBase.scss";
  .power{
    .power-left{
      width: 404px;
      display: inline-block;
      ul{
        margin-top: 36px;
        width: calc(100% + 22px);
        li{
          width: 182px;
          height: 138px;
          margin: 0 25px 20px 0;
          float: left;
          display: inline-block;
          span{
            width: inherit;
            height: inherit;
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
              margin: 33px 0 0 66px;
            }
            .power-text{
              color: $powerTitleColor;
              font-size: 15px;
              padding-top: 6px;
              font-weight: bold;
              text-align: center;
            }
          }
        }
      }
    }
    .power-right{
      width: 796px;
      height: 350px;
      float: right;
      text-align: center;
      img{
        margin-top: 24px;
      }
    }
  }
</style>
