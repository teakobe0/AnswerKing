<template>
  <div class="question">
    <homeNav msg="登录/注册" />
    <div v-title data-title="问答大厅-CourseWhale"></div>
    <div class="ql-con">
      <div class="ql-title">
        <div class="ql-t-con">
          <div class="qltconLeft">
            <h1>提升学业最好的方式就是互相帮助。</h1>
            <p>
              Coursewhale课程鲸灵为全球学子打造的社交问答平台，
              <br />致力于帮助学生们通过互相提问及回答，更好的掌握学习内容，培养更强
            </p>
            <el-input
              v-model="topInput"
              placeholder="搜索"
              @change="topInputs"
              clearable
              style="width:700px"
            ></el-input>
          </div>
          <div class="qltconright">
            <img src="../assets/问答1.png" alt />
          </div>
        </div>
      </div>
      <div class="ql-body">
        <div class="qlBodyCon">
          <div class="qlBodyLeft">
            <div :class="{qlBodyConActive:num == 0}" @click="newTime">最新</div>
            <div :class="{qlBodyConActive:num == 2}" @click="topCurrency">最高悬赏</div>
            <div :class="{qlBodyConActive:num == 1}" @click="newTimes">即将结束</div>
          </div>
          <div class="qlBodyMei">
            <!-- 没登录 -->
            <div class="qlBodyMeiCon" v-for="item in qlList" v-show="qlcon">
              <div class="qlBodyMeiConLeft">
                <div>
                  <span class="qlBodyI">{{item.question.currency}}鲸灵币</span>
                </div>
                <h4>
                  <router-link :to="'/questionDetails/'+item.question.id">{{item.question.title}}</router-link>
                </h4>
                <div class="qlBodyImg">
                  <img :src="item.qimage" alt />
                  {{item.qname}}
                  <span>{{item.Times}}</span>
                </div>
                <div class="qlBodyMeiConRight" @click="replyShade(item)">
                  <div class="qlBodyMeiConRightTable">
                    <div>
                      参与
                      <br />竞拍
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 登录时 -->
            <div class="qlBodyMeiCon" v-for="item in myQlList" v-show="myQlcon">
              <div class="qlBodyMeiConLeft">
                <div>
                  <span class="qlBodyU" v-show="item.bidd != null">{{item.bidd}}</span>
                  <span class="qlBodyU" v-show="item.myanswer != null">{{item.myanswer}}</span>
                  <span class="qlBodyU" v-show="item.myque != null">{{item.myque}}</span>
                  <span class="qlBodyI">{{item.que.currency}}鲸灵币</span>
                </div>
                <h4>
                  <router-link :to="'/questionDetails/'+item.que.id">{{item.que.title}}</router-link>
                </h4>
                <div class="qlBodyImg">
                  <img :src="item.qimage" alt />
                  {{item.qname}}
                  <span>{{item.Times}}</span>
                </div>
                <div class="qlBodyMeiConRight" @click="replyShade(item)">
                  <div class="qlBodyMeiConRightTable">
                    <div>
                      参与
                      <br />竞拍
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pageturning" @click="nextpages">...</div>
          </div>
          <div class="qlBodyRight">
            <el-button
              type="primary"
              icon="el-icon-plus"
              class="ql-right-quitBT"
              @click="NewQuitBt"
              @mousewheel.prevent
            >提一个新问题</el-button>
            <questionNum></questionNum>
          </div>
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
            :file-list="fileList"
          >
            <i slot="default" class="el-icon-picture" title="添加图片"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" :modal-append-to-body="false">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>

          <el-form-item prop="Content" class="ql-editNameDetail">
            <!-- <el-input
              type="textarea"
              placeholder="输入问题背景、条件等详细信(选填)"
              v-model="QuestionsQuiz.Content"
              :autosize="{ minRows: 2, maxRows: 22}"
            ></el-input>-->

            <!-- 富文本 -->
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
                  :picker-options="{
                    disabledDate: time => {
                      return time.getTime() < Date.now() - 3600 * 1000 * 24
                    },
                    selectableRange: startTimeRange
                  }"
                ></el-date-picker>
              </el-form-item>
            </div>
            <div style="float:right;">
              <div class="PR">鲸灵币</div>
              <el-form-item prop="Currency">
                <el-input
                  v-model.number="QuestionsQuiz.Currency"
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
                <el-date-picker
                  v-model="auction.EndTime"
                  type="datetime"
                  class="auTime"
                  placeholder="选择日期时间"
                  :picker-options="{
                    disabledDate: time => {
                      return time.getTime() < Date.now() - 3600 * 1000 * 24
                    },
                    selectableRange: austartTimeRange
                  }"
                ></el-date-picker>
              </el-form-item>
            </div>
            <div style="float:right;">
              <div class="PR">鲸灵币</div>
              <el-form-item prop="Currency">
                <el-input
                  v-model.number="auction.Currency"
                  placeholder="鲸灵币(选填)"
                  style="width:130px;"
                ></el-input>
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
import questionNum from "@/components/public/questionNum.vue";
import questionCss from "../pageCss/page/questionCss.css";

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
  name: "question",
  components: {
    homeNav,
    homeFooter,
    Editor,
    questionCss,
    questionNum,
  },
  props: {
    value: {
      type: String,
      default: "写回答...",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    plugins: {
      type: [String, Array],
      default: "colorpicker textcolor wordcount contextmenu",
    },
    toolbar: {
      type: [String, Array],
      default:
        "bold italic underline strikethrough | fontsizeselect | forecolor backcolor",
    },
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
          formData.append("file", blobInfo.blob(), blobInfo.filename());

          this.axios({
            method: "POST",
            // 这里是你的上传地址
            url: this.URLport.serverPath + "/File/UploadQuestion",
            async: false,
            data: formData,
            xhrFields: {
              withCredentials: true,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
            .then((res) => {
              // 这里返回的是你图片的地址
              success(res.data.file);
            })
            .catch(() => {
              // failure("上传失败");
            });

          console.log(blobInfo);
        },
      },
      myValue: this.value,
      topInput: "",
      // 我要提问列表
      QuestionsQuiz: {
        Title: "",
        Content: "",
        EndTime: "",
        Currency: "",
        Img: "",
      },
      // 我要提问表单验证
      QuestionsQuizrules: {
        Title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          { min: 4, message: "最少输入4个字", trigger: "blur" },
        ],
        Content: [{ required: true, message: "请输入内容", trigger: "blur" }],
        EndTime: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        Currency: [
          { required: true, message: "请输入鲸灵币", trigger: "blur" },
          { type: "number", message: "必须为数字" },
        ],
      },
      // 我要答列表
      auction: {
        EndTime: "",
        Currency: "",
        QuestionId: "",
      },
      // 我要答表单验证
      auctionrules: {
        EndTime: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        Currency: [
          { required: true, message: "请输入鲸灵币", trigger: "blur" },
          { type: "number", message: "必须为数字" },
        ],
      },
      qlList: [],
      qlShade: false,
      qlreplyShade: false,
      value1: "",
      value2: "",
      num: 0,
      typeNum: "new",
      pagenums: 1,
      pagesizes: 15,
      clientID: 0,
      myqus: false,
      qlcon: false,
      qlData: false,
      quizTableData: [],
      // 当前登录人提出的问题数量
      auctions: 0,
      toAnswer: 0,
      haveToAnswer: 0,
      // 当前登录人参与的问题数量
      paAuctions: 0,
      paToAnswer: 0,
      paHaveToAnswer: 0,
      myQlList: [],
      myQlcon: false,
      startTimeRange: "",
      austartTimeRange: "",
      // 新问题出现之后
      newAnswerNum: 0,
      newAnswerTime: new Date(),
      newAnswer: "",
      newAnswerShow: false,
      // 图片
      imgSite: this.URLport.serverPath + "/File/UploadQuestion",
      myHeaders: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [],
      Questionsnum: "",
      Answernum: "",
      qdConRigtS: false,
    };
  },
  created: function () {
    const _this = this;
    _this.personal();
    // _this.handleScroll();
    _this.newAnswer = setInterval(_this.answerNum, 5000);
  },
  filters: {
    formatDate: function (time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd-hh:mm");
    },
    sendTimeDate: function (date) {
      if (!!date) {
        var nowDate =
          new Date(date).getFullYear() +
          "-" +
          (new Date(date).getMonth() + 1 < 10
            ? "0" + (new Date(date).getMonth() + 1)
            : new Date(date).getMonth() + 1) +
          "-" +
          (new Date(date).getDate(date) < 10
            ? "0" + new Date(date).getDate(date)
            : new Date(date).getDate(date));
        var nowTime =
          (new Date(date).getHours() < 10
            ? "0" + new Date(date).getHours()
            : new Date(date).getHours()) +
          ":" +
          (new Date(date).getMinutes() < 10
            ? "0" + new Date(date).getMinutes()
            : new Date(date).getMinutes()) +
          ":" +
          (new Date(date).getSeconds() < 10
            ? "0" + new Date(date).getSeconds()
            : new Date(date).getSeconds());
        return nowDate + " " + nowTime;
      } else {
        return "";
      }
    },
  },
  mounted() {
    var _this = this;
    if (_this.$route.fullPath == "/question") {
      window.addEventListener("scroll", this.handleScroll);
    }
    tinymce.init({});
  },
  methods: {
    // 获取最新的问题数量
    answerNum() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/GetNumber`,
          async: false,
          params: {
            time: _this.newAnswerTime,
          },
          xhrFields: {
            withCredentials: true,
          },
        })
        .then(function (res) {
          if (res.data.data.num > 0) {
            _this.newAnswerNum = res.data.data.num + _this.newAnswerNum;
            _this.newAnswerShow = true;
            _this.newAnswerTime = res.data.data.datetime;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    newAnswerClick() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/GetNewQuestion`,
          async: false,
          params: {
            time: _this.newAnswerTime,
          },
          xhrFields: {
            withCredentials: true,
          },
        })
        .then(function (res) {
          if (res.data.status == 1) {
            _this.newAnswerShow = false;
            _this.newAnswerNum = 0;
            _this.newAnswerTime = new Date();
            let myQlList = res.data.data;
            let date = new Date();
            let now = date.getTime();
            if (localStorage.token) {
              for (let i = 0; i < res.data.data.length; i++) {
                _this.$set(myQlList[i], "Times", "");
                let leftTime =
                  new Date(myQlList[i].que.endTime).getTime() - now;
                let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
                let m = Math.floor((leftTime / 1000 / 60) % 60);
                myQlList[i].Times = "还剩" + d + "天" + h + "时" + m + "分";
                _this.myQlList.unshift(myQlList[i]);
              }
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleScroll() {
      var _this = this;
      if (_this.$route.fullPath == "/question") {
        window.onscroll = function () {
          var scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
          var windowHeight =
            document.documentElement.clientHeight || document.body.clientHeight;
          var scrollHeight =
            document.documentElement.scrollHeight || document.body.scrollHeight;

          if (scrollTop + windowHeight == scrollHeight) {
            if (localStorage.token && _this.num != 3) {
              _this.myQlcon = true;
              _this.myqus = true;
              _this
                .axios({
                  method: "get",
                  url: `${_this.URLport.serverPath}/Questions/MyQuestionPage`,
                  async: false,
                  params: {
                    type: _this.typeNum,
                    pagenum: ++_this.pagenums,
                    pagesize: _this.pagesizes,
                  },
                  xhrFields: {
                    withCredentials: true,
                  },
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                .then(function (res) {
                  if (res.data.status == 1) {
                    // _this.myQlList.push(res.data.data.data);
                    let a = [];
                    a = res.data.data.data;
                    let date = new Date();
                    let now = date.getTime();
                    for (var i = 0; i < res.data.data.data.length; i++) {
                      _this.$set(a[i], "Times", "");
                      let leftTime = new Date(a[i].que.endTime).getTime() - now;
                      let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                      let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
                      let m = Math.floor((leftTime / 1000 / 60) % 60);
                      _this.myQlList[i].Times =
                        "还剩" + d + "天" + h + "时" + m + "分";
                      _this.myQlList.push(a[i]);
                    }
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            } else if (!localStorage.token && _this.num != 3) {
              _this
                .axios({
                  method: "get",
                  url: `${_this.URLport.serverPath}/Questions/QuestionPage`,
                  async: false,
                  params: {
                    type: _this.typeNum,
                    pagenum: ++_this.pagenums,
                    pagesize: _this.pagesizes,
                  },
                  xhrFields: {
                    withCredentials: true,
                  },
                })
                .then(function (res) {
                  if (res.data.status == 1) {
                    if (res.data.data.data.length != 0) {
                      for (var i = 0; i < res.data.data.data.length; i++) {
                        _this.qlList.push(res.data.data.data[i]);
                      }
                    }
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            } else if (localStorage.token && _this.num == 3) {
              _this
                .axios({
                  method: "get",
                  url: `${_this.URLport.serverPath}/Questions/MyQuestion`,
                  async: false,
                  params: {
                    name: _this.topInput,
                    pagenum: ++_this.pagenums,
                    pagesize: _this.pagesizes,
                  },
                  xhrFields: {
                    withCredentials: true,
                  },
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                .then(function (res) {
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
                        a[i].type = "提交修改";
                      }
                      if (a[i].que.status == 6) {
                        a[i].type = "申请客服";
                      }
                      if (a[i].que.status == 7) {
                        a[i].type = "已完成";
                      }
                      if (a[i].que.status == 8) {
                        a[i].type = "已关闭";
                      }
                      _this.myQlList.push(a[i]);
                    }
                    console.log(a);

                    console.log(_this.myQlList);
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
          }
        };
      } else {
        return;
      }
    },
    personal: function () {
      const _this = this;
      if (localStorage.token) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Client/GetClient`,
            async: false,
            xhrFields: {
              withCredentials: true,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(function (res) {
            _this.clientID = res.data.data.id;
            _this.myquizList();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        _this.quizList();
      }
    },
    //  没有登录时检索问题列表
    quizList() {
      const _this = this;
      _this.qlcon = true;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/QuestionPage`,
          async: false,
          params: {
            type: _this.typeNum,
            pagenum: _this.pagenums,
            pagesize: _this.pagesizes,
            name: _this.topInput,
          },
          xhrFields: {
            withCredentials: true,
          },
        })
        .then(function (res) {
          if (res.data.status == 1) {
            _this.qlList = res.data.data.data;

            let date = new Date();
            let now = date.getTime();
            for (var i = 0; i < res.data.data.data.length; i++) {
              _this.$set(_this.qlList[i], "Times", "");
              _this.$set(_this.qlList[i], "myType", "");
              let leftTime =
                new Date(_this.qlList[i].question.endTime).getTime() - now;
              let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
              let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
              let m = Math.floor((leftTime / 1000 / 60) % 60);
              _this.qlList[i].Times = "还剩" + d + "天" + h + "时" + m + "分";
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 登录之后检索问题列表
    myquizList() {
      const _this = this;
      _this.myQlcon = true;
      _this.myqus = true;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/MyQuestionPage`,
          async: false,
          params: {
            type: _this.typeNum,
            pagenum: _this.pagenums,
            pagesize: _this.pagesizes,
            name: _this.topInput,
          },
          xhrFields: {
            withCredentials: true,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(function (res) {
          if (res.data.status == 1) {
            _this.myQlList = res.data.data.data;
            _this.qdConRigtS = true;
            let date = new Date();
            let now = date.getTime();
            for (var i = 0; i < res.data.data.data.length; i++) {
              _this.$set(_this.myQlList[i], "Times", "");
              let leftTime =
                new Date(_this.myQlList[i].que.endTime).getTime() - now;
              let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
              let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
              let m = Math.floor((leftTime / 1000 / 60) % 60);
              _this.myQlList[i].Times = "还剩" + d + "天" + h + "时" + m + "分";
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    formatDate: function (time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd-hh:mm");
    },
    // 最新展示
    newTime() {
      const _this = this;
      _this.num = 0;
      _this.typeNum = "new";
      _this.pagenums = 1;
      // _this.qlcon = true;
      // _this.qlData = false;
      if (localStorage.token) {
        _this.myquizList();
      } else {
        _this.quizList();
      }
    },
    // 即将结束展示
    newTimes() {
      const _this = this;
      _this.num = 1;
      _this.typeNum = "retime";
      _this.pagenums = 1;
      // _this.qlcon = true;
      // _this.qlData = false;
      if (localStorage.token) {
        _this.myquizList();
      } else {
        _this.quizList();
      }
    },
    // 高悬赏展示
    topCurrency() {
      const _this = this;
      _this.num = 2;
      _this.typeNum = "currency";
      _this.pagenums = 1;
      // _this.qlcon = true;
      // _this.qlData = false;
      if (localStorage.token) {
        _this.myquizList();
      } else {
        _this.quizList();
      }
    },
    // 已完成展示
    // accomplish() {
    //   const _this = this;
    //   _this.num = 3;
    //   _this.typeNum = "finish";
    //   _this.pagenums = 1;
    //   // _this.qlcon = true;
    //   // _this.qlData = false;
    //   if (localStorage.token) {
    //     _this.myquizList();
    //   } else {
    //     _this.quizList();
    //   }
    // },
    // 我的提问
    // Myquestion() {
    //   const _this = this;
    //   _this.num = 4;
    //   _this.pagenums = 1;
    //   // _this.qlcon = false;
    //   // _this.qlData = true;
    //   _this
    //     .axios({
    //       method: "get",
    //       url: `${_this.URLport.serverPath}/Questions/MyQuestion`,
    //       async: false,
    //       params: {
    //         pagenum: _this.pagenums,
    //         pagesize: _this.pagesizes,
    //         name: _this.topInput
    //       },
    //       xhrFields: {
    //         withCredentials: true
    //       },
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`
    //       }
    //     })
    //     .then(function(res) {
    //       if (res.data.status == 1) {
    //         _this.myQlList = res.data.data.data;
    //         for (var i = 0; i < _this.myQlList.length; i++) {
    //           _this.$set(_this.myQlList[i], "type", "");
    //           if (_this.myQlList[i].que.status == 1) {
    //             _this.myQlList[i].type = "保存";
    //           }
    //           if (_this.myQlList[i].que.status == 2) {
    //             _this.myQlList[i].type = "正在竞拍";
    //           }
    //           if (_this.myQlList[i].que.status == 3) {
    //             _this.myQlList[i].type = "已选竞拍者";
    //           }
    //           if (_this.myQlList[i].que.status == 4) {
    //             _this.myQlList[i].type = "已回答";
    //           }
    //           if (_this.myQlList[i].que.status == 5) {
    //             _this.myQlList[i].type = "提交修改";
    //           }
    //           if (_this.myQlList[i].que.status == 6) {
    //             _this.myQlList[i].type = "申请客服";
    //           }
    //           if (_this.myQlList[i].que.status == 7) {
    //             _this.myQlList[i].type = "已完成";
    //           }
    //           if (_this.myQlList[i].que.status == 8) {
    //             _this.myQlList[i].type = "已关闭";
    //           }
    //         }
    //       }
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },
    // 我要提问按钮
    NewQuitBt() {
      const _this = this;
      if (localStorage.getItem("token")) {
        _this.qlShade = !_this.qlShade;
      } else {
        _this.$message({
          message: "请登录之后提问",
          type: "warning",
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
      clearInterval(this.newAnswer);
      _this.QuestionsQuiz.Content = _this.myValue;
      let date = new Date();
      let now = date.getTime();
      let leftTime = new Date(_this.QuestionsQuiz.EndTime).getTime() - now;
      let h = Math.floor(leftTime / (3600 * 1000));
      _this.$refs[QuestionsQuiz].validate((valid) => {
        if (valid) {
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/Questions/Add`,
              async: false,
              data: _this.QuestionsQuiz,
              xhrFields: {
                withCredentials: true,
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(function (res) {
              if (res.data.status == 1) {
                // _this.QuestionsQuiz = [];
                _this.QuestionsQuiz.Title = "";
                _this.QuestionsQuiz.Content = "";
                _this.QuestionsQuiz.EndTime = new Date();
                setTimeout(function () {
                  _this.newAnswerTime = new Date();
                  _this.newAnswer = setInterval(_this.answerNum, 5000);
                }, 15000);
                _this.QuestionsQuiz.Currency = "";
                _this.QuestionsQuiz.Img = "";
                _this.myValue = "写回答...";
                _this.fileList = [];
                _this.qlShade = !_this.qlShade;
                _this.myquizList();
                _this.$message({
                  message: "发布成功",
                  type: "success",
                });
              } else {
                _this.$message({
                  message: "发布失败",
                  type: "error",
                });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    },
    // 我要答显示遮罩按钮
    replyShade(item) {
      const _this = this;
      if (localStorage.getItem("token")) {
        _this.auction.QuestionId = item.que.id;
        _this.auction.EndTime = item.que.endTime;
        _this.auction.Currency = item.que.currency;
        _this.qlreplyShade = !_this.qlreplyShade;
      } else {
        _this.$message({
          message: "请登录之后竞拍",
          type: "warning",
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

      _this.$refs[auction].validate((valid) => {
        if (valid) {
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/Bidding/Add`,
              async: false,
              data: _this.auction,
              xhrFields: {
                withCredentials: true,
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(function (res) {
              if (res.data.status == 1) {
                _this.qlreplyShade = !_this.qlreplyShade;
                _this.$message({
                  message: "竞拍成功!",
                  type: "success",
                });
              } else {
                _this.$message({
                  message: res.data.msg,
                  type: "error",
                });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    },
    // 搜索
    topInputs() {
      const _this = this;
      _this.pagenums = 1;
      if (localStorage.token && _this.num != 3) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Questions/MyQuestionPage`,
            async: false,
            params: {
              type: _this.typeNum,
              pagenum: _this.pagenums,
              pagesize: _this.pagesizes,
              name: _this.topInput,
            },
            xhrFields: {
              withCredentials: true,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(function (res) {
            if (res.data.status == 1) {
              _this.myQlList = res.data.data.data;
              let date = new Date();
              let now = date.getTime();
              for (var i = 0; i < res.data.data.data.length; i++) {
                _this.$set(_this.myQlList[i], "Times", "");
                let leftTime =
                  new Date(_this.myQlList[i].que.endTime).getTime() - now;
                let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
                let m = Math.floor((leftTime / 1000 / 60) % 60);
                _this.myQlList[i].Times =
                  "还剩" + d + "天" + h + "时" + m + "分";
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (!localStorage.token && _this.num != 3) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Questions/QuestionPage`,
            async: false,
            params: {
              type: _this.typeNum,
              pagenum: _this.pagenums,
              pagesize: _this.pagesizes,
              name: _this.topInput,
            },
            xhrFields: {
              withCredentials: true,
            },
          })
          .then(function (res) {
            if (res.data.status == 1) {
              _this.qlList = res.data.data.data;
              let date = new Date();
              let now = date.getTime();
              for (var i = 0; i < res.data.data.data.length; i++) {
                _this.$set(_this.qlList[i], "Times", "");
                _this.$set(_this.qlList[i], "myType", "");
                let leftTime =
                  new Date(_this.qlList[i].question.endTime).getTime() - now;
                let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
                let m = Math.floor((leftTime / 1000 / 60) % 60);
                _this.qlList[i].Times = "还剩" + d + "天" + h + "时" + m + "分";
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (localStorage.token && _this.num == 3) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Questions/MyQuestion`,
            async: false,
            params: {
              pagenum: _this.pagenums,
              pagesize: _this.pagesizes,
              name: _this.topInput,
            },
            xhrFields: {
              withCredentials: true,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(function (res) {
            if (res.data.status == 1) {
              _this.myQlList = res.data.data.data;
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
                  a[i].type = "提交修改";
                }
                if (a[i].que.status == 6) {
                  a[i].type = "申请客服";
                }
                if (a[i].que.status == 7) {
                  a[i].type = "已完成";
                }
                if (a[i].que.status == 8) {
                  a[i].type = "已关闭";
                }
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    nextpages() {
      const _this = this;
      if (localStorage.token && _this.num != 3) {
        _this.myQlcon = true;
        _this.myqus = true;
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Questions/MyQuestionPage`,
            async: false,
            params: {
              type: _this.typeNum,
              pagenum: ++_this.pagenums,
              pagesize: _this.pagesizes,
            },
            xhrFields: {
              withCredentials: true,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(function (res) {
            if (res.data.status == 1) {
              // _this.myQlList.push(res.data.data.data);
              let a = [];
              a = res.data.data.data;
              let date = new Date();
              let now = date.getTime();
              for (var i = 0; i < res.data.data.data.length; i++) {
                _this.$set(a[i], "Times", "");
                let leftTime = new Date(a[i].que.endTime).getTime() - now;
                let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
                let m = Math.floor((leftTime / 1000 / 60) % 60);
                _this.myQlList[i].Times =
                  "还剩" + d + "天" + h + "时" + m + "分";
                _this.myQlList.push(a[i]);
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (!localStorage.token && _this.num != 3) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Questions/QuestionPage`,
            async: false,
            params: {
              type: _this.typeNum,
              pagenum: ++_this.pagenums,
              pagesize: _this.pagesizes,
            },
            xhrFields: {
              withCredentials: true,
            },
          })
          .then(function (res) {
            if (res.data.status == 1) {
              if (res.data.data.data.length != 0) {
                for (var i = 0; i < res.data.data.data.length; i++) {
                  _this.qlList.push(res.data.data.data[i]);
                }
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (localStorage.token && _this.num == 3) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Questions/MyQuestion`,
            async: false,
            params: {
              name: _this.topInput,
              pagenum: ++_this.pagenums,
              pagesize: _this.pagesizes,
            },
            xhrFields: {
              withCredentials: true,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(function (res) {
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
                  a[i].type = "提交修改";
                }
                if (a[i].que.status == 6) {
                  a[i].type = "申请客服";
                }
                if (a[i].que.status == 7) {
                  a[i].type = "已完成";
                }
                if (a[i].que.status == 8) {
                  a[i].type = "已关闭";
                }
                _this.myQlList.push(a[i]);
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    handleRemove(file, fileList) {
      const _this = this;

      _this
        .axios({
          method: "delete",
          url: `${_this.URLport.serverPath}/Questions/RemoveImg`,
          async: false,
          params: {
            questionid: 0,
            imgurl: file.response.file,
          },
          xhrFields: {
            withCredentials: true,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(function (res) {
          var imgurl = "";
          for (let i = 0; i < fileList.length; i++) {
            imgurl = imgurl + "|" + fileList[i].response.file;
          }
          _this.QuestionsQuiz.Img = imgurl.slice(1);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
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
    },
    beforeAvatarUpload(file) {
      console.log(file);
    },
  },
  beforeDestroy() {
    clearInterval(this.newAnswer);
    // this.handleScroll().unbind();
    window.removeEventListener("scroll", this.handleScroll);
    console.log(this.$route);
  },
  watch: {
    "QuestionsQuiz.EndTime": {
      immediate: true,
      handler(newValue, oldValue) {
        const _this = this;
        if (newValue) {
          let newva = this.$options.filters["sendTimeDate"](
            new Date(newValue).getTime()
          );
          let nowDate = this.$options.filters["sendTimeDate"](
            new Date().getTime() + 7200000
          ); // 2小时之后的时间(我是因业务要求,这里可以随意调整时间)
          let dt = nowDate.split(" ");
          let st = "";
          if (newva.split(" ")[0] == dt[0]) {
            // 是今天,选择 的时间开始为此刻的时分秒
            st = dt[1];
          } else {
            // 明天及以后从0时开始
            st = "00:00:00";
          }
          this.startTimeRange = st + " - 23:59:59";
          console.log(this.startTimeRange);
          // //例如：如果今天此刻时间为10:41:40 则选择时间范围为： 11:41:40 - 23:59:59
          // //否则为：00:00:00- 23:59:59
        }
      },
    },
    "auction.EndTime": {
      immediate: true,
      handler(newValue, oldValue) {
        const _this = this;
        if (newValue) {
          let newva = _this.$options.filters["sendTimeDate"](
            new Date(newValue).getTime()
          );
          let nowDate = _this.$options.filters["sendTimeDate"](
            new Date().getTime() + 7200000
          ); // 2小时之后的时间(我是因业务要求,这里可以随意调整时间)
          let dt = nowDate.split(" ");
          let st = "";
          if (newva.split(" ")[0] == dt[0]) {
            // 是今天,选择 的时间开始为此刻的时分秒
            st = dt[1];
          } else {
            // 明天及以后从0时开始
            st = "00:00:00";
          }
          _this.austartTimeRange = st + " - 23:59:59";
          // //例如：如果今天此刻时间为10:41:40 则选择时间范围为： 11:41:40 - 23:59:59
          // //否则为：00:00:00- 23:59:59
        }
      },
    },
    value(newValue) {
      this.myValue = newValue;
    },
    myValue(newValue) {
      this.$emit("input", newValue);
    },
  },
};
</script>
