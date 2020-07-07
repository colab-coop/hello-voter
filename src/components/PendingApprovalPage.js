import React from 'react'
import PageLayout from './PageLayout'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../api/AppContext'

const { REACT_APP_CALENDLY_LINK } = process.env

export default () => {
  const history = useHistory()
  const { user } = React.useContext(AppContext)
  user.approved && history.push('/triplers')
  return (
    <>
      <PageLayout
        title='Pending Approval'
      >
        <div>Your request is being processed!</div>
        <div>In the meantime, please schedule a call with us!</div>
        <a href={REACT_APP_CALENDLY_LINK} target='_blank'>Click here!</a>
      </PageLayout>
    </>
  )
}
