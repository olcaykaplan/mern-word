import React from 'react';
import {Grid, IconButton, InputAdornment, TextField} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";


const Input = (props) => {
    const { name, handleChange, label,  half, autoFocus, type,  handleShowPassword,  } = props;
    return(
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
            name = {name}
            onChange = {handleChange}
            variant = "outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            InputProps = {name === 'password' && {
                endAdorment:(
                  <InputAdornment position="end">
                     <IconButton onClick={handleShowPassword}>
                         {type ==='password'  ? <Visibility /> : <VisibilityOff/>}
                     </IconButton>
                  </InputAdornment>
                ),
            }}
            />
        </Grid>
    )
}

export default Input;