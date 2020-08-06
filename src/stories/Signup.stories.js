import React from 'react'
import { LogIn } from '../components/Login'
import { BecomeAmbassadorPage } from '../components/SignUp/BecomeAmbassadorPage'
import { SignUpPage } from '../components/SignUp/SignUpPage'
import PendingApprovalPage from '../components/PendingApprovalPage'

export default {
  title: 'SignUp'
}

export const LoginPage = () => (
  <LogIn />
)

export const BecomeAmbassador = () => (
  <BecomeAmbassadorPage />
)

export const SignUp = () => (
  <SignUpPage />
)

export const PendingApproval = () => (
  <PendingApprovalPage />
)