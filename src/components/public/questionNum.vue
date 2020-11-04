<style>
/* 右边提问 */
.ql-right-quitBT {
  width: 100% !important;
  background-color: #2fc781 !important;
  border: 1px solid #2fc781;
  font-size: 16px;
}
.ql-right-quitBT:hover {
  border: 1px solid #2fc781;
  background-color: #47c78b !important;
}
.qlBodyRight {
  float: right;
  width: 224px;
}
.qlBodyRightTop {
  width: 224px;
  margin-bottom: 35px;
}
.qlBodyRightTitle {
  /* margin-bottom: 10px; */
}
.qlBodyRightTitle span {
  font-weight: 700;
}
.qlBodyRightTitle .qlBodyRightI1 {
  margin-right: 16px;
  vertical-align: middle;
}
.qlBodyRightTitle .qlBodyRightI2 {
  float: right;
  margin-top: 5.5px;
}
.qlBodyRightBott a {
  display: block;
  margin-left: 37px;
  margin-top: 10px;
  text-decoration: none;
  color: #000;
  font-size: 14px;
}
.qlBodyRightBott a:hover {
    color: rgb(40, 176, 255);
}
.qlBodyRightBott span {
  display: inline-block;
  color: #b3b3b3;
  width: 30px;
  font-size: 12px;
  text-align: center;
  background: #e5e5e5;
  border-radius: 4px;
  margin-left: 5px;
}
.queNums {
  display: inline-block;
  color: #fff;
  width: 20px;
  font-size: 14px;
  text-align: center;
  background: #f63f40;
  border-radius: 2px;
  margin-left: 10px;
}
</style>

<template>
  <div class="questionNum">
    <div class="qlBodyRightTop" v-if="qdConRigtS">
      <div>
        <div class="qlBodyRightTitle">
          <img class="qlBodyRightI1" src="../../assets/问答3.jpg" alt />
          <span>{{$t('question.con13')}}</span>
          <span class="queNums" v-show="quedistinction>0">{{quedistinction}}</span>
          <img class="qlBodyRightI2" src="../../assets/问答5.jpg" alt />
        </div>
        <div class="qlBodyRightBott">
          <router-link :to="{path:'/personalData/myQuestion',query: {type: 'auction'}}">
            {{$t('question.con14')}}
            <span v-show="auctions != 0">{{auctions}}</span>
          </router-link>
          <router-link :to="{path:'/personalData/myQuestion',query: {type: 'tofinish'}}">
            {{$t('question.con15')}}
            <span v-show="toAnswer != 0">{{toAnswer}}</span>
          </router-link>
          <router-link :to="{path:'/personalData/myQuestion',query: {type: 'evaluate'}}">
            {{$t('question.con16')}}
            <span v-show="haveToAnswer != 0">{{haveToAnswer}}</span>
          </router-link>
          <router-link :to="{path:'/personalData/myQuestion',query: {type: 'finish'}}">
            {{$t('question.con17')}}
            <span v-show="noAnswer != 0">{{noAnswer}}</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="qlBodyRightTop" v-if="qdConRigtS">
      <div>
        <div class="qlBodyRightTitle">
          <img class="qlBodyRightI1" src="../../assets/问答4.jpg" alt />
          <span>{{$t('question.con18')}}</span>
          <span class="queNums" v-show="ansdistinction>0">{{ansdistinction}}</span>
          <img class="qlBodyRightI2" src="../../assets/问答5.jpg" alt />
        </div>
        <div class="qlBodyRightBott">
          <router-link :to="{path:'/personalData/myAnswers',query: {type: 'auction'}}">
            {{$t('question.con138')}}
            <span v-show="paAuctions != 0">{{paAuctions}}</span>
          </router-link>
          <router-link :to="{path:'/personalData/myAnswers',query: {type: 'tofinish'}}">
            {{$t('question.con139')}}
            <span v-show="paToAnswer != 0">{{paToAnswer}}</span>
          </router-link>
          <router-link :to="{path:'/personalData/myAnswers',query: {type: 'evaluate'}}">
            {{$t('question.con140')}}
            <span v-show="paHaveToAnswer != 0">{{paHaveToAnswer}}</span>
          </router-link>
          <router-link :to="{path:'/personalData/myAnswers',query: {type: 'finish'}}">
            {{$t('question.con141')}}
            <span v-show="PaNoAnswer != 0">{{PaNoAnswer}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="es6">
export default {
  name: "questionNum",
  components: {},
  props: {
    msg: String
  },
  data() {
    return {
      qdConRigtS: false,
      // 当前登录人提出的问题数量
      auctions: 0,
      toAnswer: 0,
      haveToAnswer: 0,
      noAnswer:0,
      // 当前登录人参与的问题数量
      paAuctions: 0,
      paToAnswer: 0,
      paHaveToAnswer: 0,
      PaNoAnswer:0,
      Questionsnum: "",
      Answernum: "",
      quedistinction: 0,
      ansdistinction: 0
    };
  },
  created: function() {
    const _this = this;
    if (localStorage.token) {
      _this.qdConRigtS = true;
      _this.QuestionsStatus();
      _this.AnswerStatus();
      _this.Questionsnum = setInterval(_this.Questionscirculation, 15000);
      _this.Answernum = setInterval(_this.Answercirculation, 15000);
    }
  },
  methods: {
    // 检索问题数量
    Questionscirculation() {
      const _this = this;
      if (localStorage.token) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Questions/QuestionStatus`,
            async: false,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(function(res) {
            if (res.data.status == 1) {
              _this.auctions = res.data.data.bidding;
              _this.toAnswer = res.data.data.no;
              _this.haveToAnswer = res.data.data.evaluate;
              _this.noAnswer = res.data.data.complete;
              _this.$store.state.queNum.toAnswer =
                _this.auctions + _this.toAnswer + _this.haveToAnswer + _this.noAnswer;
              if (
                _this.$store.state.queNum.toAnswer >
                _this.$store.state.queNum.auctions
              ) {
                _this.quedistinction =
                  _this.$store.state.queNum.toAnswer -
                  _this.$store.state.queNum.auctions;
              }
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    // 检索回答数量
    Answercirculation() {
      const _this = this;
      if (localStorage.token) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Questions/AnswerStatus`,
            async: false,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(function(res) {
            if (res.data.status == 1) {
              _this.paAuctions = res.data.data.bidding;
              _this.paToAnswer = res.data.data.no;
              _this.paHaveToAnswer = res.data.data.evaluate;
              _this.PaNoAnswer = res.data.data.complete;



              _this.$store.state.queNum.paToAnswer =
                _this.paAuctions + _this.paToAnswer + _this.paHaveToAnswer + _this.PaNoAnswer;
              if (
                _this.$store.state.queNum.paAuctions >
                _this.$store.state.queNum.paToAnswer
              ) {
                _this.ansdistinction =
                  _this.$store.state.queNum.paAuctions -
                  _this.$store.state.queNum.paToAnswer;
              }
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    // 检索当前登录人我提出的问题数量
    QuestionsStatus() {
      const _this = this;
      if (localStorage.token) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Questions/QuestionStatus`,
            async: false,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(function(res) {
            if (res.data.status == 1) {
              _this.auctions = res.data.data.bidding;
              _this.toAnswer = res.data.data.no;
              _this.haveToAnswer = res.data.data.evaluate;
              _this.noAnswer = res.data.data.complete;
              _this.$store.state.queNum.auctions =
                _this.auctions + _this.toAnswer + _this.haveToAnswer + _this.noAnswer;
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    // 检索当前登录人参与的问题数量
    AnswerStatus() {
      const _this = this;
      if (localStorage.token) {
        _this
          .axios({
            method: "get",
            url: `${_this.URLport.serverPath}/Questions/AnswerStatus`,
            async: false,
            xhrFields: {
              withCredentials: true
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(function(res) {
            if (res.data.status == 1) {
              _this.paAuctions = res.data.data.bidding;
              _this.paToAnswer = res.data.data.no;
              _this.paHaveToAnswer = res.data.data.evaluate;
              _this.PaNoAnswer = res.data.data.complete;
              _this.$store.state.queNum.paAuctions =
                _this.paAuctions + _this.paToAnswer + _this.paHaveToAnswer + _this.PaNoAnswer;
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  },
  mounted() {},
  beforeDestroy() {
    clearInterval(this.Questionsnum);
    clearInterval(this.Answernum);
  }
};
</script>