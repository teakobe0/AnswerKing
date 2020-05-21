<style>
.popupLogin {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 26, 26, 0.65);
  z-index: 999;
}
.pop-img {
  float: left;
  position: absolute;
  left: -200px;
  height: 476px;
}
.pop-login-con {
  width: 650px;
  height: 476px;
  margin: 0 auto;
  position: relative;
  margin-top: 260px;
  background-color: #fff;
}
.pop-milogin {
  float: right;
  width: 300px;
  margin-right: 75px;
  margin-top: 77px;
  text-align: center;
}
.pop-miregoster {
  float: right;
  width: 300px;
  margin-right: 75px;
  margin-top: 48px;
  text-align: center;
}
.popupLogin .login-resi {
  cursor: pointer;
}
.popupLogin .login-resi:hover {
  color: #66b1ff;
}
.pop-close {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 22px;
  cursor: pointer;
  color: #d4d4d4;
  z-index: 1000;
}
</style>

<template>
  <div class="popupLogin" v-show="popups">
    <div class="pop-login-con">
      <!-- <i class="el-icon-close pop-close" @click="popupShows"></i> -->
      <img class="pop-img" src="../../assets/现在注册.png" alt v-show="popimg1 == true" />
      <img class="pop-img" src="../../assets/限时活动.png" alt v-show="popimg1 == false" />
      <div class="pop-milogin" v-show="loginShow == true">
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
            <el-input
              prefix-icon="el-icon-edit"
              v-model="ruleForm.Username"
              :placeholder="$t('popupLogin.con1')"
            ></el-input>
          </el-form-item>
          <el-form-item style="margin-left: -50px;" label prop="Password">
            <el-input
              prefix-icon="el-icon-goods"
              type="Password"
              v-model="ruleForm.Password"
              :placeholder="$t('popupLogin.con2')"
              @keyup.enter.native="submitForm('ruleForm')"
            ></el-input>
          </el-form-item>
          <div class="forgetpassword">
            <router-link to="/forgetPassword">{{$t('popupLogin.con3')}}</router-link>
          </div>

          <el-form-item style="margin-left: -50px;">
            <!-- <el-button id="submit" type="primary" @click="submitForm('ruleForm')" v-if="loadings == true">登录</el-button> -->
            <el-button
              id="submit"
              type="primary"
              @click="submitForm('ruleForm')"
              :loading="loadings"
            >{{$t('popupLogin.con4')}}</el-button>
          </el-form-item>
        </el-form>
        <span>{{$t('popupLogin.con5')}}</span>
        <span class="login-resi" @click="loginShowHed">{{$t('popupLogin.con6')}}</span>
      </div>
      <div class="pop-miregoster" v-show="loginShow == false">
        <p class="brand">
          <!-- <img src="../assets/logo2.png" alt=""> -->
          <span>CourseWhale</span>
        </p>
        <el-form
          :model="reruleForm"
          :rules="rerules"
          ref="reruleForm"
          label-width="50px"
          class="demo-ruleForm"
        >
          <el-form-item style="margin-left: -50px;" label prop="Email">
            <el-input
              prefix-icon="el-icon-edit"
              v-model="reruleForm.Email"
              :placeholder="$t('popupLogin.con1')"
            ></el-input>
          </el-form-item>
          <el-form-item style="margin-left: -50px;" label prop="Password">
            <el-input
              prefix-icon="el-icon-goods"
              type="Password"
              v-model="reruleForm.Password"
              :placeholder="$t('popupLogin.con2')"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item style="margin-left: -50px;" label prop="Passwords">
            <el-input
              prefix-icon="el-icon-goods"
              type="Password"
              v-model="reruleForm.Passwords"
              :placeholder="$t('popupLogin.con7')"
              autocomplete="off"
              @keyup.enter.native="register('ruleForm')"
            ></el-input>
          </el-form-item>
          <el-form-item style="margin-left: -50px;text-align: center">
            <el-button
              type="primary"
              id="regi"
              @click="register('reruleForm')"
              :loading="reloadings"
            >{{$t('popupLogin.con6')}}</el-button>
          </el-form-item>
        </el-form>
        <p class="termsOfService">
          {{$t('popupLogin.con8')}}
          <router-link to="/termsOfService">{{$t('popupLogin.con9')}}</router-link>
        </p>
        <span>{{$t('popupLogin.con10')}}</span>
        <span class="login-resi" @click="loginShowHed">{{$t('popupLogin.con4')}}</span>
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
        callback(new Error(this.$t("popupLogin.con15")));
      }
      callback();
    };
    //ES6中用箭头函授代替ES5中的function（）
    var revalidatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$t("popupLogin.con15")));
      } else {
        if (this.reruleForm.Passwords !== "") {
          this.$refs.reruleForm.validateField("Passwords");
        }
        callback();
      }
    };
    var revalidatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$t("popupLogin.con16")));
      } else if (value !== this.reruleForm.Password) {
        callback(new Error(this.$t("popupLogin.con17")));
      } else {
        callback();
      }
    };
    return {
      popimg1: false,
      popups: true,
      loginShow: true,
      loadings: false,
      reloadings: false,
      ruleForm: {
        Email: "",
        Password: "",
        Username: ""
      },
      //rules是Element的表单验证规则
      rules: {
        Username: [
          {
            required: true,
            message: this.$t("popupLogin.con11"),
            trigger: "blur"
          },
          {
            type: "email",
            message: this.$t("popupLogin.con12"),
            trigger: ["blur", "change"]
          }
        ],
        Password: [{ required: true, validator: validatePass, trigger: "blur" }]
      },
      reruleForm: {
        Email: "",
        Password: "",
        Passwords: "",
        inviterid: 0
      },
      //rules是Element的表单验证规则
      rerules: {
        Email: [
          {
            required: true,
            message: this.$t("popupLogin.con11"),
            trigger: "blur"
          },
          {
            type: "email",
            message: this.$t("popupLogin.con12"),
            trigger: ["blur", "change"]
          }
        ],
        Password: [
          { required: true, validator: revalidatePass, trigger: "blur" }
        ],
        Passwords: [
          { required: true, validator: revalidatePass2, trigger: "blur" }
        ]
      }
    };
  },
  created: function() {
    const _this = this;
    setInterval(function() {
      _this.popimg1 = !_this.popimg1;
    }, 3000);
  },

  methods: {
    // 登录方法
    submitForm(ruleForm) {
      const _this = this;
      //$refs是获取DOM节点的，它直接在页面找到ruleForm这个表单
      //validate是element自带的一个表单验证功能，它将检验表单里的内容是否已经验证成功，成功后会传回一个回调函数
      _this.$refs[ruleForm].validate(valid => {
        if (valid) {
          const _this = this;
          _this.loadings = true;
          _this
            .axios({
              method: "POST",
              url: `${_this.URLport.serverPath}/client/login`,
              async: false,
              data: _this.ruleForm,
              xhrFields: {
                withCredentials: true
              }
            })
            .then(function(res) {
              if (res.data.status == 1) {
                localStorage.token = res.data.data.token;
                _this.$router.go(0);
                _this.$message({
                  message: _this.$t("popupLogin.con13"),
                  type: "success"
                });
              } else {
                _this.loadings = false;
                _this.$message({
                  message: res.data.msg,
                  type: "error"
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 注册方法
    register(ruleForm) {
      const _this = this;
      //$refs是获取DOM节点的，它直接在页面找到ruleForm这个表单
      //validate是element自带的一个表单验证功能，它将检验表单里的内容是否已经验证成功，成功后会传回一个回调函数
      _this.$refs[ruleForm].validate(valid => {
        if (valid) {
          const _this = this;
          _this.reloadings = true;
          _this
            .axios({
              method: "POST",
              url: `${_this.URLport.serverPath}/client/Register`,
              async: false,
              data: _this.reruleForm,
              xhrFields: {
                withCredentials: true
              }
            })
            .then(function(res) {
              // 注册成功保存TOKEN相当于自动登录
              if (res.data.status == 1) {
                localStorage.token = res.data.data.token;
                _this.$router.go(0);
                _this.$message({
                  message: _this.$t("popupLogin.con14"),
                  type: "success"
                });
              } else {
                _this.reloadings = false;
                _this.$message({
                  message: res.data.msg,
                  type: "success"
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    loginShowHed() {
      const _this = this;
      _this.loginShow = !_this.loginShow;
    },
    popupShows() {
      const _this = this;
      _this.popups = false;
    }
  },
  watch: {
    "$i18n.locale"() {
      const _this = this;
      _this.rules.Username[0].message = _this.$t("popupLogin.con11");
      _this.rules.Username[1].message = _this.$t("popupLogin.con12");
      _this.rerules.Email[0].message = _this.$t("popupLogin.con11");
      _this.rerules.Email[1].message = _this.$t("popupLogin.con12");
    }
  }
};
</script>