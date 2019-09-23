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
  cursor: pointer;
  height: 20px;
  line-height: 20px;
}
.DSWire {
  width: 1175px;
  /* height: 2px; */
  border-top: 1px solid #d9d9d9;
  position: absolute;
  top: 9px;
  left: 94px;
}
.DSWire i {
  position: absolute;
  top: -10px;
  right: -34px;
}
.DSCon {
  margin-top: 20px;
  width: 1260px;
  background-color: #ffffff;
  padding: 20px;
  overflow: hidden;
}
.DSCon-text {
  margin-top: 20px;
  overflow: hidden;
}
.DSCon-text:first-child {
  margin-top: 0px;
}
.DSCon-text div:first-child {
  float: left;
  width: 1180px;
}
.DSCon-text div:last-of-type {
  float: right;
  color: #999;
}
.nullShow {
  width: 100%;
  height: 320px;
  text-align: center;
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
          <div class="op-main-state" v-loading="loading">
            <div class="nullShow" v-if="nullShow == true">这个家伙比较懒，没有留下一点动态</div>

            <div v-for="(item,index) in dynamicState" class="DS" >
              <div class="DSTime" @click="fold(item,index)">{{item.createTime | formatDate}}</div>
              <div class="DSWire" @click="fold(item,index)">
                <i class="el-icon-caret-bottom" v-show="item.isSubShow == false"></i>
                <i class="el-icon-caret-top" v-show="item.isSubShow == true"></i>
              </div>
              <el-collapse-transition>
                <dir class="DSCon" v-show="item.isSubShow">
                  <div class="DSCon-text" v-for="(items,itemsindex) in item.goodsList">
                    <div>{{items.content}}&nbsp;{{items.classname}}</div>
                    <div>{{items.createTime | formatDateSS}}</div>
                  </div>
                </dir>
              </el-collapse-transition>
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
import { formatDateSS } from "@/common/js/date.js";

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
      clientImg: "",
      nullShow: false,
      loading: true,
      activeNames: 0,
      aaa: false
    };
  },
  created: function() {
    const _this = this;
    _this.action();
    _this.getclientbyid();
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    },
    formatDateSS: function(time) {
      let date = new Date(time);
      return formatDate(date, "hh:mm:ss");
    }
  },
  methods: {
    getclientbyid() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Client/GetClientById`,
          async: false,
          params: {
            id: _this.$route.query.id
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          _this.clientName = res.data.data.name;
          _this.clientImg = res.data.data.image;
        })
        .catch(function(error) {
          console.log(error);
        });
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
          if (_this.data == null) {
            _this.nullShow = true;
            _this.loading = false;
          } else {
            const newData = [];
            _this.data.forEach(item => {
              const indexFound = newData.findIndex(
                newItem =>
                  _this.formatDate(newItem.createTime) ===
                  _this.formatDate(item.createTime)
              );
              const currentGoods = {
                classname: item.classname,
                content: item.content,
                createTime: item.createTime
              };
              if (indexFound > -1) {
                newData[indexFound].goodsList.push(currentGoods);
              } else {
                newData.push({
                  isSubShow: true,
                  createTime: _this.formatDate(item.createTime),
                  goodsList: [currentGoods]
                });
              }
            });
            _this.loading = false;
            _this.dynamicState = newData;
            return newData;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    fold(item, index) {
      const _this = this;
      item.isSubShow = !item.isSubShow;
    }
  },
  mounted() {}
};
</script>
