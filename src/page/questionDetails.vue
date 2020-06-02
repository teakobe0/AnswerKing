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
  width: 900px;
}
.qd-edit-submit {
  margin-top: 11px !important;
  float: right;
  margin-bottom: 20px !important;
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
  width: 50px;
  height: 50px;
  vertical-align: middle;
  margin-right: 10px;
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
  left: 170px;
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
/* 竞拍遮罩区域结束 */
</style>
<template>
  <div class="questionDetails">
    <homeNav msg="登录/注册" />
    <div v-title data-title="问答大厅-CourseWhale"></div>
    <div class="qd-con">
      <div class="qd-title-back">
        <div class="qd-title">
          <div class="qd-title-left">
            <h2>{{qlList.que.title}}</h2>
            <p>{{qlList.que.content}}</p>
            <p class="date">{{d}}天{{h}}小时{{m}}分{{s}}秒</p>
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
            <!-- <el-button icon="el-icon-edit" size="medium" class="ql-an" @click="myAnswer">写回答</el-button> -->
          </div>
        </div>
      </div>

      <div class="qd-editCon">
        <div style="float: left">
          <div class="qd-editNull" v-show="qdeditShow == false">
            <p>暂时还没有回答,快去回答吧!</p>
          </div>
          <div class="qd-edit" v-show="qdeditShow == true">
            <editor id="tinymce" v-model="value" :init="init"></editor>
            <el-button type="primary" class="qd-edit-submit">提交回答</el-button>
          </div>
        </div>

        <div class="qd-auctionShade" v-show="auctionShow">
          <div class="auctionShade-con">
            <div class="auctionShade-con-Info">
              <div v-for="item in qlList.bls" class="autionShadeInfo">
                <img src="../assets/5.jpg" alt v-show="item.image == null" />
                <img :src="item.image" alt v-show="item.image != null" />
                <span>
                  <b>{{item.name}}</b>
                </span>
                <div class="auctionShade-con-TR" v-if="auctionClient">
                  <span
                    class="auctionShade-con-time el-icon-time"
                  >{{item.bidding.endTime | formatDate}}</span>
                </div>

                <el-button
                  type="primary"
                  size="mini"
                  style="float:right;margin-top:0px;"
                  v-if="auctionClient"
                  @click="auctions"
                >选他答</el-button>
                <i
                  class="el-icon-chat-line-round privateLetter"
                  style="float:right;margin-top:2px;margin-right: 11px;"
                  v-if="auctionClient"
                  title="通知留言"
                ></i>
                <span
                  class="auctionShade-con-reward el-icon-coin"
                  style="float:right;margin-top:5px;margin-right:11px;"
                  v-if="auctionClient"
                >{{item.bidding.currency}}</span>
              </div>
              <!--              <div class="closeAuctionShade el-icon-close" @click="auction"></div>-->
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
import "tinymce/plugins/image"; // 插入上传图片插件
// import "tinymce/plugins/media"; // 插入视频插件
import "tinymce/plugins/table"; // 插入表格插件
import "tinymce/plugins/lists"; // 列表插件
import "tinymce/plugins/wordcount"; // 字数统计插件

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
      default: "请输入内容"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default: "lists image table wordcount"
    },
    toolbar: {
      type: [String, Array],
      default:
        "undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat"
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
          const img = "data:image/jpeg;base64," + blobInfo.base64();
          success(img);
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
    countTime: function() {
      //获取当前时间
      var date = new Date();
      var now = date.getTime();
      //设置截止时间
      var endDate = new Date("2020-6-3-23:23:23");
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
            console.log(res);
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
      _this.qdeditShow = true;
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
          if (res.data.status == 1) {
            _this.qlList = res.data.data;
            console.log(_this.clientID);
            // 确定登录人是否是竞拍者之一
            for (var i = 0; i < _this.qlList.bls.length; i++) {
              if (_this.clientID == _this.qlList.bls[i].bidding.createBy) {
                _this.auctionClient = false;
              }
            }
            // 确认登录人是否是提问者
            if (_this.clientID == _this.qlList.que.createBy) {
              _this.auctionClient = true;
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 选他答
    auctions() {
      const _this = this;
      this.$prompt("请输入您的账号密码", "CourseWhale", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          // _this
          //   .axios({
          //     method: "get",
          //     url: `${_this.URLport.serverPath}/Questions/Choose`,
          //     async: false,
          //     params: {
          //       questionid: _this.$route.params.question_id,
          //       clienid: "",
          //       password: ""
          //     },
          //     xhrFields: {
          //       withCredentials: true
          //     },
          //     headers: {
          //       Authorization: `Bearer ${localStorage.getItem("token")}`
          //     }
          //   })
          //   .then(function(res) {
          //     if (res.data.status == 1) {
          //       console.log(res);
          // _this.$message({
          //   type: "success",
          //   message: "竞拍者已经可以开始作答!"
          // });
          //     }
          //   })
          //   .catch(function(error) {
          //     console.log(error);
          //   });
        })
        .catch(() => {});
    }
  },
  mounted() {
    tinymce.init({});
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
