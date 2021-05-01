import * as api from "../api";
import { AUTH, LOGIN_ERROR, REGISTER_ERROR } from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    console.log("signin action", formData);
    const { data } = await api.signIn(formData);
    console.log("data", data);
    dispatch({ type: AUTH, data });
    history.push("/words");
  } catch (e) {
    console.log(e);
    dispatch({ type: LOGIN_ERROR, message: "Invalid User Login Information." });
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    console.log("signup action", formData);
    const { data } = await api.signUp(formData);
    if (data.message) {
      dispatch({ type: REGISTER_ERROR, message: data.message });
    } else {
      dispatch({ type: AUTH, data });
      history.push("/words");
    }
  } catch (e) {
    console.log(e);
  }
};
