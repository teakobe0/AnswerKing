<style>
.uaq-con {
  background-color: #f5f7fb;
}
.uaq-title {
  width: 1300px;
  margin: 0 auto;

  overflow: hidden;
}
.uaq-t-left {
  float: left;
  width: 650px;
  height: 500px;
}
.uaq-t-l-1 {
  color: #4458b0;
  font-weight: 700;
  font-size: 48px;
  margin-top: 70px;
  font-family: '微软雅黑';
}
.uaq-t-l-2 {
  color: #4458b0;
  font-size: 42px;
}
.uaq-t-l-3 {
  color: #3d3d3d;
  font-size: 14px;
  margin-top: 30px;
  width: 584px;
}
.uaq-t-l-4 {
  color: #fff;
  font-size: 22px;
  margin-top: 30px;
  cursor: pointer;
  background-color: #3ccece;
  padding: 15px;
  display: inline-block;
  font-weight: 700;
}
.uaq-t-l-4:hover {
  background:#fbcc2b;
  color:rgb(156, 156, 156)
}
.uaq-t-right {
  float: right;
  width: 650px;
  height: 400px;
  padding-top: 20px;
}
.uaq-t-right img {
  width: 660px;
}
.uaq-middle {
  background: #344387;
}
.uaq-m-c {
  width: 1300px;
  height: 400px;
  margin: 0 auto;
  position: relative;
}
.uaq-m-c-n {
  position: absolute;
  top: -50px;
}
.uaq-m-c-n div {
  width: 420px;
  margin-right: 20px;
  text-align: center;
  float: left;
  height: 170px;
  background: #fff;
  box-shadow: -1px 2px 4px #77777759;
  cursor: pointer;
}
.uaq-m-c-n div:hover {
  background: #3ccece;
}
.uaq-m-c-n div:hover p {
  color: #fff;
}
.uaq-m-c-n div:last-of-type {
  margin-right: 0px;
}
.uaq-m-c-n div span {
  font-size: 48px;
  color: #d0d9ff;
  margin-top: 40px;
  display: inline-block;
}
.uaq-m-c-n div p {
  font-size: 28px;
  color: #262626;
}

.uaq-m-c-t {
  width: 1300px;
  height: 200px;
  position: absolute;
  top: 180px;
}
.uaq-m-c-t .uaq-m-c-t-p {
  width: 400px;
  margin-right: 20px;
  float: left;
  height: 200px;
  color: #fff;
  padding: 0 10px;
}
.uaq-m-c-t .uaq-m-c-t-3 {
  margin-right: 0px;
}
.uaq-m-c-t .uaq-m-c-t-p div {
  font-size: 22px;
  margin-bottom: 11px;
}
.uaq-m-c-t .uaq-m-c-t-p p {
  font-size: 14px;
}
.uaq-bottom {
  width: 1300px;
  height: 400px;
  margin: 0 auto;
}
.uaq-bottom .uaq-b-l {
  width: 650px;
  float: left;
}
.uaq-bottom .uaq-b-l img {
  width: 450px;
  margin-top: 50px;
  margin-left: 170px;
}
.uaq-bottom .uaq-b-r {
  width: 650px;
  float: left;
}
.uaq-bottom .uaq-b-r img {
  margin-top: 80px;
}
.uaq-bottom .uaq-b-r b {
  display: block;
  color: #344387;
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.uaq-bottom .uaq-b-r p {
  width: 400px;
  font-size: 14px;
  color: #344387;
}
.active {
  background: #3ccece !important;
}
.active p{
  color:#fff !important;
}
</style>

<template>
  <div class="uploadAnswerFaq" v-show="this.$store.state.logo.uaShow == false">
    <div class="uaq-con">
      <div class="uaq-title">
        <div class="uaq-t-left">
          <p class="uaq-t-l-1">总结,&nbsp;学习,&nbsp;分享。</p>
          <p class="uaq-t-l-2">ORGANIZE,&nbsp;LEARN&nbsp;&&nbsp;SHARE</p>
          <p
            class="uaq-t-l-3"
          >随时随地通过COURSEWHALE课程鲸灵的题库集分享平台上传你的学习资料,帮助你更好的理解你所学习的知识,养成知识体系的搭建。不仅如此,通过分享你所创建的题库集,可以帮助其他学习同样科目、课程的学生交流和分享学习经验及资料,达到事半功倍的学习效果。通过验证的优秀题库集将免费获得课程鲸灵的会员资格,使你可以更好的体验课程鲸灵的全部功能!</p>
          <div class="uaq-t-l-4" @click="uaShows">开始建立你的题库集</div>
        </div>
        <div class="uaq-t-right">
          <img src="../../assets/uaqTitle.png" alt />
        </div>
      </div>
      <div class="uaq-middle">
        <div class="uaq-m-c">
          <div class="uaq-m-c-n"  >
            <div v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)">
              <span>{{item.name}}</span>
              <P>{{item.con}}</P>
            </div>
          </div>
          <div class="uaq-m-c-t" v-show="num == 0">
            <div class="uaq-m-c-t-p">
              <div>
                <span style="font-size:48px;">1.</span>选择或创建学校
              </div>
              <p>第一步你需要选择你的题库集所属的学校，这样可以帮助你更好的区分不同学校的类似课程。你可以通过搜索学校库来选择一所学校，如果你想要上传的学校不存在，你可以轻松的新建一所学校。</p>
            </div>
            <div class="uaq-m-c-t-p">
              <div>
                <span style="font-size:48px;">2.</span>选择或创建课程
              </div>
              <p>接下来需要给题库集选择一门课程，你可以搜索学校包含的课程，如果该课程不存在的话，你也可以轻松的建立一门新的课程，请注意检查课程名的拼写和缩写，这样可以帮助大家更好的区别不同的课程。</p>
            </div>
            <div class="uaq-m-c-t-3 uaq-m-c-t-p">
              <div>
                <span style="font-size:48px;">3.</span>上传题库集资料
              </div>
              <p>题库集按照目前主流网课的格式，按照每周课程区分，你可以选择课程的周数，然后上传你自己的课程资料，资料包括但不限于Assignments, discussion, quiz等，上传任何资料时注意保护自己的隐私不被泄露。</p>
            </div>
          </div>
          <div class="uaq-m-c-t" v-show="num == 1">
            <div class="uaq-m-c-t-p">
              <div>
                <span style="font-size:48px;">1.</span>自己的题库集
              </div>
              <p>自己创建的题库集可以在个人中心中的“我的贡献”中找到。这里将会显示你所上传的全部资料，包括学校、课程及题库集，未审核的资料将不会公开，你可以在这里随时查看资料的审核状态。</p>
            </div>
            <div class="uaq-m-c-t-p">
              <div>
                <span style="font-size:48px;">2.</span>查找别人的题库集
              </div>
              <p>你可以通过浏览学校及其所包含的课程快速定位你需要的题库集。你也可以通过搜索关键字来进行全站的检索，不过这样将显示任何与关键字有关的内容，所以我们建议通过精确索索来进行查找你所需要的题库集。</p>
            </div>
            <div class="uaq-m-c-t-3 uaq-m-c-t-p">
              <div>
                <span style="font-size:48px;">3.</span>关注或评价题库集
              </div>
              <p>因为题库集的特殊结构，每个用户可能会随时更新题库集，所以最好的方式就是关注一个题库集，这样该题库集有新的上传资料时我们将通知你。你也可以通过评价和留言系统帮助筛选更好的题库集。</p>
            </div>
          </div>
          <div class="uaq-m-c-t" v-show="num == 2">
            <div class="uaq-m-c-t-p">
              <div>
                <span style="font-size:48px;">1.</span>公开题库集
              </div>
              <p>题库集在上传完成后，将提交至管理员人工审核，通常这个审核过程将持续1-3个工作日。请不要题库集内上传任何与课程无关的内容，成功通过审核后该题库集将会对全体付费用户公开， 你也可以随时隐藏自己的题库集。</p>
            </div>
            <div class="uaq-m-c-t-p">
              <div>
                <span style="font-size:48px;">2.</span>分享题库集
              </div>
              <p>如果你的题库集拥有准确的学校和课程名称，整个互联网的用户都可以通过搜索找到你的题库集，当然你也可以直接通过社交媒体或链接来分享题库集页面，让你的朋友或其他有需要的人直接访问到你的题库集。</p>
            </div>
            <div class="uaq-m-c-t-3 uaq-m-c-t-p">
              <div>
                <span style="font-size:48px;">3.</span>题库集积分系统
              </div>
              <p>根据你所上传的题库集的浏览量、搜索量及评价，你的所有题库集都可以持续的为你提供积分，这些积分可以用于兑换会员时间或通过一定比例提现，作为我们对每一个乐于分享和具有奉献精神的用户的奖励机制。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="uaq-bottom">
        <div class="uaq-b-l">
          <img src="../../assets/uaqBottom.png" alt />
        </div>
        <div class="uaq-b-r">
          <img src="../../assets/uaqLogo.png" alt />
          <b>课程鲸灵的进步离不开每一位贡献者</b>
          <p>课程鲸灵的核心在于分享精神，所以我们会持续关注和优化内容分享功能，帮助更多的人更加轻松的加入到学习分享中来。我们也会保证每一位贡献者得到应得的回馈，不仅仅局限于帮助他人的喜悦感，我们也会提供实际的奖励来鼓励大家。</p>
          <p style="margin-top:10px;">如果在学习资料贡献分享的过程中有任何不明白的地方请通过右下角的问题反馈，或通过email联系我们。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="es6">
export default {
  name: "uploadAnswerFaq",
  data() {
    return {
      uaq: true,
      tabs: [
        {
          name:"ORGANIZE",
          con:"如何创建题库集"
        },
        {
          name:"LEARN",
          con:"题库集如何使用"
        },
        {
          name:"SHARE",
          con:"如何分享&兑换会员"
        },
      ],
      tabContents: [
        {
          name:""
        },
      ],
      num: 0,
    };
  },
  created: function() {
    const _this = this;
  },
  methods: {
    tab(index){
      console.log(index)
      this.num = index;
    },
    uaShows(){
      const _this = this;
      this.$store.state.logo.uaShow = true;
    }
  }
};
</script>