<style>
    /*.sweep {*/
        /*width: 100%;*/
        /*height: 30px;*/
        /*border-bottom: 1px solid #999999;*/
    /*}*/
    /*.sweep div {*/
        /*width: 75px;*/
        /*height: 28px;*/
        /*border-bottom: 3px solid #ff9f32;*/
        /*font-size: 18px;*/
        /*color: #505050;*/
    /*}*/
    /*.pay {*/
        /*overflow: hidden;*/
    /*}*/
    /*.pay-left {*/
        /*float: left;*/

    /*}*/
    /*.pay-left img {*/
        /*width: 125px;*/
        /*height: 125px;*/
        /*margin-top: 20px;*/
    /*}*/
    /*.pay-right {*/
        /*float: left;*/
    /*}*/
    /*.pay-right p {*/
        /*margin-top: 40px;*/
        /*margin-left: 50px;*/
        /*font-size: 16px;*/
    /*}*/
    /*.pay-right div {*/
        /*margin-top: 40px;*/
        /*margin-left: 50px;*/
        /*font-size: 16px;*/
    /*}*/
    /*.clauseText {*/
        /*font-size: 12px;*/
        /*color: #8c8c8c;*/
        /*margin-top: 10px;*/
    /*}*/
</style>


<template>
    <div id="platinayearly">
        <div class="sweep">
            <div>
                扫码支付
            </div>
        </div>
        <div class="pay">
            <div class="pay-left">
                <!-- <img src="../../assets/6.png" alt=""/> -->
            </div>
            <div class="pay-right">
                <p>应付金额: <span style="color: #ff9f32;font-size: 25px;">139</span> 元</p>
                <div><img src="../../assets/微信.png" alt=""  style="width: 20px;height: 20px;vertical-align:middle"/><img src="../../assets/支付宝.png" alt=""  style="width: 20px;height: 20px;vertical-align:middle;margin-left: 10px;margin-right: 10px;"/>请使用微信或支付宝扫码支付</div>
            </div>







            <!--<ul>-->
                <!--<li v-for="(item,index) in tabs"-->
                    <!--:class="{aaa:index == num}"-->
                    <!--@click="tab(index)">{{item}}-->
                <!--</li>-->
            <!--</ul>-->
            <!--<div class="tabCon">-->
                <!--<div v-for='(itemCon,index) in tabContents'-->
                     <!--v-show=" index == num">{{itemCon}}-->
                <!--</div>-->
            <!--</div>-->
        </div>
        <div class="clauseText">
            同意并接受《AnswerKing会员服务条款》
        </div>
    </div>
</template>
<script type="es6">
    export default {
        name: 'platinayearly',
        components: {},
        data() {
            //在ES6中添加数据是在return{}中
            return {
                activeName2: 'first',
                num: 0,
                tabs: ["内容一", "内容二","内容三"],
                tabContents: ["内容一", "内容二","内容三"],
            };
        },
        //页面的方法还是写在methods{}中
        methods: {
            tab(index) {
                const _this = this
                console.log(index)
                _this.num = index;
            }
        }
    }
</script>
