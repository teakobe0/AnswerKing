<style lang='scss'>
.member {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 276px;
  .member-title {
    width: 100%;
    height: 400px;
    background-color: #5ab2d6;
    overflow: hidden;
    background-image: url("../assets/member2.jpg");
    background-position: center;
    background-repeat: no-repeat;
  }
}

.member-con {
  /* margin-top: 80px; */
}

.member-title p:nth-of-type(1) {
  text-align: center;
  font-size: 120px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 70px;
}

.member-title p:nth-of-type(2) {
  color: #ffffff;
  text-align: center;
  font-size: 20px;
}

.member-Privilege {
  height: 400px;
  width: 100%;
}

.member-Privilege ul {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.member-Privilege ul li {
  list-style-type: none;
  width: 200px;
  height: 300px;
  border-top: 1px solid #c1c1c1;
  border-bottom: 1px solid #c1c1c1;
  margin-top: 50px;
  float: left;
  margin-right: 50px;
  margin-left: 50px;
}

.member-Privilege ul li img {
  width: 50px;
  height: 50px;
  margin-left: 75px;
  margin-top: 55px;
}

.member-Privilege ul li p:nth-of-type(1) {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-top: 8px;
}

.member-Privilege ul li p:nth-of-type(2) {
  text-align: center;
  font-size: 14px;
  color: #999;
  margin-top: 16px;
}

.member-Privilege ul li p:nth-of-type(3) {
  text-align: center;
  font-size: 14px;
  color: #999;
  margin-top: 8px;
}

.member-Privilege ul li p:nth-of-type(4) {
  text-align: center;
  font-size: 14px;
  color: #999;
  margin-top: 8px;
}

.member-recruiting {
  width: 100%;
  height: 400px;
  background-color: #ec7777;
  overflow: hidden;
  color: #fff;
  text-align: center;
  background-image: url("../assets/member1.jpg");
  background-position: center;
  background-repeat: no-repeat;
}

.member-recruiting p:nth-of-type(1) {
  margin-top: 70px;
  font-size: 40px;
  font-weight: 700;
}

.member-recruiting p:nth-of-type(2) {
  font-size: 20px;
}
.member-recruiting div {
  width: 285px;
  height: 90px;
  margin: 0 auto;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  margin-top: 8px;
  position: relative;
}
.member-recruiting div img {
  width: 40px;
  height: 30px;
  position: absolute;
  top: -2px;
  right: 78px;
}
.member-recruiting div span {
  display: block;
  margin-top: 16px;
  font-weight: 700;
  font-size: 16px;
}
.member-recruiting p:nth-of-type(3) {
  margin-top: 8px;
  font-size: 14px;
}
.member-recruiting p:nth-of-type(4) {
  margin-top: 8px;
  font-size: 14px;
}
.member-recruiting p:nth-of-type(5) {
  margin-top: 8px;
  font-size: 14px;
}

.member-join {
  width: 100%;
  height: 400px;
}
.member-join-con {
  width: 1200px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
}
/*.member-join-con div:nth-of-type(1) {*/
/*font-size: 30px;*/
/*margin-top: 30px;*/
/*width: 180px;*/
/*border-bottom: 4px solid #ff9f32;*/

/*}*/
.member-join-con div:nth-of-type(1) {
  margin-top: 125px;
  margin-left: 250px;
  width: 700px;
  height: 150px;
  text-align: center;
  line-height: 150px;
  color: #ffffff;
}

.member-join-con div:nth-of-type(2) {
  margin-top: 50px;
  margin-left: 395px;
  float: left;
}
.member-join-con div:nth-of-type(2) img {
  width: 50px;
  vertical-align: middle;
  margin-right: 20px;
}
.member-join-con div:nth-of-type(3) {
  margin-top: 50px;
  margin-left: 100px;
  float: left;
}
.member-join-con div:nth-of-type(3) img {
  width: 50px;
  vertical-align: middle;
  margin-right: 20px;
}
.member-join-con div:nth-of-type(4) {
  margin-top: 50px;
  margin-left: 100px;
  float: left;
}
.member-join-con div:nth-of-type(4) img {
  width: 50px;
  vertical-align: middle;
  margin-right: 20px;
}
.member-join-con .purchase {
  width: 100px;
  height: 100px;
  cursor: pointer;
  background-color: #ff9f32;
  border-radius: 2px;
}
.member-join-con .purchase p {
  text-align: center;
  color: #fff;
  font-size: 35px;
  width: 700px;
  height: 150px;
}
.member-join-con .purchase p:hover {
  background: #fb9119;
}
</style>
<template>
  <div class="member">
    <homeNav msg="登录/注册" />
    <div v-title :data-title="$t('nav.nav3')+'-CourseWhale'"></div>
    <div class="member-con">
      <div class="member-title">
        <p>{{$t('vip.title1')}}</p>
        <p>{{$t('vip.title2')}}</p>
      </div>
      <div class="member-Privilege">
        <ul>
          <li>
            <img src="../assets/心.svg" alt />

            <p>{{$t('vip.con1')}}</p>

            <p>{{$t('vip.con2')}}</p>

            <p>{{$t('vip.con3')}}</p>

            <p>{{$t('vip.con4')}}</p>
          </li>
          <li>
            <img src="../assets/增值.svg" alt />

            <p>{{$t('vip.con1')}}</p>

            <p>{{$t('vip.con5')}}</p>

            <p>{{$t('vip.con6')}}</p>

            <p>{{$t('vip.con7')}}</p>
          </li>
          <li>
            <img src="../assets/群组.svg" alt />

            <p>{{$t('vip.con1')}}</p>

            <p>{{$t('vip.con8')}}</p>

            <p>{{$t('vip.con9')}}</p>

            <p>{{$t('vip.con10')}}</p>
          </li>
          <li>
            <img src="../assets/教育.svg" alt />

            <p>{{$t('vip.con11')}}</p>

            <p>{{$t('vip.con12')}}</p>

            <p>{{$t('vip.con13')}}</p>

            <p>{{$t('vip.con14')}}</p>
          </li>
          <!-- <li>
                        <img src="../assets/教育1.svg" alt=""/>

                        <p>核心服务</p>

                        <p>贵宾礼遇 身份象征</p>

                        <p>金色驿站，您的旅途专属会所</p>

                        <p>随时恭候您的到来</p>
          </li>-->
        </ul>
      </div>
      <div class="member-recruiting">
        <p>JOIN US</p>

        <p>{{$t('vip.zhaomu1')}}</p>

        <div>
          <img src="../assets/hot.svg" alt />
          <span>{{$t('vip.zhaomu2')}}</span>
          <span>{{$t('vip.zhaomu3')}}</span>
        </div>
        <p>{{$t('vip.zhaomu4')}}</p>

        <p>{{$t('vip.zhaomu5')}}</p>

        <p>{{$t('vip.zhaomu6')}}</p>
      </div>
      <div class="member-join">
        <div class="member-join-con">
          <div class="purchase">
            <p @click="joinMember">{{$t('vip.join')}}!</p>
          </div>
          <!-- <div class="weixin">
                        <img src="../assets/微信.png" alt=""/>
                        <p style="margin-left: 10px;margin-top: 2px;">微信</p>
                    </div>
                    <div class="zhifubao">
                        <img src="../assets/支付宝.png" alt=""/>
                        <p style="margin-left: 2px;margin-top: 2px;">支付宝</p>

          </div>-->
          <!-- <div class="paypal">
                        <img src="../assets/paypal-pay.svg" alt=""/>
                        <p style="margin-left: 1px;margin-top: 2px;">Paypal</p>

          </div>-->
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

export default {
  name: "msg",
  components: {
    homeNav,
    homeFooter
  },
  data() {
    return {};
  },
  created: function() {
    const _this = this;
    document.documentElement.scrollTop = 0;
  },
  methods: {
    joinMember: function() {
      const _this = this;
      if (localStorage.token) {
        _this.$router.push({ path: "/personalData/vip" });
      } else {
        _this.$router.push({ path: "/login" });
      }
    }
  },
  mounted() {}
};
</script>
