import { FORM_SUBMIT_LOGIN } from "./actions";

const intState = {
  currentUser: null
}

function reducer(authState = intState, action) {

  // switch (action.type) {
  //   case FORM_SUBMIT_LOGIN:
  //     return {
  //       ...categoryState,
  //       currentUser: action.payload.hashCategoryById
  //     }
  //   default:
  //     return categoryState
  // }
  return authState;
}

export default reducer;
