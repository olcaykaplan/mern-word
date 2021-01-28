import * as api from '../api';
import * as actionTypes from '../constants/actionTypes';

export const getWords =  () => async dispatch => {
    try{
        const {data} = await api.fetchWords();
        dispatch({type: actionTypes.FETCH_WORDS, payload: data});
    }
    catch (err){
        console.log(err.message);
    }
}
export const createWord = (wordData) => async dispatch => {
    try{
        const {data} = await api.createWord(wordData);
        console.log(data);
        dispatch({type:actionTypes.CREATE_NEW_WORD, payload:data})
    }
    catch (err){
        console.log(err.message);
    }
}

export const  uploadWordsCollectively = (uploadData) => async  dispatch => {
    try {
        const {data} = await api.uploadWordsCollectively(uploadData);
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}