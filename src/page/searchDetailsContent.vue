<style>
#serchDetailsContent {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 276px;
}

.serchDetailsContent-con {
  margin-top: 80px;
}

.Content-con-img {
  overflow: hidden;
  /* background-color: #ebf5f424; */
  /* box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15); */
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}

.con-img {
  overflow: hidden;
  /* background-color: #ebf5f424; */
}

.serchDetailsContent-top {
  width: 1300px;
  margin: 0 auto;
  overflow: hidden;
}

.serchDetailsContent-top-img {
  width: 140px;
  height: 140px;
  margin-top: 30px;
  float: left;
  overflow: hidden;
}

.serchDetailsContent-top-img img {
  width: 140px;
}

.serchDetailsContent-top-info {
  float: left;
  width: 100%;
  position: relative;
}
.serchDetailsContent-top-info h2 {
  color: #3b3b3b;
  margin-top: 24px;
  margin-bottom: 8px;
}

.serchDetailsContent-top-info p {
  color: #777;
  font-size: 16px;
  margin-bottom: 24px;
  float: left;
}

.content-bookmark {
  position: absolute;
  right: 0px;
  bottom: 34.5px;
  list-style-type: none;
  /* margin-right: 66px; */
}

.content-bookmark li {
  float: right;
  overflow: hidden;
  margin-left: 8px;
  position: relative;
}

.content-bookmark i {
  font-size: 14px;
  /* color: #464646; */
}

.content-bookmark span {
  /* color: #464646; */
  font-size: 12px;
}

.content-bookmark:hover {
  color: #5b8af9;
  cursor: pointer;
}

.serchDetailsContent-top-info p b {
  color: #777;
  font-size: 16px;
  font-weight: bold;
}

.serchDetailsContent-top-info p a {
  color: #777;
  text-decoration: none;
}

.serchDetailsContent-top-info p a:hover {
  color: #fe2a93;
  text-decoration: none;
}

.serchDetailsContent-top-info p span {
  color: #777;
  margin-left: 30px;
}

.serchDetailsContent-tag {
  background-color: #ffffff;
  margin-top: 3px;
}

.serchDetailsContent-tag-con {
  width: 1300px;
  margin: 0 auto;
}

#serchDetailsContent-tag-con-ul {
  border: 1px solid #e1e1e1;
}

#serchDetailsContent-tag-con-ul + span span i {
  color: #000;
}

.serchDetailsContent-tag-con-ul li {
  width: 138px;
  height: 50px;
  list-style-type: none;
  border-left: 1px solid #000000;
  border-right: 1px solid #000000;
  border-bottom: 1px solid #000000;
}

.serchDetailsContent-tag-con-ul li a {
  display: block;
  line-height: 50px;
  width: 138px;
  height: 50px;
  text-decoration: none;
  color: #000;
  text-align: center;
}

.serchDetailsContent-tag-con-ul li a:hover {
  background-color: #eaeaea;
}

.serchDetailsContent-tag-left {
  width: 100%;
  margin-top: 24px;
  overflow: hidden;
  position: relative;
}

.serchDetailsContent-tag-right {
  width: 100%;
  margin-top: 5px;
  overflow: hidden;
}

.serchDetailsContent-tag-right ul {
  width: 211px;
  float: left;
  margin-top: 10px;
}

.serchDetailsContent-tag-right ul li {
  width: 170px;
  height: 50px;
  margin-bottom: 3px;
  line-height: 50px;
  cursor: pointer;
  font-size: 16px;
  color: #181818;
}
.serchDetailsContent-tag-right ul li:nth-last-of-type(1) {
  margin-bottom: 0px;
}

.serchDetailsContent-tag-right ul li:hover {
  border-right: 3px solid #136bd3;
}
.serchDetailsContent-tag-right .underReview {
  text-align: center;
  color: #136bd3;
  font-size: 20px;
  line-height: 212px;
}
.content-tag-con-left {
  width: 974px;
  float: left;
  padding-bottom: 30px;
}

.content-tag-con-right {
  width: 308px;
  float: right;
  margin-top: 24px;
  margin-bottom: 24px;
}

.content-tag-con-right-con-p {
  width: 100%;
  padding: 0 0 20px 0;
  font-size: 16px;
  color: #3e3e3e;
}

.tabsType {
  border-right: 3px solid #136bd3;
  font-weight: 700;
}
.serchDetailsContent-tag-right ul li a {
  display: block;
  line-height: 50px;
  width: 290px;
  height: 50px;
  text-decoration: none;
  color: #000;
  text-align: center;
}

.serchDetailsContent-tag-right ul li a:hover {
  background-color: #e3e3e3;
}

.tabshow {
  display: none;
}

.el-carousel__item img {
  width: 100%;
  position: absolute;
  top: 0;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 16px;
  opacity: 0.75;
  padding-top: 65px;
  padding-bottom: 20px;
  margin: 0;
  text-align: center;
}

.el-carousel__item p {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
  text-align: center;
  display: block;
  padding-bottom: 20px;
}

.el-carousel__item button {
  color: #ffffff;
  font-size: 14px;
  width: 100px;
  height: 40px;
  margin-left: 105px;
  background-color: #00a2e2;
  border: 1px solid #00a2e2;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
}

.el-carousel__item button:hover {
  color: #ffffff;
  background-color: #00acf0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #ffffff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #ffffff;
}

#mouseover {
  /*background-color: rgba(255, 255, 255, .15);*/
  background-color: #838383;
  /*opacity:0.5;*/
  width: 20px;
  height: 20px;
  position: absolute;
  top: -11px;
  left: -1px;
  /*animation: myfirst 1s;*/
}

/*@keyframes myfirst*/
/*{*/
/*from {background: #a2a2a2;}*/
/*to {background: #838383;}*/
/*}*/
.ConAtten {
  background-color: #58bce4 !important;
  border: 1px solid #58bce4 !important;
}
.ConAtten {
}
.ConAtten:hover {
  background-color: #77c6e6 !important;
}
.ConAtten:active {
  border: 1px solid #007fb1 !important;
}
.ConAttens {
  background-color: #58bce4 !important;
  border: 1px solid #58bce4 !important;
}
.ConAttens:hover {
  background-color: #77c6e6 !important;
}
.ConAttens:active {
  border: 1px solid #007fb1 !important;
}
.currentWeek {
  float: left;
  color: #181818;
  line-height: 40px;
}
.currentWeek span {
  display: inline-block;
  width: 64px;
  height: 5px;
  border-bottom: 1px solid #181818;
  position: absolute;
  top: 14px;
  left: 109px;
}
</style>

<template>
  <div id="serchDetailsContent">
    <homeNav></homeNav>
    <div v-if="titleShow==true" v-title :data-title="value.name+'-CourseWhale'"></div>
    <div class="serchDetailsContent-con">
      <div class="Content-con-img">
        <div class="crumbs">
          <div class="crumbs-con">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: 'schoolStudy' }">
                <span class="crumb">全部学校</span>
              </el-breadcrumb-item>
              <el-breadcrumb-item
                :to="{ path: 'serchDetailsUniversity',query: {id: this.value.universityId}}"
              >
                <span class="crumb">该校课程</span>
              </el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: 'classesDetails',query: {id: this.Id}}">
                <span class="crumb">该课题库</span>
              </el-breadcrumb-item>
              <el-breadcrumb-item>
                <span style="color:rgb(228, 228, 228);">当前题库</span>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div class="serchDetailsContent-top">
          <div class="serchDetailsContent-top-info">
            <h2>{{value.name}}</h2>
            <p>
              学校:
              <router-link
                :to="{ path: 'serchDetailsUniversity',query: {id: this.value.universityId}}"
              >{{value.university}}</router-link>
              <span>教授:{{value.professor}}</span>
            </p>
            <ul class="content-bookmark">
              <!-- <li @click="bookmarks">
                  <i class="el-icon-star-off" v-if="bookmark == false"></i>
                  <i class="el-icon-star-on" v-if="bookmark == true"></i>
                  <span>收藏</span>
              </li>-->
              <li>
                <el-button
                  type="primary"
                  class="ConAtten"
                  size="medium"
                  v-if="value.attentions == false"
                  @click="attention()"
                >
                  <i class="el-icon-star-off" v-if="value.attentions == false"></i>
                  关注
                </el-button>
                <el-button
                  type="primary"
                  class="ConAttens"
                  size="medium"
                  v-if="value.attentions == true"
                  @click="attention()"
                >
                  <i class="el-icon-star-on" v-if="value.attentions == true" style="color:red"></i>
                  关注
                </el-button>
              </li>
              <li
                style="line-height:35px;margin-left:10px;margin-right:2px;color:rgb(206, 206, 206)"
              >|</li>
              <li>
                <el-button size="medium" @click="noUses" :disabled="disableds">
                  <i class="el-icon-thirddianzan11" v-if="noUse == false"></i>
                  <i class="el-icon-thirddianzan2" v-if="noUse == true"></i>
                  没用({{informations.noUse}})
                </el-button>
              </li>
              <li>
                <el-button size="medium" @click="beOfUses" :disabled="disableds">
                  <i class="el-icon-thirddianzan4" v-if="use == false"></i>
                  <i class="el-icon-thirddianzan3" v-if="use == true" style="color:#f52424"></i>
                  有用({{informations.use}})
                </el-button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="serchDetailsContent-tag clearfix">
        <div class="serchDetailsContent-tag-con clearfix">
          <div class="content-tag-con-left">
            <div class="serchDetailsContent-tag-left" v-if="classShow == true">
              <div class="currentWeek" v-if="currentWeekShow == true">
                {{'Week'+ currentWeek.no + '('+ currentWeek.grade + '分' + ')'}}
                <span></span>
              </div>
              <el-select
                v-model="value1"
                style="width: 743px;float:right;margin-right:20px;"
                id="serchDetailsContent-tag-con-ul"
                @change="handleWeeks"
                placeholder="请选择周"
              >
                <el-option
                  v-for="item in valueWeek"
                  :key="item.id"
                  :label="'第'+ item.no + '周' + '('+ item.grade + '分' + ')'"
                  :value="item.id"
                >
                  <span style="float: left">第{{ item.no }}周</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">({{ item.grade }})分</span>
                </el-option>
              </el-select>
            </div>
            <div class="serchDetailsContent-tag-right">
              <p class="underReview" v-if="conShow == false">本周暂无内容，请去其他周看看</p>
              <p class="underReview" v-if="auditText == true">该题库正在审核中</p>
              <ul v-if="conShow == true">
                <li
                  v-for="(item,index) in tabs"
                  :class="{tabsType:index == numnum}"
                  @click="tab(index,item.id)"
                >
                  {{item.contentType}}(
                  <span style="color: #136bd3;">{{item.grade}}</span>分)
                </li>
              </ul>
              <!-- 答案图片组件 -->
              <answer></answer>
            </div>
            <!-- 评论组件 -->
            <reviews></reviews>
          </div>
          <div class="content-tag-con-right">
            <otherQuestions></otherQuestions>
            <p class="content-tag-con-right-con-p">推荐课程</p>
            <recommendClass></recommendClass>
          </div>
        </div>
      </div>
    </div>
    <homeFooter></homeFooter>
  </div>
</template>

<script type="es6">
import homeNav from "@/components/public/homeNav.vue";
import homeFooter from "@/components/public/homeFooter.vue";
// 轮播图切换题库
import otherQuestions from "@/components/questionBank/otherQuestions.vue";
// 列表展示其他课程
import recommendClass from "@/components/questionBank/recommendClass.vue";
// 评论组件
import reviews from "@/components/questionBank/reviews.vue";
// 答案图片组件
import answer from "@/components/questionBank/answer.vue";

import { formatDate } from "@/common/js/date.js";

import { constants } from "crypto";
export default {
  name: "serchDetailsContent",
  components: {
    homeNav,
    homeFooter,
    otherQuestions,
    recommendClass,
    reviews,
    answer
  },
  data() {
    return {
      value: [],
      value1: 0,
      valueWeek: [],
      Id: "",
      ClassWeeksId: "",
      activeName: "first",
      Answer: [],
      show: true,
      dialogImageUrl: "",
      dialogVisible: false,
      fileListA: [],
      tabs: [],
      numnum: 0,
      context: false,
      conurl: false,
      isChoose: false,
      bookmark: false,
      MouseOver: false,

      movable: false,
      retext: "",
      openretext: "",
      useOnuse: {
        Id: "",
        type: "",
        check: ""
      },
      informations: {},
      imageShow: true,
      // 有用没用
      use: false,
      noUse: false,
      UseRecords: {},
      titleShow: false,
      // 关注
      attentions: {
        Name: "",
        TypeId: "",
        Type: ""
      },
      // 审核文字
      auditText: false,
      // 周显示隐藏
      classShow: true,
      // 按钮禁用
      disableds: false,
      // 当前周
      currentWeek: [],
      currentWeekShow: false,
      conShow: true,
      outputLists:[],
    };
  },
  created: function() {
    const _this = this;
    _this.Id = _this.$route.query.id;
    // 获取课程信息
    _this.Getclass();
    // 获取每一周
    _this.ClassWeeks();
    //根据课程id检索课程订单
    _this.Classinfos();
  },
  methods: {
    //根据课程id检索
    Getclass: function() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Class/Getclass`,
          async: false,
          params: {
            id: _this.$route.query.id
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          _this.value = res.data.data;
          _this.$set(_this.value, "attentions", false);

          _this.titleShow = true;
          _this.$store.state.recommendClass.skipuniversityId =
            res.data.data.universityId;
          document.documentElement.scrollTop = 0;
          _this.UseRecord();
          _this.retrieveAttention();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //根据课程资料id检索每周
    ClassWeeks: function() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/ClassWeek/ClassWeeks`,
          async: false,
          params: {
            classinfoid: _this.$route.query.classInfoId
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          _this.valueWeek = res.data.data;
          _this.currentWeek = _this.valueWeek[0];
          _this.currentWeekShow = true;
          if (res.data.data.length == 0) {
            _this.$store.state.answer.tabconwu = false;
            _this.auditText = true;
            _this.classShow = false;
          }
          if (
            _this.$route.query.classWeekId &&
            _this.$route.query.classweektypeid
          ) {
            // _this
            //   .axios({
            //     method: "get",
            //     url: `${_this.URLport.serverPath}/ClassInfoContent/ClassWeekTypes`,
            //     async: false,
            //     params: {
            //       classweekid: _this.$route.query.classWeekId
            //     },
            //     xhrFields: {
            //       withCredentials: true
            //     }
            //   })
            //   .then(function(res) {
            //     _this.value1 = Number(_this.$route.query.classWeekId);
            //     _this.tabs = [];
            //     _this.tabs[0] = res.data.data[2];
            //     _this.tabs[1] = res.data.data[3];
            //     _this.tabs[2] = res.data.data[0];
            //     _this.tabs[3] = res.data.data[1];
            //     for (var i = 0; i < _this.tabs.length; i++) {
            //       var cwtParentId = Number(_this.$route.query.cwtParentId);
            //       if (_this.tabs[i].refId === cwtParentId) {
            //         _this.numnum = i;
            //       }
            //     }
            //   })
            //   .catch(function(error) {
            //     console.log(error);
            //   });
            // _this
            //   .axios({
            //     method: "get",
            //     url: `${_this.URLport.serverPath}/ClassInfoContent/Contentls`,
            //     async: false,
            //     params: {
            //       classweektypeid: _this.$route.query.classweektypeid
            //     },
            //     xhrFields: {
            //       withCredentials: true
            //     }
            //   })
            //   .then(function(res) {
            //     _this.Answer = res.data.data;
            //     if (_this.Answer.length == 0) {
            //       _this.$store.state.answer.tabconwu = true;
            //     } else {
            //       _this.$store.state.answer.tabconwu = false;
            //     }
            //     for (var i = 0; i < _this.Answer.length; i++) {
            //       if (
            //         _this.Answer[i].url == null ||
            //         _this.Answer[i].url == "" ||
            //         _this.Answer[i].url == ""
            //       ) {
            //
            //       } else {
            //         _this.Answer[i].conurl = true;
            //         _this.Answer[i].context = false;
            //         _this.Answer[i].Imgs = _this.getUrlList(_this.Answer[i]);
            //         _this.imgss = _this.getUrlListCover(_this.Answer[i]);
            //       }
            //     }
            //     _this.$store.state.answer.answer = _this.Answer;
            //     _this.$store.state.answer.imgss = _this.imgss;
            //   })
            //   .catch(function(error) {
            //     console.log(error);
            //   });
          } else {
            _this
              .axios({
                method: "get",
                url: `${_this.URLport.serverPath}/ClassInfoContent/ClassWeekTypes`,
                async: false,
                params: {
                  classweekid: _this.valueWeek[0].id
                },
                xhrFields: {
                  withCredentials: true
                }
              })
              .then(function(res) {
                if (res.data.data.length == 0) {
                  _this.conShow = false;
                  _this.$store.state.answer.tabconwu = false;
                  _this.$store.state.answer.answer = [];
                  _this.$store.state.answer.imgss = [];
                } else {
                  _this.tabs = [];
                  _this.conShow = true;
                  _this.tabs[0] = res.data.data[2];
                  _this.tabs[1] = res.data.data[3];
                  _this.tabs[2] = res.data.data[0];
                  _this.tabs[3] = res.data.data[1];
                  _this.value1 = Number(_this.valueWeek[0].id);
                  _this.RetrieveTheTnswer(_this.tabs[0].id);
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //将图片的ID和路径保存到outputList的方法
    getUrlList: function(rawList) {
      const _this = this;
      var imgUrlArray = rawList.url.split("|");
      var outputList = [];
      for (var i = 0; i < imgUrlArray.length; i++) {
        if (imgUrlArray[i].length != 0) {
          outputList.push({
            id: rawList.id,
            contentUrl: _this.URLport.ImgPath + imgUrlArray[i],
            contents: rawList.contents
            // conurl: rawList.conurl
          });
        }
      }

      return outputList;
    },
    //将图片的ID和路径保存到outputList的方法
    getUrlListCover: function(rawList) {
      const _this = this;
      var imgUrlArray = rawList.url.split("|");
      for (var i = 0; i < imgUrlArray.length; i++) {
        if (imgUrlArray[i].length != 0) {
          _this.outputLists.push(_this.URLport.ImgPath + imgUrlArray[i]);
        }
      }
      return _this.outputLists;
    },
    //根据课程id检索课程订单
    Classinfos: function() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Classinfo/Classinfos`,
          async: false,
          params: {
            classid: _this.$route.query.id
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          for (var i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].id == _this.$route.query.classInfoId) {
              _this.informations = res.data.data[i];
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //每周课程ID获取类型
    handleWeeks: function(classWeekId) {
      const _this = this;

      for (var i = 0; i < _this.valueWeek.length; i++) {
        if (classWeekId == _this.valueWeek[i].id) {
          _this.currentWeek = _this.valueWeek[i];
        }
      }
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/ClassInfoContent/ClassWeekTypes`,
          async: false,
          params: {
            classweekid: classWeekId
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          if (res.data.data.length == 0) {
            _this.conShow = false;
            _this.$store.state.answer.tabconwu = false;
            _this.$store.state.answer.answer = [];
            _this.$store.state.answer.imgss = [];
          } else {
            _this.tabs = [];
            _this.conShow = true;
            _this.tabs[0] = res.data.data[2];
            _this.tabs[1] = res.data.data[3];
            _this.tabs[2] = res.data.data[0];
            _this.tabs[3] = res.data.data[1];
            _this.RetrieveTheTnswer(_this.tabs[0].id);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //点击类型获取答案
    tab(index, classWeekTypeId) {
      const _this = this;
      _this.outputLists.length = 0;
      _this.$store.state.answer.loading = true;
      _this.numnum = index;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/ClassInfoContent/Contentls`,
          async: false,
          params: {
            classweektypeid: classWeekTypeId
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          _this.Answer = res.data.data;
          _this.$store.state.answer.loading = false;
          if (_this.Answer.length == 0) {
            _this.$store.state.answer.tabconwu = true;
          } else {
            _this.$store.state.answer.tabconwu = false;
          }
          if (_this.Answer.length == 1) {
            for (var i = 0; i < _this.Answer.length; i++) {
              if (_this.Answer[i].url == null || _this.Answer[i].url == "") {
                _this.$store.state.answer.tabconwu = true;
              } else {
                _this.Answer[i].Imgs = _this.getUrlList(_this.Answer[i]);
                _this.imgss = _this.getUrlListCover(_this.Answer[i]);
              }
            }
          }
          if (_this.Answer.length > 1) {
            for (var i = 0; i < _this.Answer.length; i++) {
              if (_this.Answer[i].url == null || _this.Answer[i].url == "") {
              } else {
                _this.Answer[i].Imgs = _this.getUrlList(_this.Answer[i]);
                _this.imgss = _this.getUrlListCover(_this.Answer[i]);
              }
            }
            if (
              (_this.Answer[0].url == null && _this.Answer[1].url == null) ||
              (_this.Answer[0].url == null &&
                _this.Answer[1].url == null &&
                _this.Answer[2].url == null)
            ) {
              _this.$store.state.answer.tabconwu = true;
            }
          }

          _this.$store.state.answer.answer = _this.Answer;
          _this.$store.state.answer.imgss = _this.imgss;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //切换每周的时候默认触发第一个状态获取答案
    RetrieveTheTnswer: function(classWeekTypeId) {
      const _this = this;
      _this.outputLists.length = 0;
      _this.$store.state.answer.loading = true;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/ClassInfoContent/Contentls`,
          async: false,
          params: {
            classweektypeid: classWeekTypeId
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          _this.Answer = res.data.data;
          _this.$store.state.answer.loading = false;
          _this.numnum = 0;
          if (_this.Answer.length == 0) {
            _this.$store.state.answer.tabconwu = true;
          } else {
            _this.$store.state.answer.tabconwu = false;
          }
          if (_this.Answer.length == 1) {
            for (var i = 0; i < _this.Answer.length; i++) {
              if (_this.Answer[i].url == null || _this.Answer[i].url == "") {
                _this.$store.state.answer.tabconwu = true;
              } else {
                _this.Answer[i].Imgs = _this.getUrlList(_this.Answer[i]);
                _this.imgss = _this.getUrlListCover(_this.Answer[i]);
              }
            }
          }
          if (_this.Answer.length > 1) {
            for (var i = 0; i < _this.Answer.length; i++) {
              if (_this.Answer[i].url == null || _this.Answer[i].url == "") {
              } else {
                _this.Answer[i].Imgs = _this.getUrlList(_this.Answer[i]);
                _this.imgss = _this.getUrlListCover(_this.Answer[i]);
              }
            }
            if (
              (_this.Answer[0].url == null && _this.Answer[1].url == null) ||
              (_this.Answer[0].url == null &&
                _this.Answer[1].url == null &&
                _this.Answer[2].url == null)
            ) {
              _this.$store.state.answer.tabconwu = true;
            }
          }
          _this.$store.state.answer.answer = _this.Answer;
          _this.$store.state.answer.imgss = _this.imgss;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    bookmarks: function() {
      const _this = this;
      _this.bookmark = !_this.bookmark;
    },
    beOfUses: function() {
      const _this = this;
      if (localStorage.token) {
        _this.useOnuse.Id = Number(this.$route.query.classInfoId);
        if (_this.use == false || _this.noUse == true) {
          _this.useOnuse.type = "Y";
          _this.useOnuse.check = 1;
          _this.use = true;
          _this.noUse = false;
          _this.disableds = true;
          _this.ChangeClassInfo();
        } else if (_this.use == true && _this.noUse == false) {
          _this.useOnuse.type = "Y";
          _this.useOnuse.check = -1;
          _this.use = false;
          _this.disableds = true;
          _this.ChangeClassInfo();
        }
      } else {
        _this.$message({
          message: "请登录之后进行操作",
          type: "warning"
        });
      }
    },
    noUses: function() {
      const _this = this;
      if (localStorage.token) {
        _this.useOnuse.Id = Number(this.$route.query.classInfoId);
        if (_this.noUse == false || _this.use == true) {
          _this.useOnuse.type = "N";
          _this.useOnuse.check = 1;
          _this.noUse = true;
          _this.use = false;
          _this.disableds = true;
          _this.ChangeClassInfo();
        } else if (_this.noUse == true && _this.use == false) {
          _this.useOnuse.type = "N";
          _this.useOnuse.check = -1;
          _this.noUse = false;
          _this.disableds = true;
          _this.ChangeClassInfo();
        }
      } else {
        _this.$message({
          message: "请登录之后进行操作",
          type: "warning"
        });
      }
    },
    // 更改课程资料的有用没用
    ChangeClassInfo: function() {
      const _this = this;
      _this
        .axios({
          method: "put",
          url: `${_this.URLport.serverPath}/Classinfo/ChangeClassInfo`,
          async: false,
          params: {
            classInfoid: Number(_this.$route.query.classInfoId),
            type: _this.useOnuse.type,
            check: _this.useOnuse.check
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          _this.disableds = false;
          _this.UseRecord();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 根据课程资料id检索该课程资料有用、没用
    UseRecord: function() {
      const _this = this;
      if (localStorage.token) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Classinfo/UseRecords`,
            async: false,
            params: {
              classInfoid: Number(_this.$route.query.classInfoId)
            },
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(function(res) {
            _this.Classinfos();
            _this.UseRecords = res.data.data;
            if (_this.UseRecords == null || _this.UseRecords.check == -1) {
              _this.use = false;
              _this.noUse = false;
            } else if (
              _this.UseRecords.check == 1 &&
              _this.UseRecords.type == "Y"
            ) {
              _this.use = true;
              _this.noUse = false;
            } else if (
              _this.UseRecords.check == 1 &&
              _this.UseRecords.type == "N"
            ) {
              _this.use = false;
              _this.noUse = true;
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    // 检索关注
    retrieveAttention: function() {
      const _this = this;
      if (localStorage.token) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Focus/Focus`,
            async: false,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(function(res) {
            for (var i = 0; i < res.data.data.length; i++) {
              if (res.data.data[i].type == 2) {
                var v = [];
                v = res.data.data[i].typeId.split(",");
                if (v[1] == _this.informations.id) {
                  _this.value.attentions = true;
                }
              }
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    // 关注
    attention: function() {
      const _this = this;
      if (localStorage.token) {
        _this.value.attentions = !_this.value.attentions;
        if (_this.value.attentions == true) {
          _this.attentions.Name = _this.value.name;
          _this.attentions.TypeId =
            _this.value.id + "," + _this.informations.id;
          _this.attentions.Type = 2;
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/Focus/Add`,
              async: false,
              data: _this.attentions,
              xhrFields: {
                withCredentials: true
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            .then(function(res) {
              _this.retrieveAttention();
              _this.$message({
                message: "关注成功",
                type: "success"
              });
            })
            .catch(function(error) {
              console.log(error);
            });
        } else if (_this.value.attentions == false) {
          _this
            .axios({
              method: "delete",
              url: `${_this.URLport.serverPath}/Focus/Cancel`,
              async: false,
              params: {
                typeid: _this.value.id + "," + _this.informations.id
              },
              xhrFields: {
                withCredentials: true
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            .then(function(res) {
              _this.$message({
                message: "取消关注",
                type: "success"
              });
              _this.retrieveAttention();
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      } else {
        _this.$message({
          message: "请登录之后进行操作!",
          type: "warning"
        });
      }
    }
  }
};
</script>