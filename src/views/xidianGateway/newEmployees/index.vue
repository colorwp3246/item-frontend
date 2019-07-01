<template>
    <div class="center">
        <!--头部-->
        <!-- <xdAfterLandingOther otherTiTle="" :inputSearchShow="true" :userinfo="true"></xdAfterLandingOther>
        <xdBannerOther :xdTitle="xdTitle" :tab="false" :bgImg="bgImg" @itemActive="activeRoute" :selectdie="false"></xdBannerOther> -->
        <div>
            <img :src="head" alt="">

            <img style="width:" :src="newEmployeesCenter" alt="">
        </div>
        <!-- 脚部 -->
        <!-- <Footer></Footer> -->
    </div>
</template>
<script>    
    import xdAfterLandingOther from '../public/AfterLandingOther'
    import xdBannerOther from '../public/BannerOther'
    import Footer from '../public/Footer'

    export default {
        name: "newEmployees",
        components:{
        xdAfterLandingOther,
        xdBannerOther,
        Footer,
        },
    data() {
      return {
        bgImg: `${process.env.PICTURE_SERVE}/file?fileId=8988e8a791e94dbdb79b61286a26d220`,
        head:`${process.env.PICTURE_SERVE}/file?fileId=a668d7a1e58d477d9b6698102b0278bb`,
        newEmployeesCenter: `${process.env.PICTURE_SERVE}/file?fileId=feb999d639b44829b5279d6421b11d08`,
        xdTitle:'新员工入职管理大厅',
        
      }
    },
    }
</script>
<style lang="scss" scoped>
    @import "~@/styles/variables.scss";
    
</style>