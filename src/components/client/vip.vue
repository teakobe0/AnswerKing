<style>
/*右侧*/

#changePassword h2 {
  border-bottom: 1px solid #dddddd;
  color: #999999;
  line-height: 40px;
  margin-bottom: 24px;
}

.el-tabs__item {
  /* width: 500px; */
  /* text-align: center; */
  /* font-size: 16px !important; */
}

.el-tabs__active-bar {
  background-color: #fc8321 !important;
  height: 4px !important;
}

.el-tabs__item:hover {
  color: #fc8321 !important;
}

.el-tabs__item.is-active {
  color: #fc8321 !important;
}

.dredgevip ul {
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
}

.dredgevip ul li {
  width: 150px;
  height: 150px;
  border: 1px solid #a1a1a1;
  margin-right: 17px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  position: relative;
}
.dredgevip ul li a {
  text-decoration: none;
}
.dredgevip ul li:hover {
  border: 1px solid #fc8321;
}

.dredgevip ul li:nth-last-of-type(1) {
  margin-right: 0px;
}

.dredgevip ul li:nth-of-type(1) {
  margin-left: 1px;
}

.dredgevip ul li p:nth-of-type(1) {
  font-size: 16px;
  margin-top: 10px;
  color: #4e4e4e;
}

.dredgevip ul li p:nth-of-type(2) {
  font-size: 28px;
  margin-top: 20px;
  color: #fc8321;
  font-weight: 700;
}

.dredgevip ul li p:nth-of-type(3) {
  font-size: 16px;
  margin-top: 15px;
  color: #a1a1a1;
}
.dredgevip ul li img {
  width: 40px;
  height: 40px;

  position: absolute;
  bottom: -11px;
  right: -6px;
}

.dredgeTag {
  border: 2px solid #fc8321 !important;
  background-color: rgba(255, 159, 50, 0.2);
}

.sweep {
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #999999;
}
.sweep div {
  width: 75px;
  height: 28px;
  border-bottom: 3px solid #fc8321;
  font-size: 18px;
  color: #505050;
}
.pay {
  overflow: hidden;
}
.pay-left {
  /* float: left; */
  font-size: 14px;
  color: #8c8c8c;
}
.pay-left img {
  width: 110px;
  height: 32px;
  margin-top: 24px;
  vertical-align: middle;
  margin-left: 2px;
  margin-right: 16px;
  border: 1px solid #e7e7e7;
  padding: 10px 20px;
  cursor: pointer;
}
.pay-right {
  /* float: left; */
}
.pay-right p {
  margin-top: 24px;
  font-size: 14px;
  color: #8c8c8c;
}
.pay-right div {
  margin-top: 40px;
  margin-left: 50px;
  font-size: 16px;
}
.clauseText {
  font-size: 12px;
  color: #8c8c8c;
  margin-top: 24px;
  margin-left: 66px;
}
.imgweixin {
  border: 2px solid #fc8321 !important;
}
.dredgePay {
  display: inline-block;
  width: 220px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  background: #fc8321;
  -webkit-box-shadow: 0 10px 15px rgba(252, 131, 33, 0.3);
  box-shadow: 0 10px 15px rgba(252, 131, 33, 0.3);
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
  cursor: pointer;
  margin-left: 66px;
  margin-top: 24px;
}
.dredgePay:hover {
  background-color: #ff8d2f;
}
</style>


<template>
  <div id="changePassword">
    <div class="pd-con-head-right">
      <h2>成为会员</h2>
      <div class="dredgevip">
        <ul>
          <li :class="{dredgeTag:num == 0}" @click="tabdredge(0,139)">
            <router-link to="/personalData/vip/platinavip">
              <p>连续包年</p>
              <p>￥139</p>
              <p>每月仅￥11.58</p>
              <img src="../../assets/对勾.png" alt v-show="num==0">
            </router-link>
          </li>
          <li :class="{dredgeTag:num == 1}" @click="tabdredge(1,149)">
            <p>12个月</p>

            <p>149</p>

            <p>
              <s>原价￥180</s>
            </p>
            <img src="../../assets/对勾.png" alt v-show="num==1">
          </li>
          <li :class="{dredgeTag:num == 2}" @click="tabdredge(2,36)">
            <p>连续包季</p>

            <p>￥36</p>

            <p>每月￥12</p>
            <img src="../../assets/对勾.png" alt v-show="num==2">
          </li>
          <li :class="{dredgeTag:num == 3}" @click="tabdredge(3,39)">
            <p>3个月</p>

            <p>￥39</p>

            <p>
              <s>原价￥45</s>
            </p>
            <img src="../../assets/对勾.png" alt v-show="num==3">
          </li>
          <li :class="{dredgeTag:num == 4}" @click="tabdredge(4,12.6)">
            <p>连续包月</p>

            <p>￥12.6</p>

            <p>
              <s>原价￥15</s>
            </p>
            <img src="../../assets/对勾.png" alt v-show="num==4">
          </li>
          <li :class="{dredgeTag:num == 5}" @click="tabdredge(5,15)">
            <p>1个月</p>

            <p>￥15</p>

            <p>单月会员</p>
            <img src="../../assets/对勾.png" alt v-show="num==5">
          </li>
        </ul>
      </div>
      <!--<div>-->
      <!--<router-view/>-->
      <!--</div>-->
      <div class="sweep">
        <div>扫码支付</div>
      </div>
      <div class="pay">
        <div class="pay-left">
          选择平台:
          <img
            src="../../assets/weixin.png"
            alt
            :class="{imgweixin:pay == 0}"
            @click="payplatform(0,1)"
          >

          <img
            src="../../assets/zhifubao.png"
            alt
            :class="{imgweixin:pay == 1}"
            @click="payplatform(1,2)"
          >
        </div>
        <div class="pay-right">
          <p>
            应付金额:
            <span style="color: #fc8321;font-size: 25px;">{{money}}</span> 元
          </p>
          <!-- <div><img src="../../assets/微信.png" alt=""  style="width: 20px;height: 20px;vertical-align:middle"/><img src="../../assets/支付宝.png" alt=""  style="width: 20px;height: 20px;vertical-align:middle;margin-left: 10px;margin-right: 10px;"/></div> -->
        </div>
        <div class="dredgePay" @click="dredgePay">立即开通</div>
      </div>
      <div class="clauseText">同意并接受《AnswerKing会员服务条款》</div>
    </div>
  </div>
</template>
<script type="es6">
export default {
  name: "changePassword",
  components: {},
  data() {
    //在ES6中添加数据是在return{}中
    return {
      activeName: "first",
      num: 0,
      money: 139,
      tab0: "0",
      tab1: "1",
      tab2: "2",
      tab3: "3",
      tab4: "4",
      tab5: "5",
      pay: 0
    };
  },
  //页面的方法还是写在methods{}中
  methods: {
    handleClick: function(tab, event) {
      console.log(tab, event);
    },
    tabdredge: function(tab, money) {
      var _this = this;
      _this.num = tab;
      _this.money = money;
    },
    payplatform: function(tab, platform) {
      var _this = this;
      _this.pay = tab;
      console.log(1);
    },
    dredgePay: function() {
      var _this = this;
      _this.$store.state.vip.succeed = true;
      _this.$message({
        message: "开通成功",
        type: "success"
      });
      this.$router.push({path: '/personalData/basic'})
    }
  }
};
</script>
