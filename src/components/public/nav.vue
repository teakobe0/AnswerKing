<style>

    .Nav {
        height: 60px;
        background-color: #dfdfdf;
        margin: 0 auto;
    }

    .nav-con {
        width: 960px;
        margin: 0 auto;
    }

    .nav-lg {
        float: left;
        line-height: 60px;
        font-size: 30px;
        color: #ff9e00;
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

    .nav-ul li a,router-link {
        display: inline-block;
        line-height: 60px;
        text-decoration: none;
        font-size: 10px;
        color: #242424;
        font-weight: 700;
        width: 60px;
        height: 30px;
        line-height: 30px;
        padding: 0px 5px 0px 5px;
    }
    .nav-ul li a:hover {
        border-radius: 2px;
    }
</style>

<template>
    <div class="Nav">
        <div class="nav-con">
            <p class="nav-lg">
                AnswerKing
            </p>
            <ul class="nav-ul">
                <li>
                    <router-link to='/home'>首页</router-link>
                </li>
                <li><a href="#">学习资源</a></li>
                <li><a href="#">通过贡献</a></li>
                <li><a href="#">成为会员</a></li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Nav',

    }
</script>