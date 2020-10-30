<template>
  <div class="question">
    <homeNav msg="登录/注册" />
    <div v-title data-title="问答大厅-CourseWhale"></div>
    <div class="ql-con">
      <div class="ql-title">
        <div class="ql-t-con">
          <div class="qltconLeft">
            <h1>提升学业最好的方式就是互相帮助。</h1>
            <div style="position: relative">
              <el-input
                v-model="topInput"
                @change="topInputs"
                style="width: 700px"
                placeholder="在这里搜索你想找的学校，课程或其他学业相关内容..."
              ></el-input>
              <i class="el-icon-search" @click="topInputs"></i>
            </div>
          </div>
          <div class="qltconright">
            <img src="../assets/问答1.png" alt />
          </div>
          <div class="qltconAdd">
            <el-button
              type="primary"
              class="ql-right-quitBT"
              @click="NewQuitBt"
              @mousewheel.prevent
              style="
                height: 55px;
                font-size: 18px;
                background: #1da1f2 !important;
              "
              >提一个新问题&nbsp;></el-button
            >
            <router-link to="home"
              >第一次使用课程精灵?点击这里查看教程</router-link
            >
          </div>
        </div>
      </div>
      <div class="ql-body">
        <div class="qlBodyCon">
          <div class="qlBodyLeft">
            <div
              v-for="(item, index) in this.quClasss"
              :class="{ qlBodyConActive: index == num }"
              @click="newTime(index)"
            >
              {{ item.name }}<br/><span style="font-size: 12px;display: block;width: 170px;height: 30px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;position: relative;top: -10px;">{{item.ename}}</span>
            </div>
            <!-- <div  :class="{ qlBodyConActive: num == 1 }" @click="newTimes">
              
            </div>
            <div :class="{ qlBodyConActive: num == 2 }" @click="topAll">
              全部提问
            </div> -->
          </div>
          <div class="qlBodyMei">
            <div
              class="newAnswer"
              @click="newAnswerClick"
              v-show="newAnswerShow"
            >
              有新的问题{{ newAnswerNum }}条,点击查看!
            </div>
            <!-- 没有登录时 -->
            <!-- 没登录 -->
            <div v-show="qlcon">
              <div class="qlConTab">
                <div class="qlConTabS" v-show="topInput != ''">
                  搜索&nbsp;&nbsp;"{{ topInput }}"<i
                    class="el-icon-close"
                    @click="topInClose"
                  ></i>
                </div>
                <div
                  class="qlConTabN"
                  :class="{ qlConTabNClass: qlConTabnum == 0 }"
                  @click="tab('n')"
                >
                  <img src="../assets/问答new.png" alt="" />最新问题
                </div>
                <div
                  class="qlConTabN"
                  :class="{ qlConTabNClass: qlConTabnum == 1 }"
                  @click="tab('r')"
                >
                  <img src="../assets/问答huo.png" alt="" />人气问题
                </div>
              </div>
              <div class="qlBodyMeiCon" v-for="item in qlList">
                <div class="qlBodyMeiConLeft">
                  <!-- <div>
                  <span class="qlBodyI" v-show="item.question.currency != 0"
                    >{{ item.question.currency }}&nbsp;鲸灵币</span
                  >
                </div> -->
                  <div style="font-size: 12px; color: #adadad">
                    {{ item.question.biddingNum }}人正在竞拍
                  </div>
                  <h4>
                    <router-link :to="'/questionDetails/' + item.question.id">{{
                      item.question.title
                    }}</router-link>
                  </h4>

                  <div class="qlBodyImg">
                    <img :src="item.qimage" alt v-show="item.qimage != null" />
                    <img
                      src="../assets/头像.jpg"
                      alt
                      v-show="item.qimage == null"
                    />
                    {{ item.qname }}
                    <span>{{ item.Times }}</span>
                  </div>
                  <div class="qlBodyConImg">
                    <img
                      v-for="items in item.question.images"
                      :src="items.url"
                      alt
                    />
                    <router-link
                      :to="'/questionDetails/' + item.question.id"
                      v-show="item.question.imagesNum > 3"
                      class="viewimages"
                    >
                      <p>
                        点击查看<br />剩余{{
                          item.question.imagesNum - 3
                        }}张图片
                      </p>
                    </router-link>
                  </div>
                  <div class="qlBodyMeiConRight" @click="replyShade(item)">
                    <div class="qlBodyMeiConRightTable">
                      <div><i class="el-icon-edit-outline" style="margin-right:5px"></i>参与竞拍回答</div>
                    </div>
                  </div>
                  <div class="qlBodyMeiConshou">
                    {{ item.favourite }}人收藏 {{ item.question.views }}人浏览
                  </div>
                </div>
              </div>
            </div>

            <!-- 登录时 -->
            <div v-show="myQlcon">
              <div class="qlConTab">
                <div class="qlConTabS" v-show="topInput != ''">
                  搜索&nbsp;&nbsp;"{{ topInput }}"<i
                    class="el-icon-close"
                    @click="topInClose"
                  ></i>
                </div>
                <div
                  class="qlConTabN"
                  :class="{ qlConTabNClass: qlConTabnum == 0 }"
                  @click="tab('n')"
                >
                  <img src="../assets/问答new.png" alt="" />最新问题
                </div>
                <div
                  class="qlConTabN"
                  :class="{ qlConTabNClass: qlConTabnum == 1 }"
                  @click="tab('r')"
                >
                  <img src="../assets/问答huo.png" alt="" />人气问题
                </div>
              </div>
              <div class="qlBodyMeiCon" v-for="item in myQlList">
                <div class="qlBodyMeiConLeft">
                  <!-- <div>
                  <span class="qlBodyU" v-show="item.bidd != null">{{
                    item.bidd
                  }}</span>
                  <span class="qlBodyU" v-show="item.myanswer != null">{{
                    item.myanswer
                  }}</span>
                  <span class="qlBodyU" v-show="item.myque != null">{{
                    item.myque
                  }}</span>
                  <span class="qlBodyI" v-show="item.que.currency != 0"
                    >{{ item.que.currency }}&nbsp;鲸灵币</span
                  >
                </div> -->
                  <div style="font-size: 12px; color: #adadad">
                    {{ item.que.biddingNum }}人正在竞拍
                  </div>
                  <h4>
                    <router-link :to="'/questionDetails/' + item.que.id">{{
                      item.que.title
                    }}</router-link>
                  </h4>
                  <div class="qlBodyImg">
                    <img :src="item.qimage" alt v-show="item.qimage != null" />
                    <img
                      src="../assets/头像.jpg"
                      alt
                      v-show="item.qimage == null"
                    />
                    {{ item.qname }}
                    <span>{{ item.Times }}</span>
                  </div>
                  <div class="qlBodyConImg">
                    <img
                      v-for="items in item.que.images"
                      :src="items.url"
                      alt
                    />
                    <router-link
                      :to="'/questionDetails/' + item.que.id"
                      v-show="item.que.imagesNum > 3"
                      class="viewimages"
                    >
                      <p>
                        点击查看<br />剩余{{ item.que.imagesNum - 3 }}张图片
                      </p>
                    </router-link>
                  </div>
                  <div class="qlBodyMeiConRight" @click="replyShade(item)">
                    <div class="qlBodyMeiConRightTable">
                      <div><i class="el-icon-edit-outline" style="margin-right:5px"></i>参与竞拍回答</div>
                    </div>
                  </div>
                  <div class="qlBodyMeiConshou">
                    {{ item.favourite }}人收藏 {{ item.que.views }}人浏览
                  </div>
                </div>
              </div>
            </div>

            <div class="pageturning" @click="nextpages">...</div>
          </div>
          <div class="qlBodyRight">
            <questionNum></questionNum>
          </div>
        </div>
      </div>
    </div>
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
                  v-for="item in classSelectDate"
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
            >发布问题</el-button
          >
        </div>

        <div class="qlreleaseClose el-icon-close" @click="CloseQuitBt"></div>
      </div>
    </div>
    <div class="ql-replyShade" v-show="qlreplyShade" @mousewheel.prevent>
      <div class="ql-editReply">
        <h3>选择您向提问人提出的赏金要求</h3>
        <el-form
          :model="auction"
          :rules="auctionrules"
          ref="auction"
          class="demo-ruleForm"
        >
          <div style="overflow: hidden">
            <!-- <div style="float: left">
              <div class="PR">答题截止时间</div>
              <el-form-item prop="EndTime">
                <el-date-picker
                  v-model="auction.EndTime"
                  type="datetime"
                  class="auTime"
                  placeholder="选择日期时间"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  :picker-options="{
                    disabledDate: (time) => {
                      return time.getTime() < Date.now() - 3600 * 1000 * 24;
                    },
                    selectableRange: austartTimeRange,
                  }"
                ></el-date-picker>
              </el-form-item>
            </div> -->
            <div style="float: left">
              <div class="PR">鲸灵币</div>
              <el-form-item prop="Currency">
                <el-input
                  v-model.number="auction.Currency"
                  placeholder="请输入鲸灵币"
                  style="width: 270px"
                ></el-input>
              </el-form-item>
            </div>
          </div>
        </el-form>
        <div style="overflow: hidden">
          <el-button
            class="releaseQl"
            type="primary"
            size="medium"
            @click="auctionQl('auction')"
            >提交</el-button
          >
        </div>
        <div class="shadeClose el-icon-close" @click="CloseReplyShade"></div>
      </div>
    </div>

    <homeFooter></homeFooter>
  </div>
</template>

<script type="es6">
// @ is an alias to /src
import homeNav from "@/components/public/homeNav.vue";
import homeFooter from "@/components/public/homeFooter.vue";
import questionNum from "@/components/public/questionNum.vue";
import questionCss from "../pageCss/page/questionCss.css";

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
  name: "question",
  components: {
    homeNav,
    homeFooter,
    Editor,
    questionCss,
    questionNum,
  },
  props: {
    value: {
      type: String,
      default: "",
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
    return {
      init: {
        language_url: "/tinymce/langs/zh_CN.js",
        language: "zh_CN",
        skin_url: "/tinymce/skins/ui/oxide",
        placeholder: "输入问题的详细描述",
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
      topInput: "",
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
        type: [{ required: true, message: "请选择科目", trigger: "change" }],
        Title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          { min: 4, message: "最少输入4个字", trigger: "blur" },
        ],
        Content: [{ required: true, message: "请输入内容", trigger: "blur" }],
        EndTime: [
          {
            type: "string",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
      },
      // 我要答列表
      auction: {
        Currency: "",
        QuestionId: "",
      },
      // 我要答表单验证
      auctionrules: {
        Currency: [
          { required: true, message: "请输入鲸灵币", trigger: "blur" },
          { type: "number", message: "必须为数字" },
        ],
      },
      qlList: [],
      qlShade: false,
      qlreplyShade: false,
      num: 0,
      typeNum: "new",
      pagenums: 1,
      pagesizes: 10,
      clientID: 0,
      myqus: false,
      qlcon: false,
      qlData: false,
      myQlList: [],
      myQlcon: false,
      startTimeRange: "",
      austartTimeRange: "",
      // 新问题出现之后
      newAnswerNum: 0,
      newAnswerTime: new Date(),
      newAnswerTimes: "",
      newAnswer: null,
      newAnswerShow: false,
      // 图片
      imgSite: this.URLport.serverPath + "/File/UploadQuestion",
      myHeaders: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [],
      Answernum: "",
      qdConRigtS: false,
      qlConTabnum: 0,
      quClasss: [
        { name: "全部科目", type: 0 ,ename:"All"},
        { name: "非裔文化", type: 1, ename: "African-American Studies" },
        { name: "会计", type: 2, ename: "Accounting" },
        { name: "人类学", type: 3, ename: "Anthropology" },
        { name: "建筑学", type: 4, ename: "Architecture" },
        { name: "艺术类", type: 5, ename: "Art, Theatre and Film" },
        { name: "生物学", type: 6, ename: "Biology" },
        { name: "商科类", type: 7, ename: "Business and Entrepreneurship" },
        { name: "化学", type: 8, ename: "Chemistry" },
        { name: "沟通战略", type: 9, ename: "Communication Strategies" },
        { name: "电脑科学", type: 10, ename: "Computer Sciencee" },
        { name: "犯罪学", type: 11, ename: "Criminology" },
        { name: "经济学", type: 12, ename: "Economic" },
        { name: "教育类", type: 13, ename: "Education" },
        { name: "工程学", type: 14, ename: "Engineering" },
        { name: "环境问题", type: 15, ename: "Environmental Issues" },
        { name: "伦理学", type: 16, ename: "Ethics" },
        { name: "金融类", type: 17, ename: "Finance" },
        { name: "地理学", type: 18, ename: "Geography" },
        { name: "健康类", type: 19, ename: "Healthcare" },
        { name: "历史学", type: 20, ename: "History" },
        {
          name: "国际关系",
          type: 21,
          ename: "International and Public Relations",
        },
        { name: "法律类", type: 22, ename: "Law and Legal Issues" },
        { name: "语言学", type: 23, ename: "Linguistic" },
        { name: "文学", type: 24, ename: "Literature" },
        { name: "管理学", type: 25, ename: "Management" },
        { name: "市场营销", type: 26, ename: "Marketing" },
        { name: "数学", type: 27, ename: "Mathematics" },
        { name: "音乐类", type: 28, ename: "Music" },
        { name: "护理类", type: 29, ename: "Nursing" },
        { name: "营养学", type: 30, ename: "Nutrition" },
        { name: "哲学类", type: 31, ename: "Philosophy" },
        { name: "物理学", type: 32, ename: "Physics" },
        { name: "政治科学", type: 33, ename: "Politcal Science" },
        { name: "心理学", type: 34, ename: "Psychology" },
        { name: "宗教神学", type: 35, ename: "Religion and Theology" },
        { name: "社会学", type: 36, ename: "Sociology" },
        { name: "体育类", type: 37, ename: "Sport" },
        { name: "科技类", type: 38, ename: "Technology" },
        { name: "旅游类", type: 39, ename: "Tourism" },
        { name: "其他", type: 40, ename: "Other" },
      ],
      quClassSelect: [],
      claNum: 0,
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
    };
  },
  created: function () {
    const _this = this;
    _this.personal();
    _this.newAnswer = setInterval(_this.answerNum, 5000);
  },
  filters: {
    formatDate: function (time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd-hh:mm");
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
  mounted() {
    var _this = this;
    if (_this.$route.fullPath == "/question") {
      window.addEventListener("scroll", this.handleScroll);
    }
    tinymce.init({});
  },
  methods: {
    // 获取最新的问题数量
    answerNum() {
      const _this = this;
      if (localStorage.token) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Questions/GetNumber`,
            async: false,
            params: {
              time: _this.formatDate(_this.newAnswerTime),
            },
            xhrFields: {
              withCredentials: true,
            },
          })
          .then(function (res) {
            if (res.data.data.num > 0) {
              _this.newAnswerNum = res.data.data.num;
              if (_this.newAnswerTime == res.data.data.datetime) {
                _this.newAnswerShow = false;
              } else {
                _this.newAnswerShow = true;
              }

              _this.newAnswerTimes = res.data.data.datetime;
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    // 出现新消息时点击获取新消息
    newAnswerClick() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/GetNewQuestion`,
          async: false,
          params: {
            time: _this.formatDate(_this.newAnswerTimes),
          },
          xhrFields: {
            withCredentials: true,
          },
        })
        .then(function (res) {
          if (res.data.status == 1) {
            _this.newAnswerShow = false;
            _this.newAnswerNum = 0;
            _this.newAnswerTime = res.data.data[0].que.createTime;
            let a = [];
            a = res.data.data;
            if (a[0].que.id != _this.myQlList[0].que.id) {
              let date = new Date();
              let now = date.getTime();
              if (localStorage.token) {
                for (let i = 0; i < res.data.data.length; i++) {
                  _this.$set(a[i], "Times", "");
                  _this.$set(a[i].que, "images", []);
                  _this.$set(a[i].que, "imagesNum", 0);
                  if (a[i].que.img != "") {
                    var b = a[i].que.img.split("|");
                    a[i].que.imagesNum = b.length;
                    if (a.length >= 3) {
                      for (var j = 0; j <= 2; j++) {
                        a[i].que.images.push({ url: b[j] });
                      }
                    } else {
                      for (var j = 0; j < a.length; j++) {
                        a[i].que.images.push({ url: b[j] });
                      }
                    }
                  }
                  let leftTime = now - new Date(a[i].que.createTime).getTime();
                  let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                  let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
                  let m = Math.floor((leftTime / 1000 / 60) % 60);
                  if (d == 0 && h > 0) {
                    a[i].Times = "在" + h + "个小时前发布了这个问题";
                  } else if (h <= 0 && d <= 0) {
                    a[i].Times = "刚刚发布的问题";
                  } else {
                    a[i].Times = "在" + d + "天" + h + "个小时前发布了这个问题";
                  }
                  _this.myQlList.unshift(a[i]);
                }
              }
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 当滚动条拉倒页面底部时加载问题
    handleScroll() {
      var _this = this;
      if (_this.$route.fullPath == "/question") {
        window.onscroll = function () {
          var scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
          var windowHeight =
            document.documentElement.clientHeight || document.body.clientHeight;
          var scrollHeight =
            document.documentElement.scrollHeight || document.body.scrollHeight;

          if (scrollTop + windowHeight == scrollHeight) {
            if (localStorage.token && _this.num != 3) {
              _this.myQlcon = true;
              _this.myqus = true;
              _this
                .axios({
                  method: "get",
                  url: `${_this.URLport.serverPath}/Questions/MyQuestionPage`,
                  async: false,
                  params: {
                    classes: _this.claNum,
                    type: _this.typeNum,
                    pagenum: ++_this.pagenums,
                    pagesize: _this.pagesizes,
                    name: _this.topInput,
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
                    // _this.myQlList.push(res.data.data.data);
                    let a = [];
                    a = res.data.data.data;
                    let date = new Date();
                    let now = date.getTime();
                    for (var i = 0; i < res.data.data.data.length; i++) {
                      _this.$set(a[i], "Times", "");
                      _this.$set(a[i].que, "images", []);
                      _this.$set(a[i].que, "imagesNum", 0);
                      if (a[i].que.img != "") {
                        var b = a[i].que.img.split("|");
                        a[i].que.imagesNum = b.length;
                        if (b.length >= 3) {
                          for (var j = 0; j <= 2; j++) {
                            a[i].que.images.push({
                              url: b[j],
                            });
                          }
                        } else {
                          for (var j = 0; j < b.length; j++) {
                            a[i].que.images.push({
                              url: b[j],
                            });
                          }
                        }
                      }
                      let leftTime =
                        now - new Date(a[i].que.createTime).getTime();
                      let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                      let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
                      let m = Math.floor((leftTime / 1000 / 60) % 60);
                      if (d == 0 && h > 0) {
                        a[i].Times = "在" + h + "个小时前发布了这个问题";
                      } else if (h <= 0 && d <= 0) {
                        a[i].Times = "刚刚发布的问题";
                      } else {
                        a[i].Times =
                          "在" + d + "天" + h + "个小时前发布了这个问题";
                      }
                      _this.myQlList.push(a[i]);
                    }
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            } else if (!localStorage.token && _this.num != 3) {
              _this
                .axios({
                  method: "get",
                  url: `${_this.URLport.serverPath}/Questions/QuestionPage`,
                  async: false,
                  params: {
                    type: _this.typeNum,
                    pagenum: ++_this.pagenums,
                    pagesize: _this.pagesizes,
                    name: _this.topInput,
                  },
                  xhrFields: {
                    withCredentials: true,
                  },
                })
                .then(function (res) {
                  if (res.data.status == 1) {
                    if (res.data.data.data.length != 0) {
                      let date = new Date();
                      let now = date.getTime();
                      let a = [];
                      a = res.data.data.data;
                      for (var i = 0; i < a.length; i++) {
                        _this.$set(a[i].question, "images", []);
                        _this.$set(a[i].question, "imagesNum", 0);
                        _this.$set(a[i], "Times", "");
                        if (a[i].question.img != "") {
                          var b = a[i].question.img.split("|");
                          a[i].question.imagesNum = b.length;
                          if (b.length >= 3) {
                            for (var j = 0; j <= 2; j++) {
                              a[i].question.images.push({
                                url: b[j],
                              });
                            }
                          } else {
                            for (var j = 0; j < b.length; j++) {
                              a[i].question.images.push({
                                url: b[j],
                              });
                            }
                          }
                        }
                        let leftTime =
                          now - new Date(a[i].question.createTime).getTime();
                        let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                        let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
                        let m = Math.floor((leftTime / 1000 / 60) % 60);
                        if (d == 0 && h > 0) {
                          a[i].Times = "在" + h + "个小时前发布了这个问题";
                        } else if (h <= 0 && d <= 0) {
                          a[i].Times = "刚刚发布的问题";
                        } else {
                          a[i].Times =
                            "在" + d + "天" + h + "个小时前发布了这个问题";
                        }
                        _this.qlList.push(a[i]);
                      }
                    }
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            } else if (localStorage.token && _this.num == 3) {
              _this
                .axios({
                  method: "get",
                  url: `${_this.URLport.serverPath}/Questions/MyQuestion`,
                  async: false,
                  params: {
                    name: _this.topInput,
                    pagenum: ++_this.pagenums,
                    pagesize: _this.pagesizes,
                    name: _this.topInput,
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
                    let a = [];
                    a = res.data.data.data;
                    for (var i = 0; i < a.length; i++) {
                      a[i].type = "";
                      if (a[i].que.status == 1) {
                        a[i].type = "保存";
                      }
                      if (a[i].que.status == 2) {
                        a[i].type = "正在竞拍";
                      }
                      if (a[i].que.status == 3) {
                        a[i].type = "已选竞拍者";
                      }
                      if (a[i].que.status == 4) {
                        a[i].type = "已回答";
                      }
                      if (a[i].que.status == 5) {
                        a[i].type = "提交修改";
                      }
                      if (a[i].que.status == 6) {
                        a[i].type = "申请客服";
                      }
                      if (a[i].que.status == 7) {
                        a[i].type = "已完成";
                      }
                      if (a[i].que.status == 8) {
                        a[i].type = "已关闭";
                      }
                      _this.myQlList.push(a[i]);
                    }
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
          }
        };
      } else {
        return;
      }
    },
    // 检索当前登录人信息
    personal: function () {
      const _this = this;
      if (localStorage.token) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Client/GetClient`,
            async: false,
            xhrFields: {
              withCredentials: true,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(function (res) {
            _this.clientID = res.data.data.id;
            _this.myquizList();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        _this.quizList();
      }
    },
    //  没有登录时检索问题列表
    quizList() {
      const _this = this;
      _this.qlcon = true;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/QuestionPage`,
          async: false,
          params: {
            classes: _this.claNum,
            type: _this.typeNum,
            pagenum: _this.pagenums,
            pagesize: _this.pagesizes,
            name: _this.topInput,
          },
          xhrFields: {
            withCredentials: true,
          },
        })
        .then(function (res) {
          if (res.data.status == 1) {
            _this.qlList = res.data.data.data;

            let date = new Date();
            let now = date.getTime();
            for (var i = 0; i < res.data.data.data.length; i++) {
              _this.$set(_this.qlList[i], "Times", "");
              _this.$set(_this.qlList[i], "myType", "");
              _this.$set(_this.qlList[i].question, "images", []);
              _this.$set(_this.qlList[i].question, "imagesNum", 0);
              if (_this.qlList[i].question.img != "") {
                var a = _this.qlList[i].question.img.split("|");
                _this.qlList[i].question.imagesNum = a.length;
                if (a.length >= 3) {
                  for (var j = 0; j <= 2; j++) {
                    _this.qlList[i].question.images.push({ url: a[j] });
                  }
                } else {
                  for (var j = 0; j < a.length; j++) {
                    _this.qlList[i].question.images.push({ url: a[j] });
                  }
                }
              }
              let leftTime =
                now - new Date(_this.qlList[i].question.createTime).getTime();
              let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
              let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
              let m = Math.floor((leftTime / 1000 / 60) % 60);
              if (d == 0 && h > 0) {
                _this.qlList[i].Times = "在" + h + "个小时前发布了这个问题";
              } else if (h <= 0 && d <= 0) {
                _this.qlList[i].Times = "刚刚发布的问题";
              } else {
                _this.qlList[i].Times =
                  "在" + d + "天" + h + "个小时前发布了这个问题";
              }
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 登录之后检索问题列表
    myquizList() {
      const _this = this;
      _this.myQlcon = true;
      _this.myqus = true;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/MyQuestionPage`,
          async: false,
          params: {
            classes: _this.claNum,
            type: _this.typeNum,
            pagenum: _this.pagenums,
            pagesize: _this.pagesizes,
            name: _this.topInput,
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
            _this.myQlList = res.data.data.data;
            _this.qdConRigtS = true;
            let date = new Date();
            let now = date.getTime();
            for (var i = 0; i < res.data.data.data.length; i++) {
              _this.$set(_this.myQlList[i], "Times", "");
              _this.$set(_this.myQlList[i].que, "images", []);
              _this.$set(_this.myQlList[i].que, "imagesNum", 0);
              if (_this.myQlList[i].que.img != "") {
                var a = _this.myQlList[i].que.img.split("|");
                _this.myQlList[i].que.imagesNum = a.length;
                if (a.length >= 3) {
                  for (var j = 0; j <= 2; j++) {
                    _this.myQlList[i].que.images.push({ url: a[j] });
                  }
                } else {
                  for (var j = 0; j < a.length; j++) {
                    _this.myQlList[i].que.images.push({ url: a[j] });
                  }
                }
              }
              let leftTime =
                now - new Date(_this.myQlList[i].que.createTime).getTime();
              let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
              let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
              let m = Math.floor((leftTime / 1000 / 60) % 60);
              if (d == 0 && h > 0) {
                _this.myQlList[i].Times = "在" + h + "个小时前发布了这个问题";
              } else if (h <= 0 && d <= 0) {
                _this.myQlList[i].Times = "刚刚发布的问题";
              } else {
                _this.myQlList[i].Times =
                  "在" + d + "天" + h + "个小时前发布了这个问题";
              }
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    formatDate: function (time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
    // 点击最新按钮展示
    newTime(index) {
      const _this = this;
      _this.num = index;
      _this.claNum = index;
      _this.pagenums = 1;
      if (localStorage.token) {
        _this.myquizList();
      } else {
        _this.quizList();
      }
    },
    // 点击即将结束展示
    newTimes() {
      const _this = this;
      _this.num = 1;
      _this.typeNum = "retime";
      _this.pagenums = 1;
      // _this.qlcon = true;
      // _this.qlData = false;
      if (localStorage.token) {
        _this.myquizList();
      } else {
        _this.quizList();
      }
    },
    // 点击高悬赏展示
    topAll() {
      const _this = this;
      _this.num = 2;
      _this.typeNum = "";
      _this.pagenums = 1;
      // _this.qlcon = true;
      // _this.qlData = false;
      if (localStorage.token) {
        _this.myquizList();
      } else {
        _this.quizList();
      }
    },
    // 已完成展示
    // accomplish() {
    //   const _this = this;
    //   _this.num = 3;
    //   _this.typeNum = "finish";
    //   _this.pagenums = 1;
    //   // _this.qlcon = true;
    //   // _this.qlData = false;
    //   if (localStorage.token) {
    //     _this.myquizList();
    //   } else {
    //     _this.quizList();
    //   }
    // },
    // 我的提问
    // Myquestion() {
    //   const _this = this;
    //   _this.num = 4;
    //   _this.pagenums = 1;
    //   // _this.qlcon = false;
    //   // _this.qlData = true;
    //   _this
    //     .axios({
    //       method: "get",
    //       url: `${_this.URLport.serverPath}/Questions/MyQuestion`,
    //       async: false,
    //       params: {
    //         pagenum: _this.pagenums,
    //         pagesize: _this.pagesizes,
    //         name: _this.topInput
    //       },
    //       xhrFields: {
    //         withCredentials: true
    //       },
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`
    //       }
    //     })
    //     .then(function(res) {
    //       if (res.data.status == 1) {
    //         _this.myQlList = res.data.data.data;
    //         for (var i = 0; i < _this.myQlList.length; i++) {
    //           _this.$set(_this.myQlList[i], "type", "");
    //           if (_this.myQlList[i].que.status == 1) {
    //             _this.myQlList[i].type = "保存";
    //           }
    //           if (_this.myQlList[i].que.status == 2) {
    //             _this.myQlList[i].type = "正在竞拍";
    //           }
    //           if (_this.myQlList[i].que.status == 3) {
    //             _this.myQlList[i].type = "已选竞拍者";
    //           }
    //           if (_this.myQlList[i].que.status == 4) {
    //             _this.myQlList[i].type = "已回答";
    //           }
    //           if (_this.myQlList[i].que.status == 5) {
    //             _this.myQlList[i].type = "提交修改";
    //           }
    //           if (_this.myQlList[i].que.status == 6) {
    //             _this.myQlList[i].type = "申请客服";
    //           }
    //           if (_this.myQlList[i].que.status == 7) {
    //             _this.myQlList[i].type = "已完成";
    //           }
    //           if (_this.myQlList[i].que.status == 8) {
    //             _this.myQlList[i].type = "已关闭";
    //           }
    //         }
    //       }
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },
    // 我要提问按钮
    NewQuitBt() {
      const _this = this;
      if (localStorage.getItem("token")) {
        _this.qlShade = !_this.qlShade;
      } else {
        _this.$message({
          message: "请登录之后提问",
          type: "warning",
        });
      }
    },
    // 隐藏我要提问
    CloseQuitBt() {
      const _this = this;
      _this.qlShade = !_this.qlShade;
    },
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
                _this.pagesizes = 5;
                _this.myquizList();
                _this.$message({
                  message: "发布成功",
                  type: "success",
                });
              } else {
                _this.$message({
                  message: "请检查相关内容是否填写",
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
    // 我要答显示遮罩按钮
    replyShade(item) {
      const _this = this;
      if (localStorage.getItem("token")) {
        _this.auction.QuestionId = item.que.id;
        // _this.auction.Currency = item.que.currency;
        _this.qlreplyShade = !_this.qlreplyShade;
      } else {
        _this.$message({
          message: "请登录之后竞拍",
          type: "warning",
        });
      }
    },
    // 隐藏我要答
    CloseReplyShade() {
      const _this = this;
      _this.qlreplyShade = !_this.qlreplyShade;
    },
    // 我要答竞拍确定
    auctionQl(auction) {
      const _this = this;
      _this.$refs[auction].validate((valid) => {
        if (valid) {
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/Bidding/Add`,
              async: false,
              data: _this.auction,
              xhrFields: {
                withCredentials: true,
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(function (res) {
              if (res.data.status == 1) {
                _this.qlreplyShade = !_this.qlreplyShade;
                _this.$message({
                  message: "竞拍成功!",
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
    // 搜索
    topInputs() {
      const _this = this;
      _this.pagenums = 1;
      if (localStorage.token && _this.num != 3) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Questions/MyQuestionPage`,
            async: false,
            params: {
              classes: _this.claNum,
              type: _this.typeNum,
              pagenum: _this.pagenums,
              pagesize: _this.pagesizes,
              name: _this.topInput,
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
              _this.myQlList = res.data.data.data;
              let date = new Date();
              let now = date.getTime();
              for (var i = 0; i < res.data.data.data.length; i++) {
                _this.$set(_this.myQlList[i], "Times", "");
                _this.$set(_this.myQlList[i].que, "images", []);
                _this.$set(_this.myQlList[i].que, "imagesNum", 0);
                if (_this.myQlList[i].que.img != "") {
                  var a = _this.myQlList[i].que.img.split("|");
                  _this.myQlList[i].que.imagesNum = a.length;
                  if (a.length >= 3) {
                    for (var j = 0; j <= 2; j++) {
                      _this.myQlList[i].que.images.push({ url: a[j] });
                    }
                  } else {
                    for (var j = 0; j < a.length; j++) {
                      _this.myQlList[i].que.images.push({ url: a[j] });
                    }
                  }
                }
                let leftTime =
                  now - new Date(_this.myQlList[i].que.createTime).getTime();
                let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
                let m = Math.floor((leftTime / 1000 / 60) % 60);
                if (d == 0 && h > 0) {
                  _this.myQlList[i].Times = "在" + h + "个小时前发布了这个问题";
                } else if (h <= 0 && d <= 0) {
                  _this.myQlList[i].Times = "刚刚发布的问题";
                } else {
                  _this.myQlList[i].Times =
                    "在" + d + "天" + h + "个小时前发布了这个问题";
                }
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (!localStorage.token && _this.num != 3) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Questions/QuestionPage`,
            async: false,
            params: {
              type: _this.typeNum,
              pagenum: _this.pagenums,
              pagesize: _this.pagesizes,
              name: _this.topInput,
            },
            xhrFields: {
              withCredentials: true,
            },
          })
          .then(function (res) {
            if (res.data.status == 1) {
              _this.qlList = res.data.data.data;
              let date = new Date();
              let now = date.getTime();
              for (var i = 0; i < res.data.data.data.length; i++) {
                _this.$set(_this.qlList[i], "Times", "");
                _this.$set(_this.qlList[i], "myType", "");
                _this.$set(_this.qlList[i].question, "images", []);
                _this.$set(_this.qlList[i].question, "imagesNum", 0);
                if (_this.qlList[i].question.img != "") {
                  var a = _this.qlList[i].question.img.split("|");
                  _this.qlList[i].question.imagesNum = a.length;
                  if (a.length >= 3) {
                    for (var j = 0; j <= 2; j++) {
                      _this.qlList[i].question.images.push({ url: a[j] });
                    }
                  } else {
                    for (var j = 0; j < a.length; j++) {
                      _this.qlList[i].question.images.push({ url: a[j] });
                    }
                  }
                }
                let leftTime =
                  now - new Date(_this.qlList[i].question.createTime).getTime();
                let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
                let m = Math.floor((leftTime / 1000 / 60) % 60);
                if (d == 0 && h > 0) {
                  _this.qlList[i].Times = "在" + h + "个小时前发布了这个问题";
                } else if (h <= 0 && d <= 0) {
                  _this.qlList[i].Times = "刚刚发布的问题";
                } else {
                  _this.qlList[i].Times =
                    "在" + d + "天" + h + "个小时前发布了这个问题";
                }
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    // 点击页面底部的三个点加载下一页
    nextpages() {
      const _this = this;
      if (localStorage.token && _this.num != 3) {
        _this.myQlcon = true;
        _this.myqus = true;
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Questions/MyQuestionPage`,
            async: false,
            params: {
              classes: _this.claNum,
              type: _this.typeNum,
              pagenum: ++_this.pagenums,
              pagesize: _this.pagesizes,
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
              // _this.myQlList.push(res.data.data.data);
              let a = [];
              a = res.data.data.data;
              let date = new Date();
              let now = date.getTime();
              for (var i = 0; i < a.length; i++) {
                _this.$set(a[i], "Times", "");
                _this.$set(a[i].que, "images", []);
                _this.$set(a[i].que, "imagesNum", 0);
                if (a[i].que.img != "") {
                  var b = a[i].que.img.split("|");
                  a[i].que.imagesNum = b.length;
                  if (b.length >= 3) {
                    for (var j = 0; j <= 2; j++) {
                      a[i].que.images.push({
                        url: b[j],
                      });
                    }
                  } else {
                    for (var j = 0; j < b.length; j++) {
                      a[i].que.images.push({
                        url: b[j],
                      });
                    }
                  }
                }
                let leftTime = now - new Date(a[i].que.createTime).getTime();
                let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
                let m = Math.floor((leftTime / 1000 / 60) % 60);
                if (d == 0 && h > 0) {
                  a[i].Times = "在" + h + "个小时前发布了这个问题";
                } else if (h <= 0 && d <= 0) {
                  a[i].Times = "刚刚发布的问题";
                } else {
                  a[i].Times = "在" + d + "天" + h + "个小时前发布了这个问题";
                }
                _this.myQlList.push(a[i]);
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (!localStorage.token && _this.num != 3) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Questions/QuestionPage`,
            async: false,
            params: {
              type: _this.typeNum,
              pagenum: ++_this.pagenums,
              pagesize: _this.pagesizes,
            },
            xhrFields: {
              withCredentials: true,
            },
          })
          .then(function (res) {
            if (res.data.status == 1) {
              if (res.data.data.data.length != 0) {
                let date = new Date();
                let now = date.getTime();
                let a = [];
                a = res.data.data.data;
                for (var i = 0; i < a.length; i++) {
                  _this.$set(a[i].question, "images", []);
                  _this.$set(a[i].question, "imagesNum", 0);
                  _this.$set(a[i], "Times", "");
                  if (a[i].question.img != "") {
                    var b = a[i].question.img.split("|");
                    a[i].question.imagesNum = b.length;
                    if (b.length >= 3) {
                      for (var j = 0; j <= 2; j++) {
                        a[i].question.images.push({
                          url: b[j],
                        });
                      }
                    } else {
                      for (var j = 0; j < b.length; j++) {
                        a[i].question.images.push({
                          url: b[j],
                        });
                      }
                    }
                  }
                  let leftTime =
                    now - new Date(a[i].question.createTime).getTime();
                  let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                  let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
                  let m = Math.floor((leftTime / 1000 / 60) % 60);
                  if (d == 0 && h > 0) {
                    a[i].Times = "在" + h + "个小时前发布了这个问题";
                  } else if (h <= 0 && d <= 0) {
                    a[i].Times = "刚刚发布的问题";
                  } else {
                    a[i].Times = "在" + d + "天" + h + "个小时前发布了这个问题";
                  }
                  _this.qlList.push(a[i]);
                }
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (localStorage.token && _this.num == 3) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Questions/MyQuestion`,
            async: false,
            params: {
              name: _this.topInput,
              pagenum: ++_this.pagenums,
              pagesize: _this.pagesizes,
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
              let a = [];
              a = res.data.data.data;
              for (var i = 0; i < a.length; i++) {
                a[i].type = "";
                if (a[i].que.status == 1) {
                  a[i].type = "保存";
                }
                if (a[i].que.status == 2) {
                  a[i].type = "正在竞拍";
                }
                if (a[i].que.status == 3) {
                  a[i].type = "已选竞拍者";
                }
                if (a[i].que.status == 4) {
                  a[i].type = "已回答";
                }
                if (a[i].que.status == 5) {
                  a[i].type = "提交修改";
                }
                if (a[i].que.status == 6) {
                  a[i].type = "申请客服";
                }
                if (a[i].que.status == 7) {
                  a[i].type = "已完成";
                }
                if (a[i].que.status == 8) {
                  a[i].type = "已关闭";
                }
                _this.myQlList.push(a[i]);
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
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
    // 小搜索框的关闭按钮
    topInClose() {
      const _this = this;
      _this.topInput = "";
      _this.topInputs();
    },
    // 最新和人气切换
    tab(tab) {
      const _this = this;
      _this.pagenums = 1;
      if (tab == "n") {
        _this.qlConTabnum = 0;
        _this.typeNum = "new";
        if (localStorage.token) {
          _this.myquizList();
        } else {
          _this.quizList();
        }
      } else if (tab == "r") {
        _this.qlConTabnum = 1;
        _this.typeNum = "moods";
        if (localStorage.token) {
          _this.myquizList();
        } else {
          _this.quizList();
        }
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.newAnswer);
    this.newAnswer = null;
    window.removeEventListener("scroll", this.handleScroll);
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
