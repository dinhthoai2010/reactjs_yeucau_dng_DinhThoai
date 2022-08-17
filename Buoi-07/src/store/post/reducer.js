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
    case LIST_POST_POPULAR:
      return {
        ...postState,
        listPopular: action.payload.data
      }
      
    case LIST_POST_GENERAL:
      let data =  [...postState.listGeneral ,...action.payload.data]
      return {
        ...postState,
        listGeneral:data
      }
    default:
      return postState
  }
}

export default reducer;