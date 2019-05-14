<style>
    #personalData {
        width: 100%;
        height: 100%;
        position: relative;
        padding-bottom: 276px;
    }

    .personalData-con {
        width: 1300px;
        margin: 0 auto;
        margin-top: 80px;
        overflow: hidden;
    }

    .pd-con-head {
        width: 200px;
        height: 980px;
        border-left: 1px solid #dcdcdc;
        border-right: 1px solid #dcdcdc;
        background-color: #fafafa;
        float: left;
        overflow: hidden;
    }

    .head-img {
        width: 140px;
        height: 200px;
        text-align: center;
        margin: 0 auto;
        margin-top: 20px;

    }

    .head-img img {
        width: 140px;
        height: 140px;
        margin-top: 10px;
    }

    .head-img a {
        display: inline-block;
        text-decoration: none;
        margin-top: 2px;
        font-size: 14px;
    }

    .head-img a:hover {
        color: #d91685;
    }

    .fasttrack {
        width: 100%;
        height: 40px;
        background-color: #f2f2f2;
        font-weight: 700;
        line-height: 40px;
        text-indent: 20px;
        font-size: 15px;
        border-top: 2px solid #dcdcdc;
        border-bottom: 2px solid #dcdcdc;
    }

    .perSet li {
        width: 100%;
        height: 50px;
        border-bottom: 1px dashed #dbdbdb;
    }

    .perSet li a {
        width: 100%;
        height: 50px;
        display: inline-block;
        text-decoration: none;
        text-align: left;
        text-indent: 10px;
        line-height: 50px;
        color: #666666;
        font-size: 14px;
    }

    .perSet li a:hover {
        background-color: #fff;
    }

    .perSet li a i {
        display: inline-block;
        margin-right: 5px;
        font-size: 16px;
        color: #5b9dfd;
    }
    .perSet li a span {
        width: 190px;
        height: 50px;
    }
    /*右侧*/
    .pd-con-head-right {
        width: 1000px;
        height: 960px;
        float: left;
        padding: 20px 40px 0px 40px;
        overflow: hidden;
    }

    .head-right-top {
        width: 100%;
        border-bottom: 1px dashed #dedede;
    }

    .head-right-top .right-top-title {
        font-size: 20px;
        font-weight: 700;
    }

    /*.head-right-top .right-top-acctype {*/
        /*margin-top: 10px;*/
        /*margin-bottom: 10px;*/
    /*}*/

    .head-right-top .right-top-acctype a {
        text-decoration: none;
    }

    .head-right-top .right-top-acctype a:hover {
        color: #d91685;
    }
    .head-right-top .right-top-warn {
        height: 60px;
        background-color: #fcfce2;
        border-bottom: 1px solid #e2e2e2;
    }
    .head-right-top .right-top-warn p{
        font-weight: 700;
        line-height: 60px;
        float: left;
    }
    .head-right-top .right-top-warn .warn-button{
        float: right;
        margin-top: 10px;
    }
    .pd-con-head-right ul {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .pd-con-head-right li {
        list-style-type: none;
        display: inline-block;
        height: 30px;
        line-height: 30px;
    }
    .head-right-middle {
        width: 100%;
        height: 400px;
    }
    .head-right-middle .right-middle-title {
        font-size: 20px;
        font-weight: 700;
        margin-top: 20px;
        margin-bottom: 10px;
    }

</style>

<template>
    <div id="personalData" v-title data-title="个人信息-AnswerWang">
        <homeNav></homeNav>
        <div class="personalData-con">
            <div class="pd-con-head">
                <div class="head-img">
                    <img src="../assets/5.jpg" alt=""/>

                    <p>{{this.$store.state.modified.Name}}</p>
                </div>
                <div class="fasttrack">
                    快速通道
                </div>
                <ul class="perSet">
                    <li><router-link to="/personalData/basic"><span><i class="el-icon-info"></i>个人信息</span></router-link></li>
                    <li><router-link to="/personalData/modifiedData" ><span><i class="el-icon-edit"></i>修改资料</span></router-link></li>
                    <li><router-link to="/personalData/changePassword"><span><i class="el-icon-setting"></i>修改密码</span></router-link></li>
                    <li><router-link to="/personalData/inform"><span><i class="el-icon-bell"></i>通知信息<span v-show="this.$store.state.logo.message>=1">({{this.$store.state.logo.message}})</span></span></router-link></li>
                    <!-- <li><router-link to="/personalData/award"><span><i class="el-icon-bell"></i>奖励</span></router-link></li> -->
                    <!-- <li><a href="javascript:0"><span><i class="el-icon-tickets"></i>文件</span></a></li> -->
                    <!-- <li><router-link to="/personalData/vip"><span><i ><img src="../assets/会员1.png" alt="" style="width: 16px;height: 16px;line-height: 30px;vertical-align:middle"/></i>成为会员</span></router-link></li> -->
                    <!-- <li><a href="javascript:0"><span><i class="el-icon-service"></i>在线客服</span></a></li> -->
                </ul>
            </div>
            <div>
                <router-view/>
            </div>
        </div>
        <homeFooter></homeFooter>
    </div>
</template>

<script type="es6">
    import homeNav from '@/components/public/homeNav.vue'
    import homeFooter from '@/components/public/homeFooter.vue'

    export default {
        name: 'personalData',
        components: {
            homeNav,
            homeFooter
        },
        data(){
            return {
                activeName: 'first',
                value:[

                ],
                names:''
            };
        },
        created: function () {
            if (localStorage.getItem("token")) {
                var _this = this;
                _this.axios({
                    method: "get",
                    url: `http://192.168.1.27:8088/api/Client/GetClient`,
                    async: false,
                    xhrFields: {
                        withCredentials: true
                    },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }).then(function (res) {
                    _this.$store.state.modified.Name = res.data.data.name;
                }).catch(function (error) {
                    console.log(error);
                });

            } else {

            }
            document.documentElement.scrollTop = 0;
            
        },
        methods: {
            
        },

    }
</script>