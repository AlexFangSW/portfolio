export default {
  namespaced: true,

  state: {
    // Stats for Awards
    active: false, // show
    // (Temporarily. Will be moved into database later.)
    skills: {
      language: ["Python"],
      framework: ["Pytorch", "keras"],
    },
    projects: [
      {
        title: "AI (NLP) Project",
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
