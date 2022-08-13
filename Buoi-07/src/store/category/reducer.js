import { LIST_CATEGORY } from "./action";

const intCategory = {
  listCategory: []
}

function reducer(storeCategory = intCategory, action) {
  switch (action.type) { 
    case LIST_CATEGORY :
      return {
        ...intCategory,
        listCategory: action.payload.data
      }

    default :  
    return storeCategory
  }

}

export default reducer;