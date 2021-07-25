import Vue from 'vue';
import Vuex from 'vuex';
import mapModule from '@/store/modules/map';
import { RootState } from '@/types/store';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
    state: {},
    mutations: {},
    actions: {},
    modules: { mapModule }
});
