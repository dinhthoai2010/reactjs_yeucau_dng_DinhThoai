import { mappingPostData } from "../../helpers"
import { ServicePost } from "../services/post"

export const LIST_POST_POPULAR = "LIST_POST_POPULAR"
export const LIST_POST_GENERAL = "LIST_POST_GENERAL"
export const LIST_POST_LATEST = "LIST_POST_LATEST"



export function listLatest(params) {
  return async dispatch => {
    try {
      const response = await ServicePost.getList(params)
      const listPost = (response.data)
      let data = [];
      listPost.forEach(post => {
        data.push(mappingPostData(post))
      })
      dispatch({
        type: LIST_POST_LATEST,
        payload: { data }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function listGeneral (params) {
  return async dispatch => {
    try {
      const response = await ServicePost.getList(params)
      const listPost = (response.data)

      let data = [];
      listPost.forEach(post => {
        data.push(mappingPostData(post))
      })

      dispatch({
        type: LIST_POST_GENERAL,
        payload: { data }
      })
    } catch (error) {
      console.log(error)
    }
  }
}


export function listPopular (params) {
  return async dispatch => {
    try {
      const response = await ServicePost.getList(params)
      const listPost = (response.data)

      let data = [];
      listPost.forEach(post => {
        data.push(mappingPostData(post))
      })

      dispatch({
        type: LIST_POST_POPULAR,
        payload: { data }
      })
    } catch (error) {
      console.log(error)
    }
  }
}