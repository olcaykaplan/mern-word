import axios from 'axios';

const url = 'http://localhost:5000/words';

export const fetchWords = () => axios.get(url);
export const createWord = (wordData) => axios.post(url+'/word/newWord', wordData);
export const uploadWordsCollectively = (uploadData) => axios.post(url+'/uploadWords', uploadData);

export const signIn = (wordData) => axios.post('http://localhost:5000/auth/signin', wordData);
export const signUp = (wordData) => axios.post('http://localhost:5000/auth/signup', wordData);