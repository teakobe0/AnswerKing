<style>
.questionDetails {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 276px;
  overflow: hidden;
}

.qd-con {
  /* margin-top: 80px; */
  overflow: hidden;
  background: #f6f6f6;
}
.qd-title-back {
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  margin-bottom: 20px;
  background: #fff;
  min-height: 140px;
}
.qd-title {
  width: 1300px;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
  overflow: hidden;
}
.qd-title-left {
  display: inline-block;
  width: 980px;
}
.qd-title-right {
  text-align: center;
  position: absolute;
  right: 0px;
  top: 20px;
}
.qd-title-right-1 {
  float: left;
  padding: 0 8px;
  /* width: 84px; */
}
.qd-title-right-1 p {
  color: #8590a6;
}
.qd-title-right-1 div {
  color: #000;
  font-weight: 700;
}
.qd-title-right-2 {
  float: left;
  padding: 0 8px;
  width: 84px;
  border-left: 1px solid #ebebeb;
}
.qd-title-right-2 p {
  color: #8590a6;
}
.qd-title-right-2 div {
  color: #000;
  font-weight: 700;
}
.qd-title h2 {
  margin-bottom: 11px;
}
.qd-title p {
  margin-bottom: 11px;
}
.qd-attention {
}
.ql-an {
  color: #0084f0 !important;
  border: 1px solid #0084f0 !important;
}
/* 编辑区域 */
.qd-editCon {
  width: 1300px;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 20px;
  min-height: 320px;
}
.qd-editNull {
  width: 900px;
  height: 300px;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
.qd-editNull p {
  line-height: 300px;
  text-align: center;
  color: #8590a6;
}
.qd-editan {
  width: 900px;
  min-height: 300px;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
.qd-edit {
  width: 1300px;
  margin-bottom: 20px;
}
.qd-edit-submit {
  margin-top: 11px !important;
  float: right;
  margin-bottom: 20px !important;
  margin-left: 10px !important;
}

/* 编辑区域结束 */
/* 竞拍遮罩区域 */
.qd-auctionShade {
  width: 380px;
  height: 300px;
  float: right;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
.auctionShade-con {
  /*width: 300px;*/
  height: 300px;
  overflow: hidden;
  /*margin: 0 auto;*/
  background-color: #fff;
  /*position: relative;*/
  /*top: 50%;*/
  /*transform: translateY(-50%);*/
  /*border-radius: 4px;*/
}
.closeAuctionShade {
  /*position: absolute;*/
  /*right: -50px;*/
  /*top: 10px;*/
  /*color: #fff;*/
  /*cursor: pointer;*/
  /*font-size: 30px;*/
}
.autionShadeInfo {
  height: 50px;
  padding: 16px 20px 16px 20px;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid #f6f6f6;
}
.autionShadeInfo img {
  width: 40px;
  min-width: 40px;
  min-height: 40px;
  vertical-align: top;
  margin-right: 10px;
  margin-top: 5px;
}
.autionShadeInfo b {
  width: 110px;
  font-size: 14px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 16px;
}
.auctionShade-con-Info {
  /*flex: 1 1;*/
  overflow-y: auto;
  overflow-x: hidden;
  height: 300px;
}
.auctionShade-con-TR {
  position: absolute;
  bottom: 16px;
  right: 20px;
  font-size: 14px;
}
.auctionShade-con-time {
  margin-right: 0px;
}
.privateLetter {
  color: #cc8500;
  font-size: 22px;
  cursor: pointer;
}
.privateLetter:hover {
  color: #f3e901;
}
.nullLogin {
  z-index: 999;
  line-height: 320px;
  text-align: center;
  color: rgb(23, 114, 191);
}
.countTime {
  position: absolute;
  right: 0px;
  bottom: 0px;
}
/* 竞拍遮罩区域结束 */
.answerShow {
  border: 1px solid #e6e6e6;
  min-height: 318px;
  background: #fff;
}
.DeupImg {
  margin-bottom: 10px;
  text-align: right;
}
.DeupImg .el-upload--picture-card {
  border: 0 !important;
  width: 50px !important;
  height: 50px !important;
  line-height: 60px !important;
  background-color: #f6f6f6 !important;
}
.DeupImg .el-upload-list--picture-card .el-upload-list__item-actions {
  font-size: 12px !important;
}
.DeupImg .el-upload-list--picture-card .el-upload-list__item {
  width: 50px !important;
  height: 50px !important;
}
.qd-edit .el-dialog {
  margin-top: 4vh !important;
}
.button1 {
  margin-right: 10px !important;
}
/* 聊天记录面板 */
.chatTitle {
  text-align: center;
  line-height: 40px;
  border-bottom: 1px solid #757575a8;
  padding-bottom: 5px;
}
.chatTitle img {
  width: 40px;
  height: 40px;
  border: 1px solid #757575a8;
  border-radius: 20px;
  vertical-align: middle;
  margin-right: 10px;
}
.chatCon {
  height: 450px;
  overflow-x: hidden;
  overflow-y: auto;
  margin-bottom: 20px;
}
.chatCon img {
  width: 40px;
  height: 40px;
  border: 1px solid #757575a8;
  border-radius: 20px;
  line-height: 42px;
  margin-right: 10px;
  float: left;
}
.chatCon span {
  display: inline-block;
  width: 480px;
  /* min-block-size: 42px; */
  /* line-height: 42px; */
  word-wrap: break-word;
  margin-top: 10px;
}
.chatCons {
  min-height: 42px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.chatSend {
}
.submitAns {
  min-height: 40px;
  background: #fff;
  padding-bottom: 10px;
  padding-left: 20px;
  padding: 20px 20px 10px 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #dedede;
}
.subImgdiv {
  width: 40px;
  height: 40px;
  display: inline-block;
}
.subImg {
  width: 40px;
  height: 40px;
}
</style>
<template>
  <div class="questionDetails">
    <homeNav msg="登录/注册" />
    <div v-title data-title="问答大厅-CourseWhale"></div>
    <div class="qd-con">
      <div class="qd-title-back">
        <i
          class="el-icon-chat-line-round privateLetter"
          style="float:right;margin-top:2px;margin-right: 11px;"
          title="通知留言"
          @click="informQuizzer(qlList.que)"
        ></i>
        <div class="qd-title" v-if="qlListShow">
          <p class="countTime" v-if="countdown">倒计时:{{d}}天{{h}}小时{{m}}分{{s}}秒</p>

          <p class="countTime" v-if="countdownText">时间已到您不能在更改答案内容。</p>
          <div class="qd-title-left">
            <h2>{{qlList.que.question.title}}</h2>

            <p v-html="qlList.que.question.content"></p>
            <el-button
              icon="el-icon-edit"
              size="mini"
              class="ql-ask-reply-1 button1"
              @click="replyShade(qlList)"
              v-if="replyShadeShow"
            >竞拍</el-button>
            <el-button
              size="mini"
              class="ql-ask-reply-1 button1"
              @click="editShade(qlList)"
              v-show="editS"
            >编辑</el-button>
            <el-button
              size="mini"
              class="ql-ask-reply-1 button1"
              @click="evaluate(qlList)"
              v-show="evaluateS"
            >评价</el-button>
            <el-button
              size="mini"
              class="ql-ask-reply-1 button1"
              @click="service(qlList.que.question.id)"
              v-show="serviceS"
            >申请客服</el-button>
          </div>

          <div class="qd-title-right">
            <div class="qd-title-right-1">
              <p>截止日期</p>
              <div>{{qlList.que.question.endTime | formatDate}}</div>
            </div>
            <div class="qd-title-right-2" v-if="qlList.bls.length != 0">
              <p>竞拍者</p>
              <div>{{qlList.bls.length}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="qd-editCon">
        <div style="width:1300px;min-height:320px;" v-if="qlListShow" v-loading="loading">
          <div class="nullLogin" v-if="nullLoginShow">登录之后查看答案</div>
          <!-- <div class="answerShow" v-show="answerShows" v-html="myValue"></div> -->
          <div style="float: left">
            <div class="qd-editNull" v-show="qdeditnullShow">
              <p>暂时还没有回答,快去竞拍回答赢取鲸灵币吧!</p>
            </div>
            <div class="qd-editan" v-show="editan">
              <div v-for="item in qlList.als" class="submitAns">
                <div class="subImgdiv" v-for="img in item.images">
                  <img class="subImg" :src="img.url" alt />
                </div>
                <P>{{item.content}}</P>
              </div>
            </div>

            <div style="width:1300px" v-show="submitAnss">
              <div v-for="item in qlList.als" class="submitAns">
                <div class="subImgdiv" v-for="img in item.images">
                  <img class="subImg" :src="img.url" alt />
                </div>
                <P>{{item.content}}</P>
              </div>
            </div>

            <div class="qd-edit" v-show="qdeditShow">
              <div v-show="editors">
                <el-upload
                  :action="imgSiteAns"
                  :headers="myHeaders"
                  list-type="picture-card"
                  :auto-upload="true"
                  class="DeupImg"
                  multiple
                  :on-success="handleAvatarSuccessAns"
                  :before-upload="beforeAvatarUploadAns"
                  :on-preview="handlePictureCardPreviewAns"
                  :on-remove="handleRemoveAns"
                  :file-list="quefileListAns"
                  :data="{questionId:this.qlList.que.question.id}"
                >
                  <i slot="default" class="el-icon-picture" title="添加图片附件"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible" :modal-append-to-body="false">
                  <img width="100%" :src="dialogImageUrl" alt />
                </el-dialog>

                <editor id="tinymce" v-model="myValue" :init="init"></editor>
              </div>

              <el-button
                type="primary"
                class="qd-edit-submit"
                @click="submit"
                v-if="savesubmitShow"
              >提交回答</el-button>
              <el-button
                type="primary"
                class="qd-edit-submit"
                @click="save"
                v-if="replenishShow"
              >补充回答</el-button>
            </div>
          </div>

          <div class="qd-auctionShade" v-show="auctionShow">
            <div class="auctionShade-con">
              <div class="auctionShade-con-Info">
                <div
                  v-if="qlList.bls.length == 0"
                  style="line-height: 300px;text-align: center;color: #8590a6;"
                >还没有竞拍者</div>
                <div v-for="item in qlList.bls" class="autionShadeInfo">
                  <img src="../assets/5.jpg" alt v-show="item.bimage == null" />
                  <img :src="item.bimage" alt v-show="item.bimage != null" />
                  <span>
                    <b>{{item.bname}}</b>
                  </span>
                  <div class="auctionShade-con-TR" v-if="auctionClient">
                    <span
                      class="auctionShade-con-time el-icon-time"
                      title="截止日期"
                    >{{item.bidding.endTime | formatDate}}</span>
                  </div>

                  <el-button
                    type="primary"
                    size="mini"
                    style="float:right;margin-top:0px;"
                    v-if="auctionbutton"
                    @click="auctions(item.bidding.createBy)"
                  >选他答</el-button>
                  <i
                    class="el-icon-chat-line-round privateLetter"
                    style="float:right;margin-top:2px;margin-right: 11px;"
                    v-if="auctionClient"
                    title="通知留言"
                    @click="inform(item)"
                  ></i>
                  <span
                    class="auctionShade-con-reward el-icon-coin"
                    style="float:right;margin-top:7px;margin-right:11px;font-size:14px;width:38px;"
                    v-if="auctionClient"
                    title="悬赏金"
                  >{{item.bidding.currency}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ql-replyShade" v-show="qlreplyShade" @mousewheel.prevent>
      <div class="ql-editReply">
        <h3>选择您向提问人提出的时间和赏金要求</h3>
        <el-form :model="auction" :rules="auctionrules" ref="auction" class="demo-ruleForm">
          <div style="overflow: hidden;">
            <div style="float:left;">
              <div class="PR">答题截止时间</div>
              <el-form-item prop="EndTime">
                <el-date-picker
                  v-model="auction.EndTime"
                  type="datetime"
                  class="auTime"
                  placeholder="选择日期时间"
                  :picker-options="{
                    disabledDate: time => {
                      return time.getTime() < Date.now() - 3600 * 1000 * 24
                    },
                    selectableRange: austartTimeRange
                  }"
                ></el-date-picker>
              </el-form-item>
            </div>
            <div style="float:right;">
              <div class="PR">鲸灵币</div>
              <el-form-item prop="Currency">
                <el-input v-model="auction.Currency" placeholder="鲸灵币(选填)" style="width:130px;"></el-input>
              </el-form-item>
            </div>
          </div>
        </el-form>
        <div style="overflow:hidden">
          <el-button class="releaseQl" type="primary" size="medium" @click="auctionQl('auction')">提交</el-button>
        </div>
        <div class="shadeClose el-icon-close" @click="CloseReplyShade"></div>
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
          <el-form-item prop="Title" class="ql-editQuziTi">
            <el-input v-model="QuestionsQuiz.Title" placeholder="写下你的问题，准确的描述问题更容易得到解答"></el-input>
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
            :file-list="quefileList"
          >
            <i slot="default" class="el-icon-picture" title="添加图片"></i>
          </el-upload>
          <el-dialog :visible.sync="queVisible" :modal-append-to-body="false">
            <img width="100%" :src="queImageUrl" alt />
          </el-dialog>
          <el-form-item prop="Content" class="ql-editNameDetail">
            <editor id="tinymces" v-model="myValues" :init="inits"></editor>
          </el-form-item>
          <div style="overflow: hidden;">
            <div style="float:left;">
              <div class="PR">答题时间</div>
              <el-form-item prop="EndTime">
                <el-date-picker
                  v-model="QuestionsQuiz.EndTime"
                  type="datetime"
                  placeholder="选择日期时间"
                ></el-date-picker>
              </el-form-item>
            </div>
            <div style="float:right;">
              <div class="PR">鲸灵币</div>
              <el-form-item prop="Currency">
                <el-input
                  v-model="QuestionsQuiz.Currency"
                  placeholder="鲸灵币(选填)"
                  style="width:130px;"
                ></el-input>
              </el-form-item>
            </div>
          </div>
        </el-form>
        <div style="overflow:hidden">
          <el-button
            class="releaseQl"
            type="primary"
            size="medium"
            @click="releaseQl('QuestionsQuiz')"
          >发布问题</el-button>
          <el-button size="medium" @click="CloseQuitBt" style="margin-right:10px;float:right;">取消</el-button>
        </div>

        <!-- <div class="qlreleaseClose el-icon-close" @click="CloseQuitBt"></div> -->
      </div>
    </div>
    <div class="ql-shade" v-show="evaluateShade" @mousewheel.prevent>
      <div class="ql-editQuzi">
        <div style="min-height:117px;">
          <div style="float:left;">您的评价:</div>
          <el-switch
            style="display: block;float:right;"
            v-model="evaluateSwitch"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="好评"
            inactive-text="差评"
          ></el-switch>
          <el-input v-model="evaluateInput" style="margin-top:10px;margin-bottom:10px;"></el-input>
          <el-button style="float:right;" type="primary" size="medium" @click="evaluateCon">确定</el-button>
          <el-button style="float:right;margin-right:10px;" size="medium" @click="CloseEvaluate">取消</el-button>
        </div>
      </div>
    </div>
    <div class="ql-shade" v-show="serviceShade" @mousewheel.prevent>
      <div class="ql-editQuzi">
        <div class="qlreleaseClose el-icon-close" @click="CloseService"></div>
      </div>
    </div>
    <div class="ql-shade" v-show="ChatRecords">
      <div class="ql-editQuzi">
        <div style="height:550px">
          <div class="chatTitle">
            <img :src="bls.bimage" alt />
            {{bls.bname}}
          </div>
          <div id="chatConss" class="chatCon">
            <div class="chatCons" v-for="item in ChatRecordArray">
              <img :src="item.img" alt />
              <span>{{item.notice.contentsUrl}}</span>
            </div>
          </div>
          <div class="chatSend">
            <el-input
              v-model="chatSends"
              style="width:480px;margin-right:10px"
              @change="chatSendChange"
            ></el-input>
            <el-button @click="chatSendHead">发送</el-button>
          </div>
        </div>

        <div class="qlreleaseClose el-icon-close" @click="CloseChatRecords"></div>
      </div>
    </div>
    <div class="ql-shade" v-show="quizzerChatRecords">
      <div class="ql-editQuzi">
        <div style="height:550px">
          <div class="chatTitle">
            <img :src="quizzerbls.qimage" alt />
            {{quizzerbls.qname}}
          </div>
          <div id="chatCons" class="chatCon">
            <div class="chatCons" v-for="item in quizzerChatRecordArray">
              <img :src="item.img" alt />
              <span>{{item.notice.contentsUrl}}</span>
            </div>
          </div>
          <div class="chatSend">
            <el-input v-model="quizzerchatSends" style="width:480px;margin-right:10px"></el-input>
            <el-button @click="quizzerChatSendHead">发送</el-button>
          </div>
        </div>

        <div class="qlreleaseClose el-icon-close" @click="quizzerCloseChatRecords"></div>
      </div>
    </div>
    <homeFooter></homeFooter>
  </div>
</template>

<script type="es6">
// @ is an alias to /src
import homeNav from "@/components/public/homeNav.vue";
import homeFooter from "@/components/public/homeFooter.vue";
import { formatDate } from "@/common/js/date.js";
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";
import "tinymce/plugins/code";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/colorpicker";
import "tinymce/plugins/textcolor";

export default {
  name: "questionDetails",
  components: {
    homeNav,
    homeFooter,
    Editor
  },
  props: {
    value: {
      type: String,
      default: "写回答..."
    },
    values: {
      type: String,
      default: "写回答..."
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default: "colorpicker textcolor wordcount contextmenu"
    },
    toolbar: {
      type: [String, Array],
      default:
        "bold italic underline strikethrough | fontsizeselect | forecolor backcolor"
    }
  },
  data() {
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
          formData.append("questionId", this.$route.params.question_id);
          formData.append("file", blobInfo.blob(), blobInfo.filename());

          this.axios({
            method: "POST",
            // 这里是你的上传地址
            url: this.URLport.serverPath + "/File/UploadAnswer",
            async: false,
            data: formData,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
            .then(res => {
              // 这里返回的是你图片的地址
              success(res.data.file);
            })
            .catch(() => {
              // failure("上传失败");
            });
        }
      },
      myValue: this.value,
      inits: {
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
          formData.append("questionId", this.$route.params.question_id);
          formData.append("file", blobInfo.blob(), blobInfo.filename());

          this.axios({
            method: "POST",
            // 这里是你的上传地址
            url: this.URLport.serverPath + "/File/UploadAnswer",
            async: false,
            data: formData,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
            .then(res => {
              // 这里返回的是你图片的地址
              success(res.data.file);
            })
            .catch(() => {
              // failure("上传失败");
            });
        }
      },
      myValues: this.values,
      qlList: {},
      qdeditShow: false,
      auctionShow: true,
      // 竞拍者信息
      autionInfo: [],
      d: "",
      h: "",
      m: "",
      s: "",
      clientID: "",
      // 判断当前登录人是否是竞拍者之一
      auctionClient: false,
      auctionbutton: false,
      endtime: "",
      // 倒计时显示隐藏
      countdown: false,
      countdownText: false,
      // 标题显示隐藏
      qlListShow: false,
      // 保存进度按钮显示隐藏
      savesubmitShow: true,
      // 补充回答
      replenishShow: false,
      // 加载中
      loading: true,
      nullLoginShow: false,
      // 答案展示
      answerShows: false,
      // 暂时没人回答
      editan: false,
      qdeditnullShow: true,
      qlreplyShade: false,
      // 我要答列表
      auction: {
        EndTime: "",
        Currency: "",
        QuestionId: ""
      },
      // 我要答表单验证
      auctionrules: {
        EndTime: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        Currency: [{ required: true, message: "请输入鲸灵币", trigger: "blur" }]
      },
      austartTimeRange: "",
      replyShadeShow: true,
      dialogImageUrl: "",
      dialogVisible: false,
      disableds: false,
      // 编辑评价客服
      qlShade: false,
      evaluateShade: false,
      serviceShade: false,
      editS: false,
      evaluateS: false,
      serviceS: false,
      // 评价内容
      evaluateInput: "",
      evaluateSwitch: true,
      evaluateId: 0,
      QuestionsQuiz: {
        Title: "",
        Content: "",
        EndTime: "",
        Currency: "",
        Img: ""
      },
      // 编辑提问表单验证
      QuestionsQuizrules: {
        Title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          { min: 4, message: "最少输入4个字", trigger: "blur" }
        ],
        Content: [{ required: true, message: "请输入内容", trigger: "blur" }],
        EndTime: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        Currency: [{ required: true, message: "请输入鲸灵币", trigger: "blur" }]
      },
      // 图片
      imgSite: this.URLport.serverPath + "/File/UploadQuestion",
      myHeaders: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      queImageUrl: "",
      queVisible: false,
      quefileList: [],
      imgSiteAns: this.URLport.serverPath + "/File/UploadAnswer",
      queImageUrlAns: "",
      queVisibleAns: false,
      quefileListAns: [],
      quefileListImg: "",
      // 聊天记录
      ChatRecords: false,
      bls: [],
      ChatRecordArray: [],
      chatSends: "",
      quizzerchatSends: "",
      quizzerbls: [],
      quizzerChatRecordArray: [],
      quizzerChatRecords: false,
      timeChat: "",
      timeChatss: "",
      submitAnss:false,
      editors:false
    };
  },
  created: function() {
    const _this = this;
    _this.personal();
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd-hh:mm");
    },
    sendTimeDate: function(date) {
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
    }
  },
  methods: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
    countTime: function() {
      //获取当前时间
      var date = new Date();
      var now = date.getTime();
      //设置截止时间
      var endDate = new Date(this.endtime);
      // var endDate = new Date("2020-06-4 17:07:00");
      var end = endDate.getTime();
      //时间差
      var leftTime = end - now;
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24); //天数我没用到，暂且写上
        this.h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        this.m = Math.floor((leftTime / 1000 / 60) % 60);
        this.s = Math.floor((leftTime / 1000) % 60);
      }
      if (leftTime <= 0) {
        this.d = 0;
        this.h = 0;
        this.m = 0;
        this.s = 0;
        this.countdownText = true;
        this.countdown = false;
        this.savesubmitShow = false;
        this.replenishShow = false;
        return;
      }
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(this.countTime, 1000);
    },
    personal: function() {
      const _this = this;
      if (localStorage.token) {
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
            _this.clientID = res.data.data.id;
            _this.QuDe();
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        _this.QuDe();
      }
    },
    // 写回答按钮
    myAnswer() {
      const _this = this;
      // _this.qdeditShow = true;
    },
    // 检索问题详情
    QuDe() {
      const _this = this;

      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/Details`,
          async: false,
          params: {
            questionid: _this.$route.params.question_id
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          // auctionClient 竞拍者栏的留言、选他答、时间、悬赏的隐藏
          // qdeditShow 编辑器的隐藏
          // savesubmitShow 补充回答提交的隐藏
          // countdown 倒计时的隐藏
          // auctionShow 竞拍者栏的整体隐藏
          // answerShows 满屏答案的显示隐藏
          // qdeditnullShow 左侧没有答案的框体
          // editan 左侧有答案的框体
          // 1:保存 2：正在竞拍 3：已选竞拍者，4：已回答，5：申请客服，6：已完成,7:已关闭
          if (res.data.status == 1) {
            _this.loading = false;
            _this.qlList = res.data.data;

            _this.qlListShow = true;
            _this.nullLoginShow = false;
            if (localStorage.token) {
              for (var i = 0; i < _this.qlList.als.length; i++) {
                _this.$set(_this.qlList.als[i], "images", []);
                var a = _this.qlList.als[i].img.split("|");
                for (var j = 0; j < a.length; j++) {
                  _this.qlList.als[i].images.push({ url: a[j] });
                }
              }
              console.log(_this.qlList);
              // 确定登录人是否是竞拍者之一
              for (var i = 0; i < _this.qlList.bls.length; i++) {
                if (_this.clientID == _this.qlList.bls[i].bidding.createBy) {
                  _this.auctionClient = false;
                  _this.auctionbutton = false;
                  _this.replyShadeShow = false;
                  console.log("我是竞拍者之一");
                }
              }
              //         editS:false,
              // evaluateS:false,
              // serviceS:false,
              // 我是提问者
              if (
                _this.clientID == _this.qlList.que.question.createBy &&
                _this.qlList.que.question.status < 3
              ) {
                _this.auctionClient = true; //竞拍者栏的留言、选他答、时间、悬赏的隐藏
                _this.auctionbutton = true;
                _this.auctionShow = true; //竞拍者栏的整体隐藏
                _this.qdeditnullShow = true; //左侧没有答案的框体
                _this.editan = false;
                _this.qdeditShow = false; //编辑器的隐藏
                _this.savesubmitShow = false; //保存进度提交的隐藏
                _this.replenishShow = false;
                _this.countdown = false; //倒计时的隐藏
                _this.replyShadeShow = false;
                _this.editS = true;
                console.log("提问者小于3");
              } else if (
                _this.clientID == _this.qlList.que.question.createBy &&
                _this.qlList.que.question.status == 3
              ) {
                _this.auctionClient = true; //竞拍者栏的留言、选他答、时间、悬赏的隐藏
                _this.auctionbutton = false;
                _this.auctionShow = true; //竞拍者栏的整体隐藏
                _this.qdeditnullShow = true; //左侧没有答案的框体
                _this.editan = false;
                _this.qdeditShow = false; //编辑器的隐藏
                _this.savesubmitShow = false; //保存进度提交的隐藏
                _this.replenishShow = false;
                _this.countdown = false; //倒计时的隐藏
                _this.replyShadeShow = false;
                _this.editS = true;
                console.log("提问者等于3");
              } else if (
                _this.clientID == _this.qlList.que.question.createBy &&
                _this.qlList.que.question.status == 4
              ) {
                _this.auctionClient = true;
                _this.auctionbutton = false;
                _this.auctionShow = true;
                _this.qdeditnullShow = false;
                _this.editan = true;
                _this.qdeditShow = false; //编辑器的隐藏
                _this.savesubmitShow = false; //保存进度提交的隐藏
                _this.replenishShow = false;
                _this.countdown = false; //倒计时的隐藏
                _this.replyShadeShow = false;
                _this.evaluateS = true;
                console.log("提问者等于4");
              } else if (
                _this.clientID == _this.qlList.que.question.createBy &&
                _this.qlList.que.question.status == 5
              ) {
                _this.auctionClient = true;
                _this.auctionbutton = false;
                _this.auctionShow = true;
                _this.qdeditnullShow = false;
                _this.editan = true;
                _this.qdeditShow = false; //编辑器的隐藏
                _this.savesubmitShow = false; //保存进度提交的隐藏
                _this.replenishShow = false;
                _this.countdown = false; //倒计时的隐藏
                _this.replyShadeShow = false;
                console.log("提问者等于5");
              } else if (
                _this.clientID == _this.qlList.que.question.createBy &&
                _this.qlList.que.question.status >= 6
              ) {
                _this.auctionClient = false; //竞拍者栏的留言、选他答、时间、悬赏的隐藏
                _this.auctionbutton = false;
                _this.auctionShow = false; //竞拍者栏的整体隐藏
                _this.qdeditnullShow = false; //左侧没有答案的框体
                _this.editan = false;
                _this.qdeditShow = false; //编辑器的隐藏
                _this.savesubmitShow = false; //保存进度提交的隐藏
                _this.replenishShow = false;
                _this.countdown = false; //倒计时的隐藏
                _this.answerShows = true; //满屏答案的显示隐藏
                _this.submitAnss = true;
                _this.replyShadeShow = false;
                _this.serviceS = true;
                console.log("提问者大于6");
              }

              // 我是答题者
              if (
                _this.clientID == _this.qlList.que.question.answerer &&
                _this.qlList.que.question.status <= 3
              ) {
                _this.auctionClient = false; //竞拍者栏的留言、选他答、时间、悬赏的隐藏
                _this.auctionbutton = false;
                _this.auctionShow = false; //竞拍者栏的整体隐藏
                _this.qdeditnullShow = false; //左侧没有答案的框体
                _this.qdeditShow = true; //编辑器的隐藏
                _this.editors = true;
                _this.savesubmitShow = true; //保存进度提交的隐藏
                _this.replenishShow = false;
                _this.countdown = true; //倒计时的隐藏
                _this.answerShows = false; //满屏答案的显示隐藏
                _this.replyShadeShow = false;
                _this.endtime = _this.formatDate(
                  _this.qlList.que.question.endTime
                );
                _this.countTime();
                console.log("答题者小于等于3");
              } else if (
                _this.clientID == _this.qlList.que.question.answerer &&
                _this.qlList.que.question.status == 4
              ) {
                _this.auctionClient = false; //竞拍者栏的留言、选他答、时间、悬赏的隐藏
                _this.auctionbutton = false;
                _this.auctionShow = false; //竞拍者栏的整体隐藏
                _this.qdeditnullShow = false; //左侧没有答案的框体
                _this.submitAnss = true;
                _this.qdeditShow = true; //编辑器的隐藏
                _this.savesubmitShow = false; //保存进度提交的隐藏
                _this.replenishShow = true;
                _this.countdown = true; //倒计时的隐藏
                _this.answerShows = false; //满屏答案的显示隐藏
                _this.replyShadeShow = false;
                _this.endtime = _this.formatDate(
                  _this.qlList.que.question.endTime
                );
                _this.countTime();
                console.log("答题者等于4");
              } else if (
                _this.clientID == _this.qlList.que.question.answerer &&
                _this.qlList.que.question.status == 5
              ) {
                _this.auctionClient = false; //竞拍者栏的留言、选他答、时间、悬赏的隐藏
                _this.auctionbutton = false;
                _this.auctionShow = false; //竞拍者栏的整体隐藏
                _this.qdeditnullShow = false; //左侧没有答案的框体
                _this.editan = false;
                _this.submitAnss = true;
                _this.qdeditShow = true; //编辑器的隐藏
                _this.savesubmitShow = false; //保存进度提交的隐藏
                _this.replenishShow = true;
                _this.countdown = true; //倒计时的隐藏
                _this.answerShows = true; //满屏答案的显示隐藏
                _this.replyShadeShow = false;
                _this.endtime = _this.formatDate(
                  _this.qlList.que.question.endTime
                );
                _this.countTime();
                console.log("答题者等于5");
              }
              // 当问题已完成
              if (_this.qlList.que.question.status >= 6) {
                _this.auctionClient = false; //竞拍者栏的留言、选他答、时间、悬赏的隐藏
                _this.auctionbutton = false;
                _this.auctionShow = false; //竞拍者栏的整体隐藏
                _this.qdeditnullShow = false; //左侧没有答案的框体
                _this.editan = false;
                _this.qdeditShow = false; //编辑器的隐藏
                _this.savesubmitShow = false; //保存进度提交的隐藏
                _this.replenishShow = false;
                _this.countdown = false; //倒计时的隐藏
                _this.answerShows = true; //满屏答案的显示隐藏
                _this.submitAnss = true;
                _this.replyShadeShow = false;
                console.log("问题已完成");
              }

              if (_this.qlList.answer != null) {
                _this.myValue = _this.qlList.answer.content;
                console.log("有答案");
              }
            } else {
              _this.qdeditShow = false;
              _this.nullLoginShow = true;
              _this.auctionClient = false;
              _this.auctionbutton = false;
              _this.auctionShow = false;
              _this.qdeditShow = false;
              _this.qdeditnullShow = false;
              _this.savesubmitShow = false;
              _this.answerShows = false;
              _this.replyShadeShow = false;
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 选他答
    auctions(clienid) {
      const _this = this;
      this.$prompt("请输入您的账号密码", "CourseWhale", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          _this
            .axios({
              method: "get",
              url: `${_this.URLport.serverPath}/Questions/Choose`,
              async: false,
              params: {
                questionid: _this.$route.params.question_id,
                clienid: clienid,
                password: value
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
                _this.auctionbutton = false;
                _this.$message({
                  message: "发布成功,竞拍者可以开始答题。",
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
        })
        .catch(() => {});
    },
    informQuizzer(item) {
      const _this = this;
      _this.quizzerbls = item;
      _this.quizzerChatRecords = true;
      console.log(item);

      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Notice/ChatRecords`,
          async: false,
          params: {
            receiveid: item.question.createBy
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          _this.quizzerChatRecordArray = res.data.data;
          _this.scrollToBottom();
          _this.timeChatss = setInterval(_this.informss, 5000);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    informss() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Notice/ChatRecords`,
          async: false,
          params: {
            receiveid: _this.quizzerbls.question.createBy
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          _this.quizzerChatRecordArray = res.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 发送消息
    quizzerChatSendHead() {
      const _this = this;
      clearInterval(this.timeChatss);
      var json = {};
      json.ReceiveId = _this.quizzerbls.question.createBy; //接收人ID
      json.ContentsUrl = _this.quizzerchatSends; //通知内容
      _this
        .axios({
          method: "post",
          url: `${_this.URLport.serverPath}/Notice/Add`,
          async: false,
          data: json,
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            _this.informQuizzer(_this.quizzerbls);
            _this.quizzerchatSends = "";
          } else {
            _this.$message({
              message: "发送失败",
              type: "error"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 通知留言
    inform(item) {
      const _this = this;
      _this.bls = item;
      _this.ChatRecords = true;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Notice/ChatRecords`,
          async: false,
          params: {
            receiveid: item.bidding.createBy
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          _this.ChatRecordArray = res.data.data;
          _this.scrollToBottom();
          _this.timeChat = setInterval(_this.informs, 5000);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    informs() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Notice/ChatRecords`,
          async: false,
          params: {
            receiveid: _this.bls.bidding.createBy
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          _this.ChatRecordArray = res.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    chatSendChange() {
      const _this = this;
      clearInterval(_this.timeChat);
    },
    // 发送消息
    chatSendHead() {
      const _this = this;
      clearInterval(this.timeChat);
      var json = {};
      json.ReceiveId = _this.bls.bidding.createBy; //接收人ID
      json.ContentsUrl = _this.chatSends; //通知内容
      _this
        .axios({
          method: "post",
          url: `${_this.URLport.serverPath}/Notice/Add`,
          async: false,
          data: json,
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            _this.inform(_this.bls);
            _this.chatSends = "";
          } else {
            _this.$message({
              message: "发送失败",
              type: "error"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 提交回答
    submit() {
      const _this = this;
      // 如果这个答案保存过就把ID和CreateBy赋值如果是第一次就不赋值
      var json = {};

      console.log("没答案");
      json.questionId = _this.$route.params.question_id; //问题ID
      json.content = this.myValue; //答案内容
      // json.id = 0; //答案ID
      // json.createBy = 0; //答题人ID
      json.Img = _this.quefileListImg;

      _this
        .axios({
          method: "post",
          url: `${_this.URLport.serverPath}/Answer/Add`,
          async: false,
          data: json,
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          if (res.data.status == 1) {
            _this.QuDe();
            _this.$message({
              message: "保存成功",
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
    },
    // 保存进度
    save() {
      const _this = this;
      _this.editors = true;
      _this.savesubmitShow = true;
    },
    // 竞拍按钮
    replyShade(item) {
      const _this = this;
      console.log(item);
      if (localStorage.getItem("token")) {
        _this.auction.QuestionId = item.que.question.id;
        _this.auction.EndTime = item.que.question.endTime;
        _this.auction.Currency = item.que.question.currency;
        _this.qlreplyShade = !_this.qlreplyShade;
      } else {
        _this.$message({
          message: "请登录之后竞拍",
          type: "warning"
        });
      }
    },
    // 编辑按钮
    editShade(list) {
      const _this = this;
      _this.QuestionsQuiz.Title = list.que.question.title;
      _this.QuestionsQuiz.Content = list.que.question.content;
      _this.myValues = list.que.question.content;
      _this.QuestionsQuiz.EndTime = list.que.question.endTime;
      _this.QuestionsQuiz.Currency = list.que.question.currency;
      _this.QuestionsQuiz.id = list.que.question.id;
      _this.QuestionsQuiz.Img = list.que.question.img;
      var a = list.que.question.img.split("|");
      for (var i = 0; i < a.length; i++) {
        _this.quefileList.push({ url: a[i], response: { file: a[i] } });
      }
      _this.qlShade = !_this.qlShade;
    },
    // 编辑取消
    CloseQuitBt() {
      const _this = this;
      _this.quefileList = [];
      _this.qlShade = !_this.qlShade;
    },
    // 评价按钮
    evaluate(id) {
      const _this = this;
      _this.evaluateShade = !_this.evaluateShade;
      _this.evaluateId = id;
      _this.evaluateSwitch = true;
    },
    evaluateCon() {
      const _this = this;
      let grades = 5;
      if (_this.evaluateSwitch == false) {
        grades = 1;
      }
      console.log(_this.evaluateId);
      _this
        .axios({
          method: "put",
          url: `${_this.URLport.serverPath}/Questions/Evaluate`,
          async: false,
          params: {
            questionid: _this.evaluateId,
            content: _this.evaluateInput,
            grade: grades
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
            _this.quizList();
            _this.evaluateShade = false;
            _this.$message({
              message: "评价成功",
              type: "success"
            });
          } else {
            _this.$message({
              message: "评价失败",
              type: "error"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 申请客服按钮
    service(id) {
      const _this = this;
      // _this.serviceShade = !_this.serviceShade;
      console.log(id);
      this.$prompt("您要对客服说:", "CourseWhale", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          _this
            .axios({
              method: "put",
              url: `${_this.URLport.serverPath}/Questions/ForService`,
              async: false,
              params: {
                questionid: id,
                reason: value
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
                _this.$message({
                  message: "发送成功",
                  type: "success"
                });
              } else {
                _this.$message({
                  message: "发送失败",
                  type: "error"
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        })
        .catch(() => {});
    },
    // 隐藏我要答
    CloseReplyShade() {
      const _this = this;
      _this.qlreplyShade = !_this.qlreplyShade;
    },
    // 我要答竞拍确定
    auctionQl(auction) {
      const _this = this;
      _this.$refs[auction].validate(valid => {
        if (valid) {
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/Bidding/Add`,
              async: false,
              data: _this.auction,
              xhrFields: {
                withCredentials: true
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            .then(function(res) {
              if (res.data.status == 1) {
                _this.qlreplyShade = !_this.qlreplyShade;
                _this.QuDe();
                _this.replyShadeShow = false;
                _this.$message({
                  message: "竞拍成功。",
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
      });
    },
    handleRemoveAns(file) {
      const _this = this;
      _this
        .axios({
          method: "delete",
          url: `${_this.URLport.serverPath}/Questions/RemoveImg`,
          async: false,
          params: {
            imgurl: file.response.file
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          var imgurl = "";
          for (let i = 0; i < fileList.length; i++) {
            imgurl = imgurl + "|" + fileList[i].response.file;
          }
          _this.quefileListImg = imgurl.slice(1);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handlePictureCardPreviewAns(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleAvatarSuccessAns(res, file, fileList) {
      const _this = this;
      console.log(fileList);
      var imgurl = "";
      for (let i = 0; i < fileList.length; i++) {
        imgurl = imgurl + "|" + fileList[i].response.file;
      }
      _this.quefileListImg = imgurl.slice(1);
    },
    beforeAvatarUploadAns(file) {
      console.log(file);
    },
    CloseEvaluate() {
      const _this = this;
      _this.evaluateShade = !_this.evaluateShade;
    },
    CloseService() {
      const _this = this;
      _this.serviceShade = !_this.serviceShade;
    },
    // 编辑发布问题
    releaseQl(QuestionsQuiz) {
      const _this = this;
      _this.QuestionsQuiz.Content = _this.myValues;
      console.log(_this.QuestionsQuiz);
      _this.$refs[QuestionsQuiz].validate(valid => {
        if (valid) {
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/Questions/Add`,
              async: false,
              data: _this.QuestionsQuiz,
              xhrFields: {
                withCredentials: true
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            .then(function(res) {
              if (res.data.status == 1) {
                _this.QuestionsQuiz.Title = "";
                _this.QuestionsQuiz.Content = "";
                _this.QuestionsQuiz.EndTime = new Date();
                _this.QuestionsQuiz.Currency = "";
                _this.QuestionsQuiz.Img = "";
                _this.qlShade = !_this.qlShade;
                _this.$message({
                  message: "发布成功,将跳转到新页面",
                  type: "success"
                });
                _this.$router.push({
                  path: "/questionDetails/" + res.data.data.id
                });
                _this.$router.go(0);
              } else {
                _this.$message({
                  message: "发布失败",
                  type: "error"
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      });
    },
    handleRemove(file, fileList) {
      const _this = this;
      _this
        .axios({
          method: "delete",
          url: `${_this.URLport.serverPath}/Questions/RemoveImg`,
          async: false,
          params: {
            questionid: _this.$route.params.question_id,
            imgurl: file.response.file
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          var imgurl = "";
          for (let i = 0; i < fileList.length; i++) {
            imgurl = imgurl + "|" + fileList[i].response.file;
          }
          _this.QuestionsQuiz.Img = imgurl.slice(1);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handlePictureCardPreview(file) {
      this.queImageUrl = file.url;
      this.queVisible = true;
      console.log(file);
    },
    handleAvatarSuccess(res, file, fileList) {
      const _this = this;
      console.log(fileList);
      var imgurl = "";
      for (let i = 0; i < fileList.length; i++) {
        imgurl = imgurl + "|" + fileList[i].response.file;
      }
      _this.QuestionsQuiz.Img = imgurl.slice(1);
      console.log(_this.QuestionsQuiz.Img);
    },
    beforeAvatarUpload(file) {
      console.log(file);
    },
    CloseChatRecords() {
      this.ChatRecords = false;
      clearInterval(this.timeChat);
    },
    quizzerCloseChatRecords() {
      this.quizzerChatRecords = false;
      clearInterval(this.timeChatss);
    },
    // DIV里的滚动条在底部
    scrollToBottom() {
      this.$nextTick(function() {
        let div = document.getElementById("chatCons");
        let divs = document.getElementById("chatConss");

        div.scrollTop = div.scrollHeight;
        divs.scrollTop = divs.scrollHeight;
      });
    }
  },
  mounted() {
    tinymce.init({});
  },
  beforeRouteLeave: function(to, from, next) {
    next(false);
    if (this.value != "写回答..." && this.qdeditShow) {
      this.$confirm("离开本页面?请注意保存您的数据.", "CourseWhale", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          next();
        })
        .catch(() => {});
    } else {
      next();
    }
  },
  beforeDestroy() {
    clearInterval(this.timeChat);
    clearInterval(this.timeChatss);
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
      }
    },
    value(newValue) {
      this.myValue = newValue;
    },
    myValue(newValue) {
      this.$emit("input", newValue);
    }
  }
};
</script>
