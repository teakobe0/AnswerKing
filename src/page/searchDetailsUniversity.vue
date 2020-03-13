<style>
#serchDetailsUniversity {
  position: relative;
  padding-bottom: 276px;
}

.serchDetailsUniversity-con {
  margin-top: 80px;
  overflow: hidden;
}

.university-top {
  width: 1300px;
  margin: 0 auto;
}

.university-tag {
  width: 100%;
  height: 50px;
  /*border-top: 1px solid #d4d4d4;*/
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  /* background-color: #fcfcfc; */
}

.un-top-img {
  width: 140px;
  height: 140px;
  margin-top: 24px;
  margin-bottom: 24px;
  float: left;
  overflow: hidden;
}

.un-top-img img {
  width: 140px;
  height: 140px;
}

.un-top-info {
  float: left;
  width: 83%;
  height: 140px;
  padding: 25px 40px;
  overflow: hidden;
}

.un-top-info h2 {
  color: #3b3b3b;
  margin-top: 37px;
  margin-bottom: 8px;
}

.un-top-info p {
  color: #383838;
  font-size: 16px;
}

.un-tag-con {
  width: 1300px;
  height: 50px;
  margin: 0 auto;
}

.un-tag-con ul {
  width: 600px;
  height: 50px;
  float: left;
}

.un-tag-con li {
  float: left;
  list-style-type: none;
  text-align: center;
  width: 73px;
  height: 46px;
  line-height: 50px;
  margin-right: 10px;
  cursor: pointer;
}

.un-tag-con li:hover {
  height: 46px;
  border-bottom: 4px solid #4559ae;
}

.un-tag-con li a {
  display: inline-block;
  text-align: center;
  width: 73px;
  height: 46px;
  color: #000;
  text-decoration: none;
}
</style>

<template>
  <div id="serchDetailsUniversity">
    <homeNav></homeNav>
    <div v-if="titleShow==true" v-title :data-title="value.name+'-CourseWhale'"></div>
    <div class="serchDetailsUniversity-con">
      <div class="con-img">
        <div class="crumbs">
          <div class="crumbs-con">
            <el-breadcrumb separator-class="el-icon-arrow-right" style>
              <el-breadcrumb-item :to="{ path: '/schools' }"><span class="crumb">全部学校</span></el-breadcrumb-item>
              <el-breadcrumb-item><span style="color:rgb(228, 228, 228);">当前学校</span></el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div class="university-top">
          <div class="un-top-img">
            <img src="../assets/schoolAll.png" alt>
          </div>
          <div class="un-top-info">
            <h2>{{value.name}}</h2>

            <p>学校信息:{{value.intro}}</p>
          </div>
        </div>
      </div>

      <div class="university-tag">
        <div class="un-tag-con">
          <ul>
            <li :class="{classesTag:num == 0}" @click="tab(tab01Text)">
              <router-link :to="'/university/'+ $route.params.university_id +'/schoolall'">课程</router-link>
            </li>
            
          </ul>
        </div>
      </div>

      <div>
        <router-view/>
      </div>
      <!-- <div class="ClassesAdvertising">
        <div>
          <p class="advertising-p1">没有找到您需要的学校吗？想得到更多的学习辅导服务吗？</p>
          <p class="advertising-p2">
            扫描二维码添加CourseWhale合作伙伴学业辅导的<b style="color:#3ccece;">客服微信</b>吧！任何学业问题统统解决！
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
      value: [],
      Id: "",
      num: 0,
      tab01Text: "tab01",
      tab02Text: "tab02",
      titleShow: false
    };
  },
  created: function() {
    const _this = this;
    _this.Id = _this.$route.params.university_id;
    _this.University();
  },
  methods: {
    //根据学校id检索
    University: function() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/University/GetUniversity`,
          async: false,
          params: {
            id: _this.$route.params.university_id
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          _this.value = res.data.data;
          _this.titleShow = true;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    tab: function(tab) {
      const _this = this;
      if (tab == "tab01") {
        _this.num = 0;
      } else if (tab == "tab02") {
        _this.num = 1;
      }
    }
  }
};
</script>