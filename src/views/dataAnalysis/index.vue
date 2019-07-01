<template>
  <div class="analysis">
    <div class="title" style="text-align:center;">
      <h1>统计分析</h1>
    </div>
    <div class="mainContennt">
      <div>
        <div class="charsTitle">按学院统计</div>
        <div class="upperChars">
          <div id="commonPie" style="width: 800px; height: 400px;"></div>
          <div id="barChars" style="width: 800px; height: 400px;"></div>
        </div>
      </div>
      <div>
        <div class="charsTitle">按部门统计</div>
        <div class="lowerChars">
          <div id="pieNesting" style="width: 800px; height: 400px;"></div>
          <div id="stackingLayer" style="width: 800px; height: 400px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import echarts from '@/utils/echats'
  import {getEventClass,getDataAnalysis,getDepartTotal,getPublishProgress,getComprehensive} from '@/api/table'
  export default {
    data() {
      return {
        icons: ['el-icon-info', 'el-icon-error', 'el-icon-success', 'el-icon-warning'],
        noData:[],
        releaseData:[],
        noValue:[],
        releaseValue:[]
      }
    },
    mounted() {
      // this.stackingLayer()
      this.featureBar()
      this.pieNeste()
      // this.commonPie()
      this.init()
    },
    methods: {
      //饼图线图
      stackingLayer() {
        getEventClass().then(res=>{
          console.log(res.data.data,'事项分类1')
          let arr=[...res.data.data]
          let arrName=[...new Set(arr.map(items=>items.item.classification))].filter(item=>item!=='')
          let dataClass=[]
          let dataValue=[]
          arr.forEach((items,index)=>{
            arrName.forEach((ite,ind)=>{
              if(items.item.classification===ite){
                dataClass.push({name:items.item.classification,value:items.count[0]})
              }
            })
          })
          let arrData=[...dataClass]
          let myChart = echarts.init(document.getElementById('stackingLayer'));
          myChart.setOption({
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              x: 'left',
              data: arrName
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: dataClass
              }
            ]
          })
        })

      },
      //特色柱图
      featureBar() {
        getPublishProgress().then(res=>{
          if(res.data.code===200){
            let xAxisData=res.data.data.xAxis
            let mainArr=res.data.data.series.slice(res.data.data.series.length-1)[0].data
            console.log(mainArr,'??')
            let myChart = echarts.init(document.getElementById('barChars'));
            myChart.setOption({
              color: ['#3398DB'],
              tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis : [
                {
                  type : 'category',
                  data : xAxisData,
                  axisTick: {
                    alignWithLabel: true
                  }
                }
              ],
              yAxis : [
                {
                  type : 'value'
                }
              ],
              series : [
                {
                  name:'发布率',
                  type:'bar',
                  barWidth: '60%',
                  data:mainArr
                }
              ]
            })
          }
        })
      },
      //综合统计柱图
      pieNeste() {
        getComprehensive().then(res=>{
          console.log(res,'?')
          if(res.data.code===200){
            let xAxisData=res.data.data.xAxis
            let titleArr=res.data.data.series.map(item=>item.name)
            let mainArr=res.data.data.series
            let myChart = echarts.init(document.getElementById('pieNesting'));
            myChart.setOption({
              tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              legend: {
                data:titleArr
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis : [
                {
                  type : 'category',
                  data : xAxisData
                }
              ],
              yAxis : [
                {
                  type : 'value'
                }
              ],
              series : mainArr
            })
          }
        })
      },
      //普通的饼图
      commonPie() {
        // getEventClass().then(res=>{
        //   console.log(res.data.data,'事项分类1')
        //   let arr=[...res.data.data]
        //   let arrName=[...new Set(arr.map(items=>items.item.classification))].filter(item=>item!=='')
        //   let dataClass=[]
        //   let dataValue=[]
        //   arr.forEach((items,index)=>{
        //     arrName.forEach((ite,ind)=>{
        //       if(items.item.classification===ite){
        //         dataClass.push({name:items.item.classification,value:items.count[0]})
        //       }
        //     })
        //   })
        //   let arrData=[...dataClass]
        //   let myChart = echarts.init(document.getElementById('commonPie'));
        //   myChart.setOption({
        //     tooltip: {
        //       trigger: 'item',
        //       formatter: "{a} <br/>{b}: {c} ({d}%)"
        //     },
        //     legend: {
        //       orient: 'vertical',
        //       x: 'left',
        //       data: arrName
        //     },
        //     series: [
        //       {
        //         name: '访问来源',
        //         type: 'pie',
        //         radius: ['50%', '70%'],
        //         avoidLabelOverlap: false,
        //         label: {
        //           normal: {
        //             show: false,
        //             position: 'center'
        //           },
        //           emphasis: {
        //             show: true,
        //             textStyle: {
        //               fontSize: '30',
        //               fontWeight: 'bold'
        //             }
        //           }
        //         },
        //         labelLine: {
        //           normal: {
        //             show: false
        //           }
        //         },
        //         data: dataClass
        //       }
        //     ]
        //   })
        // })

      },
      //初始化
      init(){
        getPublishProgress().then(res=>{
          if(res.data.code===200){
            let xAxisData=res.data.data.xAxis
            let titleArr=res.data.data.series.map(item=>item.name).slice(0,res.data.data.series.length-1)
            let mainArr=res.data.data.series.slice(0,res.data.data.series.length-1)
            console.log(xAxisData,'1')
            console.log(titleArr,'2')
            let myChart = echarts.init(document.getElementById('commonPie'));
            myChart.setOption({
              tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              legend: {
                data:titleArr
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis : [
                {
                  type : 'category',
                  data : xAxisData
                }
              ],
              yAxis : [
                {
                  type : 'value'
                }
              ],
              series : mainArr
            })
          }
          console.log(res)
        })

      }
    }
  }
</script>
<style lang="scss" scoped>
  .analysis {
    padding: 0 12px;

    .title {
      margin-top: 20px;

      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
          display: flex;
          justify-content: space-between;
          padding: 0 10px;
          align-items: center;
          background-color: #f0f2f5;
          height: 80px;
          width: 300px;

          i {
            font-size: 30px;
          }

          .content {
            display: flex;
            flex-direction: column;
            font-size: 18px;
          }
        }
      }
    }

    .mainContennt {
      margin-top: 50px;

      .upperChars {
        display: flex;
        justify-content: space-between;
      }

      .lowerChars {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .charsTitle {
    margin-left: 3px;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: bold;
    border-bottom: solid 1px #dcdcdc;
    padding-bottom: 20px;
  }
</style>
