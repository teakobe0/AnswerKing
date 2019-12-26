<style>
#imgDetails {
  width: 100%;
  height: 100%;
  position: relative;
}
.imgD-Con {
  width: 1300px;
  padding: 0px 0px 0px 0px;
  margin: 0 auto;
  overflow: hidden;
}
.imgD-xian {
  width: 650px;
  height: 4px;
  margin: 0 auto;
  background-color: #f7c00d;
  border-radius: 2px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.imgD-Con img {
  width: 640px;
  z-index: 9999;
  /* position: fixed;
  top: 90px; */
  float: left;
}
.imgD-text {
  width: 640px;
  margin-top: 10px;
  /* margin-left: 650px; */
  float: right;
}
.imgDetails-title {
  margin-top: 80px;
}
</style>

<template>
  <div id="imgDetails">
    <homeNav></homeNav>
    <div class="imgDetails-title">
      <div class="crumbs">
        <div class="crumbs-con">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/schools' }">
              <span class="crumb">全部学校</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="'/university/'+ value.universityId">
              <span class="crumb">该校课程</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="'/classes/'+$route.params.classes_id">
              <span class="crumb">该课题库</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <span style="color:rgb(228, 228, 228);">当前题库</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <div class="imgD-Con">
      <div class="serchDetailsContent-top">
        <div class="serchDetailsContent-top-info">
          <h2>{{value.name}}</h2>
          <p>
            学校:
            <router-link :to="'/university/'+value.universityId">{{value.university}}</router-link>
            <span v-if="value.professor">教授:{{value.professor}}</span>
            <span v-if="contributor == true">贡献者:</span>
            <router-link
              :to="'/ownness/'+informations.classinfo.clientId"
              class="ownness-name"
              :title="'访问'+ informations.clientname +'的个人资料'"
              v-if="contributor == true"
            >
              <img ondragstart="return false;" :src="informations.clientimg" alt />
              <div>{{informations.clientname}}</div>
            </router-link>
          </p>
          <ul class="content-bookmark" v-if="bookmarkShow == true">
            <li>
              <el-button
                type="primary"
                class="ConAtten"
                size="medium"
                v-if="value.attentions == false"
                @click="attention()"
                :disabled="attenDisabled"
              >
                <i class="el-icon-star-off" v-if="value.attentions == false"></i>
                关注
              </el-button>
              <el-button
                type="primary"
                class="ConAttens"
                size="medium"
                v-if="value.attentions == true"
                @click="attention()"
                :disabled="attenDisabled"
              >
                <i class="el-icon-star-on" v-if="value.attentions == true" style="color:red"></i>
                关注
              </el-button>
            </li>
            <li
              style="line-height:35px;margin-left:10px;margin-right:2px;color:rgb(206, 206, 206)"
            >|</li>
            <li>
              <el-button size="medium" @click="noUses" :disabled="disableds">
                <i class="el-icon-thirddianzan11" v-if="noUse == false"></i>
                <i class="el-icon-thirddianzan2" v-if="noUse == true"></i>
                没用({{informations.classinfo.noUse}})
              </el-button>
            </li>
            <li>
              <el-button size="medium" @click="beOfUses" :disabled="disableds">
                <i class="el-icon-thirddianzan4" v-if="use == false"></i>
                <i class="el-icon-thirddianzan3" v-if="use == true" style="color:#f52424"></i>
                有用({{informations.classinfo.use}})
              </el-button>
            </li>
          </ul>
        </div>
      </div>
      <div class="imgD-xian"></div>
      <img src="http://47.254.29.164:8088/uploads/16001/15001/Quiz/1600115001Quiz55154.png" alt />
      <div class="imgD-text">
        <p>
          10)Which of the following was NOT a crop the colonists learned to grow from the
          Indians? For 1Point Your Answer: C)wheat Correct: 1point 1)Where did the Puritans
          first settle? For 1Point Your Answer: D)Plymouth Harbor Correct: 1 point 2)The
          main cause of the American Revolution was: For 1 Point Your Answer: B)taxes
          Correct: 1point 3)Which of the following terms best describes George Washington?
          For1Point Your Answer: D)dignified Correct: 1 point 4)Early Puritan societies
          were governed by a type of government termed a: For 1 Point Your Answer: B)the
          ocracy Correct: 1 point 5)George Washington&#39;s Patriot army won every battle
          over the British. For 1Point Your Answer: False Correct: 1 point 6)Thomas Jef
          ferson did all of the following EXCEPT: For 1 Point Your Answer: C)end slaver
          y Correct: 1 point 7)Which of the following did not have the direct involveme
          nt of George Washington? For 1Point Your Answer: B)Declaration of Independence
          Correct: 1point 8)The colony first set up specifically for Catholics was: For
          1Point Your Answer: A) Maryland Correct: 1 point 9)Relations between early co
          lonists and Indians were always hostile. For 1 Point Your Answer:False Corre
          ct: 1point
        </p>
      </div>
    </div>
    <div class="imgD-xian"></div>
    <homeFooter></homeFooter>
  </div>
</template>

<script type="es6">
import homeNav from "@/components/public/homeNav.vue";
import homeFooter from "@/components/public/homeFooter.vue";
export default {
  name: "imgDetails",
  components: {
    homeNav,
    homeFooter
  },
  data() {
    return {
      value: [],
      bookmarkShow: false,
      contributor: false,
      // 按钮禁用
      disableds: false,
      attenDisabled: false,
      // 有用没用
      use: false,
      noUse: false,
      useOnuse: {
        Id: "",
        type: "",
        check: ""
      }
    };
  },
  created: function() {
    const _this = this;
    // 获取课程信息
    _this.Getclass();
    _this.Classinfos();
  },
  methods: {
    //根据课程id检索
    Getclass: function() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Class/Getclass`,
          async: false,
          params: {
            id: _this.$route.params.classes_id
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          _this.value = res.data.data;
          _this.$set(_this.value, "attentions", false);
          _this.UseRecord();
          _this.retrieveAttention();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //根据课程id检索课程订单
    Classinfos: function() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Classinfo/Classinfos`,
          async: false,
          params: {
            classid: _this.$route.params.classes_id
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          _this.classinfoss = res.data.data;
          console.log(res.data.data);
          _this.otherQuestionsFlag = true;
          for (var i = 0; i < res.data.data.length; i++) {
            if (
              res.data.data[i].classinfo.id == _this.$route.params.classinfo_id
            ) {
              _this.informations = res.data.data[i];
              _this.bookmarkShow = true;
              if (_this.informations.clientname) {
                _this.contributor = true;
              }
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    beOfUses: function() {
      const _this = this;
      if (localStorage.token) {
        _this.useOnuse.Id = Number(this.$route.query.classInfoId);
        if (_this.use == false || _this.noUse == true) {
          _this.useOnuse.type = "Y";
          _this.useOnuse.check = 1;
          _this.use = true;
          _this.noUse = false;
          _this.disableds = true;
          _this.ChangeClassInfo();
        } else if (_this.use == true && _this.noUse == false) {
          _this.useOnuse.type = "Y";
          _this.useOnuse.check = -1;
          _this.use = false;
          _this.disableds = true;
          _this.ChangeClassInfo();
        }
      } else {
        _this.$message({
          message: "请登录之后进行操作",
          type: "warning"
        });
      }
    },
    noUses: function() {
      const _this = this;
      if (localStorage.token) {
        _this.useOnuse.Id = Number(this.$route.query.classInfoId);
        if (_this.noUse == false || _this.use == true) {
          _this.useOnuse.type = "N";
          _this.useOnuse.check = 1;
          _this.noUse = true;
          _this.use = false;
          _this.disableds = true;
          _this.ChangeClassInfo();
        } else if (_this.noUse == true && _this.use == false) {
          _this.useOnuse.type = "N";
          _this.useOnuse.check = -1;
          _this.noUse = false;
          _this.disableds = true;
          _this.ChangeClassInfo();
        }
      } else {
        _this.$message({
          message: "请登录之后进行操作",
          type: "warning"
        });
      }
    },
    // 更改课程资料的有用没用
    ChangeClassInfo: function() {
      const _this = this;
      _this
        .axios({
          method: "put",
          url: `${_this.URLport.serverPath}/Classinfo/ChangeClassInfo`,
          async: false,
          params: {
            classInfoid: _this.$route.params.classinfo_id,
            type: _this.useOnuse.type,
            check: _this.useOnuse.check
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          _this.disableds = false;
          _this.UseRecord();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 根据课程资料id检索该课程资料有用、没用
    UseRecord: function() {
      const _this = this;
      if (localStorage.token) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Classinfo/UseRecords`,
            async: false,
            params: {
              classInfoid: Number(_this.$route.params.classinfo_id)
            },
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(function(res) {
            _this.Classinfos();
            _this.UseRecords = res.data.data;
            if (_this.UseRecords == null || _this.UseRecords.check == -1) {
              _this.use = false;
              _this.noUse = false;
            } else if (
              _this.UseRecords.check == 1 &&
              _this.UseRecords.type == "Y"
            ) {
              _this.use = true;
              _this.noUse = false;
            } else if (
              _this.UseRecords.check == 1 &&
              _this.UseRecords.type == "N"
            ) {
              _this.use = false;
              _this.noUse = true;
            }
          })
          .catch(function(error) {
            console.log(error);
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
                var v = [];
                v = res.data.data[i].typeId.split(",");
                if (v[1] == _this.informations.classinfo.id) {
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
    // 关注
    attention: function() {
      const _this = this;

      if (localStorage.token) {
        _this.value.attentions = !_this.value.attentions;
        _this.attenDisabled = true;
        if (_this.value.attentions == true) {
          _this.attentions.Name = _this.value.name;
          _this.attentions.TypeId =
            _this.value.id + "," + _this.informations.classinfo.id;
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
              _this.attenDisabled = false;
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
            if (_this.informations.classinfo.id == v[1]) {
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
              _this.attenDisabled = false;
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