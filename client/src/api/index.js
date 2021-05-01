import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'})
const url = 'https://learnupwords.herokuapp.com/words';

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})
export const fetchWords = () => API.get(url);
export const createWord = (wordData) => API.post('/words/word/newWord', wordData);
export const uploadWordsCollectively = (uploadData) => API.post('/words/uploadWords', uploadData);

export const signIn = (wordData) => API.post('/auth/signin', wordData);
export const signUp = (wordData) => API.post('/auth/signup', wordData);
