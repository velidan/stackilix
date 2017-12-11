import Vue from "vue";
import Component from "vue-class-component";
import { mapMutations } from "vuex";

import * as types from "core/types";
import { SLTextArea } from "shared/components";

@Component({
  components: { SLTextArea },
  methods: {
    ...mapMutations("posts", {
      addPost : types.ADD_POST
    })
  },
  template: `
    <div class="create-post-box">
      <h3 class="st-title">Add post</h3>
      <SLTextArea v-model="postContent"/>
      <br />
      Preview
      <hr />
      <p class="post-preview">{{postContent}}</p>
      <hr />
      <button class="btn primary" v-bind:class="stateClasses" @click="createPostHandler" >Add post</button>
    </div>
  `
})
export default class CreatePost extends Vue {
  private postContent: string = "";
  private addPost: (postContent: string) => void;

  get stateClasses (): {}[] | void {
    return [ { disabled : this.postContent.length === 0 } ];
  }

  createPostHandler () {
    if (!this.postContent.length) return;
    this.addPost(this.postContent);
    this.postContent = "";
  }
}
