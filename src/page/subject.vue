<style>
    #subject {
        overflow: hidden;
    }

    .subject-con {
        margin-top: 80px;
    }

    .subject-con-title {
        height: 100px;
        border-bottom: 1px solid #d3f6fe;
        padding: 50px 0px;
        text-align: center;
    }

    .subject-con-title h1 {
        margin-bottom: 20px;
    }

    .subject-con-ico {
        width: 1300px;
        height: 200px;
        margin: 0 auto;
        text-align: center;
    }

    .subject-con-ico-div {
        width: 82px;
        height: 90px;
        float: left;
        margin-right: 40px;
        margin-left: 40px;
        margin-top: 40px;
        color: #08b4e1;
        text-decoration: none;
        font-family: '微软雅黑';
        font-weight: 700;
        font-size: 14px;
    }

    .subject-con-ico-div:hover {
        color: #dd1037;
    }

    .subject-con-ico img {
        border-radius: 2px;
        width: 82px;
    }

    .subject-con-math {
        width: 1300px;
        margin: 0 auto;
        margin-bottom: 40px;
    }

    .math-title {
        text-align: left;
        width: 1300px;
        height: 40px;
        margin: 0 auto;
        font-size: 20px;
        font-weight: 700;
        line-height: 40px;
        border-bottom: 1px solid #dbdbdb;
    }

    .math-title p {
        margin-left: 10px;
    }
    .math-con {
        width: 1300px;
    }
    .math-con li {
        display: inline-block;
        list-style-type: none;
        text-align: left;
        width: 430px;
        margin-bottom: 10px;

    }
    .math-con li .math-name{
        color: #08b4e1;
        text-decoration: none;
        font-weight: 700;
        line-height: 40px;


    }
    .math-con li .math-name:hover {
        color: #c40e31;
    }

    .math-con li .math-sum {
        color: #d2d2d2;
        font-weight: 100;
        font-size: 14px;
        text-decoration: none;
    }
    .math-con li .math-sum:hover {
        color: #707070;
       
    }
</style>

<template>
    <div id="subject">
        <homeNav></homeNav>
        <div class="subject-con">
            <div class="subject-con-title">
                <h1>查看学科</h1>

                <p>无论你是在寻找工程实践问题还是商业学习指南——</p>
            </div>
            <div class="subject-con-ico">
                <a href="javascript:void(0)" class="subject-con-ico-div">
                    <img src="../assets/2.jpg" alt=""/>
                    数学
                </a>
                <a href="javascript:void(0)" class="subject-con-ico-div">
                    <img src="../assets/2.jpg" alt=""/>
                    科学
                </a>
                <a href="javascript:void(0)" class="subject-con-ico-div">
                    <img src="../assets/2.jpg" alt=""/>
                    工程与技术
                </a>
                <a href="javascript:void(0)" class="subject-con-ico-div">
                    <img src="../assets/2.jpg" alt=""/>
                    商业
                </a>
                <a href="javascript:void(0)" class="subject-con-ico-div">
                    <img src="../assets/2.jpg" alt=""/>
                    社会科学
                </a>
                <a href="javascript:void(0)" class="subject-con-ico-div">
                    <img src="../assets/2.jpg" alt=""/>
                    艺术与人文
                </a>
                <a href="javascript:void(0)" class="subject-con-ico-div">
                    <img src="../assets/2.jpg" alt=""/>
                    历史
                </a>
                <a href="javascript:void(0)" class="subject-con-ico-div">
                    <img src="../assets/2.jpg" alt=""/>
                    外语
                </a>
            </div>
            <div class="subject-con-math">
                <div class="math-title">
                    <p>数学</p>
                </div>
                <div class="math-con">
                    <ul>
                        <li v-for="item in maths">
                            <a class="math-name" href="javascript:void(0)">{{item.name}}</a> <br/>
                            <a class="math-sum" href="javascript:void(0)">{{item.num}}文件</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="subject-con-math">
                <div class="math-title">
                    <p>商业</p>
                </div>
                <div class="math-con">
                    <ul>
                        <li v-for="item in business">
                            <a class="math-name" href="javascript:void(0)">{{item.name}}</a> <br/>
                            <a class="math-sum" href="javascript:void(0)">{{item.num}}文件</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="subject-con-math">
                <div class="math-title">
                    <p>历史</p>
                </div>
                <div class="math-con">
                    <ul>
                        <li v-for="item in maths">
                            <a class="math-name" href="javascript:void(0)">{{item.name}}</a> <br/>
                            <a class="math-sum" href="javascript:void(0)">{{item.num}}文件</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="subject-con-math">
                <div class="math-title">
                    <p>科学</p>
                </div>
                <div class="math-con">
                    <ul>
                        <li v-for="item in maths">
                            <a class="math-name" href="javascript:void(0)">{{item.name}}</a> <br/>
                            <a class="math-sum" href="javascript:void(0)">{{item.num}}文件</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="subject-con-math">
                <div class="math-title">
                    <p>外语</p>
                </div>
                <div class="math-con">
                    <ul>
                        <li v-for="item in maths">
                            <a class="math-name" href="javascript:void(0)">{{item.name}}</a> <br/>
                            <a class="math-sum" href="javascript:void(0)">{{item.num}}文件</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <homeFooter></homeFooter>
    </div>
</template>

<script type="es6">
    import homeNav from '@/components/public/homeNav.vue'
    import homeFooter from '@/components/public/homeFooter.vue'

    export default {
        name: 'home',
        components: {
            homeNav,
            homeFooter
        },
        data() {
            return {
                maths: [
                    {
                        name:'基础数学',
                        num:1234
                    },
                    {
                        name:'微积分',
                        num:34534
                    },
                    {
                        name:'代数',
                        num:123434
                    },
                    {
                        name:'几何',
                        num:1253534
                    },
                    {
                        name:'三角',
                        num:1253534
                    },
                    {
                        name:'统计',
                        num:1253534
                    },
                ],
                business:[
                    {
                      name:'管理',
                      num:22523
                    },
                    {
                        name:'会计',
                        num:22523
                    },
                    {
                        name:'经济学',
                        num:22523
                    },
                    {
                        name:'创业',
                        num:22523
                    },
                    {
                        name:'金融',
                        num:22523
                    },

                ]
            };
        },
        created: function () {
            var _this = this;
            //this.axios({
            //    method: "get",
            //    url: `http://192.168.1.27:8088/api/ClassInfoContent/Search`,
            //    async: false,
            //    params: {
            //        name: ''
            //    },
            //    xhrFields: {
            //        withCredentials: true
            //    }
            //}).then(function (res) {
            //    console.log(res);
            //    _this.maths = res.data.data.classes
            //}).catch(function (error) {
            //    console.log(error);
            //});
        },
        methods: {}
    }
</script>