import React, { useState} from 'react';
import {Container, Paper, Button, Grid, FormGroup } from "@material-ui/core";
import Input from '../UI Components/Input/Input';
import GoogleLogin from "react-google-login";
import IconGoogle from './iconGoogle';
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import {signup, signin} from "../../actions/auth";
import classes from './Auth.module.css'

const initialFormState= {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const Auth = () => {
    const[formData, setFormData] = useState(initialFormState)
    const [isSignup, setIsSignup] = useState(true);
    const {showPassword, setShowPassword} = useState(false);
    const  dispatch = useDispatch()
    const history = useHistory();

    const handleAuthType = () => setIsSignup((prevAuthType) => !prevAuthType);
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup){
            dispatch(signup(formData, history))
        }
        else{
            dispatch(signin(formData, history))
        }
    };
    const handleChange = (e) => {setFormData({...formData, [e.target.name] : e.target.value})};

    const googleSuccess = async (res) => {
        const result  =  res?.profileObj;
          const token = res?.tokenId;

          try {
            dispatch({ type:'AUTH', data: { result, token} })
              history.push('/words');
          }
          catch (e) {
              console.log(e);
          }
   };

   const googleFailure =  (error) => {
            console.log(error)
            console.log("Google sign in was uncessful. Try again Later")
   };

    return(
        <Grid
          container
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          justify="center"
        >
         <svg viewBox="0 0 1920 200" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(47, 73, 94, 1)" d="M 0 69 C 477.5 69 477.5 214 955 214 L 955 214 L 955 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(47, 73, 94, 1)" d="M 954 214 C 1437 214 1437 123 1920 123 L 1920 123 L 1920 0 L 954 0 Z" strokeWidth="0"></path> </svg>
           <Grid   xl= "6" lg="6"  md="6"  sm="8"  xs="10" className={classes.GridContainer}  >
            <Paper>
                <form onSubmit={handleSubmit} className={classes.Form}>
                    {isSignup && (
                        <> 
                            <Input name={"firstName"} handeChange={handleChange} label={"First Name"} type={"text"}  autoFocus />
                            <Input name={"lastName"} handeChange={handleChange} label={"Last Name"} type={"text"}   />
                       </>   
                        
                        )}
                        <Input name={"email"} handeChange={handleChange} label={"Email Address"} type={"email"} />
                        <Input name={"password"} handeChange={handleChange} label={"Password"} type={ showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignup &&
                            <Input name={"confirmPassword"} handeChange={handleChange} label={"Confirm Password"}
                                    type={"password"} />}
                     <div className={classes.LoginSignUp}>
                    <Button type="submit"  variant="contained" color="primary">
                        {isSignup ? 'Save': 'Login' }
                    </Button>
                    <Button onClick={handleAuthType}  size={"medium"} variant="contained" color="secondary">
                        {isSignup ?  'Sign In' : 'Sign Up'}
                    </Button>
                    </div>
                    <GoogleLogin
                        clientId="446554799040-74lorsmc30g25o876eql2unk5gqbfoum.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<IconGoogle />} variant={"contained"}>
                            Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy={"single_host_origin"}
                    />
                </form>
                </Paper>
           </Grid>
     </Grid>

    )
}

export default  Auth;