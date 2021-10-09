import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import MainPage from "@view/main";
import LoginPage from "@view/login";
import SignUpPage from "@view/sign-up";
import ManageAccountPage from "@/view/manage-account";
import ManageSitePage from "@/view/manage-site";
import ManageSystemPage from "@/view/manage-system";

import Auth from "@component/common/auth";
import { Layout } from "@component/common/layout";
import GlobalStyles from "@component/common/global-styles";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/site" component={ManageSitePage} />
            <Route path="/system" component={ManageSystemPage} />
            <Route path="/account" component={ManageAccountPage} />
            <Route path="/" component={MainPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
