import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  CssBaseline,
  Link,
  Typography,
  Container,
  Avatar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Input from "../UI Components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup, signin } from "../../actions/auth";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const useStyles = makeStyles((theme) => ({
  container: {
    border: "1px solid #A0A0A0",
    borderRadius: "5px",
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Auth = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
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
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign in"}
        </Typography>
        {message ? (
          <Alert
            style={{ width: "100%", padding: "5px 10px", margin: "10px 0" }}
            severity={isSignup ? "warning" : "error"}
          >
            {message}
          </Alert>
        ) : null}
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
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

          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
         />*/}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Save" : "Login"}
          </Button>
          <Grid container>
            {/*<Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>*/}
            <Grid item>
              <Link  variant="body2" onClick={handleAuthType}>
                {isSignup
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Sing In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Auth;