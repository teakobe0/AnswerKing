<style>
.faq {
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 276px;
}
.faq-nav {
  background: #84e6ec url(../../assets/faq.jpg) no-repeat center;
}
.faq-nav1 {
  width: 970px;
  height: 200px;
  color: #fff;
  margin: 0 auto;
  line-height: 200px;
  font-size: 32px;
  text-align: center;
}
.faq-quiz {
  /* background-color: rgb(211, 211, 211); */
  overflow: hidden;
}
.faq-quizCon {
  width: 970px;
  margin: 0 auto;
  padding-bottom: 90px;
}
.quizCon-title {
  font-size: 24px;
  margin-top: 60px;
  margin-bottom: 60px;
}
.quizCon-question li {
  list-style-type: none;
  /* float: left; */
  /* width: 465px; */
  margin-bottom: 40px;
  /* height: 180px; */
}
.quizCon-question li:nth-child(odd) {
  /* margin-right: 40px; */
}
.quizCon-question li div {
  color: #000;
  margin-bottom: 10px;
  font-weight: 700;
}
.quizCon-question li p {
  color: rgb(95, 95, 95);
}
.el-collapse-item__header {
  font-weight: 700 !important;
}
.el-collapse-item__header i {
  color: rgb(30, 164, 226);
  margin-right: 10px;
  font-size: 14px;
}
.el-collapse-item__content {
  position: relative;
}
.el-collapse-item__content div {
  margin-left: 24px;
}
.el-collapse-item__content i {
  color: rgb(252, 170, 19);
  font-size: 14px;
  position: absolute;
  left: 0px;
  top: 5px;
}
</style>

<template>
  <div class="faq">
    <Nav></Nav>
    <div v-title data-title="帮助中心-CourseWhale"></div>
    <div class="faq-nav">
      <div class="faq-nav1">FAQ帮助中心</div>
    </div>
    <div class="faq-quiz">
      <div class="faq-quizCon">
        <div class="quizCon-title">常见问题</div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title name="1">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              1.&nbsp;&nbsp;什么是CourseWhale？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>CourseWhale是一个在线教育题库学习平台，在CourseWhale你可以访问数以万计的由我们的贡献者贡献的学习资源。但不同于其他类似网站的繁杂，coursewhale主要专注于quiz的解题方法和简答题解题思路。
              在course whale上，你可以轻而易举地找到你所学课程的相关测试题，简单题。通过这些学习资源，你能够掌控每一次测试。在CourseWhale的帮助下，相信你可以更好的适应留学时段的学习和生活。
            </div>
          </el-collapse-item>
          <el-collapse-item name="2">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              2.&nbsp;&nbsp;为什么选择CourseWhale？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>CourseWhale为北美学子提供分享知识的平台。高质量，高效率，高匹配，是CourseWhale分享学习资源的核心。在CourseWhale上，你不用浪费多余的时间去浏览，简单易操作的流畅帮助你直接找到你想要的学习资源。
            </div>
          </el-collapse-item>
          <el-collapse-item name="3">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              3.&nbsp;&nbsp;CourseWhale提供什么样的学习资源？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>目前，CourseWhale主要提供北美各高校的课程学习资料，例题题库等众多资源。

            </div>
          </el-collapse-item>
          <el-collapse-item name="4">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              4.&nbsp;&nbsp;如何找到想要的学习资源？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>打开我们的网址coursewhale.com，就可以看到coursewhale简介的页面，在中间搜索框搜索您的学校（如：University of California, Irvine），到结果搜索页面之后，你可以看到该学校下面的全部课程，点击想要找的课程之后就可以看到相关学习资源。另，每一周的更新情况都会不同，因此个别周的资料可能会缺失。
            </div>
            <div>另外，我们建议你收藏coursewhale网站，并成为注册会员。成为注册会员后，coursewhale能够保留你的浏览记录，收藏的课程。在下一次登陆的时候就可以直接看到收藏的课程，学校以及浏览历史内容，留言回复等。</div>
          </el-collapse-item>
          <el-collapse-item name="5">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              5.&nbsp;&nbsp;什么是CourseWhale会员？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>course whale会员包含两种会员：注册会员和付费会员。
            </div>
            <div>注册会员仅判定为注册过CourseWhale网站的活跃用户；付费会员为在注册会员的基础之上，付费使用CourseWhale相关内容的会员。</div>
          </el-collapse-item>
          <el-collapse-item name="6">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              6.&nbsp;&nbsp;注册会员与付费会员的区别？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>注册会员仅有7天的全网免费使用权限；而付费会员则根据付费的期限而享受该期限内的全网学习资源使用权限。
            </div>
          </el-collapse-item>
          <el-collapse-item name="7">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              7.&nbsp;&nbsp;注册邮件可以更改吗？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>不能。
            </div>
          </el-collapse-item>
          <el-collapse-item name="8">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              8.&nbsp;&nbsp;忘记邮箱怎么办？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>忘记邮箱可以通过问题19的联系方式联系我们，提供你的付款记录，以及账号相关信息，在一定时间内可以通过人工方式找回。
            </div>
          </el-collapse-item>
          <el-collapse-item name="9">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              9.&nbsp;&nbsp;忘记密码怎么办？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>忘记密码可以通过注册时的邮箱找回密码，因此请一定确保你的邮箱可以正常使用。
            </div>
          </el-collapse-item>
          <el-collapse-item name="10">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              10.&nbsp;&nbsp;如何更改密码？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>注册会员后，在会员页面左侧选择密码修改，直接输入新密码点击保存就可以了。
            </div>
          </el-collapse-item>
          <el-collapse-item name="11">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              11.&nbsp;&nbsp;出现无法无法登陆的情况应当如何处理？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>出现无法登陆的原因可能有：我们正在进行后台升级，一般情况下我们会在升级前在网站首页提醒用户；浏览器不支持，可更换浏览器尝试；3，网络问题，请检查自己的网络；4，其他问题，如果非上述问题，请截图并提交给我们，我们会在24小时之内回复。
            </div>
          </el-collapse-item>
          <el-collapse-item name="12">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              12.&nbsp;&nbsp;如何注销我的账户？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>账户不可以注销。
            </div>
          </el-collapse-item>
          
          <el-collapse-item name="13">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              13.&nbsp;&nbsp;CourseWhale里面的内容从哪里来？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>CourseWhale里面的内容都是由北美各高校的学生上传，在此之前我们会先审核他们的身份，资质等信息，以确保其上传的内容是有价值的。
            </div>
          </el-collapse-item>
          <el-collapse-item name="14">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              14.&nbsp;&nbsp;我可以上传相关学习资源至CourseWhale吗？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>CourseWhale目前正在建设完整的在线内容上传模块。在该模块上线之前，如果您有意与我们合作，请通过邮箱联系我们，我们会尽快与您沟通。
            </div>
          </el-collapse-item>
          <el-collapse-item name="155">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              15.&nbsp;&nbsp;如果我成了CourseWhale的合作者，我能获得什么？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>如果您通过了我们的资质审核，你在上传有价值的内容之后，将对应地获得CourseWhale其他所有内容的免费试用权限。
            </div>
          </el-collapse-item>
          <el-collapse-item name="16">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              16.&nbsp;&nbsp;如果我看到某些服务侵犯了我的版权怎么办?
            </template>
            <div>
              <i class="el-icon-thirdA"></i>我们尊重他人的知识产权，并保留删除或禁用涉嫌侵权内容的权利，并有权终止重复涉嫌侵权者的帐户。
            </div>
          </el-collapse-item>
          <el-collapse-item name="17">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              17.&nbsp;&nbsp;CourseWhale课程是否需要付费?
            </template>
            <div>
              <i class="el-icon-thirdA"></i>CourseWhale提供免费访问和付费访问服务。我们为新注册会员提供一段时期的免费试用时间，但过了免费试用阶段就需要付费试用。
            </div>
          </el-collapse-item>
          <el-collapse-item name="18">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              18.&nbsp;&nbsp;如果我想停止使用CourseWhale，费用可以退还吗？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>CourseWhale的费用无法退还。因此请您根据自己的需求购买内容试用权限。
            </div>
          </el-collapse-item>
          <el-collapse-item name="19">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              19.&nbsp;&nbsp;如何联系我们？
            </template>
            <div>
              <i class="el-icon-thirdA"></i>如对我们的网站，服务，或者技术方面有任何的意见和建议，或者涉及到侵权问题，请通过下面的邮箱联系我们，我们会在24小时之内回复你。
            </div>
            <div>联系邮箱：CourseWhale2000@gmail.com</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <homeFooter></homeFooter>
  </div>
</template>

<script type="es6">
import Nav from "@/components/public/nav.vue";
import homeFooter from "@/components/public/homeFooter.vue";

export default {
  name: "faq",
  components: {
    Nav,
    homeFooter
  },
  data() {
    return {
      activeNames: ["1"]
    };
  },
  created: function() {
    var _this = this;

    document.documentElement.scrollTop = 0;
  },
  methods: {
    handleChange(val) {
      // console.log(val);
    }
  }
};
</script>