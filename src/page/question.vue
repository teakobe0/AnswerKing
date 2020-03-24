<style>
.question {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 276px;
  overflow: hidden;
}

.ql-con {
  margin-top: 80px;
  overflow: hidden;
}
.ql-body {
  width: 1300px;
  margin: 0 auto;
  margin-top: 20px;
}
/* 左边问题部分开始 */
.ql-left {
  width: 980px;
  float: left;
  height: 800px;
}
.ql-ask {
  background-color: #fff;
  padding: 0px 0px 22px 0px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
.ql-ask-title {
  width: 940px;
  margin: 0 auto;
  padding-top: 22px;
  border-bottom: 1px solid #f6f6f6;
  padding-bottom: 22px;
}
.ql-ask-title-1 {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  background: rgba(133, 144, 166, 0.12);
  margin-right: 22px;
  color: #444;
}
.ql-ask-title-1:hover {
  background: rgba(0, 132, 255, 0.08);
}
.ql-ask-con {
  width: 940px;
  margin: 0 auto;
  padding-top: 22px;
}
.ql-ask-con h3 {
  margin-bottom: 11px;
}
.ql-ask-con h3 a {
  text-decoration: none;
  color: #1a1a1a;
}
.ql-ask-con h3 a:hover {
  color: #175199;
}
.ql-ask-reply {
  padding-top: 17px;
  padding-bottom: 22px;
  border-bottom: 1px solid #f6f6f6;
  overflow: hidden;
}
.ql-ask-reply-1 {
  color: #0084f0 !important;
  border: 1px solid #0084f0 !important;
}
.ql-ask-reply-2 {
  margin-left: 20px !important;
  color: #8590a6 !important;
}
.ql-ask-reply-2:hover {
  color: #76839b !important;
}
/* 左边问题部分结束 */

/* 右边功能部分开始 */
.ql-right {
  width: 300px;
  float: right;
}
.ql-right-quit {
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  padding: 22px;
  margin-bottom: 22px;
}
.ql-right-quitBT {
  width: 100% !important;
}
.ql-right-function {
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  padding: 22px 0px 22px 0px;
}
.ql-right-function a {
  text-decoration: none;
  color: #76839b;
  display: block;
  line-height: 40px;
  overflow: hidden;
  padding: 0 22px 0 22px;
}
.ql-right-function a:hover {
  background-color: #f6f6f6;
}
.ql-right-function a i {
  margin-right: 10px;
}
.ql-right-function a .ql-right-fc1 {
  float: left;
}
.ql-right-function a .ql-right-fc2 {
  float: right;
}
/* 右边功能部分结束 */
/* 我要提问遮罩开始 */
.shadeClose {
  position: absolute;
  right: -50px;
  top: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 30px;
}
.ql-shade {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 26, 26, 0.65);
  z-index: 999;
}
.ql-editQuzi {
  width: 540px;
  padding: 20px;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 4px;
}
.ql-editQuziTi .el-input__inner {
  border: none !important;
  height: 60px !important;
  font-size: 22px !important;
  padding: 0px !important;
}
.ql-editQuziTi .el-form-item__error {
  left: 0px !important;
  top: 80% !important;
  font-size: 14px !important;
}
.ql-editNameDetail .el-textarea__inner {
  font-size: 15px !important;
  overflow-y: hidden;
  resize: none;
}
.PR {
  margin-bottom: 11px;
  color: #76839b;
  font-size: 14px;
}
.releaseQl {
  float: right;
}
/* 我要提问遮罩结束 */
/* 我要答遮罩开始 */
.ql-replyShade {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 26, 26, 0.65);
  z-index: 999;
}
.ql-editReply {
  width: 540px;
  padding: 20px;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 4px;
}
.ql-editReply h3 {
  margin-bottom: 22px;
}
.qlreleaseClose {
  position: absolute;
  right: -50px;
  top: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 30px;
}
/* 我要答这招结束 */
</style>
<template>
  <div class="question">
    <homeNav msg="登录/注册" />
    <div v-title data-title="问答大厅-CourseWhale"></div>
    <div class="ql-con">
      <div class="ql-body">
        <div class="ql-left">
          <div class="ql-ask">
            <div class="ql-ask-title">
              <div class="ql-ask-title-1" @click="newTime">
                <i class="el-icon-time"></i>
                新提问
              </div>
              <div class="ql-ask-title-1" @click="topCurrency">
                <i class="el-icon-coin"></i>
                高悬赏
              </div>
              <div class="ql-ask-title-1">
                <i class="el-icon-s-opportunity"></i>
                已完成
              </div>
            </div>
            <div class="ql-ask-con" v-for="item in qlList">
              <h3>
                <router-link to="/questionDetails">{{item.title}}</router-link>
              </h3>
              <div>{{item.content}}</div>
              <div class="ql-ask-reply">
                <div style="float:left">
                  <el-button
                    icon="el-icon-edit"
                    size="medium"
                    class="ql-ask-reply-1"
                    @click="replyShade"
                    @mousewheel.prevent
                  >我要答</el-button>
                  <el-button type="text" icon="el-icon-plus" class="ql-ask-reply-2">关注问题</el-button>
                  <el-button type="text" icon="el-icon-time" class="ql-ask-reply-2">稍后答</el-button>
                </div>
                <div style="float:right;line-height:40px;color:#8590a6;">
                  <span style="margin-right:11px;">
                    <i class="el-icon-time"></i>
                    {{item.endTime | formatDate}}
                  </span>
                  <span>
                    <i class="el-icon-coin"></i>
                    {{item.currency}}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ql-right">
          <div class="ql-right-quit">
            <el-button
              type="primary"
              class="ql-right-quitBT"
              @click="NewQuitBt"
              @mousewheel.prevent
            >我要提问</el-button>
          </div>
          <div class="ql-right-function">
            <a href="#">
              <div class="ql-right-fc1">
                <i class="el-icon-star-on"></i>我关注的问题
              </div>
              <div class="ql-right-fc2">10</div>
            </a>
            <a href="#">
              <div class="ql-right-fc1">
                <i class="el-icon-time"></i>稍后答
              </div>
              <div class="ql-right-fc2">5</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="ql-shade" v-show="qlShade" @mousewheel.prevent>
      <div class="ql-editQuzi">
        <el-form :model="QuestionsQuiz" :rules="QuestionsQuizrules" ref="QuestionsQuiz" class="demo-ruleForm">
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
          <el-button class="releaseQl" type="primary" size="medium" @click="releaseQl('QuestionsQuiz')">发布问题</el-button>
        </div>

        <div class="qlreleaseClose el-icon-close" @click="CloseQuitBt"></div>
      </div>
    </div>
    <div class="ql-replyShade" v-show="qlreplyShade" @mousewheel.prevent>
      <div class="ql-editReply">
        <h3>选择您向提问人提出的时间和赏金要求</h3>
        <el-form :model="auction" :rules="auctionrules" ref="auction" class="demo-ruleForm">
          <div style="overflow: hidden;">
            <div style="float:left;">
              <div class="PR">答题时间</div>
              <el-form-item prop="qlTime">
                <el-date-picker v-model="auction.EndTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
              </el-form-item>
            </div>
            <div style="float:right;">
              <div class="PR">悬赏金</div>
              <el-input v-model="auction.Currency" placeholder="悬赏金(选填)" style="width:130px;"></el-input>
            </div>
          </div>
        </el-form>
        <div style="overflow:hidden">
          <el-button class="releaseQl" type="primary" size="medium" @click="releaseQl">提交</el-button>
        </div>
        <div class="shadeClose el-icon-close" @click="CloseReplyShade"></div>
      </div>
    </div>

    <homeFooter></homeFooter>
  </div>
</template>

<script type="es6">
// @ is an alias to /src
import homeNav from "@/components/public/homeNav.vue";
import homeFooter from "@/components/public/homeFooter.vue";
import { formatDate } from "@/common/js/date.js";
export default {
  name: "question",
  components: {
    homeNav,
    homeFooter
  },
  data() {
    return {
      // 我要提问列表
      QuestionsQuiz: {
        Title: "",
        Content: "",
        EndTime: new Date(),
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
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        Currency: [{ required: true, message: "请输入悬赏金", trigger: "blur" }]
      },
      // 我要答列表
      auction: {
        EndTime: new Date(),
        Currency: ""
      },
      // 我要答表单验证
      auctionrules: {
        EndTime: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        Currency: [{ required: true, message: "请输入悬赏金", trigger: "blur" }]
      },
      qlList: [],
      qlShade: false,
      qlreplyShade: false,
      value1: "",
      value2: ""
    };
  },
  created: function() {
    const _this = this;
    _this.quizList();
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd-hh:mm");
    }
  },
  methods: {
    // 检索问题列表
    quizList() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/QuestionPage`,
          async: false,
          params: {
            type: "currency",
            pagenum: 1,
            pagesize: 20
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            _this.qlList = res.data.data.data;
            console.log(res);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 新提问展示
    newTime(){
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/QuestionPage`,
          async: false,
          params: {
            type: "time",
            pagenum: 1,
            pagesize: 20
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            _this.qlList = res.data.data.data;
            console.log(res);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 高悬赏展示
    topCurrency(){
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/QuestionPage`,
          async: false,
          params: {
            type: "currency",
            pagenum: 1,
            pagesize: 20
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            _this.qlList = res.data.data.data;
            console.log(res);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 我要提问按钮
    NewQuitBt() {
      const _this = this;
      _this.qlShade = !_this.qlShade;
    },
    // 隐藏我要提问
    CloseQuitBt() {
      const _this = this;
      _this.qlShade = !_this.qlShade;
    },
    // 我要答显示遮罩按钮
    replyShade() {
      const _this = this;
      _this.qlreplyShade = !_this.qlreplyShade;
    },
    // 隐藏我要答
    CloseReplyShade() {
      const _this = this;
      _this.qlreplyShade = !_this.qlreplyShade;
    },
    // 发布问题
    releaseQl(QuestionsQuiz) {
      const _this = this;
      console.log(_this.QuestionsQuiz);
      _this.$refs[QuestionsQuiz].validate(valid => {
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
      });
    }
  }
};
</script>
