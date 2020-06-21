import React from 'react'
import { PageLayout } from './PageLayout'
import { LoginButton } from './LoginButton'

export default {
  title: 'PageLayout',
  component: PageLayout,
}

export const Layout = () => (
  <PageLayout title="Log In" submitButtonTitle="Continue">
    <LoginButton type='FB'/>
  </PageLayout>
)
