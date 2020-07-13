<style>
.myQuestion-right {
  width: 1000px;
  float: left;
  padding: 20px 40px 0px 40px;
  overflow: hidden;
}
#myQuestion h3 {
  border-bottom: 1px solid #dddddd;
  color: #999999;
  line-height: 40px;
  padding-bottom: 6px;
  margin-bottom: 20px;
}
.message {
  margin-top: 24px;
}
#myQuestion .quiz .el-button {
  margin-left: 0px !important;
  margin-right: 10px !important;
}
.myQuestion-con a {
  text-decoration: none;
  color: #606266;
}
.myQuestion-con a:hover {
  color: #0b4ed4;
}
.mynextpage {
  text-align: center;
  margin-top: 20px;
}
.mynextpage .el-pagination button:disabled {
  background-color: #fafafa !important;
}
.mynextpage .el-pagination .btn-next,
.el-pagination .btn-prev {
  background-color: #fafafa !important;
}
.mynextpage .el-dialog,
.el-pager li {
  background-color: #fafafa !important;
}
</style>


<template>
  <div id="myQuestion">
    <div class="myQuestion-right">
      <h3>我的问答</h3>
      <div class="myQuestion-con">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="我的提问" name="first">
            <el-table :data="quizTableData" border style="width: 100%" class="quiz" v-if="quizShow">
              <el-table-column label="发布日期" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.createTime | formatDate}}</span>
                </template>
              </el-table-column>
              <el-table-column label="题目">
                <template slot-scope="scope">
                  <router-link :to="'/questionDetails/'+scope.row.que.id">{{ scope.row.que.title}}</router-link>
                </template>
              </el-table-column>
              <el-table-column label="悬赏" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.currency}}</span>
                </template>
              </el-table-column>
              <el-table-column label="竞拍者" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.number}}</span>
                </template>
              </el-table-column>
              <el-table-column label="截至日期" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.endTime | formatDate}}</span>
                </template>
              </el-table-column>
              <el-table-column label="状态" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.type}}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="130">
                <template slot-scope="scope">
                  <!-- <el-button
                    v-show="scope.row.que.status == 1"
                    type="text"
                    size="mini"
                    @click="editQuiz(scope.row)"
                  >编辑</el-button>
                  <el-button
                    v-show="scope.row.que.status != 1"
                    type="text"
                    size="mini"
                    disabled
                    title="竞拍者已经开始作答,禁止修改"
                  >编辑</el-button>-->
                  <el-button
                    type="text"
                    size="mini"
                    @click="editQuiz(scope.row)"
                    v-show="scope.row.que.status <= 3"
                  >编辑</el-button>
                  <el-button type="text" size="mini" v-show="scope.row.que.status > 3" disabled>编辑</el-button>
                  <el-button
                    type="text"
                    size="mini"
                    @click="evaluate(scope.row.que.id)"
                    v-show="scope.row.que.status == 4"
                  >评价</el-button>
                  <el-button type="text" size="mini" disabled v-show="scope.row.que.status != 4">评价</el-button>
                  <el-button
                    type="text"
                    size="mini"
                    @click="service(scope.row.que.id)"
                    v-show="scope.row.que.status == 6"
                  >客服</el-button>
                  <el-button type="text" size="mini" disabled v-show="scope.row.que.status != 6">客服</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="ql-shade" v-show="qlShade" @mousewheel.prevent>
              <div class="ql-editQuzi">
                <el-form
                  :model="QuestionsQuiz"
                  :rules="QuestionsQuizrules"
                  ref="QuestionsQuiz"
                  class="demo-ruleForm"
                >
                  <el-form-item prop="Title" class="ql-editQuziTi">
                    <el-input v-model="QuestionsQuiz.Title" placeholder="写下你的问题，准确的描述问题更容易得到解答"></el-input>
                  </el-form-item>
                  <el-upload
                    :action="imgSite"
                    :headers="myHeaders"
                    list-type="picture-card"
                    :auto-upload="true"
                    class="upImg"
                    multiple
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :file-list="quefileList"
                  >
                    <i slot="default" class="el-icon-picture" title="添加图片"></i>
                  </el-upload>
                  <el-dialog :visible.sync="queVisible" :modal-append-to-body="false">
                    <img width="100%" :src="queImageUrl" alt />
                  </el-dialog>
                  <el-form-item prop="Content" class="ql-editNameDetail">
                    <editor id="tinymces" v-model="myValue" :init="init"></editor>
                  </el-form-item>
                  <div style="overflow: hidden;">
                    <div style="float:left;">
                      <div class="PR">答题时间</div>
                      <el-form-item prop="EndTime">
                        <el-date-picker
                          v-model="QuestionsQuiz.EndTime"
                          type="datetime"
                          placeholder="选择日期时间"
                        ></el-date-picker>
                      </el-form-item>
                    </div>
                    <div style="float:right;">
                      <div class="PR">鲸灵币</div>
                      <el-form-item prop="Currency">
                        <el-input
                          v-model="QuestionsQuiz.Currency"
                          placeholder="鲸灵币(选填)"
                          style="width:130px;"
                        ></el-input>
                      </el-form-item>
                    </div>
                  </div>
                </el-form>
                <div style="overflow:hidden">
                  <el-button
                    class="releaseQl"
                    type="primary"
                    size="medium"
                    @click="releaseQl('QuestionsQuiz')"
                  >发布问题</el-button>
                  <el-button
                    size="medium"
                    @click="CloseQuitBt"
                    style="margin-right:10px;float:right;"
                  >取消</el-button>
                </div>

                <!-- <div class="qlreleaseClose el-icon-close" @click="CloseQuitBt"></div> -->
              </div>
            </div>
            <div class="ql-shade" v-show="evaluateShade" @mousewheel.prevent>
              <div class="ql-editQuzi">
                <div style="min-height:117px;">
                  <div style="float:left;">您的评价:</div>
                  <el-switch
                    style="display: block;float:right;"
                    v-model="evaluateSwitch"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="好评"
                    inactive-text="差评"
                  ></el-switch>
                  <el-input v-model="evaluateInput" style="margin-top:10px;margin-bottom:10px;"></el-input>
                  <el-button
                    style="float:right;"
                    type="primary"
                    size="medium"
                    @click="evaluateCon"
                  >确定</el-button>
                  <el-button
                    style="float:right;margin-right:10px;"
                    size="medium"
                    @click="CloseEvaluate"
                  >取消</el-button>
                </div>
                <!-- <div class="qlreleaseClose el-icon-close" @click="CloseEvaluate"></div> -->
              </div>
            </div>
            <!-- <div class="ql-shade" v-show="serviceShade" @mousewheel.prevent>
              <div class="ql-editQuzi">
                <div class="qlreleaseClose el-icon-close" @click="CloseService"></div>
              </div>
            </div> -->
            <div class="mynextpage">
              <div class="block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :page-size="pagesizes"
                  layout="total, prev, pager, next"
                  :total="pageTotal"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="我回答的问题" name="first2">
            <el-table :data="answerTableData" border style="width: 100%" v-if="answerShow">
              <el-table-column label="发布日期" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.answer.createTime | formatDate}}</span>
                </template>
              </el-table-column>
              <el-table-column label="题目">
                <template slot-scope="scope">
                  <router-link
                    :to="'/questionDetails/'+scope.row.answer.questionId"
                  >{{ scope.row.title}}</router-link>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="我竞拍的问题" name="first3">
            <el-table :data="auctionTableData" border style="width: 100%" v-if="auctionShow">
              <el-table-column label="发布日期" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.bidding.createTime | formatDate}}</span>
                </template>
              </el-table-column>
              <el-table-column label="题目">
                <template slot-scope="scope">
                  <router-link
                    :to="'/questionDetails/'+scope.row.bidding.questionId"
                  >{{ scope.row.title}}</router-link>
                </template>
              </el-table-column>
              <el-table-column label="状态" width="100">
                <template slot-scope="scope">
                  <span>{{scope.row.bstatus}}</span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script type="es6">
import { formatDate } from "@/common/js/date.js";
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/icons/default/icons.min.js";
import "tinymce/themes/silver";
import "tinymce/plugins/code";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/colorpicker";
import "tinymce/plugins/textcolor";
export default {
  name: "myQuestion",
  components: {
    Editor
  },
  props: {
    value: {
      type: String,
      default: "写回答..."
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default: "colorpicker textcolor wordcount contextmenu"
    },
    toolbar: {
      type: [String, Array],
      default:
        "bold italic underline strikethrough | fontsizeselect | forecolor backcolor"
    }
  },
  data() {
    //在ES6中添加数据是在return{}中
    return {
      init: {
        language_url: "/tinymce/langs/zh_CN.js",
        language: "zh_CN",
        skin_url: "/tinymce/skins/ui/oxide",
        // skin_url: '/tinymce/skins/ui/oxide-dark',//暗色系
        height: 300,
        plugins: this.plugins,
        toolbar: this.toolbar,
        branding: false,
        menubar: false,
        // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
          // const img = "data:image/jpeg;base64," + blobInfo.base64();
          // success(img);
          let formData = new FormData();
          // 服务端接收文件的参数名，文件数据，文件名
          formData.append("file", blobInfo.blob(), blobInfo.filename());

          this.axios({
            method: "POST",
            // 这里是你的上传地址
            url: this.URLport.serverPath + "/File/UploadQuestion",
            async: false,
            data: formData,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
            .then(res => {
              // 这里返回的是你图片的地址
              success(res.data.file);
            })
            .catch(() => {
              // failure("上传失败");
            });

          console.log(blobInfo);
        }
      },
      myValue: this.value,
      activeName: "first",
      quizShow: false,
      quizTableData: [],
      answerShow: false,
      answerTableData: [],
      QuestionsQuiz: {
        Title: "",
        Content: "",
        EndTime: "",
        Currency: "",
        Img: ""
      },
      // 我要提问表单验证
      QuestionsQuizrules: {
        Title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          { min: 4, message: "最少输入4个字", trigger: "blur" }
        ],
        Content: [{ required: true, message: "请输入内容", trigger: "blur" }],
        EndTime: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        Currency: [{ required: true, message: "请输入鲸灵币", trigger: "blur" }]
      },
      // 我的竞拍
      auctionTableData: [],
      auctionShow: false,
      qlShade: false,
      evaluateShade: false,
      // 评价内容
      evaluateInput: "",
      evaluateSwitch: true,
      evaluateId: 0,
      pagenums: 1,
      pagesizes: 13,
      pageTotal: 0,
      // 图片
      imgSite: this.URLport.serverPath + "/File/UploadQuestion",
      myHeaders: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      queImageUrl: "",
      queVisible: false,
      quefileList: []
    };
  },
  created: function() {
    const _this = this;
    _this.quizList();
    _this.answerList();
    _this.auctionlist();
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      const _this = this;
      console.log(`当前页: ${val}`);
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/MyQuestion`,
          async: false,
          params: {
            pagenum: val,
            pagesize: _this.pagesizes
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          console.log(res);
          if (res.data.status == 1) {
            _this.quizTableData = res.data.data.data;
            _this.quizShow = true;
            for (var i = 0; i < _this.quizTableData.length; i++) {
              _this.$set(_this.quizTableData[i], "type", "");
              if (_this.quizTableData[i].que.status == 1) {
                _this.quizTableData[i].type = "保存";
              }
              if (_this.quizTableData[i].que.status == 2) {
                _this.quizTableData[i].type = "正在竞拍";
              }
              if (_this.quizTableData[i].que.status == 3) {
                _this.quizTableData[i].type = "已选竞拍者";
              }
              if (_this.quizTableData[i].que.status == 4) {
                _this.quizTableData[i].type = "已回答";
              }
              if (_this.quizTableData[i].que.status == 5) {
                _this.quizTableData[i].type = "申请客服";
              }
              if (_this.quizTableData[i].que.status == 6) {
                _this.quizTableData[i].type = "已完成";
              }
              if (_this.quizTableData[i].que.status == 7) {
                _this.quizTableData[i].type = "已关闭";
              }
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    nextpages() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/MyQuestion`,
          async: false,
          params: {
            pagenum: ++_this.pagenums,
            pagesize: _this.pagesizes
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            let a = [];
            a = res.data.data.data;
            for (var i = 0; i < a.length; i++) {
              a[i].type = "";
              if (a[i].que.status == 1) {
                a[i].type = "保存";
              }
              if (a[i].que.status == 2) {
                a[i].type = "正在竞拍";
              }
              if (a[i].que.status == 3) {
                a[i].type = "已选竞拍者";
              }
              if (a[i].que.status == 4) {
                a[i].type = "已回答";
              }
              if (a[i].que.status == 5) {
                a[i].type = "申请客服";
              }
              if (a[i].que.status == 6) {
                a[i].type = "已完成";
              }
              if (a[i].que.status == 7) {
                a[i].type = "已关闭";
              }
              _this.quizTableData.push(a[i]);
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 检索问题列表
    quizList() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/MyQuestion`,
          async: false,
          params: {
            pagenum: _this.pagenums,
            pagesize: _this.pagesizes
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          console.log(res);
          if (res.data.status == 1) {
            _this.quizTableData = res.data.data.data;
            _this.pageTotal = res.data.data.pageTotal;
            _this.quizShow = true;
            for (var i = 0; i < _this.quizTableData.length; i++) {
              _this.$set(_this.quizTableData[i], "type", "");
              if (_this.quizTableData[i].que.status == 1) {
                _this.quizTableData[i].type = "保存";
              }
              if (_this.quizTableData[i].que.status == 2) {
                _this.quizTableData[i].type = "正在竞拍";
              }
              if (_this.quizTableData[i].que.status == 3) {
                _this.quizTableData[i].type = "已选竞拍者";
              }
              if (_this.quizTableData[i].que.status == 4) {
                _this.quizTableData[i].type = "已回答";
              }
              if (_this.quizTableData[i].que.status == 5) {
                _this.quizTableData[i].type = "申请客服";
              }
              if (_this.quizTableData[i].que.status == 6) {
                _this.quizTableData[i].type = "已完成";
              }
              if (_this.quizTableData[i].que.status == 7) {
                _this.quizTableData[i].type = "已关闭";
              }
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    answerList() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Answer/MyAnswer`,
          async: false,
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            _this.answerTableData = res.data.data;
            _this.answerShow = true;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    auctionlist() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Bidding/MyBidding`,
          async: false,
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          console.log(res);
          if (res.data.status == 1) {
            _this.auctionTableData = res.data.data;
            _this.auctionShow = true;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 编辑提问
    editQuiz(list) {
      const _this = this;
      _this.QuestionsQuiz.Title = list.que.title;
      _this.QuestionsQuiz.Content = list.que.content;
      _this.myValue = list.que.content;
      _this.QuestionsQuiz.EndTime = list.que.endTime;
      _this.QuestionsQuiz.Currency = list.que.currency;
      _this.QuestionsQuiz.id = list.que.id;
      _this.QuestionsQuiz.Img = list.que.img;
      if (list.que.img) {
        var a = list.que.img.split("|");
        for (var i = 0; i < a.length; i++) {
          _this.quefileList.push({ url: a[i], response: { file: a[i] } });
        }
      }

      _this.qlShade = !_this.qlShade;
    },
    CloseQuitBt() {
      const _this = this;
      _this.quefileList = [];
      _this.qlShade = !_this.qlShade;
    },
    releaseQl(QuestionsQuiz) {
      const _this = this;
      _this.QuestionsQuiz.Content = _this.myValue;
      _this.$refs[QuestionsQuiz].validate(valid => {
        if (valid) {
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/Questions/Add`,
              async: false,
              data: _this.QuestionsQuiz,
              xhrFields: {
                withCredentials: true
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            .then(function(res) {
              if (res.data.status == 1) {
                _this.QuestionsQuiz.Title = "";
                _this.QuestionsQuiz.Content = "";
                _this.QuestionsQuiz.EndTime = new Date();
                _this.QuestionsQuiz.Currency = "";
                _this.QuestionsQuiz.Img = "";
                _this.qlShade = !_this.qlShade;
                _this.quizList();
                _this.$message({
                  message: "发布成功",
                  type: "success"
                });
              } else {
                _this.$message({
                  message: "发布失败",
                  type: "error"
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      });
    },
    evaluate(id) {
      const _this = this;
      _this.evaluateShade = !_this.evaluateShade;
      _this.evaluateId = id;
      _this.evaluateSwitch = true;
    },
    evaluateCon() {
      const _this = this;
      let grades = 5;
      if (_this.evaluateSwitch == false) {
        grades = 1;
      }
      console.log(_this.evaluateId);
      _this
        .axios({
          method: "put",
          url: `${_this.URLport.serverPath}/Questions/Evaluate`,
          async: false,
          params: {
            questionid: _this.evaluateId,
            content: _this.evaluateInput,
            grade: grades
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          console.log(res);
          if (res.data.status == 1) {
            _this.quizList();
            _this.evaluateShade = false;
            _this.$message({
              message: "评价成功",
              type: "success"
            });
          } else {
            _this.$message({
              message: "评价失败",
              type: "error"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    service(id) {
      const _this = this;
      console.log(id);
      this.$prompt("您要对客服说:", "CourseWhale", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          _this
            .axios({
              method: "put",
              url: `${_this.URLport.serverPath}/Questions/ForService`,
              async: false,
              params: {
                questionid: id,
                reason: value
              },
              xhrFields: {
                withCredentials: true
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            .then(function(res) {
              console.log(res);
              if (res.data.status == 1) {
                _this.$message({
                  message: "发送成功",
                  type: "success"
                });
              } else {
                _this.$message({
                  message: "发送失败",
                  type: "error"
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        })
        .catch(() => {});
    },
    commitchanges(id) {
      const _this = this;
      _this
        .axios({
          method: "put",
          url: `${_this.URLport.serverPath}/Questions/Edit`,
          async: false,
          params: {
            questionid: id
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          console.log(res);
          if (res.data.status == 1) {
            _this.quizList();
            _this.$message({
              message: "回答者可以开始补充回答。",
              type: "success"
            });
          } else {
            _this.$message({
              message: "提交修改失败",
              type: "error"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    CloseEvaluate() {
      const _this = this;
      _this.evaluateShade = !_this.evaluateShade;
      
    },
    handleClick() {
      const _this = this;
    },
    handleRemove(file, fileList) {
      const _this = this;
      _this
        .axios({
          method: "delete",
          url: `${_this.URLport.serverPath}/Questions/RemoveImg`,
          async: false,
          params: {
            questionid: _this.$route.params.question_id,
            imgurl: file.response.file
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          var imgurl = "";
          for (let i = 0; i < fileList.length; i++) {
            imgurl = imgurl + "|" + fileList[i].response.file;
          }
          _this.QuestionsQuiz.Img = imgurl.slice(1);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handlePictureCardPreview(file) {
      this.queImageUrl = file.url;
      this.queVisible = true;
      console.log(file);
    },
    handleAvatarSuccess(res, file, fileList) {
      const _this = this;
      console.log(fileList);
      var imgurl = "";
      for (let i = 0; i < fileList.length; i++) {
        imgurl = imgurl + "|" + fileList[i].response.file;
      }
      _this.QuestionsQuiz.Img = imgurl.slice(1);
      console.log(_this.QuestionsQuiz.Img);
    },
    beforeAvatarUpload(file) {
      console.log(file);
    }
  },
  watch: {
    value(newValue) {
      this.myValue = newValue;
    },
    myValue(newValue) {
      this.$emit("input", newValue);
    }
  }
};
</script>
