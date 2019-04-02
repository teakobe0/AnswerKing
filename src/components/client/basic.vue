<style>
/*右侧*/
.pd-con-head-right {
  width: 1000px;
  height: 960px;
  float: left;
  padding: 20px 40px 0px 40px;
  overflow: hidden;
  background-color: #fafafa;
}

.head-right-top {
  width: 100%;
  border-bottom: 1px dashed #dedede;
}

.head-right-top .right-top-title {
  font-size: 20px;
  font-weight: 700;
}

.head-right-top .right-top-acctype {
  margin-top: 16px;
  margin-bottom: 16px;
}

.head-right-top .right-top-acctype a {
  text-decoration: none;
  color: rgb(0, 89, 255);
}

.head-right-top .right-top-acctype a:hover {
  color: #d91685;
}

.head-right-top .right-top-warn {
  height: 60px;
  background-color: #fcfce2;
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 16px;
  padding: 0 10px;
}

.head-right-top .right-top-warn p {
  font-weight: 700;
  line-height: 60px;
  float: left;
}

.head-right-top .right-top-warn .warn-button {
  float: right;
  margin-top: 10px;
}

.pd-con-head-right ul {
  margin-top: 10px;
  margin-bottom: 10px;
}

.pd-con-head-right li {
  list-style-type: none;
  display: inline-block;
  width: 50%;
  height: 30px;
  line-height: 30px;
}

.head-right-middle .right-middle-title {
  font-size: 20px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 8px;
}
.message div {
  margin-bottom: 8px;
  height: 28px;
  line-height: 28px;
}
.message div el-button{
  float: right;
}
</style>


<template>
  <div id="basic">
    <div class="pd-con-head-right">
      <div class="head-right-top">
        <p class="right-top-title">个人信息</p>
        <p class="right-top-acctype">
          账户类型:
          <strong v-if="this.$store.state.vip.succeed == false">普通</strong>
          <strong v-if="this.$store.state.vip.succeed == true">会员</strong>

          <span v-if="this.$store.state.vip.succeed == false">
            （
            <router-link to="/personalData/vip">升级</router-link>）
          </span>
        </p>

        <div class="right-top-warn" v-if="this.$store.state.vip.succeed == false">
          <p>升级到高级会员获取更多。</p>
          <router-link to="/personalData/vip" style="text-decoration: none;color: #ffffff;">
            <el-button class="warn-button" type="danger">现在升级</el-button>
          </router-link>
        </div>
        <ul>
          <li>名称:&nbsp;{{this.value.Name}}</li>
          <li>Q&nbsp;Q:&nbsp;{{this.value.QQ}}</li>
          <li>手机:&nbsp;{{this.value.Tel}}</li>
          <li>性别:&nbsp;{{this.value.Sex}}</li>
          <li>生日:&nbsp;{{this.value.Birthday | formatDate}}</li>
        </ul>
      </div>
      <div class="head-right-middle">
        <p class="right-middle-title">通知</p>
        <el-tabs v-model="message" @tab-click="handleClick">
          <el-tab-pane label="回复我的" name="reply">
            <div class="message">
              <div v-for="item in messages">
                {{item.sendname}}回复您：{{item.content}}
                <el-button @click="gomessage(item.contentsUrl,item.id)" style="float:right;"  size="mini">查看</el-button>
              </div>
            </div>
          </el-tab-pane>
          <!-- <el-tab-pane label="@提到我的" name="first">@提到我的</el-tab-pane> -->
        </el-tabs>
      </div>
      <!-- <div class="head-right-middle"> -->
      <!-- <p class="right-middle-title">文件</p> -->
      <!-- <el-tabs v-model="activeName" @tab-click="handleClick"> -->
      <!-- <el-tab-pane label="最近浏览过的文件" name="first">最近浏览过的文件</el-tab-pane> -->
      <!-- <el-tab-pane label="我的上传" name="second">我的上传</el-tab-pane> -->
      <!-- </el-tabs> -->
      <!-- </div> -->
    </div>
  </div>
</template>
<script type="es6">
import { formatDate } from "@/common/js/date.js";

export default {
  name: "basic",
  components: {},
  data() {
    //在ES6中添加数据是在return{}中
    return {
      activeName: "first",
      value: {
        Name: "",
        QQ: "",
        Tel: "",
        Sex: "",
        Birthday: ""
      },
      message: "reply",
      messages: [],
      personreviewsid: "",
      ids: "",
      classinfoid: "",
      a:[]
    };
  },
  created: function() {
    var _this = this;
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
      var _this = this;
      if (localStorage.getItem("token")) {
        _this
          .axios({
            method: "get",
            url: `http://192.168.1.27:8088/api/Client/GetClient`,
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
            _this.value.Name = res.data.data.name;
            _this.value.QQ = res.data.data.qq;
            _this.value.Tel = res.data.data.tel;
            _this.value.Sex = res.data.data.sex;
            _this.value.Birthday = res.data.data.birthday;
            _this.personreviewsid = res.data.data.id;
            _this.gainmessage();
            console.log(new Date())
          })
          .catch(function(error) {
            console.log(error);
            console.log("获取token失败")
          });
      } else {
      }
    },
    // 检索通知
    gainmessage: function() {
      var _this = this;
      _this
        .axios({
          method: "get",
          url: `http://192.168.1.27:8088/api/Notice/Notices`,
          async: false,
          params: {
            clientid: _this.personreviewsid
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          console.log(res);
          _this.messages = res.data.data;
          for (var i = 0; i < _this.messages.length; i++) {
            _this.$set(_this.messages[i], "content", []);
            var a = _this.messages[i].contentsUrl.split(",")
            var b = a[0].split(":")
            if(b.length >= 2){
                b.splice(0,1)
                _this.messages[i].content  = b[0]
            }else {
                _this.messages[i].content  = b[0]
            }
          }
          console.log(_this.messages);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 修改通知状态（删除）
    gomessage: function(url,ids) {
      var _this = this;
      console.log(ids)
      var a = url.split(",");
      _this.ids = a[1];
      _this.classinfoid = a[2];
      _this.$router.push({
        path: "/serchDetailsContent",
        query: { id: a[1], classInfoId: a[2] }
      });
      _this
        .axios({
          method: "put",
          url: `http://192.168.1.27:8088/api/Notice/ChangeStatus`,
          async: false,
          params: {
            id: ids
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          console.log(res);
          _this.gainmessage();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
