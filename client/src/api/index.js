import axios from 'axios';

const url = 'http://localhost:5000/words';

export const fetchWords = () => axios.get(url);
export const createWord = (wordData) => axios.post(url+'/word/newWord', wordData);
export const uploadWordsCollectively = (uploadData) => axios.post(url+'/uploadWords', uploadData);
