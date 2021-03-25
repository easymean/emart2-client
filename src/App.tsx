import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import MainPage from "@view/main";
import BoardPage from "@view/board";
import Layout from "@component/common/layout";
import GlobalStyles from "@component/common/global-styles";
import { BLOSSOM_URL, CONFL_URL, JIRA_URL, XWIKI_URL } from "@asset/constant";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/board/:boardId" component={BoardPage} />
            <Route
              path="/blossom"
              component={() => {
                window.location.href = BLOSSOM_URL;
                return null;
              }}
            />
            <Route
              path="/xwiki"
              component={() => {
                window.location.href = XWIKI_URL;
                return null;
              }}
            />
            <Route
              path="/jira"
              component={() => {
                window.location.href = JIRA_URL;
                return null;
              }}
            />
            <Route
              path="/confl"
              component={() => {
                window.location.href = CONFL_URL;
                return null;
              }}
            />
            <Route path="/" component={MainPage} />

            <Redirect from="*" to="/" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
