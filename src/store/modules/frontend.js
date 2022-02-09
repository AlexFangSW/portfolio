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
        title: "Front-End Project",
        abstract: "This is the abstract",
      },
      {
        title: "",
        abstract: "",
      },
      {
        title: "",
        abstract: "",
      },
      {
        title: "",
        abstract: "",
      },
    ],
  },
  mutations: {},
  actions: {},
};
