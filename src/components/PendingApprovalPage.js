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
        title='Training Complete!'
      >
        <div>
          A program administrator will review your application and be in touch with you soon.
          In the meantime, please choose a convenient date and time below: 
        </div>
        <a href={REACT_APP_CALENDLY_LINK} target='_blank'>Click here!</a>
      </PageLayout>
    </>
  )
}
