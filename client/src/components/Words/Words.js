import React from "react";
import { useSelector} from'react-redux';
import  Word from './Word/Word';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));
const Words = (props) => {
    const words = useSelector((state) => state.words);
    const classes = useStyles();


    return (

            <Grid container item xs={12} sm={12} md={12} lg={12}  xl={12} spacing={1} >
            {words.map((word, index) => (
               <Word word={word} index ={index}  />
            ))}
            </Grid>

    )
}

export default  Words;
