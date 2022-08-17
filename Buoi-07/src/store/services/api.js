import axios from "axios"
 const api = {
  call() {
    return axios.create({
      baseURL: "https://tuyphong.net/wp-json/",
    })
    
  }
}
export default api