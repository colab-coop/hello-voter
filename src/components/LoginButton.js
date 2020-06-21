import React from 'react'
import Button from 'carbon-components-react/lib/components/Button'
import {
  TYPES, BUTTON_TEXTS
} from '../variables'

export const LoginButton = ({ type }) => {
  const login = (e) => {
    console.log('Logging in...')
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
