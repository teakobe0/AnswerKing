<style>
#basic h3 {
  border-bottom: 1px solid #dddddd;
  color: #999999;
  line-height: 40px;
  padding-bottom: 6px;
}
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
  /* height: 213px; */
  border-bottom: 1px dashed #dedede;
}

.head-right-top .right-top-title {
  font-size: 20px;
  font-weight: 700;
}

.head-right-top .right-top-acctype {
  margin-top: 16px;
  margin-bottom: 16px;
  color: #444;
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
  padding: 0 10px 0 0;
  margin-bottom: 16px;
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


.pd-con-head-right li {
  list-style-type: none;
  display: inline-block;
  width: 50%;
  height: 30px;
  line-height: 30px;
  color: #444;
}

.head-right-middle .right-middle-title {
  font-size: 20px;
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 8px;
}
.right-top-ul {
  margin-bottom: 16px;
}
.acctypeEmail {
  line-height: 30px;
}
.acctypeVip {
  line-height: 30px;
}
</style>


<template>
  <div id="basic">
    <div class="pd-con-head-right">
      <div class="head-right-top">
        <!-- <p class="right-top-title">个人信息</p> -->
        <h3>个人信息</h3>
        <p class="right-top-acctype">
          <p class="acctypeEmail">邮箱:{{this.value.email}}</p>
          <p class="acctypeVip">
          账户类型:
          <strong v-if="this.value.role != 'vip'">普通</strong>
          <strong v-if="this.value.role == 'vip'">会员</strong>
          <span style="margin-left:24px" v-if="this.value.role == 'vip'">到期时间:{{this.value.effectiveDate | formatDate}}</span>

          <span v-if="this.value.role != 'vip'">
           （ <router-link to="/personalData/vip">升级</router-link>）
          </span>
          </p>
          
        </p>

        <div class="right-top-warn" v-if="this.value.role != 'vip'">
          <p>升级到高级会员获取更多。</p>
          <router-link to="/personalData/vip" style="text-decoration: none;color: #ffffff;">
            <el-button class="warn-button" type="danger">现在升级</el-button>
          </router-link>
        </div>
        <ul class="right-top-ul">
          <li>名称:&nbsp;{{this.value.name}}</li>
          <li>性别:&nbsp;{{this.value.sex}}</li>
          <li>手机:&nbsp;{{this.value.tel}}</li>
          <li>学校:&nbsp;{{this.value.school}}</li>
          <li>Q&nbsp;Q:&nbsp;{{this.value.qq}}</li>
          <li v-if="this.value.birthday != '0001-01-01T00:00:00'">生日:&nbsp;{{this.value.birthday | formatDate}}</li>
          <li v-if="this.value.birthday == '0001-01-01T00:00:00'">生日:&nbsp;{{'1901-01-01T00:00:00' | formatDate}}</li>
        </ul>
      </div>
      <!-- <div class="head-right-middle">
        <p class="right-middle-title">文件</p>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="最近浏览过的文件" name="first">最近浏览过的文件</el-tab-pane>
          <el-tab-pane label="我的上传" name="second">我的上传</el-tab-pane>
        </el-tabs>
      </div> -->
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
      value: {},
      role:""
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
            _this.value = res.data.data;
          })
          .catch(function(error) {
            console.log(error);
            console.log("获取token失败");
          });
      } else {
      }
    },
  }
};
</script>
