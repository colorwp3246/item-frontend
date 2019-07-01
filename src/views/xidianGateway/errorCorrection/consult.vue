<template>
  <div class="errCorrection">
    <AfterLandingOther :inputSearchShow="true"></AfterLandingOther>
    <div class="notice main">
      <img :src="bell" alt="">
      温馨提示：技术支持、系统故障、咨询服务、投诉建议，请拨打"
      <span style="color:#f60000;">95187</span>
      向校园热线寻求支持。
    </div>
    <div class="errFrom main clearfloat">
      <div class="fl leftFrom">
        <div class="errFromTitle clearfloat">
          <div class="fl correction">我要咨询</div>
          <div class="fr searErr">查看我的咨询历史</div>
        </div>
        <div class="formVail">
          <div class="clearfloat floatFrom">
            <div class="formTitle fl">查询对象<i class="iconfont icon-xinghao"  style="color:#ee4444;"></i></div>
            <div class="fl">
              <el-select v-model="errType" placeholder="请选择咨询部门">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <p v-remind="pageAddress" class="tip" style="color:red;margin: 0;"></p>
            </div>
          </div>
          <div class="clearfloat floatFrom">
            <div class="formTitle fl">咨询类型<i class="iconfont icon-xinghao"  style="color:#ee4444;"></i></div>
            <div class="fl"> <el-select v-model="errType" placeholder="请选择咨询事项名称">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select></div>
          </div>
          <div class="clearfloat floatFrom">
            <div class="formTitle fl">咨询主题<i class="iconfont icon-xinghao"  style="color:#ee4444;"></i></div>
            <div class="fl"> <el-select v-model="errType" placeholder="请选择主题">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select></div>
          </div>
          <div class="clearfloat floatFrom">
            <div class="formTitle fl">咨询描述<i class="iconfont icon-xinghao"  style="color:#ee4444;"></i></div>
            <div class="fl limit"><textarea  rows="7" placeholder="请选择咨询内容" v-model="errDescribe"></textarea><div class="limitFont">0/6000</div></div>
          </div>
          <div class="clearfloat floatFrom">
            <div class="formTitle fl">相关材料<i class="iconfont icon-xinghao"  style="color:#ee4444;"></i></div>
            <div class="fl limit"><el-upload
              class="upload-demo"
              action=""
              :on-remove="handleRemove"
              multiple
              :limit="3"
              >
              <el-button size="small"><i class="el-icon-download"></i>点击上传</el-button>
              <div slot="tip" class="el-upload__tip">选择文件,支持png,jpg,jpeg,,word,excel,txt,zip,gif,音频，视频等，最大上传30M</div>
            </el-upload></div>
          </div>
          <div class="clearfloat floatFrom">
            <div class="formTitle fl">手机号码<i class="iconfont icon-xinghao"  style="color:#ee4444;"></i></div>
            <div class="fl"> <el-input v-model="phoneNumber" placeholder="请输入手机号"></el-input></div>
          </div>
          <div class="clearfloat floatFrom">
            <div class="formTitle fl">验证码<i class="iconfont icon-xinghao"  style="color:#ee4444;"></i></div>
            <div class="fl limit"><input type="text" class="endInput" placeholder="请输入手机号码" v-model="testCode"></div>
            <div class="fl"><sidentify :identifyCode="identifyCode"></sidentify></div>
            <div class="fl" style="color:#4393e8;font-size:15px;margin-left: 26px;padding-top:15px;"><span @click="codeSident">看不清换一张</span></div>
          </div>
          <div class="submitBtn">
            <button @click="confirm">确定</button>
          </div>
        </div>
      </div>
      <div class="fr rightFrom">
        <div class="proposal">
          <h3>纠错建议</h3>
          <div class="suggerst clearfloat" v-for="(item,index) in arr" :key="index">
            <p class="fl">{{index+1}}.</p>
            <p class="fr textHidden" style="width:96%;">{{item}}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <sidebar></sidebar>
  </div>
</template>
<script>
  import AfterLandingOther from '../public/newHead'
  import sidentify from '../public/verificationCode'
  import Footer from '../public/Footer'
  import sidebar from '../public/Sidebar'
  export default {
    data(){
      return{
        bell:`${process.env.PICTURE_SERVE}/file?fileId=41b6c7fde1814894a3ccdbc80ee36761`,
        input:'',
        identifyCodes: "1234567890",
        identifyCode:'',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        values:'',
        arr:[
          "请尽量将你的问题描述清楚，我们才能为你提供准确的答复"
        ],
        pageAddress:'',
        errType:'',
        errDescribe:'',
        phoneNumber:'',
        testCode:'',
      }
    },
    verify: {
      pageAddress:  ["required" , { // required 必填
        // 自定义验证
        test: function(val) {
          // let nameIndex = this.testData.indexOf(val);
          if (val === "") {
            return false;
          }
          return true;
        },
        // false 显示 message
        message: '此昵称重复，请修改！'
      }],
      errType: ["required" , {
        test: function(val) {
          if (val === "") {
            return false;
          }
          return true;
        },
        message: '此昵称重复，请修改！'
      }],
      errDescribe: ["required" , {
        test: function(val) {
          if (val === "") {
            return false;
          }
          return true;
        },
        message: '此昵称重复，请修改！'
      }],
      phoneNumber: ["required" , {
        test: function(val) {
          if (val === "") {
            return false;
          }
          return true;
        },
        message: '此昵称重复，请修改！'
      }],
      testCode: ["required" , {
        test: function(val) {
          if (val === "") {
            return false;
          }
          return true;
        },
        message: '此昵称重复，请修改！'
      }],
    },
    components:{
      AfterLandingOther,
      sidentify,
      Footer,
      sidebar
    },
    mounted() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    methods: {
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      refreshCode() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
      },
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
            ];
        }
        console.log(this.identifyCode);
      },
      codeSident(){
        this.refreshCode()
      },
      confirm(){
        if (this.$verify.check()) {
          alert("哈哈哈")
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "~@/styles/variables.scss";
  .errCorrection{
    .notice{
      margin-top: 30px;
      background-color:#f1f2f3;
      height: 60px;
      line-height: 60px;
      font-size:15px;
      color: #4393e8;
      img{
        margin-left:15px;
        position: relative;
        top: 6px;
      }
    }
    .errFrom{
      margin-top: 68px;
      .leftFrom{
        width: 744px;
        .errFromTitle{
          height: 25px;
          line-height: 25px;
          .correction{
            font-size: 22px;
            color: #0d1c28;
          }
          .searErr{
            font-size:15px;
            color: #4393e8;
          }
        }
        .formVail{
          .floatFrom{
            margin-top: 36px;
            .formTitle{
              font-size: 16px;
              color: #0d1c28;
              margin-right:20px;
              padding-top: 9px;
              i{
                margin-left:8px;
                font-size:10px;
              }
            }
            .el-input{
              width: 630px;
              /*height: 44px;*/
            }
            .el-select{
              width: 630px;
            }
            .limit{
              position: relative;
              textarea{
                width: 630px;
                border:1px solid #c0c4c9;
                border-radius: 3px;
                padding-left: 15px;
                padding-top: 13px;
              }
              .limitFont{
                position: absolute;
                right: 15px;
                bottom: 10px;
                color:#c0c4c9;
                font-size: 14px;
              }
              .endInput{
                width: 240px;
                height: 36px;
                margin-left: 16px;
                border-radius: 3px;
                padding-left: 15px;
                margin-right: 5px;
                border: solid 1px #c0c4c9;
              }
              .endInput::-webkit-input-placeholder,textarea::-webkit-input-placeholder { /* WebKit browsers */
                color:#c0c4c9;
              }
              .endInput:-moz-placeholder,textarea::-moz-placeholder{ /* Mozilla Firefox 4 to 18 */
                color:#c0c4c9;
              }
              .endInput::-moz-placeholder,textarea::-moz-placeholder { /* Mozilla Firefox 19+ */
                color:#c0c4c9;
              }
              .endInput:-ms-input-placeholder,textarea::-ms-input-placeholder{ /* Internet Explorer 10+ */
                color:#c0c4c9;
              }
            }
          }
          .submitBtn{
            button{
              width: 220px;
              height: 50px;
              margin-left: 103px;
              margin-top: 60px;
              background-color: #537eab;
              border-radius: 6px;
              font-size:20px;
              color:#ffffff;
              text-align: center;
              border:none;
              outline: none;
            }
          }
        }
      }
      .rightFrom{
        margin-top: 61px;
        .proposal{
          width: 400px;
          padding:24px 29px;
          border: solid 1px #c0c4c9;
          opacity: 0.5;
          h3{
            color: #0d1c28;
            font-size: 18px;
            margin: 0;
            padding-bottom: 14px;
          }
          .suggerst{
            p{
              margin:3px 0;
              font-size: 14px;
              line-height:18px;
              color:#4f555a;
            }
          }
        }
      }
    }
  }

</style>
