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

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWords());
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/words" exact>
        <Layout>
          <Words />
        </Layout>
      </Route>
      <Route path="/words/word/newWord" exact>
        <Layout>
          <WordForm />
        </Layout>
      </Route>
      <Route path="/words/word/:wordID" exact>
        <Layout>
          <WordForm />
        </Layout>
      </Route>
      <Route path="/words/uploadWords" exact>
        <Layout>
          <UploadWordsCollectively />
        </Layout>
      </Route>
      <Route path="/auth" exact>
        <AuthLayout>
          <Auth />
        </AuthLayout>
      </Route>
    </Switch>
  );
};

export default App;
