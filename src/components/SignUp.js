import React from 'react'
import { PageLayout } from './PageLayout'

export const SignUp = ({ title, children, submitButtonTitle }) => (
  <PageLayout title={ title } submitButtonTitle={ submitButtonTitle }>
    { children }
  </PageLayout>
)
