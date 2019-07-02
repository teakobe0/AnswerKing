<style>
#file {
  /* background-color: #ebf5f424; */
  overflow: hidden;
}

.file-con {
  width: 1300px;
  margin: 0 auto;
  /* margin-top: 32px;
  margin-bottom: 32px; */
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
  background-color: #d4d4d4;
}
.file-con-info-trim2 {
  position: absolute;
  top: 18px;
  right: 0px;
  width: 44%;
  height: 2px;
  background-color: #d4d4d4;
}
.file-con-course {
  margin-top: 50px;
  margin-bottom: 50px;
}
.file-con-course div {
  width: 200px;
  /* height: 200px; */
  background-color: #f5f6f7;
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
  margin-right: 13px;
  margin-left: 12px;
  border-radius: 4px;
  padding: 20px;
  position: relative;
}
.file-con-course div:nth-child(5n + 1) {
  margin-left: 0px;
}
.file-con-course div:nth-child(5n + 5) {
  margin-right: 0px;
}
.file-con-course div:hover {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
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
.file-course-img:hover .course-goal {
  color: #ff2994;
}
.file-course-img img {
  /* width: 180px;
  height: 210px; */
  margin-left: 10px;
  margin-top: 10px;
}
.file-course-img p:nth-child(1) {
  width: 200px;
  font-size: 20px;
}
.file-course-img p:nth-child(2) {
  width: 200px;
  font-size: 14px;
  margin-top: 13px;
  color: #202020;
}
.file-course-img p:nth-child(3) {
  width: 200px;
  font-size: 14px;
  margin-top: 13px;
  color: #202020;
}
.file-course-img p span:last-of-type {
  display: inline-block;
  margin-top: 5px;
}
.file-course-img .course-time {
  display: block;
  font-size: 14px;
  color: #b9b9b9;
  border-top: 1px dashed #d6d6d6;
  margin-top: 13px;
  padding-top: 5px;
}
.file-con-course i {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  color: #b9b9b9;
}
.file-con-course i:hover {
  color: red;
}
</style>


<template>
  <div id="file">
    <div class="file-con">
      <!-- <div class="file-con-info">
        <div class="file-con-info-title">
          <div class="file-con-info-trim1"></div>
          <p>题库集({{input1}})</p>
          <div class="file-con-info-trim2"></div>
        </div>
      </div> -->
      <div class="file-con-course">
        <div v-for="(item,index) in value" @click="Information(item)">
          <router-link
            :to="{path:'/serchDetailsContent',query:{id:item.classId,classInfoId:item.id}}"
            class="file-course-img"
          >
            <!--<img src="../../assets/1.jpg" alt=""/>-->
            <p class="course-goal">
              题库集得分:
              <b>{{item.totalGrade}}</b>
            </p>
            <p>
              <span>课程名称:</span>
              <br>
              <span>{{Names.name}}</span>
            </p>
            <p>
              <span>学校名称:</span>
              <br>
              <span>{{Names.university}}</span>
            </p>
            <span class="course-time">创建时间:{{item.createTime | formatDate}}</span>
          </router-link>
          <i
            class="el-icon-star-off"
            @click="attention(item,index)"
            v-show="item.attentions == false"
            title="关注题库集"
          ></i>
          <i
            class="el-icon-star-on"
            style="color:red;"
            @click="attention(item,index)"
            v-show="item.attentions == true"
            title="取消关注题库集"
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
      Id: 0,
      attentions: {
        Name: "",
        TypeId: "",
        Type: ""
      }
    };
  },
  props: ["Names"],
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
          console.log(_this.Names);
          _this.value = res.data.data;
          _this.input1 = _this.value.length;
          for (var i = 0; i < _this.value.length; i++) {
            _this.$set(_this.value[i], "attentions", false);
          }
          _this.retrieveAttention();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    Information: function(item) {
      var _this = this;
      // _this.$store.state.information.informations = item;
    },
    attention: function(item, index) {
      var _this = this;
      if (localStorage.token) {
        item.attentions = !item.attentions;
        if (item.attentions == true) {
          _this.attentions.Name = _this.Names.name;
          _this.attentions.TypeId = _this.$route.query.id + "," + item.id;
          _this.attentions.Type = 2;
          _this
            .axios({
              method: "post",
              url: `http://192.168.1.27:8088/api/Focus/Add`,
              async: false,
              data: _this.attentions,
              xhrFields: {
                withCredentials: true
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            .then(function(res) {
              _this.retrieveAttention();
              _this.$message({
                message: "关注成功",
                type: "success"
              });
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          _this
            .axios({
              method: "delete",
              url: `http://192.168.1.27:8088/api/Focus/Cancel`,
              async: false,
              params: {
                typeid: _this.$route.query.id + "," + item.id
              },
              xhrFields: {
                withCredentials: true
              },
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            .then(function(res) {
              _this.$message({
                message: "取消关注",
                type: "success"
              });
              _this.retrieveAttention();
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      } else {
        _this.$message({
          message: "请登录之后进行操作!",
          type: "warning"
        });
      }
    },
    // 检索关注
    retrieveAttention: function() {
      var _this = this;
      if (localStorage.token) {
        _this
          .axios({
            method: "get",
            url: `http://192.168.1.27:8088/api/Focus/Focus`,
            async: false,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(function(res) {
            for (var i = 0; i < res.data.data.length; i++) {
              if (res.data.data[i].type == 2) {
                for (var j = 0; j < _this.value.length; j++) {
                  var v = [];
                  v = res.data.data[i].typeId.split(",");
                  if (v[1] == _this.value[j].id) {
                    _this.value[j].attentions = true;
                  }
                }
              }
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
};
</script>
