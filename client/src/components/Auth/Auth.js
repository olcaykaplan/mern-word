import React, { useEffect, useState } from "react";
import { Paper, Button, Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import Input from "../UI Components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup, signin } from "../../actions/auth";
import classes from "./Auth.module.css";
import { getWords } from "../../actions/wordsAction";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  let message = useSelector((state) => {
    return isSignup
      ? state.auth.registerErrorMessage
      : state.auth.loginErrorMessage;
  });
  const history = useHistory();

  const handleAuthType = () => setIsSignup((prevAuthType) => !prevAuthType);
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      console.log("signup çalıştı", formData);
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {}, [dispatch]);

  //USER INFORMATION =>
  //test@test
  //test123**
  return (
    <Paper style={{ borderRadius: "3%" }}>
      {message ? (
        <Alert
          style={{ textAlign: "center" }}
          severity={isSignup ? "warning" : "error"}
        >
          {message}
        </Alert>
      ) : null}
      <form onSubmit={handleSubmit} className={classes.Form}>
        {isSignup && (
          <>
            <Input
              name={"firstName"}
              handleChange={handleChange}
              label={"First Name"}
              type={"text"}
              autoFocus
            />
            <Input
              name={"lastName"}
              handleChange={handleChange}
              label={"Last Name"}
              type={"text"}
            />
          </>
        )}
        <Input
          name={"email"}
          handleChange={handleChange}
          label={"Email Address"}
          type={"email"}
        />
        <Input
          name={"password"}
          handleChange={handleChange}
          label={"Password"}
          type={showPassword ? "text" : "password"}
          handleShowPassword={handleShowPassword}
        />
        {isSignup && (
          <Input
            name={"confirmPassword"}
            handleChange={handleChange}
            label={"Confirm Password"}
            type={"password"}
          />
        )}
        <div className={classes.LoginSignUp}>
          <Button type="submit" variant="contained" color="primary">
            {isSignup ? "Save" : "Login"}
          </Button>
          <Button
            onClick={handleAuthType}
            size={"medium"}
            variant="contained"
            color="secondary"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default Auth;
