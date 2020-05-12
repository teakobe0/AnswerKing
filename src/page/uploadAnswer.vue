<style>
#uploadAnswer {
  position: relative;
  padding-bottom: 276px;
}
.ua-con {
  margin-top: 80px;
  /* height: 1000px; */
}
.ua-middle {
  width: 1300px;
  margin: 0 auto;
  padding: 50px 0 90px 0;
}
.up-upload {
}
.up-upload-back {
  width: 100%;
  background-color: #fafbff;
}
/* 共用样式 */
.share-box {
  width: 1300px;
  /* padding: 20px; */
  margin-top: 20px;
  /* box-shadow: 0 0 6px rgba(0, 0, 0, 0.3); */
  /* background-color: #fff; */
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
  text-align: left;
  color: #303a3d;
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 27px;
}
.share-subtitle {
  font-size: 21px;
  color: #3e5ca5;
  font-weight: 700;
  margin-bottom: 32px;
}
.share-subtitle .modification {
  position: relative;
  left: 10px;
  margin-bottom: -3px;
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
  /* width: 1260px;
  padding: 20px;
  background-color: #fff; */
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
  width: 620px;
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
  /* padding-bottom: 10px; */
}
.upload-topic {
  margin-top: 5px;
  overflow: hidden;
}
.up-answer-img {
  width: 620px;
  margin-left: 20px;
  float: right;
}
.up-answer-img .el-form-item__content {
  /* line-height: 25px !important; */
}
.up-answer-img .el-upload-list__item {
  margin-top: 0px !important;
}
.upload-img {
  margin-top: 12px;
}
.upload-topic .el-upload {
  float: right !important;
  margin-bottom: 9px !important;
}
/* 编辑答案结束 */
/* 展示答案开始 */
.showAnswer .el-input__inner {
  height: 50px !important;
}
.SA-con {
  width: 1260px;
  padding: 20px 20px 20px 20px;
  margin-bottom: 10px;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 6px rgba(239, 239, 239, 0.3);
  border-radius: 2px;
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
  text-align: right;
}
#uploadAnswer .el-form-item {
  margin-bottom: 0px !important;
}
/* 展示订单开始 */
.up-upload .el-input__inner {
  height: 50px !important;
}
.SA-title {
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 20px;
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
  color: #5051ad;
  vertical-align: text-bottom;
  font-size: 16px;
  line-height: 40px;
}
.SA-topic {
  padding-top: 12px;
  float: left;
  width: 620px;
  vertical-align: text-bottom;
  position: relative;
}
.SA-topic p {
  float: left;
  width: 550px;
  height: 45px;
  line-height: 22px;
  color: #2d3639;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2; /*限制在一个块元素显示的文本的行数*/
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.SA-topic img {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 15px;
  right: 0px;
  cursor: pointer;
  border: 1px solid #f0f0f0;
}
.SA-topic img:hover {
  border: 1px solid #409efe;
}
.SA-answer {
  padding-top: 12px;
  float: right;
  width: 620px;
  position: relative;
}
.SA-answer p {
  float: left;
  width: 550px;
  height: 45px;
  line-height: 22px;
  color: #2a2a2a;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2; /*限制在一个块元素显示的文本的行数*/
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.SA-answer img {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 15px;
  right: 0px;
  cursor: pointer;
  border: 1px solid #f0f0f0;
}
.SA-answer img:hover {
  border: 1px solid #409efe;
}
.SA-edit {
  position: absolute;
  top: 30.5px;
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
  width: 100%;
  /* overflow: hidden; */
  position: relative;
}
/* 展示订单结束 */
.el-scrollbar__wrap {
  overflow-y: scroll !important;
  overflow-x: scroll !important;
}
.demo-title {
  float: left;
  position: absolute;
  top: 1px;
  left: 31px;
}
.demo-title .el-input__inner {
  border: none !important;
  height: 30px !important;
  font-size: 21px !important;
  padding: 0px !important;
  background-color: #fafbff !important;
  border-bottom: 1px solid #3e5ca5 !important;
  padding-bottom: 2px !important;
  border-radius: 0px !important;
}
.demo-title .el-form-item__content {
  line-height: 0px !important;
}
.share-subtitle-ti {
  font-size: 21px;
  height: 30px;
  color: #3e5ca5;
  font-weight: 700;
  margin-bottom: 32px;
  position: relative;
}
.share-subtitle-ti .subtitle-span {
  border-bottom: 1px solid #3e5ca5;
  padding-bottom: 2px;
  position: relative;
  left: 31px;
}
.share-subtitle-ti .modification {
  position: absolute;
  top: 0px;
  margin-left: 10px;
}
.up-answer-title {
  height: 50px;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 20px;
}
.up-answer-week .el-input__inner {
  border: none !important;
  color: #2e8bff !important;
}
.up-answer-type .el-input__inner {
  border: none !important;
  color: #2e8bff !important;
}
.up-answer-week {
  float: left;
}
.up-answer-week .el-input__inner {
  padding: 0;
}
.up-answer-type {
  float: left;
}
.up-answer-fn {
  float: right;
  line-height: 50px;
}
/* 添加一个新的题目按钮 */
.addTopic p {
  width: 100%;
  height: 100px;
  background-color: #fff;
  text-align: center;
  line-height: 100px;
  color: #4b58b6;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  /* margin-bottom: 20px;
  margin-top: 20px; */
  box-shadow: 0 0 6px rgba(239, 239, 239, 0.3);
  border-radius: 2px;
}
.addTopic p:hover {
  color: #ffcd1f;
}
.addTopic p:active {
  color: #ffce1fe8;
}
/* 确认创建题库 */
.affirmQb {
  width: 100%;
  height: 100px;
  margin-top: 20px;
  background-color: #409efe;
  text-align: center;
  line-height: 100px;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  border-radius: 2px;
}
.affirmQb:hover {
  background-color: #ffcd1f;
  color: #000;
}
.affirmQb:active {
  background-color: #ffce1fe8;
}
/* 页面顶部的确认创建题库 */
.miniAffirmQb {
  width: 100px;
  height: 40px;
  background-color: #409efe;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 2px;
}
.miniAffirmQb:hover {
  background-color: #ffcd1f;
  color: #000;
}
.miniAffirmQb:active {
  background-color: #ffce1fe8;
}
.answer-box {
  width: 1260px;
  padding: 20px;
  margin-top: 20px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 0 6px rgba(239, 239, 239, 0.3);
}
/* 图片悬窗 */
.suspend-img {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 26, 26, 0.65);
  z-index: 999;
}
.suspend-img img {
  width: 800px;
  height: 800px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -400px;
  margin-top: -400px;
}
.suspend-img-re {
  position: relative;
  width: 800px;
  height: 800px;
  left: 50%;
  top: 50%;
  margin-left: -400px;
  margin-top: -400px;
}
.suspendClose {
  position: absolute;
  right: -100px;
  top: 40px;
  color: #fff;
  cursor: pointer;
  font-size: 30px;
}
/* 顶部跳转和底部跳转 */
.page-component-up {
  background-color: #fff;
  position: fixed;
  right: 100px;
  bottom: 150px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  z-index: 5;
}
.page-component-ups {
  background-color: #fff;
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  z-index: 5;
  text-decoration: none;
}
.page-component-ups i {
  color: #409eff;
  display: block;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
}
.page-component-ups i:hover {
  color: red;
}
.page-component-up i:hover {
  color: red;
}
.page-component-up i {
  color: #409eff;
  display: block;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
}
.showAnswer-week {
  margin-top: 10px;
  cursor:pointer;
  background: #fff;
  padding: 0 20px;
  line-height: 40px;
}
.showAnswer-week:hover {
  background: #f0f0f0;
}
.showAnswer-week:hover span {
  color: #ffcd1f;
}
.showAnswer-week:hover i {
  color: #ffcd1f;
}
.showAnswer-week span {
  color:#409efe;
}
.showAnswer-week i {
  float: right;
  margin-top: 12px;
  color:#409efe;
}
</style>

<template>
  <div id="uploadAnswer">
    <homeNav></homeNav>
    <UAQ></UAQ>
    <div class="ua-con" v-show="this.$store.state.logo.uaShow">
      <el-steps
        :active="active"
        align-center
        finish-status="success"
        style="width:1000px;margin:120px auto;margin-bottom: 40px;"
      >
        <el-step title="编辑学校" icon="el-icon-edit"></el-step>
        <el-step title="编辑课程" icon="el-icon-s-order"></el-step>
        <el-step title="编辑答案" icon="el-icon-upload"></el-step>
      </el-steps>
      <div class="up-upload-back">
        <div class="ua-middle">
          <div class="orderTitle" v-show="active == 2">
            <div class="share-subtitle">
              <i class="el-icon-school" style="margin-right:10px;vertical-align: bottom;"></i>
              {{upload.school}}
            </div>
            <div class="share-subtitle">
              <i class="el-icon-school" style="margin-right:10px;vertical-align: bottom;"></i>
              {{upload.course}}
            </div>
            <div class="share-subtitle-ti">
              <i class="el-icon-school" style="margin-right:10px;position: absolute;top:5px;"></i>
              <span class="subtitle-span" v-show="subtitle == false">
                {{orderInfo.name}}
                <el-button
                  class="modification"
                  type="mini"
                  @click="modification"
                  v-show="subtitle == false"
                >修改</el-button>
              </span>
              <el-form
                v-show="subtitle == true"
                :model="orderInfo"
                :rules="orderInforules"
                ref="orderInfo"
                class="demo-title"
                @submit.native.prevent
              >
                <el-form-item prop="name" style="float: left;">
                  <el-input
                    v-model="orderInfo.name"
                    placeholder="请输入标题(必填)"
                    style="width:1269px;"
                    @change="orderTitleMeth(orderInfo)"
                  ></el-input>
                </el-form-item>
              </el-form>
            </div>
            <div class="miniAffirmQb" @click="affirmQb">确认创建</div>
          </div>
          <div class="addTopic" @click="addTopic" v-show="active == 2">
            <p v-show="addTopicShow">+&nbsp;添加一个新的题目</p>
          </div>
          <!-- 顶部上传 -->
          <div class="up-upload">
            <el-form
              :model="upload"
              :rules="rules"
              ref="upload"
              class="demo-ruleForm"
              @submit.native.prevent
            >
              <!-- 选择学校START -->
              <div
                class="up-school"
                v-show="upschool == true && active == 0 && $route.query.type != 1"
              >
                <div class="share-box">
                  <p class="share-title">选择上传内容所属的大学</p>
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
                      style="width:1300px;"
                    >
                      <template slot-scope="{ item }">
                        <div
                          style="width: 100%;height: 34px;display: block;"
                          v-show="item.type != null"
                        >
                          <span style="color:#878787;float:left;">{{item.value}}</span>
                          <span style="color:#878787;float:right;">{{item.type}}</span>
                        </div>
                        <div v-show="item.type == null">没有找到对应的学校</div>
                      </template>
                    </el-autocomplete>
                  </el-form-item>
                </div>
                <div class="nextcenter">
                  <span
                    style="margin-top: 20px;margin-right:20px;text-decoration:underline;color:#a2a2a2;cursor:pointer;"
                    @click="upschoolShow"
                  >没有找到?点击这里添加一所新的学校</span>
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
              <div
                class="up-class"
                v-show="upcourse == true && active == 1  && $route.query.type != 2"
              >
                <div class="share-box">
                  <div class="share-subtitle">
                    <i class="el-icon-school" style="margin-right:10px;vertical-align: bottom;"></i>
                    {{upload.school}}
                  </div>
                  <div class="share-title">选择上传所属的课程</div>
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
                      style="width:1300px;"
                    >
                      <template slot-scope="{ item }">
                        <div
                          style="width: 100%;height: 34px;display: block;"
                          v-show="item.type != null"
                        >
                          <span style="color:#878787;float:left;">{{item.value}}</span>
                          <span style="color:#878787;float:right;">{{item.type}}</span>
                        </div>
                        <div v-show="item.type == null">没有找到对应的课程</div>
                      </template>
                    </el-autocomplete>
                  </el-form-item>
                </div>
                <div class="nextcenter">
                  <el-button style="margin-top: 20px;" @click="steplast">上一步</el-button>
                  <el-button
                    style="margin-top: 20px;"
                    @click="upcourseShow"
                    title="没有找到?点击这里添加一门新的课程"
                  >添加课程</el-button>
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
              <div class="up-answer" v-if="active == 2 && upAnswerShow">
                <div class="answer-box">
                  <div class="up-answer-title">
                    <div class="up-answer-week">
                      <el-form-item prop="week">
                        <el-select
                          v-model="upload.week"
                          placeholder="请选择当前课程所在的周"
                          style="width:80px;"
                        >
                          <el-option
                            v-for="item in weekoptions"
                            :key="item.label"
                            :label="'第'+ item.label + '周'"
                            :value="item.label"
                          >
                            <span>第{{item.label}}周</span>
                          </el-option>
                          <!-- <div>
                            <el-button type="mini" @click="addWeek" style="margin-top:6px;margin-left:11px;">添加</el-button>
                          </div>-->
                        </el-select>
                      </el-form-item>
                    </div>
                    <div class="up-answer-type">
                      <el-form-item prop="type">
                        <el-select
                          v-model="upload.type"
                          placeholder="请选择当前课程的类型"
                          style="width:173px;"
                        >
                          <el-option
                            v-for="item in typeoptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.label"
                          ></el-option>
                        </el-select>
                      </el-form-item>
                    </div>
                    <div class="up-answer-fn">
                      <el-button size="small" @click="topicCancel" title="隐藏题目">取消</el-button>
                      <el-button type="primary" size="small" @click="stepupload('upload')">保存题目</el-button>
                    </div>
                  </div>

                  <div class="up-answer-topic">
                    <div class="topic-con">
                      <el-form-item prop="topic">
                        <el-input v-model="upload.topic" placeholder="请输入您的题目名称(选填)"></el-input>
                      </el-form-item>
                      <el-form-item prop="topicUrl" ref="uploadTopicUrl">
                        <el-upload
                          class="upload-topic"
                          ref="uploadTopicUrl"
                          :action="imgSite"
                          :headers="myHeaders"
                          :on-success="topicHandleSuccess"
                          :on-remove="topicHandleRemove"
                          :before-upload="topicHandlebeforeupload"
                          :file-list="topicfileList"
                          :auto-upload="true"
                          :limit="uploadNum"
                          :data="{classInfoId:this.classInfoId}"
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
                    <el-form-item prop="answer">
                      <el-input v-model="upload.answer" placeholder="请输入您的答案内容(选填)"></el-input>
                    </el-form-item>
                    <el-form-item prop="answerUrl" ref="uploadAnswerUrl">
                      <el-upload
                        class="upload-topic"
                        ref="addAnswerUpload"
                        :action="imgSite"
                        :headers="myHeaders"
                        :on-success="answerHandleSucceed"
                        :on-remove="answerHandleRemove"
                        :on-change="answerHandleChange"
                        :before-upload="answerHandlebeforeupload"
                        :file-list="answerfileList"
                        :auto-upload="true"
                        :limit="uploadNum"
                        :data="{classInfoId:this.classInfoId}"
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
                          style="margin-left:240px;color:#9c9c9c;display: inline-block;line-height: 0px;"
                        >每次只能上传1张jpg/png的图片，且不超过2MB</i>
                      </el-upload>
                    </el-form-item>
                  </div>
                </div>
                <!-- <div class="nextcenter">
                  <el-button style="margin-top: 20px;" @click="steplast" v-show="lastStep">上一步</el-button>
                </div>-->
              </div>
              <!-- 编辑答案END -->
            </el-form>
            <!-- 手写学校START -->
            <el-form
              :model="ruleForm"
              :rules="addrules"
              ref="ruleForm"
              class="demo-ruleForm"
              @submit.native.prevent
            >
              <div class="up-school" v-show="upschool == false && active == 0">
                <div class="share-box">
                  <p class="share-title">添加一所新的大学</p>
                  <el-form-item prop="name">
                    <el-input
                      v-model="ruleForm.name"
                      placeholder="输入您想要添加的大学名称,例如University of chicago"
                    ></el-input>
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
            <!-- 手写课程START -->
            <el-form
              :model="addchourses"
              :rules="chourserules"
              ref="addchourses"
              class="demo-ruleForm"
              @submit.native.prevent
            >
              <div class="up-class" v-show="upcourse == false && active == 1 ">
                <div class="share-box">
                  <div class="share-subtitle">
                    <i class="el-icon-school" style="margin-right:10px;vertical-align: bottom;"></i>
                    {{upload.school}}
                  </div>
                  <div class="share-title">添加一门新的课程</div>
                  <el-form-item prop="name">
                    <el-input v-model="addchourses.name" placeholder="输入您想要添加的课程名称,例如Photography"></el-input>
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

            <!-- 修改学校 -->
            <el-form
              :model="editruleForm"
              :rules="ediaddtrules"
              ref="editruleForm"
              class="demo-ruleForm"
              @submit.native.prevent
            >
              <div class="up-school" v-show="$route.query.type == 1">
                <div class="share-box">
                  <p class="share-title">修改一所学校名称</p>
                  <el-form-item prop="name">
                    <el-input v-model="editruleForm.name" placeholder="请填写您的学校名称"></el-input>
                  </el-form-item>
                </div>
                <div class="nextcenter" v-show="$route.query.type == 1">
                  <router-link
                    to="/personalData/award"
                    style="text-decoration: none;color:#000;display: inline-block;margin-top: 20px;margin-right:10px;"
                  >
                    <el-button>取消</el-button>
                  </router-link>
                  <el-button
                    style="margin-top: 20px;"
                    @click="editSchoolNext('editruleForm',editruleForm)"
                    type="primary"
                  >修改学校</el-button>
                </div>
              </div>
              <!-- 修改学校END -->
            </el-form>
            <!-- 修改课程START -->
            <el-form
              :model="editchourses"
              :rules="editchourserules"
              ref="editchourses"
              class="demo-ruleForm"
              @submit.native.prevent
            >
              <div class="up-class" v-show="$route.query.type == 2">
                <div class="share-box">
                  <div class="share-subtitle">
                    <i class="el-icon-school" style="margin-right:10px;vertical-align: bottom;"></i>
                    {{editchourses.school}}
                  </div>
                  <p class="share-title">修改一门课程名称</p>
                  <el-form-item prop="name">
                    <el-input v-model="editchourses.name" placeholder="请填写您的课程名称"></el-input>
                  </el-form-item>
                </div>
                <div class="nextcenter">
                  <router-link
                    to="/personalData/award"
                    style="text-decoration: none;color:#000;display: inline-block;margin-top: 20px;margin-right:10px;"
                  >
                    <el-button>取消</el-button>
                  </router-link>

                  <el-button
                    style="margin-top: 20px;"
                    @click="editCourseNext('editchourses',editchourses)"
                    type="primary"
                  >修改课程</el-button>
                </div>
              </div>
              <!-- 修改课程END -->
            </el-form>
          </div>
          <!-- 展示创建过的订单开始 -->
          <div v-show="active == 2">
            <div>
              <div class="showAnswer" v-for="(item,index) in answerArray">
                <div class="showAnswer-week" @click="fold(item,index)">
                  <div>
                    <span>Week{{item.week}}&nbsp;-&nbsp;{{item.listLength}}</span>
                    <i class="el-icon-caret-bottom" v-show="item.shows == false"></i>
                    <i class="el-icon-caret-top" v-show="item.shows == true"></i>
                  </div>
                  
                </div>

                <div v-for="(items,indexs) in item.list" v-show="item.shows">
                  <div class="SA-con">
                    <div class="SA-title">
                      <span
                        class="SA-week"
                        v-show="active == 2 && items.show == false"
                      >第{{items.classWeek}}周&nbsp;-&nbsp;{{items.classWeekType}}</span>
                      <div class="up-answer-week">
                        <el-select
                          v-show="active == 2 && items.show == true"
                          v-model="items.classWeek"
                          placeholder="请选择当前课程所在的周"
                          style="width:80px;"
                        >
                          <el-option
                            v-for="item in weekoptions"
                            :key="item.label"
                            :label="'第'+ item.label + '周'"
                            :value="item.label"
                          ></el-option>
                        </el-select>
                      </div>
                      <div class="up-answer-type">
                        <el-select
                          v-show="active == 2 && items.show == true"
                          v-model="items.classWeekType"
                          placeholder="请选择当前课程的类型"
                          style="width:173px;"
                        >
                          <el-option
                            v-for="item in typeoptions"
                            :key="item.label"
                            :label="item.label"
                            :value="item.label"
                          ></el-option>
                        </el-select>
                      </div>
                      <div class="SA-edit">
                        <i
                          class="el-icon-circle-check edits"
                          v-show="active == 2 && items.show == true"
                          title="保存题目"
                          @click="editstepupload(items)"
                        ></i>
                        <i class="el-icon-edit edits" @click="editAnswerShow(items)" title="编辑"></i>
                        <i
                          class="el-icon-delete delete"
                          @click="editAnswerDelete(items)"
                          title="删除"
                        ></i>
                      </div>
                    </div>
                    <div v-show="active == 2 && items.show == false">
                      <div class="SA-topic">
                        <span style="color:#ccc;margin-bottom:5px;display: block;">题目名称</span>
                        <p v-show="items.name == ''" style="color:#2a2a2a;">[暂无]</p>
                        <p v-show="items.name != ''">{{items.name}}</p>
                        <img
                          :src="items.topicImg"
                          alt
                          @click="suspendImg(items.topicImg)"
                          v-show="items.topicImg != '' "
                        />
                      </div>

                      <div class="SA-answer">
                        <span style="color:#ccc;margin-bottom:5px;display: block;">答案内容</span>
                        <p v-show="items.contents == ''" style="color:#2a2a2a;">[暂无]</p>
                        <p v-show="items.contents != ''">{{items.contents}}</p>
                        <img
                          :src="items.answerImg"
                          alt
                          @click="suspendImg(items.answerImg)"
                          v-show="items.answerImg != '' "
                        />
                      </div>
                    </div>
                    <div v-show="active == 2 && items.show == true">
                      <div class="up-answer-topic">
                        <div class="topic-con">
                          <el-input
                            style="overflow-y: hidden;"
                            placeholder="请输入您的题目名称(选填)"
                            v-model="items.name"
                          ></el-input>
                          <!-- <el-input v-model="item.classInfoContent.name" placeholder="请输入您的题目名称(选填)"></el-input> -->
                          <el-upload
                            class="upload-topic"
                            ref="answerArray"
                            :action="imgSite"
                            :headers="myHeaders"
                            :on-success="(response, file, fileList)=>{return editTopicHandleSuccess(response, file, fileList,index,indexs)}"
                            :on-remove="(file, fileList)=>{return editTopicHandleRemove(file, fileList, index,items.id,items.nameUrl,indexs)}"
                            :on-change="editTopicHandleChange"
                            :before-upload="editTopicHandlebeforeupload"
                            :file-list="items.topicUrlList"
                            :auto-upload="true"
                            :limit="uploadNum"
                            list-type="picture"
                            :data="{classInfoId:items.classInfoId}"
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
                        <el-input
                          style="overflow-y: hidden;"
                          placeholder="请输入您的答案内容(选填)"
                          v-model="items.contents"
                        ></el-input>
                        <el-upload
                          class="upload-topic"
                          ref="answerArray"
                          :action="imgSite"
                          :headers="myHeaders"
                          :on-success="(response, file, fileList,url)=>{return editAnswerHandlesuccess(response, file, fileList,index,indexs)}"
                          :on-remove="(file, fileList,id,url)=>{return editAnswerHandleRemove(file, fileList, index,items.id,items.url,indexs)}"
                          :on-change="editAnswerHandleChange"
                          :before-upload="editAnswerHandlebeforeupload"
                          :file-list="items.answerUrlList"
                          :auto-upload="true"
                          :limit="uploadNum"
                          list-type="picture"
                          :data="{classInfoId:items.classInfoId}"
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
                            style="margin-left:240px;color:#9c9c9c;display: inline-block;"
                          >每次只能上传1张jpg/png的图片，且不超过2MB</i>
                        </el-upload>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 编辑现有答案 -->
              </div>
            </div>
          </div>
          <!-- 展示创建过的订单结束 -->

          <div class="affirmQb" @click="affirmQb" id="UPdown" v-show="active == 2">
            <p>确认创建</p>
          </div>
        </div>
      </div>

      <!-- <div class="ClassesAdvertising" style="width:1160px;">
        <div>
          <p class="advertising-p1">没有找到您需要的吗？想得到更多的学习辅导服务吗？</p>
          <p class="advertising-p2">
            扫描二维码添加CourseWhale合作伙伴学业辅导的
            <b style="color:#3ccece;">客服微信</b>吧！任何学业问题统统解决！
          </p>
        </div>
        <img src="../assets/erweima.jpg" alt />
      </div>-->
      <div>
        <div class="page-component-up" @click="pageTop" v-show="topBottShow">
          <i class="el-icon-caret-top"></i>
        </div>
        <a href="#UPdown" class="page-component-ups" @click="pageBottom" v-show="topBottShow">
          <i class="el-icon-caret-bottom"></i>
        </a>
      </div>
      <div class="suspend-img" v-show="suspendimgShow">
        <div class="suspend-img-re">
          <img :src="suImg" alt />
          <div class="suspendClose el-icon-close" @click="CloseQuitBt"></div>
        </div>
      </div>
    </div>
    <homeFooter></homeFooter>
  </div>
</template>

<script type="es6">
import homeNav from "@/components/public/homeNav.vue";
import homeFooter from "@/components/public/homeFooter.vue";
import UAQ from "@/components/public/uploadAnswerFaq.vue";
export default {
  name: "uploadAnswer",
  components: {
    homeNav,
    homeFooter,
    UAQ
  },
  data() {
    return {
      subtitle: false,
      uploadNum: 1,
      active: 0,
      formData: {},
      editformData: {},
      // 选择课程下一步
      seletchourse: {
        name: "",
        UniversityId: 0
      },
      // 标题Model
      orderInfo: {
        name: "XXX的题库集"
      },
      // 标题的验证规则
      orderInforules: {
        name: [{ required: true, message: "请填写标题名称", trigger: "blur" }]
      },
      // 添加课程model
      addchourses: {
        name: "",
        UniversityId: 0
      },
      // 添加课程的验证规则
      chourserules: {
        name: [{ required: true, message: "请填写课程名称", trigger: "blur" }]
      },
      // 添加学校Model
      ruleForm: {
        name: ""
      },
      // 添加学校的验证规则
      addrules: {
        name: [{ required: true, message: "请填写学校名称", trigger: "blur" }]
      },
      // 修改学校model
      editruleForm: {
        name: ""
      },
      // 修改学校的验证规则
      ediaddtrules: {
        name: [{ required: true, message: "请填写学校名称", trigger: "blur" }]
      },
      // 修改课程model
      editchourses: {
        name: "",
        school: ""
      },
      // 修改课程的验证规则
      editchourserules: {
        name: [{ required: true, message: "请填写课程名称", trigger: "blur" }]
      },
      // 表单容器
      upload: {
        school: "",
        schoolId: 0,
        course: "",
        courseId: 0,
        type: "作业(Asssignment)",
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
          { required: false, message: "请上传答案图片", trigger: "change" }
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
          label: "作业(Asssignment)"
        },
        {
          label: "测验(Quiz)"
        },
        {
          label: "考试(Exam)"
        },
        {
          label: "讨论(Discussion)"
        }
      ],
      week: "",
      weekoptions: [
        {
          label:1
        }
      ],
      // 选择学校和填写学校的显示隐藏
      upschool: true,
      // 选择课程和填写课程的显示隐藏
      upcourse: true,
      editTopicFileList: [],
      editAnswerFileList: [],
      topicfileList: [],
      answerfileList: [],
      // 题目名称
      topic: "",
      // 题目区域的显示隐藏
      topictitleshow: true,
      // 答案图片的验证
      doupload: false,
      answerArray: [],
      // 订单ID
      classInfoId: 0,
      // 答案图片
      answerFile: [],
      imgSite: this.URLport.serverPath + "/File/UploadImg",
      myHeaders: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      clientId: 0,

      coursekong: {},
      schoolKong: {},
      orderKong: {},
      lastStep: true,
      // 新题目展开隐藏
      upAnswerShow: false,
      // 图片悬窗
      suspendimgShow: false,
      suImg: "",
      // 跳转顶部和底部的显示隐藏
      topBottShow: false,
      afterData: [],
      addTopicShow: true
    };
  },
  beforeRouteUpdate(to, from, next) {},
  created: function() {
    const _this = this;

    _this.gainpersonal();
    if (_this.$route.query.type == 1) {
      _this.active = 0;
      _this.cacheUniversityId(_this.$route.query.id);
    }
    if (_this.$route.query.type == 2) {
      _this.active = 1;
      _this.cacheCourseId(_this.$route.query.id);
    }
    if (_this.$route.query.type == 3) {
      _this.active = 2;
      _this.lastStep = false;
      _this.cacheAnswerId(_this.$route.query.id);
    }
  },
  mounted() {
    const _this = this;
    window.addEventListener("scroll", _this.handleScroll);
  },
  methods: {
    handleScroll() {
      const _this = this;
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 300) {
        _this.topBottShow = true;
      } else if (scrollTop == 0) {
        _this.topBottShow = false;
      }
    },
    // 获取个人信息
    gainpersonal: function() {
      const _this = this;
      if (localStorage.getItem("token")) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Client/GetClient`,
            async: false,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(function(res) {
            _this.clientId = res.data.data.id;
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        _this.$message({
          message: "请登录之后进行上传",
          type: "error"
        });
        _this.$router.push({ path: "/login" });
      }
    },
    // 添加学校显示
    upschoolShow() {
      const _this = this;
      _this.upschool = !_this.upschool;
    },
    // 添加课程显示
    upcourseShow() {
      const _this = this;
      _this.upcourse = !_this.upcourse;
    },
    // 上一步
    steplast() {
      const _this = this;
      this.active--;
      if (this.active <= 2) {
        _this.upload.course = "";
        _this.course = "";
        _this.coursedisabled = true;
        this.upcourse = true;
        this.upschool = true;
      }
    },
    // 选择学校下一步
    schoolNext(upload) {
      const _this = this;
      if (localStorage.getItem("token")) {
        _this.active = 1;
      } else {
        _this.$message({
          message: "请登录之后操作",
          type: "error"
        });
      }
    },
    // 新增学校下一步
    addSchoolNext(ruleForm) {
      const _this = this;
      if (localStorage.getItem("token")) {
        _this.ruleForm.name = _this.ruleForm.name.trim();
        _this.$refs[ruleForm].validate(valid => {
          if (valid) {
            _this
              .axios({
                method: "post",
                url: `${_this.URLport.serverPath}/University/Add`,
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
                if (res.data.status == 1) {
                  _this.upload.school = res.data.data.name;
                  _this.upload.schoolId = res.data.data.id;
                  _this.active = 1;
                  _this.upcourse = false;
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
      } else {
        _this.$message({
          message: "请登录之后操作",
          type: "error"
        });
      }
    },
    // 选择课程下一步
    courseNext(upload) {
      const _this = this;
      if (localStorage.getItem("token")) {
        var seletchourse = {};
        seletchourse.name = _this.course;
        seletchourse.UniversityId = _this.upload.schoolId;
        seletchourse.id = _this.upload.courseId;
        _this.active = 2;
        _this
          .axios({
            method: "post",
            url: `${_this.URLport.serverPath}/Class/Add`,
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
            if (res.data.status == 1) {
              _this.upload.course = res.data.data.clas.name;
              _this.active = 2;
              _this.orderInfo.Name = res.data.data.classInfo.name;
              _this.classInfoId = res.data.data.classInfo.id;
              _this.serchingAnswer(_this.classInfoId);
              _this.cacheAnswerId(_this.classInfoId);
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        _this.$message({
          message: "请登录之后操作",
          type: "error"
        });
      }
    },
    // 新增课程下一步
    addCourseNext(addchourses) {
      const _this = this;
      if (localStorage.getItem("token")) {
        _this.addchourses.name = _this.addchourses.name.trim();
        _this.addchourses.UniversityId = _this.upload.schoolId;
        _this.$refs[addchourses].validate(valid => {
          if (valid) {
            _this
              .axios({
                method: "post",
                url: `${_this.URLport.serverPath}/Class/Add`,
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
                  _this.upload.course = res.data.data.clas.name;
                  _this.upload.courseId = res.data.data.clas.id;
                  _this.active = 2;
                  _this.orderInfo.Name = res.data.data.classInfo.name;
                  _this.classInfoId = res.data.data.classInfo.id;
                  _this.serchingAnswer(_this.classInfoId);
                  _this.cacheAnswerId(_this.classInfoId);
                  _this.$message({
                    message: "添加课程成功",
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
      } else {
        _this.$message({
          message: "请登录之后操作",
          type: "error"
        });
      }
    },
    // 立即上传
    stepupload(upload) {
      const _this = this;
      if (localStorage.getItem("token")) {
        var formData = {};
        formData.Name = _this.upload.topic;
        formData.NameUrl = _this.upload.topicUrl;
        formData.UniversityId = _this.upload.schoolId;
        formData.Url = _this.upload.answerUrl;
        formData.Contents = _this.upload.answer;
        formData.ClassInfoId = _this.classInfoId;
        formData.ClassId = _this.upload.courseId;
        formData.ClassWeek = _this.upload.week;
        formData.ClassWeekType = _this.upload.type;
        _this.formData = formData;
        if (formData.Url == "" && formData.Contents == "") {
          _this.$message({
            message: "答案内容和图片请至少保证上传一项!",
            type: "error"
          });
        } else {
          _this.$refs[upload].validate(valid => {
            if (valid) {
              _this.addTopicShow = true;
              _this
                .axios({
                  method: "post",
                  url: `${_this.URLport.serverPath}/ClassInfoContent/Add`,
                  async: false,
                  data: _this.formData,
                  xhrFields: {
                    withCredentials: true
                  },
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                  }
                })
                .then(function(res) {
                  if (res.data.status == 1) {
                    _this.upload.Name = "";
                    _this.upload.Contents = "";
                    _this.topicfileList = [];
                    _this.answerfileList = [];
                    _this.serchingAnswer(_this.classInfoId);
                    _this.upload.topic = "";
                    _this.upload.topicUrl = "";
                    _this.upload.answerUrl = "";
                    _this.upload.answer = "";
                    _this.upAnswerShow = false;
                    _this.$message({
                      message: "添加答案成功",
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
              return false;
            }
          });
        }
      } else {
        _this.$message({
          message: "请登录之后操作",
          type: "error"
        });
      }
    },
    // 检索当前订单的周数量
    serchingWeek(classInfoId) {
      const _this = this;
      _this.weekoptions = [];
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/ClassInfoContent/Week`,
          async: false,
          params: {
            classInfoId: classInfoId
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            // for (let i = 2; i <= res.data.data.length + 1; i++) {
            //   const obj = {};
            //   obj.label = i;
            //   _this.weekoptions.push(obj);
            // }
            for (let i = 0; i < res.data.data.length; i++) {
              const obj = {};
              obj.label = res.data.data[i];
              _this.weekoptions.push(obj);
            }
            var b = _this.weekoptions.length;
            var a = _this.weekoptions[b - 1].label;
            _this.weekoptions.push({ label: a + 1 });
            console.log(_this.weekoptions)
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 检索答案的方法
    serchingAnswer(classInfoId) {
      const _this = this;
      _this.afterData = [];
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/ClassInfoContent/ClassInfoContents`,
          async: false,
          params: {
            classInfoId: classInfoId
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            var answerArray = [];
            answerArray = res.data.data;
            _this.serchingWeek(classInfoId);
            for (var i = 0; i < answerArray.length; i++) {
              _this.$set(answerArray[i], "shows", false);
              _this.$set(answerArray[i], "listLength", "");
              answerArray[i].listLength = answerArray[i].list.length;
              for (var j = 0; j < answerArray[i].list.length; j++) {
                _this.$set(answerArray[i].list[j], "show", false);
                _this.$set(answerArray[i].list[j], "topicImg", []);
                _this.$set(answerArray[i].list[j], "topicUrlList", []);
                _this.$set(answerArray[i].list[j], "answerImg", []);
                _this.$set(answerArray[i].list[j], "answerUrlList", []);
                _this.$set(answerArray[i].list[j], "topicCacheUrl", "");
                _this.$set(answerArray[i].list[j], "answerCacheUrl", "");
                if (
                  answerArray[i].list[j].nameUrl.lastIndexOf("jpg") == -1 &&
                  answerArray[i].list[j].nameUrl.lastIndexOf("png") == -1
                ) {
                  answerArray[i].list[j].topicUrlList = [];
                } else {
                  answerArray[i].list[j].topicImg =
                    answerArray[i].list[j].nameUrl;
                  const a = answerArray[i].list[j].nameUrl.split("/");
                  answerArray[i].list[j].topicCacheUrl =
                    "/" + a[3] + "/" + a[4] + "/" + a[5];
                  answerArray[i].list[j].topicUrlList.push({
                    url: answerArray[i].list[j].nameUrl
                  });
                }
                if (
                  answerArray[i].list[j].url.lastIndexOf("jpg") == -1 &&
                  answerArray[i].list[j].url.lastIndexOf("png") == -1
                ) {
                  answerArray[i].list[j].answerUrlList = [];
                } else {
                  answerArray[i].list[j].answerImg = answerArray[i].list[j].url;
                  const b = answerArray[i].list[j].url.split("/");
                  answerArray[i].list[j].answerCacheUrl =
                    "/" + b[3] + "/" + b[4] + "/" + b[5];
                  answerArray[i].list[j].answerUrlList.push({
                    url: answerArray[i].list[j].url
                  });
                }
              }
            }
            answerArray[0].shows = true;
            _this.answerArray = answerArray;
          }else {
            _this.answerArray = []
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 题目图片
    // 上传之前
    topicHandlebeforeupload(file) {
      const _this = this;
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
    // 成功之后
    topicHandleSuccess(res, file, fileList, idx) {
      const _this = this;
      _this.answerArray[idx];
      _this.upload.topicUrl = res.file;
    },
    // 删除之后
    topicHandleRemove(file, fileList) {
      const _this = this;
      const a = _this.upload.topicUrl.split("/");
      const nameurl = "/" + a[3] + "/" + a[4] + "/" + a[5];
      _this
        .axios({
          method: "delete",
          url: `${_this.URLport.serverPath}/ClassInfoContent/RemoveImg`,
          async: false,
          params: {
            id: 0,
            imgurl: nameurl
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            _this.upload.topicUrl = "";
          } else {
            _this.$message({
              message: "删除图片失败",
              type: "error"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    // 答案图片
    // 文件删除后
    answerHandleRemove(res, file, fileList) {
      const _this = this;
      const a = _this.upload.answerUrl.split("/");
      const url = "/" + a[3] + "/" + a[4] + "/" + a[5];
      _this
        .axios({
          method: "delete",
          url: `${_this.URLport.serverPath}/ClassInfoContent/RemoveImg`,
          async: false,
          params: {
            id: 0,
            imgurl: url
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            _this.upload.answerUrl = "";
          } else {
            _this.$message({
              message: "删除图片失败",
              type: "error"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 文件上传成功之后
    answerHandleSucceed(res, file, fileList) {
      const _this = this;
      _this.upload.answerUrl = res.file;
    },
    // 文件上传之前
    answerHandlebeforeupload(file) {
      const _this = this;
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
                url: `${_this.URLport.serverPath}/University/Universitys`,
                async: false,
                params: {
                  name: valuestr
                },
                xhrFields: {
                  withCredentials: true
                }
              })
              .then(function(res) {
                console.log(res);
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
                  results.push({ value: "", type: null });
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
      if (value.type != null) _this.schooldisabled = false;
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
    // 选择课程输入框触发
    courseQuerySearch(queryString, cb) {
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
                url: `${_this.URLport.serverPath}/Class/Classes`,
                async: false,
                params: {
                  name: valuestr,
                  universityId: _this.upload.schoolId
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
                  results.push({ value: "", type: null });
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
      if (value.type != null) _this.coursedisabled = false;
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
    // 删除答案
    editAnswerDelete(item) {
      console.log(item)
      const _this = this;
      _this.$confirm("此操作将永久删除该答案, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          _this
            .axios({
              method: "delete",
              url: `${_this.URLport.serverPath}/classInfoContent/Del`,
              async: false,
              params: {
                id: item.id
              },
              xhrFields: {
                withCredentials: true
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            .then(function(res) {
              if (res.data.status == 1) {
                _this.serchingAnswer(item.classInfoId);
                _this.$message({
                  message: "删除答案成功",
                  type: "success"
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        })
        .catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // });
        });
    },
    // 打开编辑答案内的上传
    editstepupload(item) {
      console.log(item)
      const _this = this;
      if (localStorage.getItem("token")) {
        var formData = {};
        formData.Name = item.name;
        formData.NameUrl = item.topicCacheUrl;
        formData.UniversityId = item.universityId;
        formData.Contents = item.contents;
        formData.Url = item.answerCacheUrl;
        formData.ClientId = _this.clientId;
        formData.ClassInfoId = item.classInfoId;
        formData.ClassId = item.classId;
        formData.ClassWeek = item.classWeek;
        formData.ClassWeekType = item.classWeekType;
        formData.Id = item.id;
        formData.createTime = item.createTime;
        _this.editformData = formData;
        if (formData.Url == "" && formData.Contents == "") {
          _this.$message({
            message: "答案内容和图片请至少保证上传一项!",
            type: "error"
          });
        } else {
          _this
            .axios({
              method: "put",
              url: `${_this.URLport.serverPath}/classInfoContent/Edit`,
              async: false,
              data: _this.editformData,
              xhrFields: {
                withCredentials: true
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            .then(function(res) {
              if (res.data.status == 1) {
                _this.serchingAnswer(_this.editformData.ClassInfoId);
                _this.$message({
                  message: "修改答案成功",
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
        }
      } else {
        _this.$message({
          message: "请登录之后操作",
          type: "error"
        });
      }
    },
    orderTitleMeth(item) {
      const _this = this;
      var a = _this.orderInfo.name.trim();
      _this.orderKong.name = a;
      _this
        .axios({
          method: "put",
          url: `${_this.URLport.serverPath}/ClassInfo/Edit`,
          async: false,
          data: _this.orderKong,
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            _this.subtitle = !_this.subtitle;
            _this.$message({
              message: "修改题库集名称成功",
              type: "success"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 编辑题目图片
    editTopicHandleSuccess(res, file, fileList, index,indexs) {
      const _this = this;
      _this.answerArray[index].list[indexs].topicCacheUrl = res.file;
    },
    editTopicHandleRemove(file, fileList, idx, id, nameUrl,indexs) {
      const _this = this;
      const a = nameUrl.split("/");
      var nameUrls = "/" + a[3] + "/" + a[4] + "/" + a[5];
      if (nameUrl.length <= 26) {
        nameUrls = _this.answerArray[idx].list[indexs].topicCacheUrl;
      }
      _this
        .axios({
          method: "delete",
          url: `${_this.URLport.serverPath}/ClassInfoContent/RemoveImg`,
          async: false,
          params: {
            id: id,
            imgurl: nameUrls
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            _this.answerArray[idx].list[indexs].topicCacheUrl = "";
            _this.answerArray[idx].list[indexs].topicImg = "";
          } else {
            _this.$message({
              message: "删除图片失败",
              type: "error"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    editTopicHandleChange(file, fileList, idx, nameUrl) {
      const _this = this;
    },
    editTopicHandlebeforeupload(file) {
      const _this = this;
    },
    // 编辑答案图片
    editAnswerHandlesuccess(res, file, fileList, index,indexs) {
      const _this = this;
      console.log(res)
      console.log(indexs)
      _this.answerArray[index].list[indexs].answerCacheUrl = res.file;
    },
    //
    editAnswerHandleRemove(file, fileList, idx, id, url,indexs) {
      const _this = this;
      const a = url.split("/");
      var answerUrl = "/" + a[3] + "/" + a[4] + "/" + a[5];
      if (url.length <= 26) {
        answerUrl = _this.answerArray[idx].list[indexs].answerCacheUrl;
      }
      _this
        .axios({
          method: "delete",
          url: `${_this.URLport.serverPath}/ClassInfoContent/RemoveImg`,
          async: false,
          params: {
            id: id,
            imgurl: answerUrl
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            _this.answerArray[idx].list[indexs].answerCacheUrl = "";
            _this.answerArray[idx].list[indexs].answerImg = "";
          } else {
            _this.$message({
              message: "删除图片失败",
              type: "error"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    editAnswerHandleChange(file, fileList) {
      const _this = this;
    },
    editAnswerHandlebeforeupload(file) {
      const _this = this;
    },
    // 修改题库集获取信息
    cacheAnswerId(id) {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/ClassInfo/GetClassInfo`,
          async: false,
          params: {
            id: id
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            _this.orderInfo.name = res.data.data.cict.name;
            _this.orderKong = res.data.data.cict;
            if (_this.$route.query.type == 3) {
              _this.classInfoId = res.data.data.cict.id;
              _this.upload.course = res.data.data.clas;
              _this.upload.school = res.data.data.university;
              _this.serchingAnswer(res.data.data.cict.id);
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 修改学校获取信息
    cacheUniversityId(id, clientId) {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/University/GetUniversity`,
          async: false,
          params: {
            id: id
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          _this.editruleForm.name = res.data.data.name;
          _this.schoolKong = res.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 修改课程获取信息
    cacheCourseId(id, clientId) {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Class/GetClass`,
          async: false,
          params: {
            id: id
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          _this.editchourses.name = res.data.data.name;
          _this.editchourses.school = res.data.data.university;
          _this.coursekong = res.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 修改学校
    editSchoolNext(editruleForm, item) {
      const _this = this;
      var a = _this.editruleForm.name.trim();
      _this.schoolKong.name = a;
      _this.$refs[editruleForm].validate(valid => {
        if (valid) {
          _this
            .axios({
              method: "put",
              url: `${_this.URLport.serverPath}/University/Edit`,
              async: false,
              data: _this.schoolKong,
              xhrFields: {
                withCredentials: true
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            .then(function(res) {
              if (res.data.status == 1) {
                _this.$router.push("/personalData/award");
                _this.$message({
                  message: "修改学校成功",
                  type: "success"
                });
              } else {
                _this.$message({
                  message: "该学校名称已经存在",
                  type: "error"
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          return false;
        }
      });
    },
    // 修改课程
    editCourseNext(editchourses, item) {
      const _this = this;
      var a = item.name.trim();
      _this.coursekong.name = a;
      _this.$refs[editchourses].validate(valid => {
        if (valid) {
          _this
            .axios({
              method: "put",
              url: `${_this.URLport.serverPath}/Class/Edit`,
              async: false,
              data: _this.coursekong,
              xhrFields: {
                withCredentials: true
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            .then(function(res) {
              if (res.data.status == 1) {
                _this.$router.push("/personalData/award");
                _this.$message({
                  message: "修改课程成功",
                  type: "success"
                });
              } else {
                _this.$message({
                  message: "该课程名称已经存在",
                  type: "error"
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          return false;
        }
      });
    },
    modification() {
      const _this = this;
      _this.subtitle = !_this.subtitle;
    },
    // 添加一个新的题目
    addTopic() {
      const _this = this;
      if (_this.upAnswerShow) {
        _this.$message({
          message: "一次只可以添加一个新的题目!",
          type: "warning"
        });
      }
      _this.addTopicShow = false;
      _this.upAnswerShow = true;
    },
    // 隐藏新的题目
    topicCancel() {
      const _this = this;
      _this.addTopicShow = true;

      _this.upAnswerShow = false;
    },
    // 确认提交
    affirmQb() {
      const _this = this;
      _this
        .axios({
          method: "put",
          url: `${_this.URLport.serverPath}/Classinfo/Change`,
          async: false,
          params: {
            id: Number(_this.classInfoId)
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            _this.$message({
              message: "创建成功,工作人员正在审核内容。",
              type: "success"
            });
            _this.$router.push({ path: "/personalData/award" });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    suspendImg(item) {
      const _this = this;
      console.log(item);
      _this.suImg = item;
      _this.suspendimgShow = !_this.suspendimgShow;
    },
    CloseQuitBt() {
      const _this = this;
      _this.suspendimgShow = !_this.suspendimgShow;
    },
    pageTop() {
      const _this = this;
      window.scroll(0, 0);
    },
    pageBottom() {
      const _this = this;
    },
    // 自定义添加一个新的周
    addWeek() {
      const _this = this;

      _this
        .$prompt("请输入您要添加的周", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          inputPattern: /^\d+$|^\d+[.]?\d+$/,
          inputErrorMessage: "请输入数字"
        })
        .then(({ value }) => {
          _this.weekoptions.push({ label: value });
          _this.upload.week = Number(value);
          console.log(_this.upload.week);
          _this.$message({
            type: "success",
            message: "添加第" + value + "周"
          });
        })
        .catch(() => {});
    },
    fold(item, index) {
      const _this = this;
      item.shows = !item.shows;
    }
  }
};
</script>