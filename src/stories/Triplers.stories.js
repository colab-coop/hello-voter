import React from 'react'
import Triplers from '../components/Triplers/TriplersPage'
import Invite from '../components/Triplers/InvitePage'
import Confirm from '../components/Triplers/ConfirmPage'

export default {
  title: 'Triplers'
}

export const TriplersEmptyPage = () => (
  <Triplers empty />
)

export const TriplersPage = () => (
  <Triplers 
    triplers={{ 
      unconfirmed: [
        { name: "Lauren R", address: "200 Address lane" },
        { name: "Edison Shepherd", address: "1 Good Boy Rd" }
      ],
      pending: [
        { name: "Michael Marsh", address: "200 Address lane" },
        { name: "Edison Shepherd", address: "1 Good Boy Rd" },
        { name: "Lauren Ralph", address: "1 Road Rd" }
      ],
      confirmed: [
        { name: "Michael Marsh", address: "200 Address lane" },
        { name: "Edison Shepherd", address: "1 Good Boy Rd" }
      ]
    }}
  />
)

export const InvitePage = () => (
  <Invite />
)

export const ConfirmPage = () => (
  <Confirm />
)