import Vue from "vue";
import Component from "vue-class-component";
import * as types from "core/types";
import { mapMutations } from "vuex";

import Vote from "./Vote";

@Component({
  props: {
    id : String,
    content : String,
    votesCount : Number,
    allowedActions : Array
  },
  components: { Vote },
  methods: {
    ...mapMutations("posts", {
      increaseVote : types.INCREASE_VOTE,
      decreaseVote : types.DECREASE_VOTE,
      deletePost : types.DELETE_POST
    })
  },
  template: `
  <article class="post-box">
   <Vote :votesCount="votesCount" :allowedActions="allowedActions"
    v-on:increment=increaseVote(id)
    v-on:decrement=decreaseVote(id)
   />
   <p class="post-content">{{content}}</p>
   <i class="post-delete-icon" @click="deletePost(id)"></i>
  </article>
  `
})
export default class Post extends Vue {}
