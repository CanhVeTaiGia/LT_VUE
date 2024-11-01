import { eraseUser, fetchToGetUsers, importUser } from "@/api/fetchUser";

const userStore = {
  state: {
    users: [],
  },
  getters: {
    getUsers: (state) => state.users,
  },
  mutations: {
    SET_USERS(state, payload) {
      state.users = payload;
    },
    DELETE_USER(state, payload) {
      state.users = state.users.filter((user) => user.id !== payload);
    },
    ADD_USER(state, payload) {
      state.users.push(payload);
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const users = await fetchToGetUsers();
        commit("SET_USERS", users || []);
      } catch (error) {
        console.error("Lỗi không thể lấy dữ liệu:", error);
      }
    },
    async deleteUser({ commit }, payload) {
      try {
        const res = await eraseUser(payload);
        commit("DELETE_USER", payload);
      } catch (err) {
        console.error("Lỗi không thể xóa dữ liệu:", err);
      }
    },
    async addUser({ commit }, payload) {
      try {
        const res = await importUser(payload);
        commit("ADD_USER", payload);
      } catch (err) {
        console.error("Lỗi không thể thêm dữ liệu:", err);
      }
    },
  },
};

export default userStore;
