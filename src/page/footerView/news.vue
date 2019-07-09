<style>
.news {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #2a4864;
}
.news-con {
  width: 1300px;
  height: 937px;
  margin: 0 auto;

}
.news-con img {
  width: 1100px;
  height: 700px;
  margin-left: 100px;
  margin-top: 100px;
}
</style>

<template>
  <div class="news">
    <div v-title data-title="新闻-CourseWhale"></div>
    <div class="news-con">
      <img src="../../assets/construction.jpg" alt />
    </div>
  </div>
</template>

<script type="es6">
import Nav from "@/components/public/nav.vue";
import homeFooter from "@/components/public/homeFooter.vue";

export default {
  name: "news",
  components: {
    Nav,
    homeFooter
  },
  data() {
    return {};
  },
  created: function() {
    var _this = this;

    document.documentElement.scrollTop = 0;
  },
  methods: {}
};
</script>