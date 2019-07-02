<style>
.Nav {
  height: 60px;
  background-color: #4458b0;
  margin: 0 auto;
}

.nav-con {
  width: 970px;
  height: 60px;
  margin: 0 auto;
}
.nav-lg {
  float: left;
  z-index: 999;
}
.nav-lg a {
  height: 60px;
  float: left;
  color: #ff9e00;
  text-decoration: none;
}
.nav-lg a img {
  width: 200px;
  height: 32px;
  margin-top: 14px;
}

.nav-ul {
  float: right;
}

.nav-ul li {
  display: inline-block;
  width: 100px;
  line-height: 60px;
  text-align: center;
}

.nav-ul li a {
  display: inline-block;
  line-height: 60px;
  text-decoration: none;
  font-size: 10px;
  color: #fff;
  font-weight: 700;
  width: 60px;
  height: 30px;
  line-height: 30px;
}
.nav-ul li a:hover {
  color: #e1e1e1;
}
.nav-ul .nav-resi {
  background-color: #3ccece;
  width: 100px;
  height: 40px;
  line-height: 40px;
  border-radius: 2px;
}

.nav-ul .nav-resi:hover {
  transition-delay: 0.1s;
  background-color: #fbcc28;
  color: #000;
}
</style>

<template>
  <div class="Nav">
    <div class="nav-con">
      <p class="nav-lg">
        <router-link to="/home">
          <img src="../../assets/logo.png" alt>
        </router-link>
      </p>
      <ul class="nav-ul">
        <li>
          <router-link to="/schoolStudy">学校资源</router-link>
        </li>
        <!-- <li><a href="#">通过贡献</a></li> -->
        <!-- <li>
          <router-link to="/member">成为会员</router-link>
        </li>-->
        <li>
          <router-link to="/login">登录</router-link>
        </li>
        <li>
          <router-link class="nav-resi" to="/register">注册</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>