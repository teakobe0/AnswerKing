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
  height: 20px;
  line-height: 20px;
  padding: 10px 14px;
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
.pequright .el-button{
    width:223px;
    background: #1da1f2;
    color: #fff;
}
.pequright .el-button:hover{
    color: #333 !important;
}
.pequright div {
    text-align: center;
    font-size: 14px;
    color: #333;
    margin-top: 13px;
}
</style>
<template>
  <div class="personalQuestions">
    <homeNav />
    <div class="pequ">
      <div class="pequleft">
        <div class="pequlefttop">
          <div class="pequlefttop-name">
            <img :src="pq.qimage" alt="" />
            <p class="pequlefttop-name1">{{ pq.qname }}</p>
            <p class="pequlefttop-name2">
              完成了&nbsp;<b>{{ pq.cqinfo.completedQuestions }}</b
              >&nbsp;个问题
            </p>
            <p class="pequlefttop-name3">
              <b>好评率 {{ pq.goodReviewRateNum }}%</b>
              &nbsp;
              <b>超时率 {{ pq.overtimerateNum }}%</b>
            </p>
          </div>
          <div class="pequlefttop-right">
            <div style="width: 228px">
              <div class="pequlefttop-right1">
                <p>总体评价&nbsp;&nbsp;&nbsp;{{ pq.goodReviewRateNum }}%</p>
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
                  最近评价&nbsp;&nbsp;&nbsp;{{ pq.recentGoodReviewRateNum }}%
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
              {{ pq.cqinfo.views }}&nbsp;人浏览过TA的主页
            </div>
          </div>
        </div>
        <div class="pequmin">
          <div class="pequmin1">
            <p>{{ pq.cqinfo.completedQuestions }}</p>
            <div>完成的回答</div>
          </div>
          <div class="pequmin1">
            <p>{{ pq.cqinfo.biddingQuestions }}</p>
            <div>参与的回答</div>
          </div>
          <div class="pequmin1">
            <p>{{ pq.goodReviewRateNum }}</p>
            <div>好评率</div>
          </div>
          <div class="pequmin1">
            <p>{{ pq.cqinfo.upvote }}</p>
            <div>收货的赞</div>
          </div>
          <div class="pequmin1">
            <p>{{ pq.cqinfo.favourites }}</p>
            <div>被收藏次数</div>
          </div>
        </div>
        <div class="pequDetai">
          <div class="pequDetaitop">
            <div class="pequDetaitoptab" :class="{ pequDetaitoptabs: active }">
              <div
                v-for="(item, index) in quClassSelect"
                :class="{ pequDetaitoptabS: index == num }"
                @click="quClassSelectTab(index)"
              >
                {{ item.name }}
              </div>
            </div>
            <div class="pequDetaitopView" @click="pequDetaitopViewHald">
              显示全部
              <i class="el-icon-arrow-down" v-show="active == false"></i>
              <i class="el-icon-arrow-up" v-show="active == true"></i>
            </div>
          </div>
          <div class="pequDetaibott">
            <div class="pequDetaibottlength">
              <div class="pequDetaibottx1"></div>
              {{ pqConNum }}个问题
              <div class="pequDetaibottx2"></div>
            </div>
            <div v-for="item in pqCon" class="pequDetaibottcon">
              <div class="pequDetaibott-top">
                <img :src="item.qimage" alt="" />
                <div>
                  来自{{ item.qname }}的提问&nbsp;
                  <span style="color: #888">{{
                    item.question.createTime | formatDate
                  }}</span>
                </div>
              </div>
              <div class="pequDetaibott-con">
                <router-link class="pequDetaibott-con1" :to="'/questionDetails/'+item.question.id">
                  {{ item.question.title }}
                </router-link>
                <div class="pequDetaibott-con2">
                  来自{{ item.qname }}的评价&nbsp;
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
      <div class="pequright">
          <el-button >邀请回答</el-button>
          <div>
              TA有{{pq.bunm}}个正在竞拍的问题
          </div>
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
      quClassSelect: [{ name: "全部科目", type: 0 }],
      pqCon: [],
      pqtype: 0,
      pqpagenum: 1,
      pqpagesize: 10,
      num: 0,
      active: false,
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
    _this.personalQuestions();
    _this.quClass();
    _this.cquestion();
  },
  methods: {
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
            console.log(_this.pq);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
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
            console.log(_this.pqCon);
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
      console.log(index);
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
  },
  mounted() {},
};
</script>
