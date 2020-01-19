import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    defaultType: "type",
    defaultLanguage: "language",
    selectType: ["type", "repositories", "commit", "code", "users", "topic", "label"],
    selectLanguages: ["language", "Javascript", "css", "html", "php", "ruby", "c++", "python", "c#", "java", "go", "haskel"],
    inputValue: "",
    url: "",
    searchItems: [],
    myListItems: [],
    changeView: false
  },
  mutations: {
    getType (state, payload) {
      state.defaultType = payload;
    },
    getLanguage (state, payload) {
      state.defaultLanguage = payload;
    },
    getInputValue (state, payload) {
      state.inputValue = payload;
    },
    generateUrl (state) {
      state.url = `https://api.github.com/search/${state.defaultType}?q=${state.inputValue}+language:${state.defaultLanguage}`;
    },
    getSearchItems (state, payload) {
      const arrayIndentical = [];
      const newResponse = payload.map(({ id, forks, full_name, description, language }) => {
        return { id, forks, full_name, description, language, search: state.inputValue, checkMyList: false };
      });
      newResponse.forEach((item, index, array) => {
        const identicalItem = state.myListItems.find(value => value.id === item.id);
        if (identicalItem) {
          arrayIndentical.push({ item: identicalItem, index });
        }
      });
      arrayIndentical.forEach(value => {
        newResponse[value.index] = value.item;
      });
      state.searchItems = newResponse;
    },
    getMyListItems (state, payload) {
      const newMyList = state.myListItems.concat();
      const item = state.searchItems.find(value => value.id === payload.id);
      if (item) {
        item.checkMyList = !item.checkMyList;
        newMyList.push(item);
      } else {
        const itemMyList = newMyList.find(value => value.id === payload.id);
        itemMyList.checkMyList = !itemMyList.checkMyList;
      }
      state.myListItems = newMyList.filter(item => item.checkMyList);
    },
    changeView (state, payload) {
      state.changeView = payload;
    }
  },
  actions: {
    getResponse ({ state, commit }) {
      commit("generateUrl");
      fetch(state.url)
        .then(response => response.json())
        .then(({ items }) => commit("getSearchItems", items));
    }
  }
});
