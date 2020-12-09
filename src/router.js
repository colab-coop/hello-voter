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
import TrainingPage from "./components/TrainingPage";
import QuizCompletedPage from "./components/QuizCompletedPage";
import UnapprovedPage from "./components/UnapprovedPage";
import LockedPage from "./components/LockedPage";
import SignupsClosedPage from "./components/SignupsClosedPage";
import PaymentsPage from "./components/Payments/AddPage";
import PaymentsHomePage from "./components/Payments/PaymentsPage";
import Chime from "./components/Payments/ChimePage";
import PayPal from "./components/Payments/PayPalPage";
import Help from "./components/Help/HelpPage";
import Terms from "./components/Help/TermsPage";
import Privacy from "./components/Help/PrivacyPage";
import HubSpotChat from "./components/HubSpot";

// When OAuth passes back our JWT token, it inserts /auth/ into the URL
// (probably for some outdated reason).  This removes that from the URL.
const redirectToCanonicalUrl = () => {
  const match = window.location.href.match(/(.*)\/auth\W*#(.*)/);
  if (match) {
    window.location = match[1] + '/#' + match[2];
    return true;
  }
  return false;
};

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

  if (redirectToCanonicalUrl()) return <Loading />;
  if (loading) return <Loading />;

  capturePrefillData(setSignupPrefill);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Menu />
      <Switch>
        <Route exact path="/help" component={Help} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/privacy" component={Privacy} />

        <Route path="/jwt" component={Main} />

        <Route exact path="/login" component={LogIn} />
        { !authenticated && <Redirect to='/login' /> }

        <Route exact path="/closed" component={SignupsClosedPage} />
        { process.env.REACT_APP_NO_NEW_SIGNUPS && <Redirect to='/closed' /> }

        <Route exact path="/locked">
          {user && !user.locked ? <Redirect to="/home" /> : <LockedPage />}
        </Route>
        { user?.locked && <Redirect to='/locked' /> }

        <Route exact path="/signup" component={SignupPage} />
        { !user?.signup_completed && <Redirect to='/signup' /> }

        <Route exact path="/unapproved">
          {user && user.approved ? <Redirect to="/home" /> : <UnapprovedPage />}
        </Route>
        { !user?.approved && <Redirect to='/unapproved' /> }

        <Route exact path="/training" component={TrainingPage} />
        <Route path="/quiz_completed" component={QuizCompletedPage} />
        { !user?.quiz_completed && <Redirect to="/training" /> }

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

        <Redirect to="/home" />
      </Switch>
      <Footer />
      <HubSpotChat email={user?.email} />
    </div>
  );
};
