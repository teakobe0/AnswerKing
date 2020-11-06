<style>
.qf-con {
  background-color: #f5f7fb;
}
.qf-title {
  height: 450px;
  overflow: hidden;
}
.qf-t-con {
  width: 1300px;
  height: 450px;
  margin: 0 auto;
}
.qf-t-c-l {
  width: 490px;
  float: left;
}
.qf-t-con img {
  float: right;
}
.qf-t-c-l1 {
  font-size: 24px;
  margin-top: 75px;
  color: #3a4c9a;
  font-weight: 700;
}
.qf-t-c-l2 {
  font-size: 36px;
  color: #3a4c9a;
  font-weight: 700;
}
.qf-t-c-l3 {
  font-size: 14px;
  margin-top: 30px;
  color: #333;
}
.qf-t-c-l4 {
  display: block;
  text-decoration: none;
  font-size: 18px;
  margin-top: 40px;
  width: 380px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 10px;
  background-color: #1da1f2;
  color: #fff;
  cursor: pointer;
  padding: 20px;
}
.qf-t-c-l4:hover {
  background-color: #2da6f1;
}
.qf-min {
  background-color: #344387;
  height: 360px;
  color: #fff;
}
.qf-min-c {
  width: 1300px;
  margin: 0 auto;
}
.qf-min-c1 {
  width: 290px;
  float: left;
}
.qf-min-c1-1 {
  color: #727fb7;
  font-size: 24px;
  margin-top: 65px;
}
.qf-min-c1-2 {
  font-size: 48px;
  font-weight: 700;
  margin-top: 5px;
}
.qf-min-c1-3 {
  font-size: 24px;
  margin-top: 25px;
}
.qf-min-c2 {
  width: 210px;
  float: left;
  margin-left: 270px;
  margin-top: 70px;
  text-align: center;
  font-size: 32px;
}
.qf-min-c3 {
  width: 210px;
  float: left;
  margin-left: 55px;
  margin-top: 70px;
  text-align: center;
  font-size: 32px;
}
.qf-min-c4 {
  width: 210px;
  float: left;
  margin-left: 55px;
  margin-top: 70px;
  text-align: center;
  font-size: 32px;
}
.qf-min-c img {
  margin-bottom: 22px;
}
.qf-bottom {
  width: 1300px;
  margin: 0 auto;
  height: 1560px;
}
.qf-b-title {
  text-align: center;
  font-size: 36px;
  color: #344387;
  line-height: 180px;
  font-weight: 700;
}
.qf-b-c1 {
  height: 340px;
  margin: 0 auto;
}
.qf-b-c2 {
  height: 340px;
  margin: 0 auto;
}
.qf-b-c3 {
  height: 340px;
  margin: 0 auto;
}
.qf-b-c4 {
  height: 340px;
  margin: 0 auto;
}
.qf-b-c-l {
  float: left;
  margin-left: 120px;
}
.qf-b-c-r {
  float: left;
  margin-left: 120px;
}
.qf-b-c-text1 {
  font-size: 102px;
  color: #646de2;
  font-weight: 700;
}
.qf-b-c-text2 {
  font-size: 36px;
  font-weight: 700;
  color: #344387;
}
.qf-b-c-text3 {
  font-size: 24px;
  color: #8990b4;
  margin-top: 15px;
}
.qf-di {
  background-color: #344387;
  height: 200px;
  overflow: hidden;
  width: 100%;
}
.qf-di a {
  display: block;
  text-decoration: none;
  font-size: 18px;
  width: 420px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 10px;
  background-color: #1da1f2;
  color: #fff;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 65px;
  padding: 20px;
}
.qf-di a:hover {
  background-color: #2da6f1;
}
.lefts {
  float: left;
  margin-left: 0px !important;
}
.leftsa {
  float: left;
  margin-left: -17px !important;
}
.right {
  float: right;
  margin-left: 0px !important;
}
.Awidths {
  width: 470px !important;
}
</style>

<template>
  <div class="questionFaq">
    <homeNav msg="登录/注册" />
    <div class="qf-con">
      <div class="qf-title">
        <div class="qf-t-con">
          <div class="qf-t-c-l">
            <div class="qf-t-c-l1">{{ $t("quFAQ.con0") }}</div>
            <div class="qf-t-c-l2">{{ $t("quFAQ.con25") }}</div>
            <div class="qf-t-c-l3">
              {{ $t("quFAQ.con1") }}
            </div>
            <router-link
              to="/question"
              class="qf-t-c-l4"
              :class="{ Awidths: localStoragelang }"
              >{{ $t("quFAQ.con2") }} ></router-link
            >
          </div>

          <img src="../../assets/qufaq1.png" alt="" />
        </div>
      </div>
      <div class="qf-min">
        <div class="qf-min-c">
          <div class="qf-min-c1">
            <div class="qf-min-c1-1">{{ $t("quFAQ.con3") }}</div>
            <div class="qf-min-c1-2">{{ $t("quFAQ.con4") }}</div>
            <div class="qf-min-c1-3">
              {{ $t("quFAQ.con5") }}<br />{{ $t("quFAQ.con6") }}
            </div>
          </div>
          <div class="qf-min-c2">
            <div>
              <img src="../../assets/qufaq2.png" alt="" />
            </div>

            100+<br />
            {{ $t("quFAQ.con8") }}
          </div>
          <div class="qf-min-c3">
            <div>
              <img src="../../assets/qufaq3.png" alt="" />
            </div>

            100%<br />
            {{ $t("quFAQ.con9") }}
          </div>
          <div class="qf-min-c4">
            <div>
              <img
                src="../../assets/qufaq4.png"
                style="margin-bottom: 18px"
                alt=""
              />
            </div>

            7*24{{ $t("quFAQ.con11") }}<br />
            {{ $t("quFAQ.con10") }}
          </div>
        </div>
      </div>
      <div class="qf-bottom">
        <div class="qf-b-title">
          {{ $t("quFAQ.con12") }}
        </div>
        <div class="qf-b-c1">
          <div class="qf-b-c-l" :class="{ lefts: localStoragelang }">
            <div class="qf-b-c-text1">01</div>
            <div class="qf-b-c-text2" :class="{}">
              {{ $t("quFAQ.con13") }}
            </div>
            <div class="qf-b-c-text3">
              {{ $t("quFAQ.con14") }}<br />{{ $t("quFAQ.con15") }}
            </div>
          </div>
          <div
            class="qf-b-c-r"
            style="margin-left: 194px"
            :class="{ right: localStoragelang }"
          >
            <img src="../../assets/qufaq5.png" alt="" />
          </div>
        </div>
        <div class="qf-b-c2">
          <div
            class="qf-b-c-r"
            style="margin-left: 83px"
            :class="{ leftsa: localStoragelang }"
          >
            <img src="../../assets/qufaq6.png" alt="" />
          </div>
          <div
            class="qf-b-c-l"
            style="margin-left: 160px"
            :class="{ right: localStoragelang }"
          >
            <div class="qf-b-c-text1" style="text-align: right">02</div>
            <div class="qf-b-c-text2" style="text-align: right">
              {{ $t("quFAQ.con16") }}
            </div>
            <div class="qf-b-c-text3" style="text-align: right">
              {{ $t("quFAQ.con17") }}<br />{{ $t("quFAQ.con18") }}
            </div>
          </div>
        </div>
        <div class="qf-b-c3">
          <div class="qf-b-c-l" :class="{ lefts: localStoragelang }">
            <div class="qf-b-c-text1">03</div>
            <div class="qf-b-c-text2">
              {{ $t("quFAQ.con19") }}
            </div>
            <div class="qf-b-c-text3">
              {{ $t("quFAQ.con20") }}<br />{{ $t("quFAQ.con21") }}
            </div>
          </div>
          <div
            class="qf-b-c-r"
            style="margin-left: 194px"
            :class="{ right: localStoragelang }"
          >
            <img src="../../assets/qufaq7.png" alt="" />
          </div>
        </div>
        <div class="qf-b-c4">
          <div class="qf-b-c-r" :class="{ lefts: localStoragelang }">
            <img src="../../assets/qufaq8.png" alt="" />
          </div>
          <div
            class="qf-b-c-l"
            style="margin-left: 174px"
            :class="{ right: localStoragelang }"
          >
            <div class="qf-b-c-text1" style="text-align: right">04</div>
            <div class="qf-b-c-text2" style="text-align: right">
              {{ $t("quFAQ.con22") }}
            </div>
            <div class="qf-b-c-text3" style="text-align: right">
              {{ $t("quFAQ.con23") }}<br />{{ $t("quFAQ.con24") }}
            </div>
          </div>
        </div>
      </div>
      <div class="qf-di">
        <div style="width: 1300px; margin: 0 auto; height: 200px">
          <router-link to="/question" :class="{ Awidths: localStoragelang }"
            >{{ $t("quFAQ.con2") }} ></router-link
          >
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
  name: "questionFaq",
  components: {
    homeNav,
    homeFooter,
  },
  data() {
    return {
      localStoragelang: false,
      times: null,
    };
  },
  created: function () {
    const _this = this;
    _this.tabs();
    _this.times = setInterval(_this.tab, 1000);
  },
  methods: {
    tabs() {
      if (localStorage.lang != "zh") {
        this.localStoragelang = true;
      }
    },
    tab() {
      if (localStorage.lang != "zh") {
        this.localStoragelang = true;
      } else {
        this.localStoragelang = false;
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.times);
    this.times = null;
  },
  computed: {},
  watch: {},
};
</script>