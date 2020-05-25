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
  padding: 50px 0 50px 0;
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
.orderNull {
  text-align: center;
  width: 1160px;
  line-height: 250px;
  color:#136bd3;
}
.orderNull a {
  text-decoration: underline;
  color: #da0e0e;
}
.orderNull a:hover {
  color: #ffcd1f;
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
          <el-form
            :model="orderInfo"
            :rules="orderInforules"
            ref="orderInfo"
            class="demo-ruleForm"
            @submit.native.prevent
          >
          <el-form-item prop="name" style="float: left;">
            <el-input v-model="orderInfo.name" placeholder="请输入标题(必填)" style="width:1040px;"></el-input>
          </el-form-item>
          <el-button
            style="float:right;"
            type="primary"
            @click="orderTitleMeth(orderInfo)"
            v-show="active == 2"
          >保存标题</el-button>
          </el-form>
          
        </div>
        <div class="orderNull" v-show="this.orderNull == true && this.$route.query.type == 3">
          当前题库集没有答案
          <router-link to="/personalData/award">返回</router-link>
        </div>
        <!-- 展示创建过的订单开始 -->
        <div v-show="active == 2">
          <div class="showAnswer" v-for="(item,index) in answerArray">
            <div class="SA-con">
              <div class="SA-title">
                <span class="SA-course">{{item.classname}}--{{item.universityname}}</span>
                <span
                  class="SA-week"
                >第{{item.classInfoContentTest.classWeek}}周--{{item.classInfoContentTest.classWeekType}}</span>
              </div>
              <div class="SA-edit">
                <i class="el-icon-edit edits" @click="editAnswerShow(item)"></i>
                <i class="el-icon-delete delete" @click="editAnswerDelete(item)"></i>
              </div>
              <div v-show="active == 2 && item.show == false">
                <div class="SA-topic">
                  <p v-show="item.classInfoContentTest.name == ''" style="color:#ccc;">题目名称</p>
                  <p v-show="item.classInfoContentTest.name != ''">{{item.classInfoContentTest.name}}</p>
                  <img :src="item.answerImg" alt />
                </div>
                <div class="SA-answer">
                  <p v-show="item.classInfoContentTest.contents == ''" style="color:#ccc;">答案内容</p>
                  <p v-show="item.classInfoContentTest.contents != ''" >{{item.classInfoContentTest.contents}}</p>
                  <img :src="item.topicImg" alt />
                </div>
              </div>
              <div v-show="active == 2 && item.show == true">
                  <div class="up-answer-week">
                    <div class="share-prefix">周选择*</div>
                      <el-select
                        v-model="item.classInfoContentTest.classWeek"
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
                  </div>
                  <div class="up-answer-type">
                    <div class="share-prefix">类型选择*</div>
                      <el-select
                        v-model="item.classInfoContentTest.classWeekType"
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
                  </div>
                  <div class="up-answer-topic">
                    <div class="topic-con">
                      <div class="share-prefix">题目名称(选填)</div>
                        <el-input
                          v-model="item.classInfoContentTest.name"
                          placeholder="请输入您的题目名称(选填)"
                        ></el-input>
                        <el-upload
                          class="upload-topic"
                          ref="answerArray"
                          :action="imgSite"
                          :headers="myHeaders"
                          :on-success="(response, file, fileList)=>{return editTopicHandleSuccess(response, file, fileList,index)}"
                          :on-remove="(file, fileList)=>{return editTopicHandleRemove(file, fileList, index,item.classInfoContentTest.id,item.classInfoContentTest.nameUrl)}"
                          :on-change="editTopicHandleChange"
                          :before-upload="editTopicHandlebeforeupload"
                          :file-list="item.topicUrlList"
                          :auto-upload="true"
                          :limit="uploadNum"
                          list-type="picture"
                          :data="{classInfoTestId:item.classInfoContentTest.classInfoTestId}"
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
                    <div class="share-prefix">答案内容*(必填)</div>
                      <el-input
                        v-model="item.classInfoContentTest.contents"
                        placeholder="请输入您的答案内容(选填)"
                      ></el-input>
                      <el-upload
                        class="upload-topic"
                        ref="answerArray"
                        :action="imgSite"
                        :headers="myHeaders"
                        :on-success="(response, file, fileList,url)=>{return editAnswerHandlesuccess(response, file, fileList,index)}"
                        :on-remove="(file, fileList,id,url)=>{return editAnswerHandleRemove(file, fileList, index,item.classInfoContentTest.id,item.classInfoContentTest.url)}"
                        :on-change="editAnswerHandleChange"
                        :before-upload="editAnswerHandlebeforeupload"
                        :file-list="item.answerUrlList"
                        :auto-upload="true"
                        :limit="uploadNum"
                        list-type="picture"
                        :data="{classInfoTestId:item.classInfoContentTest.classInfoTestId}"
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
                  <el-button
                    style="margin-top: 20px;position: absolute;top:207px;right:20px;"
                    size="small"
                    type="danger"
                    @click="editstepupload(item)"
                    v-show="active == 2"
                  >提交答案</el-button>
              </div>
            </div>
            <!-- 编辑现有答案 -->
          </div>
        </div>
        <!-- 展示创建过的订单结束 -->
        <div class="up-upload" v-show="this.$route.query.type != 3">
          <el-form
            :model="upload"
            :rules="rules"
            ref="upload"
            class="demo-ruleForm"
            @submit.native.prevent
          >
            <!-- 选择学校START -->
            <div class="up-school" v-show="upschool == true && active == 0 && $route.query.type != 1">
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
                      <div style="width: 100%;height: 34px;display: block;"  v-show="item.type != null">
                        <span style="color:#878787;float:left;">{{item.value}}</span>
                        <span style="color:#878787;float:right;">{{item.type}}</span>
                      </div>
                      <div v-show="item.type == null" >
                        没有找到对应的学校
                      </div>
                    </template>
                  </el-autocomplete>
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
            <div class="up-class" v-show="upcourse == true && active == 1  && $route.query.type != 2">
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
                      <div style="width: 100%;height: 34px;display: block;" v-show="item.type != null">
                        <span style="color:#878787;float:left;">{{item.value}}</span>
                        <span style="color:#878787;float:right;">{{item.type}}</span>
                      </div>
                      <div v-show="item.type == null" >
                        没有找到对应的课程
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
            <div class="up-answer" v-show="active == 2  && $route.query.type != 3">
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
                        ref="uploadTopicUrl"
                        :action="imgSite"
                        :headers="myHeaders"
                        :on-success="topicHandleSuccess"
                        :on-remove="topicHandleRemove"
                        :before-upload="topicHandlebeforeupload"
                        :file-list="topicfileList"
                        :auto-upload="true"
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
                      :data="{classInfoTestId:this.classInfoTestId}"
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
                <p class="share-title">修改学校</p>
                <div class="share-prefix">学校*</div>
                <el-form-item prop="name">
                  <el-input v-model="editruleForm.name" placeholder="请填写您的学校名称"></el-input>
                </el-form-item>
              </div>
              <div class="nextcenter" v-show="$route.query.type == 1">
                <router-link to="/personalData/award" style="text-decoration: none;color:#000;display: inline-block;margin-top: 20px;margin-right:10px;">
                    <el-button >
                      取消
                    </el-button>
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
                <p class="share-title">修改课程</p>
                <div class="share-prefix">学校*</div>
                <div>{{editchourses.school}}</div>
                <div class="share-prefix">课程*</div>
                <el-form-item prop="name">
                  <el-input v-model="editchourses.name" placeholder="请填写您的课程名称"></el-input>
                </el-form-item>
              </div>
              <div class="nextcenter">
                
                  <router-link to="/personalData/award" style="text-decoration: none;color:#000;display: inline-block;margin-top: 20px;margin-right:10px;">
                    <el-button >
                      取消
                    </el-button>
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
      </div>
      <div class="ClassesAdvertising" style="width:1160px;">
        <div>
          <p class="advertising-p1">没有找到您需要的吗？想得到更多的学习辅导服务吗？</p>
          <p class="advertising-p2">
            扫描二维码添加CourseWhale合作伙伴学业辅导的<b style="color:#3ccece;">客服微信</b>吧！任何学业问题统统解决！
          </p>
        </div>
        <img src="../assets/erweima.jpg" alt />
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
      abc:true,
      uploadNum: 1,
      active: 0,
      formData: {},
      editformData: {},
      // 选择课程下一步
      seletchourse: {
        name: "",
        UniversityTestId: 0
      },
      // 标题Model
      orderInfo:{
        name:"XXX的题库集",
      },
      // 标题的验证规则
      orderInforules:{
        name: [{ required: true, message: "请填写标题名称", trigger: "blur" }]
      },
      // 添加课程model
      addchourses: {
        name: "",
        UniversityTestId: 0
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
      editruleForm:{
        name: ""
      },
      // 修改学校的验证规则
      ediaddtrules: {
        name: [{ required: true, message: "请填写学校名称", trigger: "blur" }]
      },
      // 修改课程model
      editchourses: {
        name: "",
        school:""
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
        // {
        //   label: 1
        // }
      ],
      // 选择学校和填写学校的显示隐藏
      upschool: true,
      // 选择课程和填写课程的显示隐藏
      upcourse: true,
      editTopicFileList:[],
      editAnswerFileList:[],
      topicfileList: [
      ],
      answerfileList: [
      ],
      // 题目名称
      topic: "",
      // 题目区域的显示隐藏
      topictitleshow: true,
      // 答案图片的验证
      doupload: false,
      answerArray: [],
      // 订单ID
      classInfoTestId: 0,
      // 答案图片
      answerFile: [],
      imgSite: this.URLport.serverPath + "/File/UploadImg",
      myHeaders: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      clientId:0,
      
      coursekong:{},
      schoolKong:{},
      orderKong:{},
      orderNull:false,
    };
  },
  created: function() {
    const _this = this;
    _this.gainpersonal();
    if(_this.$route.query.type == 1){
      _this.active = 0;
      _this.cacheUniversityId(_this.$route.query.id);
    }
    if(_this.$route.query.type == 2){
      _this.active = 1;
      _this.cacheCourseId(_this.$route.query.id);
    }
    if(_this.$route.query.type == 3){
      _this.active = 2;
      _this.cacheAnswerId(_this.$route.query.id);
    }
    // if(_this.$route.query.type != 1 && _this.$route.query.type != 2 && _this.$route.query.type != 3){
    //   console.log("找不到")
    // }
  },
  methods: {
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
      }
    },
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
          if (res.data.status == 1) {
            _this.upload.course = res.data.data.classtest.name;
            _this.active = 2;
            _this.orderInfo.Name = res.data.data.classInfoTest.name;
            _this.classInfoTestId = res.data.data.classInfoTest.id;
            _this.serchingAnswer(_this.classInfoTestId);
            _this.cacheAnswerId(_this.classInfoTestId);
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
              if (res.data.status == 1) {
                _this.upload.course = res.data.data.classtest.name;
                _this.active = 2;
                _this.orderInfo.Name = res.data.data.classInfoTest.name;
                _this.classInfoTestId = res.data.data.classInfoTest.id;
                _this.serchingAnswer(_this.classInfoTestId);
                _this.cacheAnswerId(_this.classInfoTestId);
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
      // this.$refs.addAnswerUpload.submit();
      var formData = {};
      formData.Name = _this.upload.topic;
      formData.NameUrl = _this.upload.topicUrl;
      formData.UniversityTestId = _this.upload.schoolId;
      formData.Url = _this.upload.answerUrl;
      formData.Contents = _this.upload.answer;
      formData.ClassInfoTestId = _this.classInfoTestId;
      formData.ClassTestId = _this.upload.courseId;
      formData.ClassWeek = _this.upload.week;
      formData.ClassWeekType = _this.upload.type;
      _this.formData = formData;
      if (_this.doupload == true) {
        _this.rules.answerUrl = [];
        _this.$refs["uploadAnswerUrl"].clearValidate();
      }
      _this.$refs[upload].validate(valid => {
        if (valid) {
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/ClassInfoContentTest/Add`,
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
                _this.topicfileList = [],
                _this.answerfileList = [],
                _this.serchingAnswer(_this.classInfoTestId);
                _this.$message({
                  message: "添加答案成功",
                  type: "success"
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });

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
      _this.weekoptions = [{ label: 1 }];
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
          if (res.data.status == 1) {
            for (let i = 2; i <= res.data.data.length + 1; i++) {
              const obj = {};
              obj.label = i;
              _this.weekoptions.push(obj);
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
          if (res.data.status == 1) {
            if(res.data.data.length == 0) _this.orderNull = true;
            var answerArray = [];
            answerArray = res.data.data;
            _this.serchingWeek(classInfoTestId);
            for (var i = 0; i < answerArray.length; i++) {
              _this.$set(answerArray[i], "show", false);
              _this.$set(answerArray[i], "topicImg", []);
              _this.$set(answerArray[i], "topicUrlList", []);
              _this.$set(answerArray[i], "answerImg", []);
              _this.$set(answerArray[i], "answerUrlList", []);
              _this.$set(answerArray[i], "topicCacheUrl", "");
              _this.$set(answerArray[i], "answerCacheUrl", "");
              answerArray[i].topicImg = _this.URLport.ImgPath + answerArray[i].classInfoContentTest.url;
              answerArray[i].answerImg = _this.URLport.ImgPath + answerArray[i].classInfoContentTest.nameUrl;
              if(answerArray[i].classInfoContentTest.nameUrl == ""){
                 answerArray[i].topicUrlList = [];
              }else {
                answerArray[i].topicUrlList.push({url: _this.URLport.ImgPath + answerArray[i].classInfoContentTest.nameUrl});
              }
              if(answerArray[i].classInfoContentTest.url == ""){
                answerArray[i].answerUrlList = [];
              }else {
                answerArray[i].answerUrlList.push({url: _this.URLport.ImgPath + answerArray[i].classInfoContentTest.url});
              }
            }
            _this.answerArray = answerArray;
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
    topicHandleSuccess(res, file, fileList,idx) {
      const _this = this;
      _this.answerArray[idx]
    },
    // 删除之后
    topicHandleRemove(file, fileList) {
      const _this = this;
      _this
        .axios({
          method: "delete",
          url: `${_this.URLport.serverPath}/ClassInfoContentTest/RemoveImg`,
          async: false,
          params: {
            id: 0, 
            imgurl:_this.upload.topicUrl
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    // 答案图片
    // 文件删除后
    answerHandleRemove(file, fileList) {
      const _this = this;
      _this
        .axios({
          method: "delete",
          url: `${_this.URLport.serverPath}/ClassInfoContentTest/RemoveImg`,
          async: false,
          params: {
            id: 0, 
            imgurl: _this.upload.answerUrl
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          _this.doupload = false;
          _this.rules.answerUrl = [{ required: true, message: "请上传答案图片" }];
          _this.$refs["upload"].validateField("answerUrl");
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
      // _this.answerFile = file;
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
      if (file) {
        _this.doupload = true;
        _this.$refs["uploadAnswerUrl"].clearValidate();
      } else {
        _this.doupload = false;
        _this.$refs["upload"].validateField("answerUrl");
      }
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
                  results.push({ value: "" ,type: null,});
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
      if(value.type != null) _this.schooldisabled = false;
      
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
                  results.push({ value: "" ,type:null});
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
      if(value.type != null) _this.coursedisabled = false;
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
    editAnswerDelete(item){
      const _this = this;
      this.$confirm('此操作将永久删除该答案, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _this
            .axios({
              method: "delete",
              url: `${_this.URLport.serverPath}/classInfoContentTest/Del`,
              async: false,
              params: {
                id: item.classInfoContentTest.id
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
                _this.serchingAnswer(_this.classInfoTestId);
                _this.$message({
                  message: "删除答案成功",
                  type: "success"
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        }).catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消删除'
          // });          
        });
      
    },
    editstepupload(item) {
      const _this = this;
      var formData = {};
      formData.Name = item.classInfoContentTest.name;
      if(item.topicCacheUrl != ""){
        formData.NameUrl = item.topicCacheUrl;
      }else {
        formData.NameUrl = item.classInfoContentTest.nameurl;
      }
      formData.UniversityTestId = item.classInfoContentTest.universityTestId;
      if(item.answerCacheUrl != ""){
        formData.Url = item.answerCacheUrl;
      }else {
        formData.Url = item.classInfoContentTest.url;
      }
      formData.ClientId = _this.clientId;
      formData.Contents = item.classInfoContentTest.contents;
      formData.ClassInfoTestId = item.classInfoContentTest.classInfoTestId;
      formData.ClassTestId = item.classInfoContentTest.classTestId;
      formData.ClassWeek = item.classInfoContentTest.classWeek;
      formData.ClassWeekType = item.classInfoContentTest.classWeekType;
      formData.Id = item.classInfoContentTest.id;
      formData.createTime = item.classInfoContentTest.createTime;
      _this.editformData = formData;
      _this
        .axios({
          method: "put",
          url: `${_this.URLport.serverPath}/classInfoContentTest/Edit`,
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
            // _this.serchingAnswer(_this.classInfoTestId);
            _this.$message({
              message: "添加答案成功",
              type: "success"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    orderTitleMeth(item) {
      const _this = this;
      var a = _this.orderInfo.name.trim();
      _this.orderKong.name = a;
      _this
        .axios({
          method: "put",
          url: `${_this.URLport.serverPath}/ClassInfoTest/Edit`,
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
    editTopicHandleSuccess(res, file, fileList,index){
      const _this = this;
      // _this.answerArray[idx].topicImg.push({name:res.size,url:res.file})
      _this.answerArray[index].topicCacheUrl = res.file;
      
    },
    editTopicHandleRemove(file, fileList,idx,id,nameUrl){
      const _this = this;
      var uid = id;
      if(nameUrl == ""){
        uid = 0;
      }
      _this
        .axios({
          method: "delete",
          url: `${_this.URLport.serverPath}/ClassInfoContentTest/RemoveImg`,
          async: false,
          params: {
            id: uid, 
            imgurl:nameUrl
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    editTopicHandleChange(file, fileList){
      const _this = this;
    },
    editTopicHandlebeforeupload(file){
      const _this = this;
    },
    // 编辑答案图片
    editAnswerHandlesuccess(res, file, fileList,index){
      const _this = this;
      _this.answerArray[index].answerCacheUrl = res.file;
    },
    editAnswerHandleRemove(file, fileList,idx,id,url){
      const _this = this;
      var uid = id;
      if(url == ""){
        uid = 0;
      }
      _this
        .axios({
          method: "delete",
          url: `${_this.URLport.serverPath}/ClassInfoContentTest/RemoveImg`,
          async: false,
          params: {
            id: uid, 
            imgurl:url
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    editAnswerHandleChange(file, fileList){
      const _this = this;
    },
    editAnswerHandlebeforeupload(file){
      const _this = this;
    },
    // 修改题库集获取信息
    cacheAnswerId(id){
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/ClassInfoTest/GetClassInfoTest`,
          async: false,
          params: {
            id: id, 
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
            _this.orderInfo.name = res.data.data.name;
            _this.orderKong = res.data.data;
            if(_this.$route.query.type == 3){
              _this.serchingAnswer(res.data.data.id);
            }
            
            
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 修改学校获取信息
    cacheUniversityId(id,clientId){
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/UniversityTest/GetUniversityTest`,
          async: false,
          params: {
            id: id, 
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
    cacheCourseId(id,clientId){
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/ClassTest/GetClassTest`,
          async: false,
          params: {
            id: id, 
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          _this.editchourses.name = res.data.data.classTest.name;
          _this.editchourses.school = res.data.data.universityName;
          _this.coursekong = res.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 修改学校
    editSchoolNext(editruleForm,item){
      const _this = this;
      var a = _this.editruleForm.name.trim();
      _this.schoolKong.name = a;
      _this.$refs[editruleForm].validate(valid => {
        if (valid) {
        _this
        .axios({
          method: "put",
          url: `${_this.URLport.serverPath}/UniversityTest/Edit`,
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
            _this.$message({
              message: "修改学校成功",
              type: "success"
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
    editCourseNext(editchourses,item){
      const _this = this;
      var a = item.name.trim();
      _this.coursekong.classTest.name = a;
       _this.$refs[editchourses].validate(valid => {
        if (valid) {
        _this
        .axios({
          method: "put",
          url: `${_this.URLport.serverPath}/ClassTest/Edit`,
          async: false,
          data: _this.coursekong.classTest,
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
              message: "修改课程成功",
              type: "success"
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
    // 取消修改返回个人贡献页面
    editShow(){
      const _this = this;

    },
  }
};
</script>