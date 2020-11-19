<style>
.myQuestion-right {
  width: 1000px;
  float: left;
  padding: 20px 40px 0px 40px;
  overflow: hidden;
}
#myQuestion h3 {
  border-bottom: 1px solid #dddddd;
  color: #999999;
  line-height: 40px;
  padding-bottom: 6px;
  margin-bottom: 20px;
}
.message {
  margin-top: 24px;
}
#myQuestion .quiz .el-button {
  margin-left: 0px !important;
  margin-right: 10px !important;
}
.myQuestion-con a {
  text-decoration: none;
  color: #606266;
}
.myQuestion-con a:hover {
  color: #0b4ed4;
}
.mynextpage {
  text-align: center;
  margin-top: 20px;
}
.mynextpage .el-pagination button:disabled {
  background-color: #fafafa !important;
}
.mynextpage .el-pagination .btn-next,
.el-pagination .btn-prev {
  background-color: #fafafa !important;
}
.mynextpage .el-dialog,
.el-pager li {
  background-color: #fafafa !important;
}
#myQuestion .el-table th,
.el-table tr {
  background-color: #fafafa !important;
}
#myQuestion .el-table,
.el-table__expanded-cell {
  background-color: #fafafa !important;
}
</style>


<template>
  <div id="myQuestion">
    <div class="myQuestion-right">
      <h3>{{$t('question.con18')}}</h3>
      <div class="myQuestion-con">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="$t('question.con138')" name="first">
            <el-table
              :data="quizTableData"
              border
              style="width: 100%"
              class="quiz"
              v-if="quizShow"
            >
              <el-table-column :label="$t('question.con148')" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.createTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con149')">
                <template slot-scope="scope">
                  <router-link :to="'/questionDetails/' + scope.row.id">{{
                    scope.row.title
                  }}</router-link>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con150')" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.currency }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con151')" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.bnum }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con152')" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.endTime | formatDate }}</span>
                </template>
              </el-table-column>
            </el-table>
            <div class="mynextpage">
              <div class="block">
                <el-pagination
                  @current-change="handleCurrentChange"
                  :page-size="pagesizes"
                  layout="total, prev, pager, next"
                  :total="pageTotal"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="$t('question.con139')" name="first2">
            <el-table
              :data="quizTableData"
              border
              style="width: 100%"
              class="quiz"
              v-if="quizShow"
            >
              <el-table-column :label="$t('question.con148')" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.createTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con149')">
                <template slot-scope="scope">
                  <router-link :to="'/questionDetails/' + scope.row.id">{{
                    scope.row.title
                  }}</router-link>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con150')" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.currency }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con151')" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.bnum }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con152')" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.endTime | formatDate }}</span>
                </template>
              </el-table-column>
            </el-table>
            <div class="mynextpage">
              <div class="block">
                <el-pagination
                  @current-change="handleCurrentChange"
                  :page-size="pagesizes"
                  layout="total, prev, pager, next"
                  :total="pageTotal"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="$t('question.con140')" name="first3">
            <el-table
              :data="quizTableData"
              border
              style="width: 100%"
              class="quiz"
              v-if="quizShow"
            >
              <el-table-column :label="$t('question.con148')" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.createTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con149')">
                <template slot-scope="scope">
                  <router-link :to="'/questionDetails/' + scope.row.id">{{
                    scope.row.title
                  }}</router-link>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con150')" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.currency }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con151')" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.bnum }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con152')" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.endTime | formatDate }}</span>
                </template>
              </el-table-column>
              <!-- <el-table-column label="状态" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.type }}</span>
                </template>
              </el-table-column> -->
            </el-table>
            <div class="mynextpage">
              <div class="block">
                <el-pagination
                  @current-change="handleCurrentChange"
                  :page-size="pagesizes"
                  layout="total, prev, pager, next"
                  :total="pageTotal"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="$t('question.con141')" name="first4">
            <el-table
              :data="quizTableData"
              border
              style="width: 100%"
              class="quiz"
              v-if="quizShow"
            >
              <el-table-column :label="$t('question.con148')" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.createTime | formatDate }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con149')">
                <template slot-scope="scope">
                  <router-link :to="'/questionDetails/' + scope.row.id">{{
                    scope.row.title
                  }}</router-link>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con150')" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.currency }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con151')" width="70">
                <template slot-scope="scope">
                  <span>{{ scope.row.bnum }}</span>
                </template>
              </el-table-column>
              <el-table-column :label="$t('question.con152')" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.endTime | formatDate }}</span>
                </template>
              </el-table-column>
            </el-table>
            <div class="mynextpage">
              <div class="block">
                <el-pagination
                  @current-change="handleCurrentChange"
                  :page-size="pagesizes"
                  layout="total, prev, pager, next"
                  :total="pageTotal"
                ></el-pagination>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script type="es6">
import { formatDate } from "@/common/js/date.js";
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/icons/default/icons.min.js";
import "tinymce/themes/silver";
import "tinymce/plugins/code";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/colorpicker";
import "tinymce/plugins/textcolor";
export default {
  name: "myQuestion",
  components: {
    Editor,
  },
  props: {
    value: {
      type: String,
      default: "写回答...",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    plugins: {
      type: [String, Array],
      default: "colorpicker textcolor wordcount contextmenu",
    },
    toolbar: {
      type: [String, Array],
      default:
        "bold italic underline strikethrough | fontsizeselect | forecolor backcolor",
    },
  },
  data() {
    //在ES6中添加数据是在return{}中
    return {
      activeName: "first",
      quizShow: false,
      quizTableData: [],
      // 我的竞拍
      // 评价内容
      pagenums: 1,
      pagesizes: 13,
      pageTotal: 0,
      status:0,
      auction: [],
    };
  },
  created: function () {
    const _this = this;
    if (this.$route.query.type == "auction") {
      _this.activeName = "first";
      _this.auctionlist();
    } else if (this.$route.query.type == "tofinish") {
      _this.status = 3;
      _this.activeName = "first2";
      _this.quizList();
    } else if (this.$route.query.type == "evaluate") {
      _this.status = 4;
      _this.activeName = "first3";
      _this.quizList();
    } else if (this.$route.query.type == "finish") {
      _this.status = 6;
      _this.activeName = "first4";
      _this.quizList();
    }else {
      _this.quizList();
    }
  },
  filters: {
    formatDate: function (time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
  methods: {
    handleClick(tab, event) {
      const _this = this;
      _this.pagenums = 1;
      _this.pagesizes = 13;
      if (tab.name == "first") {
        _this.auctionlist();
      }else if(tab.name == "first2"){
        _this.status = 3;
        _this.quizList();
      }else if(tab.name == "first3"){
        _this.status = 4;
        _this.quizList();
      }else if(tab.name == "first4"){
        _this.status = 6;
        _this.quizList();
      }
      
    },
    formatDate: function (time) {
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
    // 页数跳转后触发
    handleCurrentChange(val) {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Answer/MyAnswer`,
          async: false,
          params: {
            pagenum: val,
            pagesize: _this.pagesizes,
            status:_this.status
          },
          xhrFields: {
            withCredentials: true,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(function (res) {
          if (res.data.status == 1) {
            _this.quizTableData = res.data.data.data;
            _this.quizShow = true;
            for (var i = 0; i < _this.quizTableData.length; i++) {
              _this.$set(_this.quizTableData[i], "type", "");
              if (_this.quizTableData[i].status == 1) {
                _this.quizTableData[i].type = "保存";
              }
              if (_this.quizTableData[i].status == 2) {
                _this.quizTableData[i].type = "正在竞拍";
              }
              if (_this.quizTableData[i].status == 3) {
                _this.quizTableData[i].type = "已选竞拍者";
              }
              if (_this.quizTableData[i].status == 4) {
                _this.quizTableData[i].type = "已回答";
              }
              if (_this.quizTableData[i].status == 5) {
                _this.quizTableData[i].type = "申请客服";
              }
              if (_this.quizTableData[i].status == 6) {
                _this.quizTableData[i].type = "已完成";
              }
              if (_this.quizTableData[i].status == 7) {
                _this.quizTableData[i].type = "已关闭";
              }
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 检索问题列表
    quizList() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Answer/MyAnswer`,
          async: false,
          params: {
            pagenum: _this.pagenums,
            pagesize: _this.pagesizes,
            status:_this.status
          },
          xhrFields: {
            withCredentials: true,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(function (res) {
          if (res.data.status == 1) {
            _this.quizTableData = res.data.data.data;
            _this.pageTotal = res.data.data.pageTotal;
            _this.quizShow = true;
            for (var i = 0; i < _this.quizTableData.length; i++) {
              _this.$set(_this.quizTableData[i], "type", "");
              if (_this.quizTableData[i].status == 1) {
                _this.quizTableData[i].type = "保存";
              }
              if (_this.quizTableData[i].status == 2) {
                _this.quizTableData[i].type = "正在竞拍";
              }
              if (_this.quizTableData[i].status == 3) {
                _this.quizTableData[i].type = "已选竞拍者";
              }
              if (_this.quizTableData[i].status == 4) {
                _this.quizTableData[i].type = "已回答";
              }
              if (_this.quizTableData[i].status == 5) {
                _this.quizTableData[i].type = "申请客服";
              }
              if (_this.quizTableData[i].status == 6) {
                _this.quizTableData[i].type = "已完成";
              }
              if (_this.quizTableData[i].status == 7) {
                _this.quizTableData[i].type = "已关闭";
              }
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    // 我竞拍的问题列表
    auctionlist() {
      const _this = this;
      _this
        .axios({
          method: "get",
          url: `${_this.URLport.serverPath}/Bidding/MyBidding`,
          async: false,
          xhrFields: {
            withCredentials: true,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(function (res) {
          if (res.data.status == 1) {
            _this.quizTableData = res.data.data.data;
            _this.pageTotal = res.data.data.pageTotal;
            _this.quizShow = true;
            for (var i = 0; i < _this.quizTableData.length; i++) {
              _this.$set(_this.quizTableData[i], "type", "");
              if (_this.quizTableData[i].status == 1) {
                _this.quizTableData[i].type = "保存";
              }
              if (_this.quizTableData[i].status == 2) {
                _this.quizTableData[i].type = "正在竞拍";
              }
              if (_this.quizTableData[i].status == 3) {
                _this.quizTableData[i].type = "已选竞拍者";
              }
              if (_this.quizTableData[i].status == 4) {
                _this.quizTableData[i].type = "已回答";
              }
              if (_this.quizTableData[i].status == 5) {
                _this.quizTableData[i].type = "申请客服";
              }
              if (_this.quizTableData[i].status == 6) {
                _this.quizTableData[i].type = "已完成";
              }
              if (_this.quizTableData[i].status == 7) {
                _this.quizTableData[i].type = "已关闭";
              }
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  watch: {
    value(newValue) {
      this.myValue = newValue;
    },
    myValue(newValue) {
      this.$emit("input", newValue);
    },
  },
};
</script>
