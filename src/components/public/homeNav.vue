<style>
    .nav {
        width: 100%;
        height: 80px;
        background-color: #4458b0;
        z-index: 999;
        position: fixed;
        top: 0;
    }

    .navcolor {
        background-color: #3b3b3b;
    }
    .navcolor:hover {
        background-color: #3b3b3b;
    }
    .homenav-con {
        width: 1300px;
        height: 80px;
        margin: 0 auto;

    }

    .nav-logo {
        width: 146px;
        height: 80px;
        float: left;
        z-index: 999;

    }

    .nav-logo a {
        width: 146px;
        height: 80px;
        float: left;
        color: #ff9e00;
        text-decoration: none;
        font-size: 30px;
        line-height: 80px;

    }

    .homenav-ser {
        float: left;
        margin-top: 20px;
        margin-left: 90px;
        width: 400px;
        text-align: left;
    }

    .nav li li a {
        display: inline-block;

    }

    .nav li li a {
        display: block;

    }

    .nav ul {
        list-style-type: none;
        float: right;

    }

    .nav ul li {
        float: left;
        line-height: 80px;
        display: block;
        font-size: 0;
        width: 110px;
    }

    .nav ul li a {
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

    .nav ul table {
        width: 100%;
        border-collapse: collapse;
        border: 0;

    }

    .nav ul li ul {
        display: none;

    }

    .nav ul li:hover, .nav ul li a:hover, .nav ul li a:active {
        color: #b9b9b9;
        background-color: #4458b0;
    }

    .nav ul li:hover ul, .nav ul li a:hover ul, .nav ul li a:active ul {
        display: block;
        width: 100%;

    }

    .nav ul ul li {
        display: block;
        width: 100%;
        border: none;
        height: 40px;
    }

    .nav ul ul li a {
        display: block;
        color: #ffffff;
        border: none;
        height: 40px;
        line-height: 40px;
        position: relative;
    }

    .nav ul li .homenav-resi {
        background-color: #3ccece;
        height: 50px;
        line-height: 50px;
        margin-top: 15px;
        border-radius: 2px;
    }

    .nav ul li .homenav-resi:hover {
        transition-delay: 0.1s;
        background-color: #fbcc28;
        color: #000;
    }

    .homenav-register {

    }

    .homenav-register a {
        display: inline-block;
        text-decoration: none;
        width: 370px;
        height: 40px;
        line-height: 40px;
        color: #fff;
        font-size: 15px;
        font-weight: 700;
    }

    .homenav-register a:hover {
        color: #b9b9b9;
    }

    .homenav-register i {
        color: #fff;
        margin-right: 5px;
    }

    .homenavInput input {
        outline: none;
        width: 350px;
        height: 40px;
        border-width: 0;
        color: #fff;
        background-color: #4559ae;
        font-size: 15px;

    }

    .homenavInput input::-webkit-input-placeholder {
        color: #b9b9b9;
        font-size: 15px;
        font-weight: 700;
    }

    .homenavInput input:focus {

    }

    .homenavInput i {
        color: #fff;
        margin-right: 5px;
    }
    #nickname{
        width: 100px;
        height: 80px;
        color: #fdb841;
        position: relative;
    }
    #nickname img {
        margin-top: 22.5px;
        width: 35px;
        height: 35px;
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
    <div class="nav">
        <div :class="searchBarFixed == true ? 'navcolor' :''">
            <div class="homenav-con">
                <div class="nav-logo">
                    <router-link to='/home'>AnswerWang</router-link>
                </div>
                <div class="homenav-ser">
                    <div class="homenav-register" v-model="toggle" @click="homenavRe()" v-if="vanish">
                        <i class="el-icon-search"></i>
                        <a href="javascript:void(0)">搜索</a>
                    </div>
                    <div class="homenavInput" v-if="vanishs" >
                        <i class="el-icon-search"></i>
                        <input type="text" placeholder="搜索" v-focus @blur="homenavLoseFoucs" v-model="statle" @keyup.enter="handleEnter(statle)"></input>
                        <a href="javascript:void(0)">
                            <i class="el-icon-close" @click="homenavDel"></i>
                        </a>
                    </div>
                </div>
                <ul >
                    <li>
                        <router-link to='/schoolStudy' :class="searchBarFixed == true ? 'navcolora:hover' :''">学校资源</router-link>
                        <!--<table cellpadding="0" cellspacing="0">-->
                            <!--<tr>-->
                                <!--<td>-->
                                    <!--<ul>-->
                                        <!--<li>-->
                                            <!--<router-link to='/schoolStudy'>学校</router-link>-->
                                        <!--</li>-->
                                        <!--<li>-->
                                            <!--<router-link to='/subject'>学科</router-link>-->
                                        <!--</li>-->
                                    <!--</ul>-->
                                <!--</td>-->
                            <!--</tr>-->
                        <!--</table>-->
                    </li>
                    <!-- <li>
                        <a href="#">贡献获取</a>
                        <ul>
                            <li><a href="#">上传资料</a></li>
                            <li><a href="#">获取酬劳</a></li>
                        </ul>
                    </li> -->
                    <!-- <li>
                        <router-link to='/member'>成为会员</router-link>
                    </li> -->
                    <li v-if="$store.state.logo.show">
                        <router-link to='/login'>登录</router-link>

                    </li>
                    <li v-if="$store.state.logo.show">
                        <router-link class="homenav-resi" to='/register'>注册</router-link>
                    </li>
                    <li v-if="$store.state.logo.hide" >
                        <router-link to='/personalData' id="nickname"><img src="../../assets/个人中心.svg" alt=""/><div :class="{messageRed:this.$store.state.logo.message>=1}"></div> </router-link>
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
    export default {
        name: 'Nav',
        props: {
            msg: String
        },
        data() {
            return {
                statle:'',
                vanish: true,
                vanishs: false,
                toggle: true,
                showname: false,
                nickname:this.$store.state.logo.nickname,
                searchBarFixed:false,
                ismessage:true,
                nummessage:"",
                nummessagetwo:"",
                personreviewsid:"",
                messageLength:0
            };
        },
        created: function () {
            var _this = this;
            if(localStorage.getItem("token")){
                this.$store.state.logo.show = false
                this.$store.state.logo.hide = true
            }else {
                this.$store.state.logo.show = true
                this.$store.state.logo.hide = false
            }
            _this.gainpersonal();


        },
        methods: {
            gainmessage: function() {
            var _this = this;
            _this
                .axios({
                method: "get",
                url: `http://192.168.1.27:8088/api/Notice/Notices`,
                async: false,
                params: {
                    clientid: _this.personreviewsid
                },
                xhrFields: {
                    withCredentials: true
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
            // gainmessages: function() {
            // var _this = this;
            // _this
            //     .axios({
            //     method: "get",
            //     url: `http://192.168.1.27:8088/api/Notice/Notices`,
            //     async: false,
            //     params: {
            //         clientid: _this.personreviewsid
            //     },
            //     xhrFields: {
            //         withCredentials: true
            //     }
            // }).then(function(res) {
            //     _this.nummessage = res.data.data.length;
            //     if(_this.$store.state.logo.message < _this.nummessage){
            //         _this.ismessage = true; 
            //     }
                
            // }).catch(function(error) {
            //     console.log(error);
            // });
            // },
            // 获取个人信息
            gainpersonal: function() {
            var _this = this;
            if (localStorage.getItem("token")) {
                _this
                .axios({
                    method: "get",
                    url: `http://192.168.1.27:8088/api/Client/GetClient`,
                    async: false,
                    xhrFields: {
                    withCredentials: true
                    },
                    headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })
                .then(function(res) {
                    console.log(res);
                    _this.personreviewsid = res.data.data.id;
                    _this.gainmessage();
                    // setInterval(function () {
                    //     _this.gainmessages();
                    // }, 1000);
                })
                .catch(function(error) {
                    console.log(error);
                    console.log("获取token失败")
                });
            } else {
            }
            },
            homenavRe: function () {
                this.vanish = false;
                this.vanishs = true;
            },
            homenavDel: function () {
                this.vanish = true;
                this.vanishs = false;
            },
            homenavLoseFoucs:function(){
                this.vanish = true;
                this.vanishs = false;
            },
            logout:function(){
                var _this = this;
                if(localStorage.getItem("token")){
                    localStorage.removeItem("token");
                } else {
                    console.log('没有TOKEN')
                }
                _this.$router.push({
                    path: '/home',
                })
                window.location.reload()
            },
            handleEnter:function(){
                var _this = this;
                _this.$router.push({
                    path: '/serch',
                    query:{
                        serchName:_this.statle
                    }
                })
                window.location.reload();
            },
            handleScroll () {
                var _this = this;
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

            },
        },
        directives: {
            focus: {
                // 当绑定元素插入到 DOM 中。
                inserted: function (el) {
                    // 聚焦元素
                    el.focus()
                }
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },

    }
</script>