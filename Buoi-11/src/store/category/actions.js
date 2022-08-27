import { handleHashCategoryById, handleHashTagsById } from "../../helpers";
import categoryService from "../../services/category";

export const ACT_FETCH_ALL_CATEGORIES='ACT_FETCH_ALL_CATEGORIES';
export const ACT_FETCH_ALL_TAGS='ACT_FETCH_ALL_TAGS';

export function actFetchAllCategories(hashCategoryById) {
  return {
    type: ACT_FETCH_ALL_CATEGORIES,
    payload: {
      hashCategoryById
    }
  }
}

export function actFetchAllCategoriesAsync() {
  return async (dispatch) => {
    try {
      const response = await categoryService.getList();
      const categories = response.data;
      const hashCategoryById = handleHashCategoryById(categories);
      dispatch(actFetchAllCategories(hashCategoryById))
    } catch (error) {
      // TODO
    }
  }
}


export function actFetchAllTags(tags) {
  return {
    type: ACT_FETCH_ALL_TAGS,
    payload: {
      tags
    }
  }
}

export function actFetchAllTagsAsync() {
  return async (dispatch) => {
    try {
      const response = await categoryService.getTags();
      const tags = response.data;
      const hashTagById = handleHashTagsById(tags);
      dispatch(actFetchAllTags(hashTagById))
    } catch (error) {
      // TODO
    }
  }
}