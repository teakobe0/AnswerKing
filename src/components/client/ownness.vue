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
                  <div class="DSTime">
                    {{item.time}}
                  </div>
                  <div class="DSWire"></div>
                  <dir class="DSCon">
                    {{item.text}}
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

export default {
  name: "ownnessPage",
  components: {
    homeNav,
    homeFooter
  },
  data() {
    return {
      dynamicState:[
        {
          time:'2019年9月1日',
          text:'对"Popular Topics in Health, Nutrition, & Physiology"题库进行了评价。',
        },
        {
          time:'2019年8月10日',
          text:'对题库进行了点赞',
        },
        {
          time:'2019年8月09日',
          text:'对题库进行了点赞',
        },
        {
          time:'2019年8月01日',
          text:'对题库进行了点赞',
        },
        {
          time:'2019年8月01日',
          text:'对题库进行了点赞',
        },
        {
          time:'2019年8月01日',
          text:'对题库进行了点赞',
        },
        {
          time:'2019年8月01日',
          text:'对题库进行了点赞',
        },
      ]
    };
  },
  created: function() {
    const _this = this;
  },
  methods: {},
  mounted() {}
};
</script>
