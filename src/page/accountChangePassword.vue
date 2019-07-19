<style>
.login-con-tops {
  padding: 30px 40px 8px 40px;
}
</style>


<template>
  <div class="login" v-title data-title="登录-CourseWhale">
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
              <el-form-item style="margin-left: -50px;" label prop="Username">
                <el-input
                  prefix-icon="el-icon-edit"
                  type="Password"
                  v-model="changePasswords.NewPassword"
                  placeholder="输入新密码"
                ></el-input>
              </el-form-item>
              <el-form-item style="margin-left: -50px;" label prop="Password">
                <el-input
                  prefix-icon="el-icon-goods"
                  type="Password"
                  v-model="changePasswords.RepeatPwd"
                  placeholder="重复输入新密码"
                  @keyup.enter.native="submitForm('ruleForm')"
                ></el-input>
              </el-form-item>

              <el-form-item style="margin-left: -50px;">
                <el-button
                  id="submit"
                  type="primary"
                  @click="submitForm('ruleForm')"
                  :loading="loadings"
                >确定</el-button>
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
        RepeatPwd: ""
      },
      loadings: false
    };
  },
  created: function() {
    const _this = this;
    console.log(_this.$route.query.k)
  },
  //页面的方法还是写在methods{}中
  methods: {
    submitForm: function() {
      const _this = this;
      
      var patt = /^[\s]*$/;
      var pvalue = patt.test(_this.changePasswords.NewPassword);
      var pvalues = patt.test(_this.changePasswords.RepeatPwd);
      if (pvalue || pvalues) {
        _this.$message({
          type: "warning",
          message: `请填写内容!`
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
              RepeatPwd: _this.changePasswords.RepeatPwd
            },
            xhrFields: {
              withCredentials: true
            }
          })
          .then(function(res) {
            console.log(res);
            _this.loadings = false;
            if (res.data.status == 1) {
              _this.$alert("重置密码成功!", "CourseWhale", {
                confirmButtonText: "确定",
                callback: action => {
                  _this.$message({
                    type: "success",
                    message: `即将返回首页!`
                  });
                  setTimeout(function() {
                    _this.$router.push({
                      path: "/home"
                    });
                  }, 2000);
                }
              });
            } else if (res.data.status == 2) {
              _this.$message.error(res.data.msg);
              _this.changePasswords.NewPassword = "";
              _this.changePasswords.RepeatPwd = "";
            }
          })
          .catch(function(error) {
            console.log(error);
            _this.$message({
              type: "success",
              message: `密码重复!`
            });
          });
      }
    }
  }
};
</script>
