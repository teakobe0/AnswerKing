<style>
.forgetPassword-cc {
  height: 800px;
  overflow: hidden;
}
.forgetPassword-lo {
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
            >
              <el-form-item style="margin-left: -50px;" label prop="Username">
                <el-input
                  prefix-icon="el-icon-edit"
                  v-model="ruleForm.Username"
                  placeholder="请输入邮箱"
                ></el-input>
              </el-form-item>
              <!-- <el-form-item style="margin-left: -50px;" label="" prop="Password">
                            <el-input style="margin-bottom: 6px" prefix-icon="el-icon-goods" type="Password"
                                      v-model="ruleForm.Password"
                                      placeholder="输入密码"
                                      @keyup.enter.native="submitForm('ruleForm')">
                            </el-input>
              </el-form-item>-->

              <el-form-item style="margin-left: -50px;">
                <el-button id="submit" type="primary" @click="submitForm('ruleForm')">下一步</el-button>
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
      ruleForm: {
        Username: "",
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
        ],
      }
    };
  },
  //页面的方法还是写在methods{}中
  methods: {
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          var _this = this;
          
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
