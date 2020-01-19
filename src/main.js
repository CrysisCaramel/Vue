import Vue from "vue";
import VueRouter from "vue-router";
import router from "./routes";
import store from "./store/index";

import App from "./components/App/App.vue";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import Select from "./components/Select/Select.vue";
import SearchItem from "./components/SearchItem/SearchItem.vue";
import NoResultsFound from "./components/NoResultsFound/NoResultsFound.vue";
import ChangeView from "./components/ChangeView/ChangeView.vue";

Vue.use(VueRouter);
Vue.component("app-header", Header);
Vue.component("app-footer", Footer);
Vue.component("app-select", Select);
Vue.component("app-searchItem", SearchItem);
Vue.component("app-noResultsFound", NoResultsFound);
Vue.component("app-changeView", ChangeView);

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});
