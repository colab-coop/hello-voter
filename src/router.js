import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { AppProvider } from './api/AppContext'

import { LogIn } from './components/Login'
import { Main } from './components/Main'

export const RouterC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LogIn} />
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  )
}




