<style>
    
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
                <ul>
                    <li v-for="item in classes">
                        <router-link :to="{path:'/classesDetails',query:{id:item.cla.id}}" href="javascript:void(0);">
                            {{item.cla.name}}
                        </router-link>
                        <p>订单数量:{{item.order}}</p>
                    </li>
                </ul>
            </div>
            <div style="height: 49px;">

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
                    url: `http://47.254.29.164:8088/api/Class/Class`,
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
                        url: `http://47.254.29.164:8088/api/Class/Class`,
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
                        url: `http://47.254.29.164:8088/api/Class/Class`,
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
                    url: `http://47.254.29.164:8088/api/Class/Class`,
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
