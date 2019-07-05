import request from '@/utils/request'

//获取二级关键词
export function getchildkeyword(){
  return request(`${process.env.BASE_SERVE}/help/getchildkeyword`,{
    method:'get'
  })
}
//查询所有问题
export function getallquestions(params) {
  return request(`${process.env.BASE_SERVE}/help/getallquestions`,{
    method:'get',
    params
  })
}
//后台添加一条帮助中心问题
export function getArticleInsert(data) {
  return request(`${process.env.BASE_SERVE}/help/insert`,{
    method:'post',
    data,
  })
}
//前台获取所有关键词列表
export function getallkeyword() {
  return request(`${process.env.BASE_SERVE}/help/getallkeyword`,{
    method:'get',
  })
}
//前台根据关键字id查询问题
export function getbykeywordid(params) {
  return request(`${process.env.BASE_SERVE}/help/getbykeywordid`,{
    method:'get',
    params
  })
}
//gethotquestions
export function gethotquestions() {
  return request(`${process.env.BASE_SERVE}/help/gethotquestions`,{
    method:'get',
  })
}
//前台根据id查问题
export function getSelecthtmlbyid(params) {
  return request(`${process.env.BASE_SERVE}/help/selecthtmlbyid`,{
    method:'get',
    params
  })
}
//按條件搜索内容
export function getSearchquestion(params) {
  return request(`${process.env.BASE_SERVE}/help/searchquestion`,{
    method:'get',
    params
  })
}
//后台根据id删除问题
export function getDeletebyids(params) {
  return request(`${process.env.BASE_SERVE}/help/deletebyids`,{
    method:'delete',
    params
  })
}
//后台根据id查询一条问题
export function getSelectbyid(params) {
  return request(`${process.env.BASE_SERVE}/help/selectbyid`,{
    method:'get',
    params
  })
}
//后台修改一条问题
export function setUpdateData(data){
  return request(`${process.env.BASE_SERVE}/help/update`,{
    method:'put',
    data
  })
}
//上传图片
export function setUploadFile(data){
  return request(`${process.env.BASE_UPLOADFILE}/file/upload`,{
    method:'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
