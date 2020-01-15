<style>
#uploadAnswer {
  position: relative;
  padding-bottom: 276px;
}
.ua-con {
  margin-top: 80px;
  height: 1000px;
}
.ua-middle {
  width: 1300px;
  margin: 0 auto;
}
.up-upload {
  margin-top: 100px;
}
/* 共用样式 */
.share-box {
  width: 1120px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
.share-prefix {
  font-size: 12px;
  margin-bottom: 6px;
  color: #777;
  margin-top: 16px;
}
.share-title {
  text-align: center;
  font-size: 21px;
  font-weight: 700;
}
/* 共用样式结束 */

/* 编辑学校 */
.up-school {
}
/* 编辑学校结束 */

/* 编辑课程 */
.up-class {
}
/* 编辑课程结束 */

/* 编辑答案开始 */
.up-answer {
}
.up-answer-course {
  font-size: 18px;
  font-weight: 700;
  margin-top: 12px;
}
.up-answer-school {
  margin-top: 12px;
  font-size: 16px;
}
.up-answer-type {
  float: left;
}
.up-answer-week {
  float: right;
}
.up-answer-topic {
  width: 280px;
  float: left;
}
.topic-title {
  overflow: hidden;
  cursor: pointer;
  line-height: 30px;
}
.topic-title:hover {
  background-color: rgb(250, 250, 250);
}
.topic-title p {
  float: left;
}
.topic-title i {
  float: right;
  margin-top: 8px;
  margin-right: 8px;
}
.topic-con {
  padding-bottom: 10px;
}
.upload-topic {
  margin-top: 12px;
}
.up-answer-img {
  width: 820px;
  margin-left: 20px;
  float: right;
}
.upload-img {
  margin-top: 12px;
}
.upload-img .el-upload {
  margin-left: 380px;
}
/* 编辑答案结束 */

/* 下一步按钮样式 */
.next {
  /* display: inline-block; */
  text-align: center;
  /* width: 202px; */
  margin: 0 auto;
}
.el-form-item {
  margin-bottom: 0px !important;
}
</style>

<template>
  <div id="uploadAnswer">
    <homeNav></homeNav>
    <div class="ua-con">
      <div class="ua-middle">
        <div class="up-upload">
          <el-steps
            :active="active"
            align-center
            finish-status="success"
            style="width:1000px;margin:0 auto;"
          >
            <el-step title="编辑学校" icon="el-icon-edit"></el-step>
            <el-step title="编辑课程" icon="el-icon-s-order"></el-step>
            <el-step title="编辑答案" icon="el-icon-upload"></el-step>
          </el-steps>
          <el-form :model="upload" :rules="rules" ref="upload" class="demo-ruleForm">
            <!-- 选择学校START -->
            <div class="up-school share-box" v-show="upschool == true && active == 0">
              <p class="share-title">编辑学校</p>
              <div class="share-prefix">学校*</div>
              <el-form-item prop="school">
                <el-select v-model="upload.school" placeholder="请选择您的学校" style="width:1120px;">
                  <el-option
                    v-for="item in schooloptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
            <!-- 选择学校END -->
            <!-- 手写学校START -->
            <div class="up-school share-box" v-show="upschool == false && active == 0">
              <p class="share-title">编辑学校</p>
              <div class="share-prefix">学校*</div>
              <el-form-item prop="school">
                <el-input v-model="upload.school" placeholder="请填写您的学校名称"></el-input>
              </el-form-item>

              <div class="share-prefix">课程*</div>
              <el-form-item prop="course">
                <el-input v-model="upload.course" placeholder="请填写您的课程名称"></el-input>
              </el-form-item>
            </div>
            <!-- 手写学校END -->

            <!-- 选择课程START -->
            <div class="up-class share-box" v-show="upcourse == true && active == 1">
              <p class="share-title">编辑课程</p>
              <div class="share-prefix">学校*</div>
              <div>{{school}}学校名称</div>
              <div class="share-prefix">课程*</div>
              <el-form-item prop="course">
                <el-select v-model="upload.course" placeholder="请选择您的课程" style="width:1120px;">
                  <el-option
                    v-for="item in courseoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>
            <!-- 选择课程END -->

            <!-- 手写课程START -->
            <div class="up-class share-box" v-show="upcourse == false && active == 1">
              <p class="share-title">编辑课程</p>
              <div class="share-prefix">学校*</div>
              <div>{{school}}学校名称</div>
              <div class="share-prefix">课程*</div>
              <el-form-item prop="course">
                <el-input v-model="upload.course" placeholder="请填写您的课程名称"></el-input>
              </el-form-item>
            </div>
            <!-- 手写课程END -->
            <!-- 编辑答案START -->
            <div class="up-answer share-box" v-show="active == 2">
              <p class="share-title">编辑答案--{{upload.course}}课程名称--{{upload.school}}学校名称</p>
              <div class="up-answer-type">
                <div class="share-prefix">类型选择*</div>
                <el-form-item prop="type">
                  <el-select v-model="upload.type" placeholder="请选择当前课程的类型" style="width:540px;">
                    <el-option
                      v-for="item in typeoptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="up-answer-week">
                <div class="share-prefix">周选择*</div>
                <el-form-item prop="week">
                  <el-select v-model="upload.week" placeholder="请选择当前课程所在的周" style="width:540px;">
                    <el-option
                      v-for="item in weekoptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="up-answer-topic">
                <div class="topic-title" @click="topictitle"></div>
                <div class="topic-con">
                  <div class="share-prefix">题目名称(选填)</div>
                  <el-form-item prop="topic">
                    <el-input v-model="upload.topic" placeholder="请输入您的题目名称"></el-input>
                  </el-form-item>
                  <el-upload
                    class="upload-topic"
                    ref="upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    :auto-upload="false"
                    :limit="uu"
                  >
                    <el-button
                      slot="trigger"
                      size="small"
                      type="primary"
                      icon="el-icon-picture"
                    >添加题目图片</el-button>
                  </el-upload>
                </div>
              </div>
              <div class="up-answer-img">
                <div class="share-prefix">答案内容(必填)</div>
                <el-form-item prop="imgs">
                  <el-input v-model="upload.imgs" placeholder="请输入您的答案内容"></el-input>
                </el-form-item>
                <el-upload
                  class="upload-topic"
                  ref="upload"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="fileList"
                  :auto-upload="false"
                  :limit="uu"
                >
                  <el-button
                    slot="trigger"
                    size="small"
                    type="primary"
                    icon="el-icon-picture"
                  >添加答案图片</el-button>
                  <i
                    slot="tip"
                    class="el-upload__tip"
                    style="margin-left:10px;color:#9c9c9c;"
                  >只能上传jpg/png文件，且不超过500kb</i>
                </el-upload>
              </div>
            </div>
            <!-- 编辑答案END -->
            <div class="next">
              <el-button
                style="margin-top: 20px;"
                @click="upschoolShow"
                v-show="upschool == true && active == 0"
              >添加学校</el-button>
              <el-button
                style="margin-top: 20px;"
                @click="upschoolShow"
                v-show="upschool == false && active == 0"
              >不用了</el-button>
              <el-button
                style="margin-top: 20px;"
                @click="steplast"
                v-show="active >= 1 && active <= 2"
              >上一步</el-button>
              <el-button
                style="margin-top: 20px;"
                @click="upcourseShow"
                v-show="upcourse == true && active == 1"
              >添加课程</el-button>
              <el-button
                style="margin-top: 20px;"
                @click="upcourseShow"
                v-show="upcourse == false && active == 1"
              >不用了</el-button>
              <el-button
                style="margin-top: 20px;"
                type="primary"
                @click="stepNext('upload')"
                v-show="active < 2"
              >下一步</el-button>
              <el-button
                style="margin-top: 20px;"
                type="danger"
                @click="stepupload('upload')"
                v-show="active == 2"
              >新增答案</el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <homeFooter></homeFooter>
  </div>
</template>

<script type="es6">
import homeNav from "@/components/public/homeNav.vue";
import homeFooter from "@/components/public/homeFooter.vue";

export default {
  name: "uploadAnswer",
  components: {
    homeNav,
    homeFooter
  },
  data() {
    return {
      uu: 1,
      active: 0,
      // 表单容器
      upload: {
        school: "",
        course: "",
        type: "",
        week: "",
        topic: "",
        imgs: ""
      },
      rules: {
        school: [
          { required: true, message: "请填写学校名称", trigger: "change" }
        ],
        course: [
          { required: true, message: "请填写课程名称", trigger: "change" }
        ],
        type: [{ required: true, message: "请选择类型", trigger: "change" }],
        week: [{ required: true, message: "请选择周", trigger: "change" }]
      },
      school: "",
      schooloptions: [
        {
          value: "选项1",
          label: "学校1"
        },
        {
          value: "选项2",
          label: "学校2"
        },
        {
          value: "选项3",
          label: "学校3"
        },
        {
          value: "选项4",
          label: "学校4"
        },
        {
          value: "选项5",
          label: "学校5"
        }
      ],
      course: "",
      courseoptions: [
        {
          value: "选项1",
          label: "课程1"
        },
        {
          value: "选项2",
          label: "课程2"
        },
        {
          value: "选项3",
          label: "课程3"
        },
        {
          value: "选项4",
          label: "课程4"
        },
        {
          value: "选项5",
          label: "课程5"
        }
      ],
      type: "",
      typeoptions: [
        {
          value: "选项1",
          label: "类型1"
        },
        {
          value: "选项2",
          label: "类型2"
        },
        {
          value: "选项3",
          label: "类型3"
        },
        {
          value: "选项4",
          label: "类型4"
        }
      ],
      week: "",
      weekoptions: [
        {
          value: "选项1",
          label: "第1周"
        }
      ],
      // 选择学校和填写学校的显示隐藏
      upschool: true,
      // 选择课程和填写课程的显示隐藏
      upcourse: true,
      fileList: [],
      // 题目名称
      topic: "",
      // 题目区域的显示隐藏
      topictitleshow: true,
      // 答案图片
      imgs: ""
    };
  },
  created: function() {
    const _this = this;
  },
  methods: {
    // 添加学校显示
    upschoolShow() {
      const _this = this;
      _this.upschool = !_this.upschool;
      _this.school = "";
    },
    // 添加课程显示
    upcourseShow() {
      const _this = this;
      _this.upcourse = !_this.upcourse;
      _this.course = "";
    },
    // 下一步
    stepNext() {
      const _this = this;
      _this.$refs.form.validateField("school", errMsg => {
        if (errMsg) {
          console.log("手机号校验未通过");
        } else {
          console.log("校验通过");
        }
      });
      // 选择学校区域
      if (_this.active == 0 && _this.upschool == true) {
        if (_this.upload.school != "") {
        } else {
          console.log("请填写学校");
        }
      }
      // 创建学校区域
      if (_this.active == 0 && _this.upschool == false) {
      }
      // 选择课程区域
      if (_this.active == 1 && _this.upcourse == true) {
      }
      // 创建课程区域
      if (_this.active == 1 && _this.upcourse == false) {
      }
      if (this.active++ >= 2) this.active = 2;
    },
    // 上一步
    steplast() {
      this.active--;
      if (this.active <= 2) {
        this.upcourse = true;
        this.upschool = true;
      }
    },
    // 上传
    stepupload(upload) {
      const _this = this;

      // this.active = 3;
      _this.$refs[upload].validate(valid => {
        if (valid) {
          alert("submit!");
          // _this.$refs.upload.submit();
          console.log(valid);
        } else {
          console.log(_this.$refs[upload]);
          return false;
        }
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    // 题目显示
    topictitle() {
      this.topictitleshow = !this.topictitleshow;
    }
  }
};
</script>