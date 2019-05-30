<style>
    .homeFooter {
        background-color: #4559ae;
        position: absolute;
        bottom: 0;
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
        list-style-type: none;
        font-size: 20px;
        color: #fff;
        display: block;
    }
    .H-footer ul li a{
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
    .footer-4 img {
        width: 140px;
        margin-top: 10px;
    }
    .footer-4 p {
        margin-top: 40px;
        color: #fff;
        font-size: 12px;
        font-weight: 700;
    }
</style>

<template>
    <div class="homeFooter">
        <div class="H-footer">
            <ul class="footer-1">
                <li class="footer-title">功能</li>
                <li><router-link to='/home'>CourseWhale</router-link></li>
                <li><a href="#">图表</a></li>
                <li><a href="#">单词卡</a></li>
            </ul>
            <ul class="footer-2">
                <li class="footer-title">帮助</li>
                <li><router-link class="homenav-resi" to='/register'>注册</router-link></li>
                <li><a href="#">帮助中心</a></li>
                <li><a href="#">行为准则</a></li>
            </ul>
            <ul class="footer-3">
                <li class="footer-title">简介</li>
                <li><a href="#">公司</a></li>
                <li><a href="#">新闻</a></li>
                <li><a href="#">职位</a></li>
                <li><router-link to="/termsOfService">条款</router-link></li>
            </ul>
            <ul class="footer-4">
                <li class="footer-title">CourseWhale</li>
                <!-- <img src="../../assets/6.png" alt=""/> -->
                <p>© 2019 CourseWhale Inc.</p>
            </ul>
        </div>
    </div>

</template>

<script type="es6">
    export default {
        name: 'homeFooter'
    }

</script>