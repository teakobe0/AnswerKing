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
.InvitationCon p{
  color: #409eff;
  text-align: center;
  margin-top: 16px;
}
.encryptInput {
  width: 910px !important;
  margin-top: 16px !important;
}
.encryptButton {
  margin-left: 20px !important;
}
.Integrals {
  /* line-height: 20px; */
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px dashed #dedede;
  overflow: hidden;
}
.Integrals p {
  float: left;
}
.Integrals .inButton {
  float: right;
}
.Integrals p i{
  font-size: 12px;
  position: relative;
  top: -4px;
  left: 3px;
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
      <div class="Integrals">
        <p>鲸灵币:{{this.clientVipNum}}<i class="el-icon-info" title="通过贡献资源审核成功之后可以获得鲸灵币,鲸灵币可以用于兑换会员。"></i></p>
        <el-button class="inButton" type="mini" @click="IntegralExchanges">兑换会员</el-button>
      </div>
      <div class="InvitationCon" v-show="InvitationShow == true">
        <p>您可以将下方地址发送给您的好友注册成为网站用户,注册成功我们将送您和您的好友各得7天VIP！享受无限制浏览！</p>
        <el-input class="encryptInput" v-model="input" placeholder="请输入内容"></el-input>
        <el-button class="encryptButton" @click="Invitation" v-clipboard:copy="copy" v-clipboard:success="onCopy" v-clipboard:error="onError">
            粘贴
        </el-button>
      </div>
      
      <div class="InvitationCon" v-show="InvitationShow == false">
        <p>您的邮箱还没有验证,<span style="text-decoration:underline;cursor:pointer;color:#e21c1c;" @click="InvitationCon">点击这里</span>验证邮箱获得7天会员,开启邀请好友继续获得7天会员功能!</p>
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
import Utils from "@/utils.js";

export default {
  name: "basic",
  components: {},
  data() {
    //在ES6中添加数据是在return{}中
    return {
      activeName: "first",
      value: {},
      role:"",
      inviterId:0,
      copy:"",
      input:"",
      InvitationShow:false,
      // 当前货币兑换会员所需数量
      vipNum:500,
      // 当前货币兑换会员的月份
      vipNumText:"一个月",
      // 当前客户持有的货币数量
      clientVipNum:0
    };
  },
  created: function() {
    const _this = this;
    
    _this.gainpersonal();
    _this.GetExchanges();
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  methods: {
    Invitation(){
      const _this = this;
    },
    onCopy(){
        this.$message.success('已将链接复制到剪切板！请发送给您的好友点击！')
    },
    onError(){
        this.$message.console.error('复制失败');
    },
    handleClick: function(tab, event) {
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
            console.log(res)
            _this.value = res.data.data;
            _this.inviterId = _this.value.id;
            let encrypt = Utils.encrypt(_this.inviterId,'hAw6eqnFLKxpsDv3');
            let encryptText = "http://coursewhale.com/register?inviter="+encrypt;
            _this.copy = encryptText;
            _this.input = encryptText;
            if(_this.value.isValidate){
              _this.InvitationShow = true;
            }
            _this.clientVipNum = res.data.data.integral;
          })
          .catch(function(error) {
            console.log(error);
            console.log("获取token失败");
          });
      } else {
      }
    },
    InvitationCon(){
      const _this = this;
      _this
          .axios({
            method: "post",
            url: `${_this.URLport.serverPath}/Client/SendEmail`,
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
              _this.$message({
                  message: "发送成功",
                  type: "success"
                });
            }
          })
          .catch(function(error) {
            console.log(error);
          });
    },
    // 根据客户id查询积分使用列表
    GetIntegrals(){
      const _this = this;
      if (localStorage.getItem("token")) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Client/IntegralList`,
            async: false,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(function(res) {
            console.log(123)
            console.log(res)
            
            
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    // 查询当前货币兑换会员比例
    GetExchanges(){
      const _this = this;
      if (localStorage.getItem("token")) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Client/GetExchange`,
            async: false,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(function(res) {
            let a = res.data.data.split(":");
            _this.vipNum = Number(a[0]);
            _this.vipNumText = a[1]
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    // 兑换会员
    IntegralExchanges(){
      const _this = this;
      this.$confirm('您将花费'+_this.vipNum+'鲸灵币兑换'+_this.vipNumText+'会员, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/Client/IntegralExchange`,
              async: false,
              xhrFields: {
                withCredentials: true
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            .then(function(res) {
              if(res.data.status == 1){
                localStorage.token = res.data.data.token;
                _this.gainpersonal();
                _this.$message({
                    message: "兑换成功",
                    type: "success"
                  });
              }else {
                _this.$message({
                    message: "兑换失败,积分不足",
                    type: "error"
                  });
              }
          })
          .catch(function(error) {
            console.log(error);
          });
        }).catch(() => {
                  
        });
      
    }
  }
};
</script>
