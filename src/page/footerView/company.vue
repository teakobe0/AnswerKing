<style>
.company {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 276px;
  background-color: #2a4864;
}
.company-con {
  width: 1300px;
  height: 937px;
  margin: 0 auto;

}
.company-con img {
  width: 1100px;
  height: 700px;
  margin-left: 100px;
  margin-top: 100px;
}
.company-title {
  width: 100%;
  height: 400px;
}
.company-1 {
  width: 970px;
  margin: 0 auto;
}

.company-2 {
  width: 970px;
  margin: 0 auto;
}

.company-3 {
  width: 970px;
  margin: 0 auto;
}

</style>

<template>
  <div class="company">
    <!-- <Nav></Nav> -->
    <div v-title :data-title="$t('footer.con11')+'-CourseWhale'"></div>
    <div class="company-con">
      <img src="../../assets/construction.jpg" alt />
      <!-- <div class="company-titl e">
        <div class="company-1">
          <p>我们所做的</p>
          <h2>我们是一个针对特定课程的学习资源的在线学习平台</h2>
          <p>CourseWhale是一个在线学习平台，您可以访问由学生和其他贡献者提供的相关课程的，特定的学习资源。您将找到Quiz，Discussion，Assignment，Exam等特定学习资源以供参考和学习，以及您正在学习的每个科目的逐步解释 - 从经济学到文学，从生物学到历史，会计到心理学，以及介于两者之间的一切。我们帮助您快速找到所需内容，以便您可以深入学习。</p>
        </div>
      </div>
      <div class="company-title" style="background-color:rgb(247, 247, 247);">
        <div class="company-2">
          <p>我们为什么要这样做</p>
          <h2>我们相信，在支持学生的学习，一起</h2>
          <p>毕业之路是一场充满压力，债务缠身的艰苦战斗 - 其中40％的大学生从未获胜。对我们来说，这是一个史诗般的失败。</p>
          <p>这就是为什么我们与教育工作者密切合作，以帮助支持学生学习，并补充课堂上发生的事情。我们都希望看到更多的学生在毕业典礼那天走上讲台，为他们所取得的成就感到自豪，并为自己创造美好的生活。我们的目标是帮助他们实现目标。</p>
        </div>
      </div>
      <div class="company-title">
        <div class="company-3">
          <p>我们的身影</p>
          <p>每个月有超过5000万学生和教师使用CourseWhale网站。CourseWhale可用于CourseWhale Live课堂学习，可作为家庭学习课程的一部分，并可供从拼写测试到大学水平科学课程、再到专业证书的学习者使用。</p>
        </div>
      </div> -->
    </div>
    <!-- <homeFooter></homeFooter> -->
  </div>
</template>

<script type="es6">
import Nav from "@/components/public/nav.vue";
import homeFooter from "@/components/public/homeFooter.vue";

export default {
  name: "company",
  components: {
    Nav,
    homeFooter
  },
  data() {
    return {};
  },
  created: function() {
    const _this = this;

    document.documentElement.scrollTop = 0;
  },
  methods: {}
};
</script>