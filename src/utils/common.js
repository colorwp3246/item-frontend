export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}
//查找一个数组中重复的元素以及重复的个数
export function getWordCnt(arrdData) {
  let OrderObj = {}
  let arr=[]
  arrdData.forEach((element, index) => {
    var item = element.module;
    OrderObj[item] = (OrderObj[item] +1 ) || 1;
  })
  for (let k in OrderObj) {
    // if (OrderObj[k].length >1) {
    arr.push(OrderObj[k])
    // }
  }
  return arr;
}
//reduce查找一个数组中重复的元素以及重复的个数
export function getReduce(arrdData) {
  let obj={}
  let arr=[]
  obj= arrdData.reduce(function(prev,next){
    prev[next] = (prev[next] + 1) || 1;
    return prev;
  },{});
  for (let k in obj) {
    if (obj[k].length >= 1) {
      arr.push(obj[k])
    }
  }
  return arr;
}
//將時間戳转为正常的时间的格式
export function setTimeStamp(nS) {
  return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
}

