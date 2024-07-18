import { createStore } from 'vuex';
import juegos from './juegos.json';

export default createStore({
  state: {
    juegos,
  },
  
  mutations: {
    setJuegos(state, juegos) {
      state.juegos = juegos;
    }
  },

  actions: {
    incrementar({commit, state}, i) {
      const { juegos } = state;
      juegos[i].stock++;
      commit('setJuegos', juegos);
    },
    decrementar({ commit, state}, i) {
      const { juegos } = state;
      juegos[i].stock--;
      commit('setJuegos', juegos);
    }
  },
  // sin uso en este desafío
  getters: {
  },
  modules: {
  }
})
