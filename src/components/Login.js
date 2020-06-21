import React from 'react'
import { LoginButton } from './LoginButton'
import { TYPES } from '../variables'

export const LogIn = () => {
  return (
    <div>
      <div>Log In here:</div>
      <LoginButton type={TYPES.FB} />
    </div>
  )
}
