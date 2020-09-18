import React from 'react'
import { ResponsiveContainer } from './pageStyles'
import PageLayout from './PageLayout'
import { LoginButton } from './LoginButton'
import { TYPES } from '../variables'

export const LogIn = () => {
  return (
    <PageLayout title="Log In">
    <ResponsiveContainer>
      <LoginButton type={TYPES.FB} />
      <LoginButton type={TYPES.GOOGLE} />
    </ResponsiveContainer>
    </PageLayout>
  )
}
