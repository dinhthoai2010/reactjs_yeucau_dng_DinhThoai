import { api } from "./api";

const authService = {
    login(userData) {
        return api.call().post('/jwt-auth/v1/token', 
            userData
       );
    }
}

export default authService;