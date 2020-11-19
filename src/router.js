import Vue from 'vue'
import Router from 'vue-router'
const login = () => import('@/page/accountLogin.vue')
// import login from '@/page/accountLogin.vue'  //登录
const register = () => import('@/page/accountRegister.vue')
// import register from '@/page/accountRegister.vue'  //注册
const forgetPassword = () => import('@/page/accountForgetPassword.vue')
// import forgetPassword from '@/page/accountForgetPassword.vue'  //忘记密码
const accountChangePassword = () => import('@/page/accountChangePassword.vue')
// import accountChangePassword from '@/page/accountChangePassword.vue'  //忘记密码之后的修改密码
const personalData = () => import('@/page/accountPersonalData.vue')
// import personalData from '@/page/accountPersonalData.vue'  //个人信息
const home = () => import('@/page/Home.vue')
// import home from '@/page/Home.vue'  //首页
// const serch = () => import('@/page/search.vue')
// import serch from '@/page/search.vue'  //搜索结果
const schools = () => import('@/page/schoolStudy.vue')
// import schools from '@/page/schoolStudy.vue'  //学校资源
const classesStudy = () => import('@/page/classesStudy.vue')
// import classesStudy from '@/page/classesStudy.vue'  //课程资源
// const serchDetails = () => import('@/page/searchDetails.vue')
// import serchDetails from '@/page/searchDetails.vue'  //搜索详情
const content = () => import('@/page/searchDetailsContent.vue')
// import content from '@/page/searchDetailsContent.vue'  //答案页面
const university = () => import('@/page/searchDetailsUniversity.vue')
// import university from '@/page/searchDetailsUniversity.vue'  //学校详情页面
const classes = () => import('@/page/classesDetails.vue')
// import classes from '@/page/classesDetails.vue'  //课程详情页面
const member = () => import('@/page/member.vue')
// import member from '@/page/member.vue'  //会员
const imgDetails = () => import('@/page/imgDetails.vue')
// import imgDetails from '@/page/imgDetails.vue'  //图片详情
const uploadAnswer = () => import('@/page/uploadAnswer.vue')
// import uploadAnswer from '@/page/uploadAnswer.vue'  //贡献资源上传答案
const question = () => import('@/page/question.vue')
// import question from '@/page/question.vue'  //问答大厅
const questionDetails = () => import('@/page/questionDetails.vue')
// import questionDetails from '@/page/questionDetails.vue'  //问答大厅
const emailVerify = () => import('@/page/emailVerify.vue')
// import emailVerify from '@/page/emailVerify.vue'  //邮箱验证

const ownness = () => import('@/components/client/ownness.vue')
// import ownness from '@/components/client/ownness.vue'  //个人资料
const personalQuestions = () => import('@/page/personalQuestions.vue')
// import personalQuestions from '@/page/personalQuestions.vue'  //个人问答页面


// Footer里的页面
const termsOfService = () => import('@/page/footerView/termsOfService.vue')
// import termsOfService from '@/page/footerView/termsOfService.vue' //条款
const company = () => import('@/page/footerView/company.vue')
// import company from '@/page/footerView/company.vue' //公司
const news = () => import('@/page/footerView/news.vue')
// import news from '@/page/footerView/news.vue'   //新闻
const position = () => import('@/page/footerView/position.vue')
// import position from '@/page/footerView/position.vue'   //职位
const standardBehavior = () => import('@/page/footerView/standardBehavior.vue')
// import standardBehavior from '@/page/footerView/standardBehavior.vue'     //帮助中心
const faq = () => import('@/page/footerView/faq.vue')
// import faq from '@/page/footerView/faq.vue'     //行为准则
//子组件
const basic = () => import('@/components/client/basic.vue')
// import basic from '@/components/client/basic.vue'  //个人信息
const modifiedData = () => import('@/components/client/modifiedData.vue')
// import modifiedData from '@/components/client/modifiedData.vue'  //修改资料
const changePassword = () => import('@/components/client/changePassword.vue')
// import changePassword from '@/components/client/changePassword.vue'  //修改密码
const inform = () => import('@/components/client/inform.vue')
// import inform from '@/components/client/inform.vue'  //通知信息
const attention = () => import('@/components/client/attention.vue')
// import attention from '@/components/client/attention.vue'  //我的关注
const myQuestion = () => import('@/components/client/myQuestion.vue')
// import myQuestion from '@/components/client/myQuestion.vue'  //我的提问
const myAnswers = () => import('@/components/client/myAnswers.vue')
// import myAnswers from '@/components/client/myAnswers.vue'  //我的回答
const vip = () => import('@/components/client/vip.vue')
// import vip from '@/components/client/vip.vue'  //购买会员
const orderHistory = () => import('@/components/client/orderHistory.vue')
// import orderHistory from '@/components/client/orderHistory.vue'  //购买会员记录
const award = () => import('@/components/client/award.vue')
// import award from '@/components/client/award.vue'  //我的贡献

const schoolall = () => import('@/components/school/schoolall.vue')
// import schoolall from '@/components/school/schoolall.vue'  //当前学校全部课程
const file = () => import('@/components/classes/file.vue')
// import file from '@/components/classes/file.vue'  //当前课程全部题库文件
const questionFaq = () => import('@/components/public/questionFaq.vue')
// import questionFaq from '@/components/public/questionFaq.vue'

// import answer from "@/components/questionBank/answer.vue";




Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: home,

        },
        {
            path: '/login',      //设置跳转
            component: login
        },
        {
            path: '/register',      //设置跳转
            component: register
        },
        {
            path: '/accountChangePassword',      //设置跳转
            component: accountChangePassword
        },
        {
            path: '/home',      //设置跳转
            component: home
        },
        {
            path: '/schools',      //设置跳转
            component: schools
        },
        {
            path: '/classesStudy',      //设置跳转
            component: classesStudy
        },
        {
            path: '/personalData',      //设置跳转
            component: personalData,
            children: [
                {
                    path: '/',      //设置跳转
                    component: basic,
                },
                {
                    path: 'modifiedData',      //设置跳转
                    name: 'modifiedData',
                    component: modifiedData,
                },
                {
                    path: 'changePassword',      //设置跳转
                    name: 'changePassword',
                    component: changePassword,
                },
                {
                    path: 'basic',      //设置跳转
                    name: 'basic',
                    component: basic,
                },
                {
                    path: 'award',      //设置跳转
                    name: 'award',
                    component: award,
                },
                {
                    path: 'inform',      //设置跳转
                    name: 'inform',
                    component: inform,
                },
                {
                    path: 'vip',      //设置跳转
                    name: 'vip',
                    component: vip,
                },
                {
                    path: 'orderHistory',      //设置跳转
                    name: 'orderHistory',
                    component: orderHistory,
                },
                {
                    path: 'attention',      //设置跳转
                    name: 'attention',
                    component: attention,
                },
                {
                    path: 'myQuestion',      //设置跳转
                    name: 'myQuestion',
                    component: myQuestion,
                },
                {
                    path: 'myAnswers',      //设置跳转
                    name: 'myAnswers',
                    component: myAnswers,
                }

            ]
        },
        {
            path: '/classes/:classes_id/content/:classinfo_id/weeks/:weeks_id/weektype/:weektype_id',      //设置跳转
            component: content,
        },
        {
            path: '/university/:university_id',      //设置跳转
            component: university,
            children: [
                {
                    path: '/',      //设置跳转
                    component: schoolall,
                },
                {
                    path: 'schoolall',      //设置跳转
                    name: 'schoolall',
                    component: schoolall,
                }

            ]
        },
        {
            path: '/classes/:classes_id',      //设置跳转
            component: classes,
            children: [
                {
                    path: '/',      //设置跳转
                    component: file,
                },
                {
                    path: 'file',      //设置跳转
                    name: 'file',
                    component: file,
                }

            ]
        },
        {
            path: '/member',      //设置跳转
            component: member
        },
        {
            path: '/forgetPassword',      //设置跳转
            component: forgetPassword
        },
        {
            path: '/termsOfService',      //设置跳转
            component: termsOfService
        },
        {
            path: '/company',      //设置跳转
            component: company
        },
        {
            path: '/news',      //设置跳转
            component: news
        },
        {
            path: '/position',      //设置跳转
            component: position
        },
        {
            path: '/faq',      //设置跳转
            component: faq
        },
        {
            path: '/standardBehavior',      //设置跳转
            component: standardBehavior
        },
        {
            path: '/ownness/:client_id',      //设置跳转
            component: ownness
        },
        {
            path: '/classes/:classes_id/content/:classinfo_id/weeks/:weeks_id/weektype/:weektype_id/imgDetails/:imgDetails_id',      //设置跳转
            component: imgDetails
        },
        {
            path: '/uploadAnswer',      //设置跳转
            component: uploadAnswer
        },
        {
            path: '/question',      //设置跳转
            component: question
        },
        {
            path: '/questionDetails/:question_id',      //设置跳转
            component: questionDetails
        },
        {
            path: '/emailVerify',      //设置跳转
            component: emailVerify
        },
        {
            path: '/personalQuestions/:pq_id',      //设置跳转
            component: personalQuestions
        },
        {
            path: '/questionFaq',      //设置跳转
            component: questionFaq
        },

    ]
})
