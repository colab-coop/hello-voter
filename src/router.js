import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { AppContext } from "./api/AppContext";

import { useAnalytics } from "./hooks/useAnalytics";
import { useLocalStorage } from "./hooks/useLocalStorage";

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { LogIn } from "./components/Login";
import { Main } from "./components/Main";
import { ProfilePage, SignupPage } from "./components/Profile/ProfilePage";
import TriplersPage from "./components/Triplers/TriplersPage";
import TriplersAdd from "./components/Triplers/AddTripler";
import ConfirmPage from "./components/Triplers/ConfirmPage";
import AckPage from "./components/AckPage";
import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage";
import QuizCompletedPage from "./components/QuizCompletedPage";
import UnapprovedPage from "./components/UnapprovedPage";
import PaymentsPage from "./components/Payments/AddPage";
import PaymentsHomePage from "./components/Payments/PaymentsPage";
import Chime from "./components/Payments/ChimePage";
import PayPal from "./components/Payments/PayPalPage";
import Help from "./components/Help/HelpPage";
import Terms from "./components/Help/TermsPage";
import Privacy from "./components/Help/PrivacyPage";
import HubSpot from "./components/HubSpot";

// Grabs the prefill data from the URL fragment and puts it in local storage.
const capturePrefillData = (callback) => {
  const fragment = decodeURIComponent(window.location.hash);
  const prefillMatch = fragment.match(/^\W*prefill=(.*)/);
  if (prefillMatch) {
    let prefill = {};
    try {
      prefill = JSON.parse(prefillMatch[1]);
    } catch (err) {
      console.log('Invalid JSON: ', prefillMatch[1]);
    }
    callback(prefill);
    window.location.hash = '';
  }
};

export default () => {
  const { loading, authenticated, user } = React.useContext(AppContext);
  const [ signupPrefill, setSignupPrefill ] = useLocalStorage("signup_prefill", {});
  useAnalytics();
  if (loading) return <Loading />;

  capturePrefillData(setSignupPrefill);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Menu isApproved={user?.approved} />
      <Switch>
        <Route path="/jwt" component={Main} />

        <Route exact path="/login" component={LogIn} />
        { !authenticated && <Redirect to='/login' /> }

        <Route exact path="/signup" component={SignupPage} />
        { !user?.signup_completed && <Redirect to='/signup' /> }

        <Route exact path="/unapproved" component={UnapprovedPage} />
        { !user?.approved && <Redirect to='/unapproved' /> }

        <Route exact path="/quiz" component={QuizPage} />
        <Route path="/quiz_completed" component={QuizCompletedPage} />
        { !user?.quiz_completed && <Redirect to="/quiz" /> }

        <Route exact path="/ack" component={AckPage} />
        { !user?.onboarding_completed && <Redirect to="/ack" /> }

        <Route exact path="/home" component={HomePage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/triplers" component={TriplersPage} />
        <Route exact path="/triplers/add" component={TriplersAdd} />
        <Route exact path="/triplers/confirm/:triplerId" component={ConfirmPage} />

        <Route exact path="/payments" component={PaymentsHomePage} />
        <Route exact path="/payments/add" component={PaymentsPage} />
        <Route exact path="/payments/chime" component={Chime} />
        <Route exact path="/payments/paypal" component={PayPal} />

        <Route exact path="/help" component={Help} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={Privacy} />

        <Redirect to="/home" />
      </Switch>
      <Footer />
      <HubSpot email={user?.email} />
    </div>
  );
};
