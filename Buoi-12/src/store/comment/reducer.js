import { ACT_GET_COMMENT } from "./action";

const intState = {
  listComment: [],
  commentPaging: {
    list: [],
    totalComment: 0,
    currentPage: 1
  }
} 

function reducer(postState = intState, action) {
  switch (action.type) {
    case ACT_GET_COMMENT:
      return {
        ...postState,
        listComment: action.payload.comment
      }
    default:
      return postState;
  }
}

export default reducer;