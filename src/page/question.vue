<style>
.question {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 276px;
}

.ql-con {
  /* margin-top: 80px; */
  margin-bottom: 20px;
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
}
.ql-ask {
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
.ql-ask-title {
  width: 940px;
  margin: 0 auto;
  padding-top: 22px;
  border-bottom: 1px solid #f6f6f6;
  padding-bottom: 22px;
  position: relative;
}
.ql-ask-title div {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  background: rgba(133, 144, 166, 0.12);
  margin-right: 22px;
  color: #444;
}
.ql-ask-title div:hover {
  background: rgba(0, 132, 255, 0.08);
}
.qlasktitle0back {
  background: rgba(0, 132, 255, 0.08) !important;
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
.topInput {
  width: 108px !important;
  background: #fff !important;
  padding: 0px !important;
  position: absolute !important;
  right: 0px !important;
  top: 22px !important;
  margin-right: 0px !important;
}
.topInput .el-input__inner {
  border-radius: 25px !important;
}
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
              <div :class="{qlasktitle0back:num==0}" @click="newTime">
                <i class="el-icon-time"></i>
                新提问
              </div>
              <div :class="{qlasktitle0back:num==1}" @click="topCurrency">
                <i class="el-icon-coin"></i>
                高悬赏
              </div>
              <div :class="{qlasktitle0back:num==2}" @click="accomplish">
                <i class="el-icon-s-opportunity"></i>
                已完成
              </div>
              <div :class="{qlasktitle0back:num==3}" @click="Myquestion">
                <i class="el-icon-s-opportunity"></i>
                我的提问
              </div>
              <el-input class="topInput" v-model="topInput" placeholder="搜索" @change="topInputs"></el-input>
            </div>

            <div class="ql-ask-con" v-for="item in qlList">
              <h3>
                <router-link :to="'/questionDetails/'+item.id">{{item.title}}</router-link>
              </h3>
              <div>{{item.content}}</div>
              <div class="ql-ask-reply">
                <div style="float:left">
                  <el-button
                    icon="el-icon-edit"
                    size="medium"
                    class="ql-ask-reply-1"
                    @click="replyShade(item)"
                    v-show="item.status != 7"
                    @mousewheel.prevent
                  >我要答</el-button>
                  <!-- <el-button type="text" icon="el-icon-plus" class="ql-ask-reply-2">关注问题</el-button>
                  <el-button type="text" icon="el-icon-time" class="ql-ask-reply-2">稍后答</el-button>-->
                </div>
                <div style="float:right;line-height:40px;color:#8590a6;">
                  <!-- <span v-show="item.status == 2">正在竞拍</span>
                  <span v-show="item.status == 7">已完成</span>-->
                  <span style="margin-right:11px;">
                    <i class="el-icon-time" title="剩余时间"></i>
                    {{item.Times}}
                  </span>
                  <span>
                    <i class="el-icon-coin" title="鲸灵币"></i>
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
          <!-- <div class="ql-right-function">
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
          </div>-->
        </div>
      </div>
    </div>
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
            <!-- <el-input
              type="textarea"
              placeholder="输入问题背景、条件等详细信(选填)"
              v-model="QuestionsQuiz.Content"
              :autosize="{ minRows: 2, maxRows: 22}"
            ></el-input>-->
            <editor id="tinymce" v-model="myValue" :init="init"></editor>
          </el-form-item>
          <div style="overflow: hidden;">
            <div style="float:left;">
              <div class="PR">答题截止时间</div>
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
              <div class="PR">答题截止时间</div>
              <el-form-item prop="EndTime">
                <el-date-picker v-model="auction.EndTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
              </el-form-item>
            </div>
            <div style="float:right;">
              <div class="PR">鲸灵币</div>
              <el-form-item prop="Currency">
                <el-input v-model="auction.Currency" placeholder="鲸灵币(选填)" style="width:130px;"></el-input>
              </el-form-item>
            </div>
          </div>
        </el-form>
        <div style="overflow:hidden">
          <el-button class="releaseQl" type="primary" size="medium" @click="auctionQl('auction')">提交</el-button>
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
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";
import "tinymce/plugins/image";
import "tinymce/plugins/link";
import "tinymce/plugins/code";
import "tinymce/plugins/table";
import "tinymce/plugins/lists";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/colorpicker";
import "tinymce/plugins/textcolor";
export default {
  name: "question",
  components: {
    homeNav,
    homeFooter,
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
      default:
        "link lists image code table colorpicker textcolor wordcount contextmenu"
    },
    toolbar: {
      type: [String, Array],
      default:
        "bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat"
    }
  },
  data() {
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
          // formData.append("questionId", this.$route.params.question_id);
          formData.append("file", blobInfo.blob(), blobInfo.filename());

          this.axios({
            method: "POST",
            // 这里是你的上传地址
            url: this.URLport.serverPath + "/File/Upload",
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
      topInput: "",
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
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        Currency: [{ required: true, message: "请输入鲸灵币", trigger: "blur" }]
      },
      // 我要答列表
      auction: {
        EndTime: new Date(),
        Currency: "",
        QuestionId: ""
      },
      // 我要答表单验证
      auctionrules: {
        EndTime: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        Currency: [{ required: true, message: "请输入鲸灵币", trigger: "blur" }]
      },
      qlList: [],
      qlShade: false,
      qlreplyShade: false,
      value1: "",
      value2: "",
      num: 0,
      typeNum: "time",
      pagenums: 1,
      pagesizes: 5
    };
  },
  created: function() {
    const _this = this;
    _this.quizList();
    _this.handleScroll();
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd-hh:mm");
    }
  },
  mounted() {
    var _this = this;
    if (_this.$route.fullPath == "/question") {
      // window.addEventListener("scroll", _this.handleScroll);
    }
    tinymce.init({});
    //window.addEventListener('scroll', function () {
    //    console.log("滚动高度" + document.body.scrollTop + `------` + document.documentElement.scrollTop); // 滚动高度
    //    //console.log("文档高度" + document.body.offsetHeight); // 文档高度
    //});
  },
  methods: {
    handleScroll() {
      var _this = this;
      if (_this.$route.fullPath == "/question") {
        window.onscroll = function() {
          var scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
          var windowHeight =
            document.documentElement.clientHeight || document.body.clientHeight;
          var scrollHeight =
            document.documentElement.scrollHeight || document.body.scrollHeight;

          if (scrollTop + windowHeight == scrollHeight) {
            _this
              .axios({
                method: "get",
                url: `${_this.URLport.serverPath}/Questions/QuestionPage`,
                async: false,
                params: {
                  type: _this.typeNum,
                  pagenum: _this.pagenums++,
                  pagesize: _this.pagesizes
                },
                xhrFields: {
                  withCredentials: true
                }
              })
              .then(function(res) {
                if (res.data.status == 1) {
                  if (res.data.data.data.length != 0) {
                    for (var i = 0; i < res.data.data.data.length; i++) {
                      _this.qlList.push(res.data.data.data[i]);
                    }
                  }
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          }
        };
      }
    },
    // 检索问题列表
    quizList() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/QuestionPage`,
          async: false,
          params: {
            type: _this.typeNum,
            pagenum: _this.pagenums,
            pagesize: _this.pagesizes
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            _this.qlList = res.data.data.data;
            let date = new Date();
            let now = date.getTime();
            // //设置截止时间
            // var endDate = new Date(this.endtime);
            // // var endDate = new Date("2020-06-4 17:07:00");
            // var end = endDate.getTime();
            for (var i = 0; i < res.data.data.data.length; i++) {
              _this.$set(_this.qlList[i], "Times", "");
              let leftTime = new Date(_this.qlList[i].endTime).getTime() - now;
              let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
              let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
              let m = Math.floor((leftTime / 1000 / 60) % 60);
              _this.qlList[i].Times = d+'天'+h+'时'+m+'分'
              console.log(_this.qlList[i]);
              console.log(now);
              console.log(new Date(_this.qlList[i].endTime).getTime());
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd-hh:mm");
    },
    // 新提问展示
    newTime() {
      const _this = this;
      _this.num = 0;
      _this.typeNum = "time";
      _this.pagenums = 1;
      _this.quizList();
    },
    // 高悬赏展示高悬赏展示
    topCurrency() {
      const _this = this;
      _this.num = 1;
      _this.typeNum = "currency";
      _this.pagenums = 1;
      _this.quizList();
    },
    // 已完成展示
    accomplish() {
      const _this = this;
      _this.num = 2;
      _this.typeNum = "finish";
      _this.pagenums = 1;
      _this.quizList();
    },
    Myquestion() {
      const _this = this;
      _this.num = 3;
    },
    // 我要提问按钮
    NewQuitBt() {
      const _this = this;
      if (localStorage.getItem("token")) {
        _this.qlShade = !_this.qlShade;
      } else {
        _this.$message({
          message: "请登录之后提问",
          type: "warning"
        });
      }
    },
    // 隐藏我要提问
    CloseQuitBt() {
      const _this = this;
      _this.qlShade = !_this.qlShade;
    },
    // 发布问题
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
    // 我要答显示遮罩按钮
    replyShade(item) {
      const _this = this;
      if (localStorage.getItem("token")) {
        _this.auction.QuestionId = item.id;
        _this.auction.EndTime = item.endTime;
        _this.auction.Currency = item.currency;
        _this.qlreplyShade = !_this.qlreplyShade;
      } else {
        _this.$message({
          message: "请登录之后竞拍",
          type: "warning"
        });
      }
    },
    // 隐藏我要答
    CloseReplyShade() {
      const _this = this;
      _this.qlreplyShade = !_this.qlreplyShade;
    },
    // 我要答竞拍确定
    auctionQl(auction) {
      const _this = this;

      _this.$refs[auction].validate(valid => {
        if (valid) {
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/Bidding/Add`,
              async: false,
              data: _this.auction,
              xhrFields: {
                withCredentials: true
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            .then(function(res) {
              if (res.data.status == 1) {
                _this.qlreplyShade = !_this.qlreplyShade;
                _this.$message({
                  message: "竞拍成功,请开始作答！",
                  type: "success"
                });
              } else {
                _this.$message({
                  message: res.data.msg,
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
    topInputs() {
      const _this = this;
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
