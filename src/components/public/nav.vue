<style>
    .Nav {
        width: 100%;
        height: 60px;
        background-color: #4458b0;
        z-index: 999;
        position: fixed;
        top: 0;
    }

    .Navcolor {
        background-color: #3b3b3b;
    }
    .Navcolor:hover {
        background-color: #3b3b3b;
    }
    .Nav-con {
        width: 970px;
        height: 60px;
        margin: 0 auto;

    }

    .Nav-logo {
        float: left;
        z-index: 999;
    }

    .Nav-logo a {
        height: 60px;
        float: left;
        color: #ff9e00;
        text-decoration: none;
        font-size: 30px;
        line-height: 60px;
    }
    .Nav-logo a img {
        width: 200px;
        height: 32px;
        margin-top: 14px;
    }

    .Nav li li a {
        display: inline-block;

    }

    .Nav li li a {
        display: block;

    }

    .Nav ul {
        list-style-type: none;
        float: right;

    }

    .Nav ul li {
        float: left;
        line-height: 60px;
        display: block;
        font-size: 0;
        width: 110px;
    }

    .Nav ul li a {
        display: block;
        font-size: 14px;
        text-align: center;
        color: #ffffff;
        text-decoration: none;
        font-weight: 700;
        width: 100px;
        margin: 0 auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }

    .Nav ul table {
        width: 100%;
        border-collapse: collapse;
        border: 0;

    }

    .Nav ul li ul {
        display: none;
    }

    .Nav ul li:hover, .Nav ul li a:hover, .Nav ul li a:active {
        color: #b9b9b9;
        background-color: #4458b0;
    }

    .Nav ul li:hover ul, .Nav ul li a:hover ul, .Nav ul li a:active ul {
        display: block;
        width: 100%;

    }

    .Nav ul ul li {
        display: block;
        width: 100%;
        border: none;
        height: 40px;
    }

    .Nav ul ul li a {
        display: block;
        color: #ffffff;
        border: none;
        height: 40px;
        line-height: 40px;
        position: relative;
    }

    .Nav ul li .Nav-resi {
        background-color: #3ccece;
        height: 50px;
        line-height: 50px;
        margin-top: 5px;
        border-radius: 2px;
    }

    .Nav ul li .Nav-resi:hover {
        transition-delay: 0.1s;
        background-color: #fbcc28;
        color: #000;
    }

    .Nav-register {

    }

    .Nav-register a {
        display: inline-block;
        text-decoration: none;
        width: 370px;
        height: 40px;
        line-height: 40px;
        color: #fff;
        font-size: 15px;
        font-weight: 700;
    }

    .Nav-register a:hover {
        color: #b9b9b9;
    }

    .Nav-register i {
        color: #fff;
        margin-right: 5px;
    }

    .NavInput input {
        outline: none;
        width: 350px;
        height: 40px;
        border-width: 0;
        color: #fff;
        background-color: #4559ae;
        font-size: 15px;

    }

    .NavInput input::-webkit-input-placeholder {
        color: #b9b9b9;
        font-size: 15px;
        font-weight: 700;
    }

    .NavInput input:focus {

    }

    .NavInput i {
        color: #fff;
        margin-right: 5px;
    }
    #nicknames{
        width: 100px;
        height: 60px;
        color: #fdb841;
        position: relative;
    }
    #nicknames img {
        margin-top: 14px;
        width: 32px;
        height: 32px;
    }
    .messageRed {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: #e20000;
        position: absolute;
        top: 21px;
        right: 24px;
    }
    .messageReds {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: #e20000;
        position: absolute;
        top: 3px;
        right: 10px;
    }
</style>

<template>
    <div class="Nav">
        <complain></complain>
        <div :class="searchBarFixed == true ? 'Navcolor' :''">
            <div class="Nav-con">
                <div class="Nav-logo">
                    <router-link to='/home'>
                        <img src="../../assets/logo.png" alt="">
                    </router-link>
                </div>
                <ul >
                    <li>
                        <router-link to='/schools' :class="searchBarFixed == true ? 'Navcolora:hover' :''">学校资源</router-link>
                    </li>
                    <li>
                        <router-link to='/classesStudy' :class="searchBarFixed == true ? 'Navcolora:hover' :''">课程资源</router-link>
                    </li>
                    <li>
                        <router-link to='/member'>成为会员</router-link>
                    </li>
                    <li>
                        <router-link to="/uploadAnswer">贡献资源</router-link>
                    </li>
                    <li v-if="$store.state.logo.show">
                        <router-link to='/login'>登录</router-link>

                    </li>
                    <li v-if="$store.state.logo.show">
                        <router-link class="Nav-resi" to='/register'>注册</router-link>
                    </li>
                    <li v-if="$store.state.logo.hide" >
                        <router-link to='/personalData' id="nicknames"><img src="../../assets/个人中心.svg" alt=""/><div :class="{messageRed:this.$store.state.logo.message>=1}"></div> </router-link>
                        <table cellpadding="0" cellspacing="0">
                            <tr>
                                <td>
                                    <ul>
                                        <li><router-link to='/personalData'>个人信息</router-link></li>
                                        <li><router-link to='/personalData/inform'>查看回复<span v-show="this.$store.state.logo.message>=1">({{this.$store.state.logo.message}})</span> <div :class="{messageReds:this.$store.state.logo.message>=1}"></div> </router-link></li>
                                        <li><a href="javascript:void(0)" @click="logout">注销</a></li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </li>
                </ul>
            </div>
        </div>


    </div>
</template>

<script type="es6">
import complain from "@/components/public/complain.vue";
    export default {
        name: 'Nav',
        components:{
            complain
        },
        props: {
            msg: String
        },
        data() {
            return {
                nicknames:this.$store.state.logo.nicknames,
                searchBarFixed:false,
                ismessage:true,
                messageLength:0
            };
        },
        created: function () {
            const _this = this;
            localStorage.SkipPath = _this.$route.fullPath;
            _this.$store.state.answer.answer = null;
            if(localStorage.getItem("token")){
                this.$store.state.logo.show = false
                this.$store.state.logo.hide = true
            }else {
                this.$store.state.logo.show = true
                this.$store.state.logo.hide = false
            }
        },
        methods: {
            gainmessage: function() {
            const _this = this;
            _this
                .axios({
                method: "get",
                url: `${_this.URLport.serverPath}/Notice/Notices`,
                async: false,
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }).then(function(res) {
                _this.$store.state.logo.message = res.data.data.length;
                _this.messageLength = res.data.data.length;
                if(res.data.data.length >= 1){
                    _this.ismessage = true; 
                }else {
                    _this.ismessage = false; 

                }
            }).catch(function(error) {
                console.log(error);
            });
            },
            logout:function(){
                const _this = this;
                if(localStorage.getItem("token")){
                    localStorage.removeItem("token");
                } else {
                    console.log('没有TOKEN')
                }
                if(localStorage.SkipPath.indexOf("/personalData") == -1){
                    if (localStorage.SkipPath) {
                        _this.$router.push({
                            path: localStorage.SkipPath,
                        });
                    }
                }else {
                    _this.$router.push({ path: "/home" });
                }
                
                window.location.reload()
            },
        },
    }
</script>