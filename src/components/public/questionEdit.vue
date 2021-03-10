<style>
/* 我要提问遮罩开始 */
.shadeClose {
  position: absolute;
  right: -50px;
  top: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 30px;
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
.queTime .el-input--prefix .el-input__inner {
  height: 48px !important;
}
.ql-editQuziTi .el-input__inner {
  height: 48px !important;
  padding: 10px 18px !important;
}
.ql-editQuziTi .el-form-item__error {
  left: 0px !important;
  top: 100% !important;
  font-size: 14px !important;
}
.ql-editNameDetail .el-textarea__inner {
  font-size: 15px !important;
  overflow-y: hidden;
  resize: none;
}
.PR {
  margin-bottom: 11px;
  color: #76839b;
  font-size: 14px;
}
.releaseQl {
  float: right;
}
</style>

<template>
  <div class="ql-shade" v-show="qlshade">
    <div class="ql-editQuzi">
      <el-form
        :model="QuestionsQuiz"
        :rules="QuestionsQuizrules"
        ref="QuestionsQuiz"
        class="demo-ruleForm"
      >
        <div style="overflow: hidden; float: left">
          <div class="PR">{{ $t("question.con68") }}</div>
          <!-- :inline="true" -->
          <el-form-item prop="type" class="ql-editQuziTi" style="width: 270px">
            <el-select
              v-model="QuestionsQuiz.type"
              :placeholder="$t('question.con69')"
              style="width: 270px"
              filterable
              v-show="localStoragelang == true"
            >
              <el-option
                v-for="item in classSelectDate"
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
          <div class="PR">{{ $t("question.con70") }}</div>
          <el-form-item prop="Title" class="ql-editQuziTi" style="width: 270px">
            <el-input
              v-model="QuestionsQuiz.Title"
              placeholder="Write about..."
            ></el-input>
          </el-form-item>
        </div>

        <div style="overflow: hidden">
          <div style="float: left" class="queTime">
            <div class="PR">{{ $t("question.con71") }}</div>
            <el-form-item prop="EndTime">
              <el-date-picker
                v-model="QuestionsQuiz.EndTime"
                type="datetime"
                style="width: 270px"
                :placeholder="$t('question.con72')"
                value-format="yyyy-MM-dd HH:mm:ss"
                :picker-options="{
                  disabledDate: (time) => {
                    return time.getTime() < Date.now() - 3600 * 1000 * 24;
                  },
                  selectableRange: startTimeRange,
                }"
              ></el-date-picker>
            </el-form-item>
          </div>
        </div>
        <div style="overflow: hidden; margin-bottom: 10px">
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
              {{ $t("question.con73") }}
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
          >{{ $t("question.con74") }}</el-button
        >
      </div>

      <div class="qlreleaseClose el-icon-close" @click="CloseQuitBt"></div>
    </div>
  </div>
</template>

<script type="es6">
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
  name: "popupLogin",
  components: {
    Editor,
  },
  data() {
    return {
      init: {
        language_url: "/tinymce/langs/zh_CN.js",
        language: "zh_CN",
        skin_url: "/tinymce/skins/ui/oxide",
        placeholder: this.$t("question.con86"),
        // skin_url: '/tinymce/skins/ui/oxide-dark',//暗色系
        height: 213,
        plugins: this.plugins,
        toolbar: this.toolbar,
        branding: false,
        menubar: false,
        // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        // images_upload_handler: (blobInfo, success, failure) => {
        //   // const img = "data:image/jpeg;base64," + blobInfo.base64();
        //   // success(img);
        //   let formData = new FormData();
        //   // 服务端接收文件的参数名，文件数据，文件名
        //   formData.append("file", blobInfo.blob(), blobInfo.filename());

        //   this.axios({
        //     method: "POST",
        //     // 这里是你的上传地址
        //     url: this.URLport.serverPath + "/File/UploadQuestion",
        //     async: false,
        //     data: formData,
        //     xhrFields: {
        //       withCredentials: true,
        //     },
        //     headers: {
        //       Authorization: `Bearer ${localStorage.getItem("token")}`,
        //     },
        //   })
        //     .then((res) => {
        //       // 这里返回的是你图片的地址
        //       success(res.data.file);
        //     })
        //     .catch(() => {
        //       // failure("上传失败");
        //     });

        //   console.log(blobInfo);
        // },
      },
      myValue: this.value,
      // 我要提问列表
      QuestionsQuiz: {
        Title: "",
        Content: "",
        EndTime: "",
        Img: "",
        imgContent: "",
        type: "",
      },
      // 我要提问表单验证
      QuestionsQuizrules: {
        type: [
          {
            required: true,
            message: this.$t("question.con87"),
            trigger: "change",
          },
        ],
        Title: [
          {
            required: true,
            message: this.$t("question.con88"),
            trigger: "blur",
          },
          { min: 4, message: this.$t("question.con89"), trigger: "blur" },
        ],
        Content: [
          {
            required: true,
            message: this.$t("question.con90"),
            trigger: "blur",
          },
        ],
        EndTime: [
          {
            type: "string",
            required: true,
            message: this.$t("question.con91"),
            trigger: "change",
          },
        ],
      },
      startTimeRange: "",
      classSelectDate: [
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
      qlShade: true,
    };
  },
  props: ["propsQuestionsQuiz"],
  created: function () {
    console.log(this.propsQuestionsQuiz);
  },
  methods: {
    // 发布问题
    releaseQl(QuestionsQuiz) {
      const _this = this;
      clearInterval(this.newAnswer);
      _this.QuestionsQuiz.Content = _this.myValue;
      let date = new Date();
      let now = date.getTime();
      let leftTime = new Date(_this.QuestionsQuiz.EndTime).getTime() - now;
      let h = Math.floor(leftTime / (3600 * 1000));
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
                // _this.QuestionsQuiz = [];
                _this.QuestionsQuiz.Title = "";
                _this.QuestionsQuiz.Content = "";
                _this.QuestionsQuiz.imgContent = "";
                _this.QuestionsQuiz.type = "";
                _this.QuestionsQuiz.EndTime = new Date();
                setTimeout(function () {
                  _this.newAnswerTime = new Date();
                  _this.newAnswer = setInterval(_this.answerNum, 5000);
                }, 15000);
                _this.QuestionsQuiz.Img = "";
                _this.myValue = "";
                _this.fileList = [];
                _this.$refs[QuestionsQuiz].resetFields();
                _this.qlShade = !_this.qlShade;
                _this.pagenums = 1;
                _this.pagesizes = 10;
                _this.myquizList();
                _this.$message({
                  message: _this.$t("question.con135"),
                  type: "success",
                });
              } else {
                _this.$message({
                  message: _this.$t("question.con136"),
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
    // 上传问题图片删除后
    handleRemove(file, fileList) {
      const _this = this;

      _this
        .axios({
          method: "delete",
          url: `${_this.URLport.serverPath}/Questions/RemoveImg`,
          async: false,
          params: {
            questionid: 0,
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
    // 上传问题图片预览
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 上传问题图片成功后
    handleAvatarSuccess(res, file, fileList) {
      const _this = this;
      var imgurl = "";
      _this.QuestionsQuiz.imgContent =
        res.imgContent + "|" + _this.QuestionsQuiz.imgContent;
      for (let i = 0; i < fileList.length; i++) {
        imgurl = imgurl + "|" + fileList[i].response.file;
      }
      _this.QuestionsQuiz.Img = imgurl.slice(1);
    },
    // 上传问题图片上传前
    beforeAvatarUpload(file) {},
    // 隐藏我要提问
    CloseQuitBt() {
      const _this = this;
      _this.qlShade = false;
      console.log(_this.qlShade);
    },
  },
  watch: {
    "QuestionsQuiz.EndTime": {
      immediate: true,
      handler(newValue, oldValue) {
        const _this = this;
        if (newValue) {
          let newva = this.$options.filters["sendTimeDate"](
            new Date(newValue).getTime()
          );
          let nowDate = this.$options.filters["sendTimeDate"](
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
          this.startTimeRange = st + " - 23:59:59";
          // //例如：如果今天此刻时间为10:41:40 则选择时间范围为： 11:41:40 - 23:59:59
          // //否则为：00:00:00- 23:59:59
        }
      },
    },
  },
};
</script>