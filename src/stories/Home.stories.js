import React from 'react'
import Home from '../components/HomePage'
import Help from '../components/Help/HelpPage'
import Profile from '../components/Profile/ProfilePage'
import ContactInfo from '../components/Profile/ContactInfo'

export default {
  title: 'Home'
}

export const HomePage = () => (
  <Home />
)

export const HelpPage = () => (
  <Help />
)

export const ProfilePage = () => (
  <Profile />
)

export const ProfileContactInfo = () => (
  <ContactInfo />
)