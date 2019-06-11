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
              <!-- <img src="../assets/logo3.png" alt> -->
              <span>CourseWhale</span>
            </p>
            <!--<p class="slogan">登录答题王,打开通往知识的大门</p>-->
             <el-form
              :model="changePasswords"
              ref="ruleForm"
              label-width="50px"
              class="demo-ruleForm"
            >
              <el-form-item style="margin-left: -50px;" label prop="Username">
                <el-input
                  prefix-icon="el-icon-edit"
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
                <!-- <el-button id="submit" type="primary" @click="submitForm('ruleForm')" v-if="loadings == true">登录</el-button> -->
                <el-button
                  id="submit"
                  type="primary"
                  @click="submitForm('ruleForm')"
                  :loading="loadings"
                >确定</el-button>
              </el-form-item>
            </el-form>
          </div>
          <!-- <div class="reg-bottom">
            <span>没有账号？</span>
            <router-link class="login-resi" to="/register">注册</router-link>
          </div> -->
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
      loadings:false
    };
  },
  //页面的方法还是写在methods{}中
  methods: {
    StorageChgPassword: function() {
    var _this = this;
      this.axios({
        method: "put",
        url: `http://192.168.1.27:8088/api/client/ChangePwd`,
        async: false,
        params: {
          NewPassword: this.changePasswords.NewPassword,
          RepeatPwd: this.changePasswords.RepeatPwd
        },
        xhrFields: {
          withCredentials: true
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then(function(res) {
          _this.$message({
            message: "修改密码成功",
            type: "success"
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
