import React from 'react'
import { Button } from 'carbon-components-react'
import { Launch16 } from '@carbon/icons-react'
import PageLayout from './PageLayout'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../api/AppContext'

const { REACT_APP_CALENDLY_LINK, REACT_APP_APPROVE_HEADER, REACT_APP_APPROVE_CONTENT } = process.env

export default () => {
  const history = useHistory()
  const { user } = React.useContext(AppContext)
  user.approved && history.push('/triplers')
  return (
    <>
      <PageLayout
        title={REACT_APP_APPROVE_HEADER}
      >
        <p>
          {REACT_APP_APPROVE_CONTENT}
        </p>
        <br />
        <br />
        <Button
          href={REACT_APP_CALENDLY_LINK}
          trackingEvent={{
            category: 'CalendlyLink',
            label: 'Choose a date and time'
          }}
          target='_blank'>
            Choose a date and time <Launch16 style={{marginLeft:8}} />
        </Button>
      </PageLayout>
    </>
  )
}
