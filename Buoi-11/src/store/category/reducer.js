import { ACT_FETCH_ALL_CATEGORIES, ACT_FETCH_ALL_TAGS } from "./actions";

const intState = {
  hashCategoryById: {},
  hashTagsById: {}

}

function reducer(categoryState = intState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_CATEGORIES:
      return {
        ...categoryState,
        hashCategoryById: action.payload.hashCategoryById
      }
    case ACT_FETCH_ALL_TAGS:
      return {
        ...categoryState,
        hashTagsById: action.payload.tags
      }
    default:
      return categoryState
  }
}

export default reducer;
