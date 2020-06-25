import React from 'react'
import { LoginButton } from '../components/LoginButton'

export default {
  title: 'Login',
  component: LoginButton,
}

export const LoginFacebook = () => (
  <LoginButton type='FB' />
)
