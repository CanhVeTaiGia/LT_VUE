import { createStore } from "vuex";

const store = createStore({
  state: {
    todos: [
      {
        id: 1,
        name: "Đá bóng",
        status: false,
      },
    ],
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload);
    },
  },
  actions: {
    addTodo({ commit }, payload) {
      commit('addTodo', payload);
    }
  }
});

export default store;
