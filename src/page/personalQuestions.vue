<style>
.personalQuestions {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 276px;
  background-color: #f6f6f6;
}
.pequ {
  width: 1300px;
  margin: 0 auto;
  padding-bottom: 137px;
}
.pequleft {
  width: 1040px;
  display: inline-block;
}
.pequlefttop {
  height: 100px;
  padding: 25px;
  background-color: #fff;
  margin-top: 20px;
}
.pequlefttop-name {
  color: #333;
  float: left;
}
.pequlefttop-name img {
  width: 100px;
  height: 100px;
  float: left;
  border-radius: 50px;
}
.pequlefttop-name .pequlefttop-name1 {
  font-size: 26px;
  margin-left: 125px;
  margin-bottom: 20px;
}
.pequlefttop-name .pequlefttop-name2 {
  font-size: 18px;
  margin-left: 125px;
}
.pequlefttop-name .pequlefttop-name3 {
  font-size: 18px;
  margin-left: 125px;
}
.pequlefttop-right {
  float: right;
  height: 100px;
}
.pequlefttop-right1 {
  height: 25px;
}
.pequlefttop-right1 p {
  font-weight: 700;
  float: left;
  font-size: 14px;
}
.pequlefttop-right1 div {
  float: right;
  margin-top: 1px;
}
.pequmin {
  height: 57px;
  padding: 25px 230px 18px 230px;
  margin-top: 12px;
  margin-bottom: 12px;
  background-color: #fff;
}
.pequmin1 {
  float: left;
  width: 80px;
  text-align: center;
  margin-right: 45px;
}
.pequmin1:nth-child(5) {
  margin-right: 0px;
}
.pequmin1 p {
  font-size: 25px;
  color: #333;
  font-weight: 700;
}
.pequmin1 div {
  font-size: 14px;
  color: #333;
  margin-top: 10px;
}
.pequDetai {
  background-color: #fff;
  margin-bottom: 20px;
}
.pequDetaitop {
  padding: 20px 15px;
  position: relative;
}
.pequDetaitoptab {
  width: 910px;
  overflow: hidden;
  height: 50px;
}
.pequDetaitoptabs {
  height: inherit;
  overflow: unset;
}
.pequDetaitop .pequDetaitoptab div {
  display: inline-block;
  width: 140px;
  min-height: 20px;
  line-height: 20px;
  padding: 5px 14px 3px 14px;
  text-align: center;
  color: #333;
  margin-right: 12px;
  background-color: #f5f6f7;
  border-radius: 7px;
  cursor: pointer;
  margin-bottom: 10px;
}
.pequDetaitop .pequDetaitoptab div:hover {
  background-color: #f3f9fd;
  color: #1da1f2;
}
.pequDetaitop .pequDetaitoptab span {
  font-size: 12px;
  display: block;
  width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pequDetaitopView {
  position: absolute;
  right: 15px;
  top: 33px;
  font-size: 12px;
  cursor: pointer;
}
.pequDetaitopView i {
  font-size: 20px;
  font-weight: 700;
  vertical-align: top;
}
.pequDetaitopViews {
}
.pequDetaibott {
}
.pequDetaibottcon {
  min-height: 100px;
  background-color: #fff;
  padding: 15px 15px;
}
.pequDetaibott-top img {
  width: 24px;
  height: 24px;
  float: left;
}
.pequDetaibott-top div {
  font-size: 14px;
  color: #333;
  line-height: 24px;
  margin-left: 29px;
}
.pequDetaibott-con {
  color: #333;
  margin-bottom: 20px;
}
.pequDetaibott-con1 {
  font-size: 18px;
  font-weight: 700;
  margin-top: 10px;
  margin-left: 29px;
  margin-bottom: 10px;
  text-decoration: none;
  color: #333;
  display: block;
}
.pequDetaibott-con1:hover {
  color: #1da1f2;
}
.pequDetaibott-con2 {
  font-size: 14px;
  margin-left: 29px;
  margin-bottom: 10px;
}
.pequDetaibott-con3 {
  font-size: 12px;
  margin-left: 29px;
}
.pequDetaitoptabS {
  background-color: #f3f9fd;
  color: #1da1f2;
}
.pequDetaibottlength {
  padding: 0 15px;
  position: relative;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #333;
}
.pequDetaibottx1 {
  border-top: 2px solid #e2e2e2;
  position: absolute;
  left: 0px;
  width: 400px;
  top: 14px;
}
.pequDetaibottx2 {
  border-top: 2px solid #e2e2e2;
  position: absolute;
  right: 0px;
  width: 400px;
  bottom: 14px;
}
.pequDetaibott-page {
  text-align: center;
}
.pequright {
  float: right;
  margin-top: 20px;
}
.pequright .el-button {
  width: 223px;
  background: #1da1f2;
  color: #fff;
}
.pequright .el-button:hover {
  color: #333 !important;
}
.pequright div {
  text-align: center;
  font-size: 14px;
  color: #333;
  margin-top: 13px;
}
.InvitedAnswer {
  margin-top: 20px;
}
.InvitedAnswer .el-select {
  width: 400px !important;
}
</style>
<template>
  <div class="personalQuestions">
    <homeNav />
    <div class="pequ">
      <div class="pequleft" v-if="pequleftShow">
        <div class="pequlefttop">
          <div class="pequlefttop-name">
            <img :src="pq.qimage" alt="" v-show="pq.qimage != null" />
            <img src="../assets/头像.jpg" alt="" v-show="pq.qimage == null" />
            <p class="pequlefttop-name1">{{ pq.qname }}</p>
            <p class="pequlefttop-name2">
              {{$t('question.con108')}}&nbsp;<b>{{ pq.cqinfo.completedQuestions }}</b
              >&nbsp;{{$t('question.con109')}}
            </p>
            <p class="pequlefttop-name3">
              <b>{{$t('question.con110')}} {{ pq.goodReviewRateNum }}%</b>
              &nbsp;
              <b>{{$t('question.con111')}} {{ pq.overtimerateNum }}%</b>
            </p>
          </div>
          <div class="pequlefttop-right">
            <div>
              <div class="pequlefttop-right1">
                <p>{{$t('question.con112')}}&nbsp;&nbsp;&nbsp;{{ pq.goodReviewRateNum }}%</p>
                <div>
                  <el-rate
                    v-model="pq.goodReviewRate"
                    disabled
                    style="float: left; position: relative; top: -2px"
                  >
                  </el-rate>
                </div>
              </div>

              <div class="pequlefttop-right1">
                <p>
                  {{$t('question.con113')}}&nbsp;&nbsp;&nbsp;{{ pq.recentGoodReviewRateNum }}%
                </p>
                <div>
                  <el-rate
                    v-model="pq.recentGoodReviewRate"
                    disabled
                    style="float: left; position: relative; top: -2px"
                  >
                  </el-rate>
                </div>
              </div>
            </div>

            <div
              style="
                text-align: right;
                margin-top: 30px;
                font-size: 14px;
                color: #888;
              "
            >
              {{ pq.cqinfo.views }}&nbsp;{{$t('question.con114')}}
            </div>
          </div>
        </div>
        <div class="pequmin">
          <div class="pequmin1">
            <p>{{ pq.cqinfo.completedQuestions }}</p>
            <div>{{$t('question.con115')}}</div>
          </div>
          <div class="pequmin1">
            <p>{{ pq.cqinfo.biddingQuestions }}</p>
            <div>{{$t('question.con116')}}</div>
          </div>
          <div class="pequmin1">
            <p>{{ pq.goodReviewRateNum }}</p>
            <div>{{$t('question.con117')}}</div>
          </div>
          <div class="pequmin1">
            <p>{{ pq.cqinfo.upvote }}</p>
            <div>{{$t('question.con118')}}</div>
          </div>
          <div class="pequmin1">
            <p>{{ pq.cqinfo.favourites }}</p>
            <div>{{$t('question.con119')}}</div>
          </div>
        </div>
        <div class="pequDetai">
          <div class="pequDetaitop">
            <div class="pequDetaitoptab" :class="{ pequDetaitoptabs: active }" v-show="localStoragelang == true">
              <div
                v-for="(item, index) in quClassSelect"
                :class="{ pequDetaitoptabS: index == num }"
                @click="quClassSelectTab(index)"
              >
                {{ item.name }}<br /><span style="">{{ item.ename }}</span>
              </div>
            </div>
            <div class="pequDetaitoptab" :class="{ pequDetaitoptabs: active }" v-show="localStoragelang == false">
              <div
                v-for="(item, index) in quClasssKO"
                :class="{ pequDetaitoptabS: index == num }"
                @click="quClassSelectTab(index)"
              >
                {{ item.name }}<br /><span style="">{{ item.ename }}</span>
              </div>
            </div>
            <div class="pequDetaitopView" @click="pequDetaitopViewHald">
              {{$t('question.con120')}}
              <i class="el-icon-arrow-down" v-show="active == false"></i>
              <i class="el-icon-arrow-up" v-show="active == true"></i>
            </div>
          </div>
          <div class="pequDetaibott">
            <div class="pequDetaibottlength">
              <div class="pequDetaibottx1"></div>
              {{ pqConNum }}{{$t('question.con121')}}
              <div class="pequDetaibottx2"></div>
            </div>
            <div v-for="item in pqCon" class="pequDetaibottcon">
              <div class="pequDetaibott-top">
                <img :src="item.qimage" alt="" />
                <div>
                  {{$t('question.con122')}}&nbsp;{{ item.qname }}&nbsp;{{$t('question.con123')}}&nbsp;
                  <span style="color: #888">{{
                    item.question.createTime | formatDate
                  }}</span>
                </div>
              </div>
              <div class="pequDetaibott-con">
                <router-link
                  class="pequDetaibott-con1"
                  :to="'/questionDetails/' + item.question.id"
                >
                  {{ item.question.title }}
                </router-link>
                <div class="pequDetaibott-con2">
                  {{$t('question.con122')}}&nbsp;{{ item.qname }}&nbsp;{{$t('question.con124')}}&nbsp;
                  <span style="color: #888">{{
                    item.question.endTime | formatDate
                  }}</span>
                </div>
                <div class="pequDetaibott-con3">
                  {{ item.question.evaluate }}
                </div>
              </div>
            </div>
            <div class="pequDetaibott-page" v-show="pqpagesize < pqConNum">
              <el-pagination
                @current-change="handleCurrentChange"
                :page-size="pqpagesize"
                layout="total, prev, pager, next"
                :total="pqConNum"
              >
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
      <div class="pequright" v-if="pequleftShow">
        <el-button @click="InvitedAnswer">{{$t('question.con125')}}</el-button>
        <div>{{$t('question.con126')}}{{ pq.bunm }}{{$t('question.con127')}}</div>
      </div>
    </div>
    <div class="ql-shade" v-show="InvitedAnswerShow">
      <div class="ql-editQuzi">
        <h3>{{$t('question.con128')}}</h3>
        <div class="InvitedAnswer">
          <el-select
            v-model="myQuestionselct"
            placeholder="请选择"
            @change="abc"
          >
            <el-option
              v-for="item in myQuestions"
              :key="item.title"
              :label="item.title"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
        <div style="text-align: right">
          <el-button
            class="InvitedAnswerButton"
            type="primary"
            size="medium"
            @click="InvitedAnswerHand"
            >{{$t('question.con67')}}</el-button
          >
        </div>

        <div
          class="qlreleaseClose el-icon-close"
          @click="CloseInvitedAnswer"
        ></div>
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
export default {
  name: "personalQuestions",
  components: {
    homeNav,
    homeFooter,
  },
  data() {
    return {
      pq: [],
      quClassSelect: [
        { name: "全部科目", type: 0, ename: "All" },
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
      quClasssKO: [
        { name: "모든 과목", type: 0, ename: "All" },
        { name: "아프리카 문화", type: 1, ename: "African-American Studies" },
        { name: "회계", type: 2, ename: "Accounting" },
        { name: "인류학", type: 3, ename: "Anthropology" },
        { name: "건축물", type: 4, ename: "Architecture" },
        { name: "미술", type: 5, ename: "Art, Theatre and Film" },
        { name: "생물학", type: 6, ename: "Biology" },
        { name: "사업", type: 7, ename: "Business and Entrepreneurship" },
        { name: "화학", type: 8, ename: "Chemistry" },
        {
          name: "커뮤니케이션 전략",
          type: 9,
          ename: "Communication Strategies",
        },
        { name: "컴퓨터 과학", type: 10, ename: "Computer Sciencee" },
        { name: "범죄학", type: 11, ename: "Criminology" },
        { name: "경제학", type: 12, ename: "Economic" },
        { name: "교육", type: 13, ename: "Education" },
        { name: "공학", type: 14, ename: "Engineering" },
        { name: "환경 문제", type: 15, ename: "Environmental Issues" },
        { name: "윤리학", type: 16, ename: "Ethics" },
        { name: "재정적 인", type: 17, ename: "Finance" },
        { name: "지리학", type: 18, ename: "Geography" },
        { name: "건강", type: 19, ename: "Healthcare" },
        { name: "역사", type: 20, ename: "History" },
        {
          name: "국제 관계",
          type: 21,
          ename: "International and Public Relations",
        },
        { name: "적법한", type: 22, ename: "Law and Legal Issues" },
        { name: "언어학", type: 23, ename: "Linguistic" },
        { name: "문학", type: 24, ename: "Literature" },
        { name: "조치", type: 25, ename: "Management" },
        { name: "마케팅", type: 26, ename: "Marketing" },
        { name: "수학", type: 27, ename: "Mathematics" },
        { name: "음악", type: 28, ename: "Music" },
        { name: "육아", type: 29, ename: "Nursing" },
        { name: "영양물 섭취", type: 30, ename: "Nutrition" },
        { name: "철학", type: 31, ename: "Philosophy" },
        { name: "물리학", type: 32, ename: "Physics" },
        { name: "정치 과학", type: 33, ename: "Politcal Science" },
        { name: "심리학", type: 34, ename: "Psychology" },
        { name: "종교 신학", type: 35, ename: "Religion and Theology" },
        { name: "사회학", type: 36, ename: "Sociology" },
        { name: "스포츠", type: 37, ename: "Sport" },
        { name: "과학 기술", type: 38, ename: "Technology" },
        { name: "관광 여행", type: 39, ename: "Tourism" },
        { name: "다른", type: 40, ename: "Other" },
      ],
      pqCon: [],
      pqtype: 0,
      pqpagenum: 1,
      pqpagesize: 10,
      num: 0,
      active: false,
      pequleftShow: false,
      InvitedAnswerShow: false,
      myQuestions: [],
      myQuestionselct: "",
      myQuestionselctId: "",
      clientID: "",
      localStoragelang:true
    };
  },
  filters: {
    formatDate: function (time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
  },
  created: function () {
    const _this = this;
    if (localStorage.lang == "ko") {
      _this.localStoragelang = false;
    }
    _this.personal();
  },
  methods: {
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
            _this.personalQuestions();
            _this.cquestion();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        _this.qdconMeshow = false;
      }
    },
    // 检索个人详情信息
    personalQuestions() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/ClientQuestionInfo/GetClientQuestionInfo`,
          async: false,
          params: {
            clientid: _this.$route.params.pq_id,
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
            _this.pq = res.data.data;
            _this.pequleftShow = true;
            _this.$set(_this.pq, "goodReviewRate", 0);
            _this.$set(_this.pq, "goodReviewRateNum", 0);
            _this.$set(_this.pq, "recentGoodReviewRate", 0);
            _this.$set(_this.pq, "recentGoodReviewRateNum", 0);
            _this.$set(_this.pq, "overtimerateNum", 0);
            _this.pq.goodReviewRate = _this.pq.cqinfo.goodReviewRate * 5;
            _this.pq.goodReviewRateNum = _this.pq.cqinfo.goodReviewRate * 100;
            _this.pq.recentGoodReviewRate =
              _this.pq.cqinfo.recentGoodReviewRate * 5;
            _this.pq.recentGoodReviewRateNum =
              _this.pq.cqinfo.recentGoodReviewRate * 100;
            _this.pq.overtimerateNum = _this.pq.overtimerate * 100;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 查询完成的问题
    cquestion() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/CompleteQuestions`,
          async: false,
          params: {
            clientid: _this.$route.params.pq_id,
            type: _this.pqtype,
            pagenum: _this.pqpagenum,
            pagesize: _this.pqpagesize,
          },
          xhrFields: {
            withCredentials: true,
          },
        })
        .then(function (res) {
          if (res.data.status == 1) {
            _this.pqCon = res.data.data.data;
            _this.pqConNum = res.data.data.pageTotal;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // tab切换科目
    quClassSelectTab(index) {
      const _this = this;
      _this.pqtype = index;
      _this.cquestion();
    },
    handleCurrentChange(val) {
      const _this = this;
      _this.pqpagenum = val;
      _this.cquestion();
    },
    pequDetaitopViewHald() {
      const _this = this;
      _this.active = !_this.active;
    },
    // 邀请回答
    InvitedAnswer() {
      const _this = this;
      _this.InvitedAnswerShow = !_this.InvitedAnswerShow;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Questions/GetBiddingQuestions`,
          async: false,
          params: {
            biddingid: _this.clientID,
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
            _this.myQuestions = res.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 关闭邀请回答
    CloseInvitedAnswer() {
      const _this = this;
      _this.InvitedAnswerShow = !_this.InvitedAnswerShow;
    },
    // 提交邀请回答
    InvitedAnswerHand() {
      const _this = this;
      _this
        .axios({
          method: "post",
          url: `${_this.URLport.serverPath}/Bidding/Ask`,
          async: false,
          params: {
            biddingid: _this.pq.cqinfo.clientId,
            questionid: _this.myQuestionselctId,
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
            _this.InvitedAnswerShow = !_this.InvitedAnswerShow;
            _this.$message({
              message: "邀请成功",
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
    abc(a) {
      this.myQuestionselctId = a;
    },
  },
  mounted() {},
};
</script>
