import { LIST_POST_GENERAL, LIST_POST_LATEST, LIST_POST_POPULAR } from "./action";

const intPost = {
  listLatest: [],
  listPopular: [],
  listGeneral: []
}

function reducer(postState = intPost, action) {
  switch (action.type) {
    case LIST_POST_LATEST:
      return {
        ...postState,
        listLatest: action.payload.data
      }
    case LIST_POST_GENERAL:
      return {
        ...postState,
        listPopular: action.payload.data
      }

    case LIST_POST_POPULAR:
      return {
        ...postState,
        listGeneral: action.payload.data
      }
    default:
      return postState
  }
}

export default reducer;