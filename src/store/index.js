import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
// 登录
import logo_store from '../storeComponents/logo_store.js';

import modified_store from '../storeComponents/modified_store.js';
// 搜索
import serch_message from '../storeComponents/serch_message.js';
// VIP
import vip_store from '../storeComponents/vip_store.js';
// 评论
import review_store from '../storeComponents/review.js';
// 登录人信息
import loginPerson_store from '../storeComponents/loginPerson.js';
import answer_store from '../storeComponents/answer.js';
// 问答检索登录人问题数量
import questionNums_store from '../storeComponents/questionNums_store.js';


export default new vuex.Store({
    modules:{
        logo:logo_store,
        modified:modified_store,
        serchMessage:serch_message,
        vip:vip_store,
        review:review_store,
        loginPerson:loginPerson_store,
        answer:answer_store,
        queNum:questionNums_store,
    }
})