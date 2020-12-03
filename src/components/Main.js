import React, { useState, useEffect } from 'react'
import { AppContext } from '../api/AppContext'
import {useHistory} from 'react-router-dom'
import Loading from './Loading'

export const Main = () => {
  const { setAuthToken, authenticated } = React.useContext(AppContext)
  const token = window.location.href.split('#/jwt/')[1]
  const history = useHistory()
  useEffect(() => {
    if (token) setAuthToken(token)
    if (authenticated) history.push('/triplers')
  }, [token, authenticated])
  return (
    <>
      {!authenticated ? <Loading /> : ''}
    </>
  )
}

