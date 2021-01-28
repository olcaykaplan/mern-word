import * as actionTypes from '../constants/actionTypes';

export default (words = [], action) => {
    switch (action.type){
        case actionTypes.FETCH_WORDS:
            return action.payload;
        case actionTypes.CREATE_NEW_WORD:
            return [...words, action.payload];
        default:
            return  words;
    }
}