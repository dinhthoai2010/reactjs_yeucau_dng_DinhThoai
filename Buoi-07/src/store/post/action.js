import { mappingPostData } from "../../helpers"
import { ServicePost } from "../services/post"

export const LIST_POST = "LIST_POST"


export function listDataAsy(params) {
  return async dispatch => {
    try {
      const response = await ServicePost.getList(params)
      const listPost = (response.data)
      console.log(listPost)

      let data = [];
      listPost.forEach(post => {
        data.push(mappingPostData(post))
      })

      dispatch({
        type: LIST_POST,
        payload: { data }
      })
    } catch (error) {
      console.log(error)
    }
  }

}