import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import logo_store from '../storeComponents/logo_store.js';//����ĳ��store����
import modified_store from '../storeComponents/modified_store.js';//����ĳ��store����
import serch_message from '../storeComponents/serch_message.js';//����ĳ��store����
import vip_store from '../storeComponents/vip_store.js';
import recommendClass_store from '../storeComponents/recommendClass.js';
import review_store from '../storeComponents/review.js';

export default new vuex.Store({
    modules:{
        logo:logo_store,
        modified:modified_store,
        serchMessage:serch_message,
        vip:vip_store,
        recommendClass:recommendClass_store,
        review:review_store,

    }
})