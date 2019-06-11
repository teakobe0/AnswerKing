<style>
.complain {
}
.com-button {
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #58bce4;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 9999;
}
.com-button:hover {
  background-color: #75c1e2;
}
.com-page {
  position: fixed;
  right: 0px;
  bottom: 0px;
  z-index: 9999;
  width: 200px;
  height: 200px;
}
</style>

<template>
  <div class="complain">
    <div class="com-button" v-show="complainShow == true" @click="complainClick">提交建议</div>
    <div class="com-page" v-show="complainShow == false">提交建议</div>
  </div>
</template>

<script type="es6">
export default {
  name: "complain",
  data() {
    return {
        complainShow:true
    };
  },
  created: function() {
    var _this = this;
  },
  methods: {
      complainClick:function(){
          var _this = this;
          _this.complainShow = !_this.complainShow;
      }
  }
};
</script>