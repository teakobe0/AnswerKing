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
  z-index: 9999;
  padding: 10px;
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
  height: 50px;
  font-size: 12px;
  position: relative;
}
.com-text i{
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
        <img src="../../assets/comIcon.png" alt="">
      </div>
      <div class="com-text">
        <div>
          CourseWhale课程鲸灵在线问答系统<br/>已经进入内侧阶段,请时刻关注网站最新动态!<br/>如有任何意见或建议<span style="text-decoration:underline;cursor: pointer;"  @click="comPageClick">请点击这里联系我们!</span>
        </div>
        <i class="el-icon-close" @click="complainClick"></i>
      </div>
      
      </div>
    <div class="com-page" v-show="comPageShow">
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
      comPageShow:false,
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
    const _this = this;
  },
  methods: {
    complainClick: function() {
      const _this = this;
      _this.$store.state.logo.contactUs = !_this.$store.state.logo.contactUs;
    },
    comPageClick(){
      const _this = this;
      _this.comPageShow = !_this.comPageShow;
    },

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
      const _this = this;
      _this.comPageShow = !_this.comPageShow;
    }
  }
};
</script>