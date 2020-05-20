<style>
.homeFooter {
  background-color: #4559ae;
  position: absolute;
  /* bottom: 0; */
  left: 0;
  width: 100%;
  padding-bottom: 30px;
  padding-top: 40px;
}
.H-footer {
  width: 1300px;
  margin: 0 auto;
}
.H-footer ul {
  float: left;
  margin-right: 100px;
  margin-left: 100px;
}
.H-footer ul li {
  width: 90px;
  list-style-type: none;
  font-size: 20px;
  color: #fff;
  display: block;
}
.H-footer ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  line-height: 40px;
  display: inline-block;
}
.H-footer ul li a:hover {
  color: #cfcfcf;
}
.footer-title {
  font-weight: 700;
  margin-bottom: 20px;
}
.footer-4 .footer-title {
  font-size: 30px;
}
.footer-4 a {
  display: block;
  /* background-color: #fff; */
  /* width: 20px;
  height: 20px;
  float: left;
  margin-left: 3px; */
  margin-right: 10px;
  position: relative;
}
.footer-4 img {
  width: 30px;
  /* position: absolute;
  top: -7px;
  left: -5px; */
}
.footer-4 p {
  margin-top: 10px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
}
</style>

<template>
  <div class="homeFooter">
    <div class="H-footer">
      <ul class="footer-1">
        <li class="footer-title">{{$t('footer.con1')}}</li>
        <li>
          <router-link to="/home">{{$t('footer.con4')}}</router-link>
        </li>
        <li>
          <router-link to="/schools">{{$t('footer.con5')}}</router-link>
        </li>
        <li>
          <router-link to="/classesStudy">{{$t('footer.con6')}}</router-link>
        </li>
      </ul>
      <ul class="footer-2">
        <li class="footer-title">{{$t('footer.con2')}}</li>
        <li>
          <router-link to="/register">{{$t('footer.con7')}}</router-link>
        </li>
        <li>
          <router-link to="/faq">{{$t('footer.con8')}}</router-link>
        </li>
        <li>
          <router-link to="/standardBehavior">{{$t('footer.con9')}}</router-link>
        </li>
        <li>
          <router-link to="/termsOfService">{{$t('footer.con10')}}</router-link>
        </li>
      </ul>
      <ul class="footer-3">
        <li class="footer-title">{{$t('footer.con3')}}</li>
        <li>
          <router-link to="/company">{{$t('footer.con11')}}</router-link>
        </li>
        <li>
          <router-link to="/news">{{$t('footer.con12')}}</router-link>
        </li>
        <li>
          <router-link to="/position">{{$t('footer.con13')}}</router-link>
        </li>
      </ul>
      <ul class="footer-4">
        <li class="footer-title">CourseWhale</li>
        <li>
          <a href="https://twitter.com/coursewhale" title="Twitter" target="_blank">
            <img src="../../assets/twitter3.svg" alt />
          </a>
          <a href="https://www.facebook.com/coursewhale.orange.7" title="Facebook" target="_blank">
            <img src="../../assets/facebook.svg" alt />
          </a>
        </li>

        <p>© 2019 CourseWhale Inc.</p>
      </ul>
    </div>
  </div>
</template>

<script type="es6">
export default {
  name: "homeFooter"
};
</script>