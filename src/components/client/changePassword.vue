<style>
/*右侧*/
.pd-con-head-right {
  width: 1000px;
  height: 960px;
  float: left;
  padding: 20px 40px 0px 40px;
  overflow: hidden;
}

#changePassword h3 {
  border-bottom: 1px solid #dddddd;
  color: #999999;
  line-height: 40px;
  margin-bottom: 20px;
  padding-bottom: 6px;
}
</style>


<template>
  <div id="changePassword">
    <div class="pd-con-head-right">
      <h3>修改密码</h3>
      <el-form :model="changePasswords" :rules="rules" ref="changePasswords" label-width="80px">
        <el-form-item label="原密码" prop="OldPassword">
          <el-col :span="11">
            <el-input type="Password" v-model="changePasswords.OldPassword"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="新密码" prop="NewPassword">
          <el-col :span="11">
            <el-input type="Password" v-model="changePasswords.NewPassword" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="确认密码" prop="RepeatPwd">
          <el-col :span="11">
            <el-input
              type="Password"
              v-model="changePasswords.RepeatPwd"
              autocomplete="off"
              @keyup.enter.native="submitForm('changePasswords')"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('changePasswords')">修改密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script type="es6">
export default {
  name: "changePassword",
  components: {},
  data() {
    //ES6中用箭头函授代替ES5中的function（）
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.changePasswords.Passwords !== "") {
          this.$refs.changePasswords.validateField("Passwords");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.changePasswords.NewPassword) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    //在ES6中添加数据是在return{}中
    return {
      changePasswords: {
        OldPassword: "",
        NewPassword: "",
        RepeatPwd: ""
      },
      rules: {
        OldPassword: [
          { required: true, message: "请输入原密码", trigger: "blur" }
        ],
        NewPassword: [
          { required: true, validator: validatePass, trigger: "blur" }
        ],
        RepeatPwd: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  //页面的方法还是写在methods{}中
  methods: {
    submitForm(changePasswords) {
      this.$refs[changePasswords].validate(valid => {
        if (valid) {
          const _this = this;
          _this
            .axios({
              method: "put",
              url: `http://192.168.1.27:8088/api/client/ChangePwd`,
              async: false,
              params: {
                NewPassword: _this.changePasswords.NewPassword,
                RepeatPwd: _this.changePasswords.RepeatPwd,
                OldPassword: _this.changePasswords.OldPassword
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
                _this.$message({
                  message: "修改密码成功,请重新登录",
                  type: "success"
                });
                localStorage.removeItem("token");
                _this.$router.push({ path: "/login" });
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
    }
  }
};
</script>
