import { createStore } from "vuex";
// Modules
import awards from "./modules/awards";
import frontend from "./modules/frontend";
import aiNLP from "./modules/aiNLP";
import details from "./modules/details";
import AIDetails from "./modules/AIDetails";
import certificate from "./modules/certificate";
import practice from "./modules/practice";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    awards,
    frontend,
    aiNLP,
    details,
    AIDetails,
    certificate,
    practice,
  },
});
