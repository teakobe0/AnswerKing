<style>
.myQuestion-right {
  width: 1000px;
  float: left;
  padding: 20px 40px 0px 40px;
  overflow: hidden;
}
#myQuestion h3 {
  border-bottom: 1px solid #dddddd;
  color: #999999;
  line-height: 40px;
  padding-bottom: 6px;
  margin-bottom: 20px;
}
.message {
  margin-top: 24px;
}
#myQuestion .quiz .el-button {
  margin-left: 0px !important;
  margin-right: 10px !important;
}
.myQuestion-con a {
  text-decoration: none;
  color: #606266;
}
.myQuestion-con a:hover {
  color: #0b4ed4;
}
.mynextpage {
  text-align: center;
  margin-top: 20px;
}
.mynextpage .el-pagination button:disabled {
  background-color: #fafafa !important;
}
.mynextpage .el-pagination .btn-next,
.el-pagination .btn-prev {
  background-color: #fafafa !important;
}
.mynextpage .el-dialog,
.el-pager li {
  background-color: #fafafa !important;
}
</style>


<template>
  <div id="myQuestion">
    <div class="myQuestion-right">
      <h3>我的问答</h3>
      <div class="myQuestion-con">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="我的提问" name="first">
            <el-table
              :data="quizTableData"
              border
              style="width: 100%"
              class="quiz"
              v-if="quizShow"
            >
              <el-table-column label="发布日期" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.createTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column label="题目">
                <template slot-scope="scope">
                  <router-link :to="'/questionDetails/' + scope.row.que.id">{{
                    scope.row.que.title
                  }}</router-link>
                </template>
              </el-table-column>
              <el-table-column label="悬赏" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.currency }}</span>
                </template>
              </el-table-column>
              <el-table-column label="竞拍者" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.number }}</span>
                </template>
              </el-table-column>
              <el-table-column label="截至日期" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.endTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column label="状态" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.type }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="130">
                <template slot-scope="scope">
                  <!-- <el-button
                    v-show="scope.row.que.status == 1"
                    type="text"
                    size="mini"
                    @click="editQuiz(scope.row)"
                  >编辑</el-button>
                  <el-button
                    v-show="scope.row.que.status != 1"
                    type="text"
                    size="mini"
                    disabled
                    title="竞拍者已经开始作答,禁止修改"
                  >编辑</el-button>-->
                  <el-button
                    type="text"
                    size="mini"
                    @click="editQuiz(scope.row)"
                    v-show="scope.row.que.status <= 2"
                    >编辑</el-button
                  >
                  <el-button
                    type="text"
                    size="mini"
                    v-show="scope.row.que.status >= 3"
                    disabled
                    >编辑</el-button
                  >
                  <el-button
                    type="text"
                    size="mini"
                    @click="evaluate(scope.row.que.id)"
                    v-show="scope.row.que.status == 4"
                    >评价</el-button
                  >
                  <el-button
                    type="text"
                    size="mini"
                    disabled
                    v-show="scope.row.que.status != 4"
                    >评价</el-button
                  >
                  <el-button
                    type="text"
                    size="mini"
                    @click="service(scope.row.que.id)"
                    v-show="scope.row.que.status == 6"
                    >客服</el-button
                  >
                  <el-button
                    type="text"
                    size="mini"
                    disabled
                    v-show="scope.row.que.status != 6"
                    >客服</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div class="ql-shade" v-show="qlShade" @mousewheel.prevent>
              <div class="ql-editQuzi">
                <el-form
                  :model="QuestionsQuiz"
                  :rules="QuestionsQuizrules"
                  ref="QuestionsQuiz"
                  class="demo-ruleForm"
                >
                  <div style="overflow: hidden; float: left">
                    <div class="PR">选择你的科目</div>
                    <!-- :inline="true" -->
                    <el-form-item
                      prop="type"
                      class="ql-editQuziTi"
                      style="width: 270px"
                    >
                      <el-select
                        v-model="QuestionsQuiz.type"
                        placeholder="请选择"
                        style="width: 270px"
                      >
                        <el-option
                          v-for="item in quClassSelect"
                          :key="item.name"
                          :label="item.name"
                          :value="item.type"
                        >
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                  <div style="overflow: hidden; margin-left: 289px">
                    <div class="PR">输入你的主题或课程</div>
                    <el-form-item
                      prop="Title"
                      class="ql-editQuziTi"
                      style="width: 270px"
                    >
                      <el-input
                        v-model="QuestionsQuiz.Title"
                        placeholder="Write about..."
                      ></el-input>
                    </el-form-item>
                  </div>

                  <div style="overflow: hidden">
                    <div style="float: left" class="queTime">
                      <div class="PR">答题截止时间</div>
                      <el-form-item prop="EndTime">
                        <el-date-picker
                          v-model="QuestionsQuiz.EndTime"
                          type="datetime"
                          style="width: 270px"
                          placeholder="选择日期时间"
                          value-format="yyyy-MM-dd HH:mm:ss"
                          :picker-options="{
                            disabledDate: (time) => {
                              return (
                                time.getTime() < Date.now() - 3600 * 1000 * 24
                              );
                            },
                            selectableRange: startTimeRange,
                          }"
                        ></el-date-picker>
                      </el-form-item>
                    </div>
                  </div>

                  <el-form-item prop="Content" class="ql-editNameDetail">
                    <!-- <el-input
              type="textarea"
              placeholder="输入问题背景、条件等详细信(选填)"
              v-model="QuestionsQuiz.Content"
              :autosize="{ minRows: 2, maxRows: 22}"
            ></el-input>-->

                    <!-- 富文本 -->
                    <editor
                      id="tinymce"
                      v-model="myValue"
                      :init="init"
                    ></editor>
                  </el-form-item>
                  <el-upload
                    :action="imgSite"
                    :headers="myHeaders"
                    list-type="picture-card"
                    :auto-upload="true"
                    class="upImg"
                    multiple
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                  >
                    <el-button size="small" type="primary" class="upImgBut">
                      上传问题图片
                      <i class="el-icon-picture"></i>
                    </el-button>
                    <!-- <i slot="default" class="el-icon-picture" title="添加图片"></i> -->
                  </el-upload>
                  <el-dialog
                    :visible.sync="dialogVisible"
                    :modal-append-to-body="false"
                  >
                    <img width="100%" :src="dialogImageUrl" alt />
                  </el-dialog>
                </el-form>

                <div style="overflow: hidden">
                  <el-button
                    class="releaseQl"
                    type="primary"
                    size="medium"
                    @click="releaseQl('QuestionsQuiz')"
                    >发布问题</el-button
                  >
                </div>

                <div
                  class="qlreleaseClose el-icon-close"
                  @click="CloseQuitBt"
                ></div>
              </div>
            </div>
            <div class="ql-shade" v-show="evaluateShade" @mousewheel.prevent>
              <div class="ql-editQuzi">
                <div style="min-height: 117px">
                  <div style="float: left">您的评价:</div>
                  <el-switch
                    style="display: block; float: right"
                    v-model="evaluateSwitch"
                    active-color="#13ce66"
                    inactive-color="#ff4949"
                    active-text="好评"
                    inactive-text="差评"
                  ></el-switch>
                  <el-input
                    v-model="evaluateInput"
                    style="margin-top: 10px; margin-bottom: 10px"
                  ></el-input>
                  <el-button
                    style="float: right"
                    type="primary"
                    size="medium"
                    @click="evaluateCon"
                    >确定</el-button
                  >
                  <el-button
                    style="float: right; margin-right: 10px"
                    size="medium"
                    @click="CloseEvaluate"
                    >取消</el-button
                  >
                </div>
              </div>
            </div>
            <!-- <div class="ql-shade" v-show="serviceShade" @mousewheel.prevent>
              <div class="ql-editQuzi">
                <div class="qlreleaseClose el-icon-close" @click="CloseService"></div>
              </div>
            </div>-->
            <div class="mynextpage">
              <div class="block">
                <el-pagination
                  @current-change="handleCurrentChange"
                  :page-size="pagesizes"
                  layout="total, prev, pager, next"
                  :total="pageTotal"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="竞拍中的提问" name="first2">
            <el-table
              :data="quizTableData"
              border
              style="width: 100%"
              class="quiz"
              v-if="quizShow"
            >
              <el-table-column label="发布日期" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.createTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column label="题目">
                <template slot-scope="scope">
                  <router-link :to="'/questionDetails/' + scope.row.que.id">{{
                    scope.row.que.title
                  }}</router-link>
                </template>
              </el-table-column>
              <el-table-column label="悬赏" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.currency }}</span>
                </template>
              </el-table-column>
              <el-table-column label="竞拍者" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.number }}</span>
                </template>
              </el-table-column>
              <el-table-column label="截至日期" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.endTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column label="状态" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.type }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="50">
                <template slot-scope="scope">
                  <!-- <el-button
                    v-show="scope.row.que.status == 1"
                    type="text"
                    size="mini"
                    @click="editQuiz(scope.row)"
                  >编辑</el-button>
                  <el-button
                    v-show="scope.row.que.status != 1"
                    type="text"
                    size="mini"
                    disabled
                    title="竞拍者已经开始作答,禁止修改"
                  >编辑</el-button>-->
                  <el-button
                    type="text"
                    size="mini"
                    @click="editQuiz(scope.row)"
                    v-show="scope.row.que.status <= 3"
                    >编辑</el-button
                  >
                  <el-button
                    type="text"
                    size="mini"
                    v-show="scope.row.que.status > 3"
                    disabled
                    >编辑</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div class="mynextpage">
              <div class="block">
                <el-pagination
                  @current-change="handleCurrentChange"
                  :page-size="pagesizes"
                  layout="total, prev, pager, next"
                  :total="pageTotal"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待完成的提问" name="first3">
            <el-table
              :data="quizTableData"
              border
              style="width: 100%"
              class="quiz"
              v-if="quizShow"
            >
              <el-table-column label="发布日期" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.createTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column label="题目">
                <template slot-scope="scope">
                  <router-link :to="'/questionDetails/' + scope.row.que.id">{{
                    scope.row.que.title
                  }}</router-link>
                </template>
              </el-table-column>
              <el-table-column label="悬赏" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.currency }}</span>
                </template>
              </el-table-column>
              <el-table-column label="竞拍者" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.number }}</span>
                </template>
              </el-table-column>
              <el-table-column label="截至日期" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.endTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column label="状态" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.type }}</span>
                </template>
              </el-table-column>
            </el-table>
            <div class="mynextpage">
              <div class="block">
                <el-pagination
                  @current-change="handleCurrentChange"
                  :page-size="pagesizes"
                  layout="total, prev, pager, next"
                  :total="pageTotal"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待评价的提问" name="first4">
            <el-table
              :data="quizTableData"
              border
              style="width: 100%"
              class="quiz"
              v-if="quizShow"
            >
              <el-table-column label="发布日期" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.createTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column label="题目">
                <template slot-scope="scope">
                  <router-link :to="'/questionDetails/' + scope.row.que.id">{{
                    scope.row.que.title
                  }}</router-link>
                </template>
              </el-table-column>
              <el-table-column label="悬赏" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.currency }}</span>
                </template>
              </el-table-column>
              <el-table-column label="竞拍者" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.number }}</span>
                </template>
              </el-table-column>
              <el-table-column label="截至日期" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.endTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column label="状态" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.type }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="50">
                <template slot-scope="scope">
                  <!-- <el-button
                    v-show="scope.row.que.status == 1"
                    type="text"
                    size="mini"
                    @click="editQuiz(scope.row)"
                  >编辑</el-button>
                  <el-button
                    v-show="scope.row.que.status != 1"
                    type="text"
                    size="mini"
                    disabled
                    title="竞拍者已经开始作答,禁止修改"
                  >编辑</el-button>-->
                  <el-button
                    type="text"
                    size="mini"
                    @click="evaluate(scope.row.que.id)"
                    >评价</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div class="mynextpage">
              <div class="block">
                <el-pagination
                  @current-change="handleCurrentChange"
                  :page-size="pagesizes"
                  layout="total, prev, pager, next"
                  :total="pageTotal"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="已完毕的提问" name="first5">
            <el-table
              :data="quizTableData"
              border
              style="width: 100%"
              class="quiz"
              v-if="quizShow"
            >
              <el-table-column label="发布日期" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.createTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column label="题目">
                <template slot-scope="scope">
                  <router-link :to="'/questionDetails/' + scope.row.que.id">{{
                    scope.row.que.title
                  }}</router-link>
                </template>
              </el-table-column>
              <el-table-column label="悬赏" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.currency }}</span>
                </template>
              </el-table-column>
              <el-table-column label="竞拍者" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.number }}</span>
                </template>
              </el-table-column>
              <el-table-column label="截至日期" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.endTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column label="状态" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.type }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="50">
                <template slot-scope="scope">
                  <!-- <el-button
                    v-show="scope.row.que.status == 1"
                    type="text"
                    size="mini"
                    @click="editQuiz(scope.row)"
                  >编辑</el-button>
                  <el-button
                    v-show="scope.row.que.status != 1"
                    type="text"
                    size="mini"
                    disabled
                    title="竞拍者已经开始作答,禁止修改"
                  >编辑</el-button>-->
                  <el-button
                    type="text"
                    size="mini"
                    @click="service(scope.row.que.id)"
                    >客服</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div class="mynextpage">
              <div class="block">
                <el-pagination
                  @current-change="handleCurrentChange"
                  :page-size="pagesizes"
                  layout="total, prev, pager, next"
                  :total="pageTotal"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script type="es6">
import { formatDate } from "@/common/js/date.js";
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/icons/default/icons.min.js";
import "tinymce/themes/silver";
import "tinymce/plugins/code";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/colorpicker";
import "tinymce/plugins/textcolor";
export default {
  name: "myQuestion",
  components: {
    Editor,
  },
  props: {
    value: {
      type: String,
      default: "写回答...",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    plugins: {
      type: [String, Array],
      default: "colorpicker textcolor wordcount contextmenu",
    },
    toolbar: {
      type: [String, Array],
      default:
        "bold italic underline strikethrough | fontsizeselect | forecolor backcolor",
    },
  },
  data() {
    //在ES6中添加数据是在return{}中
    return {
      init: {
        language_url: "/tinymce/langs/zh_CN.js",
        language: "zh_CN",
        skin_url: "/tinymce/skins/ui/oxide",
        // skin_url: '/tinymce/skins/ui/oxide-dark',//暗色系
        height: 300,
        plugins: this.plugins,
        toolbar: this.toolbar,
        branding: false,
        menubar: false,
        // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
          // const img = "data:image/jpeg;base64," + blobInfo.base64();
          // success(img);
          let formData = new FormData();
          // 服务端接收文件的参数名，文件数据，文件名
          formData.append("file", blobInfo.blob(), blobInfo.filename());

          this.axios({
            method: "POST",
            // 这里是你的上传地址
            url: this.URLport.serverPath + "/File/UploadQuestion",
            async: false,
            data: formData,
            xhrFields: {
              withCredentials: true,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
            .then((res) => {
              // 这里返回的是你图片的地址
              success(res.data.file);
            })
            .catch(() => {
              // failure("上传失败");
            });
        },
      },
      myValue: this.value,
      activeName: "first",
      quizShow: false,
      quizTableData: [],
      answerShow: false,
      answerTableData: [],
      QuestionsQuiz: {
        Title: "",
        Content: "",
        EndTime: "",
        Currency: "",
        Img: "",
      },
      // 我要提问表单验证
      QuestionsQuizrules: {
        Title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          { min: 4, message: "最少输入4个字", trigger: "blur" },
        ],
        Content: [{ required: true, message: "请输入内容", trigger: "blur" }],
        EndTime: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        Currency: [
          { required: true, message: "请输入鲸灵币", trigger: "blur" },
        ],
      },
      // 我的竞拍
      auctionTableData: [],
      auctionShow: false,
      qlShade: false,
      evaluateShade: false,
      // 评价内容
      evaluateInput: "",
      evaluateSwitch: true,
      evaluateId: 0,
      pagenums: 1,
      pagesizes: 13,
      pageTotal: 0,
      status: 0,
      // 图片
      imgSite: this.URLport.serverPath + "/File/UploadQuestion",
      myHeaders: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      queImageUrl: "",
      queVisible: false,
      quefileList: [],
      austartTimeRange: "",
      auction: [],
      quClassSelect:[]
    };
  },
  created: function () {
    const _this = this;
    if (this.$route.query.type == "auction") {
      _this.status = 2;
      _this.activeName = "first2";
      _this.quizList();
    } else if (this.$route.query.type == "tofinish") {
      _this.status = 3;
      _this.activeName = "first3";
      _this.quizList();
    } else if (this.$route.query.type == "evaluate") {
      _this.status = 4;
      _this.activeName = "first4";
      _this.quizList();
    } else if (this.$route.query.type == "finish") {
      _this.status = 6;
      _this.activeName = "first5";
      _this.quizList();
    } else {
      _this.quizList();
    }
    _this.quClass();
  },
  filters: {
    formatDate: function (time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    },
    sendTimeDate: function (date) {
      if (!!date) {
        var nowDate =
          new Date(date).getFullYear() +
          "-" +
          (new Date(date).getMonth() + 1 < 10
            ? "0" + (new Date(date).getMonth() + 1)
            : new Date(date).getMonth() + 1) +
          "-" +
          (new Date(date).getDate(date) < 10
            ? "0" + new Date(date).getDate(date)
            : new Date(date).getDate(date));
        var nowTime =
          (new Date(date).getHours() < 10
            ? "0" + new Date(date).getHours()
            : new Date(date).getHours()) +
          ":" +
          (new Date(date).getMinutes() < 10
            ? "0" + new Date(date).getMinutes()
            : new Date(date).getMinutes()) +
          ":" +
          (new Date(date).getSeconds() < 10
            ? "0" + new Date(date).getSeconds()
            : new Date(date).getSeconds());
        return nowDate + " " + nowTime;
      } else {
        return "";
      }
    },
  },
  methods: {
    // 检索科目
    quClass() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/Classes`,
          async: false,
          xhrFields: {
            withCredentials: true,
          },
        })
        .then(function (res) {
          var a = Object.keys(res.data.data).length;
          for (var i = 1; i <= a; i++) {
            _this.quClassSelect.push({ name: res.data.data[i], type: i });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleClick(tab, event) {
      const _this = this;
      _this.pagenums = 1;
      _this.pagesizes = 13;
      if (tab.label == "竞拍中的提问") {
        _this.status = 2;
        _this.quizList();
      } else if (tab.label == "我的提问") {
        _this.status = 0;
        _this.quizList();
      } else if (tab.label == "待完成的提问") {
        _this.status = 3;
        _this.quizList();
      } else if (tab.label == "待评价的提问") {
        _this.status = 4;
        _this.quizList();
      } else if (tab.label == "已完毕的提问") {
        _this.status = 6;
        _this.quizList();
      }
    },
    formatDate: function (time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
    // 页数跳转后触发
    handleCurrentChange(val) {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/MyQuestion`,
          async: false,
          params: {
            pagenum: val,
            pagesize: _this.pagesizes,
            status: _this.status,
          },
          xhrFields: {
            withCredentials: true,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(function (res) {
          if (res.data.status == 1) {
            _this.quizTableData = res.data.data.data;
            _this.quizShow = true;
            for (var i = 0; i < _this.quizTableData.length; i++) {
              _this.$set(_this.quizTableData[i], "type", "");
              if (_this.quizTableData[i].que.status == 1) {
                _this.quizTableData[i].type = "保存";
              }
              if (_this.quizTableData[i].que.status == 2) {
                _this.quizTableData[i].type = "正在竞拍";
              }
              if (_this.quizTableData[i].que.status == 3) {
                _this.quizTableData[i].type = "已选竞拍者";
              }
              if (_this.quizTableData[i].que.status == 4) {
                _this.quizTableData[i].type = "已回答";
              }
              if (_this.quizTableData[i].que.status == 5) {
                _this.quizTableData[i].type = "申请客服";
              }
              if (_this.quizTableData[i].que.status == 6) {
                _this.quizTableData[i].type = "已完成";
              }
              if (_this.quizTableData[i].que.status == 7) {
                _this.quizTableData[i].type = "已关闭";
              }
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 检索问题列表
    quizList() {
      const _this = this;

      console.log(this.$route.query.type);
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/MyQuestion`,
          async: false,
          params: {
            pagenum: _this.pagenums,
            pagesize: _this.pagesizes,
            status: _this.status,
          },
          xhrFields: {
            withCredentials: true,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(function (res) {
          if (res.data.status == 1) {
            _this.quizTableData = res.data.data.data;
            _this.pageTotal = res.data.data.pageTotal;
            _this.quizShow = true;
            for (var i = 0; i < _this.quizTableData.length; i++) {
              _this.$set(_this.quizTableData[i], "type", "");
              if (_this.quizTableData[i].que.status == 1) {
                _this.quizTableData[i].type = "保存";
              }
              if (_this.quizTableData[i].que.status == 2) {
                _this.quizTableData[i].type = "正在竞拍";
              }
              if (_this.quizTableData[i].que.status == 3) {
                _this.quizTableData[i].type = "已选竞拍者";
              }
              if (_this.quizTableData[i].que.status == 4) {
                _this.quizTableData[i].type = "已回答";
              }
              if (_this.quizTableData[i].que.status == 5) {
                _this.quizTableData[i].type = "申请客服";
              }
              if (_this.quizTableData[i].que.status == 6) {
                _this.quizTableData[i].type = "已完成";
              }
              if (_this.quizTableData[i].que.status == 7) {
                _this.quizTableData[i].type = "已关闭";
              }
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // // 我回答的问题列表
    // answerList() {
    //   const _this = this;
    //   _this
    //     .axios({
    //       method: "get",
    //       url: `${_this.URLport.serverPath}/Answer/MyAnswer`,
    //       async: false,
    //       xhrFields: {
    //         withCredentials: true,
    //       },
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //       },
    //     })
    //     .then(function (res) {
    //       if (res.data.status == 1) {
    //         _this.answerTableData = res.data.data;
    //         _this.answerShow = true;
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
    // // 我竞拍的问题列表
    // auctionlist() {
    //   const _this = this;
    //   _this
    //     .axios({
    //       method: "get",
    //       url: `${_this.URLport.serverPath}/Bidding/MyBidding`,
    //       async: false,
    //       xhrFields: {
    //         withCredentials: true,
    //       },
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //       },
    //     })
    //     .then(function (res) {
    //       if (res.data.status == 1) {
    //         _this.auctionTableData = res.data.data;
    //         _this.auctionShow = true;
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
    // 编辑提问
    editQuiz(list) {
      const _this = this;
      _this.QuestionsQuiz.Title = list.que.title;
      _this.QuestionsQuiz.Content = list.que.content;
      _this.myValue = list.que.content;
      _this.QuestionsQuiz.EndTime = _this.formatDate(list.que.endTime);
      _this.QuestionsQuiz.Currency = list.que.currency;
      _this.QuestionsQuiz.id = list.que.id;
      _this.QuestionsQuiz.Img = list.que.img;
      _this.QuestionsQuiz.type = list.que.type;
      if (list.que.img) {
        var a = list.que.img.split("|");
        for (var i = 0; i < a.length; i++) {
          _this.quefileList.push({ url: a[i], response: { file: a[i] } });
        }
      }

      _this.qlShade = !_this.qlShade;
    },
    // 关闭编辑遮罩
    CloseQuitBt() {
      const _this = this;
      _this.quefileList = [];
      _this.qlShade = !_this.qlShade;
    },
    // 发布新的问题
    releaseQl(QuestionsQuiz) {
      const _this = this;
      _this.QuestionsQuiz.Content = _this.myValue;
      _this.$refs[QuestionsQuiz].validate((valid) => {
        if (valid) {
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/Questions/Add`,
              async: false,
              data: _this.QuestionsQuiz,
              xhrFields: {
                withCredentials: true,
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(function (res) {
              if (res.data.status == 1) {
                _this.QuestionsQuiz.Title = "";
                _this.QuestionsQuiz.Content = "";
                _this.QuestionsQuiz.EndTime = new Date();
                _this.QuestionsQuiz.Currency = "";
                _this.QuestionsQuiz.Img = "";
                _this.QuestionsQuiz.type = "";
                _this.qlShade = !_this.qlShade;
                _this.quizList();
                _this.$message({
                  message: "发布成功",
                  type: "success",
                });
              } else {
                _this.$message({
                  message: "发布失败",
                  type: "error",
                });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    },
    // 打开评价
    evaluate(id) {
      const _this = this;
      _this.evaluateShade = !_this.evaluateShade;
      _this.evaluateId = id;
      _this.evaluateSwitch = true;
    },
    // 发送评价
    evaluateCon() {
      const _this = this;
      let grades = 5;
      if (_this.evaluateSwitch == false) {
        grades = 1;
      }
      _this
        .axios({
          method: "put",
          url: `${_this.URLport.serverPath}/Questions/Evaluate`,
          async: false,
          params: {
            questionid: _this.evaluateId,
            content: _this.evaluateInput,
            grade: grades,
          },
          xhrFields: {
            withCredentials: true,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(function (res) {
          if (res.data.status == 1) {
            _this.quizList();
            _this.evaluateShade = false;
            _this.$message({
              message: "评价成功",
              type: "success",
            });
          } else {
            _this.$message({
              message: "评价失败",
              type: "error",
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 发送客服
    service(id) {
      const _this = this;
      this.$prompt("您要对客服说:", "CourseWhale", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          _this
            .axios({
              method: "put",
              url: `${_this.URLport.serverPath}/Questions/ForService`,
              async: false,
              params: {
                questionid: id,
                reason: value,
              },
              xhrFields: {
                withCredentials: true,
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(function (res) {
              if (res.data.status == 1) {
                _this.$message({
                  message: "发送成功",
                  type: "success",
                });
              } else {
                _this.$message({
                  message: "发送失败",
                  type: "error",
                });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        })
        .catch(() => {});
    },
    // 取消评价
    CloseEvaluate() {
      const _this = this;
      _this.evaluateShade = !_this.evaluateShade;
    },
    // 编辑问题里的图片删除后
    handleRemove(file, fileList) {
      const _this = this;
      _this
        .axios({
          method: "delete",
          url: `${_this.URLport.serverPath}/Questions/RemoveImg`,
          async: false,
          params: {
            questionid: _this.$route.params.question_id,
            imgurl: file.response.file,
          },
          xhrFields: {
            withCredentials: true,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(function (res) {
          var imgurl = "";
          for (let i = 0; i < fileList.length; i++) {
            imgurl = imgurl + "|" + fileList[i].response.file;
          }
          _this.QuestionsQuiz.Img = imgurl.slice(1);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 编辑问题里的图片预览
    handlePictureCardPreview(file) {
      this.queImageUrl = file.url;
      this.queVisible = true;
    },
    // 编辑问题里的图片成功后
    handleAvatarSuccess(res, file, fileList) {
      const _this = this;
      var imgurl = "";
      for (let i = 0; i < fileList.length; i++) {
        imgurl = imgurl + "|" + fileList[i].response.file;
      }
      _this.QuestionsQuiz.Img = imgurl.slice(1);
    },
    // 编辑问题里的图片上传前
    beforeAvatarUpload(file) {},
  },
  watch: {
    "auction.EndTime": {
      immediate: true,
      handler(newValue, oldValue) {
        const _this = this;
        if (newValue) {
          let newva = _this.$options.filters["sendTimeDate"](
            new Date(newValue).getTime()
          );
          let nowDate = _this.$options.filters["sendTimeDate"](
            new Date().getTime() + 7200000
          ); // 2小时之后的时间(我是因业务要求,这里可以随意调整时间)
          let dt = nowDate.split(" ");
          let st = "";
          if (newva.split(" ")[0] == dt[0]) {
            // 是今天,选择 的时间开始为此刻的时分秒
            st = dt[1];
          } else {
            // 明天及以后从0时开始
            st = "00:00:00";
          }
          _this.austartTimeRange = st + " - 23:59:59";
          // //例如：如果今天此刻时间为10:41:40 则选择时间范围为： 11:41:40 - 23:59:59
          // //否则为：00:00:00- 23:59:59
        }
      },
    },
    value(newValue) {
      this.myValue = newValue;
    },
    myValue(newValue) {
      this.$emit("input", newValue);
    },
  },
};
</script>
