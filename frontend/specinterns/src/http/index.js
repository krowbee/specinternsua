import axios from 'axios';

export const API_URL = 'http://localhost:8000';

axios.defaults.withCredentials = true;

const $api = axios.create({
    withCredentials:true,
    baseURL:API_URL,
});

$api.interceptors.request.use((config)=>{
    if(!config.url.includes('/public/') && !config.url.includes('/auth/login')){
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return config;
})


$api.interceptors.response.use((config)=>{
    return config;
}, async (error)=>{
    const originalRequest = error.config
    if(error.response.status === 401 && !originalRequest._retry ){
        originalRequest._retry = true;
        try{
            const response = await axios.post(`${API_URL}/auth/token_refresh/`);
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        }catch(e){
            
        }
    }
})

export default $api;