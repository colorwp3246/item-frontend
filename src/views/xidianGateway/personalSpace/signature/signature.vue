<template>
    <div class="center">
        <!--头部-->
        <xdAfterLandingOther otherTiTle="个人空间" :inputSearchShow="true" :userinfo="true"></xdAfterLandingOther>

        <!-- 脚部 -->
    <Footer></Footer>
    </div>
</template>
<script>    
    import xdAfterLandingOther from '../public/AfterLandingOther'

    import Footer from '../public/Footer'

    export default {
        name: "personalSpace",
        components:{
        xdAfterLandingOther,

        Footer,
        },
    }
</script>
<style lang="scss" scoped>
    @import "~@/styles/variables.scss";
</style>