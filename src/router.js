import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { AppProvider, AppContext } from './api/AppContext'

import { LogIn } from './components/Login'
import { Main } from './components/Main'
import { BecomeAmbassadorPage } from './components/SignUp/BecomeAmbassadorPage'

const AuthRoute = ({component: Component, authenticated}) => (
  <Route
    render={(props) => authenticated === true
      ? <Component {...props} />
      : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
)

const AppRouter = () => {
  const { authenticated, user } = React.useContext(AppContext)
  if (!user) return <div> Loading ... </div>
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/ambassador" component={BecomeAmbassadorPage} exact={true} authenticated={authenticated}/>
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




