import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWords } from "./actions/wordsAction";
import { Switch, Route } from "react-router-dom";

import WordForm from "./components/WordForm/WordForm";
import Words from "./components/Words/Words";
import UploadWordsCollectively from "./components/UploadWordsCollectively/UploadWordsCollectively";
import Auth from "./components/Auth/Auth";
import Layout from "./layouts";
import AuthLayout from "./components/Auth/AuthLayout";
import PrivateRoute from "./components/Helpers/PrivateRoute/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWords());
  }, [dispatch]);

  return (
    <Switch>
     <PrivateRoute path="/words" Layout={Layout} DirectComponent={Words} />
      <PrivateRoute path="/words/word/newWord" Layout={Layout} DirectComponent={WordForm} />
      <PrivateRoute path="/word/:wordID" Layout={Layout} DirectComponent={WordForm} />
      <PrivateRoute path="/words/uploadWords" Layout={Layout} DirectComponent={UploadWordsCollectively} />
      <Route path="/" exact>
      <AuthLayout>
        <Auth />
      </AuthLayout>
      </Route>
    </Switch>
  );
};

export default App;
