<style>
    .serchDetails {
        width: 100%;
        overflow: hidden;
    }

    .serchDetails-con {
        width: 1300px;
        margin: 0 auto;
        margin-top: 80px;
    }

    .serchDetails-con-title {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .serchDetails-con-title .small-nav {
        margin-bottom: 10px;
        color: #c2c2c2;
    }

    .serchDetails-con-title .small-warn {
        margin-top: 30px;
        color: #1d1dd8;
    }

    .serchDetails-con-title ul {
        margin-top: 20px;
    }

    .serchDetails-con-title ul li {
        list-style-type: none;
        display: inline-block;
        margin-right: 10px;
        border-right: 1px solid #e1e1e1;
        padding-right: 10px;
    }

    .serchDetails-con-title ul li p {
        color: #c9c9c9;
        margin-bottom: 4px;
        font-size: 14px;
    }

    .serchDetails-con-title ul li a {
        color: #50b4e1;
        text-decoration: none;
        font-size: 14px;
        font-weight: 700;
    }

    .serchDetails-con-title ul li a:hover {
        color: #d91685;
    }

    /*答案*/
    .serchDetails-con-details {
        margin-top: 20px;
        width: 1300px;
        position: relative;
    }

    .blur {
        /*filter: url(blur.svg#blur); /!* FireFox, Chrome, Opera *!/*/
        -webkit-filter: blur(10px); /* Chrome, Opera */
        -moz-filter: blur(10px);
        -ms-filter: blur(10px);
        filter: blur(10px);
        filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false); /* IE6~IE9 */
    }

    .details-img {
        width: 800px;
        border: 1px solid #e3e3e3;
        border-radius: 2px;
    }

    .details-img img {
        width: 800px;
        height: 800px;
    }

    .browse {
        width: 800px;
        height: 40px;
        line-height: 40px;
        background-color: #fefbe6;
        border-radius: 2px;
        margin-top: 10px;
        margin-bottom: 10px;
        text-indent: 2em;
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;

    }

    .browse a {
        text-decoration: none;
    }

    .details-img-translation {
        overflow-y: auto;
        overflow-x: auto;
        width: 800px;
        height: 800px;
        background-color: #ededed;
        text-indent: 2em;
        /*word-spacing: 30px;*/
        letter-spacing: 0.2em;
        white-space: normal;
    }

    .serchDetails-con-show {
        width: 300px;
        height: 425px;
        float: right;
        position: absolute;
        top: 1px;
        right: 30px;
        background-color: #f5f5f5;
        padding: 10px;
        text-align: center;
        border-radius: 2px;
    }

    .serchDetails-con-show h2 {
        border-bottom: 1px solid #e2e2e2;
        line-height: 30px;
    }

    .show-file ul {
        margin-top: 15px;
    }

    .show-file ul li {
        list-style-type: none;
        width: 120px;
        height: 150px;
        margin-right: 15px;
        margin-left: 15px;
        margin-bottom: 15px;
        float: left;
    }

    .show-file ul li img {
        width: 120px;
        height: 150px;
    }

    .show-file-butt {
        width: 270px;
    }
</style>
<template>
    <div class="serchDetails">
        <homeNav msg="登录/注册"/>
        <div class="serchDetails-con">
            <div class="serchDetails-con-title" v-for="item in value">
                <p class="small-nav">查看分布解决方案:</p>

                <h1>{{item.name}}</h1>
                <ul>
                    <li>
                        <p>SCHOOL</p>
                        <a href="javascript:0">{{item.university}}</a>
                    </li>
                    <li>
                        <p>COURSE TITLE</p>
                        <a href="javascript:0">POL 162</a>
                    </li>
                    <li>
                        <p>Uploaded by</p>
                        <a href="javascript:0">zhenrong</a>
                    </li>
                    <li>
                        <p>DIFFICULTY</p>
                        <a>{{item.difficulty}}</a>
                    </li>
                </ul>
                <p class="small-warn"><i class="el-icon-info"></i> This <strong>preview</strong> shows page <strong>1.
                    Sign up</strong> to view the full content.</p>
            </div>
            <div class="serchDetails-con-details">
                <div class="details-img">
                    <!-- <img src="../assets/3.jpg" class="blur"/> -->
                </div>
                <p class="browse">This is the end of the preview. <a href="javascript:0"><strong>Upgrade</strong></a> to
                    access the rest of the document.</p>

                <div class="details-img-translation">
                    Giant panda Hua Yan of China Conservation and Research Center for Giant Pandas (CCRCGP) is released
                    into the wild at Liziping Nature Reserve in Ya'an, southwest China's Sichuan Province, Oct. 20,
                    2016. On May 12, 2008, a catastrophic earthquake damaged Sichuan's Wolong Panda Reserve. After ten
                    years' efforts, the three bases of Wolong, Dujiangyan and Ya'an under the CCRCGP have been restored


                </div>
                <div class="serchDetails-con-show">
                    <h2>最受欢迎的文件</h2>

                    <div class="show-file">
                        <ul>
                            <!-- <li>
                                <img src="../assets/2.jpg" alt=""/>
                            </li>
                            <li>
                                <img src="../assets/2.jpg" alt=""/>
                            </li>
                            <li>
                                <img src="../assets/2.jpg" alt=""/>
                            </li>
                            <li>
                                <img src="../assets/2.jpg" alt=""/>
                            </li> -->
                        </ul>
                        <el-button type="primary" class="show-file-butt">更多文档</el-button>
                    </div>
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
        name: 'serchDetails',
        components: {
            homeNav,
            homeFooter
        },
        data() {
            return {
                value: [

                ]
            };
        },
        created: function () {
            this.value = this.$store.state.serchMessage.serch1
        },
        methods: {},
        mounted() {

        }
    }
</script>
