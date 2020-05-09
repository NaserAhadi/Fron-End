import Vuex from 'vuex';
import Vue from 'vue';
import cryptoModule from './modules/cryptoModule';
import todosModule from './modules/todosModule';
import albumModule from "./modules/albumModule";


// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
    modules:{
        cryptoModule,
        todosModule,
        albumModule
    }
})