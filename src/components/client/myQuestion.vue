<style>
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
</style>


<template>
  <div id="myQuestion">
    <div class="pd-con-head-right">
      <h3>我的问答</h3>
      <div class="myQuestion-con">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="我的提问" name="first">
            <el-table :data="quizTableData" border style="width: 100%">
              <el-table-column label="日期" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.time | formatDate}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="题目" width="619"></el-table-column>
              <el-table-column prop="reward" label="竞拍" width="80"></el-table-column>
              <el-table-column prop="attention" label="关注" width="80"></el-table-column>
              <el-table-column fixed="right" label="操作" width="120">
                <template slot-scope="scope">
                  <el-button type="text" size="mini">编辑</el-button>
                  <el-button type="text" size="mini">评价</el-button>
                  <el-button type="text" size="mini">客服</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="我的回答" name="first2">
            <el-table :data="quizTableData" border style="width: 100%">
              <el-table-column label="日期" width="100">
                <template slot-scope="scope">
                  <span>{{ scope.row.time | formatDate}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="题目" width="619"></el-table-column>
              <el-table-column prop="reward" label="竞拍" width="80"></el-table-column>
              <el-table-column prop="attention" label="关注" width="80"></el-table-column>
              <el-table-column fixed="right" label="操作" width="120">
                <template slot-scope="scope">
                  <el-button type="text" size="mini">编辑</el-button>
                  <el-button type="text" size="mini">评价</el-button>
                  <el-button type="text" size="mini">客服</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="我的关注" name="first3"></el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script type="es6">
import { formatDate } from "@/common/js/date.js";

export default {
  name: "myQuestion",
  components: {},
  data() {
    //在ES6中添加数据是在return{}中
    return {
      activeName: "first",
      quizTableData: [
        {
          name: "假如你很久没有见到喜欢的人了，你想对她说什么？",
          nameCon:
            "最近几年德云社每年都有新人通过各种方式红起来，2020你看好谁？觉得谁会以什么方式红起来？",
          answerNum: 70,
          browseNum: 1001,
          time: new Date(),
          reward: 50,
          attention: 10
        },
        {
          name: "假如有一天我迷路了你会对我说什么？",
          nameCon:
            "最近几年德云社每年都有新人通过各种方式红起来，2020你看好谁？觉得谁会以什么方式红起来？",
          answerNum: 90,
          browseNum: 2931,
          time: new Date(),
          reward: 50,
          attention: 10
        },
        {
          name: "有哪些可以写在课本上的励志短句?",
          nameCon:
            "最近几年德云社每年都有新人通过各种方式红起来，2020你看好谁？觉得谁会以什么方式红起来？",
          answerNum: 838,
          browseNum: 2003,
          time: new Date(),
          reward: 50,
          attention: 10
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
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  methods: {
    handleClick() {
      const _this = this;
    }
  }
};
</script>
