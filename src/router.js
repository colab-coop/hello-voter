import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import { AppProvider, AppContext } from './api/AppContext'

import { initAnalytics, useAnalytics } from './hooks/useAnalytics'

import Menu from './components/Menu'
import Loading from './components/Loading'
import { LogIn } from './components/Login'
import { Main } from './components/Main'
import { LandingPage } from './components/SignUp/LandingPage'
import { ContactInfoPage } from './components/SignUp/ContactInfoPage'
import TriplersPage from './components/Triplers/TriplersPage'
import TriplersAdd from './components/Triplers/AddTripler'
import ConfirmPage from './components/Triplers/ConfirmPage'
import PendingApprovalPage from './components/PendingApprovalPage'
import HomePage from './components/HomePage'
import PaymentsPage from './components/Payments/AddPage'
import PaymentsHomePage from './components/Payments/PaymentsPage'
import Chime from './components/Payments/ChimePage'

import Help from './components/Help/HelpPage'

const NoMatch = ({authenticated, path, user }) => (
  <Route
    path={path}
    render={(props) => authenticated === true
      ? (user && user.signup_completed) ?
        <Redirect to={{pathname: '/home', state: {from: props.location}}} />
        :
        <Redirect to={{pathname: '/ambassador/signup', state: {from: props.location}}} />
      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
  />
)

const AuthRoute = ({component: Component, authenticated, path, user }) => (
  <Route
    path={path}
    render={(props) => authenticated === true
      ? (user && user.approved) ?
        <Component {...props} />
        :
        (user && user.signup_completed && user.onboarding_completed) ?
          <Redirect to={{pathname: '/approval', state: {from: props.location}}} />
          :
          <Redirect to={{pathname: '/ambassador/signup', state: {from: props.location}}} />
      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
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
  console.log(user)
  return (
    <>
      <Menu isApproved={user && user.approved} />
      <Switch>
        <AuthPublicRoute path="/ambassador/signup" component={ContactInfoPage} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/approval" component={PendingApprovalPage} exact={true} authenticated={authenticated} />
        <AuthRoute path="/home" component={HomePage} exact={true} authenticated={authenticated} user={user}/>
        <AuthRoute path="/triplers" component={TriplersPage} exact={true} authenticated={authenticated} user={user}/>
        <AuthRoute path="/triplers/add" component={TriplersAdd} exact={true} authenticated={authenticated} user={user}/>
        <AuthRoute path="/triplers/confirm/:triplerId" component={ConfirmPage} exact={true} authenticated={authenticated} user={user}/>
        <AuthRoute path="/payments/add" component={PaymentsPage} exact={true} authenticated={authenticated} user={user}/>
        <AuthRoute path="/payments" component={PaymentsHomePage} exact={true} authenticated={authenticated} user={user}/>
        <AuthRoute path="/payments/chime" component={Chime} exact={true} authenticated={authenticated} user={user}/>
        <Route path="/tallahassee" component={LandingPage} />
        <Route path="/help" component={Help}/>
        <Route path="/login" component={LogIn}/>
        <Route path="/jwt" component={Main}/>
        <NoMatch authenticated={authenticated} user={user}/>
      </Switch>
    </>
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




