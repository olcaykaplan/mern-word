import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button,} from 'react-bootstrap';
import logo from '../../../logo192.png';
import classes from './Words.module.css';

import {withRouter} from 'react-router-dom';
const Word = ({word, index, history}) => {
//const Word = (props) => {
    const cardsColor= ['success', 'warning', 'info' ];
    const  variant =  cardsColor[index%cardsColor.length];;

    const handleClick = () => {
        history.push(`/words/word/${word._id}`);
    }
    return(

            <Card
                bg={variant.toLowerCase()}
                key={word._id}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                className={["mb-2", classes.Card]}
            >
                <Card.Header><b>Lern Up</b></Card.Header>
                <Card.Body>
                    <Card.Title> {word.name} </Card.Title>
                    <hr/>
                    <Card.Text>
                        {word.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button >Details</Button>
                <Button onClick={handleClick}>Update</Button>
                </Card.Footer>
            </Card>


    )
}

export  default  withRouter(Word);
