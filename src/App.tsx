import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import MainPage from "@view/main";
import BoardPage from "@view/board";
import Layout from "@component/common/layout";
import GlobalStyles from "@component/common/global-styles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/board/:boardId" component={BoardPage} />
            <Route path="/" component={MainPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
