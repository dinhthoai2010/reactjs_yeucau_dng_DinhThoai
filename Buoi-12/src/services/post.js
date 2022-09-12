import { api } from './api';

const postService = {
  getList(params) {
    return api.call().get('/post/getListPagination.php', {
      params: {
        ...params,
        lang: 'vi'
      }
    });
  },
  getArticleLatest() {
    return postService.getList({
      per_page: 3,
      page: 1
    });
  },
  getArticles({
    perPage = 2,
    currentPage = 1,
    ...restParams
  } = {}) {
    return postService.getList({
      page: currentPage,
      per_page: perPage,
      ...restParams
    })
  },
  getArticlePopular() {
    return postService.getList({
      page: 1,
      per_page: 3,
      orderby: 'post_views'
    })
  },
  getDetail(slug) {
    return postService.getList({slug});
  }
}

export default postService;