import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import { AppProvider, AppContext } from "./api/AppContext";

import { initAnalytics, useAnalytics } from "./hooks/useAnalytics";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { LogIn } from "./components/Login";
import { Main } from "./components/Main";
import ContactInfoPage from "./components/SignUp/ContactInfoPage";
import TriplersPage from "./components/Triplers/TriplersPage";
import TriplersAdd from "./components/Triplers/AddTripler";
import ConfirmPage from "./components/Triplers/ConfirmPage";
import HomePage from "./components/HomePage";
import PaymentsPage from "./components/Payments/AddPage";
import PaymentsHomePage from "./components/Payments/PaymentsPage";
import Chime from "./components/Payments/ChimePage";
import PayPal from "./components/Payments/PayPalPage";
import Help from "./components/Help/HelpPage";
import Terms from "./components/Help/TermsPage";
import Privacy from "./components/Help/PrivacyPage";

const NoMatch = ({ authenticated, path, user }) => (
  <Route
    path={path}
    render={(props) =>
      authenticated === true ? (
        user && user.signup_completed ? (
          <Redirect
            to={{ pathname: "/home", state: { from: props.location } }}
          />
        ) : (
          <Redirect
            to={{
              pathname: "/ambassador/signup",
              state: { from: props.location },
            }}
          />
        )
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const AuthRoute = ({ component: Component, authenticated, path, user }) => (
  <Route
    path={path}
    render={(props) =>
      authenticated === true ? (
        user && user.approved ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/ambassador/signup",
              state: { from: props.location },
            }}
          />
        )
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const AuthPublicRoute = ({ component: Component, authenticated, path }) => (
  <Route
    path={path}
    render={(props) =>
      authenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const AppRoutes = () => {
  const { authenticated, loading, user } = React.useContext(AppContext);
  useAnalytics();
  if (loading) return <Loading />;
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Menu isApproved={user && user.approved} />
      <Switch>
        <AuthPublicRoute
          path="/ambassador/signup"
          component={ContactInfoPage}
          exact={true}
          authenticated={authenticated}
        />
        <AuthRoute
          path="/home"
          component={HomePage}
          exact={true}
          authenticated={authenticated}
          user={user}
        />
        <AuthRoute
          path="/triplers"
          component={TriplersPage}
          exact={true}
          authenticated={authenticated}
          user={user}
        />
        <AuthRoute
          path="/triplers/add"
          component={TriplersAdd}
          exact={true}
          authenticated={authenticated}
          user={user}
        />
        <AuthRoute
          path="/triplers/confirm/:triplerId"
          component={ConfirmPage}
          exact={true}
          authenticated={authenticated}
          user={user}
        />
        <AuthRoute
          path="/payments/add"
          component={PaymentsPage}
          exact={true}
          authenticated={authenticated}
          user={user}
        />
        <AuthRoute
          path="/payments"
          component={PaymentsHomePage}
          exact={true}
          authenticated={authenticated}
          user={user}
        />
        <AuthRoute
          path="/payments/chime"
          component={Chime}
          exact={true}
          authenticated={authenticated}
          user={user}
        />
        <AuthRoute
          path="/payments/paypal"
          component={PayPal}
          exact={true}
          authenticated={authenticated}
          user={user}
        />
        <Route path="/help" component={Help} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/login" component={LogIn} />
        <Route path="/jwt" component={Main} />
        <NoMatch authenticated={authenticated} user={user} />
      </Switch>
      <Footer />
    </div>
  );
};

export const RouterC = () => {
  initAnalytics();
  return (
    <AppProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </AppProvider>
  );
};
