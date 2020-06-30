import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { AppProvider, AppContext } from './api/AppContext'

import { LogIn } from './components/Login'
import { Main } from './components/Main'
import { BecomeAmbassadorPage } from './components/SignUp/BecomeAmbassadorPage'
import TriplersPage from './components/Triplers/TriplersPage'
import TriplersAdd from './components/Triplers/AddTripler'
import ConfirmPage from './components/Triplers/ConfirmPage'

const AuthRoute = ({component: Component, authenticated}) => (
  <Route
    render={(props) => authenticated === true
      ? <Component {...props} />
      : <Redirect to={{pathname:  '/login', state: {from: props.location}}} />}
    />
)

const AppRouter = () => {
  const { authenticated, user, loading } = React.useContext(AppContext)
  if (loading) return <div> Loading ... </div>
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/ambassador" component={BecomeAmbassadorPage} exact={true} authenticated={authenticated}/>
        <AuthRoute path="/triplers" component={TriplersPage} exact={true} authenticated={authenticated}/>
        <AuthRoute path="/triplers/add" component={TriplersAdd} exact={true} authenticated={authenticated}/>
        <AuthRoute path="/triplers/confirm" component={ConfirmPage} exact={true} authenticated={authenticated}/>
        <Route path="/login" component={LogIn}/>
        <Route component={Main}/>
      </Switch>
    </BrowserRouter>
  )
}


export const RouterC = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}




