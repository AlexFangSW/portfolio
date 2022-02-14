export default {
  namespaced: true,

  state: {
    // Stats for Awards
    active: true, // show
    // (Temporarily. Will be moved into database later.)
    skills: {
      basic: ["HTML", "CSS", "Javascript"],
      preprocessor: ["SCSS"],
      framework: ["Vue.js", "Vuex"],
    },
    projects: [
      {
        title: "履歷網站(本網頁)",
        abstract: "利用Vuejs製作。結合先前所學，將RWD、Accessibility實作。",
      },
      {
        title: "練習HTML、JS、CSS運用",
        abstract: "實作小插件以練習CSS動畫、JS控制HTML DOM等。",
      },
      {
        title: "Placeholder",
        abstract: "Placeholder",
      },
      {
        title: "Placeholder",
        abstract: "Placeholder",
      },
    ],
  },
  mutations: {
    toggleActive(state) {
      state.active = !state.active;
    },
  },
  actions: {},
};
