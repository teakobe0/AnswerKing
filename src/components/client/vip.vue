<style>
/*右侧*/

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
  margin-top: 20px;
  margin-bottom: 20px;
}

.dredgevip ul li {
  width: 150px;
  height: 130px;
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
  margin-left: 170px;
}

.dredgevip ul li p:nth-of-type(1) {
  font-size: 16px;
  margin-top: 10px;
  color: #4e4e4e;
}

.dredgevip ul li p:nth-of-type(2) {
  font-size: 28px;
  margin-top: 10px;
  color: #fc8321;
  font-weight: 700;
}

.dredgevip ul li p:nth-of-type(3) {
  font-size: 16px;
  margin-top: 10px;
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
  height: 43px;
  border-bottom: 1px solid #dddddd;
}
.sweep div {
  width: 75px;
  height: 41px;
  border-bottom: 3px solid #fc8321;
  font-size: 16px;
  color: #505050;
  text-align: center;
  line-height: 41px;
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
  text-align: center;
  margin-top: 24px;
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
.paypal-button-container {
  width: 300px;
  margin: 0 auto;
  margin-top: 24px;
}
</style>


<template>
  <div id="changePassword">
    <div class="pd-con-head-right">
      <h3>成为会员</h3>
      <div class="dredgevip">
        <ul>
          <li
            :class="{dredgeTag:num == index}"
            v-for="(item,index) in moneys"
            @click="tabdredge(index,item.price)"
          >
            <p>{{item.name}}</p>
            <p>${{item.price}}</p>
            <p>
              <s>原价${{item.original}}</s>
            </p>
            <img src="../../assets/对勾.png" alt v-show="num==index" />
          </li>
        </ul>
      </div>
      <!--<div>-->
      <!--<router-view/>-->
      <!--</div>-->
      <div class="sweep">
        <div>确认付款</div>
      </div>
      <div class="pay">
        <!-- <div class="pay-left"> -->
        <!-- 选择平台: -->
        <!-- <img
            src="../../assets/paypal.png"
            alt
            :class="{imgweixin:pay == 0}"
            @click="payplatform(0,1)"
        >-->
        <!-- <img
            src="../../assets/weixin.png"
            alt
            :class="{imgweixin:pay == 1}"
            @click="payplatform(1,2)"
          >
          <img
            src="../../assets/zhifubao.png"
            alt
            :class="{imgweixin:pay == 2}"
            @click="payplatform(2,3)"
        >-->
        <!-- </div> -->
        <!-- <div class="pay-right"> -->
        <!-- <p>
            应付金额:
            <span style="color: #fc8321;font-size: 25px;">{{money}}</span> 元
        </p>-->
        <!-- <div><img src="../../assets/微信.png" alt=""  style="width: 20px;height: 20px;vertical-align:middle"/><img src="../../assets/支付宝.png" alt=""  style="width: 20px;height: 20px;vertical-align:middle;margin-left: 10px;margin-right: 10px;"/></div> -->
        <!-- </div> -->
        <!-- <div class="dredgePay" @click="dredgePay">立即开通</div> -->
        <div id="paypal-button-container" class="paypal-button-container"></div>
      </div>
      <div class="clauseText">同意并接受《CourseWhale会员服务条款》</div>
    </div>
  </div>
</template>
<script type="es6">
import { constants } from "crypto";
export default {
  name: "changePassword",
  components: {},
  data() {
    //在ES6中添加数据是在return{}中
    return {
      activeName: "first",
      num: 0,
      money: 0.01,
      tab0: "0",
      tab1: "1",
      tab2: "2",
      tab3: "3",
      tab4: "4",
      tab5: "5",
      pay: 0,
      moneys: [],
      loadings: []
    };
  },
  created: function() {
    const _this = this;
    // this.$router.go(0)
    _this.gainpersonal();
    // _this.openFullScreen();
    // _this.openFullScreen();
  },
  //页面的方法还是写在methods{}中
  methods: {
    gainpersonal: function() {
      const _this = this;
      if (localStorage.getItem("token")) {
        _this
          .axios({
            method: "get",
            url: `http://192.168.1.27:8088/api/Order/GetGoods`,
            async: false,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(function(res) {
            _this.moneys = res.data.data;
            _this.moneys[0].original = 1;
            _this.moneys[1].original = 2;
            _this.moneys[2].original = 3;
            _this.moneys[3].original = 4;
            _this.paypal();
          })
          .catch(function(error) {
            console.log(error);
            console.log("获取token失败");
          });
      } else {
      }
    },
    paypal: function() {
      const _this = this;
      paypal
        .Buttons({
          // Set up the transaction
          createOrder: function(data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: _this.money
                  }
                }
              ]
            });
          },
          // 完成这笔交易
          onApprove: function(data, actions) {
            // 从这里开始增加一个遮罩
            const loading = _this.$loading({
              lock: true,
              text: "加载中...",
              spinner: "el-icon-loading",
              background: "rgba(0, 0, 0, 0.7)"
            });
            // alert("Transaction completed by ");
            return actions.order.capture().then(function(details) {
              // 向买家展示成功的信息
              alert(
                "Transaction completed by " +
                  details.payer.name.given_name +
                  "!"
              );
              
              return _this
                .axios({
                  method: "POST",
                  url: `http://192.168.1.27:8088/api/Order/SaveOrder`,
                  async: false,
                  params: {
                    orderId: data.orderID
                  },
                  xhrFields: {
                    withCredentials: true
                  },
                  headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                  }
                })
                .then(function(res) {
                  loading.close();
                  if (res.data.data.msg != null) {
                    _this.defeatedOpen();
                  } else {
                    _this.open();
                  }
                })
                .catch(function(error) {
                  console.log(error);
                  console.log("获取token失败");
                });
            });
          }
        })
        .render("#paypal-button-container");
    },
    open() {
      this.$alert("支付成功!", "CourseWhale", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "success",
            message: `支付成功!`
          });
          this.$router.push({ path: "/personalData/basic" });
        }
      });
    },
    defeatedOpen() {
      this.$confirm("支付失败!请重新支付或者联系客服帮您处理问题。", "提示", {
        confirmButtonText: "重新支付",
        cancelButtonText: "联系客服",
        type: "warning"
      });
    },
    openFullScreen() {
      const loadings = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      loading.close();
    },
    tabdredge: function(tab, money) {
      const _this = this;
      _this.num = tab;
      _this.money = money;
    },
    payplatform: function(tab, platform) {
      const _this = this;
      _this.pay = tab;
    },
    dredgePay: function() {
      const _this = this;
      _this.$store.state.vip.succeed = true;
      console.log(_this.money);
      _this.$message({
        message: "开通成功",
        type: "success"
      });
      this.$router.push({ path: "/personalData/basic" });
    }
  }
};
</script>
