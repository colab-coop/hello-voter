import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import { AppProvider, AppContext } from './api/AppContext'

import { initAnalytics, useAnalytics } from './hooks/useAnalytics'

import Loading from './components/Loading'
import { LogIn } from './components/Login'
import { Main } from './components/Main'
import { SignUpPage } from './components/SignUp/SignUpPage'
import { LandingPage } from './components/SignUp/LandingPage'
import { BecomeAmbassadorPage } from './components/SignUp/BecomeAmbassadorPage'
import { PersonalInfoPage } from './components/SignUp/PersonalInfoPage'
import { AddressPage } from './components/SignUp/AddressPage'
import { ContactPage } from './components/SignUp/ContactPage'
import { ContactInfoPage } from './components/SignUp/ContactInfoPage'
import TriplersPage from './components/Triplers/TriplersPage'
import TriplersAdd from './components/Triplers/AddTripler'
import ConfirmPage from './components/Triplers/ConfirmPage'
import OnBoarding01 from './components/Onboarding/01'
import OnBoarding02 from './components/Onboarding/02'
import OnBoarding03 from './components/Onboarding/03'
import OnBoarding04 from './components/Onboarding/04'
import OnBoarding05 from './components/Onboarding/05'
import OnBoarding06 from './components/Onboarding/06'
import OnBoarding07 from './components/Onboarding/07'
import OnBoarding08 from './components/Onboarding/08'
import OnBoarding09 from './components/Onboarding/09'
import OnBoarding10 from './components/Onboarding/10'
import OnBoarding11 from './components/Onboarding/11'
import OnBoarding12 from './components/Onboarding/12'
import OnBoarding13 from './components/Onboarding/13'
import OnBoarding14 from './components/Onboarding/14'
import OnBoardingNGP1 from './components/Onboarding/NGP/01'
import OnBoardingNGP2 from './components/Onboarding/NGP/02'
import OnBoardingNGP3 from './components/Onboarding/NGP/03'
import PendingApprovalPage from './components/PendingApprovalPage'

import PaymentsPage from './components/Payments/AddPage'
import PaymentsHomePage from './components/Payments/PaymentsPage'

import Help from './components/Help/HelpPage'

const NoMatch = ({authenticated, path, user }) => (
  <Route
    path={path}
    render={(props) => authenticated === true
      ? (user && user.signup_completed) ?
        <Redirect to={{pathname: '/triplers', state: {from: props.location}}} />
        :
        <Redirect to={{pathname: '/ambassador', state: {from: props.location}}} />
      : <Redirect to={{pathname: '/landing', state: {from: props.location}}} />}
  />
)

const AuthRoute = ({component: Component, authenticated, path, user }) => (
  <Route
    path={path}
    render={(props) => authenticated === true
      ? (user && user.approved) ?
        <Component {...props} />
        :
        (user && user.signup_completed && user.approved) ?
          <Redirect to={{pathname: '/approval', state: {from: props.location}}} />
          :
          <Redirect to={{pathname: '/ambassador', state: {from: props.location}}} />
      : <Redirect to={{pathname: '/landing', state: {from: props.location}}} />}
  />
)

const AuthPublicRoute = ({component: Component, authenticated, path }) => (
  <Route
    path={path}
    render={(props) => authenticated === true
      ? <Component {...props} />
      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
  />
)

const AppRoutes = () => {
  const { authenticated, loading, user } = React.useContext(AppContext)
  useAnalytics()
  if (loading) return <Loading />
  return (
      <Switch>
        <AuthPublicRoute path="/ambassador" component={BecomeAmbassadorPage} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/ambassador/signup" component={SignUpPage} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/ambassador/personal_info" component={PersonalInfoPage} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/ambassador/address" component={AddressPage} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/ambassador/contact" component={ContactPage} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/ambassador/confirm" component={ContactInfoPage} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/01" component={OnBoarding01} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/02" component={OnBoarding02} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/03" component={OnBoarding03} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/04" component={OnBoarding04} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/05" component={OnBoarding05} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/06" component={OnBoarding06} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/07" component={OnBoarding07} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/08" component={OnBoarding08} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/09" component={OnBoarding09} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/10" component={OnBoarding10} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/11" component={OnBoarding11} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/12" component={OnBoarding12} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/13" component={OnBoarding13} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/14" component={OnBoarding14} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/ngp/01" component={OnBoardingNGP1} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/ngp/02" component={OnBoardingNGP2} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/onboarding/ngp/03" component={OnBoardingNGP3} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/approval" component={PendingApprovalPage} exact={true} authenticated={authenticated} />
        <AuthRoute path="/triplers" component={TriplersPage} exact={true} authenticated={authenticated} user={user}/>
        <AuthRoute path="/triplers/add" component={TriplersAdd} exact={true} authenticated={authenticated} user={user}/>
        <AuthRoute path="/triplers/confirm/:triplerId" component={ConfirmPage} exact={true} authenticated={authenticated} user={user}/>
<<<<<<< HEAD
        <AuthRoute path="/payments/add" component={PaymentsPage} exact={true} authenticated={authenticated} user={user}/>
        <AuthRoute path="/payments" component={PaymentsHomePage} exact={true} authenticated={authenticated} user={user}/>
        <Route path="/tallahassee" component={LandingPage} />
=======
        <Route path="/help" component={Help}/>
        <Route path="/landing" component={LandingPage} />
>>>>>>> ambassador-stage
        <Route path="/login" component={LogIn}/>
        <Route path="/jwt" component={Main}/>
        <NoMatch authenticated={authenticated} user={user}/>
      </Switch>
  )
}


export const RouterC = () => {
  initAnalytics()
  return (
    <AppProvider>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </AppProvider>
  )
}




