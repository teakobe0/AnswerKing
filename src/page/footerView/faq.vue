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
  margin-top: 60px;
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
    <div v-title :data-title="$t('faq.con1')+'-CourseWhale'"></div>
    <div class="faq-nav">
      <div class="faq-nav1">FAQ{{$t('faq.con1')}}</div>
    </div>
    <div class="faq-quiz">
      <div class="faq-quizCon">
        <div class="quizCon-title">{{$t('faq.con2')}}</div>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title name="1">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con3')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>
              {{$t('faq.con4')}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="2">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con5')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>
              {{$t('faq.con6')}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="3">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con7')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>
              {{$t('faq.con8')}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="4">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con9')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>
              {{$t('faq.con10')}}
            </div>
            <div>
              <b>{{$t('faq.con11')}}</b>
            </div>
          </el-collapse-item>
          <el-collapse-item name="5">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con12')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>
              {{$t('faq.con13')}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="6">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con14')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>{{$t('faq.con15')}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="7">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con16')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>{{$t('faq.con17')}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="8">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con18')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>{{$t('faq.con19')}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="9">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con20')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>{{$t('faq.con21')}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="10">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con22')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>{{$t('faq.con23')}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="11">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con24')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>{{$t('faq.con25')}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="12">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con26')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>{{$t('faq.con27')}}
            </div>
          </el-collapse-item>

          <el-collapse-item name="13">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con28')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>{{$t('faq.con29')}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="14">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con30')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>{{$t('faq.con31')}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="155">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con32')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>{{$t('faq.con33')}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="16">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con34')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>{{$t('faq.con35')}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="17">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con36')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>{{$t('faq.con37')}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="18">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con38')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>{{$t('faq.con39')}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="19">
            <template slot="title">
              <i class="el-icon-thirdQ"></i>
              {{$t('faq.con40')}}
            </template>
            <div>
              <i class="el-icon-thirdA"></i>{{$t('faq.con41')}}
            </div>
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
    const _this = this;

    document.documentElement.scrollTop = 0;
  },
  methods: {
    handleChange(val) {
      // console.log(val);
    }
  }
};
</script>