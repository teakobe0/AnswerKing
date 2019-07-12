<style>
#attention h3 {
  border-bottom: 1px solid #dddddd;
  color: #999999;
  line-height: 40px;
  padding-bottom: 6px;
  margin-bottom: 20px;
}
.MyAttention div {
  word-wrap: break-word;
  line-height: 28px;
}
.indent p {
  display: inline;
}
.MyAttention a {
  text-decoration: none;
  color: #000;
  display: inline-block;
  margin-top: 5px;
}
.MyAttention a:hover {
  color: rgb(36, 119, 228);
}
.MyAttention span {
  float: right;
}
.MyAttention button {
  float: right;
}
.el-table,
.el-table__expanded-cell {
  background-color: #fafafa !important;
}
.el-table th,
.el-table tr {
  background-color: #fafafa !important;
}
.attentionNull {
  text-align: center;
  color: #136bd3;
}
</style>


<template>
  <div id="attention">
    <div class="pd-con-head-right">
      <h3>我的关注</h3>
      <div class="MyAttention">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="关注的课程" name="first">
            <div class="attentionNull" v-if="attNull1 == false">暂无关注的课程</div>
            <div v-for="item in classAtt">
              <router-link :to="{path:'/classesDetails',query:{id:item.typeId}}">{{item.name}}</router-link>
              <!-- <span>{{item.createTime | formatDate}}</span> -->
              <el-button size="mini" @click="delAttention(item.typeId)">取消关注</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="关注的题库" name="second">
            <div class="attentionNull" v-if="attNull2 == false">暂无关注的题库集</div>
            <div v-for="item in questionAtt">
              <router-link
                :to="{path:'/serchDetailsContent',query:{id:item.typeIds[0],classInfoId:item.typeIds[1]}}"
              >{{item.name}}</router-link>
              <!-- <span>{{item.createTime | formatDate}}</span> -->
              <el-button size="mini" @click="delAttention(item.typeId)">取消关注</el-button>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
      </div>
    </div>
  </div>
</template>
<script type="es6">
import { formatDate } from "@/common/js/date.js";

export default {
  name: "attention",
  components: {},
  data() {
    //在ES6中添加数据是在return{}中
    return {
      activeName: "first",
      messages: [],
      classAtt: [],
      questionAtt: [],
      attNull1: false,
      attNull2: false
    };
  },
  created: function() {
    var _this = this;
    _this.retrieveAttention();
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  methods: {
    handleClick: function() {},
    delAttention: function(item) {
      var _this = this;
      _this
        .axios({
          method: "delete",
          url: `http://192.168.1.27:8088/api/Focus/Cancel`,
          async: false,
          params: {
            typeid: item
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
    },
    // 检索关注
    retrieveAttention: function() {
      var _this = this;
      _this.classAtt = [];
      _this.questionAtt = [];
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
            console.log(res);
            for (var i = 0; i < res.data.data.length; i++) {
              _this.$set(res.data.data[i], "typeIds", []);
              if (res.data.data[i].type == 1) {
                _this.classAtt.push(res.data.data[i]);
                _this.attNull1 = true;
              } else {
                var v = res.data.data[i].typeId.split(",");
                res.data.data[i].typeIds = v;
                _this.questionAtt.push(res.data.data[i]);
                _this.attNull2 = true;
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
