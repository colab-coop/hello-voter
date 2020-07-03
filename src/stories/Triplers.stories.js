import React from 'react'
import Triplers from '../components/Triplers/TriplersPage'
import Add from '../components/Triplers/AddTripler'
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

export const AddPage = () => (
  <Add 
    triplers={
      [
        {
          id: 'a',
          name: 'Judy Blume',
          address: '1 Really Good Address Ln asdasdsa as das dasd '
        },
        {
          id: 'b',
          name: 'Edison Shepherd',
          address: '1 Good Boy Rd'
        },
        {
          id: 'd',
          name: 'Lauren Ralph',
          address: '1 Road Rd'
        },
        {
          id: 'e',
          name: 'Pamela Jones',
          address: '1 Jones Road Rd'
        },
      ]
    } 
  />
)

export const ConfirmPage = () => (
  <Confirm />
)