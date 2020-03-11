<style>
.questionDetails {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 276px;
  overflow: hidden;
}

.qd-con {
  margin-top: 80px;
  overflow: hidden;
  background: #f6f6f6;
}
.qd-title-back {
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  margin-bottom: 20px;
  background: #fff;
}
.qd-title {
  width: 1300px;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
  overflow: hidden;
}
.qd-title-left {
  display: inline-block;
  width: 980px;
}
.qd-title-right {
  text-align: center;
  position: absolute;
  right: 0px;
  top: 20px;
}
.qd-title-right-1 {
  float: left;
  padding: 0 8px;
  width: 84px;
}
.qd-title-right-1 p {
  color: #8590a6;
}
.qd-title-right-1 div {
  color: #000;
  font-weight: 700;
}
.qd-title-right-2 {
  float: left;
  padding: 0 8px;
  width: 84px;
  border-left: 1px solid #ebebeb;
}
.qd-title-right-2 p {
  color: #8590a6;
}
.qd-title-right-2 div {
  color: #000;
  font-weight: 700;
}
.qd-title h2 {
  margin-bottom: 11px;
}
.qd-title p {
  margin-bottom: 11px;
}
.qd-attention {
}
.ql-an {
  color: #0084f0 !important;
  border: 1px solid #0084f0 !important;
}
/* 编辑区域 */
.qd-editCon {
  width: 1300px;
  margin: 0 auto;
  overflow: hidden;
}
.qd-editNull {
  width: 900px;
  height: 300px;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
.qd-editNull p {
  line-height: 300px;
  text-align: center;
  color: #8590a6;
}
.qd-edit {
  width: 900px;
}
.qd-edit-submit {
  margin-top: 11px !important;
  float: right;
  margin-bottom: 20px !important;

}

/* 编辑区域结束 */
/* 竞拍遮罩区域 */
.qd-auctionShade {
  width: 380px;
  height: 300px;
  float: right;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
.auctionShade-con {
  /*width: 300px;*/
  height: 300px;
  overflow: hidden;
  /*margin: 0 auto;*/
  background-color: #fff;
  /*position: relative;*/
  /*top: 50%;*/
  /*transform: translateY(-50%);*/
  /*border-radius: 4px;*/
}
.closeAuctionShade {
  /*position: absolute;*/
  /*right: -50px;*/
  /*top: 10px;*/
  /*color: #fff;*/
  /*cursor: pointer;*/
  /*font-size: 30px;*/
}
.autionShadeInfo {
  height: 50px;
  padding: 16px 20px 16px 20px;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid #f6f6f6;
}
.autionShadeInfo img {
  width: 50px;
  height: 50px;
  vertical-align: top;
  margin-right: 10px;
}
.auctionShade-con-Info {
  /*flex: 1 1;*/
  overflow-y: scroll;
  overflow-x: hidden;
  height: 300px;
}
.auctionShade-con-TR {
  position: absolute;
  bottom: 16px;
  left: 80px;

}
.auctionShade-con-time {
  margin-right: 10px;
}
.privateLetter {
  color: #cc8500;
  font-size: 22px;
  cursor: pointer;
}
.privateLetter:hover {
  color: #f3e901;
}
/* 竞拍遮罩区域结束 */
</style>
<template>
  <div class="questionDetails">
    <homeNav msg="登录/注册" />
    <div v-title data-title="问答大厅-CourseWhale"></div>
    <div class="qd-con">
      <div class="qd-title-back">
        <div class="qd-title">
          <div class="qd-title-left">
            <h2>{{qlList.name}}</h2>
            <p>{{qlList.nameCon}}</p>
          </div>
          <div class="qd-title-right">
            <div class="qd-title-right-1">
              <p>关注者</p>
              <div>100</div>
            </div>
            <div class="qd-title-right-2">
              <p>竞拍者</p>
              <div>20</div>
            </div>
          </div>
          <div>
            <el-button type="primary" size="medium" class="qd-attention">关注问题</el-button>
            <el-button icon="el-icon-edit" size="medium" class="ql-an" @click="myAnswer">写回答</el-button>
          </div>
        </div>
      </div>

      <div class="qd-editCon">
        <div style="float: left">
          <div class="qd-editNull" v-show="qdeditShow == false">
            <p>暂时还没有回答,快去回答吧!</p>
          </div>
          <div class="qd-edit" v-show="qdeditShow == true">
            <editor id="tinymce" v-model="value" :init="init"></editor>
            <el-button type="primary" class="qd-edit-submit">提交回答</el-button>
          </div>
        </div>

        <div class="qd-auctionShade" v-show="auctionShow">
          <div class="auctionShade-con">
            <div class="auctionShade-con-Info">
              <div v-for="item in autionInfo" class="autionShadeInfo">
                <img src="../assets/5.jpg" alt />
                <span>{{item.name}}</span>
                <div class="auctionShade-con-TR">
                  <span class="auctionShade-con-time el-icon-time">{{item.time | formatDate}}</span>
                  <span class="auctionShade-con-reward el-icon-coin">{{item.rewardNum}}</span>
                </div>
                <el-button type="primary"  size="mini" style="float:right;margin-top:0px;">选他答</el-button>
                <i class="el-icon-chat-line-round privateLetter" style="float:right;margin-top:2px;margin-right: 11px;" title="发私信"></i>
              </div>
<!--              <div class="closeAuctionShade el-icon-close" @click="auction"></div>-->
            </div>
          </div>
        </div>
      </div>

    </div>

    <homeFooter></homeFooter>
  </div>
</template>

<script type="es6">
// @ is an alias to /src
import homeNav from "@/components/public/homeNav.vue";
import homeFooter from "@/components/public/homeFooter.vue";
import { formatDate } from "@/common/js/date.js";
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";
import "tinymce/plugins/image"; // 插入上传图片插件
// import "tinymce/plugins/media"; // 插入视频插件
import "tinymce/plugins/table"; // 插入表格插件
import "tinymce/plugins/lists"; // 列表插件
import "tinymce/plugins/wordcount"; // 字数统计插件

export default {
  name: "questionDetails",
  components: {
    homeNav,
    homeFooter,
    Editor
  },
  props: {
    value: {
      type: String,
      default: "请输入内容"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default: "lists image table wordcount"
    },
    toolbar: {
      type: [String, Array],
      default:
        "undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat"
    }
  },
  data() {
    return {
      init: {
        language_url: "/tinymce/langs/zh_CN.js",
        language: "zh_CN",
        skin_url: "/tinymce/skins/ui/oxide",
        // skin_url: '/tinymce/skins/ui/oxide-dark',//暗色系
        height: 300,
        plugins: this.plugins,
        toolbar: this.toolbar,
        branding: false,
        menubar: false,
        // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
        images_upload_handler: (blobInfo, success, failure) => {
          const img = "data:image/jpeg;base64," + blobInfo.base64();
          success(img);
        }
      },
      myValue: this.value,
      qlList: {
        name: "假如你很久没有见到喜欢的人了，你想对她说什么？",
        nameCon:
          "如题，如果只给你30秒的时间说出3部你觉得最好的电影，会是哪三部？30秒内想得到3部才算，超出时间的不能算",
        answerNum: 70,
        browseNum: 1001,
        time: new Date()
      },
      qdeditShow: false,
      auctionShow: true,
      // 竞拍者信息
      autionInfo: [
        {
          name: "小明",
          time: new Date(),
          rewardNum: 20
        },
        {
          name: "小张",
          time: new Date(),
          rewardNum: 20
        },
        {
          name: "小张",
          time: new Date(),
          rewardNum: 20
        },
        {
          name: "小张",
          time: new Date(),
          rewardNum: 20
        },
        {
          name: "小张",
          time: new Date(),
          rewardNum: 20
        },
        {
          name: "小张",
          time: new Date(),
          rewardNum: 20
        },
        {
          name: "小张",
          time: new Date(),
          rewardNum: 20
        },
        {
          name: "小张",
          time: new Date(),
          rewardNum: 20
        },
        {
          name: "小张",
          time: new Date(),
          rewardNum: 20
        },
        {
          name: "小张",
          time: new Date(),
          rewardNum: 20
        },
        {
          name: "小张",
          time: new Date(),
          rewardNum: 20
        }
      ]
    };
  },
  created: function() {
    const _this = this;
  },
  filters: {
    formatDate: function(time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd-hh:mm");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("onClick", e, tinymce);
    },
    // 可以添加一些自己的自定义事件，如清空内容
    clear() {
      this.myValue = "";
    },
    // 写回答按钮
    myAnswer() {
      const _this = this;
      _this.qdeditShow = true;
    },
    // 显示竞拍者遮罩
    auction() {
      const _this = this;
      // _this.auctionShow = !_this.auctionShow;

    }
  },
  mounted() {
    tinymce.init({});
  },
  watch: {
    value(newValue) {
      this.myValue = newValue;
    },
    myValue(newValue) {
      this.$emit("input", newValue);
    }
  }
};
</script>
