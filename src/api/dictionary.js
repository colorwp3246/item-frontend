import request from '@/utils/request'

//新增
export function submitSave(params,path){
  return request({
    url: `${process.env.ITEM_BASE_TABLE}/${path}`,
    method:'post',
    data:params
  })
}
//查询全部
export function getAllList (path){
  return request({
    url: `${process.env.ITEM_BASE_TABLE}/${path}`,
    method:'get',
  })
}
//分页查询
export function getPageList (params,path){
  return request({
    url: `${process.env.ITEM_BASE_TABLE}/${path}`,
    method:'get',
    params
  })
}
//更具uuid查询详情数据
export function getDetail (params,path){
  return request({
    url: `${process.env.ITEM_BASE_TABLE}/${path}`,
    method:'get',
    params
  })
}

//批量删除
export function batchDelete (params,path){
  return request({
    url: `${process.env.ITEM_BASE_TABLE}/${path}`,
    method:'delete',
    params
  })
}
//修改
export function submitUpdate (params,path){
  return request({
    url: `${process.env.ITEM_BASE_TABLE}/${path}`,
    method:'put',
    data:params
  })
}
