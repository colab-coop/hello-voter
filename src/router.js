import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import { AppProvider, AppContext } from './api/AppContext'

import Loading from './components/Loading'
import { LogIn } from './components/Login'
import { Main } from './components/Main'
import { BecomeAmbassadorPage } from './components/SignUp/BecomeAmbassadorPage'
import TriplersPage from './components/Triplers/TriplersPage'
import TriplersAdd from './components/Triplers/AddTripler'
import ConfirmPage from './components/Triplers/ConfirmPage'

const AuthRoute = ({component: Component, authenticated, path}) => (
  <Route
    path={path}
    render={(props) => authenticated === true
      ? <Component {...props} />
      : <Redirect to={{pathname:  '/login', state: {from: props.location}}} />}
    />
)

const NoMatch = ({ authenticated, path }) => (
  <Route
    path={path}
    render={(props) => authenticated === true
      ? <Redirect to={{pathname:  '/triplers', state: {from: props.location}}} />
      : <Redirect to={{pathname:  '/login', state: {from: props.location}}} />}
  />
)

const AppRouter = () => {
  const { authenticated, loading } = React.useContext(AppContext)
  if (loading) return <Loading />
  return (
    <HashRouter>
      <Switch>
        <AuthRoute path="/ambassador" component={BecomeAmbassadorPage} exact={true} authenticated={authenticated}/>
        <AuthRoute path="/triplers" component={TriplersPage} exact={true} authenticated={authenticated}/>
        <AuthRoute path="/triplers/add" component={TriplersAdd} exact={true} authenticated={authenticated}/>
        <AuthRoute path="/triplers/confirm/:triplerId" component={ConfirmPage} exact={true} authenticated={authenticated}/>
        <Route path="/login" component={LogIn}/>
        <Route path="/jwt" component={Main}/>
        <NoMatch authenticated={authenticated} />
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




