import { mappingMenu } from "../../helpers";
import menuService from "../../services/menu";

export const ACT_MAIN_MENU='ACT_MAIN_MENU';

export function actMainMenuDis(menu) {
  return {
    type: ACT_MAIN_MENU,
    payload: {
        menu
    }
  }
}

export function actFetchMainMenu() {
  return async (dispatch) => {
    try {
      const response = await menuService.getList();
      const mainMenu = response.data.items;
      let menu = [];
      menu = mappingMenu(mainMenu,menu);
      dispatch(actMainMenuDis(menu))
    } catch (error) {
      // TODO
        console.log(`error =`, error.message);
    }
  }
}
