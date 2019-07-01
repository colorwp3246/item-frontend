/*var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');方法一*/
const echarts = equire([
  // 写上你需要的
  'bar',//柱状图
  'pie',//饼图
  'line',//折线图
  'candlestick',//k线图
  'legend',//在柱图中相当与标注每一个不同颜色柱柱代表啥和series中的name配合使用
  'title',//标题
  'dataZoom',//缩放
  'radiusAxis',
  'tooltip',//提示框
  'grid',//移动整个图表
  'timeline',//时间轴可以播放动画
  'toolbox',//工具栏，比如说有下载功能
  'map'//需要单独下载插件暂时不需要，以后再说
])//方法二
export default echarts
