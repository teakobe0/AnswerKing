<style>
.content-tag-con-right-con {
  width: 306px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 20px;
}

/* 轮播图指示器 */
.el-carousel__button {
  background-color: #cecece !important;
}
</style>
<template>
  <div class="content-tag-con-right-con" v-if="otherQuestionShow == true">
    <p class="content-tag-con-right-con-p">该课程的其他题库</p>

    <el-carousel
      trigger="click"
      :interval="5000"
      height="240px"
      indicator-position="none"
      style="border:1px solid #e1e1e1"
    >
      <el-carousel-item v-for="item in courses" :key="item.id">
        <img :src="item.Imgs" alt />
        <h3>{{className}}</h3>
        <p>分数:{{item.classinfo.grade}}</p>
        <button
          @click="skipclass(item.classinfo.classId,item.classinfo.id)"
        >
          <router-link
            style="text-decoration:none;color:#FFF"
            :to="'/classes/'+item.classinfo.classId+'/content/'+item.classinfo.id+'/weeks/'+0+'/weektype/'+0"
          >进入题库</router-link>
        </button>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script type="es6">
import blueleftimg from "@/assets/blue.png";
import bluerightimg from "@/assets/blueright.png";
export default {
  name: "ptherQuestions",
  data() {
    return {
      // 课程题库订单
      courses: [],
      // 组件的显示隐藏
      otherQuestionShow: true
    };
  },
  props: ["className", "classinfoss"],
  created: function() {
    const _this = this;
    // 根据课程ID检索课程题库
    _this.Classinfos();
  },
  methods: {
    //根据课程id检索课程订单
    Classinfos: function() {
      const _this = this;
      let classinfos = _this.classinfoss;
      let classInfoId = _this.$route.params.classinfo_id;
      for (var i = 0; i < classinfos.length; i++) {
        _this.$set(classinfos[i], "Imgs", blueleftimg);
        if (classinfos[i].classinfo.id != classInfoId) {
          _this.courses.push(classinfos[i]);
        } else if (classinfos.length == 1) {
          _this.otherQuestionShow = false;
        }
      }
    },
    skipclass: function(classId, id) {
      const _this = this;
      window.location.reload();
    }
  }
};
</script>

