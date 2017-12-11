import Vue from "vue";
import Vuex from "vuex";

import posts from "./modules/posts";

Vue.use(Vuex);

const debug: boolean = process.env.NODE_ENV !== "production";

const store: any = new Vuex.Store({
  modules: {
    posts
  },
  strict: debug
});

if ((module as any).hot) {
  (module as any).hot.accept(["./modules/posts"], () => {
    const posts = require("./modules/posts").default;
    // заменяем старые действия и мутации новыми
    store.hotUpdate({
      modules: {
        posts
      }
    });
  });
}

export default store;
