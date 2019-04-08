<style>
    #schoolall {
        background-color: #f0f0f0;
        overflow: hidden;
    }

    /*课程*/
    .classes-con {
        width: 1300px;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 24px;
        margin-bottom: 24px;
    }
    .classes-con-info {
        overflow: hidden;
        margin-bottom: 16px;
    }
    .classes-con-info p {
        font-size: 18px;
        line-height: 40px;
        float: left;
    }

    .classes-con-info i {
        display: block;
        float: right;
        font-size: 20px;
        font-weight: bold;
        font-style: normal;
        line-height: 40px;

    }

    .serchinput {
        width: 300px;
        float: right;
    }

    .classes-con-courseSerch {
        overflow: hidden;
        margin-bottom: 16px;
    }

    .classes-con-courseSerch ul {
        overflow: hidden;
    }

    .classes-con-courseSerch ul li {
        list-style-type: none;
        float: left;
    }

    .classes-con-courseSerch ul li a {
        line-height: 40px;
        color: #000;
        text-decoration: none;
        width: 48px;
        text-align: center;
        display: inline-block;
        color: #5b9dfd;
    }

    .classes-con-courseSerch ul li:first-of-type a {
        text-align: left;
    }

    .classes-con-courseSerch ul li:last-of-type {

    }

    .classes-con-courseSerch ul li a:hover {
        background-color: #08b4e1;
        color: #000;
        border-radius: 2px;
    }

    .classes-con-course {
       
    }

    .classes-con-course div {
        display: inline-block;
        list-style-type: none;
        border-bottom: 1px dashed #757575;
        width: 49%;
        margin-right: 20px;
        margin-bottom: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        /*border: 1px dashed #a3a3a3;*/


    }

    .classes-con-course div:nth-last-child(2n+0) {
        float: right;
        margin-right: 0px;
    }

    .classes-con-course div a {
        color: #5B9DFD;
        text-decoration: none;
        font-size: 18px;
        /*border-bottom: 1px dashed #a2a2a2;*/

    }

    .classes-con-course div a:hover {
        color: #fd2490;
    }

    .classes-con-course div p {
        color: #b8b8b8;
        font-size: 14px;
        /*float: right;*/
    }

    /*/!*文件*!/*/
    /*.file-con {*/
    /*width: 1300px;*/
    /*margin: 0 auto;*/
    /*overflow: hidden;*/
    /*margin-top: 30px;*/
    /*}*/

    /*.file-con-info p {*/
    /*font-size: 20px;*/
    /*font-weight: bold;*/
    /*line-height: 40px;*/
    /*float: left;*/
    /*}*/

    /*.file-con-info i {*/
    /*display: block;*/
    /*float: right;*/
    /*font-size: 20px;*/
    /*font-weight: bold;*/
    /*font-style: normal;*/
    /*line-height: 40px;*/
    /*}*/

    /*.file-con-course {*/
    /*margin-top: 50px;*/
    /*}*/

    /*.file-course-img {*/
    /*/!*width: 200px;*!/*/
    /*/!*height: 260px;*!/*/
    /*/!*background-color: #fafafa;*!/*/
    /*/!*color: #000;*!/*/
    /*/!*text-decoration: none;*!/*/
    /*/!*margin-bottom: 20px;*!/*/
    /*/!*display: inline-block;*!/*/
    /*/!*margin-left: 29px;*!/*/
    /*/!*margin-right: 29px;*!/*/
    /*/!*border-radius: 4px;*!/*/
    /*}*/

    /*.file-course-img:hover {*/
    /*color: #fe2a93;*/
    /*}*/

    /*.file-course-img img {*/
    /*width: 180px;*/
    /*height: 210px;*/
    /*margin-left: 10px;*/
    /*margin-top: 10px;*/

    /*}*/

    /*.file-course-img p {*/
    /*width: 200px;*/
    /*height: 35px;*/
    /*border-top: 1px solid #d6d6d6;*/
    /*background-color: #eaeaea;*/
    /*text-align: center;*/
    /*border-radius: 0px 0px 4px 4px;*/
    /*}*/
</style>


<template>
    <div id="schoolall">
        <!-- 所有课程 -->
        <div class="classes-con">
            <div class="classes-con-info">
                <div style="width: 995px;float: left;height: 40px;">
                    <p>所有课程({{classeslength}})</p>
                    <!--<i>找到你的课程</i>-->
                </div>

                <div class="serchinput">
                    <el-input
                            placeholder="请输入需要查询的课程(回车确认)"
                            v-model="input1"
                            @change="queryname"
                            clearable>
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </div>
            </div>
            <div class="classes-con-courseSerch">
                <ul>
                    <li v-for="item in ABC" @click="queryClass(item.name)"><a href="javascript:void(0)">{{item.name}}</a></li>
                </ul>

            </div>
            <div class="classes-con-course">
                <div v-for="item in classes">
                        <router-link :to="{path:'/classesDetails',query:{id:item.cla.id}}" href="javascript:void(0);">
                            {{item.cla.name}}
                        </router-link>
                        <p>题库集:{{item.order}}</p>
                </div>
            </div>
        </div>


    </div>
</template>
<script type="es6">
    export default {
        name: 'schoolall',
        components: {},
        data() {
            //在ES6中添加数据是在return{}中
            return {
                input1: '',
                classes: [],
                classeslength: '',
                aaa: [],
                ABC: [
                    {name: 'All'}, {name: 'A'}, {name: 'B'}, {name: 'C'}, {name: 'D'},
                    {name: 'E'}, {name: 'F'}, {name: 'G'}, {name: 'H'}, {name: 'I'},
                    {name: 'J'}, {name: 'K'}, {name: 'L'}, {name: 'M'}, {name: 'N'},
                    {name: 'O'}, {name: 'P'}, {name: 'Q'}, {name: 'R'}, {name: 'S'},
                    {name: 'T'}, {name: 'U'}, {name: 'V'}, {name: 'W'}, {name: 'X'},
                    {name: 'Y'}, {name: 'Z'},
                ]
            };
        },
        created: function () {
            var _this = this;
            console.log(this)
            _this.universityidClass();
        },
        methods: {
            universityidClass: function () {
                var _this = this;
                //通过学校ID查询拥有的课程
                _this.axios({
                    method: "get",
                    url: `http://192.168.1.27:8088/api/Class/Class`,
                    async: false,
                    params: {
                        universityid: _this.$route.query.id
                    },
                    xhrFields: {
                        withCredentials: true
                    }
                }).then(function (res) {
                    console.log(res);
                    _this.classes = res.data.data;
                    _this.classeslength = _this.classes.length;

                }).catch(function (error) {
                    console.log(error);
                });
            },
            queryClass:function(alifs){
                var _this = this;
                if(alifs == 'All'){
                    _this.axios({
                        method: "get",
                        url: `http://192.168.1.27:8088/api/Class/Class`,
                        async: false,
                        params: {
                            universityid: _this.$route.query.id
                        },
                        xhrFields: {
                            withCredentials: true
                        }
                    }).then(function (res) {
                        _this.classes = res.data.data;
                        _this.classeslength = _this.classes.length;

                    }).catch(function (error) {
                        console.log(error);
                    });
                }else {
                    _this.axios({
                        method: "get",
                        url: `http://192.168.1.27:8088/api/Class/Class`,
                        async: false,
                        params: {
                            universityid: _this.$route.query.id,
                            alif:alifs
                        },
                        xhrFields: {
                            withCredentials: true
                        }
                    }).then(function (res) {
                        _this.classes = res.data.data;

                    }).catch(function (error) {
                        console.log(error);
                    });
                }

            },
            queryname:function(names){
                var _this = this;
                _this.axios({
                    method: "get",
                    url: `http://192.168.1.27:8088/api/Class/Class`,
                    async: false,
                    params: {
                        universityid: _this.$route.query.id,
                        name:names
                    },
                    xhrFields: {
                        withCredentials: true
                    }
                }).then(function (res) {
                    _this.classes = res.data.data;

                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>
