import api from "./api";

export const ServicePost = {
  getList (params) {
    const response = api.call().get('wp/v2/posts',{ 
      params: {...params} //, lang: 'vi'
    });
    return response;
  }
}
