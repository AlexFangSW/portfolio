import { createStore } from "vuex";
// Modules
import awards from "./modules/awards";
import frontend from "./modules/frontend";
import aiNLP from "./modules/aiNLP";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    awards,
    frontend,
    aiNLP,
  },
});
