import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import MainPage from "@view/main";
import LoginPage from "@view/login";
import SignUpPage from "@view/sign-up";
import SiteListPage from "@view/site-list";
import AccountListPage from "@view/account-list";

import Auth from "@component/common/auth";
import { Layout } from "@component/common/layout";
import GlobalStyles from "@component/common/global-styles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route
              path="/category/:categoryId"
              // exact
              // component={Auth(SiteListPage, false) 나중에 주석 풀기
              exact
              component={SiteListPage}
            />
            <Route path="/account" component={AccountListPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/" component={MainPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Layout>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default App;
