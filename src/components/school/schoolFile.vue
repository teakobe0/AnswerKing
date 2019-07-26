<style>
    /*#file {*/
        /*background-color: #f0f0f0;*/
        /*overflow: hidden;*/
    /*}*/

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
        /*width: 200px;*/
        /*height: 260px;*/
        /*background-color: #fafafa;*/
        /*color: #000;*/
        /*text-decoration: none;*/
        /*margin-bottom: 20px;*/
        /*display: inline-block;*/
        /*margin-left: 29px;*/
        /*margin-right: 29px;*/
        /*border-radius: 4px;*/
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
    <div id="file">
        <div class="file-con">
            <div class="file-con-info">
                <div style="width: 995px;float: left;height: 40px;">
                    <p>所有文件(1000)</p>
                </div>
            </div>
            <div class="file-con-course">
                <a href="javascript:0" class="file-course-img" v-for="item in file">
                    <img src="../../assets/3.jpg" alt=""/>
                    <p>{{item.name}}</p>
                </a>
            </div>
        </div>

    </div>
</template>
<script type="es6">
    export default {
        name: 'classes',
        components: {},
        data() {
            //在ES6中添加数据是在return{}中
            return {
                input1: '',
                file: [
                    {
                        name:'经济101'
                    },
                    {
                        name:'经济102'
                    },
                    {
                        name:'经济104'
                    },
                    {
                        name:'经济104'
                    },
                    {
                        name:'经济105'
                    },
                    {
                        name:'经济105'
                    },

                ]
            };
        },
        created: function () {


        },
        methods: {}
    }
</script>
