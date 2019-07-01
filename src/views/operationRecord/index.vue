<template>
  <div class="app-container" ref="resume" id="printTest">
    <div class="title">
      <div class="btn">
        <div class="left">
          <button class="search" @click="newAdd">新增</button>
          <button class="search" @click="isResolution">拆分</button>
          <button class="search" @click="mergeEvent">合并</button>
          <button class="search" @click="getReport">上报</button>
          <button class="search" @click="updateData">修改</button>
          <button class="search" @click="delteBtns">删除</button>
        </div>
        <div class="right">
          <input type="text" class="serach_input border_right">
          <button class="search border_left">搜索</button>
        </div>
      </div>
    </div>
    <!--展示的表格-->
    <div class="form">
      <el-row>
        <el-col :span="24">
          <el-table
            v-loading="listLoading"
            :data="list"
            element-loading-text="Loading"
            ref="multipleTable"
            border
            fit
            empty-text="暂无记录"
            @selection-change="updateState"
            :cell-style="dialogStyle"
            highlight-current-row>
            <el-table-column align="center" label="#" width="50" type="selection">
            </el-table-column>
            <el-table-column align="center" label="事项名称" width="150" prop="subitemName">
            </el-table-column>
            <el-table-column label="事项编码" prop="subitemCode" width="200" align="center">
            </el-table-column>
            <el-table-column label="办理地址" align="center" prop="handleAddress" show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="办理时间" width="350" align="center" prop="handleTime">
            </el-table-column>
            <el-table-column label="办理电话" width="180" align="center" prop="handlePhone">
            </el-table-column>
            <el-table-column label="办理方式" width="80" align="center" prop="handleType">
              <template slot-scope="scope">
                {{scope.row.handleType|handleTypes}}
              </template>
            </el-table-column>
            <el-table-column label="是否收费" width="80" align="center" prop="payment">
              <template slot-scope="scope">
                {{scope.row.payment|paymentOperation}}
              </template>
            </el-table-column>
            <el-table-column class-name="status-col" label="数据状态" width="110" align="center" prop="state">
              <template slot-scope="scope">
                {{ scope.row.state|dataState }}
              </template>
            </el-table-column>
            <el-table-column label="事项状态" width="110" align="center" prop='itemState'>
              <template slot-scope="scope">
                {{ scope.row.itemState|itemStateDetail }}
              </template>
            </el-table-column>
            <el-table-column label="更新时间" width="210" align="center" prop="updatetime">
            </el-table-column>
            <el-table-column align="center" prop="created_at" label="操作" width="70">
              <template slot-scope="scope">
                <el-button type="primary" @click="detailData(scope.row)" class="btnstyle">详细</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="end">
        <el-col :span="6" style="text-align: right;">
          <page :pageTotal="totalPage" @pageClick="pageEvent"></page>
        </el-col>
      </el-row>
    </div>
    <!--新增的弹框-->
    <el-dialog :title="dialogTitle" :visible.sync="dialogForm" width="900px" id="formdialog"
               :close-on-click-modal="false" @close="newAddClose">
      <el-form :model="form" class="demo-ruleForm forms" ref="ruleForm" id="formdata" :rules="rules">
        <el-tabs v-model="addName" @tab-click="handleClick">
          <el-tab-pane label="基本信息" name="first">
            <el-row>
              <el-col :span="8">
                <el-form-item label="事项名称" :label-width="formLabelWidth" prop="subitemName">
                  <el-input v-model="form.subitemName" class="inputWidth"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="事项编码" :label-width="formLabelWidth" prop="subitemCode">
                  <el-input v-model="form.subitemCode" class="inputWidth"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="事项主题" :label-width="formLabelWidth" prop="itemTheme">
                  <el-select v-model="form.itemTheme" placeholder="请选择系统">
                    <el-option :label="item.itemTheme" :value="item.id" v-for="(item,index) of TitleArr"
                               :key="index"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="归属部门" class="zhuguan" :label-width="formLabelWidth" prop="mainDepartment">
                  <el-cascader
                    placeholder="请选择"
                    :options="options"
                    :show-all-levels="false"
                    v-model="form.mainDepartment"
                    @change="handleChange">
                  </el-cascader>
                  {{form.mainDepartment}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="办件类型" :label-width="formLabelWidth" prop="itemType">
                  <el-select v-model="form.itemType" placeholder="请选择系统">
                    <el-option :label="item.itemType" :value="item.id" v-for="(item,index) of TypeArr"
                               :key="index"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8" v-if="form.itemType===4">
                <el-form-item label="承诺天数:" :label-width="formLabelWidth">
                  <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"
                                   label="描述文字"></el-input-number>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="20">
                <el-form-item label="业务介绍" :label-width="formLabelWidth" prop="itemIntroduction">
                  <el-input type="textarea" v-model="form.itemIntroduction"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="办理信息" name="second">
            <el-row>
              <el-col :span="8">
                <el-form-item label="办理科室" :label-width="formLabelWidth" prop="office">
                  <el-select v-model="form.office" placeholder="请选择科室" @change="selectOffice">
                    <el-option :label="item.officeName" :value="item.id" v-for="(item,index) of departArr"
                               :key="index"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="科室地址" :label-width="formLabelWidth">
                  <el-input
                    placeholder="请输入内容"
                    v-model="officeObj.officeAddress"
                    :disabled="true">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="科室电话" :label-width="formLabelWidth">
                  <el-input
                    placeholder="请输入内容"
                    v-model="officeObj.officePhone"
                    :disabled="true">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="服务时间" :label-width="formLabelWidth">
                  <el-input
                    placeholder="请输入内容"
                    v-model="officeObj.officeTime"
                    :disabled="true">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="服务负责人" :label-width="formLabelWidth">
                  <el-input
                    placeholder="请输入内容"
                    v-model="officeObj.officeLeader"
                    :disabled="true">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="负责人电话" :label-width="formLabelWidth">
                  <el-input
                    placeholder="请输入内容"
                    v-model="officeObj.leaderPhone"
                    :disabled="true">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="办理方式" :label-width="formLabelWidth" prop="handleType">
                  <el-select v-model="form.handleType" placeholder="请选择缴费类型">
                    <el-option label="线上" value="线上"></el-option>
                    <el-option label="线下" value="线下"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="线上办理次数" :label-width="formLabelWidth" v-if="form.handleType==='线上'">
                  <el-select v-model="form.handleTimes" placeholder="请选择次数">
                    <el-option :label="item.hand" :value="item.value" v-for="(item,index) of handTime"
                               :key="index"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="最多跑几次" :label-width="formLabelWidth" v-if="form.handleType==='线下'">
                  <el-select v-model="form.handleTimes" placeholder="请选择次数">
                    <el-option :label="item.hand" :value="item.value" v-for="(item,index) of handTime"
                               :key="index"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="办理地址" :label-width="formLabelWidth" prop="handleAddress">
                  <el-input v-model="form.handleAddress" class="inputWidth"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="办理时间" :label-width="formLabelWidth" prop="handleTime">
                  <el-input v-model="form.handleTime" class="inputWidth"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="办理电话" :label-width="formLabelWidth" prop="handlePhone">
                  <el-input v-model="form.handlePhone" class="inputWidth"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="是否有业务系统" label-width="125px" prop="wheSystem">
                  <el-radio-group v-model="form.wheSystem" @change="clearSysyem">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row v-if="form.wheSystem==='是'">
              <el-col :span="8">
                <el-form-item label="业务系统" label-width="120px">
                  <el-select v-model="form.operationSystem" placeholder="请选择系统" @change="selectSysyem">
                    <el-option :label="item.operationName" :value="item.id" v-for="(item,index) of BusinessArr"
                               :key="index"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="系统地址" label-width="120px">
                  <el-input
                    placeholder="请输入内容"
                    v-model="systemServe.systemDress"
                    :disabled="true">
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="系统负责人" label-width="120px">
                  <el-input
                    placeholder="请输入内容"
                    v-model="systemServe.systemLeader"
                    :disabled="true">
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="扩展信息" name="third">
            <el-row>
              <el-col :span="8">
                <el-form-item label="是否跨部门" :label-width="formLabelWidth" prop="transDepartment">
                  <el-radio-group v-model="form.transDepartment">
                    <el-radio label="是" value="1"></el-radio>
                    <el-radio label="否" value="0"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="协同部门名称" :label-width="formLabelWidth">
                  <el-input v-model="form.collaborativeDepartment" class="inputWidth"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="是否收费" :label-width="formLabelWidth" prop="payment">
                  <el-radio-group v-model="form.payment">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row v-if="form.payment==='是'">
              <el-col :span="8">
                <el-form-item label="缴费方式" :label-width="formLabelWidth" prop="paymentType">
                  <el-select v-model="form.paymentType" placeholder="请选择办理方式">
                    <el-option label="线下" value="线下"></el-option>
                    <el-option label="线上" value="线上"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="缴费部门" :label-width="formLabelWidth" prop="paymentDepartment">
                  <el-cascader
                    placeholder="请选择"
                    :options="options"
                    :show-all-levels="false"
                    v-model="form.paymentDepartment"
                    @change="handleChange">
                  </el-cascader>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="收费依据" :label-width="formLabelWidth" prop="paymentGist">
                  <el-input v-model="form.paymentGist" class="inputWidth"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="22" class="serveCheckbox">
                <el-form-item label="服务对象" :label-width="formLabelWidth" prop="serveObj">
                  <el-checkbox-group v-model="form.serveObj">
                    <el-checkbox :label="item.target" :value="item.id" v-for="(item,index) in serve"
                                 :key="index"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="22">
                <el-form-item label="服务场景" :label-width="formLabelWidth" prop="sceneArr">
                  <el-checkbox-group v-model="form.sceneArr">
                    <template v-for="(item,index) in scenes">
                      <el-checkbox :label="item.scene" :value="item.id"></el-checkbox>
                    </template>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="办理流程:" :label-width="formLabelWidth">
                  <el-upload
                    class="upload-demo"
                    type="file"
                    ref="upload"
                    action=""
                    multiple
                    :auto-upload="false"
                    :show-file-list="false"
                    :on-change="changeFileUpload"
                  >
                    <el-button size="small" type="primary">选择文件</el-button>
                    <!--<span>{{fileData.length>=1?fileData[0].name:""}}</span>-->
                    <span v-for="(item,index) in fileData" :key="index" v-if="fileData[0].name">{{item.name}}</span>
                    <span v-for="(item,index) in uploadProcess" :key="index" v-if="uploadProcess[0].processName">{{item.processName}}</span>
                    <!--<span v-for="(item,index) in fileData" :key="index" v-if="typeof(fileData[0])===String">{{item}}</span>-->
                    <!--<button class="search" v-if="downloadstate===true" @click="dataLoad">下载</button>-->
                  </el-upload>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="材料信息" name="four">
            <table width="100%" bgcolor="#e9faff">
              <tr align="center">
                <td>
                  <div style="color:red;">{{metraltabName}}</div>
                  <div><span style="color:red;">*</span>材料名称</div>
                </td>
                <td>
                  <div style="color:red;">{{metraltabForm}}</div>
                  <div><span style="color:red;">*</span>材料形式</div>
                </td>
                <td>
                  <div style="color:red;">{{metraltabPaper}}</div>
                  <div><span style="color:red;">*</span>纸张大小</div>
                </td>
                <td>
                  <div><span style="color:red;">*</span>份数</div>
                </td>
                <td>空表</td>
                <td>样表</td>
                <td>备注</td>
                <td></td>
              </tr>
              <tr align="center">
                <td width="120px">
                  <el-input v-model="form.materialName" placeholder="请输入内容" @blur="metralNameBlur"></el-input>
                </td>
                <td width="130px">
                  <el-select v-model="form.materialForm" placeholder="请选择办理方式" @change="metralFormChange">
                    <el-option label="原件" value="原件"></el-option>
                    <el-option label="复印件" value="复印件"></el-option>
                  </el-select>
                </td>
                <td width="130px">
                  <el-select v-model="form.materialPaper" placeholder="请选择办理方式" @change="metralPaperChange">
                    <el-option label="A4" value="A4"></el-option>
                  </el-select>
                </td>
                <td width="120px">
                  <!--<el-input v-model="" placeholder="请输入内容"></el-input>-->
                  <el-input-number v-model="form.materialCopies" :min="1" :max="10"></el-input-number>
                </td>
                <td width="110px">
                  <div class="uploadss">上传文件
                    <label class="change-photo-btn">
                      <input type="file" @change="defaultStyleTable($event)">
                    </label>
                  </div>
                  <span v-if="typeof(defaultStyle)==='object'">{{defaultStyle.name}}</span>
                  <span v-if="typeof(defaultStyle)==='string'">{{defaultStyle}}</span>
                </td>
                <td width="110px">
                  <div class="uploadss">上传文件
                    <label class="change-photo-btn">
                      <input type="file" @change="defaultEmptyTable($event)">
                    </label>
                  </div>
                  <span v-if="typeof(defaultEmpty)==='object'">{{defaultEmpty.name}}</span>
                  <span v-if="typeof(defaultEmpty)==='string'">{{defaultEmpty}}</span>
                </td>
                <td width="100px">
                  <el-input v-model="form.materialExtras" placeholder="请输入内容"></el-input>
                </td>
                <td></td>
              </tr>
              <tr v-for="(item,index) in tableArr" :key="index" align="center">
                <td width="110px">
                  <el-input v-model="item.materialName" placeholder="请输入内容"></el-input>
                </td>
                <td width="120px">
                  <el-select v-model="item.materialForm" placeholder="请选择办理方式">
                    <el-option label="原件" value="原件"></el-option>
                    <el-option label="复印件" value="复印件"></el-option>
                  </el-select>
                </td>
                <td width="120px">
                  <el-select v-model="item.materialPaper" placeholder="请选择办理方式">
                    <el-option label="A4" value="A4"></el-option>
                  </el-select>
                </td>
                <td width="120px">
                  <!--<el-input v-model="item.materialCopies" placeholder="请输入内容"></el-input>-->
                  <el-input-number v-model="item.materialCopies" :min="1" :max="10"></el-input-number>
                </td>
                <td width="110px">
                  <div class="uploadss">上传文件
                    <label class="change-photo-btn">
                      <input type="file" @change="arrStyleTable($event,index)">
                    </label>
                  </div>
                  <span v-if="typeof(formStyleDate[index])==='object'">{{formStyleDate[index].name}}</span>
                  <span v-if="typeof(formStyleDate[index])==='string'">{{formStyleDate[index]}}</span>
                  <!--{{formStyleDate}}-->
                </td>
                <td width="110px">
                  <div class="uploadss">上传文件
                    <label class="change-photo-btn">
                      <input type="file" @change="arrEmptyTable($event,index)">
                    </label>
                  </div>
                  <!--<span v-if="formEmptyDate[index].name">{{formEmptyDate[index].name}}</span>-->
                  <span v-if="typeof(formEmptyDate[index])==='object'">{{formEmptyDate[index].name}}</span>
                  <span v-if="typeof(formEmptyDate[index])==='string'">{{formEmptyDate[index]}}</span>
                </td>
                <td width="100px">
                  <el-input v-model="item.materialExtras" placeholder="请输入内容"></el-input>
                </td>
                <td><i class="el-icon-error del" style="display: inline" @click.stop="tableDel(index)"></i></td>
              </tr>
            </table>
            <div style="text-align: center;line-height: 30px;font-size:24px;font-weight: bold;" @click="tableAdd">+
            </div>
          </el-tab-pane>
          <el-tab-pane label="常见问题" name="five">
            <el-row>
              <el-col :span="22">
                <el-form-item label="常见问题:" :label-width="formLabelWidth" style="margin-bottom: 0;">
                  <div class="problem">
                    <input type="text" placeholder="问题" v-model="form.queryInput" class="input">
                    <input type="text" placeholder="答案" v-model="form.awserInput" class="input">
                    <!--<i class="el-icon-plus" @click="addInput"></i>-->
                  </div>
                  <div class="box" style="width:100%;">
                    <div class="moreInput" v-for="(item,index) in number" :key="index">
                      <i class="el-icon-error del" @click="delInput(index)"></i>
                      <input type="text" placeholder="问题" v-model="item.question" class="input">
                      <input type="text" placeholder="答案" class="answer input" v-model="item.answer">
                    </div>
                  </div>
                </el-form-item>
                <div style="text-align: center;line-height: 30px;font-size:24px;font-weight: bold;" @click="addInput">
                  +
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
        <el-button @click="cancleForm">取 消</el-button>
      </div>
    </el-dialog>
    <!--上报-->
    <el-dialog title="上报" :visible.sync="reviseState" width="60%" :close-on-click-modal="false">
      <el-table
        :data="checkboxArr"
        border
        style="width: 100%"
      >
        <el-table-column align="center" label="事项名称" width="120" prop="subitemName">
        </el-table-column>
        <el-table-column label="事项编码" prop="subitemCode" width="160" align="center">
        </el-table-column>
        <el-table-column label="办理地址" align="center" prop="handleAddress" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="办理时间" width="300" align="center" prop="handleTime">
        </el-table-column>
        <el-table-column label="办理电话" width="150" align="center" prop="handlePhone">
        </el-table-column>
        <el-table-column label="办理方式" width="80" align="center" prop="handleType">
          <template slot-scope="scope">
            {{scope.row.handleType|handleTypes}}
          </template>
        </el-table-column>
        <el-table-column label="是否收费" width="80" align="center" prop="payment">
          <template slot-scope="scope">
            {{scope.row.payment|paymentOperation}}
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="defineBtn">确 定</el-button>
        <el-button @click="reviseCancle">取 消</el-button>
      </div>
    </el-dialog>
    <!--拆分-->
    <el-dialog title="拆分" :visible.sync="resolution" width="950px" :close-on-click-modal="false"
               @close="resolutionClose">
      <div style="clear:both;">
        <div style="width:710px;" class="left">
          <el-form :model="form" class="demo-ruleForm forms" ref="ruleForm" id="formdatas" :rules="rules">
            <el-tabs v-model="addNameboth" @tab-click="handleClick">
              <el-tab-pane label="基本信息" name="first">
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="事项名称" :label-width="formLabelWidth" prop="subitemName">
                      <el-input v-model="form.subitemName" class="inputWidth"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="事项编码" :label-width="formLabelWidth" prop="subitemCode">
                      <el-input v-model="form.subitemCode" class="inputWidth"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="事项主题" :label-width="formLabelWidth" prop="itemTheme">
                      <el-select v-model="form.itemTheme" placeholder="请选择系统">
                        <el-option :label="item.itemTheme" :value="item.id" v-for="(item,index) of TitleArr"
                                   :key="index"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="归属部门" class="zhuguan" :label-width="formLabelWidth" prop="mainDepartment">
                      <el-cascader
                        placeholder="请选择"
                        :options="options"
                        :show-all-levels="false"
                        v-model="form.mainDepartment"
                        @change="handleChange">
                      </el-cascader>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="办件类型" :label-width="formLabelWidth" prop="itemType">
                      <el-select v-model="form.itemType" placeholder="请选择系统">
                        <el-option :label="item.itemType" :value="item.id" v-for="(item,index) of TypeArr"
                                   :key="index"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8" v-if="form.itemType===4">
                    <el-form-item label="承诺天数:" :label-width="formLabelWidth">
                      <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"
                                       label="描述文字"></el-input-number>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="20">
                    <el-form-item label="业务介绍" :label-width="formLabelWidth" prop="itemIntroduction">
                      <el-input type="textarea" v-model="form.itemIntroduction"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="办理信息" name="second">
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="办理科室" :label-width="formLabelWidth" prop="office">
                      <el-select v-model="form.office" placeholder="请选择科室" @change="selectOffice">
                        <el-option :label="item.officeName" :value="item.id" v-for="(item,index) of departArr"
                                   :key="index"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="科室地址" :label-width="formLabelWidth">
                      <el-input
                        placeholder="请输入内容"
                        v-model="officeObj.officeAddress"
                        :disabled="true">
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="科室电话" :label-width="formLabelWidth">
                      <el-input
                        placeholder="请输入内容"
                        v-model="officeObj.officePhone"
                        :disabled="true">
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="服务时间" :label-width="formLabelWidth">
                      <el-input
                        placeholder="请输入内容"
                        v-model="officeObj.officeTime"
                        :disabled="true">
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="服务负责人" :label-width="formLabelWidth">
                      <el-input
                        placeholder="请输入内容"
                        v-model="officeObj.officeLeader"
                        :disabled="true">
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="负责人电话" :label-width="formLabelWidth">
                      <el-input
                        placeholder="请输入内容"
                        v-model="officeObj.leaderPhone"
                        :disabled="true">
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="办理方式" :label-width="formLabelWidth" prop="handleType">
                      <el-select v-model="form.handleType" placeholder="请选择缴费类型">
                        <el-option label="线上" value="线上"></el-option>
                        <el-option label="线下" value="线下"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="线上办理次数" :label-width="formLabelWidth" v-if="form.handleType==='线上'">
                      <el-select v-model="form.handleTimes" placeholder="请选择次数">
                        <el-option :label="item.hand" :value="item.value" v-for="(item,index) of handTime"
                                   :key="index"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="最多跑几次" :label-width="formLabelWidth" v-if="form.handleType==='线下'">
                      <el-select v-model="form.handleTimes" placeholder="请选择次数">
                        <el-option :label="item.hand" :value="item.value" v-for="(item,index) of handTime"
                                   :key="index"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="办理地址" :label-width="formLabelWidth" prop="handleAddress">
                      <el-input v-model="form.handleAddress" class="inputWidth"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="办理时间" :label-width="formLabelWidth" prop="handleTime">
                      <el-input v-model="form.handleTime" class="inputWidth"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="办理电话" :label-width="formLabelWidth" prop="handlePhone">
                      <el-input v-model="form.handlePhone" class="inputWidth"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="是否有业务系统" label-width="125px" prop="wheSystem">
                      <el-radio-group v-model="form.wheSystem" @change="clearSysyem">
                        <el-radio label="是"></el-radio>
                        <el-radio label="否"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row v-if="form.wheSystem==='是'">
                  <el-col :span="8">
                    <el-form-item label="业务系统" label-width="120px">
                      <el-select v-model="form.operationSystem" placeholder="请选择系统" @change="selectSysyem">
                        <el-option :label="item.operationName" :value="item.id" v-for="(item,index) of BusinessArr"
                                   :key="index"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="系统地址" label-width="120px">
                      <el-input
                        placeholder="请输入内容"
                        v-model="systemServe.systemDress"
                        :disabled="true">
                      </el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="系统负责人" label-width="120px">
                      <el-input
                        placeholder="请输入内容"
                        v-model="systemServe.systemLeader"
                        :disabled="true">
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="扩展信息" name="third">
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="是否跨部门" :label-width="formLabelWidth" prop="transDepartment">
                      <el-radio-group v-model="form.transDepartment">
                        <el-radio label="是" value="1"></el-radio>
                        <el-radio label="否" value="0"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="协同部门名称" :label-width="formLabelWidth">
                      <el-input v-model="form.collaborativeDepartment" class="inputWidth"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="是否收费" :label-width="formLabelWidth" prop="payment">
                      <el-radio-group v-model="form.payment">
                        <el-radio label="是"></el-radio>
                        <el-radio label="否"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row v-if="form.payment==='是'">
                  <el-col :span="8">
                    <el-form-item label="缴费方式" :label-width="formLabelWidth" prop="paymentType">
                      <el-select v-model="form.paymentType" placeholder="请选择办理方式">
                        <el-option label="线下" value="线下"></el-option>
                        <el-option label="线上" value="线上"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="缴费部门" :label-width="formLabelWidth" prop="paymentDepartment">
                      <el-cascader
                        placeholder="请选择"
                        :options="options"
                        :show-all-levels="false"
                        v-model="form.paymentDepartment"
                        @change="handleChange">
                      </el-cascader>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="收费依据" :label-width="formLabelWidth" prop="paymentGist">
                      <el-input v-model="form.paymentGist" class="inputWidth"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="22" class="serveCheckbox">
                    <el-form-item label="服务对象" :label-width="formLabelWidth" prop="serveObj">
                      <el-checkbox-group v-model="form.serveObj">
                        <el-checkbox :label="item.target" :value="item.id" v-for="(item,index) in serve"
                                     :key="index"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="22">
                    <el-form-item label="服务场景" :label-width="formLabelWidth" prop="sceneArr">
                      <el-checkbox-group v-model="form.sceneArr">
                        <template v-for="(item,index) in scenes">
                          <el-checkbox :label="item.scene" :value="item.id"></el-checkbox>
                        </template>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="办理流程:" :label-width="formLabelWidth">
                      <el-upload
                        class="upload-demo"
                        type="file"
                        ref="upload"
                        action=""
                        multiple
                        :auto-upload="false"
                        :show-file-list="false"
                        :on-change="changeFileUpload"
                      >
                        <el-button size="small" type="primary">选择文件</el-button>
                        <!--<span>{{fileData.length>=1?fileData[0].name:""}}</span>-->
                        <span v-for="(item,index) in fileData" :key="index" v-if="fileData[0].name">{{item.name}}</span>
                        <span v-for="(item,index) in uploadProcess" :key="index" v-if="uploadProcess[0].processName">{{item.processName}}</span>
                        <!--<span v-for="(item,index) in fileData" :key="index" v-if="typeof(fileData[0])===String">{{item}}</span>-->
                        <!--<button class="search" v-if="downloadstate===true" @click="dataLoad">下载</button>-->
                      </el-upload>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-tab-pane>
              <el-tab-pane label="材料信息" name="four">
                <table width="100%" bgcolor="#e9faff">
                  <tr align="center">
                    <td>
                      <div style="color:red;">{{metraltabName}}</div>
                      <div><span style="color:red;">*</span>材料名称</div>
                    </td>
                    <td>
                      <div style="color:red;">{{metraltabForm}}</div>
                      <div><span style="color:red;">*</span>材料形式</div>
                    </td>
                    <td>
                      <div style="color:red;">{{metraltabPaper}}</div>
                      <div><span style="color:red;">*</span>纸张大小</div>
                    </td>
                    <td>
                      <div><span style="color:red;">*</span>份数</div>
                    </td>
                    <td>空表</td>
                    <td>样表</td>
                    <td>备注</td>
                    <td></td>
                  </tr>
                  <tr align="center">
                    <td width="120px">
                      <el-input v-model="form.materialName" placeholder="请输入内容" @blur="metralNameBlur"></el-input>
                    </td>
                    <td width="130px">
                      <el-select v-model="form.materialForm" placeholder="请选择办理方式" @change="metralFormChange">
                        <el-option label="原件" value="原件"></el-option>
                        <el-option label="复印件" value="复印件"></el-option>
                      </el-select>
                    </td>
                    <td width="130px">
                      <el-select v-model="form.materialPaper" placeholder="请选择办理方式" @change="metralPaperChange">
                        <el-option label="A4" value="A4"></el-option>
                      </el-select>
                    </td>
                    <td width="120px">
                      <!--<el-input v-model="" placeholder="请输入内容"></el-input>-->
                      <el-input-number v-model="form.materialCopies" :min="1" :max="10"></el-input-number>
                    </td>
                    <td width="110px">
                      <div class="uploadss">上传文件
                        <label class="change-photo-btn">
                          <input type="file" @change="defaultStyleTable($event)">
                        </label>
                      </div>
                      <span v-if="typeof(defaultStyle)==='object'">{{defaultStyle.name}}</span>
                      <span v-if="typeof(defaultStyle)==='string'">{{defaultStyle}}</span>
                    </td>
                    <td width="110px">
                      <div class="uploadss">上传文件
                        <label class="change-photo-btn">
                          <input type="file" @change="defaultEmptyTable($event)">
                        </label>
                      </div>
                      <span v-if="typeof(defaultEmpty)==='object'">{{defaultEmpty.name}}</span>
                      <span v-if="typeof(defaultEmpty)==='string'">{{defaultEmpty}}</span>
                    </td>
                    <td width="100px">
                      <el-input v-model="form.materialExtras" placeholder="请输入内容"></el-input>
                    </td>
                    <td></td>
                  </tr>
                  <tr v-for="(item,index) in tableArr" :key="index" align="center">
                    <td width="110px">
                      <el-input v-model="item.materialName" placeholder="请输入内容"></el-input>
                    </td>
                    <td width="120px">
                      <el-select v-model="item.materialForm" placeholder="请选择办理方式">
                        <el-option label="原件" value="原件"></el-option>
                        <el-option label="复印件" value="复印件"></el-option>
                      </el-select>
                    </td>
                    <td width="120px">
                      <el-select v-model="item.materialPaper" placeholder="请选择办理方式">
                        <el-option label="A4" value="A4"></el-option>
                      </el-select>
                    </td>
                    <td width="120px">
                      <!--<el-input v-model="item.materialCopies" placeholder="请输入内容"></el-input>-->
                      <el-input-number v-model="item.materialCopies" :min="1" :max="10"></el-input-number>
                    </td>
                    <td width="110px">
                      <div class="uploadss">上传文件
                        <label class="change-photo-btn">
                          <input type="file" @change="arrStyleTable($event,index)">
                        </label>
                      </div>
                      <span v-if="typeof(formStyleDate[index])==='object'">{{formStyleDate[index].name}}</span>
                      <span v-if="typeof(formStyleDate[index])==='string'">{{formStyleDate[index]}}</span>
                      <!--{{formStyleDate}}-->
                    </td>
                    <td width="110px">
                      <div class="uploadss">上传文件
                        <label class="change-photo-btn">
                          <input type="file" @change="arrEmptyTable($event,index)">
                        </label>
                      </div>
                      <!--<span v-if="formEmptyDate[index].name">{{formEmptyDate[index].name}}</span>-->
                      <span v-if="typeof(formEmptyDate[index])==='object'">{{formEmptyDate[index].name}}</span>
                      <span v-if="typeof(formEmptyDate[index])==='string'">{{formEmptyDate[index]}}</span>
                    </td>
                    <td width="100px">
                      <el-input v-model="item.materialExtras" placeholder="请输入内容"></el-input>
                    </td>
                    <td><i class="el-icon-error del" style="display: inline;position: relative;" @click.stop="tableDel(index)"></i></td>
                  </tr>
                </table>
                <div style="text-align: center;line-height: 30px;font-size:24px;font-weight: bold;" @click="tableAdd">+
                </div>
              </el-tab-pane>
              <el-tab-pane label="常见问题" name="five">
                <el-row>
                  <el-col :span="22">
                    <el-form-item label="常见问题:" :label-width="formLabelWidth" style="margin-bottom: 0;">
                      <div class="problem">
                        <input type="text" placeholder="问题" v-model="form.queryInput" class="input">
                        <input type="text" placeholder="答案" v-model="form.awserInput" class="input">
                        <!--<i class="el-icon-plus" @click="addInput"></i>-->
                      </div>
                      <div class="box" style="width:100%;">
                        <div class="moreInput" v-for="(item,index) in number" :key="index">
                          <i class="el-icon-error del" @click="delInput(index)"></i>
                          <input type="text" placeholder="问题" v-model="item.question" class="input">
                          <input type="text" placeholder="答案" class="answer input" v-model="item.answer">
                        </div>
                      </div>
                    </el-form-item>
                    <div style="text-align: center;line-height: 30px;font-size:24px;font-weight: bold;"
                         @click="addInput">
                      +
                    </div>
                  </el-col>
                </el-row>
              </el-tab-pane>
            </el-tabs>
          </el-form>
          <div style="text-align:right;">
            <button class="search" @click="resolutionData('ruleForm')">新增</button>
          </div>
        </div>
        <div class="left scrollName">
          <h4>子项名称</h4>
          <ul>
            <li v-for="items of matterArr">
              {{items}}
            </li>
          </ul>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="defineBtnResolution">保存</el-button>
        <el-button @click="resolution=false">取 消</el-button>
      </div>
    </el-dialog>
    <!--详细-->
    <el-dialog title="详情" :visible.sync="dialogDetail" width="900px" class="dialogStyle" @close="closeDetail">
      <el-form :model="form" class="demo-ruleForm formss" ref="ruleForm">
        <el-tabs v-model="addName" @tab-click="handleClick">
          <el-tab-pane label="基本信息" name="first">
            <el-row>
              <el-col :span="8">
                <el-form-item label="事项名称" :label-width="formLabelWidth" prop="subitemName">
                  {{items.subitemName}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="事项编码" :label-width="formLabelWidth" prop="subitemCode">
                  {{items.subitemCode}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="事项主题" :label-width="formLabelWidth" prop="itemTheme">
                  {{itemTheme.itemTheme}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="归属部门" class="zhuguan" :label-width="formLabelWidth" prop="mainDepartment">
                  {{itemdepart.nodeName}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="办件类型" :label-width="formLabelWidth" prop="itemType">
                  {{typeArr.itemType}}
                </el-form-item>
              </el-col>
              <!--<el-col :span="8" v-if="form.itemType===4">-->
              <!--<el-form-item label="承诺天数:" :label-width="formLabelWidth">-->

              <!--</el-form-item>-->
              <!--</el-col>-->
            </el-row>
            <el-row>
              <el-col :span="20">
                <el-form-item label="业务介绍" :label-width="formLabelWidth" prop="itemIntroduction">
                  {{items.itemIntroduction}}
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="办理信息" name="second">
            <el-row>
              <el-col :span="8">
                <el-form-item label="办理科室" :label-width="formLabelWidth" prop="office">
                  {{itemoffice.officeName}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="科室地址" :label-width="formLabelWidth">
                  {{itemoffice.officeAddress}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="科室电话" :label-width="formLabelWidth">
                  {{itemoffice.officeNumber}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="服务时间" :label-width="formLabelWidth">
                  {{itemoffice.officeWorkTime}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="服务负责人" :label-width="formLabelWidth">
                  {{itemoffice.officePrincipal}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="负责人电话" :label-width="formLabelWidth">
                  {{itemoffice.officePrincipalTel}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="办理方式" :label-width="formLabelWidth" prop="handleType">
                  {{items.handleType}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="线上办理次数" :label-width="formLabelWidth" v-if="items.handleType==='线上'">
                  {{items.handleTimes}}
                </el-form-item>
                <el-form-item label="最多跑几次" :label-width="formLabelWidth" v-if="items.handleType==='线下'">
                  {{items.handleTimes}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="办理地址" :label-width="formLabelWidth" prop="handleAddress">
                  {{items.handleAddress}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="办理时间" :label-width="formLabelWidth" prop="handleTime">
                  {{items.handleTime}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="办理电话" :label-width="formLabelWidth" prop="handlePhone">
                  {{items.handlePhone}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="是否有业务系统" label-width="125px" prop="wheSystem">
                  {{itemSystem===''?'否':'是'}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row v-if='itemSystem!==""'>
              <el-col :span="8">
                <el-form-item label="业务系统" label-width="120px">
                  {{itemSystem.operationName}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="系统地址" label-width="120px">
                  {{itemSystem.operationUrl}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="系统负责人" label-width="120px">
                  {{itemSystem.operationPrincipal}}
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="扩展信息" name="third">
            <el-row>
              <el-col :span="8">
                <el-form-item label="是否跨部门" :label-width="formLabelWidth" prop="transDepartment">
                  {{items.transDepartment}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="协同部门名称" :label-width="formLabelWidth">
                  {{items.collaborativeDepartment}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="是否收费" :label-width="formLabelWidth" prop="payment">
                  {{items.payment}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row v-if="items.payment==='是'">
              <el-col :span="8">
                <el-form-item label="缴费方式" :label-width="formLabelWidth">
                  {{items.payment}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="缴费部门" :label-width="formLabelWidth">
                  {{itempayment.nodeName}}
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="收费依据" :label-width="formLabelWidth">
                  {{items.paymentGist}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="22" class="serveCheckbox">
                <el-form-item label="服务对象" :label-width="formLabelWidth" prop="serveObj">
                     <span v-for="(item,index) in targets" style="padding-right: 10px;">
                      {{item.target}}
                      </span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="22">
                <el-form-item label="服务场景" :label-width="formLabelWidth" prop="sceneArr">
                     <span v-for="(item,index) in scenesDetail" style="padding-right: 10px;">
                        {{item.scene}}
                     </span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="办理流程:" :label-width="formLabelWidth">
                  <div v-for="(item,index) in itemProcesses" style="padding-right: 10px;">
                    {{item.processName}}
                    <el-button type="primary" class="btnstyle" v-if="itemProcesses.length>0"
                               @click="downProcessName(item.processId)">下载
                    </el-button>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="材料信息" name="four">
            <table width="100%" bgcolor="#e9faff">
              <tr align="center">
                <td>材料名称</td>
                <td>材料形式</td>
                <td>纸张大小</td>
                <td>份数</td>
                <td>空表</td>
                <td>样表</td>
                <td>备注</td>
                <td></td>
              </tr>
              <tr v-for="(item,index) in materalItem" :key="index" align="center">
                <td width="110px">
                  {{item.materialName}}
                </td>
                <td width="120px">
                  {{item.materialForm}}
                </td>
                <td width="120px">
                  {{item.materialPaper}}
                </td>
                <td width="120px">
                  {{item.materialCopies}}
                </td>
                <td width="110px">
                  {{item.materialSheetName}}
                  <button @click="demoload(item.id)" v-if="item.materialSheetName">下载</button>
                </td>
                <td width="110px">
                  {{item.materialDemoName}}
                  <button @click="sheetload(item.id)" v-if="item.materialDemoName">下载</button>
                </td>
                <td width="100px">
                  {{item.materialExtras}}
                </td>
              </tr>
            </table>
          </el-tab-pane>
          <el-tab-pane label="常见问题" name="five">
            <el-row>
              <el-col :span="22">
                <el-form-item label="常见问题:" :label-width="formLabelWidth" style="margin-bottom: 0;">
                  <ul v-for="(item,index) in itemQuestions">
                    <li style="background-color:#dcdfe6; padding-left: 10px;">问题: {{item.question}}</li>
                    <li style="background-color:#ecf5ff; padding-left: 10px;">答案: {{item.answer}}</li>
                  </ul>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogDetail=false">确 定</el-button>
        <el-button @click="dialogDetail=false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import qs from 'qs'
  import {
    getList,
    getListManage,
    setListData,
    setActiveData,
    searchDetail,
    setServiceObject,
    pageSearch,
    reviseEvent,
    uploadImage,
    getMergeData,
    BatchdeleDate,
    deleDate,
    getorganization,
    getscene,
    getDepart,
    setSplit,
    getSearchDepart,
    deleteAndActivate,
    getResolution,
    setStateData,
    getSearchBusiness,
    getEventTitle,
    getEventType,
    BatchStateData,
    setRevoke,
    getBusiness,
    getdownload,
    cnacelApproval,
    setStatus,
    getStatistics,
    cancalBtn
  } from '@/api/table'
  import page from '@/components/paging'
  import {dataState,handleTypes,paymentOperation,itemStateDetail}from '@/utils/filters'
  import $ from "jquery"

  export default {
    filters: {
      dataState,
      handleTypes,
      paymentOperation,
      itemStateDetail
    },
    data() {
      return {
        input: '',
        formInline: {
          region: ''
        },
        list: [],
        listLoading: true,
        downloads: false,
        dialogDetail: false,
        totalPage: '',
        pageIndex: 1,
        reviseState: false,
        reportArr: [],
        formName: {
          state: ''
        },
        objectData: {},
        dialogForm: false,
        form: {
          subitemName: '',//事项名称1
          subitemCode: '',//事项项编码1
          itemTheme: '',//事项主题
          mainDepartment: [],//归属部门1
          itemType: '',//办件类型
          itemTypeExtra: '',//承诺天数
          itemIntroduction: '',//业务介绍
          classification: '',//事项分类1
          office: '',//办理科室
          handleType: '',//办理方式1
          handleTimes: '',//办理次数1
          handleAddress: '',//办理地址
          handleTime: '',//办理时间
          handlePhone: '',//办理电话
          operationSystem: null,//业务系统
          transDepartment: '',//是否跨部门1
          collaborativeDepartment: '',//协同部门1
          payment: '',//是否收费1
          paymentType: '',//缴费方式1
          paymentDepartment: [],//缴费部门
          paymentGist: '',//收费依据
          handleProcedures: '',//办理流程1
          serveObj: [],//服务对象
          sceneArr: [],//服务场景
          queryInput: '',//问题
          awserInput: '',
          materialName: '',//材料名称
          materialForm: '',//材料形式
          materialPaper: '',//纸张大小
          materialCopies: '',//分数
          materialSheetPath: '',//空表
          materialDemoPath: '',//样表
          materialExtras: '',//备注
          wheSystem: '',
        },
        resolutionArrs: [],//存放拆分的数组
        formLabelWidth: '120px',
        resolutionWidth: '82px',
        rules: {
          subitemName: [
            {required: true, message: '事项名称不能为空', trigger: 'blur',}
          ],
          subitemCode: [
            {required: true, message: '事项编码不能为空', trigger: 'blur',}
          ],
          itemTheme: [
            {required: true, message: '事项主题不能为空', trigger: 'blur',}
          ],
          itemType: [
            {required: true, message: '办件类型不能为空', trigger: 'blur',}
          ],
          itemIntroduction: [
            {required: true, message: '业务介绍不能为空', trigger: 'blur',}
          ],
          mainDepartment: [
            {required: true, message: '归属部门不能为空', trigger: 'blur',},
          ],
          office: [
            {required: true, message: '办理科室不能为空', trigger: 'blur',},
          ],
          handleType: [
            {required: true, message: '办理方式不能为空', trigger: 'blur',},
          ],
          handleAddress: [
            {required: true, message: '办理地址不能为空', trigger: 'blur',},
          ],
          handleTime: [
            {required: true, message: '办理时间不能为空', trigger: 'blur',},
          ],
          handlePhone: [
            {required: true, message: '办理电话不能为空', trigger: 'blur',},
          ],
          wheSystem: [
            {required: true, message: '必填项哦', trigger: 'blur',},
          ],
          transDepartment: [
            {required: true, message: '必填项哦', trigger: 'blur',},
          ],
          payment: [
            {required: true, message: '必填项哦', trigger: 'blur',},
          ],
          serveObj: [
            {required: true, message: '必填项哦', trigger: 'blur',},
          ],
          sceneArr: [
            {required: true, message: '必填项哦', trigger: 'blur',},
          ],
          paymentType: [
            {required: true, message: '必填项哦', trigger: 'blur',},
          ],
          paymentDepartment: [
            {required: true, message: '必填项哦', trigger: 'blur',},
          ],
          paymentGist: [
            {required: true, message: '必填项哦', trigger: 'blur',},
          ]
        },
        handTime: [
          {
            hand: "办理一次",
            value: 1
          },
          {
            hand: "办理二次",
            value: 2
          },
          {
            hand: "办理三次",
            value: 3
          },
          {
            hand: "办理四次",
            value: 4
          },
          {
            hand: "办理五次",
            value: 5
          }
        ],
        num1: '',
        serve: [],
        scenes: [],
        scenesDetail: [],
        number: [],
        queryInput: '',
        awserInput: '',
        fileData: [],
        dialogStyle: {
          padding: '8px 0'
        },
        addUpdate: "",
        uuidData: '',
        checkboxArr: [],
        stateJudge: "",
        dialogTitle: '',
        moreUuid: [],
        items: [],//详情
        itemTheme: {},//主题对象
        itemdepart: {},//归属部门
        itemoffice: {},//科室详情
        itemSystem: '',//操作系统
        itemProcesses: [],//办理流程
        itempayment: {},//缴费部门
        itemQuestions: [],
        scen: [],
        targets: [],
        materalItem: [],//材料部门
        resolution: false,
        activeName: 'first',
        addName: 'first',
        addNameboth:'first',
        departArr: [],//获取科室
        BusinessArr: [],//获取业务系统
        TitleArr: [],//获取事项主题
        TypeArr: [],//获取事项类型
        selectedOptions: [],//联动
        options: [],
        downloadstate: '',
        downloadUuid: '',
        tableArr: [],
        formEmptyDate: [],
        formStyleDate: [],
        defaultEmpty: '',
        defaultStyle: '',
        officeObj: {//当选择办理科室的下拉框时更具id查找信息
          officeAddress: '',
          officePhone: '',
          officeTime: '',
          officeLeader: '',
          leaderPhone: ''
        },
        systemServe: {
          systemDress: '',
          systemLeader: ''
        },
        matealId: '',
        metealItem: '',
        uploadProcess: [],
        emptyFrom: [],
        styleFrom: [],
        metraltabName: "",
        metraltabForm: '',
        metraltabPaper: '',
        metraltabCopies: '',
        matterArr:[],
        metterUuid:[],
        typeArr:[]
      }
    },
    components: {
      page
    },
    watch: {},
    created(){
      this.$store.dispatch('getmenus',1)
    },
    mounted() {
      // this.fetchData()
      // this.$store.dispatch('getmenus',1)
      this.pageData(this.pageIndex)
      this.init()
    },
    methods: {
      /*递归组织架构重构数据格式*/
      getOrganizationTree(list) {
        let array = new Array();
        for (let item of list) {
          if (item.childList.length === 0) {
            array.push({value:item.obj.id, label: `${item.obj.name}`});
          } else {
            array.push({
              value:item.obj.id,
              label: `${item.obj.name}`,
              children: this.getOrganizationTree(item.childList)
            });
          }
        }
        return array;
      },
      //初始化服务对象
      init() {
        //获取服务对象
        setServiceObject().then(res => {
          if (res.data.code === 200) {
            this.serve = res.data.data
            console.log(this.serve)
          }
        }).catch(err => {
          console.log(err)
        })
        //获取场景对象
        getscene().then(res => {
          if (res.data.code === 200) {
            this.scenes = res.data.data
          }
        }).catch(err => {
          console.log(err)
        })
        //科室
        getDepart().then(res => {
          if (res.data.code === 200) {
            this.departArr = res.data.data
          }
        })
        //业务系统
        getBusiness().then(res => {
          if (res.data.code === 200) {
            this.BusinessArr = res.data.data
          }
        }).catch(err => {
          console.log(err)
        })
        //事项主题
        getEventTitle().then(res => {
          if (res.data.code === 200) {
            this.TitleArr = res.data.data
          }
        }).catch(err => {
          console.log(err)
        })
        //事项类型
        getEventType().then(res => {
          if (res.data.code === 200) {
            console.log(res.data.data)
            this.TypeArr = res.data.data
          }
        }).catch(err => {
          console.log(err)
        })
        //组织架构
        getorganization().then(res => {
          console.log(res, '组织建构')
          this.options = this.getOrganizationTree(res.data.data.childList)
          console.log(this.options,'我的组织架构')
        }).catch(err => {
          console.log(err)
        })
      },
      //重置函数
      reseat() {
        this.form = {
          subitemName: '',//事项名称1
          subitemCode: '',//事项项编码1
          itemTheme: '',//事项主题
          mainDepartment: [],//归属部门1
          itemType: '',//办件类型
          itemIntroduction: '',//业务介绍
          classification: '',//事项分类1
          office: '',//办理科室
          handleType: '',//办理方式1
          handleTimes: '',//办理次数1
          handleAddress: '',//办理地址
          handleTime: '',//办理时间
          handlePhone: '',//办理电话
          operationSystem: '',//业务系统
          transDepartment: '',//是否跨部门1
          collaborativeDepartment: '',//协同部门1
          payment: '',//是否收费1
          paymentType: '',//缴费方式1
          paymentDepartment: [],//缴费部门
          paymentGist: '',//收费依据
          handleProcedures: '',//办理流程1
          serveObj: [],
          sceneArr: [],
          queryInput: '',
          awserInput: '',
          materialName: '',//材料名称
          materialForm: '',//材料形式
          materialPaper: '',//纸张大小
          materialCopies: '',//分数
          materialSheetPath: '',//空表
          materialDemoPath: '',//样表
          materialExtras: '',//备注
          wheSystem: '',
        }
        this.number = []
        // this.$refs.upload.clearFiles()
        this.num1 = ''
        this.fileData = []
        this.downloadUuid = ''
        this.downloadstate = ''
        this.uuidData = ''
        this.matealId = ''
        this.metealItem = ''
        this.formEmptyDate = []
        this.formStyleDate = []
        this.tableArr = []
        this.defaultEmpty = ''
        this.defaultStyle = ''
        this.officeObj = {//当选择办理科室的下拉框时更具id查找信息
          officeAddress: '',
          officePhone: '',
          officeTime: '',
          officeLeader: '',
          leaderPhone: ''
        }
        this.$refs['ruleForm'].resetFields();
      },
      pageEvent(page) {
        this.pageIndex = page
        this.pageData(this.pageIndex)
      },
      //分页数据
      pageData(page) {
        this.listLoading = true
        this.pageIndex = page
        let params = {
          page: this.pageIndex,
          size: '10'
        }
        pageSearch(params).then(res => {
          console.log(res, '分页数据')
          if (res.data.code === 200) {
            this.listLoading = false
            console.log(res, '分页')
            this.list = res.data.data.list
            this.totalPage = res.data.data.total
            console.log(this.list, '分页数据lql')
          }
        }).then(err => {
          console.log(err)
        })
      },
      //修改状态
      revise(el) {
        this.$confirm('此操作上报这条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let params = {
            uuid: el.uuid
          }
          setStatus(params).then(res => {
            console.log(res, '状态')
            if (res.data.code === 200) {
              this.$message({
                message: '修改成功',
                type: 'success'
              });
              console.log(this.pageIndex, '输出')
              this.pageData(this.pageIndex)
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消',
          });
        });

        console.log(el, '这是一')
      },
      //点击确定新增和删除
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let mergeArr = []
            let confirm = false
            mergeArr.push({
              materialName: this.form.materialName,
              materialForm: this.form.materialForm,
              materialPaper: this.form.materialPaper,
              materialCopies: this.form.materialCopies,
            })
            mergeArr = [...mergeArr, ...this.tableArr]
            console.log(mergeArr, '合并')
            for (var i = 0; i <= mergeArr.length - 1; i++) {
              if (mergeArr[i].materialName === '') {
                this.metraltabName = '材料名称不能为空'
                console.log(this.metraltabName)
              } else if (mergeArr[i].materialForm === '') {

                this.metraltabForm = '材料形式不能为空'
              } else if (mergeArr[i].materialPaper === '') {
                this.metraltabPaper = '纸张大小不能为空'
              } else {
                this.metraltabName = ''
                this.metraltabForm = ''
                this.metraltabPaper = ''
                confirm = true
              }
            }
            if (confirm) {
              let obj = {
                subitemName: this.form.subitemName,//事项名称1
                subitemCode: this.form.subitemCode,//事项项编码1
                itemTheme: this.form.itemTheme,//事项主题
                mainDepartment: this.form.mainDepartment,//归属部门1
                itemType: this.form.itemType,//办件类型
                itemTypeExtra: this.form.itemTypeExtra,//承诺件
                itemIntroduction: this.form.itemIntroduction,//业务介绍
                office: this.form.office,//办理科室
                handleType: this.form.handleType,//办理方式1
                handleTimes: this.form.handleTimes,//办理次数1
                handleAddress: this.form.handleAddress,//办理地址
                handleTime: this.form.handleTime,//办理时间
                handlePhone: this.form.handlePhone,//办理电话
                transDepartment: this.form.transDepartment,//是否跨部门1
                collaborativeDepartment: this.form.collaborativeDepartment,//协同部门1
                payment: this.form.payment,//是否收费1
              }
              console.log(obj,'kankan231231')
              let uuidArr = []
              let serveArr = []
              let sceneArr = []
              let numberArr = []//问题
              let material = []//材料
              let arrEmpty = []//空表
              let arrStyle = []//样表
              // let numberArr=[...this.number]
              uuidArr = this.checkboxArr.map(item => item.uuid)
              console.log(uuidArr)
              serveArr = [...this.form.serveObj]
              sceneArr = [...this.form.sceneArr]
              if (obj.transDepartment === '是') {
                obj.transDepartment = 1
              } else if (obj.transDepartment === '否') {
                obj.transDepartment = 0
              }
              if (obj.payment === '是') {
                obj.payment = 1
              } else if (obj.payment === '否') {
                obj.payment = 0
              }
              if (obj.handleType === '线上') {
                obj.handleType = 0
              } else if (obj.handleType === '线下') {
                obj.handleType = 1
              }
              if (this.form.queryInput !== '' && this.form.awserInput !== '') {
                numberArr.push({
                    question: this.form.queryInput,
                    answer: this.form.awserInput
                  }
                )
                if (this.number.length > 0) {
                  numberArr = [...numberArr, ...this.number]
                }
              }
              if (this.form.materialName !== '' && this.form.materialForm !== '' && this.form.materialPaper !== '' && this.form.materialCopies !== '') {
                material.push({
                  materialName: this.form.materialName,
                  materialForm: this.form.materialForm,
                  materialPaper: this.form.materialPaper,
                  materialCopies: this.form.materialCopies,
                  materialExtras: this.form.materialExtras,
                  materialId: this.matealId,
                  itemId: this.metealItem
                })
                if (this.tableArr.length > 0) {
                  material = [...material, ...this.tableArr]
                }
              }
              console.log(material, this.tableArr, '是空吗')
              if (this.defaultEmpty !== '') {
                arrEmpty.push(this.defaultEmpty)
              } else {
                arrEmpty.push(null)
              }
              arrEmpty = [...arrEmpty, ...this.formEmptyDate]
              if (this.defaultStyle !== '') {
                arrStyle.push(this.defaultStyle)
              } else {
                arrStyle.push(null)
              }
              arrStyle = [...arrStyle, ...this.formStyleDate]
              if (obj.itemType === 4) {
                obj.itemTypeExtra = this.num1
              } else {
                obj.itemTypeExtra = 0
              }
              if (obj.mainDepartment.length > 1) {
                obj.mainDepartment = obj.mainDepartment.join(",")
              } else if (obj.mainDepartment.length === 1) {
                obj.mainDepartment = obj.mainDepartment[0]
              }
              serveArr.forEach((item, index) => {
                this.serve.forEach((ite, ind) => {
                  if (item === ite.target) {
                    serveArr[index] = ite.id
                  }
                })
              })
              sceneArr.forEach((item, index) => {
                this.scenes.forEach((ite, ind) => {
                  if (item === ite.scene) {
                    sceneArr[index] = ite.id
                  }
                })
              })
              let item = {
                baseInfo: {
                  subitemName: obj.subitemName,
                  subitemCode: obj.subitemCode,
                  itemTheme: obj.itemTheme,
                  mainDepartment: obj.mainDepartment,
                  itemType: obj.itemType,
                  itemTypeExtra: obj.itemTypeExtra,
                  itemIntroduction: obj.itemIntroduction,
                  // classification: obj.classification,
                },
                handleInfo: {
                  office: obj.office,
                  handleType: obj.handleType,
                  handleTimes: obj.handleTimes,
                  handleAddress: obj.handleAddress,
                  // operationSystem: obj.operationSystem,
                  handleTime: obj.handleTime,
                  handlePhone: obj.handlePhone
                },
                extraInfo: {
                  transDepartment: obj.transDepartment,
                  collaborativeDepartment: obj.collaborativeDepartment,
                  payment: obj.payment,
                  targetIds: serveArr,
                  sceneIds: sceneArr
                },
                materialInfo: material,
                questionInfo: numberArr,
              }
              if (item.extraInfo.payment === 1) {
                if (this.form.paymentType === '线下') {
                  item.extraInfo.paymentType = 1
                } else if (this.form.paymentType === '线上') {
                  item.extraInfo.paymentType = 0
                }
                item.extraInfo.paymentGist = this.form.paymentGist
                if (this.form.paymentDepartment.length > 1) {
                  item.extraInfo.paymentDepartment = this.form.paymentDepartment.join(",")
                } else if (this.form.paymentDepartment.length === 1) {
                  item.extraInfo.paymentDepartment = this.form.paymentDepartment[0]
                }
              }
              if (this.form.wheSystem === '是') {
                item.handleInfo.operationSystem = this.form.operationSystem
              }
              console.log(item, '888888')
              //新增的参数
              let formData = new FormData()
              for (var i = 0; i <= this.fileData.length - 1; i++) {
                formData.append('file', this.fileData[i])
              }
              let materialDemoCount = []
              let materialSheetCount = []
              for (var i = 0; i <= arrEmpty.length - 1; i++) {
                if (arrEmpty[i] === null || arrEmpty[i] === '') {
                  materialDemoCount.push(0)
                  formData.append('materialDemoFile', null)
                } else {
                  formData.append('materialDemoFile', arrEmpty[i])
                  materialDemoCount.push(1)
                }
              }

              for (var i = 0; i <= arrStyle.length - 1; i++) {
                if (arrStyle[i] === null || arrStyle[i] === '') {
                  materialSheetCount.push(0)
                  formData.append('materialSheetFile', null)
                } else {
                  formData.append('materialSheetFile', arrStyle[i])
                  materialSheetCount.push(1)
                }
              }
              formData.append('materialDemoCount', materialDemoCount)
              formData.append('materialSheetCount', materialSheetCount)
              formData.append('item', JSON.stringify(item))
              //合并的参数
              let formerge = new FormData()
              let mergeDemo = []
              let mergeSheet = []
              for (var i = 0; i <= this.fileData.length - 1; i++) {
                formerge.append('file', this.fileData[i])
              }
              for (var i = 0; i <= arrEmpty.length - 1; i++) {
                if (arrEmpty[i] === '' || arrEmpty[i] === null) {
                  formerge.append('materialDemoFile', null)
                  mergeSheet.push(0)
                } else {
                  formerge.append('materialDemoFile', arrEmpty[i])
                  mergeSheet.push(1)
                }
              }
              formerge.append('materialSheetCount', mergeSheet)
              for (var i = 0; i <= arrStyle.length - 1; i++) {
                if (arrStyle[i] === '' || arrStyle[i] === null) {
                  mergeDemo.push(0)
                  formerge.append('materialSheetFile', null)
                } else {
                  formerge.append('materialSheetFile', arrStyle[i])
                  mergeDemo.push(1)
                }
              }
              formerge.append('materialDemoCount', mergeDemo)
              formerge.append('item', JSON.stringify(item))
              formerge.append('uuids', uuidArr)
              //修改参数
              let formupload = new FormData()
              let uploadDemoCount = []
              let uploadSheetCount = []
              for (var i = 0; i <= this.fileData.length - 1; i++) {
                formupload.append('file', this.fileData[i])
              }
              for (var i = 0; i <= arrEmpty.length - 1; i++) {
                if (typeof (arrEmpty[i]) === 'string' || arrEmpty[i] === null || arrEmpty[i] === '') {
                  uploadDemoCount.push(0)
                  formupload.append('materialDemoFile', null)
                } else {
                  uploadDemoCount.push(1)
                  formupload.append('materialDemoFile', arrEmpty[i])
                }
              }
              console.log(arrEmpty, uploadDemoCount, '空表')
              formupload.append('materialDemoCount', uploadDemoCount)
              for (var i = 0; i <= arrStyle.length - 1; i++) {
                if (typeof (arrStyle[i]) === 'string' || arrStyle[i] === null || arrStyle[i] === '') {
                  uploadSheetCount.push(0)
                  formupload.append('materialSheetFile', null)
                } else {
                  uploadSheetCount.push(1)
                  formupload.append('materialSheetFile', arrStyle[i])
                }
              }
              console.log(arrStyle, uploadSheetCount, '样表')
              formupload.append('materialSheetCount', uploadSheetCount)
              formupload.append('item', JSON.stringify(item))
              formupload.append('uuid', this.uuidData)
              if (this.addUpdate === true) {
                setListData(formData).then(res => {
                  console.log(res, '新增')
                  if (res.data.code === 200) {
                    let insertFormData=new FormData()
                    insertFormData.append('uuids',res.data.data)
                    setActiveData(insertFormData).then(res=>{
                      if(res.data.code===200){
                        this.$message({
                          message: '恭喜你,新增成功',
                          type: 'success'
                        });
                        this.dialogForm = false
                        this.pageData(this.pageIndex)
                      }
                    })

                  }
                })
              } else if (this.addUpdate === false) {
                // console.log(param, '修改参数')
                reviseEvent(formupload).then(res => {
                  if (res.data.code === 200) {
                        this.$message({
                          message: '恭喜你,修改成功',
                          type: 'success'
                        });
                        this.dialogForm = false
                        this.pageData(this.pageIndex)
                  }
                  console.log(res, '修改')
                })
              } else if (this.addUpdate === 'merge') {
                getMergeData(formerge).then(res => {
                  if (res.data.code === 200) {
                    let mergeFormData=new FormData()
                    mergeFormData.append('uuids',res.data.data)
                    setActiveData(mergeFormData).then(res=>{
                      if(res.data.code===200){
                        this.$message({
                          message: '恭喜你,合并成功',
                          type: 'success'
                        });
                        this.dialogForm = false
                        this.pageData(this.pageIndex)
                        this.moreUuid = []
                      }
                    })
                  }
                  console.log(res)
                })
              }
            }else{
              this.$message({
                message: '有东西没有填完哦',
                type: 'warning'
              });
              return false
            }
          } else {
            this.$message({
              message: '有东西没有填完哦',
              type: 'warning'
            });
            return false;
          }
        })
      },
      cancalBtns(el) {
        this.$confirm('此操作取消这条数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let params = {
            uuid: el.uuid
          }
          cancalBtn(params).then(res => {
            console.log(res, '按钮信息')
            if (res.data.code === 200) {
              this.$message({
                message: '取消成功',
                type: 'success'
              });
              this.pageData(this.pageIndex)
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消',
          });
        });
      },
      //验证表单
      metralNameBlur(){
        if (this.form.materialName !== '') {
          this.metraltabName = ''
        }
      },
      metralFormChange() {
        if (this.form.materialForm !== '') {
          this.metraltabForm = ''
        }
      },
      metralPaperChange() {
        if (this.form.materialPaper !== '') {
          this.materialPaper = ''
        }
      },
      //新增
      newAdd() {
        this.dialogTitle = '新增'
        this.dialogForm = true
        this.addUpdate = true
      },
      //新增表单时弹出框消失调重置函数
      cancleForm() {
        this.dialogForm = false
        // this.reseat()
      },
      handleChange() {

      },
      changeFile() {

      },
      //动态添加input
      addInput() {
        this.number.push({
          question: "",
          answer: ""
        })
      },
      //动态删除input
      delInput(ind) {
        this.number.splice(ind, 1)
      },
      //点击修改查看详情
      updateData() {
        if (this.checkboxArr.length === 1) {
          console.log(this.checkboxArr[0].state, '修改状态')
          if (this.checkboxArr[0].state !== 1) {
            this.dialogTitle = '修改'
            this.addUpdate = false
            let params = {
              uuid: this.checkboxArr[0].uuid
            }
            searchDetail(params).then(res => {
              console.log(res, '查询uuid')
              this.uuidData = ''
              this.num1 = ''
              if (res.data.code === 200) {
                this.officefun(res.data.data.item.office)
                this.dialogForm = true
                this.uuidData = res.data.data.item.uuid
                if (res.data.data.item.itemType === 4) {
                  this.num1 = res.data.data.item.itemTypeExtra
                }
                if (res.data.data.item.paymentType === 0) {
                  res.data.data.item.paymentType = '线上'
                } else if (res.data.data.item.paymentType === 1) {
                  res.data.data.item.paymentType = '线下'
                }
                if (res.data.data.item.payment === 1) {
                  res.data.data.item.payment = '是'
                  this.form.paymentType = res.data.data.item.paymentType
                  this.form.paymentDepartment = [res.data.data.item.paymentDepartment]
                  this.form.paymentGist = res.data.data.item.paymentGist
                } else if (res.data.data.item.payment === 0) {
                  res.data.data.item.payment = '否'
                }
                if (res.data.data.item.operationSystem) {
                  this.form.wheSystem = '是'
                  this.form.operationSystem = res.data.data.item.operationSystem,
                    this.systemfun(res.data.data.item.operationSystem)
                } else {
                  this.form.wheSystem = '否'
                }
                if (res.data.data.processes.length > 0) {
                  // this.fileData = res.data.data.processes.map((item)=>item.processName)
                  this.uploadProcess = res.data.data.processes
                }
                if (res.data.data.item.transDepartment === 1) {
                  res.data.data.item.transDepartment = '是'
                } else if (res.data.data.item.transDepartment === 0) {
                  res.data.data.item.transDepartment = '否'
                }
                if (res.data.data.item.handleType === 1) {
                  res.data.data.item.handleType = '线下'
                } else if (res.data.data.item.handleType === 0) {
                  res.data.data.item.handleType = '线上'
                }
                this.form.mainDepartment=res.data.data.item.mainDepartment.split(",").map(item=>parseInt(item))
                console.log(this.form.mainDepartment,this.form.paymentDepartment)
                  console.log(this.options)
                this.form.subitemName = res.data.data.item.subitemName ,
                  this.form.subitemCode = res.data.data.item.subitemCode,
                  this.form.collaborativeDepartment = res.data.data.item.collaborativeDepartment ,
                  this.form.handleType = res.data.data.item.handleType ,
                  this.form.payment = res.data.data.item.payment ,
                  this.form.handleTimes = res.data.data.item.handleTimes,
                  this.form.paymentMethod = res.data.data.item.paymentMethod,
                  this.form.transDepartment = res.data.data.item.transDepartment,
                  this.form.itemTheme = res.data.data.item.itemTheme,
                  this.form.itemType = res.data.data.item.itemType,
                  this.form.office = res.data.data.item.office,
                  this.form.handleAddress = res.data.data.item.handleAddress,
                  this.form.handlePhone = res.data.data.item.handlePhone
                this.form.handleTime = res.data.data.item.handleTime
                this.form.itemIntroduction = res.data.data.item.itemIntroduction
                this.form.itemType = res.data.data.item.itemType
                this.form.serveObj = res.data.data.targets.map(item => item.target)
                this.form.sceneArr = res.data.data.scenes.map(item => item.scene)
                //问题
                if (res.data.data.itemQuestions.length >= 2) {
                  this.queryInput = res.data.data.itemQuestions.slice(0, 1)[0].question
                  this.awserInput = res.data.data.itemQuestions.slice(0, 1)[0].answer
                  this.number = res.data.data.itemQuestions.slice(1)
                } else if (res.data.data.itemQuestions.length === 1) {
                  this.queryInput = res.data.data.itemQuestions.slice(0, 1)[0].question
                  this.awserInput = res.data.data.itemQuestions.slice(0, 1)[0].answer
                  this.number = []
                } else if (res.data.data.itemQuestions.length < 1) {
                  this.queryInput = ''
                  this.awserInput = ''
                  this.number = []
                }
                //材料
                if (res.data.data.materials.length >= 2) {
                  this.form.materialName = res.data.data.materials.slice(0, 1)[0].materialName
                  this.form.materialForm = res.data.data.materials.slice(0, 1)[0].materialForm
                  this.form.materialPaper = res.data.data.materials.slice(0, 1)[0].materialPaper
                  this.form.materialCopies = res.data.data.materials.slice(0, 1)[0].materialCopies
                  this.form.materialExtras = res.data.data.materials.slice(0, 1)[0].materialExtras
                  this.defaultEmpty = res.data.data.materials.slice(0, 1)[0].materialDemoName
                  this.defaultStyle = res.data.data.materials.slice(0, 1)[0].materialSheetName
                  this.tableArr = res.data.data.materials.slice(1)
                  this.formEmptyDate = this.tableArr.map(item => item.materialDemoName)
                  this.formStyleDate = this.tableArr.map(item => item.materialSheetName)
                  console.log(res.data.data.materials.slice(1))
                  console.log(this.formEmptyDate, '空表')
                  this.matealId = res.data.data.materials.slice(0, 1)[0].id
                  this.metealItem = res.data.data.materials.slice(0, 1)[0].itemId
                } else if (res.data.data.materials.length === 1) {
                  this.form.materialName = res.data.data.materials.slice(0, 1)[0].materialName
                  this.form.materialForm = res.data.data.materials.slice(0, 1)[0].materialForm
                  this.form.materialPaper = res.data.data.materials.slice(0, 1)[0].materialPaper
                  this.form.materialCopies = res.data.data.materials.slice(0, 1)[0].materialCopies
                  this.form.materialExtras = res.data.data.materials.slice(0, 1)[0].materialExtras
                  this.defaultEmpty = res.data.data.materials.slice(0, 1)[0].materialSheetName
                  this.defaultStyle = res.data.data.materials.slice(0, 1)[0].materialDemoName
                  console.log(this.defaultEmpty, '默认')
                  this.matealId = res.data.data.materials.slice(0, 1)[0].id
                  this.metealItem = res.data.data.materials.slice(0, 1)[0].itemId
                  this.tableArr = []
                } else if (res.data.data.materials.length < 1) {
                  this.form.materialName = ""
                  this.form.materialForm = ""
                  this.form.materialPaper = ""
                  this.form.materialCopies = ""
                  this.form.materialExtras = ""
                  this.tableArr = []
                }
                console.log(this.form.serveObj, '所有对象')
              }
            })
          } else {
            this.$message({
              message: '只能对已发布的事项进行修改',
              type: 'warning'
            });
          }

        } else {
          this.$message({
            message: '只能允许选一条数据进行修改',
            type: 'warning'
          });
        }
      },
      //下载流程
      downProcessName(id) {
        // window.location.href = `${process.env.BASE_TABLE}/items/downloadProcess?uuid=${id}`
        // window.open(`${process.env.BASE_TABLE}/items/downloadProcess?uuid=${id}`)
        // let link = document.createElement('a');
        // link.href = `${process.env.BASE_TABLE}/items/downloadProcess?uuid=${id}`;
        // link.setAttribute('download')
        // link.download='下载'
        // link.click();
        var download_file = {}
        var iframe = document.createElement("iframe");
        download_file.iframe = iframe;
        document.body.appendChild(download_file.iframe);
        download_file.iframe.src = `${process.env.BASE_TABLE}/items/downloadProcess?uuid=${id}`
        download_file.iframe.style.display = "none";
      },
      //下载空表
      demoload(id) {
        var download_file = {}
        var iframe = document.createElement("iframe");
        download_file.iframe = iframe;
        document.body.appendChild(download_file.iframe);
        download_file.iframe.src = `${process.env.BASE_TABLE}/items/downloadSheet?uuid=${id}`
        download_file.iframe.style.display = "none";
      },
      //下载样表
      sheetload(id) {
        var download_file = {}
        var iframe = document.createElement("iframe");
        download_file.iframe = iframe;
        document.body.appendChild(download_file.iframe);
        download_file.iframe.src = `${process.env.BASE_TABLE}/items/downloadDemo?uuid=${id}`
        download_file.iframe.style.display = "none";
      },
      //批量删除删除接口
      delteBtns() {
        if (this.checkboxArr.length > 0) {
          let isDelete = true
          for (let item of this.checkboxArr) {
            if (item.state === 2) {
              isDelete = false;
              break;
            }
          }
          if (isDelete) {
            this.$confirm('此操作将删除这条数据, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              let deleteData = [...this.checkboxArr].map(item => item.uuid)
              console.log(deleteData)
              let params = {
                uuids: deleteData
              }
              console.log(params, '批量删除')
              BatchdeleDate(params).then(res => {
                if (res.data.code === 200) {
                  this.$message({
                    type: 'success',
                    message: '删除成功'
                  });
                  this.pageData(this.pageIndex)
                }
              })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          } else {
            this.$message({
              message: '不能删除已发布的数据',
              type: 'success'
            });
          }

        } else {
          this.$message({
            message: '至少选中一行数据',
            type: 'warning'
          });
        }

      },
      //点击复选框
      updateState(row) {
        if (row) {
          this.checkboxArr = [...row]
          console.log(row)
        } else {
          this.$refs.multipleTable.clearSelection();
          this.checkboxArr = []
        }
      },
      //上报
      getReport() {
        console.log(this.checkboxArr, '11111')
        if (this.checkboxArr.length > 0) {
          let issue = true
          for (let item of this.checkboxArr) {
            if (item.state === 1 || item.state === 2) {
              issue = false;
              break;
            }
          }
          if (issue) {
            this.stateJudge = true
            this.reviseState = true
          } else {
            this.$message({
              message: '只能选择未上报的数据进行上报',
              type: 'warning'
            });
          }
        } else {
          this.$message({
            message: '请选择需要上报的数据行',
            type: 'warning'
          });
        }
      },
      //是否确定上报
      defineBtn() {
        if (this.stateJudge === true) {
          this.$confirm('此操作将上报这条数据, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let deleteData = [...this.checkboxArr].map(item => item.uuid)
            let params = {
              uuids: deleteData
            }
            BatchStateData(params).then(res => {
              if (res.data.code === 200) {
                this.$message({
                  type: 'success',
                  message: '上报成功'
                });
                this.reviseState = false
                this.pageData(this.pageIndex)
              }
              console.log(res)
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消上报'
            });
          });
        } else if (this.stateJudge === false) {
          this.$confirm('此操作将取消上报这条数据, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            // cnacelApproval(this.checkboxArr[0].uuid).then(res => {
            //   if (res.data.code === 200) {
            //     this.$message({
            //       type: 'success',
            //       message: '取消成功!'
            //     });
            //     this.reviseState = false
            //     this.pageData(this.pageIndex)
            //     console.log(res, '取消上报审批')
            //   }
            // })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消上报'
            });
          });
        } else if (this.stateJudge === 'Revoke') {
          this.$confirm('此操作将撤销上报这条数据, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            cnacelApproval(this.checkboxArr[0].uuid).then(res => {
              if (res.data.code === 200) {
                this.$message({
                  type: 'success',
                  message: '撤销成功!'
                });
                this.reviseState = false
                this.pageData(this.pageIndex)
                console.log(res, '取消上报审')
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消撤销'
            });
          });
        }
      },
      //当点击取消时将点击复选框的数据清空
      reviseCancle() {
        this.reviseState = false
      },
      //多文件上传
      changeFileUpload(file, fileList) {
        this.fileData = []
        for (var i = 0; i <= fileList.length - 1; i++) {
          this.fileData.push(fileList[i].raw)
          console.log(typeof fileList[i].raw, '文件类型')
        }
        this.uploadProcess = []
        console.log(fileList)
        console.log(this.fileData, '多文件')

      },
      //合并事项
      mergeEvent() {
        if (this.checkboxArr.length > 1) {
          let merge = true
          for (let item of this.checkboxArr) {
            if (item.state !== 2) {
              merge = false;
              break;
            }
          }
          if (merge) {
            // let uuidArr = this.checkboxArr.map(item => item.uuid)
            this.addUpdate = 'merge'
            this.dialogForm = true
          } else {
            this.$message({
              message: '只能合并已发布的数据',
              type: 'warning'
            });
          }
        } else {
          this.$message({
            message: '至少选择两行数据',
            type: 'warning'
          });
        }
      },
      //详细
      detailData(el) {
        this.items = []
        this.itemQuestions = []
        this.scenesDetail = []
        this.targets = []
        let params = {
          uuid: el.uuid
        }
        searchDetail(params).then(res => {
          console.log(res, '详细')
          if (res.data.code === 200) {
            this.dialogDetail = true
            if (res.data.data.item.paymentType === 0) {
              res.data.data.item.paymentType = '线上'
            } else if (res.data.data.item.paymentType === 1) {
              res.data.data.item.paymentType = '线下'
            }
            if (res.data.data.item.payment === 1) {
              res.data.data.item.payment = '是'
            } else if (res.data.data.item.payment === 0) {
              res.data.data.item.payment = '否'
            }
            if (res.data.data.item.operationSystem === 1) {
              res.data.data.item.operationSystem = '是'
            } else if (res.data.data.item.operationSystem === 0) {
              res.data.data.item.operationSystem = '否'
            }
            if (res.data.data.item.transDepartment === 1) {
              res.data.data.item.transDepartment = '是'
            } else if (res.data.data.item.transDepartment === 0) {
              res.data.data.item.transDepartment = '否'
            }
            if (res.data.data.item.handleType === 1) {
              res.data.data.item.handleType = '线下'
            } else if (res.data.data.item.handleType === 0) {
              res.data.data.item.handleType = '线上'
            }
            if (res.data.data.item.handleType === 1) {
              res.data.data.item.handleType = '线下'
            } else if (res.data.data.item.handleType === 0) {
              res.data.data.item.handleType = '线上'
            }
            res.data.data.item.handleTimes = '办理' + res.data.data.item.handleTimes + '次'

            // if (res.data.data.item.itemType !== 4) {
            //   res.data.data.item.itemType = '即时办件'
            // } else {
            //   res.data.data.item.itemType = '承诺时间' + res.data.data.item.itemType + '天'
            // }
            if (res.data.data.operation) {
              this.itemSystem = res.data.data.operation
            } else {
              this.itemSystem = ''
            }
            // if (res.data.data.item.handleProcedures !== null) {
            //   res.data.data.item.handleProcedures = res.data.data.item.handleProcedures.substring(res.data.data.item.handleProcedures.lastIndexOf('/') + 1)
            // }
            this.items = res.data.data.item
            this.itemTheme = res.data.data.theme
            this.itemdepart = res.data.data.mainDepartment
            this.itemoffice = res.data.data.office
            this.itempayment = res.data.data.paymentDepartment
            this.itemProcesses = res.data.data.processes
            // this.downloadUuid = res.data.data.processes[0].processId
            this.typeArr=res.data.data.type
            this.itemQuestions = res.data.data.itemQuestions
            this.scenesDetail = res.data.data.scenes
            this.targets = res.data.data.targets
            this.materalItem = res.data.data.materials
            console.log(this.items)
          }
        })
      },
      //关闭详细接口清理数据
      closeDetail() {

      },
      //拆分
      isResolution() {
        if (this.checkboxArr.length === 1) {
          if (this.checkboxArr[0].state !== 2) {
            this.$message({
              message: '只能选择已发布的数据进行拆分',
              type: 'warning'
            });
          } else {
            this.resolution = true
          }
        } else {
          this.$message({
            message: '只能选择一行数据进行拆分',
            type: 'warning'
          });
        }
      },
      //关闭弹框的回调
      newAddClose() {
        this.reseat()
      },
      //tabs的事件
      handleClick(tab, event) {

      },
      //拆分前的操作
      resolutionData(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let mergeArrs = []
            let confirms = false
            mergeArrs.push({
              materialName: this.form.materialName,
              materialForm: this.form.materialForm,
              materialPaper: this.form.materialPaper,
              materialCopies: this.form.materialCopies,
            })
            mergeArrs = [...mergeArrs, ...this.tableArr]
            for (var i = 0; i <= mergeArrs.length - 1; i++) {
              if (mergeArrs[i].materialName === '') {
                this.metraltabName = '材料名称不能为空'
                console.log(this.metraltabName)
              } else if (mergeArrs[i].materialForm === '') {

                this.metraltabForm = '材料形式不能为空'
              } else if (mergeArrs[i].materialPaper === '') {
                this.metraltabPaper = '纸张大小不能为空'
              } else {
                this.metraltabName = ''
                this.metraltabForm = ''
                this.metraltabPaper = ''
                confirms = true
              }
            }
            if (confirms) {
              let obj = {
                subitemName: this.form.subitemName,//事项名称1
                subitemCode: this.form.subitemCode,//事项项编码1
                itemTheme: this.form.itemTheme,//事项主题
                mainDepartment: this.form.mainDepartment,//归属部门1
                itemType: this.form.itemType,//办件类型
                itemTypeExtra: this.form.itemTypeExtra,//承诺件
                itemIntroduction: this.form.itemIntroduction,//业务介绍
                office: this.form.office,//办理科室
                handleType: this.form.handleType,//办理方式1
                handleTimes: this.form.handleTimes,//办理次数1
                handleAddress: this.form.handleAddress,//办理地址
                handleTime: this.form.handleTime,//办理时间
                handlePhone: this.form.handlePhone,//办理电话
                transDepartment: this.form.transDepartment,//是否跨部门1
                collaborativeDepartment: this.form.collaborativeDepartment,//协同部门1
                payment: this.form.payment,//是否收费1
              }
              let uuidArr = []
              let serveArr = []
              let sceneArr = []
              let numberArr = []//问题
              let material = []//材料
              let arrEmpty = []//空表
              let arrStyle = []//样表
              // let numberArr=[...this.number]
              uuidArr = this.checkboxArr.map(item => item.uuid)
              console.log(uuidArr)
              serveArr = [...this.form.serveObj]
              sceneArr = [...this.form.sceneArr]
              if (obj.transDepartment === '是') {
                obj.transDepartment = 1
              } else if (obj.transDepartment === '否') {
                obj.transDepartment = 0
              }
              if (obj.payment === '是') {
                obj.payment = 1
              } else if (obj.payment === '否') {
                obj.payment = 0
              }
              if (obj.handleType === '线上') {
                obj.handleType = 0
              } else if (obj.handleType === '线下') {
                obj.handleType = 1
              }
              if (this.form.queryInput !== '' && this.form.awserInput !== '') {
                numberArr.push({
                    question: this.form.queryInput,
                    answer: this.form.awserInput
                  }
                )
                if (this.number.length > 0) {
                  numberArr = [...numberArr, ...this.number]
                }
              }
              if (this.form.materialName !== '' && this.form.materialForm !== '' && this.form.materialPaper !== '' && this.form.materialCopies !== '') {
                material.push({
                  materialName: this.form.materialName,
                  materialForm: this.form.materialForm,
                  materialPaper: this.form.materialPaper,
                  materialCopies: this.form.materialCopies,
                  materialExtras: this.form.materialExtras,
                  materialId: this.matealId,
                  itemId: this.metealItem
                })
                if (this.tableArr.length > 0) {
                  material = [...material, ...this.tableArr]
                }
              }
              console.log(material, this.tableArr, '是空吗')
              if (this.defaultEmpty !== '') {
                arrEmpty.push(this.defaultEmpty)
              } else {
                arrEmpty.push(null)
              }
              arrEmpty = [...arrEmpty, ...this.formEmptyDate]
              if (this.defaultStyle !== '') {
                arrStyle.push(this.defaultStyle)
              } else {
                arrStyle.push(null)
              }
              arrStyle = [...arrStyle, ...this.formStyleDate]
              if (obj.itemType === 4) {
                obj.itemTypeExtra = this.num1
              } else {
                obj.itemTypeExtra = 0
              }
              if (obj.mainDepartment.length > 1) {
                obj.mainDepartment = obj.mainDepartment[obj.mainDepartment.length - 1]
              } else if (obj.mainDepartment.length === 1) {
                obj.mainDepartment = obj.mainDepartment[0]
              }
              serveArr.forEach((item, index) => {
                this.serve.forEach((ite, ind) => {
                  if (item === ite.target) {
                    serveArr[index] = ite.id
                  }
                })
              })
              sceneArr.forEach((item, index) => {
                this.scenes.forEach((ite, ind) => {
                  if (item === ite.scene) {
                    sceneArr[index] = ite.id
                  }
                })
              })
              let item = {
                baseInfo: {
                  subitemName: obj.subitemName,
                  subitemCode: obj.subitemCode,
                  itemTheme: obj.itemTheme,
                  mainDepartment: obj.mainDepartment,
                  itemType: obj.itemType,
                  itemTypeExtra: obj.itemTypeExtra,
                  itemIntroduction: obj.itemIntroduction,
                  // classification: obj.classification,
                },
                handleInfo: {
                  office: obj.office,
                  handleType: obj.handleType,
                  handleTimes: obj.handleTimes,
                  handleAddress: obj.handleAddress,
                  // operationSystem: obj.operationSystem,
                  handleTime: obj.handleTime,
                  handlePhone: obj.handlePhone
                },
                extraInfo: {
                  transDepartment: obj.transDepartment,
                  collaborativeDepartment: obj.collaborativeDepartment,
                  payment: obj.payment,
                  targetIds: serveArr,
                  sceneIds: sceneArr
                },
                materialInfo: material,
                questionInfo: numberArr,
              }
              if (item.extraInfo.payment === 1) {
                if (this.form.paymentType === '线下') {
                  item.extraInfo.paymentType = 1
                } else if (this.form.paymentType === '线上') {
                  item.extraInfo.paymentType = 0
                }
                item.extraInfo.paymentGist = this.form.paymentGist
                if (this.form.paymentDepartment.length > 1) {
                  item.extraInfo.paymentDepartment = this.form.paymentDepartment[this.form.paymentDepartment.length - 1]
                } else if (this.form.paymentDepartment.length === 1) {
                  item.extraInfo.paymentDepartment = this.form.paymentDepartment[0]
                }
              }
              if (this.form.wheSystem === '是') {
                item.handleInfo.operationSystem = this.form.operationSystem
              }
              let formData = new FormData()
              for (var i = 0; i <= this.fileData.length - 1; i++) {
                formData.append('file', this.fileData[i])
              }
              let materialDemoCount = []
              let materialSheetCount = []
              for (var i = 0; i <= arrEmpty.length - 1; i++) {
                if (arrEmpty[i] === null || arrEmpty[i] === '') {
                  materialDemoCount.push(0)
                  formData.append('materialDemoFile', null)
                } else {
                  formData.append('materialDemoFile', arrEmpty[i])
                  materialDemoCount.push(1)
                }
              }

              for (var i = 0; i <= arrStyle.length - 1; i++) {
                if (arrStyle[i] === null || arrStyle[i] === '') {
                  materialSheetCount.push(0)
                  formData.append('materialSheetFile', null)
                } else {
                  formData.append('materialSheetFile', arrStyle[i])
                  materialSheetCount.push(1)
                }
              }
              formData.append('materialDemoCount', materialDemoCount)
              formData.append('materialSheetCount', materialSheetCount)
              formData.append('item', JSON.stringify(item))
              setListData(formData).then(res => {
                console.log(res, '新增')
                if (res.data.code === 200) {
                  // let insertFormData=new FormData()
                  // insertFormData.append('uuids',res.data.data)
                  // setActiveData(insertFormData).then(res=>{
                  //   if(res.data.code===200){
                  //
                  //   }
                  // })
                  this.matterArr.push(this.form.subitemName)
                  this.metterUuid.push(res.data.data)
                  this.reseat()
                  this.addNameboth='first'
                  console.log(res)
                }
              })
            }else{
              this.$message({
                message: '有东西没有填完哦',
                type: 'warning'
              });
              return false
            }
          }else{
            this.$message({
              message: '有东西没有填完哦',
              type: 'warning'
            });
            return false;
          }
        })
      },
      //拆分的最终确定的操作
      defineBtnResolution() {
        let forData=new FormData()
        forData.append('uuids', this.metterUuid)
        forData.append('delUuid',this.checkboxArr[0].uuid)
        deleteAndActivate(forData).then(res=>{
          if(res.data.code===200){
            this.pageData(this.pageIndex)
            this.matterArr=[]
            this.metterUuid=[]
            this.resolution=false
          }
        })
      },
      //关闭拆分框时清除拆分数组
      resolutionClose() {
        this.reseat()
        // this.resolutionArrs = []
      },
      //添加一行表
      tableAdd() {
        this.formEmptyDate.push('');
        this.formStyleDate.push('');
        this.emptyFrom.push('')
        this.tableArr.push({
          materialName: '',
          materialForm: '',
          materialPaper: '',
          materialCopies: '',
          materialExtras: ''
        })
      },
      tableDel(ind) {
        this.formEmptyDate.splice(ind, 1)
        this.formStyleDate.splice(ind, 1)
        this.tableArr.splice(ind, 1);
      },
      //循环数组里面的空表上传
      arrStyleTable(e, index) {
        // this.formEmptyDate[index] = e.target.files[0]
        this.formStyleDate.splice(index, 1, e.target.files[0])
        // this.emptyFrom.splice(index,1,e.target.files[0].name)
        console.log(this.emptyFrom, '检查')
      },
      //循环数组里面的样表上传
      arrEmptyTable(e, ind) {
        if (this.formStyleDate[ind] !== "") {
          // this.formStyleDate[ind] = e.target.files[0]
          this.formEmptyDate.splice(ind, 1, e.target.files[0])
        } else {
          this.$message({
            message: '必须先上传空表',
            type: 'warning'
          });
          return
        }

      },
      //默认的空表上传
      defaultStyleTable(e) {
        this.defaultStyle = e.target.files[0]
      },
      //默认的样表提交事件
      defaultEmptyTable(e) {
        if (this.defaultStyle !== '') {
          this.defaultEmpty = e.target.files[0]
        } else {
          this.$message({
            message: '必须先上传空表',
            type: 'warning'
          });
          return
        }

      },
      //当办理科室的值发生变化时调用查询科室
      selectOffice() {
        let id = this.form.office
        this.officefun(id)
      },
      //科室公共函数
      officefun(id) {
        let params = {
          id
        }
        getSearchDepart(params).then(res => {
          if (res.data.code === 200) {
            this.officeObj.officeAddress = res.data.data.officeAddress
            this.officeObj.officePhone = res.data.data.officeNumber
            this.officeObj.officeTime = res.data.data.officeWorkTime
            this.officeObj.officeLeader = res.data.data.officePrincipal
            this.officeObj.leaderPhone = res.data.data.officePrincipalTel
          }
        })
      },
      //当业务系统的值发生改变时调用查询系统
      selectSysyem() {
        let id = this.form.operationSystem
        this.systemfun(id)
      },
      //业务系统公共函数
      systemfun(id) {
        let params = {
          id
        }
        getSearchBusiness(params).then(res => {
          console.log(res.data.data)
          if (res.data.code === 200) {
            this.systemServe.systemDress = res.data.data.operationUrl
            this.systemServe.systemLeader = res.data.data.operationPrincipal
          }
        })
      },
      //当选择没有业务系统时清掉缓存
      clearSysyem() {
        if (this.form.wheSystem === '否') {
          this.systemServe = {
            systemDress: '',
            systemLeader: ''
          }
          this.form.operationSystem = ''
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .form {
    margin-top: 25px;
  }

  .btns {
    /*display: flex;*/
    /*justify-content: end;*/
    /*align-items: center;*/
    text-align: right;

    button {
      background: #409EFF;
      color: #ffffff;
      padding: 11px 13px;
      border: none;
      outline: none;
      text-align: center;
      padding-right: 16px;
    }
  }

  .search {
    background: #409EFF;
    color: #ffffff;
    padding: 8px 8px;
    border: none;
    outline: none;
    text-align: center;
    padding-right: 16px;
    /*margin-right: 15px;*/
    font-size: 14px;
    border-radius: 4px;
  }

  .inputchange {
    padding: 11px 13px;
    padding-right: 16px;

  }

  .btn {
    width: 100%;
    overflow: hidden;
  }

  .left {
    float: left;
    width: 700px;
  }

  .right {
    float: right;
  }

  .serach_input {
    width: 200px;
    border: solid 1px #dcdcdc;
    padding: 6px;
    position: relative;
    top: 1px;
    right: -6px;
    border-radius: 4px;
  }

  .forms {
    .el-row {
      margin-bottom: 0;
    }
  }

  .problem {
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
      padding: 10px;
      outline: none;
      margin-right: 5px;
      width: 48%;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
    }
  }

  .box {
    .moreInput {
      position: relative;

      input {
        padding: 10px;
        outline: none;
        margin-right: 1px;
        margin-top: 5px;
        width: 48%;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
      }

      .del {
        position: absolute;
        right: 3px;
        top: 17px;
      }
    }
  }

  .filebtn {
    display: block;
    height: 40px;
    width: 100px;
    background-color: skyblue;
  }

  .forms {
    margin-top: -30px;

    .el-date-editor.el-input {
      width: 100%;
    }

    .el-checkbox + .el-checkbox {
      margin-left: 26px;
    }

    .el-select {
      width: 100%;
    }

    .el-form-item {
      margin-bottom: 20px;
    }

    .el-input-number {
      width: 100%;
    }
  }

  .btnstyle {
    padding: 6px 10px;
    font-size: 12px;
  }

  .border_right {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px
  }

  .border_left {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px
  }

  .dialogStyle {
    .el-form-item, .el-row {
      margin-bottom: 0;
    }

  }

  /*.el-row{*/
  /*margin-bottom: 0;*/
  /*}*/
  ul {
    list-style: none;
  }

  .scrollName {
    overflow: auto;
    width: 150px;
    margin-left: 20px;
    border-left: 1px solid #dcdfe6;
    height: 506px;
    padding-left: 5px;

    ul {
      padding-left: 10px;
    }
  }

  .uploadss {
    padding: 8px 8px;
    line-height: 15px;
    position: relative;
    text-decoration: none;
    background: #409EFF;
    color: #ffffff;
    font-size: 11px;
    border-radius: 4px;
    height: 30px;
    width: 75px;

    input {
      position: absolute;
      top: 0;
      left: 0;
      cursor: pointer;
      height: 30px;
      width: 75px;
      opacity: 0;
    }
  }
</style>

