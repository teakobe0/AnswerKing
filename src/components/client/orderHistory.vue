<style>
.pd-con-head-right {
  width: 1000px;
  height: 960px;
  float: left;
  padding: 20px 40px 0px 40px;
  overflow: hidden;
}
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
      <h3>{{$t('personal.nav9')}}</h3>
      <div class="indent">
        <template>
          <el-table :data="messages" style="width: 100%" :empty-text="$t('orderHistory.con5')">
            <el-table-column prop="payTime" :label="$t('orderHistory.con1')" width="250"></el-table-column>
            <el-table-column prop="name" :label="$t('orderHistory.con2')" width="250"></el-table-column>
            <el-table-column prop="price" :label="$t('orderHistory.con3')" width="250"></el-table-column>
            <el-table-column prop="currency" :label="$t('orderHistory.con4')" width="250"></el-table-column>
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
    const _this = this;
    _this.gainmessage();
  },
  methods: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    },
    // 检索购买记录
    gainmessage: function() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Order/GetOrder`,
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
