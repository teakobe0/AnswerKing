<style>
.regi-cc {
  overflow: hidden;
  height: 800px;
}
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
.termsOfService {
  text-align: left;
  color: #8590a6;
  font-size: 8px;
}
.termsOfService a {
  text-decoration: none;
  color: #8590a6;

}
</style>


<template>
  <div class="register">
    <!--<Nav msg="登录/注册"></Nav>-->
    <div class="regi-emp">
      <div class="regi-cc">
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
                  prefix-icon="el-icon-edit"
                  v-model="ruleForm.Email"
                  placeholder="输入邮箱地址"
                ></el-input>
              </el-form-item>
              <el-form-item style="margin-left: -50px;" label prop="Password">
                <el-input
                  prefix-icon="el-icon-goods"
                  type="Password"
                  v-model="ruleForm.Password"
                  placeholder="输入密码"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item style="margin-left: -50px;" label prop="Passwords">
                <el-input
                  prefix-icon="el-icon-goods"
                  type="Password"
                  v-model="ruleForm.Passwords"
                  placeholder="再次输入密码"
                  autocomplete="off"
                  @keyup.enter.native="register('ruleForm')"
                ></el-input>
                
              </el-form-item>
              <el-form-item style="margin-left: -50px;text-align: center">
                <el-button type="primary" id="regi" @click="register('ruleForm')" :disabled="loadings" :loading="loadings">注册</el-button>
              </el-form-item>
            </el-form>
            <p class="termsOfService">注册即代表同意 <router-link to="/termsOfService">《AnswerWang服务条款》</router-link> </p>

          </div>
          <div class="reg-bottom">
            <span>已有账号？</span>
            <router-link class="login-resi" to="/login">登录</router-link>
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
      loadings:false,
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
          this.loadings = true;
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
    open() {
      this.$alert(
        'AnswerWang平台网站（下文称为“服务”）是由 AW平台（下文称为 "AW平台"）负责经营的托管服务。任何服务的使用行为均受以下服务条款与条件（“服务条款”或“条款”）、AW平台 隐私政策、AW平台 社区准则，以及 AW平台 荣誉准则所管辖，上述相关文件均以引用方式纳入此类服务条款。若使用服务，即代表您接受此类服务条款。1.	适用性。若被禁止，服务则不适用。服务的目标人群为 13 周岁以上的用户，但面向所有年龄段的用户开放。对于 13 周岁或未满 13 周岁的儿童（或当地法律默许的其他年龄用户），AW平台 提供移除部分功能后的限制功能组合和网站体验。通过使用服务，您声明并保证 (a) 您提交的所有注册信息均真实、准确；(b) 您将保持此类信息的准确性；且 (c) 您使用服务的行为不违反任何适用法律或法规。2.	您的 AW平台 帐户和数据。如果创建服务帐户，您将负责维护您的帐户和数据的安全性，且您对该帐户名下的所有活动承担全部责任。帐户为个人，而非组织性质，仅供单独个人使用。您不得与任何其他人员共用帐户。您必须立即告知 AW平台，说明任何未授权使用您的数据、您的帐户或任何其他违反安全规定的行为。AW平台 不会为您的任何行为或疏忽承担责任，包括任何由此类行为或疏忽导致的任何形式的任何损害。AW平台 可能时常为您的数据设置储存限制，或采取任何其他我们认为管理服务所需的适当措施。AW平台 还有可能时常更改其提供商业内容或展示广告的政策，且可能不作另行通知。3.	升级会员资格。用户可以选择为其 AW平台 帐户购买其他功能（“升级会员资格”）。可通过以下方式之一购买升级会员资格：(i) 支付经常性订阅费；或者 (ii) 预付费，从而让自己可在特定时段（“预付时段”）内进行访问。下述条款管辖您对这些计划的参与情况。1.	预付会员期限：如果采用预付时段方式购买升级会员资格，将在预付时段结束后自动终止。2.	由您取消订阅：如果您购买的是经常性升级会员资格订阅，则可以随时结束升级会员资格。当您选择结束升级会员资格订阅时，在下一个自动续订日期将不会续订该会员资格订阅。在此日期之前，您可以继续享受升级会员资格福利，之后您的帐户将自动降级。3.	由我们取消：不管有没有提前通知，我们可以出于任何原因随时取消您的升级会员资格。'
        +'123'
        + <br/>
        +'123'
        +        'AnswerWang平台网站（下文称为“服务”）是由 AW平台（下文称为 "AW平台"）负责经营的托管服务。任何服务的使用行为均受以下服务条款与条件（“服务条款”或“条款”）、AW平台 隐私政策、AW平台 社区准则，以及 AW平台 荣誉准则所管辖，上述相关文件均以引用方式纳入此类服务条款。若使用服务，即代表您接受此类服务条款。1.	适用性。若被禁止，服务则不适用。服务的目标人群为 13 周岁以上的用户，但面向所有年龄段的用户开放。对于 13 周岁或未满 13 周岁的儿童（或当地法律默许的其他年龄用户），AW平台 提供移除部分功能后的限制功能组合和网站体验。通过使用服务，您声明并保证 (a) 您提交的所有注册信息均真实、准确；(b) 您将保持此类信息的准确性；且 (c) 您使用服务的行为不违反任何适用法律或法规。2.	您的 AW平台 帐户和数据。如果创建服务帐户，您将负责维护您的帐户和数据的安全性，且您对该帐户名下的所有活动承担全部责任。帐户为个人，而非组织性质，仅供单独个人使用。您不得与任何其他人员共用帐户。您必须立即告知 AW平台，说明任何未授权使用您的数据、您的帐户或任何其他违反安全规定的行为。AW平台 不会为您的任何行为或疏忽承担责任，包括任何由此类行为或疏忽导致的任何形式的任何损害。AW平台 可能时常为您的数据设置储存限制，或采取任何其他我们认为管理服务所需的适当措施。AW平台 还有可能时常更改其提供商业内容或展示广告的政策，且可能不作另行通知。3.	升级会员资格。用户可以选择为其 AW平台 帐户购买其他功能（“升级会员资格”）。可通过以下方式之一购买升级会员资格：(i) 支付经常性订阅费；或者 (ii) 预付费，从而让自己可在特定时段（“预付时段”）内进行访问。下述条款管辖您对这些计划的参与情况。1.	预付会员期限：如果采用预付时段方式购买升级会员资格，将在预付时段结束后自动终止。2.	由您取消订阅：如果您购买的是经常性升级会员资格订阅，则可以随时结束升级会员资格。当您选择结束升级会员资格订阅时，在下一个自动续订日期将不会续订该会员资格订阅。在此日期之前，您可以继续享受升级会员资格福利，之后您的帐户将自动降级。3.	由我们取消：不管有没有提前通知，我们可以出于任何原因随时取消您的升级会员资格。'

        ,
        "AnswerWang服务条款",
        {
          confirmButtonText: "确定"
        }
      );
    }
  }
};
</script>
