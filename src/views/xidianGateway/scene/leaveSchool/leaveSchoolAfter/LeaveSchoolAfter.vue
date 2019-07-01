<template>
  <div class="leaveSchoolAfter">
    <!--header-->
    <AfterLandingOther :inputSearchShow="true"></AfterLandingOther>

    <!--banner-->
    <xdBannerOther :title="title"
                   :tab="false"
                   :selectdie="false"
                   :bgImg="bgImg"></xdBannerOther>

    <!--大厅简介-->
    <xdIntroduce  :title="title"
                  :introduce="introduce"
                  :img="img"
                  :entryBtn="entryBtn"></xdIntroduce>

    <!--个人信息-->
    <xdLeaveSchoolInformation :InformationList="InformationList"
                              :InformationBlock="InformationBlock"></xdLeaveSchoolInformation>

    <!--流程-->
    <xdFlow :flowList="flowList"></xdFlow>

    <!--相关推荐-->
    <xdRecommend :recommendList="recommendList"></xdRecommend>
    <sidebar></sidebar>
    <xdFooter></xdFooter>
  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters} from 'vuex'
  import AfterLandingOther from '../../../public/AfterLandingOther'
  import xdBannerOther from '../../../public/BannerOther'
  import xdIntroduce from '../../../scene/scenePublice/Introduce'
  import xdLeaveSchoolInformation from './leaveSchoolInformation/LeaveSchoolInformation'
  import xdFlow from './flow/Flow'
  import xdRecommend from '../../../scene/scenePublice/SceneRecommend'
  import xdFooter from '../../../public/Footer'
  import sidebar from '.././../../public/Sidebar'
  export default {
    name: "LeaveSchoolAfter",
    components: {
      AfterLandingOther,
      xdBannerOther,
      xdIntroduce,
      xdLeaveSchoolInformation,
      xdFlow,
      xdRecommend,
      xdFooter,
      sidebar
    },
    data(){
      return{
        moduleElShow: false,
        title:'学生离校大厅',
        bgImg: `${process.env.PICTURE_SERVE}/file?fileId=b617320cc9f94dad92b0fac3b811223d`,
        introduce:['此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍，此处为该大厅具体介绍，以及包含业务分类此处为该大厅具体介绍具体介绍','依托一站式惠民服务平台，提供网上申请、信息核对、公示公告、结果查询一站式服务，方便师生。'],
        img: `${process.env.PICTURE_SERVE}/file?fileId=32034498568b40d28f59649b2db88ebe`,
        serviceList:['此处为服务对象此处为服务对象','此处为服务对象此处为服务对象此处为服务对象此处为服务对象','此处为服务对象此处为服务对象此处为服务对象','此处为服务对象此处为服务对象此处为'],
        InformationList:[
          '姓名','李四',
          '学号','001',
          '类别','本科生',
          '性别','男',
          '名族','汉',
          '院系','软件学院',
          '政治面貌','党员',
          '联系电话','5587047',
          '电子邮箱','5587047@qq.com',
        ],
        entryBtn:{title:'离校办理',href:'/LeaveSchoolAfter',show:false},
        InformationBlock:[
          {icon:`${process.env.PICTURE_SERVE}/file?fileId=5f591a8324094ee38c4d841f6df2dede`,fraction:'468分',item:'英语四六级'},
          {icon:`${process.env.PICTURE_SERVE}/file?fileId=530e312e46aa48bdbdb6e2ff946c88c6`,fraction:'25分',item:'大学已修学分'},
          {icon:`${process.env.PICTURE_SERVE}/file?fileId=f65430221b90419c8dc0c19134a0a408`,fraction:'84分',item:'毕业答辩成绩'},
          {icon:`${process.env.PICTURE_SERVE}/file?fileId=bdefad3f69de4e2d9580e799386274b8`,fraction:'12次',item:'大学获奖次数'}
        ],
        flowList:{
          flowTitle:'离校流程',
          explain:[
            {title:'总办理环节',icon:`${process.env.PICTURE_SERVE}/file?fileId=f45bca45755840a0a3376f0a7270b0bf`},
            {title:'已办理',icon:`${process.env.PICTURE_SERVE}/file?fileId=d747a1ce431e4432be6f70998aec36a6`},
            {title:'正在办理',icon:`${process.env.PICTURE_SERVE}/file?fileId=bd8fe6a74c2f428c934f631c3fba61e2`},
            {title:'未办理',icon:`${process.env.PICTURE_SERVE}/file?fileId=80043d4e2c1d4bf6b85b5c209fc54784`},
            {title:'无需办理',icon:`${process.env.PICTURE_SERVE}/file?fileId=51df390aa85d4b3fbd974041e4eaa20f`}
          ],
          // flow:[]
          flow:[
            {
              title:'财务手续办理',
              complete:1,
              list:[
                {title:'2018-2019年度学费，需补交欠费4500元',complete:true},
                {title:'2015-2019年住宿费，需补交欠费860元',complete:true},

              ]
            },
            {
              title:'宿舍手续办理',
              complete:2,
              list:[
                {title:'在楼管办理退宿（如果是在职，办理需要提供相应证明文件方可办理）',complete:false},
                {title:'需补交水电欠费86元',complete:true},
              ]
            },
            {
              title:'图书馆欠费欠书',
              complete:3,
              list:[
                {title:'归还所有借书（您当前还有5本图书未归还）',complete:false},
                {title:'需补交图书欠费8元',complete:false},
              ]
            },
            {
              title:'图书馆论文提交',
              complete:1,
              list:[
                {title:'在图书管论文系统提交电子版（审核通过方可通过）',complete:true},
                {title:'提交纸质论文',complete:true},
              ]
            },
            {
              title:'清欠贷款办理',
              complete:1,
              list:[
                {title:'有科研贷款的清还（没有的系统自己通过）',complete:true},
              ]
            },
            {
              title:'户口迁移证办理',
              complete:3,
              list:[
                {title:'未将户口转入学校的，该环节直接予以通过，无需办理',complete:false},
              ]
            },
            {
              title:'医疗手续办理',
              complete:3,
              list:[
                {title:'缴清相关费用（体检费，看病等），您还需缴纳欠费56元',complete:false},
              ]
            },
            {
              title:'实验室手续办理',
              complete:1,
              list:[
                {title:'若没有毁坏公物无需办理，有需要缴清赔偿费用',complete:true},
              ]
            },
            {
              title:'派遣证',
              complete:3,
              list:[
                {title:'学校统一发放',complete:false},
              ]
            }
          ]
        },
        recommendList:[
          {icon:`${process.env.PICTURE_SERVE}/file?fileId=deadec5aa248420e83e3d10ab041d2a8`,fraction:'就业信息网'},
          {icon:`${process.env.PICTURE_SERVE}/file?fileId=d519caa475a140c38424c40796c1feb7`,fraction:'校友总会'},
          {icon:`${process.env.PICTURE_SERVE}/file?fileId=deadec5aa248420e83e3d10ab041d2a8`,fraction:'就业信息网'},
          {icon:`${process.env.PICTURE_SERVE}/file?fileId=d519caa475a140c38424c40796c1feb7`,fraction:'校友总会'}
        ],
      }
    },
    computed:{
      ...mapState({ //获取vuex中state数据
        token: state =>state.loginStatus
      })
    },
    mounted(){
      // let userList = JSON.parse(sessionStorage.getItem('xd_userList'));
      // let userType = JSON.parse(sessionStorage.getItem('xd_userList')).data[0];
      // if(userType['XSLBDM'].indexOf('博') >-1||userType['XSLBDM'].indexOf('硕') >-1) {  //博士/硕士
      //   console.log('博士')
      //   this.InformationList = [
      //     '姓名',userList.data[0]['XM'],
      //     '学号',userList.data[0]['XH'],
      //     '类别',userList.data[0]['XSLBDM'],
      //     '性别',userList.data[0]['XBDM'],
      //     '民族',userList.data[0]['MZDM'],
      //     '院系',userList.data[0]['YXDM'],
      //     '政治面貌',userList.data[0]['ZZMMDM'],
      //     '联系电话',userList.data[0]['SJ'],
      //     '电子邮箱','',
      //   ];
      // }else if(userType['XSLBDM'] == '08'){
      //   console.log('本科')
      //   this.InformationList = [
      //     '姓名',userList.data[0]['XM'],
      //     '学号',userList.data[0]['XH'],
      //     '类别',userList.data[0]['XSLBSM'],
      //     '性别',userList.data[0]['XB'],
      //     '民族',userList.data[0]['MZMC'],
      //     '院系',userList.data[0]['XSM'],
      //     '政治面貌',userList.data[0]['ZZMMMC'],
      //     '联系电话',userList.data[0]['SJ'],
      //     '电子邮箱','',
      //   ];
      // }



      // this.getToken().then(()=>{
      //   //流程
      //   let PCDM = null;  //储存学生办理环节
      //   // 根据学号查询办理环节接口
      //   this.$axios.get(`${process.env.NODE_BASE_INFO}/open_api/customization/tlxhjbl/list`,{
      //     params: {
      //       access_token: this.token,
      //       XSBH: JSON.parse(sessionStorage.getItem('xd_userBH'))
      //     }
      //   }).then((res)=>{
      //     if(res.data.message=='ok'){   //有离校信息 res.data.message='ok'
      //       PCDM = res.data.result.data[0];
      //       return res.data.result.data[0].PCDM
      //     }else{//如果查询不到离校信息
      //       this.flowList.flow =[];
      //     }
      //   }).then((res)=>{
      //     // 根据批次代码PCDM查询离校批次接口
      //     return this.$axios.get(`${process.env.NODE_BASE_INFO}/open_api/customization/tlxpc/list`,{
      //       params: {
      //         access_token: this.token,
      //         PCDM: res
      //       }
      //     })
      //   }).then((res)=>{
      //     // console.log(res)
      //     return res.data.result.data[0].LBDM
      //   }).then((res)=>{
      //     //根据离校类别代码LBDM查询接口：
      //     return this.$axios.get(`${process.env.NODE_BASE_INFO}/open_api/customization/tlxlblc/list`,{
      //       params: {
      //         access_token: this.token,
      //         LBDM: res
      //       }
      //     })
      //   }).then((res)=>{
      //     return res.data.result.data[0].LCDM;
      //   }).then((res)=>{
      //     // 根据流程代码LCDM查询流程环节接口
      //     return this.$axios.get(`${process.env.NODE_BASE_INFO}/open_api/customization/tlxlblchj/list`,{
      //       params: {
      //         access_token: this.token,
      //         LCDM: res,
      //         page:1,
      //         per_page:100
      //       }
      //     })
      //   }).then((res)=>{
      //     res.data.result.data.sort(this.compare('PX'));  //按照流程PX排序
      //     res.data.result.data.map((v)=>{ //循环排序后的数据
      //       let complete = v['HJDM'];     //获取办理状态
      //       this.flowList.flow.push(//添加获取的流程名称和状态
      //         {
      //           'title':v['HJBT'],
      //           'complete':PCDM[complete],
      //           'list':[
      //             {title:v['TSXX']}
      //           ]
      //         },
      //       );
      //     });
      //   }).catch(function(error) {
      //
      //   })
      // })
    },
    methods:{
      // ...mapActions({
      //   getToken: 'loginStatus'
      // }),
      compare(property){  //排序函数
        return function(a,b){
          let value1 = a[property];
          let value2 = b[property];
          return value1 - value2;
        }
      }
    }
  }
</script>
<style scoped lang="scss">
.leaveSchoolAfter{

}
</style>
