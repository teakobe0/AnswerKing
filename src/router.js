import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login.vue'
import register from '@/page/register.vue'
import home from '@/page/Home.vue'
import serch from '@/page/serch.vue'
import schoolStudy from '@/page/schoolStudy.vue'
import subject from '@/page/subject.vue'
import serchDetails from '@/page/serchDetails.vue'
import personalData from '@/page/personalData.vue'
import serchDetailsContent from '@/page/serchDetailsContent.vue'
import serchDetailsUniversity from '@/page/serchDetailsUniversity.vue'
import classesDetails from '@/page/classesDetails.vue'
import member from '@/page/member.vue'
//子组件
import basic from '@/components/client/basic.vue'
import modifiedData from '@/components/client/modifiedData.vue'
import changePassword from '@/components/client/changePassword.vue'
import award from '@/components/client/award.vue'
import schoolall from '@/components/school/schoolall.vue'
import schoolClasses from '@/components/school/schoolClasses.vue'
import file from '@/components/classes/file.vue'
import schoolFile from '@/components/school/schoolFile.vue'
import vip from '@/components/client/vip.vue'
import platinavip from '@/components/client/platinayearly.vue'



Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/login',      //设置跳转
            name: 'login',
            component: login
        },
        {
            path: '/register',      //设置跳转
            name: 'register',
            component: register
        },
        {
            path: '/home',      //设置跳转
            name: 'home',
            component: home
        },
        {
            path: '/serch',      //设置跳转
            name: 'serch',
            component: serch
        },
        {
            path: '/schoolStudy',      //设置跳转
            name: 'schoolStudy',
            component: schoolStudy
        },
        {
            path: '/subject',      //设置跳转
            name: 'subject',
            component: subject
        },
        {
            path: '/serchDetails',      //设置跳转
            name: 'serchDetails',
            component: serchDetails
        },
        {
            path: '/personalData',      //设置跳转
            name: 'personalData',
            component: personalData,
            children:[
                {
                    path: '',      //设置跳转
                    name: 'basic',
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
                    path: 'vip',      //设置跳转
                    name: 'vip',
                    component: vip,
                    children:[
                        {
                            path: '',      //设置跳转
                            name: 'platinavip',
                            component: platinavip,
                        },
                        {
                            path: 'platinavip',      //设置跳转
                            name: 'platinavip',
                            component: platinavip,
                        },
                    ]
                }

            ]
        },
        {
            path: '/serchDetailsContent',      //设置跳转
            name: 'serchDetailsContent',
            component: serchDetailsContent,
        },
        {
            path: '/serchDetailsUniversity',      //设置跳转
            name: 'serchDetailsUniversity',
            component: serchDetailsUniversity,
            children:[
                {
                    path: '',      //设置跳转
                    name: 'schoolall',
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
            path: '/classesDetails',      //设置跳转
            name: 'classesDetails',
            component: classesDetails,
            children:[
                {
                    path: '',      //设置跳转
                    name: 'file',
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
            name: 'member',
            component: member
        },


    ]
})
