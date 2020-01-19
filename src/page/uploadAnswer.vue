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
  padding: 20px 0 50px 0;
}
.up-upload {
}
/* 共用样式 */
.share-box {
  width: 1120px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
}
.share-prefix {
  font-size: 12px;
  margin-bottom: 6px;
  color: #777;
  margin-top: 16px;
}
.share-title {
  text-align: center;
  color: #303a3d;
  font-size: 21px;
  font-weight: 700;
}
/* 共用样式结束 */

/* 编辑学校 */
.up-school {
}
.query-schoolserch input {
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
  float: right;
  /* margin-top: 16px; */
}
.up-answer-week {
  float: left;
  /* margin-top: 16px; */
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
/* 展示答案开始 */
.showAnswer {
}
.SA-con {
  width: 1120px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
}
/* 展示答案结束 */
/* 下一步按钮样式 */
.next {
  /* display: inline-block; */
  text-align: center;
  /* width: 202px; */
  margin: 0 auto;
}
.nextcenter {
  text-align: center;
}
#uploadAnswer .el-form-item {
  margin-bottom: 0px !important;
}
/* 展示订单开始 */
.SA-title {
  border-bottom: 1px solid #f0f0f0;
  padding: 0 0 12px 0;
  overflow: hidden;
}
.SA-course {
  /* float: left; */
  color: #455358;
  font-weight: 700;
  font-size: 18px;
  vertical-align: text-bottom;
}
.SA-week {
  /* float: right; */
  color: #4f5c61;
  vertical-align: text-bottom;
  margin-left: 20px;
  font-size: 16px;
}
.SA-topic {
  padding-top: 12px;
  float: left;
  width: 550px;
  vertical-align: text-bottom;
}
.SA-topic p {
  float: left;
  width: 490px;
  line-height: 22px;
  color: #2d3639;
}
.SA-topic img {
  width: 50px;
  height: 50px;
  float: right;
}
.SA-answer {
  padding-top: 12px;
  float: right;
  width: 550px;
}
.SA-answer p {
  float: left;
  width: 490px;
  line-height: 22px;
  color: #2d3639;
}
.SA-answer img {
  width: 50px;
  height: 50px;
  float: right;
}
.SA-edit {
  position: absolute;
  top: 22px;
  right: 20px;
}
.SA-edit i {
  font-size: 20px;
  margin-left: 12px;
  cursor: pointer;
}
.SA-edit .edits:hover {
  color: #ffcd1f;
}
.SA-edit .delete:hover {
  color: #f78989;
}
.orderTitle {
  margin-top: 16px;
  margin: 0 auto;
  width: 1160px;
  overflow: hidden;
}
/* 展示订单结束 */
</style>

<template>
  <div id="uploadAnswer">
    <homeNav></homeNav>
    <div class="ua-con">
      <div class="ua-middle">
        <el-steps
          :active="active"
          align-center
          finish-status="success"
          style="width:1000px;margin:0 auto;margin-bottom: 16px;"
        >
          <el-step title="编辑学校" icon="el-icon-edit"></el-step>
          <el-step title="编辑课程" icon="el-icon-s-order"></el-step>
          <el-step title="编辑答案" icon="el-icon-upload"></el-step>
        </el-steps>
        <div class="orderTitle" v-show="active == 2">
          <!-- <div class="share-prefix">标题*</div> -->
          <el-input v-model="orderTitle" placeholder="请输入标题(必填)" style="width:1040px;"></el-input>
          <el-button
            style="float:right;"
            type="primary"
            @click="orderTitleMeth"
            v-show="active == 2"
          >保存标题</el-button>
        </div>
        <!-- 展示创建过的订单开始 -->
        <div v-show="active == 2">
          <div class="showAnswer" v-for="item in answerArray">
            <div class="SA-con">
              <div class="SA-title">
                <span class="SA-course">{{item.classname}}--{{item.universityname}}</span>
                <span
                  class="SA-week"
                >第{{item.classInfoContentTest.classWeek}}周--{{item.classInfoContentTest.classWeekType}}</span>
              </div>
              <div class="SA-edit">
                <i class="el-icon-edit edits" @click="editAnswerShow(item)"></i>
                <i class="el-icon-delete delete"></i>
              </div>
              <div v-show="active == 2 && item.show == false">
                <div class="SA-topic">
                  <p>{{item.classInfoContentTest.name}}</p>
                  <img src="../assets/3.jpg" alt />
                </div>
                <div class="SA-answer">
                  <p>{{item.classInfoContentTest.Contents}}</p>
                  <img src="../assets/3.jpg" alt />
                </div>
              </div>
              <div v-show="active == 2 && item.show == true">
                <el-form
                  :model="editupload"
                  :rules="editrules"
                  ref="editupload"
                  class="demo-ruleForm"
                  @submit.native.prevent
                >
                  <div class="up-answer-week">
                    <div class="share-prefix">周选择*</div>
                    <el-form-item prop="week">
                      <el-select
                        v-model="item.classInfoContentTest.ClassWeek"
                        placeholder="请选择当前课程所在的周"
                        style="width:550px;"
                      >
                        <el-option
                          v-for="item in weekoptions"
                          :key="item.label"
                          :label="'第'+ item.label + '周'"
                          :value="item.label"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                  <div class="up-answer-type">
                    <div class="share-prefix">类型选择*</div>
                    <el-form-item prop="type">
                      <el-select
                        v-model="item.classInfoContentTest.ClassWeekType"
                        placeholder="请选择当前课程的类型"
                        style="width:550px;"
                      >
                        <el-option
                          v-for="item in typeoptions"
                          :key="item.label"
                          :label="item.label"
                          :value="item.label"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                  <div class="up-answer-topic">
                    <div class="topic-con">
                      <div class="share-prefix">题目名称(选填)</div>
                      <el-form-item prop="topic">
                        <el-input
                          v-model="item.classInfoContentTest.name"
                          placeholder="请输入您的题目名称(选填)"
                        ></el-input>
                      </el-form-item>
                      <el-form-item prop="topicUrl" ref="uploadTopicUrl">
                        <el-upload
                          class="upload-topic"
                          ref="upload"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :on-preview="topicHandlePreview"
                          :on-remove="topicHandleRemove"
                          :file-list="fileList"
                          :auto-upload="false"
                          :limit="uploadNum"
                          list-type="picture"
                        >
                          <el-button
                            slot="trigger"
                            size="small"
                            type="primary"
                            icon="el-icon-picture"
                          >添加题目图片</el-button>
                        </el-upload>
                      </el-form-item>
                    </div>
                  </div>
                  <div class="up-answer-img">
                    <div class="share-prefix">答案内容*(必填)</div>
                    <el-form-item prop="answer">
                      <el-input
                        v-model="item.classInfoContentTest.Contents"
                        placeholder="请输入您的答案内容(选填)"
                      ></el-input>
                    </el-form-item>
                    <el-form-item prop="answerUrl" ref="uploadAnswerUrl">
                      <el-upload
                        class="upload-topic"
                        ref="upload"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-success="answerHandlePreview"
                        :on-remove="answerHandleRemove"
                        :on-change="answerHandleChange"
                        :before-upload="answerHandlebeforeupload"
                        :file-list="fileList"
                        :auto-upload="false"
                        :limit="uploadNum"
                        list-type="picture"
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
                    </el-form-item>
                  </div>
                  <el-button
                    style="margin-top: 20px;position: absolute;top:207px;right:20px;"
                    size="small"
                    type="danger"
                    @click="editstepupload('editupload')"
                    v-show="active == 2"
                  >提交答案</el-button>
                </el-form>
              </div>
            </div>
            <!-- 编辑现有答案 -->
          </div>
        </div>
        <!-- 展示创建过的订单结束 -->
        <div class="up-upload">
          <el-form
            :model="upload"
            :rules="rules"
            ref="upload"
            class="demo-ruleForm"
            @submit.native.prevent
          >
            <!-- 选择学校START -->
            <div class="up-school" v-show="upschool == true && active == 0">
              <div class="share-box">
                <p class="share-title">选择学校</p>
                <div class="share-prefix">学校*</div>
                <el-form-item prop="school">
                  <el-autocomplete
                    class="query-schoolserch"
                    v-model="school"
                    :fetch-suggestions="querySearch"
                    @select="SchoolHandleSelectauto"
                    placeholder="请输入您需要查询的学校名称"
                    prefix-icon="el-icon-search"
                    :trigger-on-focus="false"
                    @blur="schoolBlur"
                    style="width:1120px;"
                  >
                    <template slot-scope="{ item }">
                      <div style="width: 100%;height: 34px;display: block;">
                        <span style="color:#878787;float:left;">{{item.value}}</span>
                        <span style="color:#878787;float:right;">{{item.type}}</span>
                      </div>
                    </template>
                  </el-autocomplete>
                  <!-- <el-select v-model="upload.school" placeholder="请选择您的学校" style="width:1120px;">
                    <el-option
                      v-for="item in schooloptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label"
                    ></el-option>
                  </el-select>-->
                </el-form-item>
              </div>
              <div class="nextcenter">
                <el-button style="margin-top: 20px;" @click="upschoolShow">添加学校</el-button>
                <el-button
                  style="margin-top: 20px;"
                  type="primary"
                  @click="schoolNext('upload')"
                  :disabled="schooldisabled"
                >下一步</el-button>
              </div>
            </div>

            <!-- 选择学校END -->

            <!-- 选择课程START -->
            <div class="up-class" v-show="upcourse == true && active == 1">
              <div class="share-box">
                <p class="share-title">选择课程</p>
                <div class="share-prefix">学校*</div>
                <div>{{upload.school}}</div>
                <div class="share-prefix">课程*</div>
                <el-form-item prop="course">
                  <el-autocomplete
                    class="query-schoolserch"
                    v-model="course"
                    :fetch-suggestions="courseQuerySearch"
                    @select="courseHandleSelectauto"
                    placeholder="请输入您需要查询的课程名称"
                    prefix-icon="el-icon-search"
                    :trigger-on-focus="false"
                    @blur="courseBlur"
                    style="width:1120px;"
                  >
                    <template slot-scope="{ item }">
                      <div style="width: 100%;height: 34px;display: block;">
                        <span style="color:#878787;float:left;">{{item.value}}</span>
                        <span style="color:#878787;float:right;">{{item.type}}</span>
                      </div>
                    </template>
                  </el-autocomplete>
                  <!-- <el-select v-model="upload.course" placeholder="请选择您的课程" style="width:1120px;">
                    <el-option
                      v-for="item in courseoptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label"
                    ></el-option>
                  </el-select>-->
                </el-form-item>
              </div>
              <div class="nextcenter">
                <el-button style="margin-top: 20px;" @click="steplast">上一步</el-button>
                <el-button style="margin-top: 20px;" @click="upcourseShow">添加课程</el-button>
                <el-button
                  style="margin-top: 20px;"
                  type="primary"
                  @click="courseNext('upload')"
                  :disabled="coursedisabled"
                >下一步</el-button>
              </div>
            </div>
            <!-- 选择课程END -->

            <!-- 编辑答案START -->
            <div class="up-answer" v-show="active == 2">
              <div class="share-box">
                <p class="share-title">添加答案--{{upload.course}}--{{upload.school}}</p>

                <div class="up-answer-week">
                  <div class="share-prefix">周选择*</div>
                  <el-form-item prop="week">
                    <el-select v-model="upload.week" placeholder="请选择当前课程所在的周" style="width:550px;">
                      <el-option
                        v-for="item in weekoptions"
                        :key="item.label"
                        :label="'第'+ item.label + '周'"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="up-answer-type">
                  <div class="share-prefix">类型选择*</div>
                  <el-form-item prop="type">
                    <el-select v-model="upload.type" placeholder="请选择当前课程的类型" style="width:550px;">
                      <el-option
                        v-for="item in typeoptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.label"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </div>

                <div class="up-answer-topic">
                  <div class="topic-con">
                    <div class="share-prefix">题目名称(选填)</div>
                    <el-form-item prop="topic">
                      <el-input v-model="upload.topic" placeholder="请输入您的题目名称(选填)"></el-input>
                    </el-form-item>
                    <el-form-item prop="topicUrl" ref="uploadTopicUrl">
                      <el-upload
                        class="upload-topic"
                        ref="upload"
                        :action="imgSite"
                        :headers="myHeaders"
                        :on-preview="topicHandlePreview"
                        :on-remove="topicHandleRemove"
                        :before-upload="topicHandlebeforeupload"
                        :file-list="fileList"
                        :auto-upload="false"
                        :limit="uploadNum"
                        :data="{classInfoTestId:this.classInfoTestId}"
                        list-type="picture"
                      >
                        <el-button
                          slot="trigger"
                          size="small"
                          type="primary"
                          icon="el-icon-picture"
                        >添加题目图片</el-button>
                      </el-upload>
                    </el-form-item>
                  </div>
                </div>
                <div class="up-answer-img">
                  <div class="share-prefix">答案内容*(必填)</div>
                  <el-form-item prop="answer">
                    <el-input v-model="upload.answer" placeholder="请输入您的答案内容(选填)"></el-input>
                  </el-form-item>
                  <el-form-item prop="answerUrl" ref="uploadAnswerUrl">
                    <el-upload
                      class="upload-topic"
                      ref="upload"
                      :action="imgSite"
                      :headers="myHeaders"
                      :on-success="answerHandlePreview"
                      :on-remove="answerHandleRemove"
                      :on-change="answerHandleChange"
                      :before-upload="answerHandlebeforeupload"
                      :file-list="fileList"
                      :auto-upload="false"
                      :limit="uploadNum"
                      :data="{classInfoTestId:this.classInfoTestId.toString()}"
                      list-type="picture"
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
                      >每次只能上传1张jpg/png的图片，且不超过2MB</i>
                    </el-upload>
                  </el-form-item>
                </div>
                <!-- <el-button
                  style="margin-top: 20px;position: absolute;right: 20px;top: 209px;"
                  type="danger"
                  @click="stepupload('upload')"
                  v-show="active == 2"
                >提交答案</el-button>-->
              </div>
              <div class="nextcenter">
                <el-button
                  style="margin-top: 20px;"
                  @click="steplast"
                  v-show="active >= 1 && active <= 2"
                >上一步</el-button>
                <el-button
                  style="margin-top: 20px;"
                  type="danger"
                  @click="stepupload('upload')"
                  v-show="active == 2"
                >提交答案</el-button>
              </div>
            </div>
            <!-- 编辑答案END -->
          </el-form>
          <el-form
            :model="ruleForm"
            :rules="addrules"
            ref="ruleForm"
            class="demo-ruleForm"
            @submit.native.prevent
          >
            <!-- 手写学校START -->
            <div class="up-school" v-show="upschool == false && active == 0">
              <div class="share-box">
                <p class="share-title">编辑学校</p>
                <div class="share-prefix">学校*</div>
                <el-form-item prop="name">
                  <el-input v-model="ruleForm.name" placeholder="请填写您的学校名称"></el-input>
                </el-form-item>
              </div>
              <div class="nextcenter">
                <el-button style="margin-top: 20px;" @click="upschoolShow">取消</el-button>
                <el-button
                  style="margin-top: 20px;"
                  @click="addSchoolNext('ruleForm')"
                  type="primary"
                >添加学校</el-button>
              </div>
            </div>
            <!-- 手写学校END -->
          </el-form>
          <el-form
            :model="addchourses"
            :rules="chourserules"
            ref="addchourses"
            class="demo-ruleForm"
            @submit.native.prevent
          >
            <!-- 手写课程START -->
            <div class="up-class" v-show="upcourse == false && active == 1">
              <div class="share-box">
                <p class="share-title">编辑课程</p>
                <div class="share-prefix">学校*</div>
                <div>{{upload.school}}</div>
                <div class="share-prefix">课程*</div>
                <el-form-item prop="name">
                  <el-input v-model="addchourses.name" placeholder="请填写您的课程名称"></el-input>
                </el-form-item>
              </div>
              <div class="nextcenter">
                <el-button style="margin-top: 20px;" @click="upcourseShow">取消</el-button>
                <el-button
                  style="margin-top: 20px;"
                  @click="addCourseNext('addchourses')"
                  type="primary"
                >添加课程</el-button>
              </div>
            </div>
            <!-- 手写课程END -->
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
      uploadNum: 1,
      active: 0,
      formData: new FormData(),
      // 选择课程下一步
      seletchourse: {
        name: "",
        UniversityTestId: 0
      },
      addchourses: {
        name: "",
        UniversityTestId: 0
      },
      chourserules: {
        name: [{ required: true, message: "请填写课程名称", trigger: "blur" }]
      },
      ruleForm: {
        name: ""
      },
      addrules: {
        name: [{ required: true, message: "请填写学校名称", trigger: "blur" }]
      },
      // 订单标题
      orderTitle: "XXX的题库集",
      // 表单容器
      upload: {
        school: "",
        schoolId: 0,
        course: "",
        courseId: 0,
        type: "",
        week: 1,
        topic: "",
        topicUrl: "",
        answer: "",
        answerUrl: ""
      },
      rules: {
        school: [
          { required: true, message: "请填写学校名称", trigger: "change" }
        ],
        course: [
          { required: true, message: "请填写课程名称", trigger: "change" }
        ],
        type: [{ required: true, message: "请选择类型", trigger: "change" }],
        week: [{ required: true, message: "请选择周", trigger: "change" }],
        topic: [{ required: false, message: "请输入题目", trigger: "blur" }],
        topicUrl: [{ required: false, message: "请上传题目图片" }],
        answer: [{ required: false, message: "请输入答案", trigger: "blur" }],
        answerUrl: [
          { required: true, message: "请上传答案图片", trigger: "change" }
        ]
      },
      // 编辑表单容器
      editupload: {
        school: "",
        schoolId: "",
        course: "",
        courseId: "",
        type: "",
        week: "",
        topic: "",
        topicUrl: "",
        answer: "",
        answerUrl: ""
      },
      editrules: {
        school: [
          { required: true, message: "请填写学校名称", trigger: "change" }
        ],
        course: [
          { required: true, message: "请填写课程名称", trigger: "change" }
        ],
        type: [{ required: true, message: "请选择类型", trigger: "change" }],
        week: [{ required: true, message: "请选择周", trigger: "change" }],
        topic: [{ required: false, message: "请输入题目", trigger: "blur" }],
        topicUrl: [{ required: false, message: "请上传题目图片" }],
        answer: [{ required: false, message: "请输入答案", trigger: "blur" }],
        answerUrl: [
          { required: true, message: "请上传答案图片", trigger: "change" }
        ]
      },
      school: "",
      schooldisabled: true,
      course: "",
      coursedisabled: true,
      type: "",
      typeoptions: [
        {
          label: "Assignment"
        },
        {
          label: "Quzi"
        },
        {
          label: "Exam"
        },
        {
          label: "Discussion"
        }
      ],
      week: "",
      weekoptions: [
        {
          label: 1
        }
      ],
      // 选择学校和填写学校的显示隐藏
      upschool: true,
      // 选择课程和填写课程的显示隐藏
      upcourse: true,
      fileList: [
          {
            name: 'food.jpeg', 
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }
        ],
      // 题目名称
      topic: "",
      // 题目区域的显示隐藏
      topictitleshow: true,
      // 答案图片的验证
      doupload: false,
      answerArray: [
        // {
        //   classInfoContentTest: {
        //     name: "斤斤计较",
        //     NameUrl: "题目URL",
        //     Contents: "1的N次方",
        //     Url: "答案URL",
        //     ClassWeek: 1,
        //     ClassWeekType: "Assignment",
        //     ClassTestId: 1,
        //     ClassInfoTestId: 1,
        //     UniversityTestId: 1,
        //     ClientId: 1,
        //     id: 5,
        //     createTime: "2020-01-19T00:00:00"
        //   },
        //   universityname: "ABS",
        //   classname: "xuexi",
        //   show: false
        // }
      ],
      // 订单ID
      classInfoTestId: 0,
      // 答案图片
      answerFile:[],
      imgSite: this.URLport.serverPath + "/File/UploadImg",
      myHeaders: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
  },
  created: function() {
    const _this = this;
    // _this.serchingWeek();
    // _this.serchingAnswer();
  },
  methods: {
    // 添加学校显示
    upschoolShow() {
      const _this = this;
      _this.upschool = !_this.upschool;
      // _this.school = "";
      // _this.course = "";
    },
    // 添加课程显示
    upcourseShow() {
      const _this = this;
      _this.upcourse = !_this.upcourse;
      // _this.course = "";
    },
    // 上一步
    steplast() {
      this.active--;
      if (this.active <= 2) {
        this.upcourse = true;
        this.upschool = true;
      }
    },
    // 选择学校下一步
    schoolNext(upload) {
      const _this = this;
      _this.active = 1;
      // _this.$refs[upload].validateField("school", errMsg => {
      //   if (errMsg) {
      //   } else {
      //     _this.active = 1;
      //   }
      // });
    },
    // 新增学校下一步
    addSchoolNext(ruleForm) {
      const _this = this;
      _this.ruleForm.name = _this.ruleForm.name.trim();
      _this.$refs[ruleForm].validate(valid => {
        if (valid) {
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/UniversityTest/Add`,
              async: false,
              data: _this.ruleForm,
              xhrFields: {
                withCredentials: true
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            .then(function(res) {
              console.log(res);
              if (res.data.status == 1) {
                _this.upload.school = res.data.data.name;
                _this.upload.schoolId = res.data.data.id;
                _this.active = 1;
                _this.upcourse = false;
                console.log(_this.upload);
                _this.$message({
                  message: "添加学校成功",
                  type: "success"
                });
              } else {
                _this.$message({
                  message: res.data.msg,
                  type: "error"
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          console.log("错误");
          return false;
        }
      });
    },
    // 选择课程下一步
    courseNext(upload) {
      const _this = this;
      var seletchourse = {};
      seletchourse.name = _this.course;
      seletchourse.UniversityTestId = _this.upload.schoolId;
      seletchourse.id = _this.upload.courseId;
      _this.active = 2;
      _this
        .axios({
          method: "post",
          url: `${_this.URLport.serverPath}/ClassTest/Add`,
          async: false,
          data: seletchourse,
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          console.log(res);
          if (res.data.status == 1) {
            _this.upload.course = res.data.data.classtest.name;
            _this.active = 2;
            _this.orderTitle = res.data.data.classInfoTest.name;
            _this.classInfoTestId = res.data.data.classInfoTest.id;
            _this.serchingWeek(_this.classInfoTestId);
            _this.serchingAnswer(_this.classInfoTestId);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      _this.$refs[upload].validateField("course", errMsg => {
        if (errMsg) {
        } else {
        }
      });
    },
    // 新增课程下一步
    addCourseNext(addchourses) {
      const _this = this;
      _this.addchourses.name = _this.addchourses.name.trim();
      _this.addchourses.UniversityTestId = _this.upload.schoolId;
      _this.$refs[addchourses].validate(valid => {
        if (valid) {
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/ClassTest/Add`,
              async: false,
              data: _this.addchourses,
              xhrFields: {
                withCredentials: true
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            .then(function(res) {
              console.log(res);
              if (res.data.status == 1) {
                _this.upload.course = res.data.data.classtest.name;
                _this.active = 2;
                _this.orderTitle = res.data.data.classInfoTest.name;
                _this.classInfoTestId = res.data.data.classInfoTest.id;
                _this.serchingWeek(_this.classInfoTestId);
                _this.serchingAnswer(_this.classInfoTestId);
                _this.$message({
                  message: "添加课程成功",
                  type: "success"
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          console.log("错误");
          return false;
        }
      });
    },
    // 立即上传
    stepupload(upload) {
      const _this = this;
      _this.formData.Name = _this.upload.topic;
      _this.formData.NameUrl = _this.upload.topicUrl;
      _this.formData.UniversityTestId = _this.upload.schoolId;
      _this.formData.Url = _this.upload.answerUrl;
      _this.formData.Contents = _this.upload.answer;
      _this.formData.ClassInfoTestId = _this.classInfoTestId;
      _this.formData.ClassTestId = _this.upload.courseId;
      _this.formData.ClassWeek = _this.upload.week;
      _this.formData.ClassWeekType = _this.upload.type;
      console.log(_this.formData);
      if (_this.doupload == true) {
        _this.rules.answerUrl = [];
        _this.$refs["uploadAnswerUrl"].clearValidate();
      }
      _this.$refs[upload].validate(valid => {
        if (valid) {
          // _this
          //   .axios({
          //     method: "post",
          //     url: `${_this.URLport.serverPath}/ClassInfoContentTest/Add`,
          //     async: false,
          //     data: _this.formData,
          //     xhrFields: {
          //       withCredentials: true
          //     },
          //     headers: {
          //       Authorization: `Bearer ${localStorage.getItem("token")}`
          //     }
          //   })
          //   .then(function(res) {
          //     console.log(res);
          //     if (res.data.status == 1) {
          //       _this.$message({
          //         message: "添加答案成功",
          //         type: "success"
          //       });
          //     }
          //   })
          //   .catch(function(error) {
          //     console.log(error);
          //   });

          // _this.$refs.upload.submit();
          // var a = { label: "第" + 2 + "周"};
          // _this.weekoptions.push(a);
        } else {
          return false;
        }
      });
    },
    // 检索当前订单的周数量
    serchingWeek(classInfoTestId) {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/ClassInfoContentTest/Week`,
          async: false,
          params: {
            classInfoTestId: classInfoTestId
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          console.log(res);
          if (res.data.status == 1) {
            for (let i = 0; i < 2; i++) {
              for (let i = 2; i <= res.data.data.length + 1; i++) {
                const obj = {};
                obj.label = i;
                _this.weekoptions.push(obj);
              }
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 检索答案的方法
    serchingAnswer(classInfoTestId) {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/ClassInfoContentTest/ClassInfoContentTests`,
          async: false,
          params: {
            classInfoTestId: classInfoTestId
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          console.log(res);
          if (res.data.status == 1) {
            _this.answerArray = res.data.data;
            for (var i = 0; i < _this.answerArray.length; i++) {
              _this.$set(_this.answerArray[i], "show", false);
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 题目图片
    topicHandlebeforeupload(file) {
      const _this = this;
      console.log(file);
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    topicHandlePreview() {},
    topicHandleRemove() {},
    // 答案图片
    // 文件删除后
    answerHandleRemove(upload) {
      const _this = this;
      _this.doupload = false;
      _this.rules.answerUrl = [{ required: true, message: "请上传答案图片" }];
      _this.$refs["upload"].validateField("answerUrl");
    },
    // 文件上传成功之后
    answerHandlePreview(res, file, fileList) {
      const _this = this;
      _this.upload.answerUrl = res.data.data.file;
      console.log(res);
      console.log(_this.upload.answerUrl);
    },
    // 文件上传之前
    answerHandlebeforeupload(file) {
      const _this = this;
      console.log(file);
      _this.answerFile = file;
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 文件状态有变化时
    answerHandleChange(file) {
      const _this = this;
      console.log(file);
      _this.fileList[0].name = file.name;
      _this.fileList[0].url = file.url;
      if (file) {
        _this.doupload = true;
        _this.$refs["uploadAnswerUrl"].clearValidate();
      } else {
        _this.doupload = false;
        _this.$refs["upload"].validateField("answerUrl");
      }
      // // _this.$refs["upload"].validateField("answerUrl");
      // // _this.rules.answerUrl = [{ required: false, message: "请上传图片" }];
      // _this.$refs["uploadAnswerUrl"].clearValidate();
    },
    // 学校输入框触发
    querySearch(queryString, cb) {
      const _this = this;
      var valuestr = queryString.trim();
      var patt = /^[\s]*$/; //以空格开头并且已空格结尾，中间多次或者零次空格
      clearTimeout(_this.timeout);
      if (valuestr.length == 0) {
        console.log("空格");
      } else {
        _this.timeout = setTimeout(() => {
          if (queryString.length >= 1) {
            var results = [];
            _this
              .axios({
                method: "get",
                url: `${_this.URLport.serverPath}/UniversityTest/UniversityTests`,
                async: false,
                params: {
                  name: valuestr
                },
                xhrFields: {
                  withCredentials: true
                }
              })
              .then(function(res) {
                if (res.data.data.length > 0) {
                  for (var i = 0; i < 10; i++) {
                    if (res.data.data[i]) {
                      results.push({
                        value: res.data.data[i].name,
                        type: "大学",
                        id: res.data.data[i].id
                      });
                    }
                  }
                } else {
                  // results.push({ value: "没有找到对应的学校" });
                }

                cb(results);
              })
              .catch(function(error) {
                console.log(error);
              });
          }
        }, 1000 * Math.random());
      }
    },
    // 选择学校下拉框其中一条学校触发
    SchoolHandleSelectauto(value) {
      const _this = this;
      _this.upload.schoolId = value.id;
      _this.upload.school = value.value;
      _this.schooldisabled = false;
    },
    // 离开学校输入框焦点触发
    schoolBlur(event) {
      const _this = this;
      if (_this.upload.school) {
        _this.school = _this.upload.school;
      } else {
        _this.school = "";
      }
    },
    // 选择课程
    courseQuerySearch(queryString, cb) {
      const _this = this;
      var valuestr = queryString.trim();
      var patt = /^[\s]*$/; //以空格开头并且已空格结尾，中间多次或者零次空格
      console.log(valuestr);
      clearTimeout(_this.timeout);
      if (valuestr.length == 0) {
        console.log("空格");
      } else {
        _this.timeout = setTimeout(() => {
          if (queryString.length >= 1) {
            var results = [];
            _this
              .axios({
                method: "get",
                url: `${_this.URLport.serverPath}/ClassTest/ClassTests`,
                async: false,
                params: {
                  name: valuestr,
                  universityTestId: _this.upload.schoolId
                },
                xhrFields: {
                  withCredentials: true
                }
              })
              .then(function(res) {
                if (res.data.data.length > 0) {
                  for (var i = 0; i < 10; i++) {
                    if (res.data.data[i]) {
                      results.push({
                        value: res.data.data[i].name,
                        type: "课程",
                        id: res.data.data[i].id
                      });
                    }
                  }
                } else {
                  // results.push({ value: "没有找到对应的学校" });
                }

                cb(results);
              })
              .catch(function(error) {
                console.log(error);
              });
          }
        }, 1000 * Math.random());
      }
    },
    // 选择下拉框中其中的一条课程触发
    courseHandleSelectauto(value) {
      const _this = this;
      _this.upload.courseId = value.id;
      _this.upload.course = value.value;
      _this.coursedisabled = false;
    },
    // 离开课程输入框焦点触发
    courseBlur() {
      const _this = this;
      if (_this.upload.course) {
        _this.course = _this.upload.course;
      } else {
        _this.course = "";
      }
    },
    // 打开编辑框
    editAnswerShow(item) {
      const _this = this;
      item.show = !item.show;
    },
    editstepupload() {
      const _this = this;
    },
    orderTitleMeth() {}
  }
};
</script>