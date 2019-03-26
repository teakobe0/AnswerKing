<style>
    .demo-ruleForm {
        padding: 5px 0px 0px 0px;
    }

    .login-lo {
        background-image: url(../assets/021716cbsvz0og66o07s20.jpg);
        background-color: #dfdfdf;
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        position: fixed;
        overflow: hidden;
        text-align: center;

    }

    .login-con {
        margin: 0 auto;
        width: 410px;
        margin-top: 170px;
        margin-bottom: 310px;
        background-color: #ffffff;
        border-radius: 2px;
        text-align: center;
        box-shadow: 0px 0px 5px #707070;
    }

    .login-con-top {

        padding: 30px 40px 0px 40px;
    }

    .brand {
        color: #1574e5;
        font-size: 45px;
        font-weight: 500;
        font-family: 微软雅黑;
        text-align: center;
        margin-bottom: 22px;
    }

    .slogan {
        padding: 5px 0px;
        color: #1781fe;
        font-size: 18px;
        text-align: center;
    }

    #submit {
        margin-right: 10px;
        width: 100%;
    }

    .reg-bottom {
        background-color: #f5f5f5;
        height: 40px;
        margin-top: 22px;
        border-top: 1px solid #dddddd;
    }

    .login-resi {
        text-decoration: none;
        line-height: 40px;
        color: #1b5299;
    }

    .login-footer {
        margin: 0 auto;
    }

    .register-name {

    }
</style>


<template>
    <div class="login">
        <!--<Nav msg="登录"></Nav>-->
        <div class="login-lo">
            <div class="login-con">
                <div class="login-con-top">
                    <p class="brand">AnswerKing</p>
                    <!--<p class="slogan">登录答题王,打开通往知识的大门</p>-->
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="50px" class="demo-ruleForm">
                        <el-form-item style="margin-left: -50px;" label="" prop="Username">
                            <el-input style="margin-bottom: 6px" prefix-icon="el-icon-edit" v-model="ruleForm.Username"
                                      placeholder="输入用户名/邮箱"></el-input>
                        </el-form-item>
                        <el-form-item style="margin-left: -50px;" label="" prop="Password">
                            <el-input style="margin-bottom: 6px" prefix-icon="el-icon-goods" type="Password"
                                      v-model="ruleForm.Password"
                                      placeholder="输入密码"
                                      @keyup.enter.native="submitForm('ruleForm')">
                            </el-input>
                        </el-form-item>

                        <el-form-item style="margin-left: -50px;">
                            <el-button id="submit" type="primary" @click="submitForm('ruleForm')">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="reg-bottom">
                    <span>没有账号？</span>
                    <router-link class="login-resi" to='/register'>注册</router-link>
                </div>
            </div>
            <div class="login-footer">
                <Footer></Footer>
            </div>
        </div>


    </div>
</template>
<script type="es6">
    import Nav from '@/components/public/nav.vue'
    import Footer from '@/components/public/footer.vue'
    export default {
        name: 'login',
        components: {
            Nav,
            Footer
        },
        data() {
            //ES6中用箭头函授代替ES5中的function（）
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }
                callback();
            }
            //在ES6中添加数据是在return{}中
            return {
                ruleForm: {
                    Email: '',
                    Password: ''
                },
                //rules是Element的表单验证规则
                rules: {
                    Username: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'}
                    ],
                    Password: [
                        {required: true, validator: validatePass, trigger: 'blur'}
                    ]
                }
            };
        },
        //页面的方法还是写在methods{}中
        methods: {
            submitForm(ruleForm){
                //$refs是获取DOM节点的，它直接在页面找到ruleForm这个表单
                //validate是element自带的一个表单验证功能，它将检验表单里的内容是否已经验证成功，成功后会传回一个回调函数
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) {
                        var _this = this;
                        this.axios({
                            method: "POST",
                            url: `http://192.168.1.27:8088/api/client/login`,
                            async: false,
                            data: this.ruleForm,
                            xhrFields: {
                                withCredentials: true
                            },
                            headers: {
                                token: localStorage.getItem("token")
                            }
                        }).then(function (res) {
                            localStorage.token = res.data.data.token;
                            console.log(res);
                            if (res.data.status == 1) {
                                _this.$message({
                                    message: '登陆成功',
                                    type: 'success'
                                });
                                //_this.$store.state.logo.show = false;
                                //_this.$store.state.logo.hide = true;
                                _this.$router.push({path: '/home'})
                            }

                        }).catch(function (error) {
                            console.log(error);
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            register(){
                this.$router.push({path: '/rigister'})
            }
        }
    }
</script>
