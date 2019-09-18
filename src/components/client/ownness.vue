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
  width: 1000px;
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
  width: 880px;
  /* height: 2px; */
  border-top: 1px solid #d9d9d9;
  position: absolute;
  top: 9px;
  right: 0px;
}
.DSCon {
  margin-top: 20px;
  width: 960px;
  background-color: #ffffff;
  padding: 20px;
}
</style>
<template>
  <div class="ownnessPage">
    <homeNav msg="登录/注册" />
    <div class="ownnessPage-con">
      <div class="ownnessPage-title">
        <div class="op-title-con">
          <img ondragstart="return false;" src="../../assets/5.jpg" alt />
          <p class="op-title-name">Monickers</p>
        </div>
      </div>
      <div class="ownnessPage-main">
        <div class="op-main-con">
          <div class="op-main-state">
            <div v-for="item in dynamicState" class="DS">
              <div class="DSTime">{{item.time}}</div>
              <div class="DSWire"></div>
              <dir class="DSCon">
                {{item.text}}
                <br />
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
      dynamicState: [
        {
          time: "2019-09-17T15:29:25",
          text:
            '对"Popular Topics in Health, Nutrition, & Physiology"题库进行了评价。'
        },
        {
          time: "2019-09-17T15:29:25",
          text: "对题库进行了点赞"
        },
        {
          time: "2019-09-17T15:29:25",
          text: "对题库进行了取消"
        }
      ],
      arr: [],
      arr1: [],
      isTrue: true
    };
  },
  created: function() {
    const _this = this;
    _this.uuu();
  },
  methods: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    },
    uuu() {
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
          var abc = res.data.data;
          for (var i = 0; i <= abc.length; i++) {
            if (i + 1 < abc.length) {
              if (
                _this.formatDate(abc[i].createTime) ==
                _this.formatDate(abc[i + 1].createTime)
              ) {
                _this.isTrue = true;
              } else {
                _this.isTrue = false;
              }
            } else {
              _this.isTrue = false;
            }
            if (_this.isTrue) {
              _this.arr1.push(abc[i]);
            } else {
              _this.arr.push(arr1);
              _this.arr1 = [];
              _this.arr1.push(abc[i]);
            }
          }
          
          console.log(_this.arr1);
          return _this.arr;
          console.log(_this.arr);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {}
};
</script>
