<style>
.popupLogin {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 26, 26, 0.65);
  z-index: 9999;
}
.pop-img {
  float: left;
  position: absolute;
  left: -175px;
}
.pop-login-con {
  width: 620px;
  height: 419px;
  margin: 0 auto;
  position: relative;
  margin-top: 300px;
  background-color: #fff;
}
.pop-mi {
  float: right;
  width:330px;
  padding: 48px;
  text-align: center;
}
</style>

<template>
  <div class="popupLogin">
    <div class="pop-login-con">
      <img class="pop-img" src="../../assets/现在注册.png" alt />
      <div class="pop-mi">
        <p class="brand">
          <!-- <img src="../assets/logo3.png" alt> -->
          <span>CourseWhale</span>
        </p>
        <!--<p class="slogan">登录答题王,打开通往知识的大门</p>-->
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="50px"
          class="demo-ruleForm"
        >
          <el-form-item style="margin-left: -50px;" label prop="Username">
            <el-input prefix-icon="el-icon-edit" v-model="ruleForm.Username" placeholder="输入邮箱地址"></el-input>
          </el-form-item>
          <el-form-item style="margin-left: -50px;" label prop="Password">
            <el-input
              prefix-icon="el-icon-goods"
              type="Password"
              v-model="ruleForm.Password"
              placeholder="输入密码"
              @keyup.enter.native="submitForm('ruleForm')"
            ></el-input>
          </el-form-item>
          <div class="forgetpassword">
            <router-link to="/forgetPassword">忘记密码？</router-link>
          </div>

          <el-form-item style="margin-left: -50px;">
            <!-- <el-button id="submit" type="primary" @click="submitForm('ruleForm')" v-if="loadings == true">登录</el-button> -->
            <el-button
              id="submit"
              type="primary"
              @click="submitForm('ruleForm')"
              :loading="loadings"
            >登录</el-button>
          </el-form-item>
        </el-form>
        <span>没有账号？</span>
        <router-link class="login-resi" to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script type="es6">
export default {
  name: "popupLogin",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };
    return {
      loadings: false,
      ruleForm: {
        Email: "",
        Password: "",
        Username: ""
      },
      //rules是Element的表单验证规则
      rules: {
        Username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        Password: [{ required: true, validator: validatePass, trigger: "blur" }]
      }
    };
  },
  created: function() {
    const _this = this;
  },
  methods: {
    submitForm(ruleForm) {
      //$refs是获取DOM节点的，它直接在页面找到ruleForm这个表单
      //validate是element自带的一个表单验证功能，它将检验表单里的内容是否已经验证成功，成功后会传回一个回调函数
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          const _this = this;
          _this.loadings = true;
          this.axios({
            method: "POST",
            url: `${_this.URLport.serverPath}/client/login`,
            async: false,
            data: this.ruleForm,
            xhrFields: {
              withCredentials: true
            }
          })
            .then(function(res) {
              localStorage.token = res.data.data.token;
              if (res.data.status == 1) {
                // _this.loadings = false;
                _this.$message({
                  message: "登录成功",
                  type: "success"
                });
                //_this.$store.state.logo.show = false;
                //_this.$store.state.logo.hide = true;
                if (localStorage.SkipPath != "/login") {
                  _this.$router.push({
                    path: localStorage.SkipPath
                  });
                } else {
                  _this.$router.push({ path: "/uploadAnswer" });
                }
              }
            })
            .catch(function(error) {
              console.log(error);
              _this.loadings = false;
              _this.$message.error("账号或密码错误");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>