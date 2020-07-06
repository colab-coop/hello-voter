import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import { AppProvider, AppContext } from './api/AppContext'

import Loading from './components/Loading'
import { LogIn } from './components/Login'
import { Main } from './components/Main'
import { SignUpPage } from './components/SignUp/SignUpPage'
import { BecomeAmbassadorPage } from './components/SignUp/BecomeAmbassadorPage'
import { PersonalInfoPage } from './components/SignUp/PersonalInfoPage'
import { AddressPage } from './components/SignUp/AddressPage'
import { ContactPage } from './components/SignUp/ContactPage'
import { ContactInfoPage } from './components/SignUp/ContactInfoPage'
import TriplersPage from './components/Triplers/TriplersPage'
import TriplersAdd from './components/Triplers/AddTripler'
import ConfirmPage from './components/Triplers/ConfirmPage'

const NoMatch = ({authenticated, path, user }) => (
  <Route
    path={path}
    render={(props) => authenticated === true
      ? (user && user.signup_completed) ?
        <Redirect to={{pathname: '/triplers', state: {from: props.location}}} />
        :
        <Redirect to={{pathname: '/ambassador', state: {from: props.location}}} />
      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
  />
)

const AuthRoute = ({component: Component, authenticated, path, user }) => (
  <Route
    path={path}
    render={(props) => authenticated === true
      ? (user && user.signup_completed) ?
        <Component {...props} />
        :
        <Redirect to={{pathname: '/ambassador', state: {from: props.location}}} />
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

const AppRouter = () => {
  const { authenticated, loading, user } = React.useContext(AppContext)
  if (loading) return <Loading />
  console.log(user)
  return (
    <HashRouter>
      <Switch>
        <AuthPublicRoute path="/ambassador" component={BecomeAmbassadorPage} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/ambassador/signup" component={SignUpPage} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/ambassador/personal_info" component={PersonalInfoPage} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/ambassador/address" component={AddressPage} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/ambassador/contact" component={ContactPage} exact={true} authenticated={authenticated} />
        <AuthPublicRoute path="/ambassador/confirm" component={ContactInfoPage} exact={true} authenticated={authenticated} />
        <AuthRoute path="/triplers" component={TriplersPage} exact={true} authenticated={authenticated} user={user}/>
        <AuthRoute path="/triplers/add" component={TriplersAdd} exact={true} authenticated={authenticated} user={user}/>
        <AuthRoute path="/triplers/confirm/:triplerId" component={ConfirmPage} exact={true} authenticated={authenticated} user={user}/>
        <Route path="/login" component={LogIn}/>
        <Route path="/jwt" component={Main}/>
        <NoMatch authenticated={authenticated} user={user}/>
      </Switch>
    </HashRouter>
  )
}


export const RouterC = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}




