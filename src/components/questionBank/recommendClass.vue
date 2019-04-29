<style>
.content-tag-con-right-con-div {
  width: 290px;
  padding: 8px;
  border: 1px solid #e1e1e1;
}

.content-tag-con-right-con-div ul {
  list-style-type: none;
  margin-left: 50px;
}

.content-tag-con-right-con-div ul li {
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
}

.content-tag-con-right-con-div ul li i {
  position: absolute;
  left: -38px;
  top: 8px;
  color: #5d5d5d;
  font-size: 30px;
}

.content-tag-con-right-con-div ul a {
  font-size: 16px;
  color: #4b4b4b;
  cursor: pointer;
  text-decoration: none;
}
.content-tag-con-right-con-div ul a:hover {
  font-size: 16px;
  color: red;
}
.content-tag-con-right-con-div ul span {
  font-size: 14px;
  color: #838383;
  display: block;
  margin-top: 3px;
}
</style>

<template>
  <div class="content-tag-con-right-con-div">
    <ul v-for="item in universityClass">
      <li>
        <i class="el-icon-tickets"></i>
        <router-link :to="{ path: 'classesDetails',query: {id: item.cla.id}}">{{item.cla.name}}</router-link>
        <!-- <span>{{item.cla.university}}</span> -->
        <span>题库:{{item.order}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="es6">
export default {
  name: "recommendClass",
  props: {
    skipuniversityId: ""
  },
  data() {
    return {
      // 学校课程
      universityClass: []
    };
  },
  created: function() {
    var _this = this;
    _this.universityidClass();
  },
  methods: {
    // 通过学校ID查询所有课程并展示题库数量多的
    universityidClass: function() {
      var _this = this;
      _this
        .axios({
          method: "get",
          url: `http://192.168.1.27:8088/api/Class/Class`,
          async: false,
          params: {
            universityid: _this.$store.state.recommendClass.skipuniversityId
          },
          xhrFields: {
            withCredentials: true
          }
        })
        .then(function(res) {
          // _this.classes = res.data.data;
          // _this.classeslength = _this.classes.length;
          // _this.universityClass = res.data.data;
          sortByKey(res.data.data, "order");
          //数组对象排序
          function sortByKey(array, key) {
            array.sort(function(a, b) {
              var x = a[key];
              var y = b[key];
              return y < x ? -1 : x > y ? 1 : 0;
            });
          }
          for (var i = 0; i < 5; i++) {
            if (res.data.data[i].cla.id != _this.$route.query.id) {
              _this.universityClass.push(res.data.data[i]);
            } else {
              // _this.universityClass.push(res.data.data[6])
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

