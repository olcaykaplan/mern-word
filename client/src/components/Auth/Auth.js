import React, { useState} from 'react';
import {Container, Paper, Button, Grid } from "@material-ui/core";
import Input from '../UI Components/Input/Input';
import GoogleLogin from "react-google-login";
import IconGoogle from './iconGoogle';
const initialFormState= {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const Auth = () => {
    const[formData, setFormData] = useState(initialFormState)
    const [isSignup, setIsSignup] = useState(false);
    const {showPassword, setShowPassword} = useState(false);

    const handleAuthType = () => setIsSignup((prevAuthType) => !prevAuthType);
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const handleSubmit = (e) => {
        e.preventDefault();

    };
    const handleChange = (e) => {}
        const googleSuccess = () => {

        };
        const googleFailure = () => {

        };
    return(
        <Container >
            hello
            <Paper elevation={3}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                    {isSignup && (
                        <>
                            <Input name={"firstName"} handeChange={handleChange} label={"First Name"} type={"text"} half autoFocus />
                            <Input name={"lastName"} handeChange={handleChange} label={"Last Name"} type={"text"} half />
                        </>
                        )}
                        <Input name={"email"} handeChange={handleChange} label={"Email Address"} type={"email"} />
                        <Input name={"password"} handeChange={handleChange} label={"Password"} type={ showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignup &&
                            <Input name={"confirmPassword"} handeChange={handleChange} label={"Confirm Password"}
                                    type={"password"} />}
                    </Grid>
                    <GoogleLogin
                        clientId="GOOGLE ID"
                        render={(renderProps) => (
                            <Button color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<IconGoogle />} variant={"contained"}>
                            Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy={"single_host_origin"}
                    />
                    <Button type="submit"  variant="contained" color="primary">
                        {isSignup ? 'Save': 'Login' }
                    </Button>
                    <Button onClick={handleAuthType}  size={"medium"} variant="contained" color="secondary">
                        {isSignup ?  'Sign In' : 'Sign Up'}
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}

export default  Auth;