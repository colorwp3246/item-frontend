<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="6" class="flexlayout">
        <el-input v-model="input" placeholder="请输入内容" style="margin-right:5px; "></el-input>
        <el-button type="primary">搜索</el-button>
      </el-col>
      <el-col :span="12">
        <el-button type="success" @click="addData"><i class="el-icon-plus"></i>新增</el-button>
        <el-button type="success"><i class="el-icon-plus"></i>上报</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table
          v-loading="listLoading"
          :data="list"
          element-loading-text="Loading"
          border
          fit
          :cell-style="dialogStyle"
          highlight-current-row>
          <el-table-column align="center" label="#" width="95" type="selection">
          </el-table-column>
          <el-table-column align="center" label="部门名称" width="95" prop="zgbm">
          </el-table-column>
          <el-table-column label="子项编码" prop="zxbm">
          </el-table-column>
          <el-table-column label="事项主题" width="110" align="center" prop="blfs">
          </el-table-column>
          <el-table-column label="事项分类" width="110" align="center" prop="sxfl">
          </el-table-column>
          <el-table-column label="办理方式" width="110" align="center" prop="blfs">
          </el-table-column>
          <el-table-column label="版本号" width="110" align="center" prop="version">
          </el-table-column>
          <el-table-column class-name="status-col" label="状态" width="110" align="center">
            <template slot-scope="scope">
              {{ scope.row.state|dataState }}
            </template>
          </el-table-column>
          <el-table-column align="center" prop="created_at" label="操作" width="300">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="primary">修改</el-button>
              <el-button type="danger" @click="delteData(scope.row)">删除</el-button>
              <el-button type="primary" @click="tableDetail(scope.row)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <page :pageTotal="totalPage" @pageClick="pageEvent"></page>
      </el-col>
    </el-row>
    <!--新增的弹框-->
    <el-dialog :title="dialogTitle" :visible.sync="dialogForm" width="70%" id="formdialog">
      <el-form :model="form" class="demo-ruleForm" ref="ruleForm" :rules="rules" id="formdata">
        <el-row>
          <el-col :span="8">
            <el-form-item label="主管部门" class="zhuguan" prop="zgbm" :label-width="formLabelWidth">
              <el-input v-model="form.zgbm" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="事项分类" prop="sxfl" :label-width="formLabelWidth">
              <!--<el-input v-model="form.sxfl" class="inputWidth"></el-input>-->
              <el-select v-model="form.sxfl" placeholder="请选择分类">
                <el-option label="账号密码" value="账号密码"></el-option>
                <el-option label="业务申请" value="业务申请"></el-option>
                <el-option label="充值缴费" value="充值缴费"></el-option>
                <el-option label="故障保修" value="故障保修"></el-option>
                <el-option label="信息查询" value="信息查询"></el-option>
                <el-option label="业务办理" value="业务办理"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="子项名称" prop="zxmc" :label-width="formLabelWidth">
              <el-input v-model="form.zxmc" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="子项编码" :label-width="formLabelWidth" prop="zxbm">
              <el-input v-model="form.zxbm" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="事项主题" :label-width="formLabelWidth">
              <el-input v-model="form.sxzt" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="子项内容" :label-width="formLabelWidth">
              <el-input v-model="form.zxny" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="实现方式" :label-width="formLabelWidth">
              <el-input v-model="form.szfs" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="归属场景" :label-width="formLabelWidth">
              <el-input v-model="form.gscj" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="协同部门" :label-width="formLabelWidth">
              <el-input v-model="form.xtbm" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="办理方式" :label-width="formLabelWidth">
              <el-select v-model="form.blfs" placeholder="请选择办理方式">
                <el-option label="支付宝" value="支付宝"></el-option>
                <el-option label="微信" value="微信"></el-option>
                <el-option label="云扫码" value="云扫码"></el-option>
                <el-option label="闪付APP" value="闪付APP"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="办理流程" :label-width="formLabelWidth">
              <el-select v-model="form.ballXs" placeholder="请选择办理流程">
                <el-option label="截图" value="截图"></el-option>
                <el-option label="线上" value="线上"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="办理网址" :label-width="formLabelWidth">
              <el-input v-model="form.blwz" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="办理地址" :label-width="formLabelWidth">
              <el-input v-model="form.bldz" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="所属科室" :label-width="formLabelWidth">
              <el-input v-model="form.ssks" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="负责人" :label-width="formLabelWidth">
              <el-input v-model="form.fzr" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="提交方式" :label-width="formLabelWidth">
              <el-input v-model="form.tjfs" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="所需资料" :label-width="formLabelWidth">
              <el-input v-model="form.sxzl" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="负责人电话" :label-width="formLabelWidth">
              <el-input v-model="form.fzrTel" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="报告上级审批" :label-width="formLabelWidth">
              <el-radio-group v-model="form.bsjsp">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="是否收费" :label-width="formLabelWidth">
              <el-radio-group v-model="form.sfsf">
                <el-radio label="是" value="1"></el-radio>
                <el-radio label="否" value="0"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="线上缴费" :label-width="formLabelWidth">
              <el-select v-model="form.sxjf" placeholder="请选择缴费类型">
                <el-option label="微信" value="0"></el-option>
                <el-option label="支付宝" value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="时限类型" :label-width="formLabelWidth">
              <el-select v-model="form.sxlx" placeholder="请选择时限类型">
                <el-option label="即办件" value="0"></el-option>
                <el-option label='承诺时间' value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="承诺天数:" v-show="form.sxlx!==''&&form.sxlx!=='0'" :label-width="formLabelWidth">
              <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>天
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="线下缴费" :label-width="formLabelWidth">
              <el-input v-model="form.xxjf" class="inputWidth"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="状态" :label-width="formLabelWidth">
              <el-select v-model="form.state" placeholder="请选择状态">
                <el-option label="未发布" value="0"></el-option>
                <el-option label="已发布待审批" value="1"></el-option>
                <el-option label="已审批" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-form-item label="服务对象" :label-width="formLabelWidth" prop="fwdxIds">
              <el-checkbox-group v-model="form.fwdxIds">
                  <template v-for="(item,index) in serve">
                    <el-checkbox :label="item.fwdx" :value="item.id" name="fwdxIds"></el-checkbox>
                  </template>
              </el-checkbox-group>
              <div class="changeColor">{{changeEvent}}</div>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="文件上传" :label-width="formLabelWidth">
            <el-upload
              class="avatar-uploader"
              type="file"
              action=""
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :on-change="changeAvatarUpload"
              :auto-upload="false"
              accpet="image/gif,image/png,image/jpeg,image/jpg,image/bmp"
            >
              <div class="photo">
                <img v-if="imageUrl"
                     :src="imageUrl"
                     class="avatar"
                     width="100%"
                     height="100%"
                >
              </div>
              <el-button size="small"
                         type="primary"
              >点击上传</el-button>
            </el-upload>
            </el-form-item>
            <input type="file" @change="changeFile">
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelDialog('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
    <!--详情的弹框-->
    <el-dialog title="详情"  :visible.sync="dialogDetail" width="60%">
      <el-form :model="form" class="demo-ruleForm" ref="ruleForm">
        <el-row>
          <el-col :span="8">
            <el-form-item label="主管部门:" :label-width="formLabelWidth">
              {{detailList.zgbm}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="事项分类:" :label-width="formLabelWidth">
              {{detailList.sxfl}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="子项名称:" :label-width="formLabelWidth">
              {{detailList.zxmc}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="子项编码:" :label-width="formLabelWidth">
              {{detailList.zxbm}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="事项主题:" :label-width="formLabelWidth">
              {{detailList.sxzt}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="子项内容:" :label-width="formLabelWidth">
              {{detailList.zxny}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="实现方式:" :label-width="formLabelWidth">
              {{detailList.szfs}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="协同部门:" :label-width="formLabelWidth">
              {{detailList.xtbm}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="归属场景:" :label-width="formLabelWidth">
              {{detailList.gscj}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="办理方式:" :label-width="formLabelWidth">
              {{detailList.blfs}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="办理流程:" :label-width="formLabelWidth">
              {{detailList.ballXs}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="办理网址:" :label-width="formLabelWidth">
              {{detailList.blwz}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="办理地址:" :label-width="formLabelWidth">
              {{detailList.bldz}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="所属科室:" :label-width="formLabelWidth">
              {{detailList.ssks}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="负责人:" :label-width="formLabelWidth">
              {{detailList.fzr}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="提交方式:" :label-width="formLabelWidth">
              {{detailList.fzr}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="所需资料:" :label-width="formLabelWidth">
              {{detailList.fzr}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="负责人电话:" :label-width="formLabelWidth">
              {{detailList.fzrTel}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="报告上级审批:" :label-width="formLabelWidth">
              {{detailList.bsjsp}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="是否收费:" :label-width="formLabelWidth">
              {{detailList.sfsf}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="线上缴费:" :label-width="formLabelWidth">
              {{detailList.xxjf}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="时限类型:" :label-width="formLabelWidth">
              {{detailList.sxlx}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="线下缴费:" :label-width="formLabelWidth">
              {{detailList.sxjf}}
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="状态:" :label-width="formLabelWidth">
              {{detailList.state|dataState}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-form-item label="服务对象:" :label-width="formLabelWidth">
                <span v-for="(item,index) in serveArrs" style="padding-right: 10px;">
                  {{item[1]}}
                </span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogDetail=false">取 消</el-button>
        <el-button type="primary" @click="dialogDetail=false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {getList,setListData,setServiceObject,pageSearch,searchDetail,uploadImage,deleDate,reviseEvent,setStatus} from '@/api/table'
  import page from '@/components/paging'
  export default {
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        return statusMap[status]
      },
      dataState(data){
        switch (data) {
          case '0':
            return '未发布'
            break
          case '1':
            return '已发布待审批'
            break
          case '2':
            return '已审批'
            break
        }
      }
    },
    components: {
      page,
    },
    data() {
      const validateName = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      }
      const validName=(rule, value, callback)=>{
        if (!value) {
          callback(new Error('请至少选择一个'))
        } else {
          callback()
        }
      }
      const validateChange=(rule,value,callback)=>{
        if(value.length<=0){
          callback(new Error('至少选一个服务对象ma'))
        }else{
          callback()
        }
      }
      return {
        list: [],
        listLoading: true,
        input: '',
        dialogForm: false,
        dialogDetail:false,
        num1:'1',
        form: {
          zgbm: '',//主管部门
          sxfl : '',//事项分类
          zxmc: '',//子类名称
          zxny: '',//子类内容
          zxbm:'',//子类编码
          sxzt: '',//事项主题
          szfs: '',//实现方式
          gscj:'',//归属场景
          xtbm:'',//协同部门
          blwz:'',//办理网址
          blfs:'',//办理方式
          ballXs:'',//办理流程
          bldz:'',//办理地址
          ssks:'',//所属科室
          fzr:'',//负责人
          fzrTel:'',//负责人电话
          tjfs:'',//提交方式
          sxzl:'',//所需资料
          sxlx:'',//时限类型
          bsjsp:'',//上级审批
          sfsf:'',//是否收费
          sxjf:'',//线下缴费
          xxjf:'',//线上缴费
          state:'',//状态
          fwdxIds:[],//服务对象
        },
        rules:{
          zgbm: [
            { required: true, trigger: 'blur',validator:validateName },
          ],
          sxfl:[
            { required: true, trigger: 'blur',validator:validateName },
          ],
          zxmc:[
            { required: true, trigger: 'blur',validator:validateName },
          ],
          zxbm:[
            { required: true, trigger: 'blur',validator:validateName },
          ],
          fwdxIds:[
            { type: 'array', required: true, trigger: 'blur',validator:validateChange }
          ],
          region: [
            { required: true, message: '请选择下拉框内容', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择单选项', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请勾选', trigger: 'blur' }
          ]
        },
        defference: false,
        formLabelWidth: '100px',
        close: '155px',
        serve:[],
        serveArr:[],
        totalPage:'',
        pageIndex:1,
        detailList:{},
        uuid:'',
        version:'',
        dialogTitle:'',
        changeEvent:'',
        changeValue:[],

        dialogStyle:{
          padding:'4px 0'
        },
        imageUrl:'',
        serveArrs:[],
        uuidData:''
      }
    },
    created() {
      // this.fetchData()
      this.serveObject()
      this.trytest(this.pageIndex)
    },
    methods: {
      //当点击确定弹框时清空表单元素
      reset() {
        this.form={
          zgbm: "",
          sxfl :  "",
          zxmc:  "",
          zxny:  "",
          zxbm: "",
          sxzt:  "",
          szfs:  "",
          gscj: "",
          xtbm: "",
          blwz: "",
          blfs: "",
          ballXs: "",
          bldz: "",
          ssks: "",
          fzr: "",
          fzrTel: "",
          tjfs: "",
          sxzl: "",
          sxlx:"",
          bsjsp:"",
          sfsf:"",
          sxjf:"",
          xxjf:"",
          state:"",
          fwdxIds:[],
        }
        this.serveArr=[]
      },
      //新增
      addData(){
        this.changeEvent=''
        this.dialogTitle='新增'
        this.dialogForm=true
        this.defference = false
        console.log(this.defference,'状态添加')
        this.reset()
      },
      //点击分页事件
      pageEvent(pages) {
        // console.log(pages, '我是父元素的page')
        this.trytest(pages)
      },
      //点击修改数据
      handleClick(el) {
        console.log(this.defference,'状态修改')
        let params={
          uuid:el.uuid
        }
        console.log(el.uuid)
        searchDetail(params).then(res=>{
          console.log(res.data.data,'ggg3333')
          if(res.data.code===200){
            this.form={
              zgbm: res.data.data.sxb.zgbm,
              sxfl : res.data.data.sxb.sxfl,
              zxmc: res.data.data.sxb.zxmc,
              zxny: res.data.data.sxb.zxny,
              zxbm:res.data.data.sxb.zxbm,
              sxzt: res.data.data.sxb.sxzt,
              szfs: res.data.data.sxb.szfs,
              gscj:res.data.data.sxb.gscj,
              xtbm:res.data.data.sxb.xtbm,
              blwz:res.data.data.sxb.blwz,
              blfs:res.data.data.sxb.blfs,
              ballXs:res.data.data.sxb.ballXs,
              bldz:res.data.data.sxb.bldz,
              ssks:res.data.data.sxb.ssks,
              fzr:res.data.data.sxb.fzr,
              fzrTel:res.data.data.sxb.fzrTel,
              tjfs:res.data.data.sxb.tjfs,
              sxzl:res.data.data.sxb.sxzl,
              sxlx:res.data.data.sxb.sxlx,
              bsjsp:res.data.data.sxb.bsjsp,
              sfsf:res.data.data.sxb.sfsf,
              sxjf:res.data.data.sxb.sxjf,
              xxjf:res.data.data.sxb.xxjf,
              state:res.data.data.sxb.state,
              fwdxIds:res.data.data.sxb.fwdxIds,
            }
            this.uuid=res.data.data.sxb.uuid
            this.version=res.data.data.sxb.version
            // if(res.data.data.fwdxIds!==null){
            let checkArr=[...res.data.data.fwdxes]
            this.form.fwdxIds=[]
            for(var i=0;i<=res.data.data.fwdxes.length-1;i++){
              this.form.fwdxIds.push(res.data.data.fwdxes[i][1])
            }
          }

        }).catch(err=>{
          console.log(err)
        })
        this.defference = true
        this.dialogTitle='修改'
        this.dialogForm = true
      },
      //点击取消时改变数据清空数据
      cancelDialog(formName) {
        this.dialogForm = false
        this.$refs[formName].resetFields();
      },
      //点击弹框确定事件
      submitForm(ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            if (this.defference === true) {
              console.log('这是点击的修改按钮')
              let objs={}
              for(var i=0;i<=this.form.fwdxIds.length-1;i++){
                if(this.form.fwdxIds[i]==='临聘人员'){
                  this.form.fwdxIds[i]=4
                }else if(this.form.fwdxIds[i]==='学生'){
                  this.form.fwdxIds[i]=2
                }else if(this.form.fwdxIds[i]==='家属'){
                  this.form.fwdxIds[i]=6
                }else if(this.form.fwdxIds[i]==='教师'){
                  this.form.fwdxIds[i]=1
                }else if(this.form.fwdxIds[i]==='校院领导'){
                  this.form.fwdxIds[i]=5
                }else if(this.form.fwdxIds[i]==='辅导人员'){
                  this.form.fwdxIds[i]=3
                }
              }
              objs={...this.form}
              objs.fwdxIds=objs.fwdxIds.join(',')
                let params={
                  uuid:this.uuid,
                  version:this.version,
                    ...objs
                }
              reviseEvent(params).then(res=>{
                console.log(res,'修改接口')
                if(res.data.code===200){
                  this.$message({
                    type: 'success',
                    message: '修改成功!'
                  });
                  // this.defference = false
                  this.trytest(this.pageIndex)
                  this.dialogForm = false
                }
              }).catch(err=>{
                console.log(err)
              })

            } else if(this.defference === false) {
              console.log('这是点击的新增接口')
              let obj={}
              for(var i=0;i<=this.form.fwdxIds.length-1;i++){
                if(this.form.fwdxIds[i]==='临聘人员'){
                  this.form.fwdxIds[i]=4
                }else if(this.form.fwdxIds[i]==='学生'){
                  this.form.fwdxIds[i]=2
                }else if(this.form.fwdxIds[i]==='家属'){
                  this.form.fwdxIds[i]=6
                }else if(this.form.fwdxIds[i]==='教师'){
                  this.form.fwdxIds[i]=1
                }else if(this.form.fwdxIds[i]==='校院领导'){
                  this.form.fwdxIds[i]=5
                }else if(this.form.fwdxIds[i]==='辅导人员'){
                  this.form.fwdxIds[i]=3
                }
              }
              obj={...this.form}
              obj.fwdxIds=obj.fwdxIds.join(',')
              console.log(this.form.fwdxIds,'打印集合数据')
              setListData(obj).then(res=>{
                if(res.data.code===200){
                  this.$message({
                    type: 'success',
                    message: '添加成功!'
                  });
                  this.trytest(this.pageIndex)
                  this.fetchData()
                  this.dialogForm = false
                  this.$refs[formName].resetFields();
                }
                console.log(res,'新增接口')
              }).catch(err=>{
                console.log(err)
              })
            }
          } else {
            return false;
          }
        });
        console.log(this.defference,'执行')
      },
      //点击删除事件
      delteData(el, index) {
        this.$confirm('此操作将永久删除这条数据, 是否继续?', '提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let paramse={
            uuid:el.uuid,
            version:el.version
          }
          deleDate(paramse).then(res=>{
            if(res.data.code===200){
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              this.trytest(this.pageIndex)
              this.fetchData()
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

        // console.log(el, index, '输出')
        // this.list.splice(index, 1)
      },
      //分页数据初始化
      trytest(page){
        this.listLoading = true
        this.pageIndex=page
        pageSearch(this.pageIndex,10).then(res=>{
          if(res.data.code===200){
            this.list=res.data.data.content
            this.totalPage=res.data.data.totalElements
            this.listLoading=false
            console.log(res.data.data,'分页数据')
          }
        }).then(err=>{
          console.log(err)
        })
      },
     //获取服务对象
      serveObject(){
        setServiceObject().then(res=>{
          this.serve=res.data.data
          console.log(res.data.data,'服务对象')
        })
      },
      //点击详情
      tableDetail(el){
        this.dialogDetail=true
        console.log(el,'详情数据')
        let params={
          uuid:el.uuid
        }
        searchDetail(params).then(res=>{
          console.log(res.data.data,'gggggg的数据')
          this.detailList={}
          if(res.data.code===200){
            this.detailList=res.data.data.sxb
            this.serveArrs=res.data.data.fwdxes
          }

        }).catch(err=>{
          console.log(err)
        })
      },
      //文件上传-成功时的钩子
      handleAvatarSuccess(res, file){
        this.imageUrl = URL.createObjectURL(file.raw)
        console.log(this.imageUrl,'成功时的回调')
      },
      //文件改变时触发的钩子
      changeAvatarUpload(file, fileList){
        this.imageUrl = ''
        let that = this
        let files = fileList.slice(-1)[0].raw
        let reader = new FileReader()
        let imgFile
        console.log(files,'压缩前的图片')
        reader.readAsDataURL(files)
        reader.onload = e => {
          imgFile = e.target.result
          this.imageUrl = imgFile
          console.log(this.imageUrl,'变更时的回调')
        }
      },
      //试试
      changeFile(e){
        var formData = new FormData();
        formData = new window.FormData()
        formData.append('file', e.target.files[0]);
        console.log(formData)

        // let reader = new FileReader()
        // reader.readAsDataURL(e.target.files[0])
        // reader.onload = e => {
        //   console.log(e.target.result,'试试文件')
        // }

      },
      handleChange(){
        {
          "itemRequests": [
          {
            "item": {
              "classification": "string",
              "collaborativeDepartment": "string",
              "createtime": "2019-04-24T01:49:43.425Z",
              "del": 0,
              "departmentTel": 0,
              "handleAddress": "string",
              "handleDepartment": "string",
              "handlePrincipal": "string",
              "handleProcedures": "string",
              "handleTime": "string",
              "handleTimes": 0,
              "handleType": 0,
              "id": 0,
              "mainDepartment": "string",
              "operationName": "string",
              "operationPrincipal": "string",
              "operationSystem": 0,
              "operationUrl": "string",
              "payment": 0,
              "paymentDepartment": "string",
              "paymentMethod": "string",
              "paymentType": 0,
              "state": 0,
              "subitemCode": "string",
              "subitemName": "string",
              "timeLimit": 0,
              "transDepartment": 0,
              "updatetime": "2019-04-24T01:49:43.425Z",
              "uuid": "string",
              "version": 0
            },
            "itemQuestions": [
              {
                "answer": "string",
                "id": 0,
                "itemId": 0,
                "question": "string"
              }
            ],
            "sceneIds": [
              0
            ],
            "targetIds": [
              0
            ],
            "uuids": [
              "string"
            ]
          },

        ],
          "uuid": "string"
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .inputWidth {
    width: 242px;
  }

  #formdialog {
    .el-row {
      margin-bottom: 0;
    }
    .zhuguan{
      .el-form-item__label{
        color:red;
      }
    }
  }
  .changeColor{
    color: #f56c6c;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    left: 0;
  }
  .app-container{

  }
  #formdata{
    .inputWidth{
      width: 170px!important;
    }
  }
</style>
