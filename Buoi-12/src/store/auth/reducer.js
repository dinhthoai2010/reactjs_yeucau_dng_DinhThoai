import { ACCESS_TOKEN } from "../../constants";
import { ACT_LOGIN_SUCCESS, ACT_LOGOUT } from "./actions";

const intState = {
  token: localStorage.getItem(ACCESS_TOKEN),
  currentUser: null
}

function reducer(authState = intState, action) {
  switch (action.type) {
    case ACT_LOGIN_SUCCESS:
      localStorage.setItem(ACCESS_TOKEN, action.payload.token)
      return {
        token: action.payload.token,
        currentUser: action.payload.user
      }
    case ACT_LOGOUT:
      localStorage.removeItem(ACCESS_TOKEN);
      return {
        token: '',
        currentUser: null
      }
    default:
      return authState;
  }
}

export default reducer;