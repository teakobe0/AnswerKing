<style>
.schoolStydy {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 276px;
}

.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

/* Hides from IE-mac \*/

* html .clearfix {
  height: 1%;
}

/* End hide from IE-mac */
.school-con {
  width: 100%;
  margin-top: 80px;
}

.school-query {
  width: 100%;
  height: 400px;
  background-color: #f2f2f2;
  background-image: url("../assets/学校5.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.query-con {
  width: 1300px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
}

.query-con-h1 {
  margin-top: 120px;
  margin-bottom: 20px;
  color: #fff;
}

.query-con-describe {
  color: #fff;
}

.query-con-search input {
  width: 800px;
  height: 100px;
  margin: 0 auto;
  margin-top: 20px;
}

.query-con-search i {
  height: 14px;
  margin-top: 25px;
}

.query-searchbox input {
  height: 50px;
  box-shadow: 1px 1px 10px #cacaca, -1px -1px 10px #cacaca;
}

.query-searchbox input:focus {
  border: 1px solid #cacaca;
}

.find-school {
  width: 1300px;
  margin: 0 auto;
}

.find-school-h1 {
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
}

.find-school-describe {
  margin-bottom: 50px;
  text-align: center;
}

.find-select {
  width: 1200px;
  margin: 0 auto;
  border-left: 1px solid #dbdee5;
  border-right: 1px solid #dbdee5;
  border-bottom: 1px solid #dbdee5;
  border-radius: 5px;
}

.find-select-top {
  width: 1200px;
  height: 60px;
}

.select-class {
  width: 400px;
  height: 60px;
  /*background-color: #1d5aff;*/
  float: left;
}

.select-state {
  width: 400px;
  height: 60px;
  /*background-color: #d3f6fe;*/
  float: left;
}

.select-continent {
  width: 400px;
  height: 60px;
  /*background-color: #ff5a00;*/
  float: left;
}

#aaa {
  width: 400px;
  height: 60px;
}

.find-select {
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.find-select-bootom {
  width: 1140px;
  margin: 0 auto;
  padding: 30px 30px 60px 30px;
  position: relative;
  font-size: 0;
  z-index: 0;
}

.find-select-bootom ul {
  overflow: hidden;
  margin: 0;
  padding: 0;
  font-size: 0;
}

.find-select-bootom li {
  width: 560px;
  display: inline-block;
  list-style-type: none;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 0;
}

.find-select-bootom li a {
  display: block;
  color: #08b4e1;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
}

.find-select-bootom li a:hover {
  color: #bb1308;
  text-decoration: none;
}

.select-boo-num {
  font-size: 13px;
  color: #c3c3c3;
  margin-top: 5px;
  cursor: pointer;
}
.viewmores {
  width: 100%;
  height: 40px;
  background: rgb(247, 247, 247);
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
</style>

<template>
  <div class="schoolStydy clearfix">
    <homeNav></homeNav>
    <div v-title data-title="学校资源-CourseWhale"></div>
    <div class="school-con">
      <div class="school-query">
        <div class="query-con">
          <h1 class="query-con-h1">按学校查找学习资源</h1>

          <p class="query-con-describe">找到所有课程所需的学习资源。我们有数百万的学习文件，问题和答案以及辅导问题，以帮助您学习。</p>

          <div class="query-con-search">
            <el-autocomplete
              class="query-searchbox"
              v-model="state1"
              :fetch-suggestions="querySearch"
              @select="handleSelectauto"
              placeholder="请输入需要查询的学校名称"
              prefix-icon="el-icon-search"
              :trigger-on-focus="false"
            >
              <template slot-scope="{ item }">
                <span>{{item.value}}</span>-
                <span style="color:#878787;">{{item.type}}</span>
              </template>
            </el-autocomplete>
          </div>
        </div>
      </div>
      <div class="find-school">
        <h1 class="find-school-h1">找到你的学校</h1>

        <p class="find-school-describe">从我们的学校和学院列表中选择，以找到您需要的学习资源。</p>

        <div class="find-select">
          <div class="find-select-top">
            <div class="select-class">
              <el-select
                v-model="value1"
                filterable
                id="aaa"
                placeholder="国家"
                @change="handleSelectcountry"
              >
                <el-option
                  v-for="item in country"
                  size:medium
                  :key="item.country"
                  :label="item.country"
                  :value="item.country"
                ></el-option>
              </el-select>
            </div>
            <div class="select-state">
              <el-select
                v-model="value2"
                filterable
                id="aaa"
                placeholder="州/省"
                @change="handleSelectstate"
              >
                <el-option
                  v-for="item in state"
                  size:medium
                  :key="item.state"
                  :label="item.state"
                  :value="item.state"
                ></el-option>
              </el-select>
            </div>
            <div class="select-continent">
              <el-select
                v-model="value3"
                filterable
                clearable
                id="aaa"
                placeholder="市"
                @change="handleSelectcity"
              >
                <el-option
                  v-for="item in city"
                  size:medium
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="find-select-bootom" v-loading="loading" element-loading-text="拼命加载中">
            <ul>
              <li v-for="item in universitys">
                <router-link
                  :to="{path:'/serchDetailsUniversity',query: {id: item.university.id}}"
                >{{item.university.name}}</router-link>
                <div class="select-boo-num">{{item.number}}门课程</div>
              </li>
            </ul>
          </div>
          <div @click="viewMore" class="viewmores" v-show="viewMores == true">
            查看更多
            <i class="el-icon-caret-bottom"></i>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 40px;"></div>
    <homeFooter></homeFooter>
  </div>
</template>

<script type="es6">
import homeNav from "@/components/public/homeNav.vue";
import homeFooter from "@/components/public/homeFooter.vue";

export default {
  name: "schoolStydy",
  components: {
    homeNav,
    homeFooter
  },
  data() {
    return {
      state1: "",
      value1: "美国",
      value2: "",
      value3: "",
      // 初始容器
      alluniversitys: [],
      // 显示容器
      universitys: [],
      uns: [],
      country: [],
      state: [],
      city: [
        //{
        //    value: '选项1',
        //    label: '加利福尼亚州'
        //},
        //{
        //    value: '选项2',
        //    label: '加州'
        //}
      ],
      pageSize: 40,
      queryString: "",
      loading:true,
      viewMores:false
    };
  },
  created: function() {
    var _this = this;
    _this
      .axios({
        method: "get",
        url: `http://192.168.1.27:8088/api/University/Countrys`,
        async: false,
        xhrFields: {
          withCredentials: true
        }
      })
      .then(function(res) {
        console.log(res);
        _this.country = res.data.data;

        console.log("国家");
      })
      .catch(function(error) {
        console.log(error);
      });
    _this.handleSelectcountry();

    document.documentElement.scrollTop = 0;
  },
  methods: {
    viewMore: function() {
      var _this = this;
      _this.universitys = _this.alluniversitys.slice(
        0,
        _this.universitys.length + _this.pageSize
      );
      return sortByKey(_this.universitys, "number");
      //数组对象排序
      function sortByKey(array, key) {
        return array.sort(function(a, b) {
          var x = a[key];
          var y = b[key];
          return y < x ? -1 : x > y ? 1 : 0;
        });
      }
    },
    querySearch(queryString, cb) {
      var _this = this;
      _this.queryString = queryString;
      if (queryString.length >= 3) {
        this.axios({
          method: "get",
          url: `http://192.168.1.27:8088/api/ClassInfoContent/Search`,
          async: false,
          params: {
            name: queryString
          },
          xhrFields: {
            withCredentials: true
          }
        })
          .then(function(res) {
            var results = [];
            if (res.data.data.ls != null && res.data.data.ls.length > 0) {
              for (var i = 0; i < 10; i++) {
                if (res.data.data.ls[i]) {
                  results.push({
                    value: res.data.data.ls[i].university.name,
                    type: "大学",
                    class: "university",
                    num: i
                  });
                }
              }
            } else {
              results.push({ value: "没有找到对应的大学" });
            }

            cb(results);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    handleSelectauto(item) {
      var _this = this;
      _this.loading = this.$loading({
        lock: true,
        text: "加载中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      this.axios({
        method: "get",
        url: `http://192.168.1.27:8088/api/ClassInfoContent/Search`,
        async: false,
        params: {
          name: _this.queryString
        },
        xhrFields: {
          withCredentials: true
        }
      })
        .then(function(res) {
          console.log(res);
          //学校
          if (item.class == "university") {
            //学校
            _this.$router.push({
              path: "/serchDetailsUniversity",
              query: {
                id: res.data.data.ls[item.num].university.id
              }
            });
          }
          _this.loading.close();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //根据国家 州/省份检索学校
    GetUniversitys: function(index) {
      var _this = this;
      _this
        .axios({
          method: "get",
          url: `http://192.168.1.27:8088/api/University/GetUniversitys`,
          async: false,
          params: {
            name: _this.value1,
            state: _this.value2
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          _this.alluniversitys = res.data.data;
          _this.loading = false;
          _this.viewMores = true;
          sortByKey(_this.alluniversitys, "number");
          //数组对象排序
          function sortByKey(array, key) {
            array.sort(function(a, b) {
              var x = a[key];
              var y = b[key];
              return y < x ? -1 : x > y ? 1 : 0;
            });
          }
          _this.viewMore();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    sort: function() {
      var _this = this;
      _this.universitys = _this.alluniversitys.slice(0, _this.pageSize);
    },
    handleSelectcountry: function(item) {
      var _this = this;
      _this
        .axios({
          method: "get",
          url: `http://192.168.1.27:8088/api/University/States`,
          async: false,
          params: {
            name: _this.value1
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          console.log(res);
          _this.state = res.data.data;
          _this.value2 = "";
          _this.value3 = "";
          console.log("州");
          _this.GetUniversitys();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    handleSelectstate: function() {
      var _this = this;
      _this.value3 = "";
      _this.GetUniversitys();
    },
    handleSelectcity: function() {
      var _this = this;
    }
  }
};
</script>