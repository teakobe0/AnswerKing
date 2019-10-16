import Vue from 'vue'
import Router from 'vue-router'
// const login = () => import('@/page/accountLogin.vue')
import login from '@/page/accountLogin.vue'  //登录
// const register = () => import('@/page/accountRegister.vue')
import register from '@/page/accountRegister.vue'  //注册
// const forgetPassword = () => import('@/page/accountForgetPassword.vue')
import forgetPassword from '@/page/accountForgetPassword.vue'  //忘记密码
// const accountChangePassword = () => import('@/page/accountChangePassword.vue')
import accountChangePassword from '@/page/accountChangePassword.vue'  //忘记密码之后的修改密码
// const personalData = () => import('@/page/accountPersonalData.vue')
import personalData from '@/page/accountPersonalData.vue'  //个人信息
// const home = () => import('@/page/Home.vue')
import home from '@/page/Home.vue'  //首页
// const serch = () => import('@/page/search.vue')
import serch from '@/page/search.vue'  //搜索结果
// const schools = () => import('@/page/schoolStudy.vue')
import schools from '@/page/schoolStudy.vue'  //学校资源
// const classesStudy = () => import('@/page/classesStudy.vue')
import classesStudy from '@/page/classesStudy.vue'  //课程资源
// const serchDetails = () => import('@/page/searchDetails.vue')
import serchDetails from '@/page/searchDetails.vue'  //搜索详情
// const serchDetailsContent = () => import('@/page/searchDetailsContent.vue')
import content from '@/page/searchDetailsContent.vue'  //答案页面
// const serchDetailsUniversity = () => import('@/page/searchDetailsUniversity.vue')
import university from '@/page/searchDetailsUniversity.vue'  //学校详情页面
// const classesDetails = () => import('@/page/classesDetails.vue')
import classes from '@/page/classesDetails.vue'  //课程详情页面
// const member = () => import('@/page/member.vue')
import member from '@/page/member.vue'  //会员

import ownness from '@/components/client/ownness.vue'  //个人资料
// Footer里的页面
import termsOfService from '@/page/footerView/termsOfService.vue' //条款
import company from '@/page/footerView/company.vue' //公司
import news from '@/page/footerView/news.vue'   //新闻
import position from '@/page/footerView/position.vue'   //职位
import standardBehavior from '@/page/footerView/standardBehavior.vue'     //帮助中心
import faq from '@/page/footerView/faq.vue'     //行为准则
//子组件
import basic from '@/components/client/basic.vue'  //个人信息
import modifiedData from '@/components/client/modifiedData.vue'  //修改资料
import changePassword from '@/components/client/changePassword.vue'  //修改密码
import inform from '@/components/client/inform.vue'  //通知信息
import attention from '@/components/client/attention.vue'  //我的关注
import vip from '@/components/client/vip.vue'  //购买会员
import orderHistory from '@/components/client/orderHistory.vue'  //购买会员记录
import award from '@/components/client/award.vue'  //上传奖励
import schoolall from '@/components/school/schoolall.vue'  //当前学校全部课程
import schoolClasses from '@/components/school/schoolClasses.vue'
import file from '@/components/classes/file.vue'  //当前课程全部题库文件
import schoolFile from '@/components/school/schoolFile.vue'



import platinavip from '@/components/client/platinayearly.vue'




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
            path: '/serch',      //设置跳转
            component: serch
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
            path: '/serchDetails',      //设置跳转
            component: serchDetails
        },
        {
            path: '/personalData',      //设置跳转
            component: personalData,
            children:[
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
                    // children:[
                    //     {
                    //         path: '/',      //设置跳转
                    //         component: platinavip,
                    //     },
                    //     {
                    //         path: 'platinavip',      //设置跳转
                    //         name: 'platinavip',
                    //         component: platinavip,
                    //     },
                    // ]
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
                }

            ]
        },
        {
            path: '/schools/university/:university_id/classes/:classes_id/content/:classinfo_id',      //设置跳转
            component: content,
        },
        {
            path: '/schools/university/:university_id',      //设置跳转
            component: university,
            children:[
                {
                    path: '/',      //设置跳转
                    component: schoolall,
                },
                {
                    path: 'schoolall',      //设置跳转
                    name: 'schoolall',
                    component: schoolall,
                },
                {
                    path: 'schoolClasses',      //设置跳转
                    name: 'schoolClasses',
                    component: schoolClasses,
                },
                {
                    path: 'schoolFile',      //设置跳转
                    name: 'schoolFile',
                    component: schoolFile,
                }

            ]
        },
        {
            path: '/schools/university/:university_id/classes/:classes_id',      //设置跳转
            component: classes,
            children:[
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

    ]
})
