<style>
/*右侧*/
.pd-con-head-right {
  width: 1000px;
  height: 960px;
  float: left;
  padding: 20px 40px 0px 40px;
  overflow: hidden;
}

#changePassword h2 {
  border-bottom: 1px solid #dddddd;
  color: #999999;
  line-height: 40px;
  margin-bottom: 20px;
}
</style>


<template>
  <div id="changePassword">
    <div class="pd-con-head-right">
      <h2>修改密码</h2>
      <el-form ref="changePasswords" :model="changePasswords" label-width="80px">
        <el-form-item label="新密码">
          <el-col :span="11">
            <el-input v-model="changePasswords.NewPassword"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-col :span="11">
            <el-input v-model="changePasswords.RepeatPwd" @keyup.enter.native="StorageChgPassword"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="StorageChgPassword">修改密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script type="es6">
export default {
  name: "changePassword",
  components: {},
  data() {
    //在ES6中添加数据是在return{}中
    return {
      changePasswords: {
        NewPassword: "",
        RepeatPwd: ""
      }
    };
  },
  //页面的方法还是写在methods{}中
  methods: {
    StorageChgPassword: function() {
    var _this = this;
      this.axios({
        method: "put",
        url: `http://192.168.1.27:8088/api/client/ChangePwd`,
        async: false,
        params: {
          NewPassword: this.changePasswords.NewPassword,
          RepeatPwd: this.changePasswords.RepeatPwd
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
          _this.$message({
            message: "修改密码成功",
            type: "success"
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
