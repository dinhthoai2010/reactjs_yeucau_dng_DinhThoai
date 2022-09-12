import { commentMapping } from "../../helpers";
import commentService from "../../services/comment";

export const ACT_GET_COMMENT = 'ACT_GET_COMMENT';

export function actCommentDis(comment) {
  return {
    type: ACT_GET_COMMENT,
    payload: {
      comment
    }
  }
}

export function actFetchCommentByPostId(params) {
  return async (dispatch) => {
    try {
      const response = await commentService.getListComment(params);
      const comment = response.data;
      const commentMaping = comment.map(item => commentMapping(item))
      dispatch(actCommentDis(commentMaping))
      // return commentMaping
    } catch (error) {
      // TODO
      console.log(`error =`, error.message);
    }
  }
}
