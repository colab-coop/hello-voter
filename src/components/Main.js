import React, { useState, useEffect } from 'react'
import { AppContext } from '../api/AppContext'
import {useHistory} from 'react-router-dom'
import Loading from './Loading'

export const Main = () => {
  const [loading, setLoading] = useState(false)
  const { setToken, authenticated, api } = React.useContext(AppContext)
  const token = window.location.href.split('#/jwt/')[1]
  const history = useHistory()
  useEffect(() => {
    const signup = async () => {
      await api.signup()
      history.push('/triplers')
    }
    if (token) setToken(token)
    if(authenticated) {
      setLoading(true)
      signup()
    }
  }, [token, authenticated, setToken])
  return (
    <>
      {!authenticated ? 'Logging you in!' : ''}
      {loading && <Loading />}
    </>
  )
}

