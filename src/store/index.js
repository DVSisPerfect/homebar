import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      firstName: 'Vasya',
      lastName: 'Pupkin',
      age: 24,
    },
    AUTH: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    updateUser(state, { item, value }) {
      state[item] = value;
    },
    Authentic(state, username) {
      state.AUTH = username;
    },
  },
  actions: {
    Authentic({ commit }, username) {
      commit('Authentic', username);
    },
  },
});

export default store;
