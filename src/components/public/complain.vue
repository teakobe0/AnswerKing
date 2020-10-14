<style>
.complain {
}
.com-button {
  width: 310px;
  background-color: rgb(245, 245, 245);
  color: #000;
  font-size: 14px;

  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 10;
  padding: 15px;
  border-radius: 10px;
}

.com-img {
  float: left;
}
.com-img img {
  width: 50px;
  height: 50px;
}
.com-text {
  float: right;
  width: 250px;
  font-size: 12px;
  position: relative;
}
.com-text i {
  position: absolute;
  right: -2px;
  top: -2px;
  font-size: 14px;
  cursor: pointer;
}
.com-page {
  position: fixed;
  right: 0px;
  bottom: 0px;
  z-index: 9999;
  width: 200px;
  height: 200px;
}
.Feedbackpage {
  width: 300px;
  height: 300px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  text-align: center;
  padding: 20px;
  background-color: rgb(245, 245, 245);
  border-radius: 10px;
}
.Feedbackpage p {
  margin-bottom: 22px;
}
.Feedbackpage .el-textarea textarea {
  height: 65px !important;
}
#submits {
}
#submitss {
}
</style>

<template>
  <div class="complain">
    <div class="com-button" v-if="this.$store.state.logo.contactUs">
      <div class="com-img">
        <img src="../../assets/comIcon.jpg" alt />
      </div>
      <div class="com-text">
        <div>
          {{$t('complain.con0')}}
          <br />
          {{$t('complain.con1')}}
          <br />
          {{$t('complain.con2')}}
          <span
            style="text-decoration:underline;cursor: pointer;"
            @click="comPageClick"
          >{{$t('complain.con3')}}!</span>
        </div>
        <i class="el-icon-close" @click="complainClick"></i>
      </div>
    </div>
    <div class="com-page" v-show="comPageShow">
      <div class="Feedbackpage">
        <p>{{$t('complain.con4')}}</p>
        <el-form
          :model="feedback"
          :rules="rules"
          ref="feedback"
          label-width="50px"
          class="demo-ruleForm"
          @submit.native.prevent
        >
          <el-form-item style="margin-left: -50px;" prop="Name">
            <el-input v-model="feedback.Name" :placeholder="$t('complain.con5')"></el-input>
          </el-form-item>
          <el-form-item style="margin-left: -50px;" prop="Content">
            <el-input
              type="textarea"
              v-model="feedback.Content"
              :placeholder="$t('complain.con6')"
              style="height:65px;"
            ></el-input>
          </el-form-item>
          <el-form-item style="margin-left: -50px;" prop="CreateBy">
            <el-input v-model="feedback.CreateBy" :placeholder="$t('complain.con7')"></el-input>
          </el-form-item>
          <el-form-item style="margin-left: -50px;">
            <el-button
              id="submits"
              type="info"
              @click="cancelForm('feedback')"
            >{{$t('complain.con8')}}</el-button>
            <el-button
              id="submitss"
              type="primary"
              @click="submitForm('feedback')"
              :loading="loadings"
            >{{$t('complain.con9')}}</el-button>
          </el-form-item>
          <el-form-item style="margin-left: -50px;"></el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script type="es6">
export default {
  name: "complain",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$t("complain.con10")));
      }
      callback();
    };
    return {
      comPageShow: false,
      feedback: {
        Url: "",
        Name: "",
        Content: "",
        CreateBy: ""
      },
      loadings: false,
      rules: {
        Name: [
          {
            required: true,
            message: this.$t("complain.con11"),
            trigger: "blur"
          }
        ],
        Content: [
          {
            required: true,
            message: this.$t("complain.con12"),
            trigger: "blur"
          }
        ],
        CreateBy: [
          {
            required: false,
            message: this.$t("complain.con13"),
            trigger: "blur"
          }
        ]
      }
    };
  },
  created: function() {
    const _this = this;
  },
  methods: {
    // 关闭问答系统
    complainClick: function() {
      const _this = this;
      _this.$store.state.logo.contactUs = !_this.$store.state.logo.contactUs;
    },
    // 展开问答系统
    comPageClick() {
      const _this = this;
      _this.comPageShow = !_this.comPageShow;
    },
    // 提交问题
    submitForm(feedback) {
      this.$refs[feedback].validate(valid => {
        if (valid) {
          const _this = this;
          _this.feedback.Url = String(_this.$route.fullPath);
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/Feedback/Add`,
              async: false,
              data: _this.feedback,
              xhrFields: {
                withCredentials: true
              }
            })
            .then(function(res) {
              _this.$message({
                message: _this.$t("complain.con14"),
                type: "success"
              });
              _this.feedback.Name = "";
              _this.feedback.Content = "";
              _this.feedback.CreateBy = "";
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      });
    },
    // 关闭问答系统
    cancelForm: function() {
      const _this = this;
      _this.comPageShow = !_this.comPageShow;
    }
  },
  watch: {
    "$i18n.locale"() {
      this.rules = {
        Name: [
          {
            required: true,
            message: this.$t("complain.con11"),
            trigger: "blur"
          }
        ],
        Content: [
          {
            required: true,
            message: this.$t("complain.con12"),
            trigger: "blur"
          }
        ],
        CreateBy: [
          {
            required: false,
            message: this.$t("complain.con13"),
            trigger: "blur"
          }
        ]
      };
    }
  }
};
</script>