import{makeAutoObservable} from 'mobx'
import AuthService from '../services/AuthService';
import axios from 'axios';
import { API_URL } from '../http';

export class Store{
    user = {};
    isAuth = false;
    isLoading = false;
    constructor(){
        makeAutoObservable(this);
    }

    setAuth(bool){
        this.isAuth = bool
    }

    setUser(user){
        this.user = user;
    };

    setLoading(bool){
        this.isLoading = bool;
    }

    async login(username, password){
        try{
            const response = await AuthService.login(username, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            console.log(response)
            return response.status
        } catch(e) {
            return e.response.status
        }
    }

    async registration(email, username, password){
        try{
            const response = await AuthService.registration(email, username, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
            return response.status
        } catch(e) {
            return e.response.status
        }
    }

    async logout(){
        try{
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch(e) {
            console.log(e)
        }
    }

    async checkAuth(){
        this.setLoading(true)
        try{
            const response = await axios.post(`${API_URL}/auth/token_refresh/`, 
                {withCredentials: true})
            this.setAuth(true);
            this.setUser(response.data.user);
        }catch(e){
            console.log(e.response.data.message);
        }
        finally{
            this.setLoading(false);
        }
    }
}