<style>
.complain {
}
.com-button {
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #58bce4;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 9999;
}
.com-button:hover {
  background-color: #75c1e2;
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
  border: 1px solid rgb(201, 201, 201);
  padding: 20px;
  background-color: rgb(233, 233, 233);
}
.Feedbackpage p {
  margin-bottom: 22px;
}
.el-textarea textarea {
  height: 65px !important;
}
#submits {
}
#submitss {
}
</style>

<template>
  <div class="complain">
    <div class="com-button" v-show="complainShow == true" @click="complainClick">提交建议</div>
    <div class="com-page" v-show="complainShow == false">
      <div class="Feedbackpage">
        <p>网站建议</p>
        <el-form
          :model="feedback"
          :rules="rules"
          ref="feedback"
          label-width="50px"
          class="demo-ruleForm"
          @submit.native.prevent
        >
          <el-form-item style="margin-left: -50px;" prop="Name">
            <el-input v-model="feedback.Name" placeholder="请输入主题(必填)"></el-input>
          </el-form-item>
          <el-form-item style="margin-left: -50px;" prop="Content">
            <el-input
              type="textarea"
              v-model="feedback.Content"
              placeholder="请输入您要提交的内容(必填)"
              style="height:65px;"
            ></el-input>
          </el-form-item>
          <el-form-item style="margin-left: -50px;" prop="CreateBy">
            <el-input v-model="feedback.CreateBy" placeholder="请输入您的姓名(选填)"></el-input>
          </el-form-item>
          <el-form-item style="margin-left: -50px;">
            <el-button id="submits" type="info" @click="cancelForm('feedback')">取消</el-button>
            <el-button
              id="submitss"
              type="primary"
              @click="submitForm('feedback')"
              :loading="loadings"
            >提交</el-button>
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
        callback(new Error("请输入内容"));
      }
      callback();
    };
    return {
      complainShow: true,
      feedback: {
        Url: "",
        Name: "",
        Content: "",
        CreateBy: ""
      },
      loadings: false,
      rules: {
        Name: [{ required: true, message: "请输入主题", trigger: "blur" }],
        Content: [
          { required: true, message: "请填写您要提交的内容", trigger: "blur" }
        ],
        CreateBy: [
          { required: false, message: "请输入您的姓名", trigger: "blur" }
        ]
      }
    };
  },
  created: function() {
    var _this = this;
  },
  methods: {
    complainClick: function() {
      var _this = this;
      _this.complainShow = !_this.complainShow;
    },
    submitForm(feedback) {
      this.$refs[feedback].validate(valid => {
        if (valid) {
          var _this = this;
          _this.feedback.Url = String(_this.$route.fullPath);
          _this
            .axios({
              method: "post",
              url: `http://192.168.1.27:8088/api/Feedback/Add`,
              async: false,
              data: _this.feedback,
              xhrFields: {
                withCredentials: true
              }
            })
            .then(function(res) {
              _this.$message({
                message: "提交成功!,感谢您对本网站的支持!",
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
    cancelForm: function() {
      var _this = this;
      _this.complainShow = !_this.complainShow;
    }
  }
};
</script>