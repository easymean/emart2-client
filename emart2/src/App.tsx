import React from "react";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import MainPage from "@view/main";
import LoginPage from "@view/login";
import SignUpPage from "@view/sign-up";
import AdminPage from "@view/admin";
import SiteListPage from "@view/site-list";
import AccountListPage from "@view/account-list";
import RegisterWebsitePage from "@/view/register-website";
import RegisterSystemPage from "@view/register-system";

import Layout from "@component/common/layout";
import GlobalStyles from "@component/common/global-styles";
import Auth from "@component/common/auth";
import rootReducer, { rootSaga } from "@module/index";
import { Provider } from "react-redux";

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
              exact
              component={Auth(SiteListPage, false)}
            />
            <Route path="/account" component={AccountListPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/admin/website" component={RegisterWebsitePage} />
            <Route path="/admin/system" component={RegisterSystemPage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/" component={MainPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
