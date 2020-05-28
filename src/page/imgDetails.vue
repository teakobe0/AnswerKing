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
  width: 1300px;
  height: 4px;
  margin: 0 auto;
  background-color: #f7c00d;
  border-radius: 2px;
  margin-bottom: 24px;
}
/* 左侧缩略图固定之前的样式 */
.thumbnail {
  width: 258px;
  float: left;
  padding: 20px 20px 0px 20px;
  border: 1px solid rgb(202, 202, 202);
}
.thumbnail-text {
  width: 310px;
  height: 30px;
  color: rgb(97, 97, 97);
}
.thumbnail-text i {
  font-size: 10px;
  margin-left: 5px;
}
.thumbnail-img {
  width: 117px;
  height: 170px;
  float: left;
  margin-bottom: 20px;
}
.thumbnail-bt {
  width: 100%;
  margin-bottom: 20px !important;
  padding: 0px !important;
}
.thumbnail-bt a {
  display: block;
  text-decoration: none;
  color: #3b3b3b;
  width: 100%;
  line-height: 40px;
}
.thumbnail-bt a:hover {
  color: #fe2a93;
}
.thumbnail a {
  display: inline-block;
}
.thumbnail img {
  width: 117px;
  height: 170px;
  border: 1px solid rgb(202, 202, 202);
  cursor: pointer;
  border-radius: 5px;
}
.thumbnail .thumbnail-img:nth-child(even) {
  margin-right: 20px;
}
.thumbnail img:hover {
  border: 1px solid rgb(23, 102, 206);
}
.answer {
  width: 970px;
  float: right;
}
.answer img {
  width: 928px;
  padding: 20px;
  z-index: 9999;
  margin-bottom: 20px;
  border: 1px solid rgb(202, 202, 202);
  box-shadow: 1px 3px 5px rgb(202, 202, 202);
}

.imgD-text {
  width: 928px;
  margin-top: 10px;
  margin-bottom: 30px;
  float: right;
  border: 1px solid rgb(202, 202, 202);
  padding: 20px;
  color: rgb(97, 97, 97);
  line-height: 30px;
}
.imgDetails-title {
  /* margin-top: 80px; */
}
.UP {
  position: fixed;
  right: 40px;
  bottom: 100px;
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #409eff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  z-index: 5;
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
              <span class="crumb">{{$t('Public.con1')}}</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="'/university/'+ value.universityId">
              <span class="crumb">{{$t('Public.con3')}}</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="'/classes/'+$route.params.classes_id">
              <span class="crumb">{{$t('Public.con5')}}</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item
              :to="'/classes/'+$route.params.classes_id+'/content/'+$route.params.classinfo_id+'/weeks/'+$route.params.weeks_id+'/weektype/'+$route.params.weektype_id"
            >
              <span class="crumb">{{$t('Public.con6')}}</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <span style="color:rgb(228, 228, 228);">{{$t('Public.con7')}}</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <div class="imgD-Con">
      <div class="serchDetailsContent-top">
        <div class="serchDetailsContent-top-info">
          <h2>
            <router-link
              :to="'/classes/'+$route.params.classes_id+'/content/'+$route.params.classinfo_id+'/weeks/'+$route.params.weeks_id+'/weektype/'+$route.params.weektype_id"
            >{{value.name}}</router-link>
          </h2>
          <p>
            {{$t('classesDetail.con2')}}:
            <router-link :to="'/university/'+value.universityId">{{value.university}}</router-link>
            <span v-if="value.professor">{{$t('classesDetail.con3')}}:{{value.professor}}</span>
            <span v-if="contributor == true">{{$t('content.con1')}}:</span>
            <router-link
              :to="'/ownness/'+informations.classinfo.clientId"
              class="ownness-name"
              :title="$t('classesDetail.con15') + ' ' + informations.clientname + ' ' + $t('classesDetail.con16')"
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
                {{$t('classesDetail.con1')}}
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
                {{$t('classesDetail.con1')}}
              </el-button>
            </li>
            <li
              style="line-height:35px;margin-left:10px;margin-right:2px;color:rgb(206, 206, 206)"
            >|</li>
            <li>
              <el-button size="medium" @click="noUses" :disabled="disableds">
                <i class="el-icon-thirddianzan11" v-if="noUse == false"></i>
                <i class="el-icon-thirddianzan2" v-if="noUse == true"></i>
                {{$t('content.con3')}}({{informations.classinfo.noUse}})
              </el-button>
            </li>
            <li>
              <el-button size="medium" @click="beOfUses" :disabled="disableds">
                <i class="el-icon-thirddianzan4" v-if="use == false"></i>
                <i class="el-icon-thirddianzan3" v-if="use == true" style="color:#f52424"></i>
                {{$t('content.con2')}}({{informations.classinfo.use}})
              </el-button>
            </li>
          </ul>
        </div>
      </div>
      <div class="imgD-xian"></div>
      <div class="thumbnail">
        <!-- <div class="thumbnail" v-for="(items,index) in this.Answer"> -->
        <div class="thumbnail-text">
          {{$t('imgDetails.con1')}}
          <i class="el-icon-info" :title="$t('imgDetails.con3')"></i>
        </div>
        <div class="thumbnail-img" v-for="(item,indexs) in answerImgs">
          <a :href="'#'+indexs">
            <img :src="item.url" :alt="item.contents" />
          </a>
        </div>
        <el-button class="thumbnail-bt">
          <router-link
            :to="'/classes/'+$route.params.classes_id+'/content/'+$route.params.classinfo_id+'/weeks/'+$route.params.weeks_id+'/weektype/'+$route.params.weektype_id"
          >{{$t('imgDetails.con2')}}</router-link>
        </el-button>
      </div>
      <div class="answer">
        <!-- <div class="answer" v-for="(items,index) in this.Answer"> -->
        <div v-for="(item,indexs) in answerImgs">
          <img :src="item.url" :alt="item.contents" :id="indexs" />
        </div>
        <div class="imgD-text">
          <p>{{this.Answer.contents}}</p>
        </div>
      </div>
    </div>
    <!-- <div class="ClassesAdvertising">
      <div>
        <p class="advertising-p1">没有找到您需要的答案吗？想得到更多的学习辅导服务吗？</p>
        <p class="advertising-p2">
          扫描二维码添加CourseWhale合作伙伴学业辅导的
          <b style="color:#3ccece;">客服微信</b>吧！任何学业问题统统解决！
        </p>
      </div>
      <img src="../assets/erweima.jpg" alt />
      <div class="UP" v-show="UPshow" @click="UPcilick">
        <i class="el-icon-caret-top"></i>
      </div>
    </div>-->
    <homeFooter></homeFooter>
  </div>
</template>

<script type="es6">
import homeNav from "@/components/public/homeNav.vue";
import homeFooter from "@/components/public/homeFooter.vue";
import motionCss from "../../public/css/motion.min.css";
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
      },
      // 关注
      attentions: {
        Name: "",
        TypeId: "",
        Type: ""
      },
      // 答案图片内容
      Answer: [],
      informations: {},
      UPshow: false,
      beforeData: [],
      afterData: [],
      answerImgs: [],
      tabs: []
    };
  },
  created: function() {
    const _this = this;
    // 获取课程信息
    _this.Getclass();
    _this.Classinfos();
    _this.typeAnswer();
  },
  mounted() {
    var _this = this;
    window.addEventListener("scroll", _this.handleScroll);
  },
  methods: {
    handleScroll() {
      var _this = this;
      if (_this.$route.params.imgDetails_id) {
        var scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        if (scrollTop >= 500) {
          _this.UPshow = true;
          $(".UP").addClass("animation fade-in");
        } else {
          _this.UPshow = false;
        }
      }
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
    attention() {
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
                message: _this.$t('classesDetail.con19'),
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
                message: _this.$t('classesDetail.con20'),
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
          message: _this.$t('classesDetail.con21'),
          type: "warning"
        });
      }
    },
    //将图片的ID和路径保存到outputList的方法
    getUrlList: function(rawList) {
      const _this = this;
      var imgUrlArray = rawList.url.split("|");
      var outputList = [];
      for (var i = 0; i < imgUrlArray.length; i++) {
        if (imgUrlArray[i].length != 0) {
          outputList.push({
            id: rawList.id,
            contentUrl: _this.URLport.ImgPath + imgUrlArray[i],
            contents: rawList.contents
            // conurl: rawList.conurl
          });
        }
      }

      return outputList;
    },
    // 获取答案图片
    // gainImg() {
    //   const _this = this;
    //   _this
    //     .axios({
    //       method: "get",
    //       url: `${_this.URLport.serverPath}/ClassInfoContent/ClassInfoContents`,
    //       async: false,
    //       params: {
    //         classInfoId: _this.$route.params.imgDetails_id
    //       },
    //       xhrFields: {
    //         withCredentials: true
    //       },
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`
    //       }
    //     })
    //     .then(function(res) {
    //       _this.Answer = res.data.data;
    //       for (var i = 0; i < _this.Answer.length; i++) {
    //         if (_this.Answer[i].url == null || _this.Answer[i].url == "") {
    //         } else {
    //           _this.Answer[i].Imgs = _this.getUrlList(_this.Answer[i]);
    //         }
    //       }
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // },
    // 根据周和订单ID获取类型和答案
    typeAnswer(weekId, anIndex) {
      const _this = this;
      _this.afterData = [];
      _this.tabs = [];
      _this.answerImgs = [];
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/ClassInfoContent/Types`,
          async: false,
          params: {
            weekname: _this.$route.params.weeks_id,
            classinfoid: _this.$route.params.classinfo_id
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          console.log(res);
          _this.beforeData = res.data.data;
          // 循环整合数据结构
          let tempArr = [];
          for (let i = 0; i < _this.beforeData.length; i++) {
            if (tempArr.indexOf(_this.beforeData[i].classWeekType) === -1) {
              _this.afterData.push({
                classWeekType: _this.beforeData[i].classWeekType,
                origin: [_this.beforeData[i]],
                contents: _this.beforeData[i].contents
              });
              tempArr.push(_this.beforeData[i].classWeekType);
            } else {
              for (let j = 0; j < _this.afterData.length; j++) {
                if (
                  _this.afterData[j].classWeekType ==
                  _this.beforeData[i].classWeekType
                ) {
                  _this.afterData[j].origin.push(_this.beforeData[i]);
                  break;
                }
              }
            }
          }
          // 将类型独立出来
          for (var i = 0; i < _this.afterData.length; i++) {
            const obj = {};
            obj.contentType = _this.afterData[i].classWeekType;
            _this.tabs.push(obj);
          }
          for (let i = 0; i < _this.tabs.length; i++) {
            if (_this.tabs[i].contentType == _this.$route.params.weektype_id) {
              // 将图片独立出来
              for (var j = 0; j < _this.afterData[i].origin.length; j++) {
                const imgs = { url: "", contents: "" };
                imgs.contents = _this.afterData[i].origin[j].contents;
                imgs.url = _this.afterData[i].origin[j].url;
                _this.answerImgs.push(imgs);
              }
              _this.Answer = _this.afterData[i];
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    UPcilick() {
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>