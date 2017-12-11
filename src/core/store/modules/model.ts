import * as types from "core/types";

const PostInitialModel: I_Post = {
  id : "0",
  content : "",
  votesCount : 0,
  allowedActions : [
    types.INCREASE_VOTE,
    types.DECREASE_VOTE
  ]
};

export function createPost (id: string, content: string): I_Post {
  return {
    ...PostInitialModel,
    id,
    content
  };
}
