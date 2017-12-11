/**
 * ...standard stuff. Nothing to comment
 * @property allowedActions -> a list of the allowed action that an user can execute at the current moment
 * after every vote changing this list be changed to prevent action duplication
 */
interface I_Post {
  id : string;
  content : string;
  votesCount : number;
  allowedActions : string[]
}

interface I_Posts {
  pending : boolean;
  data : I_Post[] | null;
  error : null
}

/**
 * @property isDismiss -> is our action dismiss. In that case we should allow an user to execute both actions again
 * @property isDecrease -> to detect a type of action
 * @property postToUpdate -> a post that we should update
 */
interface I_GenerateUpdatedPostConfig {
  isDismiss : boolean,
  isDecrease : boolean,
  postToUpdate : I_Post
}

interface I_DefaultHeaders {
  "Accept-Language" : string;
  "Content-Type" : string;
}

interface I_StandardAction<T> {
  type : string;
  payload : T
}

type PostVoteHandler = (state: I_Posts, postId: string) => void;