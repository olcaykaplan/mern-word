import React from "react";
import { useSelector} from'react-redux';
import  Word from './Word/Word';
import classes from './Words.module.css';
import {Container} from "react-bootstrap";
const Words = (props) => {
    const words = useSelector((state) => state.words);

    return (
        <div  className={classes.wordList}>
            {words.map((word, index) => (
               < Word word={word} index ={index} />
            ))}
        </div>
    )
}

export default  Words;
