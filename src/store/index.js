import { createStore } from "vuex";
// Modules
import awards from "./modules/awards";
import frontend from "./modules/frontend";
import aiNLP from "./modules/aiNLP";
import details from "./modules/details";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    awards,
    frontend,
    aiNLP,
    details,
  },
});
