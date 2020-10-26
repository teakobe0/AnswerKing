<style>
.inform-right {
  width: 1000px;
  float: left;
  padding: 20px 40px 0px 40px;
  overflow: hidden;
}
#inform h3 {
  border-bottom: 1px solid #dddddd;
  color: #999999;
  line-height: 40px;
  padding-bottom: 6px;
  margin-bottom: 20px;
}
.message {
  margin-top: 24px;
}
.message div {
  margin-bottom: 8px;
  overflow: hidden;
  word-wrap: break-word;
  line-height: 28px;
  color: #444;
}
.message div el-button {
  float: right;
}
.message .sendname {
  color: #5b9dfd;
  vertical-align: auto;
}
</style>


<template>
  <div id="inform">
    <div class="inform-right">
      <h3>{{$t('personal.nav5')}}</h3>
      <div class="message">
        <div style="text-align:center" v-show="dataNull == true">{{$t('inform.con1')}}</div>
        <div v-for="item in messages">
          <div style="float:left;width: 868px;">
            <span class="sendname">{{item.sendname}}</span>
            <span v-show="item.type == 1">{{$t('inform.con2')}}：</span>
            <span v-show="item.type == 2">给您留言：</span>
            <span v-html="item.content"></span>
          </div>
          <div style="float:right;">
            <el-button
              @click="del(item.id)"
              v-show="item.type == 1"
              style="float:right;margin-left:10px;"
              size="mini"
            >删除</el-button>
            <el-button
              @click="gomessage(item.contentsUrl,item.id)"
              v-show="item.type == 1"
              style="float:right;"
              size="mini"
            >{{$t('inform.con3')}}</el-button>

            <el-button
              @click="del(item.id)"
              v-show="item.type == 2"
              style="float:right;"
              size="mini"
            >删除</el-button>
            <el-button
              @click="inform(item.sendId,item.sendname)"
              v-show="item.type == 2 && item.sendId != 0"
              style="float:right;"
              size="mini"
            >回复</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="es6">
import { formatDate } from "@/common/js/date.js";

export default {
  name: "inform",
  components: {},
  data() {
    //在ES6中添加数据是在return{}中
    return {
      activeName: "first",
      message: "reply",
      messages: [],
      personreviewsid: "",
      ids: "",
      classinfoid: "",
      dataNull: false
    };
  },
  created: function() {
    const _this = this;
    _this.gainpersonal();
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  methods: {
    // 获取个人信息
    gainpersonal: function() {
      const _this = this;
      if (localStorage.getItem("token")) {
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
            _this.personreviewsid = res.data.data.id;
            _this.gainmessage();
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
      }
    },
    // 检索通知
    gainmessage: function() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Notice/Notices`,
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
            _this.$store.state.logo.message = res.data.data.length;
            _this.messages = res.data.data;
            if (_this.messages.length == 0) {
              _this.dataNull = true;
            } else {
              for (var i = 0; i < _this.messages.length; i++) {
                _this.$set(_this.messages[i], "content", []);
                _this.$set(_this.messages[i], "type", 0);
                var a = _this.messages[i].contentsUrl.split(",");
                var regPos = /^\+?[1-9][0-9]*$/;
                if (regPos.test(a[a.length - 1])) {
                  _this.messages[i].type = 1; //1代表这是从评论过来的
                  var b = a[0].split(":");
                  var c = [];
                  for (var j = 1; j < a.length - 2; j++) {
                    c.push(a[j]);
                  }
                  if (b.length >= 2) {
                    b.splice(0, 1);
                    _this.messages[i].content = b[0] + c.join();
                  } else {
                    _this.messages[i].content = b[0] + c.join();
                  }
                } else {
                  _this.messages[i].type = 2; //2代表这是从问答留言过来的
                  _this.messages[i].content = _this.messages[i].contentsUrl;
                }
              }
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 跳转评论页面
    gomessage: function(url, ids) {
      const _this = this;
      // var c = "women,jiushi,234234m2,234,23,45";
      // var a = c.split(",");
      // // console.log(a)
      // var b = [];
      // var c = "";
      // for (var i = 0; i < a.length - 2; i++) {
      //   b.push(a[i]);
      // }
      // console.log(b.join());
      // console.log(c);
      var a = url.split(",");
      // _this.ids = a[a,length-2];
      // _this.classinfoid = a[a.length-1];
      _this.$router.push({
        path:
          "/classes/" +
          a[a.length - 2] +
          "/content/" +
          a[a.length - 1] +
          "/weeks/" +
          0 +
          "/weektype/" +
          0
      });
    },
    // 删除留言
    del(ids) {
      const _this = this;
      _this
        .axios({
          method: "put",
          url: `${_this.URLport.serverPath}/Notice/ChangeStatus`,
          async: false,
          params: {
            id: ids
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          _this.gainmessage();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 通知留言
    inform(item, name) {
      const _this = this;

      this.$prompt("对" + " " + name + " " + "留言:", "CourseWhale", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          var json = {};
          json.ReceiveId = item; //接收人ID
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
                _this.gainmessage();
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
    }
  }
};
</script>
