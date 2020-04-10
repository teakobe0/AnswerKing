<style>
.emailVerify {
  width: 100%;
  height: 100%;
  position: relative;
  /* padding-bottom: 276px; */
}

.ev-con {
  /* text-align: center; */
  margin-bottom: 200px;
  margin-top: 200px;
}
.ev-con-title {
  overflow: hidden;
  margin: 0 auto;
  /* margin-top: 60px; */
  width: 255px;
}
.ev-con-title img {
  width: 80px;
  float: left;
}
.ev-con-title .ev-t1 {
  float: left;
  margin-left: 10px;
}
.ev-con-title .ev-t1 .ev-t1-p1 {
  font-size: 20px;
  color: #bbd675;
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 700;
}
.ev-con-title .ev-t1 .ev-t1-p2 {
  /* color: #ff8d00; */
}
.ev-con-te {
  text-align: center;
  margin-top: 30px;
}
.ev-con-succend .ev-con-title .ev-t1 .ev-t1-p1 {
  color: #f24e4e;
}
</style>
<template>
  <div class="emailVerify">
    <homeNav></homeNav>
    <div v-title data-title="邮箱验证跳转-CourseWhale"></div>
    <div class="ev-con">
      <div v-show="succendShow">
        <div class="ev-con-title">
          <img src="../assets/对勾2.png" alt />
          <div class="ev-t1">
            <p class="ev-t1-p1">验证成功!</p>
            <p class="ev-t1-p2">恭喜您获得7天会员!</p>
          </div>
        </div>
        <div class="ev-con-te">
          <div style="margin-bottom:5px">页面将在{{num}}秒内跳转到首页!</div>
          <div>
            如果页面没有反应请
            <router-link to="/home">点击这里</router-link>手动跳转
          </div>
        </div>
      </div>

      <div class="ev-con-succend" v-show="defeadet">
        <div class="ev-con-title">
          <img src="../assets/错号.jpg" alt />
          <div class="ev-t1">
            <p class="ev-t1-p1">验证失败!</p>
            <p class="ev-t1-p2">您的账号已经验证过了!</p>
          </div>
        </div>
        <div class="ev-con-te">
          <div style="margin-bottom:5px">页面将在{{denum}}秒内跳转到首页!</div>
          <div>
            如果页面没有反应请
            <router-link to="/home">点击这里</router-link>手动跳转
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
export default {
  name: "emailVerify",
  components: {
    homeNav,
    homeFooter
  },
  data() {
    return {
      num: 5,
      denum: 5,
      succendShow: true,
      defeadet: false,
      a: ""
    };
  },
  created: function() {
    const _this = this;
    document.documentElement.scrollTop = 0;
    console.log(_this.$route.query.key);
    _this
      .axios({
        method: "put",
        url: `${_this.URLport.serverPath}/Client/FinishValidate`,
        async: false,
        params: {
          key: _this.$route.query.key
        },
        xhrFields: {
          withCredentials: true
        }
      })
      .then(function(res) {
        console.log(res);
        if (res.data.status == 1) {
          localStorage.token = res.data.data.token;
          setInterval(function() {
            _this.num--;
            if (_this.num == 0) _this.$router.push({ path: "/home" });
          }, 1000);
        } else {
          _this.succendShow = false;
          _this.defeadet = true;
          setInterval(function() {
            _this.denum--;
            if (_this.denum == 0) _this.$router.push({ path: "/home" });
          }, 1000);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {},
  mounted() {}
};
</script>
