<style>
#classesDetails {
  position: relative;
  padding-bottom: 276px;
}

.classesDetails-con {
  /* margin-top: 80px; */
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
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
  padding: 37px 0px;
  overflow: hidden;
  position: relative;
}

.classesDetails-top-info h2 {
  color: #3b3b3b;
  float: left;
  margin-right: 20px;
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
  /* position: absolute;
  right: 0px;
  bottom: 24px; */
  background-color: #58bce4 !important;
  border: 1px solid #58bce4 !important;
  color: #fff !important;
  font-size: 12px !important;
  padding: 7px 20px !important;
}
.attention i {
  font-size: 14px !important;
}
.attention:hover {
  background-color: #77c6e6 !important;
}
.attention:active {
  border: 1px solid #007fb1 !important;
}
.attentions {
  /* position: absolute;
  right: 0px;
  bottom: 24px; */
  background-color: #58bce4 !important;
  border: 1px solid #58bce4 !important;
  color: #fff !important;
  font-size: 12px !important;
  padding: 7px 20px !important;
}
.attentions i {
  font-size: 14px !important;
}
.attentions:hover {
  background-color: #77c6e6 !important;
}
.attentions:active {
  border: 1px solid #007fb1 !important;
}
.classesDetails-tag-con {
  width: 1300px;
  height: 50px;
  margin: 0 auto;
  position: relative;
}

.classesDetails-tag-con ul {
  /* width: 600px; */
  height: 46px;
  display: inline-block;
}

.classesDetails-tag-con li {
  float: left;
  list-style-type: none;
  text-align: center;
  cursor: pointer;
  /* width: 73px; */
  height: 46px;
  line-height: 50px;
  margin-right: 10px;
}

.classesDetails-tag-con li a {
  display: inline-block;
  text-align: center;
  /* width: 73px; */
  padding: 0 20px;
  height: 46px;
  color: #000;
  text-decoration: none;
}

.classesDetails-tag-con li:hover {
  height: 46px;
  border-bottom: 4px solid #4559ae;
}
.classesDetails-tag-con div {
  font-size: 14px;
  /* position: absolute;
  left: 160px;
  top: 13.5px; */
  position: relative;
  top: -16px;
  left: 10px;
  display: inline-block;
  color: rgb(185, 185, 185);
}
.con-img {
  /*background-image: url("../assets/paper-1990111_1920.jpg");*/
  /*background-repeat: no-repeat;*/
  /*background-position: center;*/
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.15); */
}

.classesTag {
  height: 46px;
  border-bottom: 4px solid #507adc;
}
.file-con-info {
  overflow: hidden;
}
.crumb {
  color: #fff;
}
.crumb:hover {
  color: rgb(40, 174, 252);
}
.crumbs {
  width: 100%;
  overflow: hidden;
  background-color: #4d60b3;
}
.crumbs .crumbs-con {
  width: 1300px;
  margin: 0 auto;
}
.crumbs span {
  line-height: 38px;
}
.ClassesAdvertising {
  width: 1300px;
  height: 100px;
  margin-bottom: 30px !important;
  margin: 0 auto;
  background-image: url("../assets/222.jpg");
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  color: #fff;
}
.ClassesAdvertising div {
  margin-top: 24px;
  margin-left: 35px;
}
.ClassesAdvertising .advertising-p2 {
  margin-top: 10px;
  margin-left: 190px;
  width: 945px;
}
.ClassesAdvertising img {
  width: 70px;
  height: 70px;
  position: absolute;
  right: 35px;
  top: 15px;
}
</style>

<template>
  <div id="classesDetails">
    <homeNav></homeNav>
    <div v-if="titleShow==true" v-title :data-title="value.name+'-CourseWhale'"></div>
    <div class="classesDetails-con">
      <div class="con-img">
        <div class="crumbs">
          <div class="crumbs-con">
            <el-breadcrumb separator-class="el-icon-arrow-right" style>
              <el-breadcrumb-item :to="{ path: '/schools' }">
                <span class="crumb">{{$t('Public.con1')}}</span>
              </el-breadcrumb-item>
              <el-breadcrumb-item :to="'/university/'+universityId">
                <span class="crumb">{{$t('Public.con3')}}</span>
              </el-breadcrumb-item>
              <el-breadcrumb-item>
                <span style="color:rgb(228, 228, 228);">{{$t('Public.con4')}}</span>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div class="classesDetails-top">
          <!--<div class="classesDetails-top-img">-->
          <!--<img src="../assets/serHead.jpg" alt=""/>-->
          <!--</div>-->
          <div class="classesDetails-top-info">
            <div>
              <div>
                <h2>{{value.name}}</h2>
                <el-button
                  class="attention"
                  size="medium"
                  v-if="value.attentions == false"
                  @click="attention()"
                  :disabled="attenDisabled"
                >
                  <i class="el-icon-star-off" v-if="value.attentions == false"></i>
                  {{$t('classesDetail.con1')}}
                </el-button>
                <el-button
                  class="attentions"
                  size="medium"
                  v-if="value.attentions == true"
                  @click="attention()"
                  :disabled="attenDisabled"
                >
                  <i class="el-icon-star-on" v-if="value.attentions == true" style="color:red"></i>
                  {{$t('classesDetail.con1')}}
                </el-button>
              </div>

              <p>
                {{$t('classesDetail.con2')}}:
                <router-link :to="'/university/'+universityId">{{value.university}}</router-link>
                <span v-if="value.professor">{{$t('classesDetail.con3')}}:{{value.professor}}</span>
              </p>

              <p>{{$t('classesDetail.con4')}}:{{value.memo}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="classesDetails-tag">
        <div class="classesDetails-tag-con">
          <ul>
            <li :class="{classesTag:num == 0}" @click="tab(tab01Text)">
              <router-link
                :to="'/classes/'+ $route.params.classes_id +'/file'"
              >{{$t('classesDetail.con5')}}</router-link>
            </li>
            <!-- <li :class="{classesTag:num == 1}" @click="tab(tab02Text)">
                            <router-link :to="{path:'/classes/file',query: {id: this.Id}}">题库集</router-link>
            </li>-->
          </ul>
          <div>{{$t('classesDetail.con6')}}</div>
        </div>
      </div>
      <div>
        <router-view :Names="this.value" :attCon="this.attentionCon" />
      </div>
      <!-- <div class="ClassesAdvertising">
        <div>
          <p class="advertising-p1">{{$t('classesDetail.con11')}}</p>
          <p class="advertising-p2">
            {{$t('classesDetail.con12')}}
            <b style="color:#3ccece;">{{$t('classesDetail.con13')}}</b>{{$t('classesDetail.con14')}}
          </p>
        </div>
        <img src="../assets/erweima.jpg" alt />
      </div> -->
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
      univerName: "",
      titleShow: false,
      NameMsg: "",
      attentions: {
        Name: "",
        TypeId: "",
        Type: ""
      },
      attenDisabled: false,
      attentionCon: []
    };
  },
  created: function() {
    const _this = this;
    _this.Id = _this.$route.params.classes_id;
    _this.Getclass();
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
          _this.className = res.data.data.name;
          _this.univerName = res.data.data.university;
          _this.titleShow = true;
          _this.universityId = res.data.data.universityId;
          _this.retrieveAttention();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 选项卡切换
    tab: function(tab) {
      const _this = this;
      if (tab == "tab01") {
        _this.num = 0;
      } else if (tab == "tab02") {
        _this.num = 1;
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
              if (res.data.data[i].type == 1) {
                if (res.data.data[i].typeId == _this.value.id) {
                  _this.value.attentions = true;
                  _this.value.attentionsId = res.data.data[i].id;
                }
              }
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    // 点击关注
    attention: function() {
      const _this = this;

      if (localStorage.token) {
        _this.value.attentions = !_this.value.attentions;
        _this.attenDisabled = true;
        if (_this.value.attentions == true) {
          _this.attentions.Name = _this.value.name;
          _this.attentions.TypeId = _this.value.id;
          _this.attentions.Type = 1;
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
          _this
            .axios({
              method: "delete",
              url: `${_this.URLport.serverPath}/Focus/del`,
              async: false,
              params: {
                id: _this.value.attentionsId
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
    }
  }
};
</script>