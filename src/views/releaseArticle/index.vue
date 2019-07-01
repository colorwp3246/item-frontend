<template>
  <div class="releaseArticle app-container">
    <el-row>
      <el-col :span="24"><span>问题:</span></el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><span>答案:</span></el-col>
    </el-row>
    <el-row>
      <el-col>
        <div id="div3" class="editor">
        </div>
      </el-col>
    </el-row>
    {{content}}
    <el-row>
      <el-col :span="24"><span>类型:</span></el-col>
    </el-row>
    <el-row>
      <el-col :span="22">
        <div class="moreOut">
          <el-input v-model="inputText" :placeholder="inputContent"></el-input>
          <div class="moreCheck" v-if="downContent" @click.stop="">
            <ul>
              <li v-for="(item,index) of optionsARR" :key="index">
                <el-checkbox @change="moreCheckbox($event,index)" v-model="moreChange[index]">{{item.keywordName}}
                </el-checkbox>
              </li>
            </ul>
          </div>
          <div class="tabPage">
            <el-tag
              v-for="(tag,index) in tags"
              :key="tag.name"
              closable
              @close="handleClose(tag,index)"
            >
              {{tag.keywordName}}
            </el-tag>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click.stop="dieContent">选择</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <button id="btn1" @click="submitBtn">{{submitBtnFont}}</button>
      </el-col>
    </el-row>
    {{value}}
  </div>
</template>
<script>
  import {
    getchildkeyword,
    getArticleInsert,
    getallquestions,
    getSelectbyid,
    setUpdateData,
    setUploadFile
  } from "@/api/article"
  // import Vditor from 'vditor'
  // 或者使用 dark
  export default {
    data() {
      return {
        input: '',
        value: '',
        optionsARR: [],
        content: '',
        bina: '',
        inputText: '',
        arr: [
          {
            name: 'lisi',
            age: 13
          },
          {
            name: 'zhangsan',
            age: '14'
          },
          {
            name: 'wangwu',
            age: '17'
          }
        ],
        downContent: false,
        tags: [],
        inputContent: '请选择内容',
        moreChange: [],
        submitBtnFont: '确定'
      }
    },
    created() {

    },
    mounted() {
      // var E = window.wangEditor
      // var editor2 = new E('#div3')
      // editor2.customConfig.uploadImgServer = '/upload'
      // editor2.create()
      // this.content=editor2.txt.html()
      // document.getElementById('btn1').addEventListener('click', function () {
      //   // 读取 html
      //   alert(editor2.txt.html())
      //   console.log(editor2.txt.html())
      // }, false)
      // this.bina=vditor.updateValue("ssdsdasdfdsf")
      this.init()
      window.addEventListener('click', this.handClick);
    },
    methods: {
      //重置函数
      reseat() {
        this.input = ''
        this.tags = []
      },
      //点击多项下拉框让其消失
      handClick() {
        this.downContent = false
      },
      //获取下拉多选框的内容
      init() {
        const vditor = new Vditor('div3', {
          counter: 100,
          height: 300,
          // cache:false,
          editorName: 'vditor',
          tab: ' ',
          upload: {
            accept: 'image/*,.pdf',
            token: 'test',
            url: 'http://192.168.1.251:8088/file',
            linkToImgUrl: 'http://www.zq100.com/api/files/file',
            filename(name) {
              // ? \ / : | < > * [ ] white to -
              return name.replace(/\?|\\|\/|:|\||<|>|\*|\[|\]|\s+/g, '-')
            },
            success(res) {
              console.log(res)
            },
            error(err) {
              console.log(err, '121212')
            },
            handler(file) {
              const formData = new FormData();
              formData.append('file', file[0]);
              console.log(file[0],'看看')
              setUploadFile(formData).then(res => {
                console.log(res)
                if (res.data.code === 200) {
                  if (vditor.vditor.options.upload.success) {
                    vditor.insertValue(`![${file[0].name}](${process.env.BASE_UPLOADFILE}/file?fileId=${res.data.data})`)
                  } else {

                  }
                }else{
                  this.$message({
                    message: '上传失败',
                    type: 'warning'
                  });
                }
              }).catch(err=>{
                this.$message({
                  message: '上传失败',
                  type: 'warning'
                });
                console.log(err)
              })
              // const xhr = new XMLHttpRequest();
              // xhr.open("POST", vditor.vditor.options.upload.url);
              // xhr.send(formData);
            },
          },
          preview: {
            show: true,
            parse: () => {
              // LazyLoadImage()
            },
          },
        })
        vditor.clearCache()
        getchildkeyword().then(res => {
          if (res.data.code === 200) {
            this.optionsARR = res.data.data
          }
        })
        if (this.$route.query.itemArr) {
          this.submitBtnFont = '修改'
          let params = {
            id: this.$route.query.itemArr
          }
          getSelectbyid(params).then(res => {
            if (res.data.code === 200) {
              let arr = res.data.data
              let arrs = []
              this.input = arr.question
              vditor.setValue(arr.md2Content)
              arrs = res.data.data.helpCenterKeywords.map(item => item.id)
              getchildkeyword().then(res => {
                if (res.data.code === 200) {
                  this.optionsARR = res.data.data
                  if (arrs.length > 0) {
                    this.inputContent = ''
                    this.optionsARR.forEach((item, index) => {
                      arrs.forEach((ite, ind) => {
                        if (item.id === ite) {
                          console.log(index, '我的index')
                          this.moreChange[index] = true
                          this.tags.push(item)
                        }
                      })
                    })
                    console.log(this.moreChange)
                  }
                }
              })
            }
          })
        }
      },
      //获取获取markdown的内容
      submitBtn() {
        const vditor = new Vditor('div3', {
          counter: 100,
          height: 300,
          editorName: 'vditor',
          // cache:false,
          tab: ' ',
          preview: {
            show: true,
            parse: () => {
              // LazyLoadImage()
            },
          },
        })
        if (this.submitBtnFont === '确定') {
          vditor.getHTML(vditor.getValue()).then(res => {
            let richContent = res
            let params = {
              md2Content: vditor.getValue(),
              keywordIds: this.tags.map(item => item.id),
              htmlContent: richContent,
              question: this.input
            }
            getArticleInsert(params).then(res => {
              if (res.data.code === 200) {
                this.$message({
                  message: '恭喜你，添加成功',
                  type: 'success'
                });
                vditor.setValue("")
                this.reseat()
              }
            })
          })
        } else if (this.submitBtnFont === '修改') {
          vditor.getHTML(vditor.getValue()).then(res => {
            let richCont = res
            let params = {
              id: this.$route.query.itemArr,
              md2Content: vditor.getValue(),
              keywordIds: this.tags.map(item => item.id),
              htmlContent: richCont,
              question: this.input
            }
            console.log(params, '我的参数')
            setUpdateData(params).then(res => {
              if (res.data.code === 200) {
                this.$message({
                  message: '恭喜你，修改成功',
                  type: 'success'
                });
              }
              vditor.setValue("")
              this.reseat()
            })
          })
        }
      },
      //当勾选复选框时获取对应的内容
      moreCheckbox(e, index) {
        if (e) {
          // this.optionsARR[index].
          // let arr=[]
          this.optionsARR[index].selectIndex = index
          this.tags.push(this.optionsARR[index])
          this.tags = [...new Set(this.tags)]
        } else {
          this.optionsARR[index].selectIndex = index
          this.tags.splice(this.tags.indexOf(this.tags.keywordName), 1)
        }
        console.log(this.tags)
      },
      //当删除标签页的时候触发
      handleClose(ite, ind) {
        this.tags.splice(this.tags.indexOf(ite.keywordName), 1)
        this.moreChange[ite.selectIndex] = false
        console.log(this.tags, '修改')
      },
      //点击选择时让placehalder消失
      dieContent() {
        this.inputContent = ''
        this.downContent = true
      },
      //markdown上传
    }
  }
</script>
<style lang="scss">
  .releaseArticle {
    .el-row {
      margin-bottom: 10px;

      .el-input--medium .el-input__inner {
        height: 30px;
        line-height: 30px;
        width: 100%;
      }

      .el-select {
        width: 100%;
      }

      .el-button--medium {
        padding: 7px 20px;
      }

      .el-input__prefix, .el-input__suffix {
        top: 3px;
      }
    }

    .moreOut {
      position: relative;

      .moreCheck {
        position: absolute;
        width: 100%;
        background-color: #ffffff;
        z-index: 1000;
        height: 250px;
        overflow: hidden;
        overflow-y: scroll;
        border: 1px solid #e0e0e0;

        ul {
          padding: 0 10px;
          margin: 0;

          li {
            height: 30px;
            line-height: 30px;
          }
        }
      }

      .tabPage {
        position: absolute;
        top: 2px;
      }
    }
  }
</style>
