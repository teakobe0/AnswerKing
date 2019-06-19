<style>
#classesDetails {
  position: relative;
  padding-bottom: 276px;
}

.classesDetails-con {
  margin-top: 80px;
}

.classesDetails-top {
  width: 1300px;
  overflow: hidden;
  margin: 0 auto;
}

.classesDetails-tag {
  width: 100%;
  height: 50px;
  /*border-top: 1px solid #d4d4d4;*/
  border-bottom: 1px solid #b9b9b9;
  background-color: #fcfcfc;
}

.classesDetails-top-img {
  width: 140px;
  height: 140px;
  margin-top: 30px;
  float: left;
}

.classesDetails-top-img img {
  width: 140px;
}

.classesDetails-top-info {
  float: left;
  width: 100%;
  padding: 24px 0px;
  overflow: hidden;
  position: relative;
}

.classesDetails-top-info h2 {
  color: #3b3b3b;
}

.classesDetails-top-info p {
  color: #777;
  font-size: 16px;
  word-wrap: break-word;
  margin-top: 8px;
}

.classesDetails-top-info p b {
  color: #000;
  font-size: 16px;
}

.classesDetails-top-info p a {
  color: #777;
  font-size: 16px;
  text-decoration: none;
}

.classesDetails-top-info p a:hover {
  color: #fe2a93;
  font-size: 16px;
  text-decoration: none;
}

.classesDetails-top-info p span {
  color: #777;
  font-size: 16px;
  margin-left: 30px;
}
.attention {
  position: absolute;
  right: 0px;
  bottom: 24px;
}
.attentions {
  position: absolute;
  right: 0px;
  bottom: 24px;
  /* background: red !important; */
  /* color: #fff !important; */
}
.classesDetails-tag-con {
  width: 1300px;
  height: 50px;
  margin: 0 auto;
}

.classesDetails-tag-con ul {
  width: 600px;
  height: 46px;
}

.classesDetails-tag-con li {
  float: left;
  list-style-type: none;
  height: 46px;
  line-height: 50px;
  margin-right: 10px;
}

.classesDetails-tag-con li a {
  display: inline-block;
  text-align: center;
  width: 73px;
  height: 46px;
  color: #000;
  text-decoration: none;
}

.classesDetails-tag-con li a:hover {
  height: 46px;
  border-bottom: 4px solid #507adc;
}

.con-img {
  /*background-image: url("../assets/paper-1990111_1920.jpg");*/
  /*background-repeat: no-repeat;*/
  /*background-position: center;*/
}

.classesTag {
  height: 46px;
  border-bottom: 4px solid #507adc;
}
.file-con-info {
  overflow: hidden;
}
</style>

<template>
  <div id="classesDetails">
    <homeNav></homeNav>
    <div v-if="titleShow==true" v-title :data-title="value.name+'-CourseWhale'"></div>
    <div class="classesDetails-con">
      <div class="con-img">
        <div class="crumbs">
          <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-top: 24px;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item
              :to="{ path: 'serchDetailsUniversity',query: {id: this.universityId}}"
            >学校</el-breadcrumb-item>
            <el-breadcrumb-item>课程</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="classesDetails-top">
          <!--<div class="classesDetails-top-img">-->
          <!--<img src="../assets/serHead.jpg" alt=""/>-->
          <!--</div>-->
          <div class="classesDetails-top-info">
            <div>
              <h2>{{value.name}}</h2>

              <p>
                学校:
                <router-link
                  :to="{path:'/serchDetailsUniversity',query: {id: this.universityId}}"
                >{{value.university}}</router-link>
                <span>教授:{{value.professor}}</span>
              </p>

              <p>备注:{{value.memo}}</p>
            </div>
            <el-button
              class="attention"
              size="small"
              v-if="value.attentions == false"
              @click="attention()"
            >关注</el-button>
            <el-button
              type="danger"
              class="attentions"
              size="small"
              v-if="value.attentions == true"
              @click="attention()"
            >取消关注</el-button>
          </div>
        </div>
      </div>
      <div class="classesDetails-tag">
        <div class="classesDetails-tag-con">
          <ul>
            <li :class="{classesTag:num == 0}" @click="tab(tab01Text)">
              <router-link :to="{path:'/classesDetails/file',query: {id: this.Id}}">题库集</router-link>
            </li>
            <!-- <li :class="{classesTag:num == 1}" @click="tab(tab02Text)">
                            <router-link :to="{path:'/classesDetails/file',query: {id: this.Id}}">题库集</router-link>
            </li>-->
          </ul>
        </div>
      </div>
      <div>
        <router-view :Names="className"/>
      </div>
    </div>
    <homeFooter></homeFooter>
  </div>
</template>

<script type="es6">
import homeNav from "@/components/public/homeNav.vue";
import homeFooter from "@/components/public/homeFooter.vue";

export default {
  name: "serchDetailsUniversity",
  components: {
    homeNav,
    homeFooter
  },
  data() {
    return {
      num: 0,
      value: [],
      Id: "",
      universityId: "",
      tab01Text: "tab01",
      tab02Text: "tab02",
      className: "",
      titleShow: false,
      NameMsg: "",
      attentions: {
        Name: "",
        TypeId: "",
        Type: ""
      }
    };
  },
  created: function() {
    var _this = this;
    _this.Id = _this.$route.query.id;
    _this.Getclass();
  },
  methods: {
    //根据课程id检索
    Getclass: function() {
      var _this = this;
      _this
        .axios({
          method: "get",
          url: `http://192.168.1.27:8088/api/Class/Getclass`,
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
          _this.$set(_this.value, "attentions", false);
          _this.className = res.data.data.name;
          _this.titleShow = true;
          _this.universityId = res.data.data.universityId;
          _this.retrieveAttention();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    tab: function(tab) {
      var _this = this;
      if (tab == "tab01") {
        _this.num = 0;
      } else if (tab == "tab02") {
        _this.num = 1;
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
              if (res.data.data[i].type == 1) {
                if (res.data.data[i].typeId == _this.value.id) {
                  _this.value.attentions = true;
                }
              }
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    attention: function() {
      var _this = this;
      if (localStorage.token) {
        _this.value.attentions = !_this.value.attentions;
        if (_this.value.attentions == true) {
          _this.attentions.Name = _this.value.name;
          _this.attentions.TypeId = _this.value.id;
          _this.attentions.Type = 1;
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
        } else if (_this.value.attentions == false) {
          _this
            .axios({
              method: "delete",
              url: `http://192.168.1.27:8088/api/Focus/Cancel`,
              async: false,
              params: {
                typeid: _this.value.id.toString()
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
    }
  }
};
</script>