import React from 'react'
import { BecomeAmbassadorPage } from '../components/SignUp/BecomeAmbassadorPage'
import { SignUpPage } from '../components/SignUp/SignUpPage'
import { PersonalInfoPage } from '../components/SignUp/PersonalInfoPage'
import { AddressPage } from '../components/SignUp/AddressPage'
import { ContactPage } from '../components/SignUp/ContactPage'
import { ContactInfoPage } from '../components/SignUp/ContactInfoPage'

export default {
  title: 'SignUp'
}

export const BecomeAmbassador = () => (
  <BecomeAmbassadorPage />
)

export const SignUp = () => (
  <SignUpPage />
)

export const PersonalInfo = () => (
  <PersonalInfoPage />
)

export const Address = () => (
  <AddressPage />
)

export const Contact = () => (
  <ContactPage />
)

export const ContactInfo = () => (
  <ContactInfoPage />
)