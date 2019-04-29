<style>
#serchDetailsContent {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 276px;
}

.serchDetailsContent-con {
  margin-top: 80px;
  /*overflow: hidden;*/
}

.Content-con-img {
  overflow: hidden;
  background-color: #ebf5f424;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
}

.con-img {
  overflow: hidden;
  /*height: 125px;*/
  background-color: #ebf5f424;
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
  /*height: 140px;*/
  /* margin-top: 10px; */
  width: 100%;
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
  list-style-type: none;
}

.content-bookmark li {
  float: right;
  overflow: hidden;
  margin-left: 8px;
}

.content-bookmark i {
  /*float: right;*/
  margin-left: 3px;
  font-size: 16px;
  color: #464646;
}

.content-bookmark span {
  /*float: right;*/
  margin-left: 3px;
  line-height: 21px;
  color: #464646;
  font-size: 16px;
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
}

.serchDetailsContent-tag-right {
  width: 100%;
  margin-top: 10px;
  overflow: hidden;
}

.serchDetailsContent-tag-right ul {
  width: 211px;
  float: left;
}

.serchDetailsContent-tag-right ul li {
  width: 170px;
  height: 50px;
  margin-bottom: 3px;
  line-height: 50px;
  cursor: pointer;
  font-size: 16px;
  color: #181818;
  /*list-style-type: none;*/
  /*border-right: 1px solid #000000;*/
  /*border-top: 1px solid #000000;*/
  /*border-left: 1px solid #000000;*/
}
.serchDetailsContent-tag-right ul li:nth-last-of-type(1) {
  margin-bottom: 0px;
}

.serchDetailsContent-tag-right ul li:hover {
  border-right: 3px solid #136bd3;
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

.tabCon {
  width: 763px;
  float: left;
}

.tabCon .cover {
  width: 150px;
  height: 180px;
  float: left;
  border: 1px solid #cacaca;
  margin-right: 18px;
  margin-top: 10px;
  padding: 10px;
  overflow: hidden;
  cursor: pointer;
}

.tabCon .cover:hover {
  border: 1px solid #136bd3;
}
.tabCon div p {
  height: 180px;
  width: 150px;
  overflow: hidden;
}

.tabCon div img {
  width: 100%;
  height: 100%;
}

.aabb {
  max-width: 1440px;
  max-height: 900px;
  position: absolute;
  transition: all ease 0.2s;
  border: 5px solid #ffffff;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -720px;
  margin-top: -450px;
  z-index: 100;
}

.tabCon-wu {
  width: 100px;
  line-height: 212px;
  text-align: center;
  font-size: 20px;
  color: #136bd3;
  margin: 0 auto;
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
.popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
}
.blur {
  filter: blur(5px);
}
.popContainer .purchase {
  text-decoration: none;
  display: block;
  width: 200px;
  height: 50px;
  cursor: pointer;
  background-color: #ff9f32;
  border-radius: 2px;
  margin: 0 auto;
  text-align: center;
  line-height: 50px;
  color: #000;
  margin-top: 30px;
}
.popContainer .closeshade {
  width: 60px;
  height: 30px;
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 2px;
  margin: 0 auto;
  text-align: center;
  line-height: 30px;
  margin-top: 30px;
  font-size: 14px;
  color: #272727;
}
.popContainer .closeshade:hover {
  background-color: #dadada;
}
</style>

<template>
  <div id="serchDetailsContent">
    <homeNav></homeNav>
    <div class="serchDetailsContent-con">
      <div class="Content-con-img">
        <div class="crumbs">
          <el-breadcrumb
            separator-class="el-icon-arrow-right"
            style="margin-top: 24px;color: #777;"
          >
            <el-breadcrumb-item :to="{ path: '/' }">
              <span style="color: #606266;">首页</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item
              :to="{ path: 'serchDetailsUniversity',query: {id: this.value.universityId}}"
            >
              <span style="color: #606266;">学校</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: 'classesDetails',query: {id: this.Id}}">
              <span style="color: #606266;">课程</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <span style="color: #606266;">题库</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="serchDetailsContent-top">
          <div class="serchDetailsContent-top-info">
            <div>
              <h2>{{value.name}}</h2>
              <p>
                School:
                <router-link
                  :to="{ path: 'serchDetailsUniversity',query: {id: this.value.universityId}}"
                >{{value.university}}</router-link>
                <span>Teach:{{value.professor}}</span>
              </p>
              <ul class="content-bookmark">
                <!-- <li @click="bookmarks">
                  <i class="el-icon-star-off" v-if="bookmark == false"></i>
                  <i class="el-icon-star-on" v-if="bookmark == true"></i>
                  <span>收藏</span>
                </li>-->
                <li @click="noUses">
                  <i class="el-icon-thirdcai" v-if="noUse == false"></i>
                  <i class="el-icon-thirdxia" v-if="noUse == true"></i>
                  <span>没用({{informations.noUse}})</span>
                </li>
                <li @click="beOfUses">
                  <i class="el-icon-thirdqinziAPPtubiao-" v-if="use == false"></i>
                  <i class="el-icon-thirddianzan1" v-if="use == true" style="color:#f52424"></i>
                  <span>有用({{informations.use}})</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="serchDetailsContent-tag clearfix">
        <div class="serchDetailsContent-tag-con clearfix">
          <div class="content-tag-con-left">
            <div class="serchDetailsContent-tag-left">
              <el-select
                v-model="value1"
                style="width: 953px;"
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
              <ul>
                <li
                  v-for="(item,index) in tabs"
                  :class="{tabsType:index == numnum}"
                  @click="tab(index,item.id)"
                >
                  {{item.contentType}}(
                  <span style="color: #136bd3;">{{item.grade}}</span>分)
                </li>
              </ul>
              <div class="tabCon">
                <p class="tabCon-wu" v-if="tabconwu">暂无内容</p>
                <div v-for="(items,index) in Answer">
                  <div
                    class="cover"
                    v-for="(item,indexs) in items.Imgs"
                    @mouseenter="onMouseOver"
                    @mouseleave="onMouseout"
                    @click="() => handleanwer(indexs)"
                  >
                    <img v-if="item.conurl == true" :src="item.contentUrl" :alt="items.contents">
                  </div>
                  <!-- <div
                      v-for="item in items.Imgs" 
                      @mouseenter="onMouseOver"
                      @mouseleave="onMouseout"
                      v-if="imageShow == true"
                    >
                      <img v-viewer
                        v-if="item.conurl == true"
                        :src="item.contentUrl"
                        :alt="items.contents"
                      >
                      <p v-if="item.context == true">{{item.contents}}</p>
                      <div id="mouseover" v-if="MouseOver == true"></div>
                  </div>-->
                </div>
                <VueEasyLightbox :visible="visible" :imgs="imgss" :index="index" @hide="handleHide"></VueEasyLightbox>
              </div>
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

    <div class="popContainer" v-show="shade==true">
      <p style="color: #ffffff;text-align: center;margin-top: 400px;">{{content}}</p>
      <router-link to="/personalData/vip" class="purchase" @click="joim">立即加入我们!</router-link>
      <div class="closeshade" @click="Closemask">关闭</div>
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

import { formatDate } from "@/common/js/date.js";

import VueEasyLightbox from "vue-easy-lightbox";
import { constants } from "crypto";
export default {
  name: "serchDetailsContent",
  components: {
    homeNav,
    homeFooter,
    otherQuestions,
    recommendClass,
    reviews,
    VueEasyLightbox
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
      tabconwu: true,
      isChoose: false,
      bookmark: false,
      MouseOver: false,
      // 控制遮罩的打开关闭
      shade: false,
      content: "请购买会员！",
      countdownClock: null,
      totalTime: 30,
      
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
      // 图片查看器
      imgss: "",
      visible: false,
      index: 0
    };
  },
  created: function() {
    var _this = this;
    _this.Id = _this.$route.query.id;
    // 获取课程信息
    _this.Getclass();
    // 获取每一周
    _this.ClassWeeks();
    //根据课程id检索课程订单
    _this.Classinfos();
  },
  methods: {
    
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
    //根据课程id检索
    Getclass: function() {
      var _this = this;
      _this
        .axios({
          method: "get",
          url: `http://192.168.1.27:8088/api/Class/Getclass`,
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
          _this.$store.state.recommendClass.skipuniversityId =
            res.data.data.universityId;
          document.documentElement.scrollTop = 0;
          // 获取评论刷新
          // _this.searching();
          _this.UseRecord();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //根据课程资料id检索每周
    ClassWeeks: function() {
      var _this = this;
      _this
        .axios({
          method: "get",
          url: `http://192.168.1.27:8088/api/ClassWeek/ClassWeeks`,
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
          if (
            _this.$route.query.classWeekId &&
            _this.$route.query.classweektypeid
          ) {
            _this
              .axios({
                method: "get",
                url: `http://192.168.1.27:8088/api/ClassInfoContent/ClassWeekTypes`,
                async: false,
                params: {
                  classweekid: _this.$route.query.classWeekId
                },
                xhrFields: {
                  withCredentials: true
                }
              })
              .then(function(res) {
                _this.value1 = Number(_this.$route.query.classWeekId);
                _this.tabs = res.data.data;
                for (var i = 0; i < _this.tabs.length; i++) {
                  var cwtParentId = Number(_this.$route.query.cwtParentId);
                  if (_this.tabs[i].refId === cwtParentId) {
                    _this.numnum = i;
                  }
                }
              })
              .catch(function(error) {
                console.log(error);
              });
            _this
              .axios({
                method: "get",
                url: `http://192.168.1.27:8088/api/ClassInfoContent/Contentls`,
                async: false,
                params: {
                  classweektypeid: _this.$route.query.classweektypeid
                },
                xhrFields: {
                  withCredentials: true
                }
              })
              .then(function(res) {
                _this.Answer = res.data.data;
                if (_this.Answer.length == 0) {
                  _this.tabconwu = true;
                } else {
                  _this.tabconwu = false;
                }
                for (var i = 0; i < _this.Answer.length; i++) {
                  if (
                    _this.Answer[i].url == null ||
                    _this.Answer[i].url == "" ||
                    _this.Answer[i].url == ""
                  ) {
                    _this.Answer[i].conurl = false;
                    _this.Answer[i].context = true;
                    _this.Answer[i].Imgs = _this.getUrlList(_this.Answer[i]);
                    _this.imgss = _this.getUrlListCover(_this.Answer[i]);
                  } else {
                    _this.Answer[i].conurl = true;
                    _this.Answer[i].context = false;
                    _this.Answer[i].Imgs = _this.getUrlList(_this.Answer[i]);
                    _this.imgss = _this.getUrlListCover(_this.Answer[i]);
                  }
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          } else {
            _this
              .axios({
                method: "get",
                url: `http://192.168.1.27:8088/api/ClassInfoContent/ClassWeekTypes`,
                async: false,
                params: {
                  classweekid: _this.valueWeek[0].id
                },
                xhrFields: {
                  withCredentials: true
                }
              })
              .then(function(res) {
                _this.tabs = res.data.data;

                _this.value1 = Number(_this.valueWeek[0].id);
                _this.RetrieveTheTnswer(_this.tabs[0].id);
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
      var imgUrlArray = rawList.url.split("|");
      var outputList = [];
      for (var i = 0; i < imgUrlArray.length; i++) {
        outputList.push({
          id: rawList.id,
          contentUrl: "http://192.168.1.27:8086" + imgUrlArray[i],
          contents: rawList.contents,
          context: rawList.context,
          conurl: rawList.conurl
        });
      }
      return outputList;
    },
    //根据课程id检索课程订单
    Classinfos: function() {
      var _this = this;
      _this
        .axios({
          method: "get",
          url: `http://192.168.1.27:8088/api/Classinfo/Classinfos`,
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
      var _this = this;
      _this
        .axios({
          method: "get",
          url: `http://192.168.1.27:8088/api/ClassInfoContent/ClassWeekTypes`,
          async: false,
          params: {
            classweekid: classWeekId
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          _this.tabs = res.data.data;
          _this.RetrieveTheTnswer(_this.tabs[0].id);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //点击类型获取答案
    tab(index, classWeekTypeId) {
      var _this = this;
      _this.numnum = index;
      _this
        .axios({
          method: "get",
          url: `http://192.168.1.27:8088/api/ClassInfoContent/Contentls`,
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
          if (_this.Answer.length == 0) {
            _this.tabconwu = true;
          } else {
            _this.tabconwu = false;
          }
          for (var i = 0; i < _this.Answer.length; i++) {
            if (
              _this.Answer[i].url == null ||
              _this.Answer[i].url == ""
            ) {
              _this.Answer[i].conurl = false;
              _this.Answer[i].context = true;
              _this.Answer[i].Imgs = _this.getUrlList(_this.Answer[i]);
              _this.imgss = _this.getUrlListCover(_this.Answer[i]);
              console.log("URL空");
            } else {
              _this.Answer[i].conurl = true;
              _this.Answer[i].context = false;
              _this.Answer[i].Imgs = _this.getUrlList(_this.Answer[i]);
              _this.imgss = _this.getUrlListCover(_this.Answer[i]);
              console.log("content空");
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //将图片的ID和路径保存到outputList的方法
    getUrlListCover: function(rawList) {
      var _this = this;
      var imgUrlArray = rawList.url.split("|");
      var outputList = [];
      for (var i = 0; i < imgUrlArray.length; i++) {
        outputList.push("http://192.168.1.27:8086" + imgUrlArray[i]);
      }
      return outputList;
    },
    clockTick: function() {
      let _this = this;

      return setTimeout(() => {
        if (_this.totalTime > 0) {
          _this.totalTime--;
          _this.content = _this.totalTime + "s后可观看答案";
          _this.clockTick();
        } else {
          _this.Closemask();
        }
      }, 1000);
    },
    //点击答案显示遮罩方法
    handleanwer: function(index) {
      var _this = this;
      if (_this.$store.state.loginPerson.loginPerson.role == "vip") {
        _this.shade = false;
        // 控制图片查看器的打开
        _this.index = index;
        _this.shows();
      } else {
        _this.shade = true;
        _this.totalTime = 30;
        _this.content = _this.totalTime + "s后可观看答案";

        let clock = window.setInterval(() => {
          _this.totalTime--;
          _this.content = _this.totalTime + "s后可观看答案";
          if (_this.totalTime < 1) {
            _this.content = "s后可观看答案";
            _this.totalTime = 30;
            _this.shade = false;
            // 控制图片查看器的打开
            _this.index = index;
            _this.shows();
            //当倒计时小于0时清除定时器
            window.clearInterval(clock); //清除定时器
          }
        }, 1000);
      }

      // _this.isChoose = !_this.isChoose
      // clearInterval(clock); //清除定时器
      // console.log(_this.countdownClock);
      // if (!_this.countdownClock) {
      //   clearTimeout(_this.countdownClock);
      //   _this.countdownClock = null;
      // }
      // console.log(_this.countdownClock);
      // _this.countdownClock = _this.clockTick();

      // let remainTime = _this.totalTime;
    },
    // 关闭遮罩
    Closemask: function() {
      var _this = this;
      _this.countdownClock = null;
      _this.shade = false;
      _this.totalTime = 0;
      _this.imageShow = true;
      
    },
    shows() {
      let _this = this;
      _this.visible = true;
    },
    handleHide() {
      let _this = this;
      _this.visible = false;
    },
    //切换每周的时候默认触发第一个状态获取答案
    RetrieveTheTnswer: function(classWeekTypeId) {
      var _this = this;
      _this
        .axios({
          method: "get",
          url: `http://192.168.1.27:8088/api/ClassInfoContent/Contentls`,
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
          _this.numnum = 0;
          if (_this.Answer.length == 0) {
            _this.tabconwu = true;
          } else {
            _this.tabconwu = false;
          }
          for (var i = 0; i < _this.Answer.length; i++) {
            if (
              _this.Answer[i].url == null ||
              _this.Answer[i].url == "" ||
              _this.Answer[i].url == ""
            ) {
              _this.Answer[i].conurl = false;
              _this.Answer[i].context = true;
              console.log("URL空");
            } else {
              _this.Answer[i].conurl = true;
              _this.Answer[i].context = false;
              _this.Answer[i].Imgs = _this.getUrlList(_this.Answer[i]);
              console.log("content空");
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    bookmarks: function() {
      var _this = this;
      _this.bookmark = !_this.bookmark;
    },
    beOfUses: function() {
      var _this = this;
      _this.useOnuse.Id = Number(this.$route.query.classInfoId);
      if (_this.use == false || _this.noUse == true) {
        _this.useOnuse.type = "Y";
        _this.useOnuse.check = 1;
        _this.use = true;
        _this.noUse = false;
        _this.ChangeClassInfo();
      } else if (_this.use == true && _this.noUse == false) {
        _this.useOnuse.type = "Y";
        _this.useOnuse.check = -1;
        _this.use = false;
        _this.ChangeClassInfo();
      }
    },
    noUses: function() {
      var _this = this;
      _this.useOnuse.Id = Number(this.$route.query.classInfoId);
      if (_this.noUse == false || _this.use == true) {
        _this.useOnuse.type = "N";
        _this.useOnuse.check = 1;
        _this.noUse = true;
        _this.use = false;
        _this.ChangeClassInfo();
      } else if (_this.noUse == true && _this.use == false) {
        _this.useOnuse.type = "N";
        _this.useOnuse.check = -1;
        _this.noUse = false;
        _this.ChangeClassInfo();
      }
    },
    // 更改课程资料的有用没用
    ChangeClassInfo: function() {
      var _this = this;
      _this
        .axios({
          method: "put",
          url: `http://192.168.1.27:8088/api/Classinfo/ChangeClassInfo`,
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
          _this.UseRecord();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 根据课程资料id检索该课程资料有用、没用
    UseRecord: function() {
      var _this = this;
      _this
        .axios({
          method: "get",
          url: `http://192.168.1.27:8088/api/Classinfo/UseRecords`,
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
          console.log(_this.UseRecords)
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
    },
    onMouseOver: function() {
      var _this = this;
      _this.MouseOver = true;
    },
    onMouseout: function() {
      var _this = this;
      _this.MouseOver = false;
    },

    joim: function() {
      var _this = this;
    }
  }
};
</script>