import { INCREASE_VOTE, DECREASE_VOTE } from "core/types";
import { createPost } from "./model";

/**
 * returns a mutation for the changing post rating process
 *
 * @param {boolean} isDecrease -> is it should be a decreasing or increasing process
 * @returns {PostVoteHandler}
 */
export function postVoteHandler (isDecrease: boolean): PostVoteHandler {
  return (state: I_Posts, postId: string) => {
    const posts: I_Post[] = state.data as I_Post[];
    const postToUpdate: I_Post | void = posts.find((o: I_Post) => o.id === postId);
    if (!postToUpdate) return;

    const currentActionName: string = isDecrease ? DECREASE_VOTE : INCREASE_VOTE;
    const postAllowedActions: string[] = postToUpdate.allowedActions;
    const isCurrentActionAllowed: boolean = Boolean(~postAllowedActions.indexOf(currentActionName));
    const isDismiss: boolean = postAllowedActions.length === 1 && isCurrentActionAllowed;

    if (!isCurrentActionAllowed) return;

    const generateUpdatedPostConfig: I_GenerateUpdatedPostConfig = {
      isDismiss,
      isDecrease,
      postToUpdate
    };

    posts.splice(posts.indexOf(postToUpdate), 1, _generateUpdatedPost(generateUpdatedPostConfig));
  };
}

function _generateUpdatedPost (config: I_GenerateUpdatedPostConfig): I_Post {
  const {
    isDismiss,
    isDecrease,
    postToUpdate
  } = config;

  // is our action not the Dismiss so we should allow an user to do only one mirror action ( Up -> Down etc.)
  const notDismissedAction: string[] = isDecrease ? [ INCREASE_VOTE ] : [ DECREASE_VOTE ];

  // in case of dismiss we should allow an user to do both actions at the next step (Up or Down)
  const newAllowedActions: string[] = isDismiss ? [ INCREASE_VOTE, DECREASE_VOTE ] : notDismissedAction;
  let updatedPost: I_Post;

  if (isDecrease) {
    updatedPost = {
      ...postToUpdate,
      votesCount : postToUpdate.votesCount - 1,
      allowedActions : newAllowedActions
    };
  } else {
    updatedPost = {
      ...postToUpdate,
      votesCount : postToUpdate.votesCount + 1,
      allowedActions : newAllowedActions
    };
  }

  return updatedPost;
}

export function addPostHandler (state: I_Posts, postContent: string) {
  const data: I_Post[] = state.data as I_Post[];
  const newId: number = data.reduce((acc: number, post: I_Post) => +post.id > acc ? +post.id : acc, 0) + 1;

  data.splice(data.length,0, createPost(`${newId}`, postContent));
}

export function deletePostHandler (state: I_Posts, postId: string) {
  const data: I_Post[] = state.data as I_Post[];

  data.splice(data.findIndex((post: I_Post) => post.id === postId),1);
}

export function fetchPostHandler (state: I_Posts, action: I_StandardAction<I_Posts>): void {
  state.data = action.payload.data;
  state.pending = action.payload.pending;
}
