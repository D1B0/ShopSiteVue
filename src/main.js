import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import axios from 'axios'
import Vuex from 'vuex'
import store from './store'
import productModule from "@/store/productModule";



Vue.prototype.axios = axios

Vue.use(Vuex)


new Vue ({
router,
    store,
    productModule,
    render: h =>h(App)
}).$mount('#app')




