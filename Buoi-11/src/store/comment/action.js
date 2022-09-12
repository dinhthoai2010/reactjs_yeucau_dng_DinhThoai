
export const ACT_GET_COMMENT='ACT_GET_COMMENT';

export function actMainMenuDis(menu) {
  return {
    type: ACT_GET_COMMENT,
    payload: {
        menu
    }
  }
}

export function actFetchCommentBYPostId() {
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
