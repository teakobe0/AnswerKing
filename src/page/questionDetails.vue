<style>
.questionDetails {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 276px;
  overflow: hidden;
}

.qd-con {
  /* margin-top: 80px; */
  overflow: hidden;
  background: #f6f6f6;
}
.qd-title-back {
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  margin-bottom: 20px;
  background: #fff;
  min-height: 140px;
}
.qd-title {
  width: 1300px;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
  overflow: hidden;
}
.qd-title-left {
  display: inline-block;
  width: 980px;
}
.qd-title-right {
  text-align: center;
  position: absolute;
  right: 0px;
  top: 20px;
}
.qd-title-right-1 {
  float: left;
  padding: 0 8px;
  /* width: 84px; */
}
.qd-title-right-1 p {
  color: #8590a6;
}
.qd-title-right-1 div {
  color: #000;
  font-weight: 700;
}
.qd-title-right-2 {
  float: left;
  padding: 0 8px;
  width: 84px;
  border-left: 1px solid #ebebeb;
}
.qd-title-right-2 p {
  color: #8590a6;
}
.qd-title-right-2 div {
  color: #000;
  font-weight: 700;
}
.qd-title h2 {
  margin-bottom: 11px;
}
.qd-title p {
  margin-bottom: 11px;
}
.qd-attention {
}
.ql-an {
  color: #0084f0 !important;
  border: 1px solid #0084f0 !important;
}
/* 编辑区域 */
.qd-editCon {
  width: 1300px;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 20px;
  min-height: 320px;
}
.qd-editNull {
  width: 900px;
  height: 300px;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
.qd-editNull p {
  line-height: 300px;
  text-align: center;
  color: #8590a6;
}
.qd-edit {
  width: 1300px;
  margin-bottom: 20px;
}
.qd-edit-submit {
  margin-top: 11px !important;
  float: right;
  margin-bottom: 20px !important;
  margin-left: 10px !important;
}

/* 编辑区域结束 */
/* 竞拍遮罩区域 */
.qd-auctionShade {
  width: 380px;
  height: 300px;
  float: right;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
.auctionShade-con {
  /*width: 300px;*/
  height: 300px;
  overflow: hidden;
  /*margin: 0 auto;*/
  background-color: #fff;
  /*position: relative;*/
  /*top: 50%;*/
  /*transform: translateY(-50%);*/
  /*border-radius: 4px;*/
}
.closeAuctionShade {
  /*position: absolute;*/
  /*right: -50px;*/
  /*top: 10px;*/
  /*color: #fff;*/
  /*cursor: pointer;*/
  /*font-size: 30px;*/
}
.autionShadeInfo {
  height: 50px;
  padding: 16px 20px 16px 20px;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid #f6f6f6;
}
.autionShadeInfo img {
  width: 40px;
  min-width: 40px;
  min-height: 40px;
  vertical-align: top;
  margin-right: 10px;
  margin-top: 5px;
}
.autionShadeInfo b {
  width: 110px;
  font-size: 14px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 16px;
}
.auctionShade-con-Info {
  /*flex: 1 1;*/
  overflow-y: scroll;
  overflow-x: hidden;
  height: 300px;
}
.auctionShade-con-TR {
  position: absolute;
  bottom: 16px;
  right: 20px;
  font-size: 14px;
}
.auctionShade-con-time {
  margin-right: 0px;
}
.privateLetter {
  color: #cc8500;
  font-size: 22px;
  cursor: pointer;
}
.privateLetter:hover {
  color: #f3e901;
}
.nullLogin {
  z-index: 999;
  line-height: 320px;
  text-align: center;
  color: rgb(23, 114, 191);
}
.countTime {
  position: absolute;
  right: 0px;
  bottom: 0px;
}
/* 竞拍遮罩区域结束 */
.answerShow {
  border: 1px solid #e6e6e6;
  min-height:318px;
  background: #fff;
}
</style>
<template>
  <div class="questionDetails">
    <homeNav msg="登录/注册" />
    <div v-title data-title="问答大厅-CourseWhale"></div>
    <div class="qd-con">
      <div class="qd-title-back">
        <div class="qd-title" v-if="qlListShow">
          <p class="countTime" v-if="countdown">倒计时:{{d}}天{{h}}小时{{m}}分{{s}}秒</p>
          <p class="countTime" v-if="countdownText">时间已到您不能在更改答案内容。</p>
          <div class="qd-title-left">
            <h2>{{qlList.que.title}}</h2>
            <p>{{qlList.que.content}}</p>
          </div>
          <div class="qd-title-right">
            <div class="qd-title-right-1">
              <p>截止日期</p>
              <div>{{qlList.que.endTime | formatDate}}</div>
            </div>
            <div class="qd-title-right-2" v-if="qlList.bls.length != 0">
              <p>竞拍者</p>
              <div>{{qlList.bls.length}}</div>
            </div>
          </div>
          <div>
            <!-- <el-button type="primary" size="medium" class="qd-attention">关注问题</el-button> -->
            <!-- <el-button
              icon="el-icon-edit"
              size="medium"
              class="ql-an"
              @click="myAnswer"
              v-if="auctionbuttonShow"
            >竞拍</el-button>-->
          </div>
        </div>
      </div>
      <div class="qd-editCon">
        
        <div style="width:1300px;min-height:320px;" v-if="qlListShow" v-loading="loading">
          <div class="nullLogin" v-if="nullLoginShow">登录之后查看答案</div>
          <div class="answerShow" v-show="answerShows" v-html="myValue"></div>
          <div style="float: left">
            <div class="qd-editNull" v-show="qdeditnullShow">
              <p>暂时还没有回答,快去竞拍回答赢取鲸灵币吧!</p>
            </div>
            <div class="qd-edit" v-show="qdeditShow">
              <editor id="tinymce" v-model="myValue" :init="init"></editor>
              <el-button
                type="primary"
                class="qd-edit-submit"
                @click="submit"
                v-if="savesubmitShow"
              >提交回答</el-button>
              <el-button
                type="primary"
                class="qd-edit-submit"
                @click="save"
                v-if="savesubmitShow"
              >保存进度</el-button>
            </div>
          </div>

          <div class="qd-auctionShade" v-show="auctionShow">
            <div class="auctionShade-con">
              <div class="auctionShade-con-Info">
                <div
                  v-if="qlList.bls.length == 0"
                  style="line-height: 300px;text-align: center;color: #8590a6;"
                >还没有竞拍者</div>
                <div v-for="item in qlList.bls" class="autionShadeInfo">
                  <img src="../assets/5.jpg" alt v-show="item.image == null" />
                  <img :src="item.image" alt v-show="item.image != null" />
                  <span>
                    <b>{{item.name}}</b>
                  </span>
                  <div class="auctionShade-con-TR" v-if="auctionClient">
                    <span
                      class="auctionShade-con-time el-icon-time"
                      title="截止日期"
                    >{{item.bidding.endTime | formatDate}}</span>
                  </div>

                  <el-button
                    type="primary"
                    size="mini"
                    style="float:right;margin-top:0px;"
                    v-if="auctionClient"
                    @click="auctions(item.bidding.createBy)"
                  >选他答</el-button>
                  <i
                    class="el-icon-chat-line-round privateLetter"
                    style="float:right;margin-top:2px;margin-right: 11px;"
                    v-if="auctionClient"
                    title="通知留言"
                    @click="inform(item.bidding,item.name)"
                  ></i>
                  <span
                    class="auctionShade-con-reward el-icon-coin"
                    style="float:right;margin-top:7px;margin-right:11px;font-size:14px;width:38px;"
                    v-if="auctionClient"
                    title="悬赏金"
                  >{{item.bidding.currency}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  name: "questionDetails",
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
          formData.append("questionId", this.$route.params.question_id);
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
          // axios({
          //   method: "post",
          //   url: `${_this.URLport.serverPath}/File/Upload`,
          //   async: false,
          //   data: formData,
          //   xhrFields: {
          //     withCredentials: true
          //   },
          //   headers: {
          //     Authorization: `Bearer ${localStorage.getItem("token")}`
          //   }
          // })
          //   .then(function(res) {
          //     success(res.data.data.url);
          //   })
          //   .catch(function(error) {
          //     console.log(error);
          //   });

          // 服务端接收文件的参数名，文件数据，文件名
          // axios({
          //   method: "POST",
          //   // 这里是你的上传地址
          //   url: "uploadimage",
          //   data: formData
          // })
          //   .then(res => {
          //     // 这里返回的是你图片的地址
          //     success(res.data.url);
          //   })
          //   .catch(() => {
          //     failure("上传失败");
          //   });

          console.log(blobInfo);
        }
      },
      myValue: this.value,
      qlList: {},
      qdeditShow: false,
      auctionShow: true,
      // 竞拍者信息
      autionInfo: [],
      d: "",
      h: "",
      m: "",
      s: "",
      clientID: "",
      // 判断当前登录人是否是竞拍者之一
      auctionClient: false,
      endtime: "",
      // 倒计时显示隐藏
      countdown: false,
      countdownText: false,
      // 标题显示隐藏
      qlListShow: false,
      // 竞拍按钮显示隐藏
      auctionbuttonShow: true,
      // 保存进度按钮显示隐藏
      savesubmitShow: true,
      // 加载中
      loading: true,
      nullLoginShow: false,
      // 答案展示
      answerShows: false,
      // 暂时没人回答
      qdeditnullShow: true
    };
  },
  created: function() {
    const _this = this;
    _this.personal();
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  },
  methods: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
    countTime: function() {
      //获取当前时间
      var date = new Date();
      var now = date.getTime();
      //设置截止时间
      var endDate = new Date(this.endtime);
      // var endDate = new Date("2020-06-4 17:07:00");
      var end = endDate.getTime();
      //时间差
      var leftTime = end - now;
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24); //天数我没用到，暂且写上
        this.h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        this.m = Math.floor((leftTime / 1000 / 60) % 60);
        this.s = Math.floor((leftTime / 1000) % 60);
      }
      if (leftTime <= 0) {
        this.d = 0;
        this.h = 0;
        this.m = 0;
        this.s = 0;
        this.countdownText = true;
        this.countdown = false;
        this.savesubmitShow = false;
        return;
      }
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(this.countTime, 1000);
    },
    personal: function() {
      const _this = this;
      if (localStorage.token) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Client/GetClient`,
            async: false,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(function(res) {
            _this.clientID = res.data.data.id;
            _this.QuDe();
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        _this.QuDe();
      }
    },
    // 写回答按钮
    myAnswer() {
      const _this = this;
      // _this.qdeditShow = true;
    },
    // 显示竞拍者遮罩
    auction() {
      const _this = this;
      // _this.auctionShow = !_this.auctionShow;
    },
    // 检索问题详情
    QuDe() {
      const _this = this;

      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/Details`,
          async: false,
          params: {
            questionid: _this.$route.params.question_id
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          // auctionClient 竞拍者栏的留言、选他答、时间、悬赏的隐藏
          // auctionbuttonShow 竞拍按钮的隐藏
          // qdeditShow 编辑器的隐藏
          // savesubmitShow 保存进度提交的隐藏
          // countdown 倒计时的隐藏
          // auctionShow 竞拍者栏的整体隐藏
          if (res.data.status == 1) {
            _this.loading = false;
            _this.qlList = res.data.data;
            _this.qlListShow = true;
            _this.nullLoginShow = false;
            if (localStorage.token) {
              // 确定登录人是否是竞拍者之一
              for (var i = 0; i < _this.qlList.bls.length; i++) {
                if (_this.clientID == _this.qlList.bls[i].bidding.createBy) {
                  _this.auctionClient = false;
                  console.log("我是竞拍者之一");
                }
              }

              if (_this.qlList.que.status == 4 || _this.qlList.que.status >= 6) {
                _this.auctionClient = false;
                _this.auctionbuttonShow = false;
                _this.auctionShow = false;
                _this.qdeditShow = false;
                _this.qdeditnullShow = false;
                _this.savesubmitShow = false;
                _this.answerShows = true;
                console.log("问题已经回答完");
              } else if (_this.clientID == _this.qlList.que.createBy) {
                // 确认登录人是否是提问者
                _this.auctionClient = true;
                _this.auctionbuttonShow = false;
                _this.qdeditShow = false;
                _this.savesubmitShow = false;
                console.log("我是提问者");
              } else if (_this.qlList.que.answerer == _this.clientID) {
                _this.endtime = _this.formatDate(_this.qlList.que.endTime);
                _this.auctionShow = false;
                _this.qdeditShow = true;
                _this.auctionbuttonShow = false;
                _this.qdeditnullShow = false;
                _this.countdown = true;
                _this.countTime();
                console.log("我是答题人");
              }else if(_this.qlList.que.status == 5 && _this.clientID == _this.qlList.que.answerer){
                console.log("提交修改状态并且我是答题人")
                _this.qdeditShow = true;
                _this.savesubmitShow = true;
              }
              // 确认登录人是否是答题人

              if (_this.qlList.answer != null) {
                _this.myValue = _this.qlList.answer.content;
                console.log("有答案");
              }
            } else {
              _this.qdeditShow = false;
              _this.nullLoginShow = true;
              _this.auctionClient = false;
              _this.auctionbuttonShow = false;
              _this.auctionShow = false;
              _this.qdeditShow = false;
              _this.qdeditnullShow = false;
              _this.savesubmitShow = false;
              _this.answerShows = false;
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 选他答
    auctions(clienid) {
      const _this = this;
      this.$prompt("请输入您的账号密码", "CourseWhale", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          _this
            .axios({
              method: "get",
              url: `${_this.URLport.serverPath}/Questions/Choose`,
              async: false,
              params: {
                questionid: _this.$route.params.question_id,
                clienid: clienid,
                password: value
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
                _this.auctionClient = false;
                _this.$message({
                  message: "发布成功,竞拍者可以开始答题。",
                  type: "success"
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        })
        .catch(() => {});
    },
    // 通知留言
    inform(item, name) {
      const _this = this;
      console.log(item);

      this.$prompt("对" + " " + name + " " + "留言:", "CourseWhale", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          var json = {};
          json.ReceiveId = item.createBy; //接收人ID
          json.ContentsUrl = value; //通知内容
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/Notice/Add`,
              async: false,
              data: json,
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
        })
        .catch(() => {});
    },
    // 提交回答
    submit() {
      const _this = this;
      // 如果这个答案保存过就把ID和CreateBy赋值如果是第一次就不赋值
      var json = {};

      if (_this.qlList.answer != null) {
        json = _this.qlList.answer;
        json.content = this.myValue; //答案内容
        // json.Id = _this.qlList.answer.id; //答案ID
        // json.CreateBy = _this.qlList.answer.createBy; //答题人ID
      } else {
        json.questionId = _this.$route.params.question_id; //问题ID
        json.content = this.myValue; //答案内容
        json.id = 0; //答案ID
        json.createBy = 0; //答题人ID
      }
      _this
        .axios({
          method: "post",
          url: `${_this.URLport.serverPath}/Answer/Submit`,
          async: false,
          data: json,
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
    },
    // 保存进度
    save() {
      const _this = this;
      // 如果这个答案保存过就把ID和CreateBy赋值如果是第一次就不赋值
      var json = {};

      if (_this.qlList.answer != null) {
        json = _this.qlList.answer;
        json.content = this.value; //答案内容
        // json.Id = _this.qlList.answer.id; //答案ID
        // json.CreateBy = _this.qlList.answer.createBy; //答题人ID
      } else {
        json.questionId = _this.$route.params.question_id; //问题ID
        json.content = this.value; //答案内容
        json.id = 0; //答案ID
        json.createBy = 0; //答题人ID
      }
      _this
        .axios({
          method: "post",
          url: `${_this.URLport.serverPath}/Answer/Add`,
          async: false,
          data: json,
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          // if (res.data.status == 1) {
          //   _this.$message({
          //     message: "发布成功",
          //     type: "success"
          //   });
          // } else {
          //   _this.$message({
          //     message: "发布失败",
          //     type: "error"
          //   });
          // }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    tinymce.init({});
  },
  beforeRouteLeave: function(to, from, next) {
    next(false);
    if (this.value != "写回答..." && this.qdeditShow) {
      this.$confirm("离开本页面?请注意保存您的数据.", "CourseWhale", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          next();
        })
        .catch(() => {});
    } else {
      next();
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
