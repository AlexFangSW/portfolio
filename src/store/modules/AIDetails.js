export default {
  namespaced: true,

  state: {
    open: "summary", // original, block, summary
  },
  mutations: {
    setOpen(state, payload) {
      state.open = payload;
    },
  },
  actions: {},
};
