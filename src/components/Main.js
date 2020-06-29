import React, { useEffect } from 'react'
import { AppContext } from '../api/AppContext'

export const Main = () => {
  const { setToken, authenticated, user } = React.useContext(AppContext)
  const token = window.location.href.split('#/jwt/')[1]
  useEffect(() => {
    if (token) setToken(token)
  }, [token, setToken])
  return (
    <>
      {!authenticated ? 'Hello Voter!' : `Hello, ${user.name}`}
    </>
  )
}

