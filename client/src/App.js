import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getWords} from './actions/wordsAction';
import {Switch, Route, NavLink, Link, Redirect} from 'react-router-dom';
import {Container} from "react-bootstrap";


import AppBar  from './layouts/Navigation/AppBar';
import WordForm from './components/WordForm/WordForm';
import  Words from './components/Words/Words';
import UploadWordsCollectively from "./components/UploadWordsCollectively/UploadWordsCollectively";

const App = () =>  {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWords());
    }, [dispatch])

        return (
            <Container >
                <AppBar />
                <Switch>
                    <Route  path={"/words"} exact component={Words} />
                    <Route path={"/words/word/newWord"} component={WordForm} />
                    <Route path={"/words/word/:wordID"} exact  component={WordForm} />
                    <Route path={"/words/uploadWords"} exact  component = {UploadWordsCollectively} />
                    <Redirect to={"/words"}  />
                </Switch>
            </Container>
        );

}

export default App;