import React from 'react'
import TriplersEmpty from '../components/Triplers/TriplersEmptyPage'
import Triplers from '../components/Triplers/TriplersPage'
import Invite from '../components/Triplers/InvitePage'
import Confirm from '../components/Triplers/ConfirmPage'

export default {
  title: 'Triplers'
}

export const TriplersEmptyPage = () => (
  <TriplersEmpty />
)

export const TriplersPage = () => (
  <Triplers />
)

export const InvitePage = () => (
  <Invite />
)

export const ConfirmPage = () => (
  <Confirm />
)