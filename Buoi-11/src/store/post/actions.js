import { mappingPostData, mappingPosts } from "../../helpers";
import postService from "../../services/post";

// Action Type
export const ACT_FETCH_ARTICLE_LATEST = 'ACT_FETCH_ARTICLE_LATEST';
export const ACT_FETCH_ARTICLE_POPULAR = 'ACT_FETCH_ARTICLE_POPULAR';
export const ACT_FETCH_ARTICLE_GENERAL = 'ACT_FETCH_ARTICLE_GENERAL'
export const ACT_FETCH_ARTICLES = "ACT_FETCH_ARTICLES"
// export const ACT_FETCH_GET_POST ="ACT_FETCH_GET_POST"
// Action
export function actFetchArticleLatest(posts) {
  return {
    type: ACT_FETCH_ARTICLE_LATEST,
    payload: {
      posts
    }
  }
}
export function actFetchArticlePopular(posts) {
  return {
    type: ACT_FETCH_ARTICLE_POPULAR,
    payload: {
      posts
    }
  }
}

export function actFetchArticleGeneral({ posts, total, totalPages, currentPage }) {
  return {
    type: ACT_FETCH_ARTICLE_GENERAL,
    payload: {
      posts, total, totalPages, currentPage
    }
  }
}


// Action Async
export function actFetchArticleLatestAsync() {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleLatest();
      const posts = response.data.map(mappingPostData);
      dispatch(actFetchArticleLatest(posts));
    } catch (err) {
      // TODO
    }
  }
}
export function actFetchArticlePopularAsync() {
  return async (dispatch) => {
    try {
      const response = await postService.getArticlePopular()
      const posts = response.data.map(mappingPostData)

      dispatch(actFetchArticlePopular(posts))
    } catch (err) {
      // TODO 
    }
  }
}
export function actFetchArticleGeneralAsync({
  perPage = 2,
  currentPage = 1
} = {}) {
  return async (dispatch) => {
    try {
      const response = await postService.getArticleGeneral({ perPage, currentPage });
      const total = Number(response.headers['x-wp-total']);
      const totalPages = Number(response.headers['x-wp-totalpages']);
      const posts = response.data.map(mappingPostData);

      dispatch(actFetchArticleGeneral({ posts, total, totalPages, currentPage }))
    } catch (err) {
      // TODO 
    }
  }
}

// Action Async
export function actFetchGetPostAsync(slug) {
  return async (dispatch) => {
    try {
      const response = await postService.getPostDetail(slug);
      // console.log(response)
      const post = mappingPosts(response.data[0]);
      return post;
      
    } catch (err) {
      console.err(err);
    }
  }
}


export function actFetchPostByCategoryIdAsync(categories) {
  return async (dispatch) => {
    try {
      let per_page = 3, page = 1;
      const response = await postService.getListByCategory({ per_page, page, categories });
      const posts = response.data.map(mappingPostData);
      return posts
    } catch (err) {
      console.err(err)
    }
  }
}



export function actFetchListPostAsync(params) {
  return async (dispatch) => {
    try {
      const response = await postService.getList(params);
      const posts = response.data.map(mappingPostData);
      return posts;
    } catch (err) {
      return null
    }
  }
}



export function actFetchArticlesAsync({
  perPage = 2,
  currentPage = 1,
  ...restParams
} = {}) {
  return async (dispatch) => {
    try {
      const response = await postService.getArticles({ perPage, currentPage, ...restParams });
      const total = Number(response.headers['x-wp-total']);
      const totalPages = Number(response.headers['x-wp-totalpages']);
      const posts = response.data.map(mappingPostData);

      dispatch(actFetchArticles({ posts, total, totalPages, currentPage }))
    } catch (err) {
      // TODO 
    }
  }
}

export function actFetchArticles({ posts, total, totalPages, currentPage }) {
  return {
    type: ACT_FETCH_ARTICLES,
    payload: {
      posts, total, totalPages, currentPage
    }
  }
}