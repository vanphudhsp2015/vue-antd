import Vue from "vue";
import Router from "vue-router";

import { Login, Register } from "../views/user";
import { UserLayout } from "../layouts";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/signin",
      name: "UserLayout",
      component: UserLayout,
      children: [
        {
          path: "",
          name: "login",
          component: Login
        }
      ]
    },
    {
      path: "/signup",
      name: "register",
      component: UserLayout,
      children: [
        {
          path: "",
          name: "signup",
          component: Register
        }
      ]
    },
    {
      path: "*",
      name: "PageNotFound",
      component: Login
    }
  ]
});
