import VueRouter from "vue-router";
import Search from "./components/pages/Search";
import MyList from "./components/pages/MyList";

export default new VueRouter({
  routes: [
    {
      path: "",
      component: Search
    },
    {
      path: "/myList",
      component: MyList
    }
  ],
  mode: "history"
});
