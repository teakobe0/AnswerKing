<style>
#orderHistory h3 {
  border-bottom: 1px solid #dddddd;
  color: #999999;
  line-height: 40px;
  padding-bottom: 6px;
  margin-bottom: 20px;
}
.indent div {
  overflow: hidden;
  word-wrap: break-word;
  line-height: 28px;
}
.indent p {
  display: inline;
}
.el-table, .el-table__expanded-cell {
    background-color: #fafafa !important;
}
.el-table th, .el-table tr {
    background-color: #fafafa !important;
}
</style>


<template>
  <div id="orderHistory">
    <div class="pd-con-head-right">
      <h3>购买记录</h3>
      <div class="indent">
        <template>
          <el-table :data="messages" style="width: 100%">
            <el-table-column prop="payTime" label="购买日期" width="250"></el-table-column>
            <el-table-column prop="name" label="购买月份" width="250"></el-table-column>
            <el-table-column prop="price" label="购买金额" width="250"></el-table-column>
            <el-table-column prop="currency" label="货币类型" width="250"></el-table-column>
          </el-table>
        </template>
      </div>
    </div>
  </div>
</template>
<script type="es6">
import { formatDate } from "@/common/js/date.js";

export default {
  name: "orderHistory",
  components: {},
  data() {
    //在ES6中添加数据是在return{}中
    return {
      messages: [],
    };
  },
  created: function() {
    var _this = this;
    _this.gainmessage();
  },
  methods: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    },
    // 检索购买记录
    gainmessage: function() {
      var _this = this;
      _this
        .axios({
          method: "get",
          url: `http://47.254.29.164:8088/api/Order/GetOrder`,
          async: false,
          xhrFields: {
            withCredentials: true
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(function(res) {
          _this.messages = res.data.data;
          for (var i = 0; i < _this.messages.length; i++) {
            _this.messages[i].payTime = _this.formatDate(
              _this.messages[i].payTime
            );
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
