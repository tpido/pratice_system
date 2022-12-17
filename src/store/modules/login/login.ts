import type { Module } from "vuex";
import type { IRootState } from "@/store/types";
import type { LoginModule } from "./types";
const loginModule: Module<LoginModule, IRootState> = {
  namespaced: true,
  state: {
    token: "",
  },
  getters: {},
  mutations: {},
  actions: {},
};

export default loginModule;
