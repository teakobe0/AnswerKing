<style>
@media (min-width: 300px) {
  .login-cc {
    height: 800px;
    overflow: hidden;
  }
  .login-lo {
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

  .login-con {
    margin: 0 auto;
    width: 300px;
    margin-top: 155px;
    /* margin-bottom: 310px; */
    background-color: #ffffff;
    border-radius: 2px;
    text-align: center;
    box-shadow: 0px 0px 5px #707070;
  }

  .login-con-tops {
    padding: 30px 40px 30px 40px;
  }

  .brand {
    /* height: 50px; */
  }
  .brand span {
    display: block;
    font-size: 28px;
    color: #4458b0;
    margin-bottom: 20px;
    vertical-align: middle;
  }
  .brand img {
    width: 40px;
    height: 32px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .slogan {
    padding: 5px 0px;
    color: #1781fe;
    font-size: 18px;
    text-align: center;
  }

  #submit {
    margin-right: 10px;
    width: 100%;
  }

  .login-resi {
    text-decoration: none;
    line-height: 59px;
    color: #1b5299;
  }

  .login-footer {
    margin: 0 auto;
  }
}
@media (min-width: 768px) {
  .login-cc {
    height: 800px;
    overflow: hidden;
  }
  .login-lo {
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

  .login-con {
    margin: 0 auto;
    width: 410px;
    margin-top: 220px;
    /* margin-bottom: 310px; */
    background-color: #ffffff;
    border-radius: 2px;
    text-align: center;
    box-shadow: 0px 0px 5px #707070;
  }

  .login-con-tops {
    padding: 30px 40px 30px 40px;
  }

  .brand {
    /* height: 50px; */
  }
  .brand span {
    display: block;
    font-size: 32px;
    color: #4458b0;
    margin-bottom: 20px;
    vertical-align: middle;
  }
  .brand img {
    width: 40px;
    height: 32px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .slogan {
    padding: 5px 0px;
    color: #1781fe;
    font-size: 18px;
    text-align: center;
  }

  #submit {
    margin-right: 10px;
    width: 100%;
  }

  .login-resi {
    text-decoration: none;
    line-height: 59px;
    color: #1b5299;
  }

  .login-footer {
    margin: 0 auto;
  }
}
@media (min-width: 1200px) {
  .demo-ruleForm {
    /* padding: 5px 0px 0px 0px; */
  }
  .login-cc {
    height: 800px;
    overflow: hidden;
  }
  .login-lo {
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

  .login-con {
    margin: 0 auto;
    width: 410px;
    margin-top: 220px;
    /* margin-bottom: 310px; */
    background-color: #ffffff;
    border-radius: 2px;
    text-align: center;
    box-shadow: 0px 0px 5px #707070;
  }

  .login-con-tops {
    padding: 30px 40px 30px 40px;
  }

  .brand {
    /* height: 50px; */
  }
  .brand span {
    display: block;
    font-size: 32px;
    color: #4458b0;
    margin-bottom: 20px;
    vertical-align: middle;
  }
  .brand img {
    width: 40px;
    height: 32px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .slogan {
    padding: 5px 0px;
    color: #1781fe;
    font-size: 18px;
    text-align: center;
  }

  #submit {
    margin-right: 10px;
    width: 100%;
  }

  .login-resi {
    text-decoration: none;
    line-height: 59px;
    color: #1b5299;
  }

  .login-footer {
    margin: 0 auto;
  }
}
</style>


<template>
  <div
    class="login"
    v-title
    :data-title="$t('popupLogin.con4') + '-CourseWhale'"
  >
    <!--<Nav msg="登录"></Nav>-->
    <div class="login-lo">
      <div class="login-cc">
        <div class="login-con">
          <div class="login-con-tops">
            <p class="brand">
              <span>CourseWhale</span>
            </p>
            <el-form
              :model="changePasswords"
              ref="ruleForm"
              label-width="50px"
              class="demo-ruleForm"
            >
              <el-form-item style="margin-left: -50px" label prop="Username">
                <el-input
                  prefix-icon="el-icon-edit"
                  type="Password"
                  v-model="changePasswords.NewPassword"
                  :placeholder="$t('popupLogin.con22')"
                ></el-input>
              </el-form-item>
              <el-form-item style="margin-left: -50px" label prop="Password">
                <el-input
                  prefix-icon="el-icon-goods"
                  type="Password"
                  v-model="changePasswords.RepeatPwd"
                  :placeholder="$t('popupLogin.con23')"
                  @keyup.enter.native="submitForm('ruleForm')"
                ></el-input>
              </el-form-item>

              <el-form-item style="margin-left: -50px">
                <el-button
                  id="submit"
                  type="primary"
                  @click="submitForm('ruleForm')"
                  :loading="loadings"
                  >{{ $t("basic.con14") }}</el-button
                >
              </el-form-item>
            </el-form>
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
export default {
  name: "changePassword",
  components: {},
  data() {
    //在ES6中添加数据是在return{}中
    return {
      changePasswords: {
        NewPassword: "",
        RepeatPwd: "",
      },
      loadings: false,
    };
  },
  created: function () {
    const _this = this;
  },
  //页面的方法还是写在methods{}中
  methods: {
    // 修改重置后密码
    submitForm: function () {
      const _this = this;

      var patt = /^[\s]*$/;
      var pvalue = patt.test(_this.changePasswords.NewPassword);
      var pvalues = patt.test(_this.changePasswords.RepeatPwd);
      if (pvalue || pvalues) {
        _this.$message({
          type: "warning",
          message: _this.$t("popupLogin.con24"),
        });
      } else {
        _this.loadings = true;
        _this
          .axios({
            method: "put",
            url: `${_this.URLport.serverPath}/client/ResetPwd`,
            async: false,
            params: {
              param: _this.$route.query.k,
              NewPassword: _this.changePasswords.NewPassword,
              RepeatPwd: _this.changePasswords.RepeatPwd,
            },
            xhrFields: {
              withCredentials: true,
            },
          })
          .then(function (res) {
            _this.loadings = false;
            if (res.data.status == 1) {
              _this.$alert(_this.$t("popupLogin.con25"), "CourseWhale", {
                confirmButtonText: _this.$t("basic.con14"),
                callback: (action) => {
                  _this.$message({
                    type: "success",
                    message: _this.$t("popupLogin.con21"),
                  });
                  setTimeout(function () {
                    _this.$router.push({
                      path: "/home",
                    });
                  }, 2000);
                },
              });
            } else if (res.data.status == 2) {
              _this.$message.error(res.data.msg);
              _this.changePasswords.NewPassword = "";
              _this.changePasswords.RepeatPwd = "";
            }
          })
          .catch(function (error) {
            console.log(error);
            _this.$message({
              type: "success",
              message: _this.$t("popupLogin.con26"),
            });
          });
      }
    },
  },
};
</script>
