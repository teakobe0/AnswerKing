<style>
.ownnessPage {
  position: relative;
  padding-bottom: 276px;
}
.ownnessPage-con {
  width: 100%;
  margin: 0 auto;
}
.ownnessPage-title {
  width: 100%;
  height: 200px;
  margin-top: 80px;
}
.op-title-con {
  width: 1300px;
  height: 200px;
  margin: 0 auto;
}
.op-title-con img {
  width: 116px;
  height: 116px;
  border-radius: 58px;
  margin-top: 42px;
  float: left;
  box-shadow: 0px 0px 5px #455358;
}
.op-title-con .op-title-name {
  float: left;
  font-size: 38px;
  font-weight: 700;
  margin-top: 78px;
  margin-left: 40px;
  color: #455358;
}
.ownnessPage-main {
  width: 100%;
  background-color: #f0f0f0;
}
.op-main-con {
  width: 1300px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 40px;
}
.op-main-state {
  width: 100%;
  margin-top: 40px;
}
.DS {
  margin-top: 40px;
  position: relative;
}
.DSTime {
  font-size: 14px;
  font-weight: 700;
}
.DSWire {
  width: 1200px;
  /* height: 2px; */
  border-top: 1px solid #d9d9d9;
  position: absolute;
  top: 9px;
  right: 0px;
}
.DSCon {
  margin-top: 20px;
  width: 100%;
  background-color: #ffffff;
  padding: 20px;
}
.DSCon-text {
  margin-top: 20px;
}
.DSCon-text:first-child {
  margin-top: 0px;
}
</style>
<template>
  <div class="ownnessPage">
    <homeNav msg="登录/注册" />
    <div class="ownnessPage-con">
      <div class="ownnessPage-title">
        <div class="op-title-con">
          <img ondragstart="return false;" :src="clientImg" alt />
          <p class="op-title-name">{{clientName}}</p>
        </div>
      </div>
      <div class="ownnessPage-main">
        <div class="op-main-con">
          <div class="op-main-state">
            <div v-for="(item,index) in dynamicState" class="DS">
              <div class="DSTime">{{item.createTime | formatDate}}</div>
              <div class="DSWire"></div>
              <dir class="DSCon">
                <div
                  class="DSCon-text"
                  v-for="(items,itemsindex) in item.goodsList"
                >{{items.content}}&nbsp;{{items.classname}}</div>
              </dir>
            </div>
          </div>
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
import { formatDate } from "@/common/js/date.js";
export default {
  name: "ownnessPage",
  components: {
    homeNav,
    homeFooter
  },
  data() {
    return {
      dynamicState: [],
      data: [],
      clientName: "",
      clientImg: ""
    };
  },
  created: function() {
    const _this = this;
    _this.clientName = localStorage.clientName;
    _this.clientImg = localStorage.clientImg;
    _this.action();
    // _this.uuu();
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  methods: {
    uuu() {
      const _this = this;
      // _this
      //   .axios({
      //     method: "get",
      //     url: `${_this.URLport.serverPath}/Client/GetClient`,
      //     async: false,
      //     params: {
      //       clientId: 4
      //     },
      //     xhrFields: {
      //       withCredentials: true
      //     },
      //     headers: {
      //       Authorization: `Bearer ${localStorage.getItem("token")}`
      //     }
      //   })
      //   .then(function(res) {
      //     console.log(res)
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    },
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    },
    action() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Client/Action`,
          async: false,
          params: {
            clientid: _this.$route.query.id
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          _this.data = res.data.data;
          const newData = [];
          _this.data.forEach(item => {
            const indexFound = newData.findIndex(
              newItem =>
                _this.formatDate(newItem.createTime) ===
                _this.formatDate(item.createTime)
            );
            const currentGoods = {
              classname: item.classname,
              content: item.content
            };
            if (indexFound > -1) {
              newData[indexFound].goodsList.push(currentGoods);
            } else {
              newData.push({
                createTime: item.createTime,
                goodsList: [currentGoods]
              });
            }
          });
          _this.dynamicState = newData;
          return newData;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {}
};
</script>
