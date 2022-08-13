import { LIST_POST } from "./action";

const intPost = {
  listPost: []
}

function reducer(postState = intPost, action) {
  switch (action.type) { 
    case LIST_POST :
      return {
        ...postState,
        listPost: action.payload.data
      }

    default :  
    return postState
  }

}

export default reducer;