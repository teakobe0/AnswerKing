<style>
.nav {
  width: 100%;
  background-color: #4458b0;
  z-index: 99;
  /* position: fixed;
  top: 0; */
}

.navcolor {
  background-color: #3b3b3b;
}
.navcolor:hover {
  background-color: #3b3b3b;
}
.homenav-con {
  width: 1300px;
  height: 80px;
  margin: 0 auto;
  position: relative;
}
.nav-logo {
  float: left;
  z-index: 999;
}

.nav-logo a {
  height: 80px;
  float: left;
  color: #ff9e00;
  text-decoration: none;
  font-size: 30px;
  line-height: 80px;
}
.nav-logo a img {
  width: 200px;
  height: 32px;
  margin-top: 24px;
}

.el-menu-demo {
  float: right;
  height: 80px;
}
.el-menu--horizontal > .el-menu-item {
  height: 80px !important;
  line-height: 80px !important;
  padding: 0 !important;
}
.el-menu--horizontal > .el-menu-item:hover {
  background-color: #4458b0 !important;
  color: none !important;
  border-bottom-color: #4458b0 !important;
}
.el-menu--horizontal > .el-menu-item a {
  /* color: #FFF !important; */
  display: inline-block;
  line-height: 80px;
  padding: 0 20px;
  text-decoration: none;
  font-weight: 700;
}
.el-menu--horizontal > .el-menu-item a:hover {
  color: #b9b9b9 !important;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 80px !important;
  line-height: 80px !important;
  padding: 0 !important;
}
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: #4458b0 !important;
  color: none !important;
  border-bottom-color: #4458b0 !important;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 0px solid #409eff !important;
  color: #fff !important;
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: 0px solid #409eff !important;
  color: #fff !important;
}
.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 96px !important;
}
.el-menu.el-menu--horizontal {
  border-bottom: solid 0px #e6e6e6 !important;
}
.homenav-resi {
  background-color: #3ccece;
  width: 56px;
  text-align: center;
  height: 50px;
  line-height: 50px !important;
  /* margin-top: 15px; */
  border-radius: 2px;
}
.homenav-resi:hover {
  transition-delay: 0.1s;
  background-color: #fbcc28;
  color: #000 !important;
}

#nickname {
  display: inline-block;
  width: 56px;
  height: 80px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  padding: 0 20px;
}
#nickname img {
  /* margin: 0 auto; */
}
.el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  display: none;
}

.perImg a {
  color: #fff !important;
  display: block !important;
  text-align: center;
  text-decoration: none;
}
.perImg a:hover {
  color: #b9b9b9 !important;
}

.vipShow {
  width: 100%;
  font-size: 14px;
  color: #ffaa3b;
  background-color: rgba(56, 73, 148, 0.774);
  line-height: 40px;
  text-align: center;
  z-index: 999;
  overflow: hidden;
}
.vipShow span {
  position: absolute;
  top: 0px;
  right: 10px;
  color: rgb(235, 235, 235);
  cursor: pointer;
  font-size: 12px;
}
.vipShow a {
  color: #ffaa3b;
}
.vipShow a:hover {
  color: rgb(35, 187, 233);
}
.lang {
  position: absolute;
  top: 23px;
  left: 213px;
}
.languages {
  background-color: #4458b0 !important;
  border: 0 !important;
  color: #fff !important;
  margin-top: 5px !important;
}
.languages .popper__arrow {
  display: none !important;
}
.languages .el-select-dropdown__item {
  color: #fff !important;
}
/* .languages .el-select-dropdown__item.hover,
.selected {
  background-color: #36468d !important;
} */
/* .languages .el-select-dropdown__item.hover,
.hover {
  background-color: #36468d !important;
} */
/* .languages .el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: #36468d !important;
} */
.languages li:hover {
  background-color: #36468d !important;
}
.languages li.hover {
  background-color: #36468d !important;
}
</style>

<template>
  <div class="nav">
    <complain></complain>
    <div class="vipShow" v-if="this.$store.state.vip.vipShow">
      {{$t('nav.nav10')}}&nbsp;{{endTime | formatDate}}&nbsp;{{$t('nav.nav11')}}
      <router-link to="/personalData/vip">{{$t('nav.nav12')}}</router-link>
      {{$t('nav.nav13')}}
      <router-link to="/personalData/basic">{{$t('nav.nav14')}}</router-link>
      {{$t('nav.nav15')}}
      <router-link to="/uploadAnswer">{{$t('nav.nav16')}}</router-link>
      {{$t('nav.nav17')}}
      <span @click="vipHandel">
        {{$t('nav.nav18')}}
        <i class="el-icon-close"></i>
      </span>
    </div>
    <div class="homenav-con">
      <div class="nav-logo">
        <router-link to="/home">
          <img src="../../assets/logo.png" alt />
        </router-link>
      </div>
      <div class="lang" id="langs">
        <div style="position: relative;">
          <el-select
            v-model="value"
            placeholder
            class="language"
            popper-class="languages"
            @change="handleWeeks"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span style="float: left">
                <img :src="item.img" alt style="width:20px;vertical-align: middle;" />
                {{ item.label }}
              </span>
            </el-option>
          </el-select>
          <img
            src="../../assets/中国.svg"
            alt
            style="width:20px;position: absolute;top: 10px;left: 20px;"
            v-show="value == 'zh'"
          />
          <img
            src="../../assets/美国.svg"
            alt
            style="width:20px;position: absolute;top: 10px;left: 8px;"
            v-show="value == 'en'"
          />
          <img
            src="../../assets/韩国.jpg"
            alt
            style="width:20px;position: absolute;top: 10px;left: 15px;"
            v-show="value == 'ko'"
          />
        </div>
      </div>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#4458b0"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <div></div>
        <el-menu-item index="1">
          <router-link to="/schools">{{$t('nav.nav1')}}</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/classesStudy">{{$t('nav.nav2')}}</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/member">{{$t('nav.nav3')}}</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/uploadAnswer">{{$t('nav.nav4')}}</router-link>
        </el-menu-item>

        <el-menu-item index="5">
          <router-link to="/question">问答中心</router-link>
        </el-menu-item>
        <el-menu-item index="6" v-if="$store.state.logo.show">
          <router-link to="/login" style="width:56px;text-align: center;">{{$t('nav.nav5')}}</router-link>
        </el-menu-item>
        <el-menu-item index="7" v-if="$store.state.logo.show">
          <router-link class="homenav-resi" to="/register">{{$t('nav.nav6')}}</router-link>
        </el-menu-item>

        <el-submenu index="8" v-if="$store.state.logo.hide">
          <template slot="title">
            <router-link to="/personalData" id="nickname">
              <img src="../../assets/个人中心.svg" alt style="width:32px;height:32px;" />
              <div :class="{messageRed:this.$store.state.logo.message>=1}"></div>
            </router-link>
          </template>
          <el-menu-item index="2-1" class="perImg">
            <router-link to="/personalData">{{$t('nav.nav7')}}</router-link>
          </el-menu-item>
          <el-menu-item index="2-2" class="perImg">
            <router-link to="/personalData/inform">
              {{$t('nav.nav8')}}
              <span
                v-show="this.$store.state.logo.message>=1"
              >({{this.$store.state.logo.message}})</span>
              <div :class="{messageReds:this.$store.state.logo.message>=1}"></div>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2-3" class="perImg">
            <a href="javascript:void(0)" @click="logout">{{$t('nav.nav9')}}</a>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script type="es6">
import { formatDate } from "@/common/js/date.js";
import complain from "@/components/public/complain.vue";
import zh from "../../assets/中国.svg";
import en from "../../assets/美国.svg";
import ko from "../../assets/韩国.jpg";
export default {
  name: "Nav",
  components: {
    complain,
    zh,
    en,
  },
  props: {
    msg: String
  },
  data() {
    return {
      statle: "",
      vanish: true,
      vanishs: false,
      toggle: true,
      showname: false,
      nickname: this.$store.state.logo.nickname,
      searchBarFixed: false,
      ismessage: true,
      nummessage: "",
      nummessagetwo: "",
      personreviewsid: "",
      messageLength: 0,
      endTime: "",
      activeIndex2: "",
      options: [
        {
          value: "en",
          label: "English",
          img: en
        },
        {
          value: "zh",
          label: "中文",
          img: zh
        },
        {
          value: "ko",
          label: "한국어",
          img: ko
        }
      ],
      value: "zh",
      times: ""
    };
  },
  created: function() {
    const _this = this;
    localStorage.SkipPath = _this.$route.fullPath;

    _this.$store.state.answer.answer = null;
    if (localStorage.getItem("token")) {
      this.$store.state.logo.show = false;
      this.$store.state.logo.hide = true;
    } else {
      this.$store.state.logo.show = true;
      this.$store.state.logo.hide = false;
    }
    if (localStorage.lang) {
      if (localStorage.lang == "zh") {
        _this.value = "zh";
      }
      if (localStorage.lang == "en") {
        _this.value = "en";
      }
      if (localStorage.lang == "ko") {
        _this.value = "ko";
      }
    } else {
      _this.value = "en";
    }
    _this.gainpersonal();
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  },
  methods: {
    // 语言转换
    handleWeeks(item) {
      const _this = this;
      if (item == "zh") {
        _this.$i18n.locale = "zh";
        localStorage.setItem("lang", "zh");
      }
      if (item == "en") {
        _this.$i18n.locale = "en";
        localStorage.setItem("lang", "en");
      }
      if (item == "ko") {
        _this.$i18n.locale = "ko";
        localStorage.setItem("lang", "ko");
      }
    },
    // 检索通知信息数量
    gainmessage: function() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Notice/Notices`,
          async: false,
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          if (res.data.data.length >= 1) {
            _this.$store.state.logo.message = res.data.data.length;
            _this.messageLength = res.data.data.length;
            _this.ismessage = true;
          } else {
            _this.ismessage = false;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 检索通知信息
    gainmessages: function() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Notice/Notices`,
          async: false,
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          if (res.data.data.length >= 1) {
            _this.$store.state.logo.message = res.data.data.length;
            if (res.data.data.length > _this.messageLength) {
              _this.$notify.info({
                title: res.data.data[res.data.data.length-1].sendname + '说:',
                message: res.data.data[res.data.data.length-1].contentsUrl
              });
              _this.messageLength = res.data.data.length;
            }
            _this.ismessage = true;
          } else {
            _this.ismessage = false;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 获取个人信息
    gainpersonal: function() {
      const _this = this;
      if (localStorage.getItem("token")) {
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
            if (res.data.data.role == "vip") {
              const time = new Date();
              _this.endTime = res.data.data.effectiveDate;
              const endTimes = new Date(
                Date.parse(res.data.data.effectiveDate)
              );
              const iDays = parseInt(
                Math.abs(endTimes - time) / 1000 / 60 / 60 / 24
              ); //把相差的毫秒数转换为天数
              if (iDays < 7) _this.$store.state.vip.vipShow = true;
            }
            _this.$store.state.loginPerson.loginPerson = res.data.data;
            _this.personreviewsid = res.data.data.id;
            _this.gainmessage();
            _this.times = setInterval(_this.gainmessages, 5000);
          })
          .catch(function(error) {
            localStorage.removeItem("token");
            window.location.reload();
          });
      } else {
      }
    },
    // 注销
    logout: function() {
      const _this = this;
      if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
      } else {
        console.log("没有TOKEN");
      }
      if (localStorage.SkipPath.indexOf("/personalData") == -1) {
        if (localStorage.SkipPath) {
          _this.$router.push({
            path: localStorage.SkipPath
          });
        }
      } else {
        _this.$router.push({ path: "/home" });
      }

      window.location.reload();
    },
    // 关闭VIP 不足通知
    vipHandel() {
      const _this = this;
      _this.$store.state.vip.vipShow = false;
    }
  },
  directives: {
    focus: {
      // 当绑定元素插入到 DOM 中。
      inserted: function(el) {
        // 聚焦元素
        el.focus();
      }
    }
  },
  mounted() {
  },
  beforeDestroy() {
    clearInterval(this.times);
  }
};
</script>