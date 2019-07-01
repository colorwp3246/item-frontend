<template>
    <div>
        <div class="head">
        <!--头部-->
            <xdAfterLandingOther otherTiTle="个人主页" :inputSearchShow="true" :userinfo="true" :falsePage="false"></xdAfterLandingOther>
        </div>
        <div class="center">
            <!-- 名片 -->
            <xdcard></xdcard>
            <!-- 证照 -->
            <xdlicense></xdlicense>
            <!-- 业务 -->
            <xdbusiness></xdbusiness>
            
        </div>
        <div class="foot">
            <!-- 脚部 -->
            <Footer></Footer>
            <sidebar></sidebar>
        </div>
    </div>
</template>
<script>
    import xdAfterLandingOther from '../public/newHead'
    import xdcard from './card/card'
    import xdlicense from './license/license'
    import xdbusiness from './business/business'
    import Footer from '../public/Footer'
    import sidebar from '../public/Sidebar'
    export default {
        name: "personalSpace",
        components:{
        xdAfterLandingOther,
        xdcard,
        xdlicense,
        xdbusiness,
        Footer,
        sidebar
        },
    }
</script>
<style lang="scss" scoped>
    @import "~@/styles/variables.scss";
    .center{
        background-color:#F2F5FA;
        padding-top: 1px;
        padding-bottom: 1px;
    }
    .foot{
        margin-top:-60px;
    }
</style>
