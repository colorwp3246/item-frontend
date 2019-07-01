export function dataState(data) {
  switch (data) {
    case 0:
      return '未上报'
      break
    case 1:
      return '未审批'
      break
    case 2:
      return '已发布'
      break
  }
}
export function handleTypes(data) {
  switch (data) {
    case 0:
      return '线上'
      break
    case 1:
      return '线下'
      break
  }
}
export function paymentOperation(data) {
  switch (data) {
    case 0:
      return '否'
      break
    case 1:
      return '是'
      break
  }
}
export function itemStateDetail(data) {
  switch (data) {
    case 0:
      return '正常'
      break
    case 1:
      return '已暂停'
      break
    case 2:
      return '已废除'
      break
  }
}
