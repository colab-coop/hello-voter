import React from 'react'
import PageLayout from '../PageLayout'
import CardButton from '../CardButton'
import { Phone24, Document24 } from '@carbon/icons-react';

export default () => (
  <PageLayout title="My Profile">
    <CardButton
      icon={ <Phone24 /> }
      title="My Contact Info"
      description="Add or edit your contact information, like your phone number"
      onClick={() => { }}
    />
    <CardButton
      icon={ <Document24 /> }
      title="My Application"
      description="Review and information from your ambassador training"
      onClick={() => { }}
    />
  </PageLayout>
)
