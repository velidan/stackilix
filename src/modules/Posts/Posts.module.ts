import Vue from "vue";
import Component from "vue-class-component";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("posts");

import Post from "./components/Post";
import CreatePost from "./components/CreatePost";

@Component({
  computed: {
    ...mapState({
      posts: (state: I_Posts) => state.data,
      isPostPending: (state: I_Posts) => state.pending
    })
  },
  methods: {
    ...mapActions([
      "getPosts"
    ])
  },
  components: { Post, CreatePost },
  template: `<section>
    <h1 class="st-title"> Posts Page</h1>
     <div v-if="isPostPending">
        <h4 class="st-title-medium">fetching posts...</h4>
     </div>
     <div v-else-if="posts.length === 0">
      <h4 class="st-title-medium">Sorry. There are no posts yet. Be the first author =)</h4>
    </div>
    <div v-else>
      <template v-for="post in posts">
          <Post
            v-bind="post"
           />
         </template>
    </div>
    <hr />
    <CreatePost />
  </section>`
})
export default class Posts extends Vue {
  public getPosts: Function;

  created () {
    this.getPosts();
  }
}
