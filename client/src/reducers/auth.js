import {
  AUTH,
  LOGOUT,
  LOGIN_ERROR,
  REGISTER_ERROR,
} from "../constants/actionTypes";

const authReducer = (state = { authData: null, expireIn:window.localStorage.getItem('expireIn'), }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      const expireIn = new Date('2012.08.10').getTime() / 1000
      localStorage.setItem('expireIn', expireIn);
      return {
        ...state,
        authData: action?.data,
        loginErrorMessage: "",
        registerErrorMessage: "",
      };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case LOGIN_ERROR:
      localStorage.clear();
      return {
        ...state,
        loginErrorMessage: action.message,
        registerErrorMessage: "",
      };
    case REGISTER_ERROR:
      localStorage.clear();
      return {
        ...state,
        registerErrorMessage: action.message,
        loginErrorMessage: "",
      };
    default:
      return state;
  }
};
export default authReducer;
