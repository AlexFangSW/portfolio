export default {
  namespaced: true,

  state: {
    // Which project's detail is opened
    opened: false,
    className: "",
    projectName: "",
    abstract: "",
  },
  mutations: {
    setOpened(state, { cName, pName, abstract }) {
      state.opened = true;
      state.className = cName;
      state.projectName = pName;
      state.abstract = abstract;
    },
    setClosed(state) {
      state.opened = false;
      state.className = "";
      state.projectName = "";
      state.abstract = "";
    },
  },
  actions: {},
};
