<style>
    /*右侧*/
    .pd-con-head-right {
        width: 1000px;
        height: 960px;
        float: left;
        padding: 20px 40px 0px 40px;
        overflow: hidden;
    }

</style>


<template>
    <div id="changePassword">
        <div class="pd-con-head-right">
            <h2>获取奖励</h2>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="上传访问奖励" name="first">上传访问奖励</el-tab-pane>
                <el-tab-pane label="其他奖励" name="second">其他奖励</el-tab-pane>
            </el-tabs>
        </div>

    </div>
</template>
<script type="es6">
    export default {
        name: 'changePassword',
        components: {
        },
        data() {
            //在ES6中添加数据是在return{}中
            return {
                activeName: 'first',
            };
        },
        //页面的方法还是写在methods{}中
        methods: {
            handleClick:function(tab, event) {
                console.log(tab, event);
            },
        }
    }
</script>
