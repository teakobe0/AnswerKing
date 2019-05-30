<style>
/*右侧*/

#modifiedData h3 {
  border-bottom: 1px solid #dddddd;
  color: #999999;
  line-height: 40px;
  margin-bottom: 20px;
  padding-bottom: 6px;
}
</style>


<template>
  <div id="modifiedData">
    <div class="pd-con-head-right">
      <h3>修改资料</h3>
      <el-form ref="modifiedDatas" :model="modifiedDatas" label-width="80px">
        <el-form-item label="昵称">
          <el-col :span="11">
            <el-input v-model="modifiedDatas.Name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="QQ">
          <el-col :span="11">
            <el-input v-model="modifiedDatas.QQ"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="手机">
          <el-col :span="11">
            <el-input v-model="modifiedDatas.Tel"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="modifiedDatas.Sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="modifiedDatas.Birthday"
              style="width: 100%;"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">修改资料</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script type="es6">
import { formatDate } from "@/common/js/date.js";

export default {
  name: "modifiedData",
  components: {},
  data() {
    //在ES6中添加数据是在return{}中
    return {
      modifiedDatas: {
        Name: "",
        QQ: "",
        Tel: "",
        Sex: "",
        Birthday: ""
      }
    };
  },
  created: function() {
    if (localStorage.getItem("token")) {
      var _this = this;
      _this
        .axios({
          method: "get",
          url: `http://192.168.1.27:8088/api/Client/GetClient`,
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
          _this.modifiedDatas.Name = res.data.data.name;
          _this.modifiedDatas.QQ = res.data.data.qq;
          _this.modifiedDatas.Tel = res.data.data.tel;
          _this.modifiedDatas.Sex = res.data.data.sex;
          _this.modifiedDatas.Birthday = res.data.data.birthday;
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
    }
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  methods: {
    onSubmit() {
      var _this = this;
      this.axios({
        method: "put",
        url: `http://192.168.1.27:8088/api/client/clients`,
        async: false,
        data: _this.modifiedDatas,
        xhrFields: {
          withCredentials: true
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then(function(res) {
          _this.GetClient();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    GetClient: function() {
      var _this = this;
      if (localStorage.getItem("token")) {
        _this
          .axios({
            method: "get",
            url: `http://192.168.1.27:8088/api/Client/GetClient`,
            async: false,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(function(res) {
            _this.$store.state.modified.Name = res.data.data.name;
            _this.$message({
              message: "修改资料成功",
              type: "success"
            });
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
};
</script>
