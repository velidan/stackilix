import Vue from "vue";
import Component from "vue-class-component";
import { PostsModule } from "modules";

// In this root component should be placed Vue-Router but now we don't need it

@Component({
  components: { PostsModule },
  template: `<main>
      <h1 class="tip general">To see the hot reloading just try to change some of these words.</h1>
      <PostsModule />
    </main>`
})
export default class Root extends Vue {}
