import React from 'react'
import styled from 'styled-components'
import { spacing } from '../../theme'
import PageLayout from '../PageLayout'
import CardButton from '../CardButton'
import { Catalog24, Help24 } from '@carbon/icons-react';

const TopParagraph = styled.p`
  margin-bottom: ${ spacing[7]};
  font-size: 14px;
`

export default () => (
  <PageLayout title="Help">
    <TopParagraph>Have questions? Here’s how you can get in touch to get answers.</TopParagraph>
    <CardButton
      icon={ <Catalog24 /> }
      title="Schedule a call"
      description="Schedule a call with your local organizar to get help"
      onClick={() => { }}
    />
    <CardButton
      icon={ <Help24 /> }
      title="FAQ"
      description="Frequently asked questions from our ambassadors"
      onClick={() => { }}
    />
  </PageLayout>
)
