import * as api from '../api';
import {AUTH} from '../constants/actionTypes';


export const signin = (formData, history) =>  async (dispatch) => {
    try{
        console.log("signin action", formData)
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        history.push('/words')
    }
    catch (e) {
        console.log(e);
    }
};export const signup = (formData, history) =>  async (dispatch) => {
    try{

        console.log("signup action", formData)
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        history.push('/words')
    }
    catch (e) {
        console.log(e);
    }
};