import axios from 'axios';

export const API_URL = 'http://127.0.0.1:8000';

axios.defaults.withCredentials = true;

const $api = axios.create({
    withCredentials:true,
    baseURL:API_URL,
});

$api.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})


$api.interceptors.request.use((config)=>{
    return config;
}, async(error)=>{
    const originalRequest = error.config
    if(error.response.status == 401){
        try{
            const response = await axios.post(`${API_URL}/auth/token_refresh`);
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        }catch(e){
            console.log("Не авторизован")
        }
    }
})

export default $api;