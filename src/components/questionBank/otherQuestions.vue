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

    <el-carousel trigger="click" :interval="5000" height="240px" indicator-position="none" style="border:1px solid #e1e1e1">
      <el-carousel-item v-for="item in courses" :key="item.id">
        <img :src="item.Imgs" alt>
        <h3>{{value.name}}</h3>
        <p>分数:{{item.totalGrade}}</p>
        <button @click="skipclass(item.classId,item.id)" @click.native="flushCom">进入题库</button>
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
      value:{},
      // 根据课程ID检索课程题库
      courses: [],
      otherQuestionShow:true
    };
  },
  created: function() {
    const _this = this;
    // 根据课程ID检索课程题库
    _this.Classinfos();
    _this.Getclass();
  },
  methods: {
    //根据课程id检索课程订单
    Classinfos: function() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Classinfo/Classinfos`,
          async: false,
          params: {
            classid: _this.$route.query.id
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          for (var i = 0; i < res.data.data.length; i++) {
            _this.$set(res.data.data[i], "Imgs", blueleftimg);
            if (res.data.data[i].id != _this.$route.query.classInfoId) {
              _this.courses.push(res.data.data[i]);
            } else if (res.data.data.length == 1) {
              _this.otherQuestionShow=false
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    skipclass: function(classId, id) {
      const _this = this;
      // window.location.reload();
      _this.$router.push({
        path: "/serchDetailsContent",
        query: { id: classId, classInfoId: id }
      });
    },
    //根据课程id检索
    Getclass: function() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Class/Getclass`,
          async: false,
          params: {
            id: _this.$route.query.id
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          _this.value = res.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  // 监听路由变化
  watch: {
    '$route' (to, from) {
        this.$router.go(0);
    }
  }
};
</script>

