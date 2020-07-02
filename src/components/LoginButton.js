import React, { useState } from 'react'
import Button from './Button'
import {
  TYPES, BUTTON_TEXTS, OAUTH_TYPES
} from '../variables'
import { AppContext } from '../api/AppContext'

export const LoginButton = ({ type }) => {
  const [loading, setLoading] = useState(false)
  const { api } = React.useContext(AppContext)
  const login = async () => {
    setLoading(true)
    const data = await api.logIn(OAUTH_TYPES[type])
    if (data) window.location.href = data.smOauthUrl
    setLoading(false)
  }
  return (
    <Button
      onClick={login}
      loading={loading}
    >
      Log in with
      {' '}
      { type === TYPES.FB && BUTTON_TEXTS['FB'] }
      { type === TYPES.GOOGLE && BUTTON_TEXTS['GOOGLE'] }
    </Button>
  )
}
