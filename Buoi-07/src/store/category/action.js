import { mappingCategoryData} from "../../helpers"
import { ServiceCategory } from "../services/category"

export const LIST_CATEGORY = "LIST_CATEGORY"


export function listDataCategoryAsy(params) {
  return async dispatch => {
    try {
      const response = await ServiceCategory.getList(params)
      const listCat = (response.data)
      let data = [];
      listCat.forEach(cat => {
        data.push(mappingCategoryData(cat))
      })
      console.log(data)
      dispatch({
        type: LIST_CATEGORY,
        payload: { data }
      })
    } catch (error) {
      console.log(error)
    }
  }

}