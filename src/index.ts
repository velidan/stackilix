import "./assets/styles/main.sass";

import Vue from "vue";
import { Root, store } from "./core";

/* tslint:disable:no-unused-expression */
new Vue({
  el: document.getElementById("stack-box") as Element,
  store,
  components: { Root },
  render: (h: Function) => h("Root")
});
