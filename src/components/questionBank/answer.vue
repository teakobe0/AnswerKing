<style>
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
  
}

.tabCon-wu {
  /* width: 100px; */
  line-height: 212px;
  text-align: center;
  font-size: 20px;
  color: #136bd3;
  margin: 0 auto;
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
  width: 200px;
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
</style>

<template>
  <div id="answer">
    <div
      class="tabCon"
      v-loading="this.$store.state.answer.loading"
      element-loading-background="rgba(255, 255, 255)"
    >
      <p class="tabCon-wu" v-if="this.$store.state.answer.tabconwu">本周此项目无内容,去别处转转</p>
      <div oncontextmenu="return false;" ondragstart="return false;" v-for="(items,index) in this.$store.state.answer.answer">
        <div
          class="cover"
          v-for="(item,indexs) in items.Imgs"
          @mouseenter="onMouseOver"
          @mouseleave="onMouseout"
          @click="() => handleanwer(indexs)"
        >
          <img style="width:100%;height:100%;filter: blur(1px);" :src="item.contentUrl" :alt="items.contents">
        </div>
      </div>
      <VueEasyLightbox
        :visible="visible"
        :imgs="this.$store.state.answer.imgss"
        :index="index"
        @hide="handleHide"
      ></VueEasyLightbox>
    </div>
    <div class="popContainer-wrap">
      <div class="popContainer" v-show="shade==true">
        <p class="time">{{content}}</p>
        <p class="purchase" @click="joim">成为会员免除等待!</p>
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

export default {
  name: "answer",
  components: {
    VueEasyLightbox
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
      countdownClock: null,
      totalTime: 30,
      // 控制全屏遮罩的打开
      fullscreenLoading: false,
      loading: true,
      clock:null,
    };
  },
  created: function() {
    const _this = this;
    
  },
  methods: {
    onMouseOver: function() {
      const _this = this;
      _this.MouseOver = true;
    },
    onMouseout: function() {
      const _this = this;
      _this.MouseOver = false;
    },
    shows() {
      let _this = this;
      _this.visible = true;
    },
    handleHide() {
      let _this = this;
      _this.visible = false;
      _this.fullscreenLoading = false;
    },
    joim: function() {
      const _this = this;
      if (localStorage.token) {
        _this.$router.push({ path: "/personalData/vip" });
      } else {
        _this.visible = false;
        _this.fullscreenLoading = false;
        _this.shade = false;
        this.$confirm("您还未登录!请先登录!", "登录", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            _this.$router.push({
              path: "/login",
              query: {
                type: "skip"
              }
            });
          })
          .catch(() => {
            _this.shade = true;
            if(_this.totalTime == 30){
              _this.shade = false;
              _this.fullscreenLoading = false;
              _this.visible = false;
            }
            // _this.shade = false;
            // _this.totalTime = 0;
            // _this.visible = false;
          });
      }
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
      const _this = this;
      
      event.preventDefault();
      if (_this.$store.state.loginPerson.loginPerson.role == "vip") {
        _this.shade = false;
        // 控制图片查看器的打开
        _this.index = index;
        _this.shows();
      } else {
        
        _this.shade = true;
        _this.totalTime = 30;
        _this.content = _this.totalTime + "s后可观看答案";

        _this.clock = window.setInterval(() => {
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
            window.clearInterval(_this.clock); //清除定时器
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
      const _this = this;
      _this.countdownClock = null;
      _this.shade = false;
      _this.totalTime = 0;
      window.clearInterval(_this.clock); //清除定时器
      // _this.imageShow = true;
      _this.shows();
      // _this.handleHide();
    }
  },
  // 监听路由变化
  watch: {
    $route(to, from) {
      this.$router.go(0);
    }
  }
};
</script>

