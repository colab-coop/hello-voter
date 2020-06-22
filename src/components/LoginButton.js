import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from 'carbon-components-react/lib/components/Button'
import {
  TYPES, BUTTON_TEXTS, OAUTH_TYPES
} from '../variables'
import { AppContext } from '../api/AppContext'

export const LoginButton = ({ type }) => {
  const { api } = React.useContext(AppContext)
  const history = useHistory()
  const login = async (e) => {
    const data = await api.logIn(OAUTH_TYPES[type])
    history.push(data.smOauthUrl)
  }
  return (
    <Button
      onClick={login}
    >
      Log in with
      {' '}
      { type === TYPES.FB && BUTTON_TEXTS['FB'] }
      { type === TYPES.GOOGLE && BUTTON_TEXTS['GOOGLE'] }
    </Button>
  )
}
