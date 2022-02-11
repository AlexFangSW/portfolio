export default {
  namespaced: true,

  state: {
    // Which project's detail is opened
    opened: false,
    className: "",
    projectName: "",
  },
  mutations: {
    setOpened(state, { cName, pName }) {
      state.opened = true;
      state.className = cName;
      state.projectName = pName;
    },
    setClosed(state) {
      state.opened = false;
      state.className = "";
      state.projectName = "";
    },
  },
  actions: {},
};
