
<style>
.tabCon {
  width: 763px;
  float: left;
}
.loading {
  width: 763px;
  height: 212px;
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

.tabCon-wu {
  /* width: 100px; */
  line-height: 212px;
  text-align: center;
  font-size: 20px;
  color: #136bd3;
  margin: 0 auto;
}
.tabCon-wu a {
  color: #7613d3;
  text-decoration: none;
}
.tabCon-wu a:hover {
  color: #e01044;
}
.tabCon-wu a:active {
  color: #136bd3;
}
.popContainer-wrap {
}
.popContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  overflow-y: hidden;
  overflow-x: hidden;
}
.blur {
  filter: blur(5px);
}
.popContainer .time {
  color: rgb(255, 255, 255);
  text-align: center;
  margin-top: 400px;
}
.popContainer .purchase {
  display: block;
  width: 280px;
  height: 50px;
  cursor: pointer;
  background-color: #ff9f32;
  border-radius: 2px;
  margin: 0 auto;
  text-align: center;
  line-height: 50px;
  color: #fff;
  margin-top: 30px;
}
.popContainer .closeshade {
  cursor: pointer;
  border-radius: 2px;
  margin: 0 auto;
  text-align: center;
  line-height: 30px;
  margin-top: 30px;
  font-size: 40px;
  color: rgb(155, 161, 161);
  position: absolute;
  right: 10px;
  top: -13px;
}
.popContainer .closeshade:hover {
  color: #fff;
}
.imgShow {
  width: 100px;
  height: 30px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 0px !important;
  z-index: 9999;
}
.imgShow a {
  display: block;
  width: 100px;
  line-height: 30px;
  text-decoration: none;
  color: black;
}
.popupLogins {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
.popup-con {
  width: 650px;
  height: 476px;
  margin: 0 auto;
  position: relative;
  margin-top: 260px;
}
</style>

<template>
  <div id="answer">
    <div class="popupLogins" v-show="popup">
      <div class="popup-con">
        <i
          class="el-icon-close pop-close"
          v-show="popup"
          @click="popupShows"
        ></i>
        <popupLogin v-show="popup"></popupLogin>
      </div>
    </div>

    <div class="tabCon">
      <p class="tabCon-wu" v-if="this.$store.state.answer.tabconwu">
        {{ $t("content.con23") }}
      </p>
      <div
        oncontextmenu="return false;"
        ondragstart="return false;"
        v-for="(items, index) in this.$store.state.answer.answer"
      >
        <div
          class="cover"
          v-for="(item, indexs) in items.origin"
          @click="() => handleanwer(indexs, item)"
        >
          <img
            style="width: 100%; height: 100%; filter: blur(1px)"
            :src="item.url"
            :alt="item.contents"
          />
        </div>
      </div>
      <el-button class="imgShow" size="mini" v-show="imgshow">
        <router-link
          :to="
            '/classes/' +
            $route.params.classes_id +
            '/content/' +
            itemImg.classInfoId +
            '/weeks/' +
            itemImg.classWeek +
            '/weektype/' +
            itemImg.classWeekType +
            '/imgDetails/' +
            itemImg.id
          "
          >{{ $t("content.con16") }}</router-link
        >
      </el-button>
      <VueEasyLightbox
        :visible="visible"
        :imgs="this.$store.state.answer.imgss"
        :index="index"
        @hide="handleHide"
      ></VueEasyLightbox>
    </div>
    <div class="popContainer-wrap">
      <div class="popContainer" v-show="shade == true">
        <p class="time">{{ content }}</p>
        <p style="color: #fff; text-align: center; margin-top: 10px">
          {{ contentLgoin }}
        </p>
        <p class="purchase" @click="joim">{{ $t("content.con24") }}</p>
        <div
          class="closeshade el-icon-close"
          @click="Closemask"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          v-loading.fullscreen.lock="fullscreenLoading"
        ></div>
      </div>
    </div>
  </div>
</template>
<script type="es6">
import VueEasyLightbox from "vue-easy-lightbox";
import popupLogin from "@/components/public/popupLogin.vue";
import { formatDate } from "@/common/js/date.js";
export default {
  name: "answer",
  components: {
    VueEasyLightbox,
    popupLogin,
  },
  data() {
    return {
      Answer: [],
      tabconwu: true,
      // 图片查看器
      imgss: "",
      visible: false,
      index: 0,
      // 控制遮罩的打开关闭
      shade: false,
      content: "请购买会员！",
      contentLgoin: "",
      countdownClock: null,
      totalTime: 30,
      // 控制全屏遮罩的打开
      fullscreenLoading: false,
      loading: true,
      clock: null,
      // 图片查看详情按钮的展示
      imgshow: false,
      popup: false,
      // 当前图片信息
      itemImg: {},
      Xtime: null,
      purButton: true,
      indexS:0
    };
  },
  created: function () {
    const _this = this;
    // console.log(_this.Dtime())
  },
  methods: {
    formatDate: function (time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
    // 非注册用户获取当天最后一秒的时间绑定cookies过期时间
    Dtime(num) {
      const _this = this;
      this.Xtime = new Date(
        new Date(new Date().toLocaleDateString()).getTime() +
          24 * 60 * 60 * 1000 -
          1
      );
      this.$cookies.set("user_timeNum", num, this.Xtime);
    },
    // 注册用户非VIP获取当天最后一秒的时间绑定cookies过期时间
    DtimeVip(num) {
      const _this = this;
      this.Xtime = new Date(
        new Date(new Date().toLocaleDateString()).getTime() +
          24 * 60 * 60 * 1000 -
          1
      );
      this.$cookies.set("user_timeNumVip", num, this.Xtime);
    },
    // 控制图片查看器的展开
    shows() {
      let _this = this;
      _this.visible = true;
      _this.imgshow = true;
    },
    // 图片查看器的关闭
    handleHide() {
      let _this = this;
      _this.visible = false;
      _this.fullscreenLoading = false;
      _this.imgshow = false;
    },
    // 开通会员前查看用户状态
    joim: function () {
      const _this = this;
      if (localStorage.token) {
        _this.$router.push({ path: "/personalData/vip" });
      } else {
        _this.visible = false;
        _this.fullscreenLoading = false;
        _this.shade = false;
        _this.popup = true;
        window.clearInterval(_this.clock); //清除定时器

        // console.log(this.$cookies.keys());
        // this.$cookies.remove("user_session")

        // this.$confirm("您还未登录!请先登录!", "登录", {
        //   confirmButtonText: "确定",
        //   cancelButtonText: "取消",
        //   type: "warning",
        // })
        //   .then(() => {
        //     _this.$router.push({
        //       path: "/login",
        //       query: {
        //         type: "skip",
        //       },
        //     });
        //   })
        //   .catch(() => {
        //     _this.shade = true;
        //     if (_this.totalTime == 30) {
        //       _this.shade = false;
        //       _this.fullscreenLoading = false;
        //       _this.visible = false;
        //     }
        //   });
      }
    },
    //点击答案显示遮罩方法
    handleanwer: function (index, item) {
      const _this = this;
      _this.itemImg = item;
      event.preventDefault(); //阻止URL跳转方法
      if (localStorage.token) {
        if (_this.$store.state.loginPerson.loginPerson.role == "vip") {
          _this.shade = false;
          // 控制图片查看器的打开
          _this.index = index;
          _this.shows();
        } else {
          if (_this.$cookies.get("user_timeNumVip")) {
            if (_this.$cookies.get("user_timeNumVip") > 0) {
              _this.ditmes("非vip用户每天可以看50张答案!",index);
            }else {
              _this.$message({
              message: "您今天的观看次数没有了!开通VIP后享受无限制浏览!",
              type: "error",
            });
            }
          } else {
            _this.DtimeVip(50);
            _this.ditmes("非vip用户每天可以看50张答案!",index);
          }
        }
      } else {
        if (_this.$cookies.get("user_timeNum")) {
          if (_this.$cookies.get("user_timeNum") > 0) {
            _this.ditmes("非登录用户每天可以看5张答案!",index);
          } else {
            _this.$message({
              message: "您今天的观看次数没有了!登录之后送您50张观看次数!",
              type: "error",
            });
          }
        } else {
          _this.Dtime(5);
          _this.ditmes("非登录用户每天可以看5张答案!",index);
        }

        // _this.popup = true;
      }
    },
    ditmes(text,index) {
      const _this = this;
      _this.purButton = false;
      _this.shade = true;
      _this.totalTime = 30;
      _this.content = _this.totalTime + "s" + " " + _this.$t("content.con25");
      _this.contentLgoin = text;
      _this.clock = window.setInterval(() => {
        _this.totalTime--;
        _this.content = _this.totalTime + "s" + " " + _this.$t("content.con25");
        if (_this.totalTime < 1) {
          _this.content = "s后可观看答案";
          _this.totalTime = 30;
          _this.shade = false;
          // 控制图片查看器的打开
          _this.index = index;
          _this.shows();
          //当倒计时小于0时清除定时器
          window.clearInterval(_this.clock); //清除定时器
          _this.Dtime(_this.$cookies.get("user_timeNum") - 1);
        }
      }, 1000);
    },
    // 关闭遮罩
    Closemask() {
      const _this = this;
      _this.countdownClock = null;
      _this.shade = false;
      _this.totalTime = 0;
      window.clearInterval(_this.clock); //清除定时器
      // _this.imageShow = true;
      // _this.shows();
      _this.handleHide();
    },
    // 登录遮罩层的关闭
    popupShows() {
      const _this = this;
      _this.popup = false;
    },
  },
};
</script>
