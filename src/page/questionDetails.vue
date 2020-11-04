<template>
  <div class="questionDetails">
    <homeNav msg="登录/注册" />
    <div v-title data-title="问答大厅-CourseWhale"></div>
    <div class="qd-con">
      <div class="qdConMe">
        <div class="qdConLeft" v-if="qdConLeftShow">
          <div class="qdConTitle">
            <i
              class="el-icon-arrow-up DeShowCSS"
              @click="DeShowHand"
              v-show="DeShow == true"
            ></i>
            <i
              class="el-icon-arrow-down DeShowCSS"
              @click="DeShowHand"
              v-show="DeShow == false"
            ></i>
            <h4>{{ qlList.question.title }}</h4>
            <div class="qlBodyImgD">
              <img :src="qlList.qimage" alt v-show="qlList.qimage != null" />
              <img
                src="../assets/头像.jpg"
                alt
                v-show="qlList.qimage == null"
              />
              {{ qlList.qname }}
              <span>{{ qlList.Times }}</span>
            </div>
            <div v-show="DeShow">
              <p
                style="font-size: 14px; margin-bottom: 15px"
                v-html="qlList.question.content"
              ></p>
              <div>
                <img
                  class="qlBodyQuImg"
                  v-for="item in qlList.images"
                  :src="item.url"
                  alt
                  @click="suspendImg(item.url)"
                />
              </div>

              <div style="margin-top: 15px; min-height: 36px" class="upp">
                <!-- <span class="qlBodyIs">{{qlList.question.currency}}&nbsp;鲸灵币</span> -->
                <el-button
                  size="mini"
                  class="button2"
                  type="primary"
                  @click="editShade(qlList)"
                  v-show="editS"
                  icon="el-icon-edit-outline"
                  >{{$t('question.con25')}}</el-button
                >
                <!-- <el-button
                  size="mini"
                  class="button2"
                  type="primary"
                  @click="editIMG(qlList)"
                  v-show="quizzerUpload"
                  >上传补充材料</el-button
                > -->
                <div v-show="quizzerUpload" style="display:inline-block;">
                  <el-upload
                  :action="imgSite"
                  :headers="myHeaders"
                  list-type="picture-card"
                  :auto-upload="true"
                  class="upImgs"
                  multiple
                  :on-success="quUphandleAvatarSuccess"
                  :before-upload="quUpbeforeAvatarUpload"
                  :on-preview="quUphandlePictureCardPreview"
                  :on-remove="quUphandleRemove"
                  :file-list="quUpfileList"
                  :show-file-list="false"
                  
                >
                  <el-button size="small" type="primary" class="upImgBut">
                    {{$t('question.con26')}}
                    <i class="el-icon-picture"></i>
                  </el-button>
                </el-upload>
                <el-dialog
                  :visible.sync="dialogVisible"
                  :modal-append-to-body="false"
                >
                  <img width="100%" :src="dialogImageUrl" alt />
                </el-dialog>
                </div>
                
                <!-- <el-button
                size="mini"
                type="primary"
                class="button2"
                @click="evaluate(qlList.question.id)"
                v-show="evaluateS"
              >评价</el-button>-->
                <el-button
                  size="mini"
                  class="button2"
                  type="primary"
                  @click="service(qlList.question.id)"
                  v-show="serviceS"
                  >{{$t('question.con27')}}</el-button
                >
                <!-- <el-button
                class="el-icon-chat-line-round privateLetter"
                style="margin-top:2px;margin-right: 11px;"
                title="通知留言"
                v-show="inforQuiz"
                @click="informQuizzer(qlList)"
              ></el-button>-->
                <el-button
                  size="mini"
                  class="collect"
                  @click="collectQue(qlList.question.id)"
                  v-show="inforQuiz"
                  icon="el-icon-star-on"
                  >{{$t('question.con28')}}</el-button
                >

                <div style="float: right; margin-top: 7.5px">
                  <p
                    style="
                      float: left;
                      font-size: 14px;
                      color: #888888;
                      margin-right: 20px;
                    "
                  >
                    {{ qlList.favourite }}{{$t('question.con29')}}
                  </p>
                  <p style="float: left; font-size: 14px; color: #888888">
                    {{ qlList.question.views }}{{$t('question.con30')}}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div
            style="overflow:hidden;margin-top:20px;margin-bottom:20px;display:none"
            
          >
            <div class="qdConMyBls1"></div>
            <div class="qdConMyBls2">你已选择 {{qlList.bls[0].bname}} 回答本问题</div>
            <div class="qdConMyBls3"></div>
          </div>-->
          <div v-show="replyShadeShow">
            <div class="qd-Time">
              {{$t('question.con31')}}
              <b>{{ qlList.question.endTime | formatDate }}</b> {{$t('question.con32')}}
              {{ d }}{{$t('question.con33')}}{{ h }}{{$t('question.con34')}}{{ m }}{{$t('question.con35')}}
            </div>
            <div
              class="qdConEvaluate"
              @click="replyShade(qlList)"
              v-if="replyShadeShow"
            >
              {{$t('question.con36')}}
            </div>
          </div>
          <div class="zhengzaijingpai" v-if="currencyNums">
            <img :src="clientImg" v-show="clientImg.length > 30" alt="" />
            <img
              src="../assets/头像.jpg"
              v-show="clientImg.length < 30"
              alt=""
            />
            <div class="zheng1">{{$t('question.con37')}}</div>
            <span class="zheng2">{{$t('question.con38')}}</span>
            <div class="zheng3">
              <span>{{ currencyNum }}</span>
              <br />
              <p>{{$t('question.con39')}}</p>
            </div>
            <div class="zheng4">
              <el-button
                @click="editauctionshow"
                size="small"
                style="
                  color: #fff;
                  background-color: #3291cb;
                  border: none;
                  font-size: 14px;
                "
                >{{$t('question.con40')}}</el-button
              >
            </div>
          </div>
          <div
            class="qd-title-right-2"
            v-if="blsinfo.length > 0 && qlList.question.answerer == 0"
          >
            <div class="qd-title-right-2-l"></div>
            <p>{{ blsinfo.length }}{{$t('question.con41')}}</p>
            <div class="qd-title-right-2-r"></div>
          </div>
          <!-- <div class="qd-title-right-3" v-if="selectbname">
            <div></div>
            <p>你已选择&nbsp;{{ qlList.bls[0].bname }}&nbsp;回答问题</p>
            <div></div>
          </div> -->
          <!-- <div class="qd-title-right-3" v-if="qlList.bls.length == 0">
            <div></div>
            <p>暂时无人参与竞拍</p>
            <div></div>
          </div> -->
          <div v-show="questionCurrSa == false">
            <div class="qdConBls" v-for="item in blsinfo">
              <div class="qdConBlsName">
                <img
                  class="qdConBlsBimg"
                  :src="item.bimage"
                  alt
                  v-show="item.bimage != null"
                />
                <img
                  class="qdConBlsBimg"
                  src="../assets/头像.jpg"
                  alt
                  v-show="item.bimage == null"
                />
                <div>
                  <b v-show="qdConMyBls == false">{{ item.bname }}</b>
                  <b v-show="qdConMyBls == true">{{ item.bname }}</b>
                  <router-link
                    :to="'/personalQuestions/' + item.bidding.createBy"
                    >{{$t('question.con42')}}</router-link
                  >
                </div>
              </div>
              <div class="qdConBlsCurrency">
                <span>{{ item.bidding.currency }}</span>
                <br /><span style="font-size: 12px; color: #333">{{$t('question.con39')}}</span>
              </div>
              <div class="qdConBlsgrade">
                <p>{{ item.gradetext }}%</p>
                <el-rate
                  v-model="item.grade"
                  disabled
                  style="float: left; position: relative; top: -2px"
                >
                </el-rate>
                <div
                  style="
                    font-size: 14px;
                    color: #333;
                    margin-top: 25px;
                    letter-spacing: 2px;
                  "
                >
                  {{$t('question.con43')}}{{ item.qnum }}{{$t('question.con44')}}
                </div>
                <!-- 完成时间:{{ item.bidding.endTime | formatDate }} -->
              </div>

              <div class="qdConBlsR">
                <div
                  class="qdConBlsR1"
                  @click="inform(item)"
                  v-if="auctionClient"
                >
                  {{$t('question.con45')}}
                </div>
                <div
                  class="qdConBlsR2"
                  v-if="auctionbutton"
                  @click="auctionss(item.bidding.createBy)"
                >
                  {{$t('question.con46')}}
                </div>
              </div>
            </div>
          </div>
          <div v-show="questionCurrSa == true">
            <div class="questionCurrCss" v-for="item in blsinfo">
              <div class="questionCurrName">
                <div
                  v-show="qdConMyBls == false"
                  style="font-size: 12px; color: #333"
                >
                  {{$t('question.con47')}}
                </div>
                <div
                  v-show="qdConMyBls == true"
                  style="font-size: 12px; color: #333"
                >
                  {{$t('question.con48')}}
                </div>
                <img
                  class="questionCurrBimg"
                  :src="item.bimage"
                  alt
                  v-show="item.bimage != null"
                />
                <img
                  class="questionCurrBimg"
                  src="../assets/头像.jpg"
                  alt
                  v-show="item.bimage == null"
                />
                <div>
                  <b v-show="qdConMyBls == false">{{ item.bname }}</b>
                  <b v-show="qdConMyBls == true">{{ item.bname }}</b>
                  <router-link
                    :to="'/personalQuestions/' + item.bidding.createBy"
                    >{{$t('question.con42')}}</router-link
                  >
                </div>
              </div>
              <div class="questionCurrTime">
                <div style="font-size: 12px; color: #333">{{$t('question.con142')}}</div>
                <div style="margin-top: 15px">
                  <p style="color: #333">
                    {{ qlList.question.endTime | formatDate }}
                  </p>
                  <span
                    style="
                      color: #333;
                      font-size: 12px;
                      margin-top: 7px;
                      display: block;
                    "
                    >{{$t('question.con133')}} {{ d }}{{$t('question.con33')}}{{ h }}{{$t('question.con34')}}{{ m }}{{$t('question.con35')}}</span
                  >
                </div>
              </div>
              <div class="questionCurrMon">
                <div style="font-size: 12px; color: #333">{{$t('question.con143')}}</div>
                <div style="margin-top: 15px">
                  <b style="color: #333">{{ item.bidding.currency }}</b
                  ><br />
                  <p style="color: #333; font-size: 12px; margin-top: 7px">
                    {{$t('question.con39')}}
                  </p>
                </div>
              </div>
              <div class="questionCurrType">
                <div style="font-size: 12px; color: #333">{{$t('question.con144')}}</div>
                <div style="margin-top: 15px; height: 41px">
                  <!-- 4：已回答，5：申请客服，6：已完成,7:已关闭 -->
                  <b v-show="qlList.question.status == 3" style="color: #333"
                    >{{$t('question.con49')}}</b
                  >
                  <b v-show="qlList.question.status == 4" style="color: #333"
                    >{{$t('question.con50')}}</b
                  >
                  <b v-show="qlList.question.status == 5" style="color: #333"
                    >{{$t('question.con51')}}</b
                  >
                  <b v-show="qlList.question.status == 6" style="color: #333"
                    >{{$t('question.con52')}}</b
                  >
                  <b v-show="qlList.question.status == 7" style="color: #333"
                    >{{$t('question.con53')}}</b
                  >
                </div>
              </div>
              <div class="questionCurrJiao">
                <div
                  v-show="qdConMyBls == false"
                  style="font-size: 12px; color: #333; text-align: right"
                >
                  {{$t('question.con54')}}
                </div>
                <div
                  v-show="qdConMyBls == true"
                  style="font-size: 12px; color: #333; text-align: right"
                >
                  {{$t('question.con55')}}
                </div>
                <div style="margin-top: 15px" v-show="qdConMyBls == false">
                  <div class="qdConBlsR3" @click="informQuizzer(qlList)">
                    {{$t('question.con45')}}
                  </div>
                </div>
                <div style="margin-top: 15px" v-show="qdConMyBls == true">
                  <div class="qdConBlsR3" @click="inform(item)">{{$t('question.con45')}}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="qdConMyBls" v-show="qdConMyBls">
            <div style="overflow:hidden;" v-show="auctionText">
              <div class="qdConMyBls1"></div>
              <div class="qdConMyBls2">你已选择 {{qlList.bls[0].bname}} 回答本问题</div>
              <div class="qdConMyBls3"></div>
            </div>
            <div class="qdConBls">
              <b>回答者&nbsp;{{qlList.bls[0].bname}}</b>
              <div class="qdConBlsD">
                <img src="../assets/问答详情1.jpg" alt />
                完成时间:{{qlList.bls[0].bidding.endTime | formatDate}}
              </div>
              <div class="qdConBlsD">
                <img src="../assets/问答详情2.jpg" alt />
                鲸灵币:{{qlList.bls[0].bidding.currency}}
              </div>
              <div class="qdConBlsR">
                <div class="qdConBlsR1">
                  <img src="../assets/问答详情3.jpg" alt />聊天
                </div>
              </div>
            </div>
          </div>-->
          <div class="qdConMyAns" v-show="editan">
            <div class="qd-editan">
              <div v-for="item in alsinfo" class="submitAns">
                <div style="overflow: hidden; margin-bottom: 33px">
                  <div class="qdEditanName">
                    <span style="color: #333">{{ blsinfo[0].bname }}</span
                    >&nbsp;{{$t('question.con56')}}
                  </div>
                  <div class="qdEditanTime">
                    {{ item.createTime | formatDate }}
                  </div>
                </div>
                <P v-html="item.content"></P>
                <div class="subImgdiv" v-for="img in item.images">
                  <img
                    class="subImg"
                    :src="img.url"
                    alt
                    @click="suspendImg(img.url)"
                  />
                </div>
              </div>
            </div>
            <!-- <div class="qdConMyAnsTi">
              <div>XXX 发布了回答</div>
              <span>时间</span>
            </div>
            <div>内容</div>-->
          </div>
          <div
            class="qdConEvaluateP"
            @click="evaluate(qlList.question.id)"
            v-show="evaluateS"
          >
            {{$t('question.con57')}}
          </div>

          <div class="countTime" v-if="countdown">
            <div style="margin-bottom: 14px; font-size: 20px">
              {{$t('question.con58')}}&nbsp;{{$t('question.con59')}}
            </div>
            <div style="font-size: 14px">
              {{$t('question.con60')}}{{$t('question.con133')}}{{ d }}{{$t('question.con33')}}{{ h }}{{$t('question.con34')}}{{ m }}{{$t('question.con35')}}{{
                s
              }}{{$t('question.con61')}}
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
                :data="{ questionId: this.qlList.question.id }"
              >
                <el-button size="small" type="primary" class="upImgBut">
                  {{$t('question.con145')}}
                  <i class="el-icon-picture"></i>
                </el-button>
                <!-- <i slot="default" class="el-icon-picture" title="添加图片附件"></i> -->
              </el-upload>
              <el-dialog
                :visible.sync="dialogVisible"
                :modal-append-to-body="false"
              >
                <img width="100%" :src="dialogImageUrl" alt />
              </el-dialog>

              <editor id="tinymce" v-model="myValue" :init="init"></editor>
            </div>
            <div>
              <el-button
                type="primary"
                class="qd-edit-submit"
                @click="submit"
                v-if="savesubmitShow"
                >{{$t('question.con146')}}</el-button
              >
              <el-button
                type="primary"
                class="qd-edit-submit"
                @click="save"
                v-if="replenishShow"
                >{{$t('question.con147')}}</el-button
              >
            </div>
          </div>
          <reviews v-show="questionReviews"></reviews>
        </div>
        <div class="qdConRight" v-if="qdConRigtS">
          <questionNum></questionNum>
        </div>
      </div>
      <div v-if="qdconMeshow == false" class="qdconMeshow">
        <div
          style="
            width: 200px;
            height: 500px;
            margin: 0 auto;
            text-align: center;
            line-height: 500px;
          "
        >
          {{$t('question.con62')}}<router-link to="/login" style="text-decoration: none"
            >{{$t('question.con63')}}</router-link
          >{{$t('question.con64')}}
        </div>
      </div>
    </div>

    <div class="ql-replyShade" v-show="qlreplyShade" @mousewheel.prevent>
      <div class="ql-editReply">
        <h3>{{$t('question.con65')}}</h3>
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
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="选择日期时间"
                  :picker-options="{
                    disabledDate: (time) => {
                      return time.getTime() < Date.now() - 3600 * 1000 * 24;
                    },
                    selectableRange: austartTimeRange,
                  }"
                ></el-date-picker>
              </el-form-item>
            </div> -->
            <div>
              <div class="PR">{{$t('question.con39')}}</div>
              <el-form-item prop="Currency">
                <el-input
                  v-model.number="auction.Currency"
                  :placeholder="$t('question.con66')"
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
            >{{$t('question.con67')}}</el-button
          >
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
              :file-list="quefileList"
            >
              <el-button size="small" type="primary" class="upImgBut">
                {{$t('question.con73')}}
                <i class="el-icon-picture"></i>
              </el-button>
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
            <editor id="tinymces" v-model="myValues" :init="inits"></editor>
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

        <div class="qlreleaseClose el-icon-close" @click="CloseQuitBt"></div>
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
    <div class="ql-shade" v-show="ChatRecords">
      <div class="ql-editQuzi">
        <div>
          <div class="chatTitle">
            <img :src="bls.bimage" alt v-show="bls.bimage != null" />
            <img src="../assets/头像.jpg" alt v-show="bls.bimage == null" />
            {{ bls.bname }}
          </div>
          <div id="chatConss" class="chatCon">
            <div class="chatCons" v-for="item in ChatRecordArray">
              <img :src="item.img" alt v-show="item.img != null" />
              <img src="../assets/头像.jpg" alt v-show="item.img == null" />
              <span>{{ item.createTime | formatDate }}</span>
              <span>{{ item.contentsUrl }}</span>
            </div>
          </div>
          <div v-show="newInfo" class="newInfo1" @click="newInfo1">{{$t('question.con80')}}</div>
          <div class="chatSend">
            <el-input
              v-model="chatSends"
              style="width: 480px; margin-right: 10px"
              @keyup.enter.native="chatSendHead"
            ></el-input>
            <el-button @click="chatSendHead">{{$t('question.con81')}}</el-button>
          </div>
        </div>

        <div
          class="qlreleaseClose el-icon-close"
          @click="CloseChatRecords"
        ></div>
      </div>
    </div>
    <div class="ql-shade" v-show="quizzerChatRecords">
      <div class="ql-editQuzi">
        <div>
          <div class="chatTitle">
            <!-- <img :src="quizzerbls.qimage" alt /> -->
            {{ quizzerbls.qname }}
          </div>
          <div id="chatCons" class="chatCon">
            <div class="chatCons" v-for="item in quizzerChatRecordArray">
              <img :src="item.img" alt v-show="item.img != null" />
              <img src="../assets/头像.jpg" alt v-show="item.img == null" />
              <span style="font-size: 14px; color: #131313; margin-top: 0px">{{
                item.createTime | formatDate
              }}</span>
              <span>{{ item.contentsUrl }}</span>
            </div>
          </div>
          <div v-show="newInfos" class="newInfo1" @click="newInfo2">{{$t('question.con80')}}</div>
          <div class="chatSend">
            <el-input
              v-model="quizzerchatSends"
              style="width: 480px; margin-right: 10px"
              @keyup.enter.native="quizzerChatSendHead"
            ></el-input>
            <el-button @click="quizzerChatSendHead">{{$t('question.con81')}}</el-button>
          </div>
        </div>

        <div
          class="qlreleaseClose el-icon-close"
          @click="quizzerCloseChatRecords"
        ></div>
      </div>
    </div>
    <div class="ql-shade" v-show="editauction">
      <div class="ql-editReply">
        <h3>{{$t('question.con82')}}</h3>
        <el-form
          :model="editauctions"
          :rules="editauctionrules"
          ref="editauctions"
          class="demo-ruleForm"
        >
          <div style="overflow: hidden">
            <div style="float: left">
              <div class="PR">{{$t('question.con39')}}</div>
              <el-form-item prop="currencys">
                <el-input
                  v-model.number="editauctions.currencys"
                  :placeholder="$t('question.con83')"
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
            @click="editauctionQl('editauctions')"
            >{{$t('question.con67')}}</el-button
          >
        </div>

        <div
          class="qlreleaseClose el-icon-close"
          @click="Closeeditauction"
        ></div>
      </div>
    </div>
    <div class="suspend-img" v-show="suspendimgShow">
      <div class="suspend-img-re">
        <img :src="suImg" alt />
        <div class="suspendClose el-icon-close" @click="CloseQuitBts"></div>
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

import questionDetailsCss from "../pageCss/page/questionDetailsCss.css";
import reviews from "@/components/questionBank/questionDetailsReviews.vue";
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
  name: "questionDetails",
  components: {
    homeNav,
    homeFooter,
    Editor,
    questionDetailsCss,
    questionNum,
    reviews,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    values: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    plugins: {
      type: [String, Array],
      default: "colorscrollHeightpicker textcolor wordcount contextmenu",
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
        placeholder: this.$t('question.con85'),
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
      inits: {
        language_url: "/tinymce/langs/zh_CN.js",
        language: "zh_CN",
        skin_url: "/tinymce/skins/ui/oxide",
        placeholder: this.$t('question.con86'),
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
      myValues: this.values,
      qlList: {},
      qdeditShow: false,
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
      // 暂时没人回答
      editan: false,
      qdeditnullShow: true,
      qlreplyShade: false,
      // 我要答列表
      auction: {
        Currency: "",
        QuestionId: "",
      },
      // 我要答表单验证
      auctionrules: {
        Currency: [
          { required: true, message: this.$t('question.con83'), trigger: "blur" },
          { type: "number", message: this.$t('question.con84') },
        ],
      },
      // 编辑竞拍列表
      editauctions: {
        currencys: "",
      },
      // 我要答表单验证
      editauctionrules: {
        currencys: [
          { required: true, message: this.$t('question.con83'), trigger: "blur" },
          { type: "number", message: this.$t('question.con84') },
        ],
      },
      austartTimeRange: "",
      replyShadeShow: true,
      dialogImageUrl: "",
      dialogVisible: false,
      // 编辑评价客服
      qlShade: false,
      evaluateShade: false,
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
        Img: "",
        type: "",
      },
      // 编辑提问表单验证
      QuestionsQuizrules: {
        type: [{ required: true, message: this.$t('question.con87'), trigger: "change" }],
        title: [
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
        Currency: [
          { required: true, message: this.$t('question.con83'), trigger: "blur" },
          { type: "number", message: this.$t('question.con84') },
        ],
      },
      // 图片
      imgSite: this.URLport.serverPath + "/File/UploadQuestion",
      myHeaders: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      queImageUrl: "",
      queVisible: false,
      quefileList: [],
      imgSiteAns: this.URLport.serverPath + "/File/UploadAnswer",
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
      timeChat: null,
      timeChatss: null,
      submitAnss: false,
      editors: false,
      inforQuiz: false,
      // 已选竞拍者之后展示竞拍者
      qdConMyBls: false,
      auctionText: false,
      qdConRigtS: true,
      // 左边整体隐藏
      qdConLeftShow: false,
      qaLength: 0,
      qbLenght: 0,
      newInfos: false,
      newInfo: false,
      // 已选择竞拍者之后显示文字
      selectbname: false,
      startTimeRange: "",
      suImg: "",
      suspendimgShow: false,
      DeShow: true,
      blsgrade: 0.86,
      clientImg: "",
      // 当前竞拍人的货币数量
      currencyNum: 0,
      currencyNums: false,
      // 当前问题选择竞拍者之后展示
      questionCurrSa: false,
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
      editauction: false,
      rencurrency: {},
      qdconMeshow: true,
      alsinfo: [],
      blsinfo: [],
      timeAlsBlsinfo: null,
      quizzerUpload: false,
      quUpfileList: [],
      questionReviews:false
    };
  },
  created: function () {
    const _this = this;
    _this.personal();
  },
  filters: {
    formatDate: function (time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
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
    formatDate: function (time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
    // 倒计时的效果
    countTime: function () {
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
    // 拿到当前登录人信息
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
            _this.clientImg = res.data.data.image;
            _this.QuDe();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        _this.qdconMeshow = false;
      }
    },
    // 写回答按钮
    myAnswer() {
      const _this = this;
      // _this.qdeditShow = true;
    },
    // 检索竞拍者和答案
    BiddingInfos() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/BiddingInfo`,
          async: false,
          params: {
            questionid: _this.$route.params.question_id,
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
            _this.alsinfo = res.data.data.als;
            _this.blsinfo = res.data.data.bls;
            if (localStorage.token) {
              for (var i = 0; i < _this.alsinfo.length; i++) {
                _this.$set(_this.alsinfo[i], "images", []);
                if (_this.alsinfo[i].img) {
                  var a = _this.alsinfo[i].img.split("|");
                  for (var j = 0; j < a.length; j++) {
                    _this.alsinfo[i].images.push({ url: a[j] });
                  }
                }
              }
              // 确定登录人是否是竞拍者之一
              for (var i = 0; i < _this.blsinfo.length; i++) {
                _this.$set(_this.blsinfo[i], "gradetext", "");
                _this.$set(_this.blsinfo[i], "grade", "");
                _this.blsinfo[i].gradetext =
                  _this.blsinfo[i].goodReviewRate * 100;
                _this.blsinfo[i].grade = _this.blsinfo[i].goodReviewRate * 5;
                if (_this.clientID == _this.blsinfo[i].bidding.createBy) {
                  _this.auctionClient = false;
                  _this.auctionbutton = false;
                  _this.replyShadeShow = false;
                  _this.inforQuiz = true;
                  _this.currencyNum = _this.blsinfo[i].bidding.currency;
                  _this.currencyNums = true;
                  _this.rencurrency = _this.blsinfo[i].bidding;
                  // console.log("我是竞拍者之一");
                } else {
                  _this.currencyNums = false;
                  if (_this.qlList.question.status >= 3) {
                    _this.replyShadeShow = false;
                  } else if (_this.clientID == _this.qlList.question.createBy) {
                    _this.replyShadeShow = false;
                  } else {
                    _this.replyShadeShow = true;
                    _this.endtime = _this.formatDate(
                      _this.qlList.question.endTime
                    );
                    _this.countTime();
                  }
                }
                if (
                  _this.clientID == _this.blsinfo[i].bidding.createBy &&
                  _this.clientID == _this.qlList.question.answerer
                ) {
                  _this.currencyNums = false;
                }
              }
              if(_this.blsinfo.length == 0 && _this.clientID != _this.qlList.question.createBy){
                _this.currencyNums = false;
                _this.replyShadeShow = true;
                _this.endtime = _this.formatDate(
                  _this.qlList.question.endTime
                );
                _this.countTime();
              }
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
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
            questionid: _this.$route.params.question_id,
          },
          xhrFields: {
            withCredentials: true,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(function (res) {
          _this.qdConLeftShow = true;
          // auctionClient 竞拍者栏的留言、选他答、时间、悬赏的隐藏
          // qdeditShow 编辑器的隐藏
          // savesubmitShow 补充回答提交的隐藏
          // countdown 倒计时的隐藏
          // qdeditnullShow 左侧没有答案的框体
          // editan 左侧有答案的框体
          // 1:保存 2：正在竞拍 3：已选竞拍者，4：已回答，5：申请客服，6：已完成,7:已关闭
          if (res.data.status == 1) {
            _this.loading = false;
            _this.qlList = res.data.data;

            _this.qlListShow = true;
            _this.nullLoginShow = false;

            let date = new Date();
            let now = date.getTime();
            _this.$set(_this.qlList, "Times", "");
            _this.$set(_this.qlList, "images", []);
            if (_this.qlList.question.img != null) {
              var a = _this.qlList.question.img.split("|");
              for (var j = 0; j < a.length; j++) {
                _this.qlList.images.push({ url: a[j] });
              }
            }
            let leftTime =
              now - new Date(_this.qlList.question.createTime).getTime();
            let d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
            let h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
            let m = Math.floor((leftTime / 1000 / 60) % 60);
            if (d == 0 && h > 0) {
              _this.qlList.Times = _this.$t('question.con20') + h + _this.$t('question.con21');
            } else if (h <= 0 && d <= 0) {
              _this.qlList.Times = _this.$t('question.con19');
            } else {
              _this.qlList.Times = _this.$t('question.con22') + d + _this.$t('question.con23') + h + _this.$t('question.con24');
            }

            if (localStorage.token) {
              // 我是提问者
              if (
                _this.clientID == _this.qlList.question.createBy &&
                _this.qlList.question.status < 3
              ) {
                _this.auctionClient = true; //竞拍者栏的留言、选他答、时间、悬赏的隐藏
                _this.auctionbutton = true;
                _this.qdeditnullShow = true; //左侧没有答案的框体
                _this.editan = false;
                _this.qdeditShow = false; //编辑器的隐藏
                _this.savesubmitShow = false; //保存进度提交的隐藏
                _this.replenishShow = false;
                _this.countdown = false; //倒计时的隐藏
                _this.replyShadeShow = false;
                _this.editS = true;
                // console.log("提问者小于3");
              } else if (
                _this.clientID == _this.qlList.question.createBy &&
                _this.qlList.question.status == 3
              ) {
                _this.auctionClient = true; //竞拍者栏的留言、选他答、时间、悬赏的隐藏
                _this.auctionbutton = false;
                _this.qdeditnullShow = true; //左侧没有答案的框体
                _this.editan = false;
                _this.qdeditShow = false; //编辑器的隐藏
                _this.savesubmitShow = false; //保存进度提交的隐藏
                _this.replenishShow = false;
                _this.countdown = false; //倒计时的隐藏
                _this.replyShadeShow = false;
                _this.editS = false;
                _this.qdConMyBls = true;
                _this.auctionText = true;
                _this.selectbname = true;
                _this.questionCurrSa = true;
                _this.quizzerUpload = true;
                _this.endtime = _this.formatDate(_this.qlList.question.endTime);
                _this.countTime();
                // console.log("提问者等于3");
              } else if (
                _this.clientID == _this.qlList.question.createBy &&
                _this.qlList.question.status == 4
              ) {
                _this.auctionClient = true;
                _this.auctionbutton = false;
                _this.qdeditnullShow = false;
                _this.editan = true;
                _this.qdeditShow = false; //编辑器的隐藏
                _this.savesubmitShow = false; //保存进度提交的隐藏
                _this.replenishShow = false;
                _this.countdown = false; //倒计时的隐藏
                _this.replyShadeShow = false;
                _this.evaluateS = true;
                _this.qdConMyBls = true;
                _this.auctionText = true;
                _this.selectbname = true;
                _this.questionCurrSa = true;
                _this.quizzerUpload = true;
                _this.endtime = _this.formatDate(_this.qlList.question.endTime);
                _this.countTime();
                // console.log("提问者等于4");
              } else if (
                _this.clientID == _this.qlList.question.createBy &&
                _this.qlList.question.status == 5
              ) {
                _this.auctionClient = true;
                _this.auctionbutton = false;
                _this.qdeditnullShow = false;
                _this.editan = true;
                _this.qdeditShow = false; //编辑器的隐藏
                _this.savesubmitShow = false; //保存进度提交的隐藏
                _this.replenishShow = false;
                _this.countdown = false; //倒计时的隐藏
                _this.replyShadeShow = false;
                _this.qdConMyBls = true;
                _this.auctionText = true;
                _this.selectbname = true;
                _this.questionCurrSa = true;
                _this.endtime = _this.formatDate(_this.qlList.question.endTime);
                _this.countTime();
                // console.log("提问者等于5");
              } else if (
                _this.clientID == _this.qlList.question.createBy &&
                _this.qlList.question.status >= 6
              ) {
                _this.auctionClient = false; //竞拍者栏的留言、选他答、时间、悬赏的隐藏
                _this.auctionbutton = false;
                _this.qdeditnullShow = false; //左侧没有答案的框体
                _this.editan = true;
                _this.qdeditShow = false; //编辑器的隐藏
                _this.savesubmitShow = false; //保存进度提交的隐藏
                _this.replenishShow = false;
                _this.countdown = false; //倒计时的隐藏
                _this.submitAnss = true;
                _this.replyShadeShow = false;
                _this.serviceS = true;
                _this.qdConMyBls = true;
                _this.selectbname = true;
                _this.questionCurrSa = true;
                // console.log("提问者大于6");
              }

              // 我是答题者
              if (
                _this.clientID == _this.qlList.question.answerer &&
                _this.qlList.question.status <= 2
              ) {
                _this.auctionClient = false; //竞拍者栏的留言、选他答、时间、悬赏的隐藏
                _this.auctionbutton = false;
                _this.qdeditnullShow = false; //左侧没有答案的框体
                _this.qdeditShow = true; //编辑器的隐藏
                _this.editors = true;
                _this.savesubmitShow = true; //保存进度提交的隐藏
                _this.replenishShow = false;
                _this.countdown = true; //倒计时的隐藏
                _this.replyShadeShow = false;
                _this.inforQuiz = true;
                _this.endtime = _this.formatDate(_this.qlList.question.endTime);
                _this.countTime();
                // console.log("答题者小于等于2");
              } else if (
                _this.clientID == _this.qlList.question.answerer &&
                _this.qlList.question.status == 3
              ) {
                _this.auctionClient = false; //竞拍者栏的留言、选他答、时间、悬赏的隐藏
                _this.auctionbutton = false;
                _this.qdeditnullShow = false; //左侧没有答案的框体
                _this.qdeditShow = true; //编辑器的隐藏
                _this.editors = true;
                _this.savesubmitShow = true; //保存进度提交的隐藏
                _this.replenishShow = false;
                _this.countdown = true; //倒计时的隐藏
                _this.replyShadeShow = false;
                _this.inforQuiz = true;
                _this.currencyNums = false;
                _this.questionCurrSa = true;
                _this.endtime = _this.formatDate(_this.qlList.question.endTime);
                _this.countTime();
                // console.log("答题者等于3");
              } else if (
                _this.clientID == _this.qlList.question.answerer &&
                _this.qlList.question.status == 4
              ) {
                _this.auctionClient = false; //竞拍者栏的留言、选他答、时间、悬赏的隐藏
                _this.auctionbutton = false;
                _this.qdeditnullShow = false; //左侧没有答案的框体
                _this.submitAnss = true;
                _this.qdeditShow = true; //编辑器的隐藏
                _this.editors = false;
                _this.savesubmitShow = false; //保存进度提交的隐藏
                _this.replenishShow = true;
                _this.countdown = true; //倒计时的隐藏
                _this.replyShadeShow = false;
                _this.inforQuiz = true;
                _this.editan = true;
                _this.currencyNums = false;
                _this.questionCurrSa = true;
                _this.endtime = _this.formatDate(_this.qlList.question.endTime);
                _this.countTime();
                // console.log("答题者等于4");
              } else if (
                _this.clientID == _this.qlList.question.answerer &&
                _this.qlList.question.status == 5
              ) {
                _this.auctionClient = false; //竞拍者栏的留言、选他答、时间、悬赏的隐藏
                _this.auctionbutton = false;
                _this.qdeditnullShow = false; //左侧没有答案的框体
                _this.editan = true;
                _this.submitAnss = true;
                _this.qdeditShow = false; //编辑器的隐藏
                _this.savesubmitShow = false; //保存进度提交的隐藏
                _this.replenishShow = true;
                _this.countdown = true; //倒计时的隐藏
                _this.replyShadeShow = false;
                _this.inforQuiz = true;
                _this.currencyNums = false;
                _this.questionCurrSa = true;
                _this.endtime = _this.formatDate(_this.qlList.question.endTime);
                _this.countTime();
                // console.log("答题者等于5");
              }
              // 当问题已完成
              if (_this.qlList.question.status >= 6) {
                _this.auctionClient = false; //竞拍者栏的留言、选他答、时间、悬赏的隐藏
                _this.auctionbutton = false;
                _this.qdeditnullShow = false; //左侧没有答案的框体
                _this.editan = true;
                _this.qdeditShow = false; //编辑器的隐藏
                _this.savesubmitShow = false; //保存进度提交的隐藏
                _this.replenishShow = false;
                _this.countdown = false; //倒计时的隐藏
                _this.submitAnss = true;
                _this.replyShadeShow = false;
                _this.currencyNums = false;
                _this.questionCurrSa = true;
                _this.questionReviews = true;
                // console.log("问题已完成");
              }

              if (_this.qlList.answer != null) {
                _this.myValue = _this.qlList.answer.content;
                // console.log("有答案");
              }
              // 我是访客
              if (
                _this.clientID != _this.qlList.question.createBy &&
                _this.clientID != _this.qlList.question.answerer
              ) {
                // console.log("我是访客");
                _this.endtime = _this.formatDate(_this.qlList.question.endTime);
                _this.countTime();
              }
              _this.BiddingInfos();
            _this.timeAlsBlsinfo = setInterval(_this.BiddingInfos, 5000);

            
              
              
            } else {
              _this.qdeditShow = false;
              _this.nullLoginShow = true;
              _this.auctionClient = false;
              _this.auctionbutton = false;
              _this.qdeditShow = false;
              _this.qdeditnullShow = false;
              _this.savesubmitShow = false;
              _this.replyShadeShow = true;
              _this.qdConRigtS = false;
            }
            
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 选他答
    auctionss(clienid) {
      const _this = this;
      this.$prompt(_this.$t('question.con92'), "CourseWhale", {
        confirmButtonText: _this.$t('question.con78'),
        cancelButtonText: _this.$t('question.con79'),
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
                password: value,
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
                _this.auctionbutton = false;
                _this.qdConMyBls = true;
                clearInterval(_this.timeAlsBlsinfo);
                _this.QuDe();
                _this.$message({
                  message: _this.$t('question.con93'),
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
        })
        .catch(() => {});
    },
    // 竞拍者发起聊天检索聊天信息
    informQuizzer(item) {
      const _this = this;
      _this.quizzerbls = item;
      _this.quizzerChatRecords = true;
      _this.newInfos = false;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Notice/ChatRecords`,
          async: false,
          params: {
            receiveid: item.question.createBy,
          },
          xhrFields: {
            withCredentials: true,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(function (res) {
          _this.quizzerChatRecordArray = res.data.data;
          _this.scrollToBottom();
          _this.qaLength = _this.quizzerChatRecordArray.length;
          _this.timeChatss = setInterval(_this.informss, 5000);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 竞拍者发起聊天之后轮询这个方法持续检索
    informss() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Notice/ChatRecords`,
          async: false,
          params: {
            receiveid: _this.quizzerbls.question.createBy,
          },
          xhrFields: {
            withCredentials: true,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(function (res) {
          let div = document.getElementById("chatCons");
          _this.quizzerChatRecordArray = res.data.data;
          if (div.scrollTop == div.scrollHeight - 450) {
            _this.$nextTick(function () {
              div.scrollTop = div.scrollHeight - 450;
            });
          } else {
            if (_this.qaLength < res.data.data.length) {
              _this.qaLength = res.data.data.length;
              _this.newInfos = true;
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 竞拍者发送消息
    quizzerChatSendHead() {
      const _this = this;
      var valuestr = _this.quizzerchatSends.trim();
      if (valuestr.length == 0) {
        _this.quizzerchatSends = "";
      } else {
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
              withCredentials: true,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(function (res) {
            if (res.data.status == 1) {
              _this.informQuizzer(_this.quizzerbls);
              _this.quizzerchatSends = "";
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
      }
    },
    // 提问者发起聊天检索聊天内容
    inform(item) {
      const _this = this;
      _this.bls = item;
      _this.ChatRecords = true;
      _this.newInfo = false;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Notice/ChatRecords`,
          async: false,
          params: {
            receiveid: item.bidding.createBy,
          },
          xhrFields: {
            withCredentials: true,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(function (res) {
          _this.ChatRecordArray = res.data.data;
          _this.scrollToBottom();
          _this.qbLenght = _this.ChatRecordArray.length;
          _this.timeChat = setInterval(_this.informs, 5000);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 提问者发起聊天之后轮询这个方法检索聊天
    informs() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Notice/ChatRecords`,
          async: false,
          params: {
            receiveid: _this.bls.bidding.createBy,
          },
          xhrFields: {
            withCredentials: true,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(function (res) {
          let divs = document.getElementById("chatConss");
          _this.ChatRecordArray = res.data.data;
          if (divs.scrollTop == divs.scrollHeight - 450) {
            _this.$nextTick(function () {
              divs.scrollTop = divs.scrollHeight - 450;
            });
          } else {
            if (_this.qbLenght < res.data.data.length) {
              _this.qbLenght = res.data.data.length;
              _this.newInfo = true;
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 提问者发送消息
    chatSendHead() {
      const _this = this;
      _this.scrollToBottom();
      var valuestr = _this.chatSends.trim();
      if (valuestr.length == 0) {
        _this.chatSends = "";
      } else {
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
              withCredentials: true,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(function (res) {
            if (res.data.status == 1) {
              _this.inform(_this.bls);
              _this.chatSends = "";
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
      }
    },
    // 提交回答
    submit() {
      const _this = this;
      // 如果这个答案保存过就把ID和CreateBy赋值如果是第一次就不赋值
      if (this.myValue == "") {
        _this.$message({
          message: "请填写答案。",
          type: "warning",
        });
      } else {
        var json = {};
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
              withCredentials: true,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(function (res) {
            if (res.data.status == 1) {
              _this.myValue = "";
              clearInterval(_this.timeAlsBlsinfo);
              _this.QuDe();

              _this.$message({
                message: _this.$t('question.con96'),
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
    },
    // 保存进度
    save() {
      const _this = this;
      _this.replenishShow = false;
      _this.editors = true;
      _this.savesubmitShow = true;
    },
    // 竞拍按钮
    replyShade(item) {
      const _this = this;
      if (localStorage.getItem("token")) {
        _this.auction.QuestionId = item.question.id;
        _this.auction.Currency = item.question.currency;
        _this.qlreplyShade = !_this.qlreplyShade;
      } else {
        _this.$message({
          message: _this.$t('question.con97'),
          type: "warning",
        });
      }
    },
    // 编辑按钮
    editShade(list) {
      const _this = this;

      // _this.QuestionsQuiz = a;
      _this.QuestionsQuiz.Title = list.question.title;
      _this.QuestionsQuiz.Content = list.question.content;
      _this.myValues = list.question.content;
      _this.QuestionsQuiz.EndTime = _this.formatDate(list.question.endTime);
      _this.QuestionsQuiz.Currency = list.question.currency;
      // _this.QuestionsQuiz.id = list.question.id;
      _this.QuestionsQuiz.Img = list.question.img;
      _this.QuestionsQuiz.type = list.question.type;
      if (list.question.img) {
        var a = list.question.img.split("|");
        for (var i = 0; i < a.length; i++) {
          _this.quefileList.push({ url: a[i], response: { file: a[i] } });
        }
      }
      _this.qlShade = !_this.qlShade;
    },
    // 编辑取消
    CloseQuitBt() {
      const _this = this;
      _this.quefileList = [];
      // _this.QuestionsQuiz = {};
      _this.qlShade = !_this.qlShade;
    },
    // 编辑发布问题
    releaseQl(QuestionsQuiz) {
      const _this = this;
      var a = _this.qlList.question;
      // _this.QuestionsQuiz.Content = ;
      a.content = _this.myValues;
      a.title = _this.QuestionsQuiz.Title;
      a.endTime = _this.QuestionsQuiz.EndTime;
      a.currency = _this.QuestionsQuiz.Currency;
      a.type = _this.QuestionsQuiz.type;
      a.img = _this.QuestionsQuiz.Img;
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
                _this.quefileList = [];
                // _this.QuestionsQuiz = {};
                // _this.QuestionsQuiz.Title = "";
                // _this.QuestionsQuiz.Content = "";
                _this.QuestionsQuiz.EndTime = new Date();
                // _this.QuestionsQuiz.Currency = "";
                // _this.QuestionsQuiz.Img = "";
                // _this.QuestionsQuiz.type = "";
                _this.qlShade = !_this.qlShade;
                _this.$message({
                  message: _this.$t('question.con98'),
                  type: "success",
                });
                // _this.$router.push({
                //   path: "/questionDetails/" + res.data.data.id,
                // });
                // _this.$router.go(0);
                clearInterval(_this.timeAlsBlsinfo);
                _this.QuDe();
              } else {
                _this.$message({
                  message: _this.$t('question.con99'),
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
            _this.evaluateS = false;
            _this.evaluateShade = false;
            _this.quizzerUpload = false;
            clearInterval(_this.timeAlsBlsinfo);
            _this.QuDe();
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
    // 申请客服按钮
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
                clearInterval(_this.timeAlsBlsinfo);
                _this.QuDe();
                _this.replyShadeShow = false;
                _this.$message({
                  message: _this.$t('question.con103'),
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
    // 编辑答案内容图片删除后
    handleRemoveAns(file) {
      const _this = this;
      _this
        .axios({
          method: "delete",
          url: `${_this.URLport.serverPath}/Questions/RemoveImg`,
          async: false,
          params: {
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
          _this.quefileListImg = imgurl.slice(1);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 编辑答案内容图片预览
    handlePictureCardPreviewAns(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 编辑答案内容图片成功后
    handleAvatarSuccessAns(res, file, fileList) {
      const _this = this;
      var imgurl = "";
      for (let i = 0; i < fileList.length; i++) {
        imgurl = imgurl + "|" + fileList[i].response.file;
      }
      _this.quefileListImg = imgurl.slice(1);
    },
    // 编辑答案内容图片上传前
    beforeAvatarUploadAns(file) {},
    // 关闭评价遮罩
    CloseEvaluate() {
      const _this = this;
      _this.evaluateShade = !_this.evaluateShade;
    },
    // 编辑问题的图片删除后
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
    // 编辑问题的图片预览
    handlePictureCardPreview(file) {
      this.queImageUrl = file.url;
      this.queVisible = true;
    },
    // 编辑问题的图片成功后
    handleAvatarSuccess(res, file, fileList) {
      const _this = this;
      var imgurl = "";
      for (let i = 0; i < fileList.length; i++) {
        imgurl = imgurl + "|" + fileList[i].response.file;
      }
      _this.QuestionsQuiz.Img = imgurl.slice(1);
    },
    // 补充材料的图片上传前
    beforeAvatarUpload(file) {},
    // 补充材料的图片删除后
    quUphandleRemove(file, fileList) {
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
    // 补充材料的图片预览
    quUphandlePictureCardPreview(file) {
      this.queImageUrl = file.url;
      this.queVisible = true;
    },
    // 补充材料的图片成功后
    quUphandleAvatarSuccess(res, file, fileList) {
      const _this = this;
      
      var imgurl = "";
      for (let i = 0; i < fileList.length; i++) {
        imgurl = imgurl + "|" + fileList[i].response.file;
      }
      var a = {id:0,img:""}
      a = { id: _this.$route.params.question_id, img: imgurl.slice(1) };
      
      _this
        .axios({
          method: "post",
          url: `${_this.URLport.serverPath}/Questions/Save`,
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
            _this.quUpfileList = [];
            clearInterval(_this.timeAlsBlsinfo);
            _this.QuDe();
            _this.$message({
              message: _this.$t('question.con104'),
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
    },
    // 编辑问题的图片上传前
    quUpbeforeAvatarUpload(file) {},
    // 关闭聊天框
    CloseChatRecords() {
      this.ChatRecords = false;
      clearInterval(this.timeChat);
    },
    // 关闭聊天框
    quizzerCloseChatRecords() {
      this.quizzerChatRecords = false;
      clearInterval(this.timeChatss);
    },
    // DIV里的滚动条在底部
    scrollToBottom() {
      this.$nextTick(function () {
        let div = document.getElementById("chatCons");
        let divs = document.getElementById("chatConss");

        div.scrollTop = div.scrollHeight;
        divs.scrollTop = divs.scrollHeight;
      });
    },
    // 新消息点击跳转到底部
    newInfo1() {
      const _this = this;
      _this.newInfo = false;
      _this.scrollToBottom();
    },
    // 新消息点击跳转到底部
    newInfo2() {
      const _this = this;
      _this.newInfos = false;
      _this.scrollToBottom();
    },
    // 提问内容里的图片放大
    suspendImg(item) {
      const _this = this;
      _this.suImg = item;
      _this.suspendimgShow = !_this.suspendimgShow;
    },
    // 提问内容里的图片关闭放大遮罩
    CloseQuitBts() {
      const _this = this;
      _this.suspendimgShow = !_this.suspendimgShow;
    },
    // 右上角隐藏箭头
    DeShowHand() {
      this.DeShow = !this.DeShow;
    },
    // 收藏问题
    collectQue(id) {
      const _this = this;
      var Favourite = { QuestionId: id };
      _this
        .axios({
          method: "post",
          url: `${_this.URLport.serverPath}/Favourite/Add`,
          async: false,
          data: Favourite,
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
              message: _this.$t('question.con105'),
              type: "success",
            });
          } else {
            _this.$message({
              message: res.data.message,
              type: "error",
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 编辑竞拍金额
    editauctionshow() {
      const _this = this;
      _this.editauctions.currencys = _this.rencurrency.currency;
      _this.editauction = !_this.editauction;
    },
    Closeeditauction() {
      const _this = this;
      _this.editauction = !_this.editauction;
    },
    // 编辑竞拍确定
    editauctionQl(editauctions) {
      const _this = this;
      _this.rencurrency.currency = _this.editauctions.currencys;
      _this.$refs[editauctions].validate((valid) => {
        if (valid) {
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/Bidding/Edit`,
              async: false,
              data: _this.rencurrency,
              xhrFields: {
                withCredentials: true,
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then(function (res) {
              if (res.data.status == 1) {
                _this.editauction = !_this.editauction;
                clearInterval(_this.timeAlsBlsinfo);
                _this.QuDe();
                _this.$message({
                  message: _this.$t('question.con106'),
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
  },
  mounted() {
    tinymce.init({});
  },
  beforeRouteLeave: function (to, from, next) {
    next(false);
    if (this.value != "" && this.qdeditShow) {
      this.$confirm(_this.$t('question.con107'), "CourseWhale", {
        distinguishCancelAndClose: true,
        confirmButtonText: _this.$t('question.con78'),
        cancelButtonText: _this.$t('question.con79'),
        type: "warning",
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
    clearInterval(this.timeAlsBlsinfo);
    this.timeChat = null;
    this.timeChatss = null;
    this.timeAlsBlsinfo = null;
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
