<style>
@media (min-width: 300px) {
  .regi-cc {
    overflow: hidden;
    height: 800px;
  }
  .regi-emp {
    background-image: url(../assets/347985.jpg);
    background-color: #dfdfdf;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: cover;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
    text-align: center;
  }

  .register-con {
    margin: 0 auto;
    width: 300px;
    margin-top: 90px;
    /* margin-bottom: 242px; */
    background-color: #ffffff;
    border-radius: 2px;
    text-align: center;
    box-shadow: 0px 0px 5px #707070;
  }

  .register-con-top {
    padding: 30px 40px 0px 40px;
  }

  #regi {
    margin-right: 10px;
    width: 100%;
  }

  .termsOfService {
    color: #8590a6;
    font-size: 8px;
    text-align: left;
  }
  .termsOfService a {
    text-decoration: none;
    color: #8590a6;
  }
  .reg-bottom {
    background-color: #f5f5f5;
    height: 59px;
    margin-top: 22px;
    border-top: 1px solid #ebebeb;
        line-height: 59px;
  }
  .brand span {
    display: block;
    font-size: 28px;
    color: #4458b0;
    margin-bottom: 20px;
    vertical-align: middle;
  }
}
@media (min-width: 768px) {
  .regi-cc {
    overflow: hidden;
    height: 800px;
  }
  .regi-emp {
    background-image: url(../assets/347985.jpg);
    background-color: #dfdfdf;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: cover;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
    text-align: center;
  }

  .register-con {
    margin: 0 auto;
    width: 410px;
    margin-top: 220px;
    /* margin-bottom: 242px; */
    background-color: #ffffff;
    border-radius: 2px;
    text-align: center;
    box-shadow: 0px 0px 5px #707070;
  }

  .register-con-top {
    padding: 30px 40px 0px 40px;
  }

  #regi {
    margin-right: 10px;
    width: 100%;
  }

  .termsOfService {
    color: #8590a6;
    font-size: 8px;
    text-align: left;
  }
  .termsOfService a {
    text-decoration: none;
    color: #8590a6;
  }
  .reg-bottom {
    background-color: #f5f5f5;
    height: 59px;
    margin-top: 22px;
    border-top: 1px solid #ebebeb;
        line-height: 59px;
  }
  .brand span {
    display: block;
    font-size: 28px;
    color: #4458b0;
    margin-bottom: 20px;
    vertical-align: middle;
  }
}
@media (min-width: 1200px) {
  .regi-cc {
    overflow: hidden;
    height: 800px;
  }
  .regi-emp {
    background-image: url(../assets/347985.jpg);
    background-color: #dfdfdf;
    background-repeat: no-repeat;
    background-position: left center;
    background-size: cover;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
    text-align: center;
  }

  .register-con {
    margin: 0 auto;
    width: 410px;
    margin-top: 220px;
    /* margin-bottom: 242px; */
    background-color: #ffffff;
    border-radius: 2px;
    text-align: center;
    box-shadow: 0px 0px 5px #707070;
  }

  .register-con-top {
    padding: 30px 40px 0px 40px;
  }

  #regi {
    margin-right: 10px;
    width: 100%;
  }

  .termsOfService {
    color: #8590a6;
    font-size: 8px;
    text-align: left;
  }
  .termsOfService a {
    text-decoration: none;
    color: #8590a6;
  }
  .reg-bottom {
    background-color: #f5f5f5;
    height: 59px;
    margin-top: 22px;
    border-top: 1px solid #ebebeb;
        line-height: 59px;
  }
  .brand span {
    display: block;
    font-size: 28px;
    color: #4458b0;
    margin-bottom: 20px;
    vertical-align: middle;
  }
}
</style>


<template>
  <div
    class="register"
    v-title
    :data-title="$t('popupLogin.con6') + '-CourseWhale'"
  >
    <!--<Nav msg="登录/注册"></Nav>-->
    <div class="regi-emp">
      <div class="regi-cc">
        <div class="register-con">
          <div class="register-con-top">
            <p class="brand">
              <!-- <img src="../assets/logo2.png" alt=""> -->
              <span>CourseWhale</span>
            </p>
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="50px"
              class="demo-ruleForm"
            >
              <el-form-item style="margin-left: -50px" label prop="Email">
                <el-input
                  prefix-icon="el-icon-edit"
                  v-model="ruleForm.Email"
                  :placeholder="$t('popupLogin.con1')"
                ></el-input>
              </el-form-item>
              <el-form-item style="margin-left: -50px" label prop="Password">
                <el-input
                  prefix-icon="el-icon-goods"
                  type="Password"
                  v-model="ruleForm.Password"
                  :placeholder="$t('popupLogin.con2')"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item style="margin-left: -50px" label prop="Passwords">
                <el-input
                  prefix-icon="el-icon-goods"
                  type="Password"
                  v-model="ruleForm.Passwords"
                  :placeholder="$t('popupLogin.con7')"
                  autocomplete="off"
                  @keyup.enter.native="register('ruleForm')"
                ></el-input>
              </el-form-item>
              <el-form-item style="margin-left: -50px; text-align: center">
                <el-button
                  type="primary"
                  id="regi"
                  @click="register('ruleForm')"
                  :loading="loadings"
                  >{{ $t("popupLogin.con6") }}</el-button
                >
              </el-form-item>
            </el-form>
            <p class="termsOfService">
              {{ $t("popupLogin.con8") }}
              <router-link to="/termsOfService">{{
                $t("popupLogin.con9")
              }}</router-link>
            </p>
          </div>
          <div class="reg-bottom">
            <span>{{ $t("popupLogin.con10") }}</span>
            <router-link class="login-resi" to="/login">{{
              $t("popupLogin.con4")
            }}</router-link>
          </div>
        </div>
      </div>
      <div class="login-footer">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
<script type="es6">
import Nav from "@/components/public/nav.vue";
import Footer from "@/components/public/footer.vue";
// import Utils from "@/utils.js";
export default {
  name: "register",
  components: {
    Nav,
    Footer,
  },
  data() {
    //ES6中用箭头函授代替ES5中的function（）
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$t("popupLogin.con15")));
      } else {
        if (this.ruleForm.Passwords !== "") {
          this.$refs.ruleForm.validateField("Passwords");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$t("popupLogin.con16")));
      } else if (value !== this.ruleForm.Password) {
        callback(new Error(this.$t("popupLogin.con17")));
      } else {
        callback();
      }
    };
    //在ES6中添加数据是在return{}中
    return {
      loadings: false,
      ruleForm: {
        Email: "",
        Password: "",
        Passwords: "",
        inviterid: "",
        Ip: "",
      },
      //rules是Element的表单验证规则
      rules: {
        Email: [
          {
            required: true,
            message: this.$t("popupLogin.con11"),
            trigger: "blur",
          },
          {
            type: "email",
            message: this.$t("popupLogin.con12"),
            trigger: ["blur", "change"],
          },
        ],
        Password: [
          { required: true, validator: validatePass, trigger: "blur" },
        ],
        Passwords: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
      },
      decrypt: 0,
    };
  },
  created: function () {
    if (!localStorage.SkipPath) {
      localStorage.SkipPath = "/";
    }
  },
  //页面的方法还是写在methods{}中
  methods: {
    register(ruleForm) {
      this.ruleForm.Ip = localStorage.Ip;
      //$refs是获取DOM节点的，它直接在页面找到ruleForm这个表单
      //validate是element自带的一个表单验证功能，它将检验表单里的内容是否已经验证成功，成功后会传回一个回调函数
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          const _this = this;
          _this.loadings = true;
          if (_this.$route.query.inviter) {
            // _this.decrypt = Utils.decrypt(
            //   _this.$route.query.inviter.replace(/\s+/g, '+'),
            //   "hAw6eqnFLKxpsDv3"
            // );
            _this.ruleForm.inviterid = _this.$route.query.inviter;
          }

          _this
            .axios({
              method: "POST",
              url: `${_this.URLport.serverPath}/client/Register`,
              async: false,
              data: _this.ruleForm,
              xhrFields: {
                withCredentials: true,
              },
            })
            .then(function (res) {
              // 注册成功保存TOKEN相当于自动登录
              localStorage.token = res.data.data.token;
              if (res.data.status == 1) {
                _this.$message({
                  message: _this.$t("popupLogin.con14"),
                  type: "success",
                });
                if (localStorage.SkipPath) {
                  _this.$router.push({
                    path: localStorage.SkipPath,
                  });
                  localStorage.removeItem("SkipPath");
                }
                // _this.$store.state.logo.show = false;
                // _this.$store.state.logo.hide = true;
                // _this.$router.push({ path: "/login" });
              } else if (res.data.status == 2) {
                _this.loadings = false;
                _this.$message({
                  message: res.data.msg,
                  type: "success",
                });
              }
            })
            .catch(function (error) {
              console.log(error);
            });

          // if (_this.$route.query.inviter) {
          //   _this
          //     .axios({
          //       method: "POST",
          //       url: `${_this.URLport.serverPath}/client/Register`,
          //       async: false,
          //       data: _this.ruleForm,
          //       params: {
          //         inviterid: Number(_this.decrypt)
          //       },
          //       xhrFields: {
          //         withCredentials: true
          //       }
          //     })
          //     .then(function(res) {
          //       // 注册成功保存TOKEN相当于自动登录
          //       localStorage.token = res.data.data.token;
          //       if (res.data.status == 1) {
          //         _this.$message({
          //           message: "注册成功",
          //           type: "success"
          //         });
          //         if (localStorage.SkipPath) {
          //           _this.$router.push({
          //             path: localStorage.SkipPath
          //           });
          //           localStorage.removeItem("SkipPath");
          //         }
          //         // _this.$store.state.logo.show = false;
          //         // _this.$store.state.logo.hide = true;
          //         // _this.$router.push({ path: "/login" });
          //       } else if (res.data.status == 2) {
          //         _this.loadings = false;
          //         _this.$message({
          //           message: res.data.msg,
          //           type: "success"
          //         });
          //       }
          //     })
          //     .catch(function(error) {
          //       console.log(error);
          //     });
          // } else {
          //   _this.axios({
          //     method: "POST",
          //     url: `${_this.URLport.serverPath}/client/Register`,
          //     async: false,
          //     data: _this.ruleForm,
          //     xhrFields: {
          //       withCredentials: true
          //     }
          //   })
          //     .then(function(res) {
          //       // 注册成功保存TOKEN相当于自动登录
          //       localStorage.token = res.data.data.token;
          //       if (res.data.status == 1) {
          //         _this.$message({
          //           message: "注册成功",
          //           type: "success"
          //         });
          //         if (localStorage.SkipPath) {
          //           _this.$router.push({
          //             path: localStorage.SkipPath
          //           });
          //           localStorage.removeItem("SkipPath");
          //         }
          //         // _this.$store.state.logo.show = false;
          //         // _this.$store.state.logo.hide = true;

          //         // _this.$router.push({ path: "/login" });
          //       } else if (res.data.status == 2) {
          //         _this.loadings = false;
          //         _this.$message({
          //           message: res.data.msg,
          //           type: "success"
          //         });
          //       }
          //     })
          //     .catch(function(error) {
          //       console.log(error);
          //     });
          // }
        } else {
          return false;
        }
      });
    },
  },
  watch: {
    "$i18n.locale"() {
      const _this = this;
      _this.rules.Email[0].message = _this.$t("popupLogin.con11");
      _this.rules.Email[1].message = _this.$t("popupLogin.con12");
    },
  },
};
</script>
