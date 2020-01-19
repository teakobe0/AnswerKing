<style>
#personalData {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 276px;
}

.personalData-con {
  width: 1300px;
  margin: 0 auto;
  margin-top: 80px;
  overflow: hidden;
}

.pd-con-head {
  width: 200px;
  height: 980px;
  border-left: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  background-color: #fafafa;
  float: left;
  overflow: hidden;
}

.head-img {
  width: 140px;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 29.5px;
}

.head-img img {
  width: 140px;
  height: 140px;
  border-radius: 2px;
  z-index: 10;
}

.head-img a {
  display: inline-block;
  text-decoration: none;
  margin-top: 2px;
  font-size: 14px;
}

.head-img a:hover {
  color: #d91685;
}
.head-img p {
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 7px;
}

.fasttrack {
  width: 100%;
  height: 40px;
  background-color: #f2f2f2;
  font-weight: 700;
  line-height: 40px;
  text-indent: 20px;
  font-size: 15px;
  border-top: 2px solid #dcdcdc;
  border-bottom: 2px solid #dcdcdc;
}

.perSet li {
  width: 100%;
  height: 50px;
  border-bottom: 1px dashed #dbdbdb;
}

.perSet li a {
  width: 100%;
  height: 50px;
  display: inline-block;
  text-decoration: none;
  text-align: left;
  /* text-indent: 10px; */
  line-height: 50px;
  color: #666666;
  font-size: 14px;
}

.perSet li a:hover {
  background-color: #fff;
}

.perSet li a i {
  display: inline-block;
  margin-right: 5px;
  font-size: 16px;
  color: #5b9dfd;
}
.perSet li a span {
  height: 50px;
  margin-left: 30px;
}
/* 上传头像的CSS */
.avatar-uploader .el-upload {
  /* border: 1px dashed #d9d9d9; */
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 140px;
  height: 140px;
  line-height: 140px !important;
  text-align: center;
}
.avatar {
  width: 140px;
  height: 140px;
  display: block;
}
.head-imgs {
  position: relative;
}
.headShade {
  width: 140px;
  height: 140px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  position: absolute;
  top: 0px;
  border-radius: 3px;
}
</style>

<template>
  <div id="personalData" v-title data-title="个人信息-CourseWhale">
    <homeNav></homeNav>
    <div class="personalData-con">
      <div class="pd-con-head">
        <div class="head-img" @mouseenter="imgMouseenter" @mouseleave="imgMouseleave">
          <p>{{this.$store.state.modified.Name}}</p>
          <div class="head-imgs">
            <img :src="imageUrl" alt v-if="headShow == true" />
            <img src="../assets/头像.jpg" alt v-if="headShow == false" />
            <div class="headShade" v-show="imageShow == true">
              <el-upload
                class="avatar-uploader"
                :action="imgSite"
                :headers="myHeaders"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar"> -->
                <i class="el-icon-picture-outline avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </div>
        </div>
        <div class="fasttrack">快速通道</div>
        <ul class="perSet">
          <li>
            <router-link to="/personalData/basic">
              <span>
                <i class="el-icon-info"></i>个人信息
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/personalData/modifiedData">
              <span>
                <i class="el-icon-edit"></i>修改资料
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/personalData/changePassword">
              <span>
                <i class="el-icon-setting"></i>修改密码
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/personalData/inform">
              <span>
                <i class="el-icon-bell"></i>通知信息
                <span
                  style="margin-left:0px;"
                  v-show="this.$store.state.logo.message>=1"
                >({{this.$store.state.logo.message}})</span>
              </span>
            </router-link>
          </li>
          <!-- <li><router-link to="/personalData/award"><span><i class="el-icon-bell"></i>奖励</span></router-link></li> -->
          <!-- <li><a href="javascript:0"><span><i class="el-icon-tickets"></i>文件</span></a></li> -->
          <li>
            <router-link to="/personalData/attention">
              <span>
                <i class="el-icon-star-off"></i>我的关注
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/personalData/vip">
              <span>
                <i>
                  <img
                    src="../assets/会员1.png"
                    alt
                    style="width: 16px;height: 16px;line-height: 30px;vertical-align:middle"
                  />
                </i>成为会员
              </span>
            </router-link>
          </li>
          <li>
            <router-link to="/personalData/orderHistory">
              <span>
                <i class="el-icon-sold-out"></i>购买记录
              </span>
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <router-view />
      </div>
    </div>
    <homeFooter></homeFooter>
  </div>
</template>

<script type="es6">
import homeNav from "@/components/public/homeNav.vue";
import homeFooter from "@/components/public/homeFooter.vue";
import bluerightimg from "@/assets/5.jpg";
import { constants } from "crypto";
export default {
  name: "personalData",
  components: {
    homeNav,
    homeFooter,
    bluerightimg
  },
  data() {
    return {
      headShow: false,
      activeName: "first",
      value: [],
      names: "",
      imageUrl: "",
      imageShow: false,
      imgSite: this.URLport.serverPath+'/Client/UploadImg',
      myHeaders: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
  },
  created: function() {
    if (localStorage.getItem("token")) {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Client/GetClient`,
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
          if (res.data.data.image) {
            _this.imageUrl = _this.URLport.ImgPath + res.data.data.image;
            _this.headShow = true;
          } else {
            _this.headShow = false;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
    }
    document.documentElement.scrollTop = 0;
  },
  methods: {
    //鼠标移入
    imgMouseenter: function() {
      const _this = this;
      _this.imageShow = true;
    },
    // 鼠标移出
    imgMouseleave: function() {
      const _this = this;
      _this.imageShow = false;
    },
    // 上传成功
    handleAvatarSuccess(res, file) {
      const _this = this;
      
      _this.imageUrl = _this.URLport.ImgPath + res.data;
      _this.$store.state.loginPerson.loginPerson.image = res.data;
      _this.headShow = true;
      _this.$message({
        message: "修改成功",
        type: "success"
      });
    },
    // 上传之前
    beforeAvatarUpload(file) {
      //   this.$alert("您还未登录!请先登录!", "登录", {
      //     confirmButtonText: "确定",
      //     cancelButtonText: "取消",
      //     type: "warning"
      //   })
      //     .then(() => {
      //       console.log(1)
      //     })
      //     .catch(() => {
      //       console.log(2)
      //     });
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>