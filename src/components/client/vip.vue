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
  /* width: 75px; */
  height: 41px;
  display: inline-block;
  padding: 0 20px;
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
.paypal-button-container {
  width: 300px;
  margin: 0 auto;
  margin-top: 24px;
}
</style>


<template>
  <div id="changePassword">
    <div class="pd-con-head-right">
      <h3>{{ $t("personal.nav8") }}</h3>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="开通VIP" name="first">
          <div class="dredgevip">
            <ul>
              <li
                :class="{ dredgeTag: num == index }"
                v-for="(item, index) in moneys"
                @click="tabdredge(index, item.price)"
              >
                <p>{{ item.name }}</p>
                <p>
                  ${{ item.price }}
                  <span style="color: #a1a1a1; font-size: 14px"
                    >/个</span
                  >
                </p>
                <p>
                  <s>{{ $t("myvip.con2") }}${{ item.original }}</s>
                </p>
                <img src="../../assets/对勾.png" alt v-show="num == index" />
              </li>
            </ul>
          </div>
          <div class="sweep">
            <div>{{ $t("myvip.con3") }}</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="充值鲸灵币" name="second">
          <div class="dredgevip">
            <ul>
              <li
                :class="{ dredgeTag: NumMoneysIndex == index }"
                v-for="(item, index) in NumMoneys"
                @click="tabdredgeNumMoneys(index, item.price)"
              >
                <p>{{ item.name }}</p>
                <p>
                  ${{ item.price }}
                  <span style="color: #a1a1a1; font-size: 14px"
                    >/{{ $t("myvip.con1") }}</span
                  >
                </p>
                <p>
                  <s>{{ $t("myvip.con2") }}${{ item.original }}</s>
                </p>
                <img src="../../assets/对勾.png" alt v-show="num == index" />
              </li>
            </ul>
          </div>
          <div class="sweep">
            <div>{{ $t("myvip.con3") }}</div>
          </div>
        </el-tab-pane>

        <div class="pay">
          <div
            id="paypal-button-container"
            class="paypal-button-container"
          ></div>
        </div>
        <div class="clauseText">{{ $t("myvip.con4") }}</div>
      </el-tabs>
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
      money: 13.99,
      pay: 0,
      moneys: [],
      loadings: [],
      colModel: [],
      readySize: 0,
      NumMoneys:[
        {name:"1个币",price:"1",original:"2"},
        {name:"10个币",price:"10",original:"15"},
        {name:"50个币",price:"50",original:"80"},
        {name:"100个币",price:"100",original:"140"},
      ],
      NumMoneysIndex:0
    };
  },
  created: function () {
    const _this = this;
    _this.gainpersonal();
  },
  methods: {
    // 检索VIP的价钱
    gainpersonal: function () {
      const _this = this;
      if (localStorage.getItem("token")) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Order/GetGoods`,
            async: false,
            xhrFields: {
              withCredentials: true,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(function (res) {
            _this.moneys = res.data.data;
            console.log(res.data.data);
            _this.moneys[0].original = 16.99;
            _this.moneys[1].original = 50.99;
            _this.moneys[2].original = 101.99;
            _this.moneys[3].original = 203.99;
            // _this.moneys[0].Onprice = 13.99;
            // _this.moneys[1].Onprice = 12.99;
            // _this.moneys[2].Onprice = 11.99;
            // _this.moneys[3].Onprice = 10.99;
            _this.paypal();
          })
          .catch(function (error) {
            console.log("获取token失败");
          });
      } else {
      }
    },
    // 付款成功之后
    paypal: function () {
      const _this = this;
      paypal
        .Buttons({
          // Set up the transaction
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: _this.money,
                  },
                },
              ],
            });
          },
          // 完成这笔交易
          onApprove: function (data, actions) {
            // 从这里开始增加一个遮罩
            const loading = _this.$loading({
              lock: true,
              text: "加载中...",
              spinner: "el-icon-loading",
              background: "rgba(0, 0, 0, 0.7)",
            });
            return actions.order.capture().then(function (details) {
              // 向买家展示成功的信息
              return _this
                .axios({
                  method: "POST",
                  url: `${_this.URLport.serverPath}/Order/SaveOrder`,
                  async: false,
                  params: {
                    orderId: data.orderID,
                  },
                  xhrFields: {
                    withCredentials: true,
                  },
                  headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                })
                .then(function (res) {
                  loading.close();
                  if (res.data.data.msg != null) {
                    _this.defeatedOpen();
                  } else {
                    _this.open();
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            });
          },
        })
        .render("#paypal-button-container");
    },
    // 支付成功
    open() {
      this.$alert(this.$t("myvip.con5"), "CourseWhale", {
        confirmButtonText: this.$t("basic.con14"),
        callback: (action) => {
          this.$message({
            type: "success",
            message: this.$t("myvip.con5"),
          });
          this.$router.push({ path: "/personalData/basic" });
        },
      });
    },
    // 支付失败
    defeatedOpen() {
      this.$confirm(this.$t("myvip.con6"), this.$t("award.con16"), {
        confirmButtonText: this.$t("myvip.con7"),
        cancelButtonText: this.$t("myvip.con8"),
        type: "warning",
      });
    },
    // 选择一款价钱
    tabdredge: function (tab, money) {
      const _this = this;
      _this.num = tab;
      _this.money = money;
    },
    // 选择一款鲸灵币价钱
    tabdredgeNumMoneys: function (tab, money) {
      const _this = this;
      _this.NumMoneysIndex = tab;
      _this.money = money;
    },
    handleClick(tab, event) {
      const _this = this;
      if(tab.label == "开通VIP"){
        _this.num = 0;
        _this.money = _this.moneys[0].price;
      }else if(tab.label == "充值鲸灵币"){
        _this.NumMoneysIndex = 0;
        _this.money = _this.NumMoneys[0].price;
      }
    },
  },
  mounted: function () {
    const _this = this;
  },
};
</script>
