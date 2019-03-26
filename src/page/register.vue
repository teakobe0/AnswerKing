<style>
.regi-emp {
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

.register-con {
  margin: 0 auto;
  width: 410px;
  margin-top: 170px;
  margin-bottom: 242px;
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

.reg-bottom {
  background-color: #f5f5f5;
  height: 40px;
  margin-top: 22px;
  border-top: 1px solid #dddddd;
  text-align: center;
}

.login-resi {
  text-decoration: none;
  line-height: 40px;
  color: #1b5299;
}
</style>


<template>
  <div class="register">
    <!--<Nav msg="登录/注册"></Nav>-->
    <div class="regi-emp">
      <div class="register-con">
        <div class="register-con-top">
          <p class="brand">AnswerKing</p>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="50px"
            class="demo-ruleForm"
          >
            <el-form-item style="margin-left: -50px;" label prop="Email">
              <el-input
                style="margin-bottom: 6px;"
                prefix-icon="el-icon-edit"
                v-model="ruleForm.Email"
                placeholder="输入用户名/邮箱"
              ></el-input>
            </el-form-item>

            <!--<el-form-item label="昵称" prop="Name" class="register-name">-->
            <!--<el-input prefix-icon="el-icon-edit" v-model="ruleForm.Name" placeholder="昵称"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="QQ" prop="QQ" class="register-name">-->
            <!--<el-input prefix-icon="el-icon-edit" v-model="ruleForm.QQ" placeholder="QQ"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="手机" prop="Tel" class="register-name">-->
            <!--<el-input prefix-icon="el-icon-edit" v-model="ruleForm.Tel" placeholder="手机"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="性别" prop="Sex">-->
            <!--<el-radio-group v-model="ruleForm.Sex">-->
            <!--<el-radio label="男"></el-radio>-->
            <!--<el-radio label="女"></el-radio>-->
            <!--</el-radio-group>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="生日" required>-->
            <!--<el-col :span="11">-->
            <!--<el-form-item prop="Birthday">-->
            <!--<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.Birthday" style="width: 100%;"></el-date-picker>-->
            <!--</el-form-item>-->
            <!--</el-col>-->
            <!--</el-form-item>-->
            <el-form-item style="margin-left: -50px;" label prop="Password">
              <el-input
                style="margin-bottom: 6px;"
                prefix-icon="el-icon-goods"
                type="Password"
                v-model="ruleForm.Password"
                placeholder="输入密码"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item style="margin-left: -50px;" label prop="Passwords">
              <el-input
                style="margin-bottom: 6px;"
                prefix-icon="el-icon-goods"
                type="Password"
                v-model="ruleForm.Passwords"
                placeholder="再次输入密码"
                autocomplete="off"
                @keyup.enter.native="register('ruleForm')"
              ></el-input>
            </el-form-item>

            <el-form-item style="margin-left: -50px;text-align: center">
              <el-button type="primary" id="regi" @click="register('ruleForm')">注册</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="reg-bottom">
          <span>已有账号？</span>
          <router-link class="login-resi" to="/login">登录</router-link>
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
export default {
  name: "register",
  components: {
    Nav,
    Footer
  },
  data() {
    //ES6中用箭头函授代替ES5中的function（）
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.Passwords !== "") {
          this.$refs.ruleForm.validateField("Passwords");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.Password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    //在ES6中添加数据是在return{}中
    return {
      wer: 123,
      ruleForm: {
        Email: "",
        //Name:'',
        //QQ:'',
        //Tel:'',
        //Sex:'',
        //Birthday:'',
        Password: "",
        Passwords: ""
      },
      //rules是Element的表单验证规则
      rules: {
        Email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        Password: [
          { required: true, validator: validatePass, trigger: "blur" }
        ],
        Passwords: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ]
        //Name: [
        //    { required: true, message: '请输入昵称', trigger: 'blur' }
        //],
        //QQ: [
        //    { required: true, message: '请输入QQ', trigger: 'blur' }
        //],
        //Tel: [
        //    { required: true, message: '请输入手机号码', trigger: 'blur' }
        //],
        //Sex: [
        //    { required: true, message: '请输入性别', trigger: 'blur' }
        //],
        //Birthday: [
        //    { required: true, message: '请输入生日', trigger: 'blur' }
        //],
      }
    };
  },
  //页面的方法还是写在methods{}中
  methods: {
    register(ruleForm) {
      //$refs是获取DOM节点的，它直接在页面找到ruleForm这个表单
      //validate是element自带的一个表单验证功能，它将检验表单里的内容是否已经验证成功，成功后会传回一个回调函数
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          var _this = this;
          this.axios({
            method: "POST",
            url: `http://192.168.1.27:8088/api/client/Register`,
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
              if (res.data.status == 1) {
                _this.$message({
                  message: "注册成功",
                  type: "success"
                });
                _this.$store.state.logo.show = false;
                _this.$store.state.logo.hide = true;
                _this.$router.push({ path: "/login" });
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
    submitForm() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
