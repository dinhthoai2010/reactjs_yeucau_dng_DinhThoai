import api from "./api";

export const ServiceCategory = {
  getList (params) {
    const response = api.call().get('wp/v2/categories',{ 
      params: {...params, lang: 'vi'}
    });
    return response;
  }
}
