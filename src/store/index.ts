import { createStore } from "vuex";
import loginModule from "./modules/login/login";
import type { IRootState } from "./types";

const store = createStore<IRootState>({
  state: {
    name: "123",
    age: 18,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { loginModule },
});

export default store;
