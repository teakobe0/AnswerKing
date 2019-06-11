<style>
#file {
  background-color: #f4f4f7;
  overflow: hidden;
}

.file-con {
  width: 1300px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 32px;
  margin-bottom: 32px;
}
.file-con-info-title {
  width: 100%;
  height: 40px;
  float: left;
  position: relative;
}
.file-con-info-title p {
  display: inline-block;
  font-size: 18px;
  line-height: 40px;
  width: 100%;
  height: 40px;
  text-align: center;
  color: #4d4d4d;
}
.file-con-info-trim1 {
  position: absolute;
  top: 18px;
  left: 0px;
  width: 44%;
  height: 2px;
  background-color: #a1a1a1;
}
.file-con-info-trim2 {
  position: absolute;
  top: 18px;
  right: 0px;
  width: 44%;
  height: 2px;
  background-color: #a1a1a1;
}
.file-con-course {
  margin-top: 50px;
  margin-bottom: 50px;
}
.file-con-course div {
  width: 200px;
  background-color: #fffffb;
  margin-bottom: 20px;
  display: inline-block;
  margin-right: 20px;
  margin-left: 0px;
  border-radius: 4px;
  padding: 20px;
  position: relative;
}
.file-con-course a {
  text-decoration: none;
  color: #000;
}

/*.file-course-img {*/
/*margin: 0;*/
/*}*/
/* .file-course-img:nth-child(6){
        margin-right: 0px;
        float: right;
    } */
.file-course-img:hover {
  color: #fe2a93;
}
.file-course-img img {
  /* width: 180px;
  height: 210px; */
  margin-left: 10px;
  margin-top: 10px;
}
.file-course-img p {
  width: 200px;
  border-bottom: 1px dashed #d6d6d6;
  /*background-color: #eaeaea;*/
  /*text-align: center;*/
  /*border-radius: 0px 0px 4px 4px;*/
  margin-bottom: 5px;
  padding-bottom: 5px;
}
.file-course-img span {
  display: block;
  font-size: 14px;
  color: #b9b9b9;
}
.file-con-course i {
  position: absolute;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  color: #b9b9b9;
}
</style>


<template>
  <div id="file">
    <div class="file-con">
      <div class="file-con-info">
        <div class="file-con-info-title">
          <div class="file-con-info-trim1"></div>
          <p>题库集({{input1}})</p>
          <div class="file-con-info-trim2"></div>
        </div>
      </div>
      <div class="file-con-course">
        <div v-for="(item,index) in value" @click="Information(item)">
          <router-link
            :to="{path:'/serchDetailsContent',query:{id:item.classId,classInfoId:item.id}}"
            class="file-course-img"
          >
            <!--<img src="../../assets/1.jpg" alt=""/>-->
            <p>Grade:{{item.totalGrade}}</p>
            <span>Time:{{item.createTime | formatDate}}</span>
          </router-link>
          <i
            class="el-icon-star-off"
            @click="attention(item,index)"
            v-show="item.attentions == false"
          ></i>
          <i
            class="el-icon-star-on"
            style="color:red;"
            @click="attention(item,index)"
            v-show="item.attentions == true"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="es6">
import { formatDate } from "@/common/js/date.js";

export default {
  name: "classes",
  components: {},
  data() {
    //在ES6中添加数据是在return{}中
    return {
      input1: "",
      value: [],
      classesvalue: [],
      Id: 0
    };
  },
  created: function() {
    var _this = this;
    _this.Classinfos();
    _this.Id = _this.$route.query.id;
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  methods: {
    //根据课程id检索课程订单
    Classinfos: function() {
      var _this = this;
      _this
        .axios({
          method: "get",
          url: `http://192.168.1.27:8088/api/Classinfo/Classinfos`,
          async: false,
          params: {
            classid: _this.$route.query.id
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          console.log("据课程id检索课程资料");
          console.log(res);
          _this.value = res.data.data;
          _this.input1 = _this.value.length;
          for (var i = 0; i < _this.value.length; i++) {
            _this.$set(_this.value[i], "attentions", false);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    Information: function(item) {
      var _this = this;
      // _this.$store.state.information.informations = item;
    },
    attention: function(item) {
      var _this = this;
      item.attentions = !item.attentions;
      if (item.attentions == true) {
        this.$message({
          message: "关注成功",
          type: "success"
        });
      }else {
        this.$message({
          message: "取消关注",
          type: "success"
        });
      }
    }
  }
};
</script>
