import {ACT_MAIN_MENU } from "./actions";

const intState = {
  mainMenu: []
}

function reducer(menuState = intState, action) {
  switch (action.type) {
    case ACT_MAIN_MENU:
      return {
        ...menuState,
        mainMenu: action.payload.menu
      }
    default:
      return menuState
  }
}

export default reducer;