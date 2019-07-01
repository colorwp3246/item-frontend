<template>
  <div class="application">
    <!--头部-->
    <xdAfterLandingOther :inputSearchShow="true"></xdAfterLandingOther>

    <!--面包屑-->
    <xdCrumbs :crumbs="crumbs"></xdCrumbs>

    <!--左侧导航-->
    <xdLeftSliderBar :sliderActive="sliderActive"></xdLeftSliderBar>

    <!--应用-->
    <xdAppDetails :appData="appData" :appHref="this.$route.query.href"></xdAppDetails>

    <!--基本信息-->
    <xdInformation class="xd_jump"></xdInformation>

    <!--受理条件-->
    <xdConditions id="bar" class="xd_jump" :title='title' :conditions="conditions"></xdConditions>

    <!--申请材料-->
    <xdMaterial class="xd_jump" :material="material" :materialTableTh="materialTableTh" :materialTable="materialTable"></xdMaterial>

    <!--办理流程-->
    <xdFlow class="xd_jump" :flow="flow"></xdFlow>

    <!--办理方式-->
    <xdMode class="xd_jump" :modes="modes"></xdMode>

    <!--咨询投诉-->
    <xdAdvisory class="xd_jump" :advisory="advisory"></xdAdvisory>

    <!--常见问题-->
    <xdProblem class="xd_jump" :problem="problem"></xdProblem>
    <sidebar></sidebar>
    <xdFooter></xdFooter>
  </div>
</template>

<script>
  import xdAfterLandingOther from '../public/AfterLandingOther'
  import xdCrumbs from '../public/Crumbs'
  import xdLeftSliderBar from './leftSliderBar/LeftSliderBar'
  import xdAppDetails from './appDetails/AppDetails'
  import xdInformation from './information/Information'
  import xdConditions from './conditions/Conditions'
  import xdMaterial from './material/Material'
  import xdFlow from './flow/Flow'
  import xdMode from './mode/Mode'
  import xdAdvisory from './advisory/Advisory'
  import xdProblem from './problem/Problem'
  import sidebar from '../public/Sidebar'
  import xdFooter from '../public/Footer'
  export default {
    name: "Application",
    components:{
      xdAfterLandingOther,
      xdCrumbs,
      xdLeftSliderBar,
      xdAppDetails,
      xdInformation,
      xdConditions,
      xdMaterial,
      xdFlow,
      xdMode,
      xdAdvisory,
      xdProblem,
      sidebar,
      xdFooter
    },
    data(){
      return{
        crumbs:['应用详情'],
        sliderActive: 0,  //当前楼层
        title:'师生服务事项信息采集',
        appData:[
          {
            id:1,
            title:'',
            describe:'此处为该服务事项描述信息，此处为该服务事项描述信息此处为该服务事项',
            deal:5,
            visit:122
          }
        ],
        conditions:['2019年新入校本科生及研究生','2018-2019年新聘教职工','2019年新入校本科生及研究生','2018-2019年新聘教职工'],
        material:[
          {id:1, title:'填报须知',items:['所需资料按本办事指南中材料目录载明的顺序排列','由申请人填写的文件按A4规格纸张打印，证件及其他机构出具的文件按原尺提供','所有资料的复印件应当清晰']},
          {id:2, title:'形式标准',items:['所需资料按本办事指南中材料目录载明的顺序排列','所有资料的复印件应当清晰']}
        ],
        materialTableTh:[{names:'材料名称',source:'来源渠道',types:'材料类型',numbers:'纸质材料份数',forms:'材料形式',marks:'备注',necessity:'材料必要性',exampleTable:'示例样表',blankTable:'空白表格'}],
        materialTable:[
          {names:'单人证件照',source:'自备',types:'原件',numbers:'2',forms:'纸质',marks:'查看详情',necessity:'必要',exampleTable:'',blankTable:''},
          {names:'信息采集事项办理表单',source:'自备',types:'原件',numbers:'1',forms:'纸质',marks:'查看详情',necessity:'必要',exampleTable:'https',blankTable:'https'},
        ],
        flow:[
          {id:1, title:'网上办理流程', describe:'此处为流程简单说明此处为流程简单说明',flow:''},
          {id:2, title:'窗口办理流程', describe:'此处为流程简单说明此处为流程简单说明',flow:''},
        ],
        modes:['申请人将上述材料，通过网上或窗口递交到办理人员处，办理人员经审核认为符合受理条件的，应当予以受理。','一般3-5个工作日后方可登录一站式服务大厅，查看事项处理结果。'],
        advisory:[
          {id:1, title:'咨询方式', tel:'电话投诉：029-8888888',net:'投诉途径：http://ehall.xidian.edu.cn'},
          {id:2, title:'投诉方式', tel:'电话投诉：029-8888888',net:'投诉途径：http://ehall.xidian.edu.cn'},
        ],
        problem:[
          {id:1, title:'问题一', problem:'此处为办理过程中常见问题此处为办理过程中常见问题?',answer:'此处为问题专业解答'},
          {id:2, title:'问题二', problem:'此处为办理过程中常见问题此处为办理过程中常见问题?',answer:'此处为问题专业解答'},
        ]
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll);//鼠标滚动事件
      this.appData[0].title = this.$route.query.title;
      this.appData[0].appID = this.$route.query.appId;
    },
    methods:  {
      handleScroll () { //鼠标滚动，楼层效果
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let xd_jump = [];   //所有楼层的元素
        let xd_jump2 = [];  //所有楼层元素的高度
        xd_jump.push(document.querySelectorAll('.xd_jump'));
        for (let i=0;i<xd_jump[0].length;i++){
          xd_jump2.push(xd_jump[0][i].offsetTop-50)
        }
        for (let i=0;i<xd_jump2.length;i++){  //循环楼层高度判断此时的楼层
          if (scrollTop > xd_jump2[i]) {
            this.sliderActive= Math.max(i);
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>

