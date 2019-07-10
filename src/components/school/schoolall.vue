<style>
#schoolall {
  /* background-color: #f0f0f0; */
  overflow: hidden;
}

/*课程*/
.classes-con {
  width: 1300px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 24px;
  margin-bottom: 24px;
}
.classes-con-info {
  overflow: hidden;
  margin-bottom: 16px;
}

.classes-con-info p {
  font-size: 18px;
}


.classes-con-info i {
  display: block;
  float: right;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  line-height: 40px;
}

.serchinput {
  width: 100%;
  /* float: right; */
}

.classes-con-courseSerch {
  overflow: hidden;
  margin-bottom: 16px;
}

.classes-con-courseSerch ul {
  overflow: hidden;
}

.classes-con-courseSerch ul li {
  list-style-type: none;
  float: left;
}

.classes-con-courseSerch ul li a {
  line-height: 40px;
  color: #000;
  text-decoration: none;
  width: 48.14px;
  text-align: center;
  display: inline-block;
  color: #5b9dfd;
}

.classes-con-courseSerch ul li:first-of-type a {
  
  text-align: left;
}


.classes-con-courseSerch ul li:first-of-type a:hover {
  background-color: #fff;
  color: #000;
}

.classes-con-courseSerch ul li:first-of-type a:active {
  color: rgb(173, 173, 173);
}

.classes-con-courseSerch ul li a:hover {
  background-color: #08b4e1;
  color: #fff;
  border-radius: 2px;
}
.classes-con-courseSerch ul li a:active {
  background-color: #38bfe0;
}
.classes-con-course {
}

.classes-con-course div {
  display: inline-block;
  list-style-type: none;
  border-bottom: 1px dashed #757575;
  width: 49%;
  margin-right: 20px;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  /*border: 1px dashed #a3a3a3;*/
  overflow: hidden;
  position: relative;
}

.classes-con-course div:nth-last-child(2n + 0) {
  float: right;
  margin-right: 0px;
}

.classes-con-course div a {
  display: block;
  color: #5b9dfd;
  text-decoration: none;
  font-size: 16px;
  white-space: nowrap;
  width: 603px;
  overflow: hidden;
  text-overflow: ellipsis;
  /*border-bottom: 1px dashed #a2a2a2;*/
}

.classes-con-course div a:hover {
  color: #fd2490;
}

.classes-con-course div p {
  color: #b8b8b8;
  font-size: 14px;
  /*float: right;*/
}
.classes-con-course div i {
  position: absolute;
  right: 0px;
  top: 10px;
  cursor: pointer;
  color: #979797;
}
.classes-con-course div i:hover {
  color: red;
}
/*/!*文件*!/*/
/*.file-con {*/
/*width: 1300px;*/
/*margin: 0 auto;*/
/*overflow: hidden;*/
/*margin-top: 30px;*/
/*}*/

/*.file-con-info p {*/
/*font-size: 20px;*/
/*font-weight: bold;*/
/*line-height: 40px;*/
/*float: left;*/
/*}*/

/*.file-con-info i {*/
/*display: block;*/
/*float: right;*/
/*font-size: 20px;*/
/*font-weight: bold;*/
/*font-style: normal;*/
/*line-height: 40px;*/
/*}*/

/*.file-con-course {*/
/*margin-top: 50px;*/
/*}*/

/*.file-course-img {*/
/*/!*width: 200px;*!/*/
/*/!*height: 260px;*!/*/
/*/!*background-color: #fafafa;*!/*/
/*/!*color: #000;*!/*/
/*/!*text-decoration: none;*!/*/
/*/!*margin-bottom: 20px;*!/*/
/*/!*display: inline-block;*!/*/
/*/!*margin-left: 29px;*!/*/
/*/!*margin-right: 29px;*!/*/
/*/!*border-radius: 4px;*!/*/
/*}*/

/*.file-course-img:hover {*/
/*color: #fe2a93;*/
/*}*/

/*.file-course-img img {*/
/*width: 180px;*/
/*height: 210px;*/
/*margin-left: 10px;*/
/*margin-top: 10px;*/

/*}*/

/*.file-course-img p {*/
/*width: 200px;*/
/*height: 35px;*/
/*border-top: 1px solid #d6d6d6;*/
/*background-color: #eaeaea;*/
/*text-align: center;*/
/*border-radius: 0px 0px 4px 4px;*/
/*}*/
/* .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
    background-color: #f0f0f0 !important;
} */
</style>


<template>
  <div id="schoolall">
    <!-- 所有课程 -->
    <div class="classes-con">
      <div class="classes-con-info">
        <div style="margin-bottom:16px;">
          <p>所有课程({{classeslength}})</p>
          <!--<i>找到你的课程</i>-->
        </div>

        <div class="serchinput">
          <el-input placeholder="请输入需要查询的课程(回车确认)" v-model="input1" @change="queryname" clearable>
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
      <div class="classes-con-courseSerch">
        <ul>
          <li v-for="item in ABC" @click="queryClass(item.name)">
            <a href="javascript:void(0)">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div class="classes-con-course">
        <div v-for="(item,index) in classes">
          <router-link
            :to="{path:'/classesDetails',query:{id:item.cla.id}}"
          >{{item.cla.name}}</router-link>
          <p>题库集:{{item.order}}</p>
          <i
            class="el-icon-star-off"
            @click="attention(item,index)"
            v-show="item.attentions == false"
            title="关注课程"
          ></i>
          <i
            class="el-icon-star-on"
            style="color:red;"
            @click="attention(item,index)"
            v-show="item.attentions == true"
            title="取消关注课程"
          ></i>
        </div>
      </div>
      <!-- <div class="block" >
        <el-pagination layout="prev, pager, next" :total="50" background></el-pagination>
      </div>-->
    </div>
  </div>
</template>
<script type="es6">
import { constants } from "crypto";
export default {
  name: "schoolall",
  components: {},
  data() {
    //在ES6中添加数据是在return{}中
    return {
      input1: "",
      classes: [],
      classeslength: "",
      ABC: [
        { name: "All" },
        { name: "A" },
        { name: "B" },
        { name: "C" },
        { name: "D" },
        { name: "E" },
        { name: "F" },
        { name: "G" },
        { name: "H" },
        { name: "I" },
        { name: "J" },
        { name: "K" },
        { name: "L" },
        { name: "M" },
        { name: "N" },
        { name: "O" },
        { name: "P" },
        { name: "Q" },
        { name: "R" },
        { name: "S" },
        { name: "T" },
        { name: "U" },
        { name: "V" },
        { name: "W" },
        { name: "X" },
        { name: "Y" },
        { name: "Z" }
      ],
      attentions: {
        Name: "",
        TypeId: "",
        Type: ""
      },
      delAttention: ""
    };
  },
  created: function() {
    var _this = this;
    _this.universityidClass();
  },
  methods: {
    universityidClass: function() {
      var _this = this;
      //通过学校ID查询拥有的课程
      _this
        .axios({
          method: "get",
          url: `http://47.254.29.164:8088/api/Class/Class`,
          async: false,
          params: {
            universityid: _this.$route.query.id
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          _this.classes = res.data.data;
          _this.classeslength = _this.classes.length;
          for (var i = 0; i < _this.classes.length; i++) {
            _this.$set(_this.classes[i], "attentions", false);
          }
          _this.retrieveAttention();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    queryClass: function(alifs) {
      var _this = this;
      if (alifs == "All") {
        _this
          .axios({
            method: "get",
            url: `http://47.254.29.164:8088/api/Class/Class`,
            async: false,
            params: {
              universityid: _this.$route.query.id
            },
            xhrFields: {
              withCredentials: true
            }
          })
          .then(function(res) {
            _this.classes = res.data.data;
            _this.classeslength = _this.classes.length;
            for (var i = 0; i < _this.classes.length; i++) {
              _this.$set(_this.classes[i], "attentions", false);
            }
            _this.retrieveAttention();
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        _this
          .axios({
            method: "get",
            url: `http://47.254.29.164:8088/api/Class/Class`,
            async: false,
            params: {
              universityid: _this.$route.query.id,
              alif: alifs
            },
            xhrFields: {
              withCredentials: true
            }
          })
          .then(function(res) {
            _this.classes = res.data.data;
            for (var i = 0; i < _this.classes.length; i++) {
              _this.$set(_this.classes[i], "attentions", false);
            }
            _this.retrieveAttention();
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    queryname: function(names) {
      var _this = this;
      _this
        .axios({
          method: "get",
          url: `http://47.254.29.164:8088/api/Class/Class`,
          async: false,
          params: {
            universityid: _this.$route.query.id,
            name: names
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          _this.classes = res.data.data;
          for (var i = 0; i < _this.classes.length; i++) {
            _this.$set(_this.classes[i], "attentions", false);
          }
          _this.retrieveAttention();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    attention: function(item, index) {
      var _this = this;
      if (localStorage.token) {
        item.attentions = !item.attentions;
        if (item.attentions == true) {
          _this.attentions.Name = item.cla.name.toString();
          _this.attentions.TypeId = item.cla.id;
          _this.attentions.Type = 1;
          _this
            .axios({
              method: "post",
              url: `http://47.254.29.164:8088/api/Focus/Add`,
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
        } else if (item.attentions == false) {
          _this
            .axios({
              method: "delete",
              url: `http://47.254.29.164:8088/api/Focus/Cancel`,
              async: false,
              params: {
                typeid: item.cla.id.toString()
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
            url: `http://47.254.29.164:8088/api/Focus/Focus`,
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
                for (var j = 0; j < _this.classes.length; j++) {
                  if (res.data.data[i].typeId == _this.classes[j].cla.id) {
                    _this.classes[j].attentions = true;
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
