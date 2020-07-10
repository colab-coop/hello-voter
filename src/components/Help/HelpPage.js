import React from 'react'
import styled from 'styled-components'
import { spacing } from '../../theme'
import PageLayout from '../PageLayout'
import CardButton from '../CardButton'
import { Catalog24, Help24 } from '@carbon/icons-react';

const TopParagraph = styled.p`
  margin-bottom: ${ spacing[7]};
`

export default () => (
  <PageLayout title="Help">
    <TopParagraph>Have questions? Here’s how to get answers.</TopParagraph>
    <CardButton
      icon={ <Catalog24 /> }
      title="Schedule a call"
      description="Schedule a call to discuss your questions with an Organizer"
      onClick={() => { }}
    />
    <CardButton
      icon={ <Help24 /> }
      title="FAQ"
      description="See answers to common questions asked by other Voting Ambassadors"
      onClick={() => { }}
    />
  </PageLayout>
)
