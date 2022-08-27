import axios from 'axios';
import { BASE_URL } from '../constants';
console.log(BASE_URL);
export const api = {
  call() {
    return axios.create({
      baseURL: BASE_URL
    });
  }
}