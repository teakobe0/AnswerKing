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
  margin-top: 12px;
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
  margin-top: 86px;
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
  /* border: 1px solid #777; */
  padding-bottom: 10px;
  border-bottom: 1px solid #ababab;
}
.upload-topic {
  margin-top: 12px;
}
.up-answer-img {
  margin-top: 12px;
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
  width: 202px;
  margin: 0 auto;
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
          <!-- 选择学校START -->
          <div class="up-school share-box" v-show="upschool == true && active == 0">
            <p class="share-title">编辑学校</p>
            <div class="share-prefix">学校*</div>
            <el-select v-model="school" placeholder="请选择您的学校" style="width:1120px;">
              <el-option
                v-for="item in schooloptions"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              ></el-option>
            </el-select>
          </div>
          <!-- 选择学校END -->

          <!-- 手写学校START -->
          <div class="up-school share-box" v-show="upschool == false && active == 0">
            <p class="share-title">编辑学校</p>
            <div class="share-prefix">学校*</div>
            <el-input v-model="school" placeholder="请填写您的学校名称"></el-input>
          </div>
          <!-- 手写学校END -->

          <!-- 选择课程START -->
          <div class="up-class share-box" v-show="active == 1">
            <p class="share-title">编辑课程</p>
            <div class="share-prefix">学校*</div>
            <div>{{school}}学校名称</div>
            <div class="share-prefix">课程*</div>
            <el-select v-model="course" placeholder="请选择您的课程" style="width:1120px;">
              <el-option
                v-for="item in courseoptions"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              ></el-option>
            </el-select>
          </div>
          <!-- 选择课程END -->

          <!-- 编辑答案START -->
          <div class="up-answer share-box" v-show="active == 2">
            <p class="share-title">编辑答案</p>
            <div class="up-answer-course">{{course}}课程名称</div>
            <div class="up-answer-school">{{school}}学校名称</div>
            <div class="up-answer-type">
              <div class="share-prefix">类型选择*</div>
              <el-select v-model="type" placeholder="请选择您的类型" style="width:540px;">
                <el-option
                  v-for="item in typeoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.label"
                ></el-option>
              </el-select>
            </div>
            <div class="up-answer-week">
              <div class="share-prefix">周选择*</div>
              <el-select v-model="week" placeholder="请选择您的类型" style="width:540px;">
                <el-option
                  v-for="item in weekoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.label"
                ></el-option>
              </el-select>
            </div>
            <div class="up-answer-topic">
              <div class="topic-title" @click="topictitle">
                <p>编辑题目(选填)</p>
                <i class="el-icon-arrow-down" v-show="topictitleshow == false"></i>
                <i class="el-icon-arrow-up" v-show="topictitleshow == true"></i>
              </div>
              <div class="topic-con" v-show="topictitleshow">
                <div class="share-prefix">题目名称</div>

                <el-input v-model="topic" placeholder="请输入您的题目名称"></el-input>
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
                  <el-button slot="trigger" size="small" type="primary">选取题目图片</el-button>
                  <i
                    slot="tip"
                    class="el-upload__tip"
                    style="margin-left:10px;color:#9c9c9c;"
                  >只能上传jpg/png文件，且不超过500kb</i>
                </el-upload>
              </div>
            </div>
            <div class="up-answer-img">
              <p>编辑答案*</p>
              <div class="share-prefix">答案内容</div>
              <el-input v-model="imgs" placeholder="请输入您的答案内容"></el-input>
              <el-upload
                class="upload-img"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
                :auto-upload="false"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或
                  <em>点击上传</em>
                  <div class="el-upload__tip" slot="tip" style="color:#9c9c9c;">只能上传jpg/png文件，且不超过500kb</div>
                </div>
                
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
              type="primary"
              @click="stepNext"
              v-show="active < 2"
            >下一步</el-button>
            <el-button
              style="margin-top: 20px;"
              type="danger"
              @click="stepupload"
              v-show="active == 2"
            >提交答案</el-button>
          </div>
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
      active: 2,
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
      //   选择学校和填写学校的显示隐藏
      upschool: true,
      fileList: [],
      // 题目名称
      topic: "",
      // 题目区域的显示隐藏
      topictitleshow: true,
      // 答案图片
      imgs:"",
    };
  },
  created: function() {
    const _this = this;
  },
  methods: {
    upschoolShow() {
      const _this = this;
      _this.upschool = !_this.upschool;
      _this.school = "";
    },
    stepNext() {
      if (this.active++ >= 2) this.active = 2;
    },
    steplast() {
      this.active--;
    },
    stepupload() {
      const _this = this;
      this.$refs.upload.submit();
      // this.active = 3;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    topictitle() {
      this.topictitleshow = !this.topictitleshow;
    }
  }
};
</script>