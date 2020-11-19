<style>
.award-right {
  width: 1000px;
  float: left;
  padding: 20px 40px 0px 40px;
  overflow: hidden;
}
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
#award .el-table th,
.el-table tr {
  background-color: #fafafa !important;
}
#award .el-table,
.el-table__expanded-cell {
  background-color: #fafafa !important;
}
</style>


<template>
  <div id="award">
    <div class="award-right">
      <h3>{{$t('personal.nav6')}}</h3>
      <div class="MyAward">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed :label="$t('award.con1')" width="150px">
            <template slot-scope="scope">
              <span>{{ scope.row.createTime | formatDate}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="name" :label="$t('award.con2')" width="560px"></el-table-column>
          <el-table-column prop="type" :label="$t('award.con3')" ></el-table-column>
          <el-table-column prop="type" :label="$t('award.con4')" >
            <template slot-scope="scope">
              <span>{{ scope.row.statusType}}</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" :label="$t('award.con5')" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="mini">{{$t('award.con14')}}</el-button>
              <el-button
                type="text"
                size="mini"
                style="color:#f95c5c;"
                @click="handleDelete(scope.row)"
              >{{$t('award.con15')}}</el-button>
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
    // 点击编辑跳转对应界面
    handleClick(row) {
      this.$store.state.logo.uaShow = true;
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
    // 点击删除
    handleDelete(row) {
      const _this = this;
      if (row.type == "学校") {
        _this.$confirm(_this.$t('award.con21'), _this.$t('award.con16'), {
          confirmButtonText: _this.$t('basic.con14'),
          cancelButtonText: _this.$t('basic.con13'),
          type: "warning"
        })
          .then(() => {
            _this
              .axios({
                method: "delete",
                url: `${_this.URLport.serverPath}/University/Del`,
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
                if (res.data.status == 1) {
                  _this.queryOrder();
                  _this.$message({
                    message: _this.$t('award.con18'),
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
        _this.$confirm(_this.$t('award.con22'), _this.$t('award.con16'), {
          confirmButtonText: _this.$t('basic.con14'),
          cancelButtonText: _this.$t('basic.con13'),
          type: "warning"
        })
          .then(() => {
            _this
              .axios({
                method: "delete",
                url: `${_this.URLport.serverPath}/class/Del`,
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
                if (res.data.status == 1) {
                  _this.queryOrder();
                  _this.$message({
                    message: _this.$t('award.con19'),
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
        _this.$confirm(_this.$t('award.con17'), _this.$t('award.con16'), {
          confirmButtonText: _this.$t('basic.con14'),
          cancelButtonText: _this.$t('basic.con13'),
          type: "warning"
        })
          .then(() => {
            _this
              .axios({
                method: "delete",
                url: `${_this.URLport.serverPath}/ClassInfo/Del`,
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
                if (res.data.status == 1) {
                  _this.queryOrder();
                  _this.$message({
                    message: _this.$t('award.con20'),
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
    // 获取贡献列表
    queryOrder() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/ClassInfo/Action`,
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
          for (var i = 0; i < _this.tableData.length; i++) {
            _this.$set(_this.tableData[i], "statusType", "");
            if(_this.tableData[i].type == "题库集"){
              if(_this.tableData[i].status == 0){
                _this.tableData[i].statusType = _this.$t('award.con9')
              }
              if(_this.tableData[i].status == 1){
                _this.tableData[i].statusType = _this.$t('award.con12')
              }
              if(_this.tableData[i].status == 2){
                _this.tableData[i].statusType = _this.$t('award.con11')
              }
              if(_this.tableData[i].status == 3){
                _this.tableData[i].statusType = _this.$t('award.con13')
              }
            }
            if(_this.tableData[i].type != "题库集"){
              if(_this.tableData[i].status == 0){
                _this.tableData[i].statusType = _this.$t('award.con10')
              }
              if(_this.tableData[i].status == 1){
                _this.tableData[i].statusType = _this.$t('award.con11')
              }
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  watch:{
    '$i18n.locale'(){
      this.queryOrder()
    }
  }
};
</script>
