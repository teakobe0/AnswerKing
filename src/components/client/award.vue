<style>
#award h3 {
  border-bottom: 1px solid #dddddd;
  color: #999999;
  line-height: 40px;
  padding-bottom: 6px;
  margin-bottom: 20px;
}
#award .pd-con-head-right {
  /* height:100%; */
  /* overflow-y: scroll; */
  /* width: 110%;
  height: 120%; */
}
.el-scrollbar__wrap {
  overflow-y: scroll;
  overflow-x: hidden;
  /* width: 110%;
  height: 120%; */
}
</style>


<template>
  <div id="award">
    <div class="pd-con-head-right">
        <h3>我的贡献</h3>
        <div class="MyAward">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed label="日期" width="150px">
              <template slot-scope="scope">
                <span>{{ scope.row.createTime | formatDate}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="您创建的项目" width="619px"></el-table-column>
            <el-table-column prop="type" label="类别" width="130"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="mini">编辑</el-button>
                <el-button
                  type="text"
                  size="mini"
                  style="color:#f95c5c;"
                  @click="handleDelete(scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
    </div>
  </div>
</template>
<script type="es6">
import { formatDate } from "@/common/js/date.js";
export default {
  name: "award",
  components: {},
  data() {
    //在ES6中添加数据是在return{}中
    return {
      tableData: []
    };
  },
  created: function() {
    const _this = this;
    this.queryOrder();
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  methods: {
    handleClick(row) {
      if (row.type == "学校") {
        this.$router.push({
          path: "/uploadAnswer",
          query: { id: row.id, type: 1 }
        });
      }
      if (row.type == "课程") {
        this.$router.push({
          path: "/uploadAnswer",
          query: { id: row.id, type: 2 }
        });
      }
      if (row.type == "题库集") {
        this.$router.push({
          path: "/uploadAnswer",
          query: { id: row.id, type: 3 }
        });
      }
    },
    handleDelete(row) {
      const _this = this;
      if (row.type == "学校") {
        this.$confirm("此操作将永久删除该学校, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            _this
              .axios({
                method: "delete",
                url: `${_this.URLport.serverPath}/UniversityTest/Del`,
                async: false,
                params: {
                  id: row.id
                },
                xhrFields: {
                  withCredentials: true
                },
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                }
              })
              .then(function(res) {
                console.log(res);
                if (res.data.status == 1) {
                  _this.queryOrder();
                  _this.$message({
                    message: "删除学校成功",
                    type: "success"
                  });
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          })
          .catch(() => {
            // this.$message({
            //   type: 'info',
            //   message: '已取消删除'
            // });
          });
      }
      if (row.type == "课程") {
        this.$confirm("此操作将永久删除该课程, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            _this
              .axios({
                method: "delete",
                url: `${_this.URLport.serverPath}/classTest/Del`,
                async: false,
                params: {
                  id: row.id
                },
                xhrFields: {
                  withCredentials: true
                },
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                }
              })
              .then(function(res) {
                console.log(res);
                if (res.data.status == 1) {
                  _this.queryOrder();
                  _this.$message({
                    message: "删除课程成功",
                    type: "success"
                  });
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          })
          .catch(() => {
            // this.$message({
            //   type: 'info',
            //   message: '已取消删除'
            // });
          });
      }
      if (row.type == "题库集") {
        this.$confirm("此操作将永久删除该题库集, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            _this
              .axios({
                method: "delete",
                url: `${_this.URLport.serverPath}/ClassInfoTest/Del`,
                async: false,
                params: {
                  id: row.id
                },
                xhrFields: {
                  withCredentials: true
                },
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                }
              })
              .then(function(res) {
                console.log(res);
                if (res.data.status == 1) {
                  _this.queryOrder();
                  _this.$message({
                    message: "删除题库集成功",
                    type: "success"
                  });
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          })
          .catch(() => {
            // this.$message({
            //   type: 'info',
            //   message: '已取消删除'
            // });
          });
      }
    },
    queryOrder() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/ClassInfoTest/Action`,
          async: false,
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          _this.tableData = res.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
