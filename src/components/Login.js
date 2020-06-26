import React from 'react'
import PageLayout from './PageLayout'
import { LoginButton } from './LoginButton'
import { TYPES } from '../variables'

export const LogIn = () => {
  return (
    <PageLayout title="Log In">
      <LoginButton type={TYPES.FB} />
    </PageLayout>
  )
}
