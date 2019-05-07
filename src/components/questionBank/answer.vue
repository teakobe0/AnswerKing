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
  width: 100%;
  height: 100%;
}

.tabCon-wu {
  width: 100px;
  line-height: 212px;
  text-align: center;
  font-size: 20px;
  color: #136bd3;
  margin: 0 auto;
}
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
.popContainer .time {
  color: rgb(255, 255, 255);
  text-align: center;
  margin-top: 400px;
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
  <div id="answer">
    <div class="tabCon">
      <p class="tabCon-wu" v-if="this.$store.state.answer.tabconwu">暂无内容</p>
      <div v-for="(items,index) in this.$store.state.answer.answer">
        <div
          class="cover"
          v-for="(item,indexs) in items.Imgs"
          @mouseenter="onMouseOver"
          @mouseleave="onMouseout"
          @click="() => handleanwer(indexs)"
        >
          <img v-if="item.conurl == true" :src="item.contentUrl" :alt="items.contents">
        </div>
      </div>
      <VueEasyLightbox
        :visible="visible"
        :imgs="this.$store.state.answer.imgss"
        :index="index"
        @hide="handleHide"
      ></VueEasyLightbox>
    </div>
    <div class="popContainer" v-show="shade==true">
      <p class="time">{{content}}</p>
      <router-link to="/personalData/vip" class="purchase" @click="joim">立即加入我们!</router-link>
      <div class="closeshade" @click="Closemask">关闭</div>
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
      totalTime: 30
    };
  },
  created: function() {
    var _this = this;
    // _this.Answer = _this.$store.state.answer.answer;
  },
  methods: {
    onMouseOver: function() {
      var _this = this;
      _this.MouseOver = true;
    },
    onMouseout: function() {
      var _this = this;
      _this.MouseOver = false;
    },
    shows() {
      let _this = this;
      _this.visible = true;
    },
    handleHide() {
      let _this = this;
      _this.visible = false;
    },
    joim: function() {
      var _this = this;
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

