import React from 'react'
import { SignUp } from './SignUp'

export default {
  title: 'SignUp',
  component: SignUp,
}

export const BecomeAnAmbassador = () => (
  <SignUp title="Become an ambassador" submitButtonTitle="Get Started">
    
  </SignUp>
)

export const SignUpPage = () => (
  <SignUp title="Sign Up" submitButtonTitle="Continue">

  </SignUp>
)

export const PersonalInfo = () => (
  <SignUp title="Personal Info" submitButtonTitle="Continue">

  </SignUp>
)

export const Address = () => (
  <SignUp title="Address" submitButtonTitle="Continue">

  </SignUp>
)

export const Contact = () => (
  <SignUp title="Contact" submitButtonTitle="Continue">

  </SignUp>
)

export const ContactInfo = () => (
  <SignUp title="Confirm Info" submitButtonTitle="Submit">

  </SignUp>
)