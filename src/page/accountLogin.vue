<style>
.demo-ruleForm {
  /* padding: 5px 0px 0px 0px; */
}
.login-cc {
  height: 800px;
  overflow: hidden;
}
.login-lo {
  background-image: url(../assets/021716cbsvz0og66o07s20.jpg);
  background-color: #dfdfdf;
  background-repeat: no-repeat;
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

.login-con-top {
  padding: 30px 40px 0px 40px;
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

.reg-bottom {
  background-color: #f5f5f5;
  height: 59px;
  margin-top: 22px;
  border-top: 1px solid #ebebeb;
}

.login-resi {
  text-decoration: none;
  line-height: 59px;
  color: #1b5299;
}

.login-footer {
  margin: 0 auto;
}

.forgetpassword {
  width: 100%;
  height: 22px;
  text-align: right;
  margin-bottom: 10px;
  margin-top: -12px;
  font-size: 14px;
  line-height: 22px;
}
.forgetpassword a {
  text-decoration: none;
  color: #707070;
}
</style>


<template>
  <div class="login" v-title data-title="登录-CourseWhale">
    <!--<Nav msg="登录"></Nav>-->
    <div class="login-lo">
      <div class="login-cc">
        <div class="login-con">
          <div class="login-con-top">
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
                  placeholder="输入邮箱地址"
                ></el-input>
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
          </div>
          <div class="reg-bottom">
            <span>没有账号？</span>
            <router-link class="login-resi" to="/register">注册</router-link>
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
import { truncate } from "fs";
export default {
  name: "login",
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
        Email: "",
        Password: "",
        Username:""
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
  //页面的方法还是写在methods{}中
  methods: {
    submitForm(ruleForm) {
      //$refs是获取DOM节点的，它直接在页面找到ruleForm这个表单
      //validate是element自带的一个表单验证功能，它将检验表单里的内容是否已经验证成功，成功后会传回一个回调函数
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          var _this = this;
          _this.loadings = true;
          this.axios({
            method: "POST",
            url: `http://192.168.1.27:8088/api/client/login`,
            async: false,
            data: this.ruleForm,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              token: localStorage.getItem("token")
            }
          })
            .then(function(res) {
              localStorage.token = res.data.data.token;
              console.log(res);
              if (res.data.status == 1) {
                // _this.loadings = false;
                _this.$message({
                  message: "登录成功",
                  type: "success"
                });
                //_this.$store.state.logo.show = false;
                //_this.$store.state.logo.hide = true;
                if (_this.$route.query.type == "skip") {
                  _this.$router.push({
                    path: "/personalData/vip",
                  });
                }else {
                  _this.$router.push({ path: "/home" });
                }
              }
            })
            .catch(function(error) {
              console.log(error);
              _this.loadings = false;
              _this.$message.error('账号或密码错误');
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
