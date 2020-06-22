import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { LogIn } from './components/Login'
import { Test } from './components/Test'

export const RouterC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/" component={Test} />
      </Switch>
    </BrowserRouter>
  )
}




