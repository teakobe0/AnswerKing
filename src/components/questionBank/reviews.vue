<style>
.review {
  width: 953px;
  overflow: hidden;
  border-top: 1px dashed #e1e1e1;
  margin-top: 24px;
}
.review-con {
  width: 1300px;
  margin: 0 auto;
  margin-top: 24px;
}
.headPortrait {
  float: left;
  border-radius: 26px;
  overflow: hidden;
  width: 50px;
  height: 50px;
  /* background-color: #4458b0; */
}
.headPortrait p {
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
}
.headPortrait img {
  width: 51px;
  height: 51px;
  border-radius: 26px;
}
.retext {
  float: left;
  margin-left: 10px;
  width: 893px;
}
.retext p {
  color: #00a2e2;
  margin-bottom: 5px;
  font-size: 14px;
}
.retext p span {
  color: #999;
  font-size: 14px;
  margin-left: 10px;
}
.retext input {
  width: 845px;
  height: 100px;
}
.face {
  /* margin-top: 5px; */
  float: left;
}
.face img {
  width: 20px;
}
.reviewButton {
  float: right;
  /* margin-top: 5px; */
}
.statereview {
  margin-top: 16px;
  width: 953px;
  overflow: hidden;
  border-bottom: 1px dashed rgb(180, 180, 180);
}
.retextcontent {
  font-size: 14px;
  text-align: left;
  color: rgb(85, 85, 85);
}
.controlretext {
  width: 953px;
  overflow: hidden;
  margin-bottom: 10px;
}
.controlretext .deleteRetext {
  float: right;
  font-size: 14px;
  margin-right: 15px;
  cursor: pointer;
  color: rgb(85, 85, 85);
}
.controlretext .deleteRetext img {
  width: 15px;
  vertical-align: -16%;
  margin-right: 5px;
}
.controlretext .likeRetext {
  float: right;
  font-size: 14px;
  margin-right: 15px;
  cursor: pointer;
  color: rgb(85, 85, 85);
}
.controlretext .likeRetext img {
  width: 15px;
  vertical-align: -16%;
  margin-right: 5px;
}
.controlretext .putreply {
  font-size: 14px;
  float: right;
  /* margin-top: 2px; */
  cursor: pointer;
  color: rgb(85, 85, 85);
  margin-left: 5px;
}
.controlretext .MessageRetext {
  font-size: 14px;
  float: right;
  /* margin-top: 2px; */
  cursor: pointer;
  color: rgb(85, 85, 85);
}
.controlretext .MessageRetext img {
  width: 15px;
  vertical-align: -16%;
  margin-right: 5px;
}
.staterretext {
  margin-bottom: 8px;
  float: left;
  margin-left: 8px;
  width: 893px;
}
.staterretext p {
  color: #00a2e2;
  margin-bottom: 8px;
  font-size: 14px;
}
.staterretext p span {
  color: #999;
  font-size: 14px;
  margin-left: 10px;
}
.staterretext input {
  width: 845px;
  height: 100px;
}

/* 打开和关闭评论框 */
.openCommentBox {
  overflow: hidden;
  width: 898px;
  margin-left: 58px;
  margin-top: 16px;
  margin-bottom: 16px;
}
.openretext {
  float: left;
  margin-left: 10px;
  width: 813px;
}
.openretext p {
  color: #00a2e2;
  margin-bottom: 5px;
  font-size: 14px;
}
.openstatereview {
  width: 883px;
  overflow: hidden;
  background-color: rgb(252, 252, 252);
  padding: 8px;
}
.openstatereview::nth-last-of-type(1) {
  border: none;
}
.openretextcontent {
  font-size: 14px;
  text-align: left;
  color: rgb(85, 85, 85);
}
.opencontrolretext {
  width: 874px;
  overflow: hidden;
}
.opencontrolretext .opendeleteRetext {
  float: right;
  font-size: 14px;
  margin-right: 15px;
  cursor: pointer;
  color: rgb(85, 85, 85);
}
.opencontrolretext .opendeleteRetext img {
  width: 15px;
  vertical-align: -16%;
  margin-right: 5px;
}
.opencontrolretext .openlikeRetext {
  float: right;
  font-size: 14px;
  margin-right: 15px;
  cursor: pointer;
  color: rgb(85, 85, 85);
}
.opencontrolretext .openlikeRetext img {
  width: 15px;
  vertical-align: -16%;
  margin-right: 5px;
}
.opencontrolretext .openMessageRetext {
  font-size: 14px;
  float: right;
  /* margin-top: 2px; */
  cursor: pointer;
  color: rgb(85, 85, 85);
}
.opencontrolretext .openMessageRetext img {
  width: 15px;
  vertical-align: -16%;
  margin-right: 5px;
}
.openstaterretext {
  margin-bottom: 10px;
  float: left;
  margin-left: 10px;
  width: 813px;
}
.openstaterretext p {
  color: #00a2e2;
  margin-bottom: 5px;
  font-size: 14px;
}
.openstaterretext p span {
  color: #999;
  font-size: 14px;
  margin-left: 10px;
}
.openstaterretext input {
  width: 845px;
  height: 100px;
}
.openheadPortrait {
  float: left;
  border-radius: 26px;
  overflow: hidden;
  width: 50px;
  height: 50px;
  /* background-color: #4458b0; */
}
.openheadPortrait p {
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
}
.openheadPortrait img {
  width: 51px;
  height: 51px;
}
</style>

<template>
  <div class="review">
    <div class="review-con">
      <!-- 本人的评论框 -->
      <div style="overflow:hidden;width:953px">
        <div class="headPortrait">
          <img :src="imageUrl" alt v-if="headShowLogin == true" />
          <img src="../../assets/头像.jpg" alt v-if="headShowLogin == false" />
          <!-- <p>AW</p> -->
        </div>
        <div class="retext">
          <p>{{personreviews.name}}</p>
          <el-input
            type="textarea"
            :rows="2"
            v-model="retext"
            resize="none"
            style="width:893px"
            :placeholder="placeholder"
          ></el-input>
          <div style="height:28px;margin-top:8px">
            <!-- <div class="face">
              <img src="../../assets/笑脸.svg" alt>
            </div>-->
            <div class="reviewButton">
              <el-button type="primary" size="mini" @click="addComment">{{$t('content.con12')}}</el-button>
            </div>
          </div>
        </div>
      </div>
      <!-- 评论内容 -->
      <div class="statereview" v-for="(item,index) in comment">
        <div class="headPortrait">
          <!-- <p>AW</p> -->
          <img :src="item.img" alt v-if="item.headShow == true" />
          <img src="../../assets/头像.jpg" alt v-if="item.headShow == false" />
        </div>
        <div class="staterretext">
          <p>
            {{item.name}}
            <span>{{item.createTime | formatDate}}</span>
          </p>
          <div class="retextcontent">{{item.contents}}</div>
        </div>
        <div class="controlretext">
          <div class="MessageRetext" @click="opencontrol(index,item.id)">
            <!-- <img src="../../assets/留言.svg" alt> -->
            <span>{{$t('content.con14')}}({{item.replies.length}})</span>
          </div>
          <div class="deleteRetext" v-show="item.deleteshow == true" @click="deletecom(item.id)">
            <img src="../../assets/删除.svg" alt />
            <span>{{$t('content.con13')}}</span>
          </div>
        </div>
        <!-- 打开和关闭对别人的评论 -->
        <div class="openCommentBox">
          <!-- 已有留言的时候显示 -->
          <div>
            <div class="openstatereview" v-for="(openitem,openindex) in item.replies">
              <div class="openheadPortrait">
                <!-- <p>AW</p> -->
                <img :src="openitem.replyimg" alt v-if="openitem.headShowTwo == true" />
                <img src="../../assets/头像.jpg" alt v-if="openitem.headShowTwo == false" />
              </div>
              <div class="openstaterretext">
                <p>
                  {{openitem.replyname}}
                  <span>{{openitem.createTime | formatDate}}</span>
                </p>
                <div class="openretextcontent">{{openitem.contents}}</div>
              </div>
              <div class="opencontrolretext">
                <div
                  class="openMessageRetext"
                  @click="replyTwolevel(index,openitem.parentId,openitem.id,openitem.replyname)"
                >
                  <span>{{$t('content.con14')}}</span>
                  <!-- <img src="../../assets/留言.svg" alt> -->
                  <!-- <span>{{openitem.message}}</span> -->
                </div>
                <div
                  class="opendeleteRetext"
                  v-show="openitem.deleteshow == true"
                  @click="deletecom(openitem.id)"
                >
                  <img src="../../assets/删除.svg" alt />
                  <span>{{$t('content.con13')}}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 打开关闭回复框 -->
          <div
            v-if="item.openreply == true"
            style="background:rgb(252, 252, 252);overflow:hidden;padding:8px;"
          >
            <div class="headPortrait">
              <!-- <p>AW</p> -->
              <!-- <img :src="imageUrl" alt /> -->
              <img :src="imageUrl" alt v-if="headShowLogin == true" />
              <img src="../../assets/头像.jpg" alt v-if="headShowLogin == false" />
            </div>
            <div class="openretext">
              <p>{{personreviews.name}}</p>
              <el-input
                type="textarea"
                :rows="2"
                v-model="item.model"
                resize="none"
                style="width:815px"
              ></el-input>
              <div style="height:28px;margin-top:8px">
                <!-- <div class="face">
                  <img src="../../assets/笑脸.svg" alt>
                </div>-->
                <div class="reviewButton">
                  <el-button type="info" size="mini" @click="cancel(index)">{{$t('content.con15')}}</el-button>
                  <el-button
                    type="primary"
                    size="mini"
                    @click="submitReview(item.model)"
                  >{{$t('content.con12')}}</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="es6">
import { formatDate } from "@/common/js/date.js";
import { constants } from "crypto";
export default {
  name: "reviews",
  data() {
    return {
      retext: "",
      openretext: "",
      //评论内容
      reviews: [],
      replyTwolevelname: "",
      replyTwolevelid: "",
      replyOnelevelid: "",
      replyOneTwoid: "",
      LikeimgRed: false,
      LikeimgGray: true,
      addComments: {
        parentId: "",
        contents: "",
        classInfoId: "",
        clientid: "",
        contenturl: ""
      },
      comment: [],
      //登录人信息
      personreviews: [],
      personreviewsid: "",
      placeholder: "",
      imageUrl: "",
      headShowLogin: false,
      // 判断这个是否验证过邮箱
      personalVipEmail: false,
      reply:'回复',
    };
  },
  created: function() {
    const _this = this;
    //获取个人信息
    _this.personal();
    if (localStorage.token) {
      _this.placeholder = _this.$t("content.con11");
    } else {
      _this.placeholder = _this.$t("content.con26");
    }
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  },
  methods: {
    //获取登录人的个人信息
    personal: function() {
      const _this = this;
      if (localStorage.token) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Client/GetClient`,
            async: false,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(function(res) {
            _this.personreviews = res.data.data;
            _this.personreviewsid = res.data.data.id;
            if (res.data.data.image.length > 26) {
              _this.imageUrl = res.data.data.image;
              _this.headShowLogin = true;
            } else {
              _this.headShowLogin = false;
            }
            if (_this.personreviews.isValidate) {
              _this.personalVipEmail = true;
            }
            _this.searching();
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        _this.headShow = false;
        _this.searching();
      }
      // if (_this.$store.state.loginPerson.loginPerson.id) {
      //   _this.personreviews = _this.$store.state.loginPerson.loginPerson;
      //   _this.personreviewsid = _this.$store.state.loginPerson.loginPerson.id;
      //   _this.imageUrl =
      //     "http://192.168.1.29:8088" +
      //     _this.$store.state.loginPerson.loginPerson.image;
      //     _this.headShowLogin = true;
      //   _this.searching();
      // } else {

      // }
    },
    //检索评论
    searching: function() {
      const _this = this;
      _this.comment.length = 0;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Comment/Comments`,
          async: false,
          params: {
            classinfoid: _this.$route.params.classinfo_id
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          _this.reviews = res.data.data;
          if (res.data.data.length == 0) {
            _this.comment = [];
          }
          for (var i = 0; i < _this.reviews.length; i++) {
            _this.$set(_this.reviews[i], "openreply", false);
            _this.$set(_this.reviews[i], "deleteshow", false);
            _this.$set(_this.reviews[i], "model", "");
            _this.$set(_this.reviews[i], "replies", []);
            _this.$set(_this.reviews[i], "headShow", false);
            _this.$set(_this.reviews[i], "headShowTwo", false);

            if (_this.reviews[i].img) {
              _this.reviews[i].img = _this.reviews[i].img;
              _this.$set(_this.reviews[i], "headShow", true);
            }

            if (_this.reviews[i].replyimg) {
              _this.reviews[i].replyimg = _this.reviews[i].replyimg;
              _this.$set(_this.reviews[i], "headShowTwo", true);
            }
            if (_this.reviews[i].clientId == _this.personreviewsid) {
              _this.reviews[i].deleteshow = true;
            } else {
              _this.reviews[i].deleteshow = false;
            }

            if (_this.reviews[i].parentId == 0) {
              _this.comment.push(_this.reviews[i]);
            }

            for (var j = 0; j < _this.comment.length; j++) {
              var arr = _this.reviews[i].parentId.split(",");
              // if (_this.comment[j].id == arr[0]) {
              //   // _this.comment[j].replies.push(_this.reviews[i]);
              //   console.log(2);
              // }
              if (arr.length >= 2) {
                if (_this.comment[j].id == arr[1]) {
                  _this.comment[j].replies.push(_this.reviews[i]);
                  // if (_this.comment[j].replies.length > 2) {
                  //   console.log(1);
                  // }
                }
              }
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //新增评论
    addComment: function() {
      const _this = this;
      if (localStorage.token) {
        if (_this.personalVipEmail) {
          var patt = /^[\s]*$/;
          var pvalue = patt.test(_this.retext);
          if (pvalue) {
            _this.$message({
              message: _this.$t('content.con30'),
              type: "warning"
            });
          } else {
            _this.addComments.parentId = 0;
            _this.addComments.contents = _this.retext;
            _this.addComments.classInfoId = _this.$route.params.classinfo_id;
            _this.addComments.clientid = _this.personreviewsid;
            _this
              .axios({
                method: "POST",
                url: `${_this.URLport.serverPath}/Comment/Add`,
                async: false,
                data: _this.addComments,
                xhrFields: {
                  withCredentials: true
                },
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                }
              })
              .then(function(res) {
                _this.retext = "";
                _this.$message({
                  message: _this.$t('content.con31'),
                  type: "success"
                });
                _this.searching();
              })
              .catch(function(error) {
                console.log(error);
              });
          }
        } else {
          _this.$message({
            message: _this.$t('content.con29'),
            type: "warning"
          });
        }
      } else {
        _this.$message({
          message: _this.$t('content.con28'),
          type: "warning"
        });
      }
    },
    // 新增2级评论
    submitReview: function(model) {
      console.log(model);
      const _this = this;
      if (localStorage.token) {
        if (_this.personalVipEmail) {
          var patt = /^[\s]*$/;
          var pvalue = patt.test(model);
          if (pvalue) {
            _this.$message({
              message: _this.$t('content.con30'),
              type: "warning"
            });
          } else {
            _this.addComments.parentId = _this.replyOneTwoid;
            _this.addComments.contents = model;
            _this.addComments.classInfoId = _this.$route.params.classinfo_id;
            _this.addComments.clientid = _this.personreviewsid;
            _this.addComments.contenturl =
              model +
              "," +
              _this.$route.params.classes_id +
              "," +
              _this.$route.params.classinfo_id;
            _this
              .axios({
                method: "POST",
                url: `${_this.URLport.serverPath}/Comment/Add`,
                async: false,
                data: _this.addComments,
                xhrFields: {
                  withCredentials: true
                },
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                }
              })
              .then(function(res) {
                _this.searching();
              })
              .catch(function(error) {
                console.log(error);
              });
          }
        } else {
          _this.$message({
            message: _this.$t('content.con29'),
            type: "warning"
          });
        }
      } else {
        _this.$message({
          message: _this.$t('content.con28'),
          type: "warning"
        });
      }
    },
    // 删除本人评论
    deletecom: function(ids) {
      const _this = this;
      _this
        .axios({
          method: "delete",
          url: `${_this.URLport.serverPath}/Comment/Del`,
          async: false,
          params: {
            id: ids
          },
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          _this.searching();
          _this.$message({
            message: _this.$t('content.con27'),
            type: "success"
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    //向reviews评论数组中添加控制打开关闭的openreply属性，动态显示ipnut值得model属性
    openreview: function() {
      const _this = this;
    },
    openLike: function(like) {
      const _this = this;
    },
    // 2级评论的回复方法
    replyTwolevel: function(index, oneid, twoid, name) {
      const _this = this;
      _this.replyTwolevelname = name;
      _this.replyOnelevelid = oneid.toString();
      _this.replyTwolevelid = twoid.toString();
      _this.comment[index].openreply = true;
      _this.comment[index].model = _this.reply + ' '+ name + ":";
      _this.replyOneTwoid = oneid + "," + twoid;
    },
    //留言的方法
    opencontrol: function(indexs, id) {
      const _this = this;
      _this.comment[indexs].openreply = !_this.comment[indexs].openreply;
      _this.comment[indexs].model = "";
      _this.replyOneTwoid = "," + id;
    },
    // 关闭评论框的方法
    cancel: function(indexs) {
      const _this = this;
      _this.comment[indexs].openreply = false;
    }
  },
  computed: {
    posVersion() {
      return this.$store.state.loginPerson.loginPerson;
    }
  },
  watch: {
    "$i18n.locale"() {
      const _this = this;
      if (localStorage.token) {
        _this.placeholder = _this.$t("content.con11");
      } else {
        _this.placeholder = _this.$t("content.con26");
      }
      _this.reply = _this.$t('content.con14');
      
    }
  },
};
</script>

