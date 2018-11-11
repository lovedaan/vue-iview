import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import user from './modules/user'
import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex);

const state = {
  count: 10
};


export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    user
  },
  plugins: [saveInLocal ]
});