import request from '@/utils/request'

export function getList(params) {
  return request({
    url: `/table/list`,
    method: 'get',
    params
  })
}
//新增数据
export function setListData(data){
  return request({
    url: `${process.env.BASE_TABLE}/item/insert`,
    method:'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
//新的拆分
export function setSplit(data){
  return request({
    url: `${process.env.BASE_TABLE}/item/splititems
`,
    method:'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
//服务对象
export function setServiceObject (){
  return request({
    url: `${process.env.BASE_TABLE}/target/selectall`,
    method:'get',
  })
}
//归属场景
export function getscene(){
  return request({
    url: `${process.env.BASE_TABLE}/scene/selectall`,
    method:'get',
  })
}
//分页查询
export function pageSearch (params){
  return request({
    url: `${process.env.BASE_TABLE}/item/selectitem`,
    method:'get',
    params
  })
}
//更具uuid查询详情数据
export function searchDetail (params){
  return request({
    url: `${process.env.BASE_TABLE}/item/selectitembyuuid`,
    method:'get',
    params
  })
}
//上传图片
export function uploadImage (param,uu){
  return request({
    url: `${process.env.BASE_TABLE}/uploads`,
    method:'post',
    params:uu,
    data:param,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
//删除某列数据
export function deleDate(data){
  return request({
    url: `${process.env.BASE_TABLE}/item/deletebyuuid`,
    method:'delete',
    data
  })
}
//批量删除
export function BatchdeleDate (data){
  return request({
    url: `${process.env.BASE_TABLE}/item/deleteitems`,
    method:'delete',
    data
  })
}
//修改事项
export function reviseEvent (data){
  return request({
    url: `${process.env.BASE_TABLE}/item/updateitem`,
    method:'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
//修改状态
export function setStatus (params){
  return request({
    url: `${process.env.BASE_TABLE}/sxfw/changestate`,
    method:'put',
    params
  })
}
//统计-事项分类
export function getEventClass(){
  return request({
    url: `${process.env.BASE_TABLE}/item/sortbyclassification`,
    method:'get',
  })
}
//根据主管部门统计的未发布和已发布的数据
export function getDataAnalysis(){
  return request({
    url: `${process.env.BASE_TABLE}/item/sortbydepartment`,
    method:'get',
  })
}
//根据主管部门查询办理状态
export function getDepartTotal() {
  return request({
    url: `${process.env.BASE_TABLE}/item/sorttypebydepartment`,
    method:'get',
  })
}
//取消上报审批
export function cancalBtn(params){
  return request({
    url: `${process.env.BASE_TABLE}/sxfw/cancelstate`,
    method:'put',
    params
  })
}
//状态改变
export function getStateData(params){
  return request({
    url: `${process.env.BASE_TABLE}/item/getbystate`,
    method:'get',
    params
  })
}
//修改发布状态
export function setStateData(data){
  return request({
    url: `${process.env.BASE_TABLE}/item/changestate`,
    method:'put',
    data
  })
}
//批量修改状态
export function BatchStateData(data){
  return request({
    url: `${process.env.BASE_TABLE}/item/changestates`,
    method:'put',
    data
  })
}
//取消发布取消审批
export function cnacelApproval(data) {
  return request({
    url: `${process.env.BASE_TABLE}/item/cancelchangestate`,
    method:'put',
    data
  })
}
//撤销
export function setRevoke(data) {
  return request({
    url: `${process.env.BASE_TABLE}/items/item/cancelbyuuid`,
    method:'put',
    data
  })
}
//操作记录
export function getOperationRecord(params) {
  return request({
    url: `${process.env.BASE_TABLE}/selectitem`,
    method:'get',
    params
  })
}
//下载
export function getdownload(params) {
  return request({
    url: `${process.env.BASE_TABLE}/download`,
    method:'get',
    params
  })
}
//合并
export function getMergeData(params) {
  return request({
    url: `${process.env.BASE_TABLE}/item/mergeitems`,
    method:'post',
    data:params
  })
}
//拆分
export function getResolution(params) {
  return request({
    url: `${process.env.BASE_TABLE}/item/splititems`,
    method:'put',
    data:params
  })
}
//科室
export function getDepart() {
  return request({
    url: `${process.env.BASE_TABLE}/office/selectall`,
    method:'get',
  })
}
//更具uuid查询科室
export function getSearchDepart(params) {
  return request({
    url: `${process.env.BASE_TABLE}/office/selectbyid`,
    method:'get',
    params
  })
}
//获取所有的业务系统
export function getBusiness() {
  return request({
    url: `${process.env.BASE_TABLE}/operation/selectall`,
    method:'get',
  })
}
//根据id查询业务系统
export function getSearchBusiness(params) {
  return request({
    url: `${process.env.BASE_TABLE}/operation/selectbyid`,
    method:'get',
    params
  })
}
//事项主题
export function getEventTitle() {
  return request({
    url: `${process.env.BASE_TABLE}/theme/selectall`,
    method:'get',
  })
}
//办件类型
export function getEventType() {
  return request({
    url: `${process.env.BASE_TABLE}/type/selectall`,
    method:'get',
  })
}
//组织架构
export function getorganization() {
  return request({
    url: `${process.env.BASE_TABLE}/api/v1/organizations`,
    method:'get',
  })
}
//侧边栏的切换
export function getMenu(params){
  return request({
    url: `${process.env.BASE_TABLE}/getMenuList`,
    method:'get',
    params
  })
}
export function getMoreData() {
  return request({
    url: `${process.env.BASE_TABLE}/getMenuList`,
    method:'get',
    params
  })
}
//新的统计多柱状图
export function getPublishProgress(){
  return request({
    url: `${process.env.BASE_TABLE}/getPublishProgress`,
    method:'get'
  })
}
//主图2
export function getComprehensive(){
  return request({
    url: `${process.env.BASE_TABLE}/getComprehensive`,
    method:'get'
  })
}
//拆分激活uuid
export function setActiveData(data) {
  return request({
    url: `${process.env.BASE_TABLE}/item/activate`,
    method:'post',
    data
  })
}
//点击确定时激活
export function deleteAndActivate(data) {
  return request({
    url: `${process.env.BASE_TABLE}/item/deleteAndActivate`,
    method:'post',
    data
  })
}
//恢复
export function setPauseItem(data) {
  return request({
    url: `${process.env.BASE_TABLE}/item/pauseItem`,
    method:'post',
    data
  })
}
//暂停
export function setReviveItem(data) {
  return request({
    url: `${process.env.BASE_TABLE}/item/reviveItem`,
    method:'post',
    data
  })
}
//废除
export function setAbolishItem(data) {
  return request({
    url: `${process.env.BASE_TABLE}/item/abolishItem`,
    method:'post',
    data
  })
}

