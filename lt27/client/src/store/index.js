import { createStore } from "vuex";
import userStore from "./modules/userStore";


const store = createStore({
  modules: {
    userStore,
  },
});
export default store;
