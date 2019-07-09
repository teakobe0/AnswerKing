<style>
.standardBehavior {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 276px;
}
.SB-Nav {
  height: 200px;
  background: #84e6ec url(../../assets/faq.jpg) no-repeat center;
  text-align: center;
  line-height: 200px;
  color: #fff;
  font-size: 32px;
}
.standardBehavior-con {
  width: 970px;
  margin: 0 auto;
  padding-bottom: 90px;
}
.SB-title {
  margin-top: 60px;
  margin-bottom: 60px;
  color: #222;
}
.SB-title i {
  display: inline-block;
  width: 50px;
  height: 1px;
  background-color: rgb(99, 99, 99);
  border: 1px solid rgb(99, 99, 99);
  position: relative;
  bottom: 5px;
}
.SB-title p:first-of-type {
  font-size: 24px;
  margin-bottom: 12px;
}
.SB-title p:last-of-type {
  font-size: 24px;
  margin-left: 250px;
}
.SB-text {
  font-size: 16px;
  color: #222;
  margin-bottom: 18px;
}
.standardBehavior-con ul {
  padding-top: 0px;
  padding-bottom: 22px;
}
.standardBehavior-con li {
  margin-left: 23px;
  margin-bottom: 12px;
  font-size: 14px;
}
.smallText {
  font-size: 14px;
  color: rgb(143, 143, 143);
  text-align: right
}
</style>

<template>
  <div class="standardBehavior">
    <div v-title data-title="行为准则-CourseWhale"></div>
    <Nav></Nav>
    <div class="SB-Nav">行为准则</div>
    <div class="standardBehavior-con">
      <div class="SB-title">
        <p>
          CourseWhale的宗旨
          <i></i>
        </p>
        <p>致力于为所有学生打造一个安全有益的学习环境</p>
      </div>
      <p class="SB-text">CourseWhale旨在促进学习和教学。我们提供工具，使人们能够在任何时间任何地点，以有效且有趣味性的方式学习关于任何主题的内容。</p>
      <p class="SB-text">使用CourseWhale时，请记住：</p>
      <ul>
        <li >
          <b>友善和尊重</b> — 我们都在CourseWhale上学习，请友善对待他人，正如你自己想被别人友善对待那样。CourseWhale完全不能接受煽动基于种族、民族、宗教、性别、年龄、性取向或残疾的仇恨或暴力行为，或创建威胁或骚扰他人或团体的内容。我们不容忍基于任何理由的欺凌。
        </li>
        <li >
          <b>注意文明用语</b> — CourseWhale是针对所有年龄段学生的学习平台。如果你正在学习包含脏话或其他亵渎性语言的内容、带有性暗示的歌词、其他语种的俚语，或在任何其他有效学习环境中使用不当语言，请自行谨慎判断将相关内容设为公开可见或私密。
        </li>
        <li>
          <b>专注于学习</b> — 使用CourseWhale是生动有趣的体验，但我们的工具并不是社交网络。我们将删除与学习无关的言论。
        </li>
        <li>
          <b>尊重别人的劳动成果和权利</b> — 请不要故意发布侵犯他人版权的内容。
        </li>
        <li>
          <b>遵守学术诚信</b> — 很简单：不要作弊。CourseWhale存在的目的是让大家学习，不是作弊。无论你是老师还是学生，如果你在CourseWhale上发现了对你的学校课程有不利影响的内容，请联系我们，我们会及时解决问题。
        </li>
        <li>
          <b>尊重他人（和你自己）的隐私</b> — 用户隐私对我们而言非常重要。不要在CourseWhale上发布你本人或未成年人或学生的个人身份信息。
        </li>
      </ul>

      <p class="SB-text">我们希望用户不仅遵循这些规则，同时对违背这些规则的内容或活动进行举报。进一步了解如何举报CourseWhale上特定类型的不当内容和行为。</p>
      <p class="SB-text">感谢你支持我们的宗旨并保持CourseWhale良好的学习环境！</p>
      <div class="smallText">CourseWhale平台</div>
    </div>
    <homeFooter></homeFooter>
  </div>
</template>

<script type="es6">
import Nav from "@/components/public/nav.vue";
import homeFooter from "@/components/public/homeFooter.vue";

export default {
  name: "standardBehavior",
  components: {
    Nav,
    homeFooter
  },
  data() {
    return {};
  },
  created: function() {
    var _this = this;

    document.documentElement.scrollTop = 0;
  },
  methods: {}
};
</script>