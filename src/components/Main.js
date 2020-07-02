import React, { useEffect } from 'react'
import { AppContext } from '../api/AppContext'
import {useHistory} from 'react-router-dom'

export const Main = () => {
  const { setToken, authenticated } = React.useContext(AppContext)
  const token = window.location.href.split('#/jwt/')[1]
  const history = useHistory()
  useEffect(() => {
    if (token) setToken(token)
    authenticated && history.push('/triplers')
  }, [token, setToken])
  return (
    <>
      {!authenticated ? 'Logging you in!' : ''}
    </>
  )
}

