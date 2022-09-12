import { api } from './api';

const commentService = {
  getList({
    page = 1,
    per_page = 100
  } = {}) {
    return api.call().get('/wp/v2/categories', {
      params: {
        page,
        per_page
      }
    });
  },
  getTags() {
    return api.call().get('/wp/v2/tags');
  }
}

export default commentService;