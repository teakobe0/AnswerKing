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
  margin-top:60px;
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
    <div v-title :data-title="$t('standard.con1')+'-CourseWhale'"></div>
    <Nav></Nav>
    <div class="SB-Nav">{{$t('standard.con1')}}</div>
    <div class="standardBehavior-con">
      <div class="SB-title">
        <p>
          {{$t('standard.con2')}}
          <i></i>
        </p>
        <p>{{$t('standard.con3')}}</p>
      </div>
      <p class="SB-text">{{$t('standard.con4')}}</p>
      <p class="SB-text">{{$t('standard.con5')}}</p>
      <ul>
        <li >
          <b>{{$t('standard.con6')}}</b>{{$t('standard.con7')}}
        </li>
        <li >
          <b>{{$t('standard.con8')}}</b>{{$t('standard.con9')}}
        </li>
        <li>
          <b>{{$t('standard.con10')}}</b>{{$t('standard.con11')}}
        </li>
        <li>
          <b>{{$t('standard.con12')}}</b>{{$t('standard.con13')}}
        </li>
        <li>
          <b>{{$t('standard.con14')}}</b>{{$t('standard.con15')}}
        </li>
        <li>
          <b>{{$t('standard.con16')}}</b>{{$t('standard.con17')}}
        </li>
      </ul>

      <p class="SB-text">{{$t('standard.con18')}}</p>
      <p class="SB-text">{{$t('standard.con19')}}</p>
      <div class="smallText">{{$t('standard.con20')}}</div>
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
    const _this = this;

    document.documentElement.scrollTop = 0;
  },
  methods: {}
};
</script>