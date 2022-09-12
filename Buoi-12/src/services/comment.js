import { api } from './api';

const commentService = {
  getListComment(params = {}) {
    return api.call().get('/wp/v2/comments', {
      params: params
    });
  },
}

export default commentService;