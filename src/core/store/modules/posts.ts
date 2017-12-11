import { httpService } from "shared/services";
import * as types from "core/types";
import {
  fetchPostHandler,
  postVoteHandler,
  addPostHandler,
  deletePostHandler
} from "./helper";

const state: I_Posts = {
  pending : false,
  data : null,
  error: null
};

const mutations = {
  [ types.INCREASE_VOTE ] : postVoteHandler(false),
  [ types.DECREASE_VOTE ] : postVoteHandler(true),

  [ types.FETCH_POSTS_INIT ] : fetchPostHandler,
  [ types.FETCH_POSTS_SUCCESS ] : fetchPostHandler,
  [ types.FETCH_POSTS_FAILED ] : fetchPostHandler,

  [ types.ADD_POST ] : addPostHandler,
  [ types.DELETE_POST ] : deletePostHandler
};

const actions = {
  getPosts ({ commit, state }: any) {
    commit({ /* here we can skip this for sure because our fetching will be started immediately */
      type : types.FETCH_POSTS_INIT,
      payload : { ...state, pending : true }
    });

    httpService.generateGetRequest("/getPosts")
      .then((postsData: I_Post[]) => {
        commit({
          type : types.FETCH_POSTS_SUCCESS,
          payload : { ...state, data : postsData, pending : false }
        });
      })
      .catch((error: Error) => {
        commit({
          type : types.FETCH_POSTS_FAILED,
          payload : { ...state, error }
        });
      });
  }
};

export default {
  namespaced : true,
  state,
  mutations,
  actions
};
