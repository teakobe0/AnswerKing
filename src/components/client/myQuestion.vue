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
              <el-table-column fixed="right" label="操作" width="130">
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
                  <el-button type="text" size="mini" @click="editQuiz(scope.row)">修改</el-button>
                  <el-button type="text" size="mini" @click="evaluate">评价</el-button>
                  <el-button type="text" size="mini" @click="service">客服</el-button>
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
                  <el-form-item prop="Content" class="ql-editNameDetail">
                    <el-input
                      type="textarea"
                      placeholder="输入问题背景、条件等详细信(选填)"
                      v-model="QuestionsQuiz.Content"
                      :autosize="{ minRows: 2, maxRows: 22}"
                    ></el-input>
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
                      <div class="PR">悬赏金</div>
                      <el-form-item prop="Currency">
                        <el-input
                          v-model="QuestionsQuiz.Currency"
                          placeholder="悬赏金(选填)"
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
                </div>

                <div class="qlreleaseClose el-icon-close" @click="CloseQuitBt"></div>
              </div>
            </div>
            <div class="ql-shade" v-show="evaluateShade" @mousewheel.prevent>
              <div class="ql-editQuzi">
                <div class="qlreleaseClose el-icon-close" @click="CloseEvaluate"></div>
              </div>
            </div>
            <div class="ql-shade" v-show="serviceShade" @mousewheel.prevent>
              <div class="ql-editQuzi">
                <div class="qlreleaseClose el-icon-close" @click="CloseService"></div>
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
                  <span>{{ scope.row.answer.createTime | formatDate}}</span>
                </template>
              </el-table-column>
              <el-table-column label="题目">
                <template slot-scope="scope">
                  <span>{{ scope.row.title}}</span>
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

export default {
  name: "myQuestion",
  components: {},
  data() {
    //在ES6中添加数据是在return{}中
    return {
      activeName: "first",
      quizShow: false,
      quizTableData: [],
      answerShow: false,
      answerTableData: [],
      QuestionsQuiz: {
        Title: "",
        Content: "",
        EndTime: "",
        Currency: ""
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
        Currency: [{ required: true, message: "请输入悬赏金", trigger: "blur" }]
      },
      // 我的竞拍
      auctionTableData:[],
      auctionShow:false,
      qlShade: false,
      evaluateShade: false,
      serviceShade: false
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
    // 检索问题列表
    quizList() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/MyQuestion`,
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
            _this.quizTableData = res.data.data;
            _this.quizShow = true;
            for (var i = 0; i < _this.quizTableData.length; i++) {
              _this.$set(_this.quizTableData[i], "type", "");
              if(_this.quizTableData[i].que.status == 1){
                _this.quizTableData[i].type = "保存"
              } 
              if(_this.quizTableData[i].que.status == 2){
                _this.quizTableData[i].type = "正在竞拍"
              } 
              if(_this.quizTableData[i].que.status == 3){
                _this.quizTableData[i].type = "回答中"
              } 
              if(_this.quizTableData[i].que.status == 4){
                _this.quizTableData[i].type = "提交修改"
              } 
              if(_this.quizTableData[i].que.status == 5){
                _this.quizTableData[i].type = "申请客服"
              } 
              if(_this.quizTableData[i].que.status == 6){
                _this.quizTableData[i].type = "已完成"
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
    auctionlist(){
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
      console.log(list);
      _this.QuestionsQuiz.Title = list.que.title;
      _this.QuestionsQuiz.Content = list.que.content;
      _this.QuestionsQuiz.EndTime = list.que.endTime;
      _this.QuestionsQuiz.Currency = list.que.currency;
      _this.QuestionsQuiz.id = list.que.id;
      console.log(_this.QuestionsQuiz);
      _this.qlShade = !_this.qlShade;
    },
    CloseQuitBt() {
      const _this = this;
      _this.qlShade = !_this.qlShade;
    },
    releaseQl(QuestionsQuiz) {
      const _this = this;
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
                // _this.QuestionsQuiz.Title = "";
                // _this.QuestionsQuiz.Content = "";
                // _this.QuestionsQuiz.EndTime = new Date();
                // _this.QuestionsQuiz.Currency = "";
                // _this.QuestionsQuiz.id = "";
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
    evaluate() {
      const _this = this;
      _this.evaluateShade = !_this.evaluateShade;
    },
    CloseEvaluate() {
      const _this = this;
      _this.evaluateShade = !_this.evaluateShade;
    },
    service() {
      const _this = this;
      _this.serviceShade = !_this.serviceShade;
    },
    CloseService() {
      const _this = this;
      _this.serviceShade = !_this.serviceShade;
    },
    handleClick() {
      const _this = this;
    }
  }
};
</script>
