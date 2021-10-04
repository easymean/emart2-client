import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import MainPage from "@view/main";
import LoginPage from "@view/login";
import SignUpPage from "@view/sign-up";
import SiteListPage from "@view/site-list";
import AccountListPage from "@view/account-list";

import Auth from "@component/common/auth";
import { Layout } from "@component/common/layout";
import rootReducer, { rootSaga } from "@module/index";
import GlobalStyles from "@component/common/global-styles";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;