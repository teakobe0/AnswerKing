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
.course-goal b {
  font-size: 50px;
  position: absolute;
  top: 20px;
  right: 28px;
  font-style: italic;
}
.file-course-img p:nth-child(1) {
  width: 200px;
  font-size: 20px;
  margin-top: 10px;
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
  margin-top: 12px;
  color: #202020;
}
.file-course-img p span:last-of-type {
  display: inline-block;
  margin-top: 5px;
  width: 200px;
  overflow: hidden;
  word-wrap: break-word;
}
.ownness {
  display: block;
  font-size: 14px;
  color: #b9b9b9;
  border-top: 1px dashed #d6d6d6;
  margin-top: 13px;
  padding-top: 12px;
  overflow: hidden;
}
.ownness img {
  width: 24px;
  border-radius: 12px;
  margin-right: 6px;
  vertical-align: -6px;
}
.ownness .ownness-name {
  display: inline-block;
  width: 118px;
  height: 24px;
  font-size: 14px;
  color: #3ccfcf;
  cursor: pointer;
  overflow: hidden;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ownness .ownness-name:hover {
  color: #ffcd1f;
}
.ownness .createTime {
  float: right;
  margin-top: 5px;
  /* text-align: right; */
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
.infoShows {
  font-size: 20px;
  text-align: center;
  color: #136bd3;
  margin-top: 160px;
  margin-bottom: 160px;
}
</style>


<template>
  <div id="file">
    <div class="file-con">
      <div class="infoShows" v-if="infoShow == true">该题库集正在审核中!</div>
      <div class="file-con-course" v-if="courseShow == true">
        <div v-for="(item,index) in value" @click="Information(item)">
          <router-link
            :to="{path:'/serchDetailsContent',query:{id:item.classinfo.classId,classInfoId:item.classinfo.id}}"
            class="file-course-img"
          >
            <p class="course-goal">
              题库集得分:
              <b>{{item.classinfo.totalGrade}}</b>
            </p>
            <p>
              <span>课程名称:</span>
              <br />
              <span>{{Names.name}}</span>
            </p>
            <p>
              <span>学校名称:</span>
              <br />
              <span>{{Names.university}}</span>
            </p>
          </router-link>
          <span class="ownness">
            <router-link
              @click.native="ownness(item.clientname,item.clientimg)"
              :to="{ path: '/ownness',query: {id: item.classinfo.clientId}}"
              :title="'访问'+ item.clientname +'的个人资料'"
              class="ownness-name"
            >
              <img ondragstart="return false;" :src="item.clientimg" alt />
              {{item.clientname}}
            </router-link>
            <span class="createTime">{{item.classinfo.createTime | formatDate}}</span>
          </span>
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
      value: [],
      classesvalue: [],
      Id: 0,
      attentions: {
        Name: "",
        TypeId: "",
        Type: ""
      },
      infoShow: false,
      // 贡献者
      contributors: {
        name: "Monickers"
      },
      courseShow: false,
      attentionCon: []
    };
  },
  props: ["Names", "attCon"],
  created: function() {
    const _this = this;

    _this.Classinfos();
    _this.Id = _this.$route.params.classesDetails_id;
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
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Classinfo/Classinfos`,
          async: false,
          params: {
            classid: _this.$route.params.classesDetails_id
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          if (res.data.status == 2) {
            _this.infoShow = true;
          }
          for (var i = 0; i < res.data.data.length; i++) {
            _this.value.push(res.data.data[i]);
          }
          for (var i = 0; i < _this.value.length; i++) {
            _this.$set(_this.value[i], "attentions", false);
          }
          if (_this.value.length == 0) {
            _this.infoShow = true;
          }
          _this.courseShow = true;
          _this.retrieveAttention();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    Information: function(item) {
      const _this = this;
      // _this.$store.state.information.informations = item;
    },
    attention: function(item, index) {
      const _this = this;
      if (localStorage.token) {
        item.attentions = !item.attentions;
        if (item.attentions == true) {
          _this.attentions.Name = _this.Names.name;
          _this.attentions.TypeId =
            _this.$route.params.classesDetails_id + "," + item.classinfo.id;
          _this.attentions.Type = 2;
          _this
            .axios({
              method: "post",
              url: `${_this.URLport.serverPath}/Focus/Add`,
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
          var attentionsId = "";
          for (var i = 0; i < _this.attentionCon.length; i++) {
            var v = [];
            v = _this.attentionCon[i].typeId.split(",");
            if (item.classinfo.id == v[1]) {
              attentionsId = _this.attentionCon[i].id;
            }
          }
          _this
            .axios({
              method: "delete",
              url: `${_this.URLport.serverPath}/Focus/del`,
              async: false,
              params: {
                id: attentionsId
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
      const _this = this;
      if (localStorage.token) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Focus/Focus`,
            async: false,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(function(res) {
            _this.attentionCon = res.data.data;
            for (var i = 0; i < res.data.data.length; i++) {
              if (res.data.data[i].type == 2) {
                for (var j = 0; j < _this.value.length; j++) {
                  var v = [];
                  v = res.data.data[i].typeId.split(",");
                  if (v[1] == _this.value[j].classinfo.id) {
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
    },
    ownness(name, img) {
      const _this = this;
    }
  }
};
</script>
