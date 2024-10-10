import $api from "../http";
export default class AuthService{
    static async login(username, password){
        return $api.post('/auth/login/', {username, password});
    }

    static async registration(email, username, password){
        return $api.post('/auth/users/', {email, username, password});
    }
    
    static async logout(){
        return $api.post('/auth/logout/');
    }
}
