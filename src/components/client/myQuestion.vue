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
.ql-shade {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 26, 26, 0.65);
  z-index: 100;
}
.ql-shade .el-dialog {
  width: 90% !important;
  margin-top: 4vh !important;
  margin-bottom: 0px !important;
}
.ql-shade .el-dialog img {
  height: 500px !important;
}
.ql-shade .el-upload--picture-card {
  border: 0px !important;
  width: auto !important;
  height: 36px !important;
  line-height: 0px !important;
}
.ql-shade .el-upload-list--picture-card .el-upload-list__item {
  width: 45px !important;
  height: 45px !important;
}
.ql-shade .el-upload-list--picture-card .el-upload-list__item-actions {
  font-size: 12px !important;
}
.ql-editQuzi {
  width: 560px;
  padding: 20px 20px 20px 20px;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 4px;
}
.upImg {
  position: relative;
  float: right;
}
.upImg .el-upload-list--picture-card{
  /* position: absolute;
  overflow-x:auto;
  top: 48px;
  width: 560px; */
}
.upImgBut i {
  font-size: 16px !important;
  color: #fff !important;
  vertical-align: middle;
  position: relative;
  top: -1px;
}

.qlreleaseClose {
  position: absolute;
  right: -50px;
  top: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 30px;
}
.PR {
  margin-bottom: 11px;
  color: #76839b;
  font-size: 14px;
}
.releaseQl {
  float: right;
}
#myQuestion .el-table th,
.el-table tr {
  background-color: #fafafa !important;
}
#myQuestion .el-table,
.el-table__expanded-cell {
  background-color: #fafafa !important;
}
</style>


<template>
  <div id="myQuestion">
    <div class="myQuestion-right">
      <h3>{{$t('question.con13')}}</h3>
      <div class="myQuestion-con">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="$t('question.con13')" name="first">
            <el-table
              :data="quizTableData"
              border
              style="width: 100%"
              class="quiz"
              v-if="quizShow"
            >
              <el-table-column :label="$t('question.con148')" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.createTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con149')">
                <template slot-scope="scope">
                  <router-link :to="'/questionDetails/' + scope.row.que.id">{{
                    scope.row.que.title
                  }}</router-link>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con150')" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.currency }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con151')" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.number }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con152')" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.endTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con153')" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.type }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con154')" width="130">
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
                    >{{$t('question.con155')}}</el-button
                  >
                  <el-button
                    type="text"
                    size="mini"
                    v-show="scope.row.que.status >= 3"
                    disabled
                    >{{$t('question.con155')}}</el-button
                  >
                  <el-button
                    type="text"
                    size="mini"
                    @click="evaluate(scope.row.que.id)"
                    v-show="scope.row.que.status == 4"
                    >{{$t('question.con156')}}</el-button
                  >
                  <el-button
                    type="text"
                    size="mini"
                    disabled
                    v-show="scope.row.que.status != 4"
                    >{{$t('question.con156')}}</el-button
                  >
                  <el-button
                    type="text"
                    size="mini"
                    @click="service(scope.row.que.id)"
                    v-show="scope.row.que.status == 6"
                    >{{$t('question.con157')}}</el-button
                  >
                  <el-button
                    type="text"
                    size="mini"
                    disabled
                    v-show="scope.row.que.status != 6"
                    >{{$t('question.con157')}}</el-button
                  >
                </template>
              </el-table-column>
            </el-table>

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
          <el-tab-pane :label="$t('question.con14')" name="first2">
            <el-table
              :data="quizTableData"
              border
              style="width: 100%"
              class="quiz"
              v-if="quizShow"
            >
              <el-table-column :label="$t('question.con148')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.que.createTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con149')" width="400">
                <template slot-scope="scope">
                  <router-link :to="'/questionDetails/' + scope.row.que.id">{{
                    scope.row.que.title
                  }}</router-link>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con150')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.que.currency }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con151')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.number }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con152')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.que.endTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con153')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.type }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con154')" >
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
                    >{{$t('question.con155')}}</el-button
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
          <el-tab-pane :label="$t('question.con15')" name="first3">
            <el-table
              :data="quizTableData"
              border
              style="width: 100%"
              class="quiz"
              v-if="quizShow"
            >
              <el-table-column :label="$t('question.con148')">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.createTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con149')" width="400">
                <template slot-scope="scope">
                  <router-link :to="'/questionDetails/' + scope.row.que.id">{{
                    scope.row.que.title
                  }}</router-link>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con150')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.que.currency }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con151')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.number }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con152')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.que.endTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con153')" >
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
          <el-tab-pane :label="$t('question.con16')" name="first4">
            <el-table
              :data="quizTableData"
              border
              style="width: 100%"
              class="quiz"
              v-if="quizShow"
            >
              <el-table-column :label="$t('question.con148')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.que.createTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con149')" width="400">
                <template slot-scope="scope">
                  <router-link :to="'/questionDetails/' + scope.row.que.id">{{
                    scope.row.que.title
                  }}</router-link>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con150')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.que.currency }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con151')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.number }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con152')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.que.endTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con153')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.type }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con154')">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="mini"
                    @click="evaluate(scope.row.que.id)"
                    >{{$t('question.con156')}}</el-button
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
          <el-tab-pane :label="$t('question.con17')" name="first5">
            <el-table
              :data="quizTableData"
              border
              style="width: 100%"
              class="quiz"
              v-if="quizShow"
            >
              <el-table-column :label="$t('question.con148')">
                <template slot-scope="scope">
                  <span>{{ scope.row.que.createTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con149')" width="400">
                <template slot-scope="scope">
                  <router-link :to="'/questionDetails/' + scope.row.que.id">{{
                    scope.row.que.title
                  }}</router-link>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con150')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.que.currency }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con151')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.number }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con152')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.que.endTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con153')" >
                <template slot-scope="scope">
                  <span>{{ scope.row.type }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con154')" width="116">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="mini"
                    @click="service(scope.row.que.id)"
                    >{{$t('question.con157')}}</el-button
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
          <div class="ql-shade" v-show="qlShade" @mousewheel.prevent>
            <div class="ql-editQuzi">
              <el-form
                :model="QuestionsQuiz"
                :rules="QuestionsQuizrules"
                ref="QuestionsQuiz"
                class="demo-ruleForm"
              >
                <div style="overflow: hidden; float: left">
                  <div class="PR">{{$t('question.con68')}}</div>
                  <!-- :inline="true" -->
                  <el-form-item
                    prop="type"
                    class="ql-editQuziTi"
                    style="width: 270px"
                  >
                    <el-select
                      v-model="QuestionsQuiz.type"
                      :placeholder="$t('question.con69')"
                      style="width: 270px"
                      filterable
                      v-show="localStoragelang == true"
                    >
                      <el-option
                        v-for="item in quClassSelect"
                        :key="item.name"
                        :label="item.name"
                        :value="item.type"
                      >
                      </el-option>
                    </el-select>
                    <el-select
                      v-model="QuestionsQuiz.type"
                      :placeholder="$t('question.con69')"
                      style="width: 270px"
                      filterable
                      v-show="localStoragelang == false"
                    >
                      <el-option
                        v-for="item in classSelectDateKo"
                        :key="item.name"
                        :label="item.name"
                        :value="item.type"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div style="overflow: hidden; margin-left: 289px">
                  <div class="PR">{{$t('question.con70')}}</div>
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
                    <div class="PR">{{$t('question.con71')}}</div>
                    <el-form-item prop="EndTime">
                      <el-date-picker
                        v-model="QuestionsQuiz.EndTime"
                        type="datetime"
                        style="width: 270px"
                        :placeholder="$t('question.con72')"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        :picker-options="{
                          disabledDate: (time) => {
                            return (
                              time.getTime() < Date.now() - 3600 * 1000 * 24
                            );
                          },
                          selectableRange: austartTimeRange,
                        }"
                      ></el-date-picker>
                    </el-form-item>
                  </div>
                </div>
                <div style="overflow: hidden;margin-bottom: 10px;">
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
                    :file-list="quefileList"
                  >
                    <el-button size="small" type="primary" class="upImgBut">
                      {{$t('question.con73')}}
                      <i class="el-icon-picture"></i>
                    </el-button>
                  </el-upload>
                  <el-dialog
                    :visible.sync="queVisible"
                    :modal-append-to-body="false"
                  >
                    <img width="100%" :src="queImageUrl" alt />
                  </el-dialog>
                </div>
                <el-form-item prop="Content" class="ql-editNameDetail">
                  <!-- <el-input
              type="textarea"
              placeholder="输入问题背景、条件等详细信(选填)"
              v-model="QuestionsQuiz.Content"
              :autosize="{ minRows: 2, maxRows: 22}"
            ></el-input>-->

                  <!-- 富文本 -->
                  <editor id="tinymce" v-model="myValue" :init="init"></editor>
                </el-form-item>
                
              </el-form>

              <div style="overflow: hidden">
                <el-button
                  class="releaseQl"
                  type="primary"
                  size="medium"
                  @click="releaseQl('QuestionsQuiz')"
                  >{{$t('question.con74')}}</el-button
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
                <div style="float: left">{{$t('question.con75')}}</div>
                <el-switch
                  style="display: block; float: right"
                  v-model="evaluateSwitch"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                  :active-text="$t('question.con76')"
                  :inactive-text="$t('question.con77')"
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
                  >{{$t('question.con78')}}</el-button
                >
                <el-button
                  style="float: right; margin-right: 10px"
                  size="medium"
                  @click="CloseEvaluate"
                  >{{$t('question.con79')}}</el-button
                >
              </div>
            </div>
          </div>
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
        Img: "",
        type: "",
      },
      // 我要提问表单验证
      QuestionsQuizrules: {
        type: [{ required: true, message: this.$t('question.con87'), trigger: "change" }],
        Title: [
          { required: true, message: this.$t('question.con88'), trigger: "blur" },
          { min: 4, message: this.$t('question.con89'), trigger: "blur" },
        ],
        Content: [{ required: true, message: this.$t('question.con90'), trigger: "blur" }],
        EndTime: [
          {
            type: "string",
            required: true,
            message: this.$t('question.con91'),
            trigger: "change",
          },
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
      quClassSelect: [
        { name: "非裔文化 African-American Studies", type: 1 },
        { name: "会计 Accounting", type: 2 },
        { name: "人类学 Anthropology", type: 3 },
        { name: "建筑学 Architecture", type: 4 },
        { name: "艺术类 Art, Theatre and Film", type: 5 },
        { name: "生物学 Biology", type: 6 },
        { name: "商科类 Business and Entrepreneurship", type: 7 },
        { name: "化学 Chemistry", type: 8 },
        { name: "沟通战略 Communication Strategies ", type: 9 },
        { name: "电脑科学 Computer Science", type: 10 },
        { name: "犯罪学 Criminology", type: 11 },
        { name: "经济学 Economic", type: 12 },
        { name: "教育类 Education", type: 13 },
        { name: "工程学 Engineering", type: 14 },
        { name: "环境问题 Environmental Issues", type: 15 },
        { name: "伦理学 Ethics", type: 16 },
        { name: "金融类 Finance", type: 17 },
        { name: "地理学 Geography", type: 18 },
        { name: "健康类 Healthcare", type: 19 },
        { name: "历史学 History", type: 20 },
        { name: "国际关系 International and Public Relations", type: 21 },
        { name: "法律类 Law and Legal Issues", type: 22 },
        { name: "语言学 Linguistic", type: 23 },
        { name: "文学 Literature", type: 24 },
        { name: "管理学 Management", type: 25 },
        { name: "市场营销 Marketing", type: 26 },
        { name: "数学 Mathematics", type: 27 },
        { name: "音乐类 Music", type: 28 },
        { name: "护理类 Nursing", type: 29 },
        { name: "营养学 Nutrition", type: 30 },
        { name: "哲学类 Philosophy", type: 31 },
        { name: "物理学 Physics", type: 32 },
        { name: "政治科学 Politcal Science", type: 33 },
        { name: "心理学 Psychology", type: 34 },
        { name: "宗教神学 Religion and Theology", type: 35 },
        { name: "社会学 Sociology", type: 36 },
        { name: "体育类 Sport", type: 37 },
        { name: "科技类 Technology", type: 38 },
        { name: "旅游类 Tourism", type: 39 },
        { name: "其他 Other", type: 40 },
      ],
      classSelectDateKo: [
        { name: "아프리카 문화 African-American Studies", type: 1 },
        { name: "회계 Accounting", type: 2 },
        { name: "인류학 Anthropology", type: 3 },
        { name: "건축물 Architecture", type: 4 },
        { name: "미술 Art, Theatre and Film", type: 5 },
        { name: "생물학 Biology", type: 6 },
        { name: "사업 Business and Entrepreneurship", type: 7 },
        { name: "화학 Chemistry", type: 8 },
        { name: "커뮤니케이션 전략 Communication Strategies ", type: 9 },
        { name: "컴퓨터 과학 Computer Science", type: 10 },
        { name: "범죄학 Criminology", type: 11 },
        { name: "경제학 Economic", type: 12 },
        { name: "교육 Education", type: 13 },
        {
          name: "공학  Engineering",
          type: 14,
        },
        { name: "환경 문제 Environmental Issues", type: 15 },
        { name: "윤리학 Ethics", type: 16 },
        { name: "재정적 인 Finance", type: 17 },
        { name: "지리학 Geography", type: 18 },
        { name: "건강 Healthcare", type: 19 },
        { name: "역사 History", type: 20 },
        { name: "국제 관계 International and Public Relations", type: 21 },
        { name: "적법한 Law and Legal Issues", type: 22 },
        { name: "언어학 Linguistic", type: 23 },
        { name: "문학 Literature", type: 24 },
        { name: "조치 Management", type: 25 },
        { name: "마케팅 Marketing", type: 26 },
        { name: "수학 Mathematics", type: 27 },
        { name: "음악 Music", type: 28 },
        { name: "육아 Nursing", type: 29 },
        { name: "영양물 섭취 Nutrition", type: 30 },
        { name: "철학 Philosophy", type: 31 },
        { name: "물리학 Physics", type: 32 },
        { name: "정치 과학 Politcal Science", type: 33 },
        { name: "심리학 Psychology", type: 34 },
        { name: "종교 신학 Religion and Theology", type: 35 },
        { name: "사회학 Sociology", type: 36 },
        { name: "스포츠 Sport", type: 37 },
        { name: "과학 기술 Technology", type: 38 },
        { name: "관광 여행 Tourism", type: 39 },
        { name: "다른 Other", type: 40 },
      ],
      editquestion:{},
      localStoragelang:true
    };
  },
  created: function () {
    const _this = this;
    if (localStorage.lang == "ko") {
      _this.localStoragelang = false;
    }
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
    handleClick(tab, event) {
      const _this = this;
      console.log(tab)
      _this.quizTableData = [];
      _this.pagenums = 1;
      _this.pagesizes = 13;
      if (tab.name == "first2") {
        _this.status = 2;
        _this.quizList();
      } else if (tab.name == "first") {
        _this.status = 0;
        _this.quizList();
      } else if (tab.name == "first3") {
        _this.status = 3;
        _this.quizList();
      } else if (tab.name == "first4") {
        _this.status = 4;
        _this.quizList();
      } else if (tab.name == "first5") {
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
      console.log(list)
      _this.editquestion = list.que;
      _this.QuestionsQuiz.Title = list.que.title;
      _this.QuestionsQuiz.Content = list.que.content;
      _this.myValue = list.que.content;
      _this.QuestionsQuiz.EndTime = _this.formatDate(list.que.endTime);
      // _this.QuestionsQuiz.id = list.que.id;
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
      var a = _this.editquestion;
      // _this.QuestionsQuiz.Content = ;
      a.content = _this.myValue;
      a.title = _this.QuestionsQuiz.Title;
      a.endTime = _this.QuestionsQuiz.EndTime;
      a.type = _this.QuestionsQuiz.type;
      a.img = _this.QuestionsQuiz.Img;
      // _this.QuestionsQuiz.Content = _this.myValue;
      _this.$refs[QuestionsQuiz].validate((valid) => {
        if (valid) {
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/Questions/Add`,
              async: false,
              data: a,
              xhrFields: {
                withCredentials: true,
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(function (res) {
              if (res.data.status == 1) {
                _this.QuestionsQuiz.EndTime = new Date();
                _this.quefileList = [];
                _this.qlShade = !_this.qlShade;
                _this.quizList();
                _this.$message({
                  message: _this.$t('question.con135'),
                  type: "success",
                });
              } else {
                _this.$message({
                  message: res.data.msg,
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
              message: _this.$t('question.con100'),
              type: "success",
            });
          } else {
            _this.$message({
              message: _this.$t('question.con101'),
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
      this.$prompt(_this.$t('question.con102'), "CourseWhale", {
        confirmButtonText: _this.$t('question.con78'),
        cancelButtonText: _this.$t('question.con79'),
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
                  message: _this.$t('basic.con28'),
                  type: "success",
                });
              } else {
                _this.$message({
                  message: _this.$t('question.con94'),
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
