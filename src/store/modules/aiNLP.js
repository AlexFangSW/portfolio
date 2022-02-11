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
        title: "BERT+LSTM 文本分類器",
        abstract:
          "與台師大華語文科技中心合作。利用BERT將長篇文章分段處理，產生語意向量，再以LSTM模仿人類閱讀順序，整合判斷其分類。",
      },
      {
        title: "Auto Summary",
        abstract:
          "專為長文本所製作，分割出文章中各個主題，再從中挑選摘要句，獲得較為全面的摘要。降低因文章篇幅長，摘要後所遺漏的細節。",
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
  mutations: {
    toggleActive(state) {
      state.active = !state.active;
    },
  },
  actions: {},
};
