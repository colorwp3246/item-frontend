<template>
  <div class="bgc">
    <AfterLandingOther :inputSearchShow="false" otherTiTle="" ></AfterLandingOther>
    <!--<div class="main">-->
      <!--<div class="menu_position">当前位置：首页 > 网上申办 > <span>阅读须知</span></div>-->
      <!--<div>-->
          <!--<div class="step">-->
            <!--&lt;!&ndash;<span>&ndash;&gt;-->
              <!--&lt;!&ndash;<i></i>&ndash;&gt;-->
              <!--&lt;!&ndash;<p>1.阅读须知</p>&ndash;&gt;-->
            <!--&lt;!&ndash;</span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span>&ndash;&gt;-->
              <!--&lt;!&ndash;<i></i>&ndash;&gt;-->
              <!--&lt;!&ndash;<p>2.申报信息</p>&ndash;&gt;-->
            <!--&lt;!&ndash;</span>&ndash;&gt;-->
            <!--&lt;!&ndash;<span>&ndash;&gt;-->
              <!--&lt;!&ndash;<i></i>&ndash;&gt;-->
              <!--&lt;!&ndash;<p>3.申报告知</p>&ndash;&gt;-->
            <!--&lt;!&ndash;</span>&ndash;&gt;-->
            <!--<img src="@/assets/title1.png" alt="">-->
          <!--</div>-->
         <!--<div>-->
           <!--<ModuleTitle moduleTitle="基本信息"></ModuleTitle>-->
           <!--<div class="Module_Content">-->
              <!--<table>-->
                <!--<tr>-->
                  <!--<td class="bg">审批事项名称</td>-->
                  <!--<td colspan="3">学校选修课永久停开申请</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<td class="bg">审报人</td>-->
                  <!--<td>上管一哲</td>-->
                  <!--<td class="bg">身份证</td>-->
                  <!--<td>61547874874418748747</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<td class="bg">联系人姓名</td>-->
                  <!--<td>上管一哲</td>-->
                  <!--<td class="bg">联系人手机</td>-->
                  <!--<td>15978748574</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<td class="bg">联系人身份证</td>-->
                  <!--<td></td>-->
                  <!--<td class="bg">联系人电话</td>-->
                  <!--<td></td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<td class="bg">是否长期项目</td>-->
                  <!--<td><input type="radio" name="project"/>是<input type="radio"  name="project"/>否</td>-->
                  <!--<td class="bg">取件方式</td>-->
                  <!--<td><input type="radio"  name="post"/>快递（到付）<input type="radio"  name="post"/>自取</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<td class="bg">邮编</td>-->
                  <!--<td></td>-->
                  <!--<td class="bg">通信地址</td>-->
                  <!--<td></td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<td class="bg">选择申报地点</td>-->
                  <!--<td></td>-->
                  <!--<td class="bg">备注</td>-->
                  <!--<td></td>-->
                <!--</tr>-->
              <!--</table>-->
           <!--</div>-->
         <!--</div>-->
        <!--<div>-->
          <!--<ModuleTitle moduleTitle="申报材料"></ModuleTitle>-->
          <!--<div class="Module_Content">-->

          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--&lt;!&ndash;脚部&ndash;&gt;-->
    <div class="body" @click="go">

    </div>
    <sidebar></sidebar>
    <Footer></Footer>
    <!--<img src="@/assets/head.png" alt="">-->
    <!--<img src="@/assets/body.png" alt="" >-->
  </div>
</template>
<script>
  import AfterLandingOther from '../public/AfterLandingOther'
  import Footer from '../public/Footer'
  import ModuleTitle from '../public/ModuleTitle'
  import sidebar from '../public/Sidebar'
  export default {
    data() {
      return {
        state:false
      }
    },
    components: {
      AfterLandingOther,
      Footer,
      ModuleTitle,
      sidebar
    },
    methods:{
      searchprocess(){

      },
      go(){
        if(this.state===false){
          this.$router.push({path:'/eventStepTwo'})
          this.state=true
        }else if(this.state===true){
          this.$router.push({path:'/'})
          this.state=false
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@/styles/gatewayBase.scss";
  .menu_position{
    margin-top:30px;
    span{color:#1f73cf;}
  }
  .step{padding:30px 50px;height:170px;box-shadow: 0px 0px 10px #ccc;margin-top:30px;}
  .Module_Content{
    padding-top:20px;
    table{border-collapse: collapse;width:100%;}
    table td{border:solid 1px #ccc;height:60px;padding-left:20px;}
    .bg{background:#f2f2f2;width:180px;}
  }
  .body{
    width: 1920px;
    height:1026px;
    margin: 0 auto;
    background:url("http://www.zq100.com/api/files/file?fileId=270cda86130a4d39a0616679830216b6") no-repeat;
    background-size: 100% 100%;
    position: relative;
    top: 7px;
  }
</style>
