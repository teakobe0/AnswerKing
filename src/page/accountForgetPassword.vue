<style>
.forgetPassword-cc {
  height: 800px;
  overflow: hidden;
}
.forgetPassword-lo {
  background-image: url(../assets/347985.jpg);
  background-color: #dfdfdf;
  background-repeat: no-repeat;
  background-position:left center;
  background-size: cover;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
  text-align: center;
}

.forgetPassword-con {
  margin: 0 auto;
  width: 410px;
  margin-top: 220px;
  /* margin-bottom: 310px; */
  background-color: #ffffff;
  border-radius: 2px;
  text-align: center;
  box-shadow: 0px 0px 5px #707070;
}

.forgetPassword-con-top {
  padding: 30px 40px 0px 40px;
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

.forgetPassword-resi {
  text-decoration: none;
  line-height: 59px;
  color: #1b5299;
}

.forgetPassword-footer {
  margin: 0 auto;
}
</style>


<template>
  <div class="forgetPassword">
    <!--<Nav msg="登录"></Nav>-->
    <div class="forgetPassword-lo">
      <div class="forgetPassword-cc">
        <div class="forgetPassword-con">
          <div class="forgetPassword-con-top">
            <p class="brand">
              <span>CourseWhale</span>
            </p>
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="50px"
              class="demo-ruleForm"
              @submit.native.prevent
            >
              <el-form-item style="margin-left: -50px;" label prop="Username">
                <el-input
                  prefix-icon="el-icon-edit"
                  v-model="ruleForm.Username"
                  placeholder="请输入邮箱"
                  @keyup.enter.native="submitForm('ruleForm')"
                ></el-input>
              </el-form-item>

              <el-form-item style="margin-left: -50px;">
                <el-button
                  id="submit"
                  type="primary"
                  @click="submitForm('ruleForm')"
                  :loading="loadings"
                >下一步</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="reg-bottom">
            <span>想起账号？</span>
            <router-link class="forgetPassword-resi" to="/login">登录</router-link>
          </div>
        </div>
      </div>
      <div class="forgetPassword-footer">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
<script type="es6">
import Nav from "@/components/public/nav.vue";
import Footer from "@/components/public/footer.vue";
export default {
  name: "forgetPassword",
  components: {
    Nav,
    Footer
  },
  data() {
    //ES6中用箭头函授代替ES5中的function（）
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };
    //在ES6中添加数据是在return{}中
    return {
      loadings: false,
      ruleForm: {
        Username: ""
      },
      //rules是Element的表单验证规则
      rules: {
        Username: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  //页面的方法还是写在methods{}中
  methods: {
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          var _this = this;
          _this.loadings = true;
          _this
            .axios({
              method: "get",
              url: `http://192.168.1.27:8088/api/Client/ForgetPwd`,
              async: false,
              params: {
                email: _this.ruleForm.Username
              },
              xhrFields: {
                withCredentials: true
              }
            })
            .then(function(res) {
              console.log(res);
              _this.loadings = false;
              if (res.data.status == 1) {
                _this.$alert(
                  "已向您的邮箱发了一封邮件，请打开邮件进行下一步操作重置密码。",
                  "CourseWhale",
                  {
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
                  }
                );
              } else {
                _this.$message({
                  type: "success",
                  message: res.data.msg
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
    }
  }
};
</script>
