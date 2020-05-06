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
      <h3>通知信息</h3>
      <div class="message">
        <div style="text-align:center" v-show="dataNull == true">暂无数据</div>
        <div v-for="item in messages">
          <span class="sendname">{{item.sendname}}</span>
          回复您：{{item.content}}
          <el-button
            @click="gomessage(item.contentsUrl,item.id)"
            style="float:right;"
            size="mini"
          >查看</el-button>
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
    handleClick: function(tab, event) {
      console.log(tab, event);
    },
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
            console.log("获取token失败");
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
          _this.$store.state.logo.message = res.data.data.length;
          _this.messages = res.data.data;
          if (_this.messages.length == 0) {
            _this.dataNull = true;
          } else {
            for (var i = 0; i < _this.messages.length; i++) {
              _this.$set(_this.messages[i], "content", []);
              var a = _this.messages[i].contentsUrl.split(",");
              var b = a[0].split(":");
              if (b.length >= 2) {
                b.splice(0, 1);
                _this.messages[i].content = b[0];
              } else {
                _this.messages[i].content = b[0];
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
          var a = url.split(",");
          _this.ids = a[1];
          _this.classinfoid = a[2];
          _this.$router.push({
            path: '/classes/'+a[1]+'/content/'+a[2]+'/weeks/'+0+'/weektype/'+0,
          });
          _this.$message({
            message: "删除成功",
            type: "success"
          });
          _this.gainmessage();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  }
};
</script>
