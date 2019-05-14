<style>
#serch {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 276px;
}

.serch-cover {
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  background-color: #f4f4f7;
  overflow: hidden;
  padding-bottom: 54px;
}

.serch-con {
  width: 1300px;
  margin: 0 auto;
  padding-top: 100px;
}

/*搜索内容*/
.serchtext {
  display: block;
  width: 1240px;
  height: 120px;
  text-decoration: none;
  color: #414141;
  margin-top: 2px;
  /*border-bottom: 1px solid #cac7cd;*/
  overflow: hidden;
  position: relative;
  /*border: 1px solid #cac7cd;*/
  padding: 30px;
  /*margin-left: 16px;*/
  /*margin-right: 16px;*/
  margin-top: 15px;
  cursor: pointer;
  background-color: #ffffff;
}

.serchtext:hover {
  /*border: 1px solid #cac7cd;*/
  box-shadow: 0px 0px 1px #cac7cd;
}

.serchtext-top {
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 10px;
  position: relative;
}

.serchtext-top p {
  text-decoration: none;
  /*font-weight: 700;*/
  color: #000;
  font-size: 20px;
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
}

.serchtext-top p:hover {
  color: #ff9e00;
}

.serchtext-top li {
  list-style-type: none;
  position: absolute;
  right: 0;
  top: 0;
  color: #a2a2a2;
  font-size: 15px;
  line-height: 20px;
}

.serchtext-top li a {
  text-decoration: none;
  color: #a2a2a2;
}

.serchtext-bootom {
  width: 100%;
  height: 80px;
  margin-top: 10px;
  overflow: hidden;
}

.text-boo-left {
  height: 150px;
}

.text-boo-left img {
  width: 100%;
  height: 144px;
}

.text-boo-right {
  width: 100%;
  height: 70px;
}

.text-boo-right-p {
  width: 100%;
  height: 55px;
  text-align: left;
  word-wrap: break-word;
  overflow: hidden;
}

.serchtext-nadu {
  overflow: hidden;
  position: absolute;
  bottom: 30px;
  left: 30px;
  text-align: left;
  font-size: 14px;
  color: #b8b8b8;
  text-decoration: none;
}

.serchtext-nadu:hover {
  color: #ff9e00;
}

.serchtext-time {
  position: absolute;
  bottom: 30px;
  right: 30px;
  margin-top: 5px;
  text-align: left;
  font-size: 14px;
  color: #b8b8b8;
}

.cless {
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-bottom: 70px;
}

.clesstop {
  display: block;
  text-decoration: none;
  color: #000;
  width: 1300px;
  height: 50px;
  background-color: #f9f9f9;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 4px solid #fe9e11;
  cursor: pointer;
}

.clesstop i {
  display: inline-block;
  width: 20px;
  height: 20px;
}

.clessmore {
  position: absolute;
  bottom: 15px;
  left: 50%;
  margin-left: -40px;
}

.serch-nav {
  width: 100%;
  background: #f9f9f9;
  box-shadow: 0 0 5px #e1e1e1;
  position: absolute;
  top: 0;
}

.serch-nav-con {
  width: 1300px;
  background: #ebf5f424;
  margin: 0 auto;
}

.serch-nav-con button {
  margin-top: 5px;
  background: #ebf5f424;
}

.serch-nav-con-span {
  float: right;
  line-height: 50px;
  cursor: pointer;
  font-size: 14px;
}

.serch-nav-con-span:hover {
  color: #838383;
}

.fixedNav {
  position: fixed;
  top: 80px;
  z-index: 999;
  animation: mymove 0.1s;
  -webkit-animation: mymove 0.2s; /*Safari and Chrome*/
}

@keyframes mymove {
  from {
    height: 0px;
  }
  to {
    height: 50px;
  }
}

@-webkit-keyframes mymove /*Safari and Chrome*/ {
  from {
    left: 0px;
  }
  to {
    left: 200px;
  }
}

/*切换显示开关以后的CSS*/
.serchtextswitch {
  display: inline-block;
  width: 350px;
  height: 140px;
  text-decoration: none;
  color: #000;
  margin-top: 2px;
  /*border-bottom: 1px solid #cac7cd;*/
  overflow: hidden;
  position: relative;
  /*border: 1px solid #cac7cd;*/
  padding: 30px;
  /*margin-left: 17px;*/
  margin-right: 35px;
  margin-top: 15px;
  /*cursor: pointer;*/
  background-color: #ffffff;
}

.serchtextswitch:nth-of-type(3n + 0) {
  margin-right: 0px;
}

.serchtextnaduswitch {
  overflow: hidden;
  position: absolute;
  bottom: 30px;
  left: 30px;
  width: 270px;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  font-size: 14px;
  color: #b8b8b8;
}

.textboorightPswitch {
  width: 100%;
  height: 74px;
  text-align: left;
  word-wrap: break-word;
  overflow: hidden;
}

.page-component-up {
  background-color: #fff;
  position: fixed;
  right: 100px;
  bottom: 150px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  z-index: 5;
}

.page-component-up i {
  color: #409eff;
  display: block;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
}
</style>

<template>
  <div id="serch">
    <homeNav></homeNav>
    <div v-title data-title="搜索结果-AnswerWang"></div>
    <div class="serch-nav" :class="{fixedNav:isfixedNav}">
      <div class="serch-nav-con">
        <el-switch
          v-model="clessShow"
          active-color="#13ce66"
          inactive-color="#ff4949"
          inactive-text="展开课程结果"
          @change="searchResultSwitch($event,'clessShow')"
          style="margin-top: 15px;margin-right: 10px;"
        ></el-switch>
        <el-switch
          v-model="contentShow"
          active-color="#13ce66"
          inactive-color="#ff4949"
          inactive-text="展开题库结果"
          @change="searchResultSwitch($event,'contentShow')"
          style="margin-top: 15px;margin-right: 10px;"
        ></el-switch>
        <el-switch
          v-model="universityShow"
          active-color="#13ce66"
          inactive-color="#ff4949"
          inactive-text="展开学校结果"
          @change="searchResultSwitch($event,'universityShow')"
          style="margin-top: 15px"
        ></el-switch>

        <span class="serch-nav-con-span" @click="Switch">
          改变视图
          <i class="el-icon-menu"></i>
        </span>
      </div>
    </div>

    <div class="serch-cover">
      <div class="serch-con" v-if="clesstops">
        <!-- 课程 -->
        <div class="cless" v-if="clessBoxShow">
          <div class="clesstop" @click="searchResultShow('clessShow')">
            课程({{classeNum}})
            <i class="el-icon-caret-bottom" v-if="clessicondownShow"></i>
            <i class="el-icon-caret-top" v-if="clessiconupShow"></i>
          </div>
          <div v-if="clessShow">
            <router-link
              :to="{path:'/classesDetails',query: {id: item.id}}"
              class="serchtext"
              :class="{serchtextswitch:isserchTextSwitch}"
              v-for="item in value1"
            >
              <ul class="serchtext-top">
                <p>{{item.name}}</p>
                <li v-if="isserchTextSwitch == false">Classes</li>
              </ul>
              <div class="serchtext-bootom">
                <!--<div class="text-boo-left">-->
                <!--&lt;!&ndash;<img src="../assets/black-1072366_1920.jpg" alt=""/>&ndash;&gt;-->
                <!--</div>-->
                <div class="text-boo-right">
                  <p class="text-boo-right-p">{{item.memo}}</p>
                </div>
              </div>
              <router-link
                :to="{path:'/serchDetailsUniversity',query: {id: item.universityId}}"
                class="serchtext-nadu"
                :class="{serchtextnaduswitch:isserchTextSwitch}"
              >
                <span v-if="isserchTextSwitch == false">School:</span>
                <b>{{item.university}}</b>
              </router-link>
              <div class="serchtext-time">{{item.createTime | formatDate}}</div>
            </router-link>
            <div class="clessmore">
              <el-button @click="viewMmore('clessChange')">查看更多</el-button>
            </div>
          </div>
        </div>
        <!-- 题库答案 -->
        <div class="cless" v-if="contentBoxShow">
          <div class="clesstop" @click="searchResultShow('contentShow')">
            题库答案({{contentNum}})
            <i class="el-icon-caret-bottom" v-if="conicondownShow"></i>
            <i class="el-icon-caret-top" v-if="coniconupShow"></i>
          </div>
          <div v-if="contentShow">
            <router-link
              :to="{path:'/serchDetailsContent',query: {id: item.classId,classInfoId:item.classInfoId,classWeekId:item.classWeekId,classweektypeid:item.classWeekTypeId,cwtParentId:item.cwtParentId,answerID:item.id}}"
              class="serchtext"
              :class="{serchtextswitch:isserchTextSwitch}"
              v-for="item in value2"
            >
              <ul class="serchtext-top">
                <p>{{item.classId}}{{item.className}}</p>
                <li v-if="isserchTextSwitch == false">Content</li>
              </ul>
              <div class="serchtext-bootom">
                <!--<div class="text-boo-left">-->
                <!--&lt;!&ndash;<img src="../assets/black-1072366_1920.jpg" alt=""/>&ndash;&gt;-->
                <!--</div>-->
                <div class="text-boo-right">
                  <p
                    class="text-boo-right-p"
                    :class="{textboorightPswitch:isserchTextSwitch}"
                  >{{item.contents}}</p>
                </div>
                <div class="serchtext-time">{{item.createTime | formatDate}}</div>
              </div>
            </router-link>
            <div class="clessmore">
              <el-button @click="viewMmore('contentChange')">查看更多</el-button>
            </div>
          </div>
        </div>
        <!-- 学校 -->
        <div class="cless" v-if="universityBoxShow">
          <div class="clesstop" @click="searchResultShow('universityShow')">
            学校({{universityNum}})
            <i class="el-icon-caret-bottom" v-if="unicondownShow"></i>
            <i class="el-icon-caret-top" v-if="uniconupShow"></i>
          </div>
          <div v-if="universityShow">
            <router-link
              :to="{path:'/serchDetailsUniversity',query:{id:item.university.id}}"
              class="serchtext"
              :class="{serchtextswitch:isserchTextSwitch}"
              v-for="item in value3"
            >
              <ul class="serchtext-top">
                <p>{{item.university.name}}</p>
                <li v-if="isserchTextSwitch == false">University</li>
              </ul>
              <div class="serchtext-bootom">
                <!--<div class="text-boo-left">-->
                <!--<img src="../assets/black-1072366_1920.jpg" alt=""/>-->
                <!--</div>-->
                <div class="text-boo-right">
                  <p
                    class="text-boo-right-p"
                    :class="{textboorightPswitch:isserchTextSwitch}"
                  >{{item.university.intro}}</p>
                </div>
                <div class="serchtext-nadu">课程数量:{{item.number}}</div>
                <div class="serchtext-time">{{item.university.createTime | formatDate}}</div>
              </div>
            </router-link>
            <div class="clessmore">
              <el-button @click="viewMmore('univerChange')">查看更多</el-button>
            </div>
          </div>
        </div>
      </div>
      <transition name="el-fade-in-linear">
        <div class="page-component-up" @click="pageTop" v-show="show">
          <i class="el-icon-caret-top"></i>
        </div>
      </transition>
    </div>
    <homeFooter></homeFooter>
  </div>
</template>

<script type="es6">
import homeNav from "@/components/public/homeNav.vue";
import homeFooter from "@/components/public/homeFooter.vue";
import { formatDate } from "@/common/js/date.js";
import { Loading } from "element-ui";

export default {
  name: "serch",
  components: {
    homeNav,
    homeFooter
  },
  data() {
    return {
      //三大类型的显示容器
      value1: [], //classes
      value2: [], //content
      value3: [], //university
      //三大类型的初始容器
      allClasses: [],
      allContent: [],
      allUniversity: [],
      //内容显示数量
      pageSize: 6,
      //内容的显示隐藏
      clessShow: true,
      contentShow: true,
      universityShow: true,
      //上下箭头的显示隐藏
      clessicondownShow: true,
      clessiconupShow: false,
      conicondownShow: true,
      coniconupShow: false,
      unicondownShow: true,
      uniconupShow: false,
      //外层盒子的显示隐藏
      clessBoxShow: false,
      contentBoxShow: false,
      universityBoxShow: false,
      clesstops: true,
      //三大类型的数量
      classeNum: 0,
      contentNum: 0,
      universityNum: 0,
      //导航的显示隐藏
      isfixedNav: false,
      isfixedNavtop: true,
      isserchTextSwitch: false,
      show: false,
      showNav: true,
      //内容的标题name
      conClassName: []
    };
  },
  created: function() {
    var _this = this;
    _this.openFullScreen2();
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  mounted() {
    var _this = this;
    window.addEventListener("scroll", _this.handleScroll);
    //window.addEventListener('scroll', function () {
    //    console.log("滚动高度" + document.body.scrollTop + `------` + document.documentElement.scrollTop); // 滚动高度
    //    //console.log("文档高度" + document.body.offsetHeight); // 文档高度
    //});
  },
  methods: {
    openFullScreen2() {
      var _this = this;
      _this.loading = this.$loading({
        lock: true,
        text: "加载中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      _this.gettingdata();
    },
    handleScroll() {
      var _this = this;
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //console.log(scrollTop)
      if (scrollTop >= 300) {
        _this.isfixedNav = true;
        _this.isfixedNavtop = false;
      } else if (scrollTop == 0) {
        _this.isfixedNav = false;
        _this.isfixedNavtop = true;
      }
      if (scrollTop > 300) {
        _this.show = true;
      } else if (scrollTop == 0) {
        _this.show = false;
      }
    },
    pageTop: function() {
      var _this = this;
      window.scroll(0, 0);
    },
    //获取页面数据
    gettingdata: function() {
      var _this = this;
      this.axios({
        method: "get",
        url: `http://192.168.1.27:8088/api/ClassInfoContent/Search`,
        async: false,
        params: {
          name: _this.$route.query.serchName
        },
        xhrFields: {
          withCredentials: true
        }
      })
        .then(function(res) {
          console.log(res);
          _this.classeNum = res.data.data.classes.length;
          _this.contentNum = res.data.data.content.length;
          _this.universityNum = res.data.data.ls.length;
          //课程
          if (res.data.data.classes.length != 0) {
            _this.allClasses = res.data.data.classes;
            _this.value1 = _this.allClasses.slice(0, _this.pageSize);
            _this.clessShow = true;
            _this.clessBoxShow = true;
          } else {
            _this.clessShow = false;
            _this.clessBoxShow = false;
          }
          //答案
          if (res.data.data.content.length != 0) {
            _this.allContent = res.data.data.content;
            _this.value2 = _this.allContent.slice(0, _this.pageSize);

            // for (var i = 0; i < _this.value2.length; i++) {
            //   _this.$set(_this.value2[i], "className", "");
            //   _this
            //     .axios({
            //       method: "get",
            //       url: `http://192.168.1.27:8088/api/Class/Getclass`,
            //       async: false,
            //       params: {
            //         id: _this.value2[i].classId
            //       },
            //       xhrFields: {
            //         withCredentials: true
            //       }
            //     })
            //     .then(function(res) {
            //       var conClassName = []
            //       conClassName.push(res.data.data.name);
            //       console.log(conClassName)
            //     })
            //     .catch(function(error) {
            //       console.log(error);
            //     });
            // }
            // for(var j = 0; j < _this.value2.length; j++){
            //     _this.value2[j].className = _this.conClassName[0]
            // }
            // console.log(_this.value2.className);
            //   if (_this.value2[i].classId == _this.conClassName[i].id) {
            //     _this.value2[i].className = _this.conClassName[i].name;
            //   }
            _this.contentShow = true;
            _this.contentBoxShow = true;
          } else {
            _this.contentShow = false;
            _this.contentBoxShow = false;
          }
          //学校
          if (res.data.data.ls.length != 0) {
            _this.allUniversity = res.data.data.ls;
            _this.value3 = _this.allUniversity.slice(0, _this.pageSize);
            _this.universityShow = true;
            _this.universityBoxShow = true;
          } else {
            _this.universityShow = false;
            _this.universityBoxShow = false;
          }
          _this.loading.close();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 查看更多方法
    viewMmore: function(name) {
      var _this = this;
      if (name == "clessChange") {
        if (_this.value1.length != 0) {
          _this.value1 = _this.allClasses.slice(
            0,
            _this.value1.length + _this.pageSize
          );
          _this.clessShow = true;
        } else {
          _this.clessShow = false;
        }
      } else if (name == "contentChange") {
        if (_this.value2.length != 0) {
          _this.value2 = _this.allContent.slice(
            0,
            _this.value2.length + _this.pageSize
          );
          _this.contentShow = true;
        } else {
          _this.contentShow = false;
        }
      } else if (name == "univerChange") {
        if (_this.value3.length != 0) {
          _this.value3 = _this.allUniversity.slice(
            0,
            _this.value3.length + _this.pageSize
          );
          _this.universityShow = true;
        } else {
          _this.universityShow = false;
        }
      }
    },
    // 点击控制搜索结果的打开关闭
    searchResultShow: function(name) {
      var _this = this;
      if (name == "clessShow") {
        _this.clessShow = !_this.clessShow;
        _this.clessicondownShow = !_this.clessicondownShow;
        _this.clessiconupShow = !_this.clessiconupShow;
      } else if (name == "contentShow") {
        _this.contentShow = !_this.contentShow;
        _this.conicondownShow = !_this.conicondownShow;
        _this.coniconupShow = !_this.coniconupShow;
      } else if (name == "universityShow") {
        _this.universityShow = !_this.universityShow;
        _this.unicondownShow = !_this.unicondownShow;
        _this.uniconupShow = !_this.uniconupShow;
      }
    },
    Switch: function() {
      var _this = this;
      _this.isserchTextSwitch = !_this.isserchTextSwitch;
    },
    // 顶部开关控制搜索结果的打开关闭
    searchResultSwitch: function(val, name) {
      var _this = this;
      if (name == "clessShow") {
        if (_this.clessShow == true) {
          _this.clessicondownShow = true;
          _this.clessiconupShow = false;
        } else {
          _this.clessicondownShow = false;
          _this.clessiconupShow = true;
        }
      } else if (name == "contentShow") {
        if (_this.contentShow == true) {
          _this.conicondownShow = true;
          _this.coniconupShow = false;
        } else {
          _this.conicondownShow = false;
          _this.coniconupShow = true;
        }
      } else if (name == "universityShow") {
        if (_this.universityShow == true) {
          _this.unicondownShow = true;
          _this.uniconupShow = false;
        } else {
          _this.unicondownShow = false;
          _this.uniconupShow = true;
        }
      }
    }
  }
};
</script>