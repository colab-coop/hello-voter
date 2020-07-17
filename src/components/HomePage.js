import React from 'react'
import styled from 'styled-components'
import { spacing } from '../theme'
import PageLayout from './PageLayout'
import CardButton from './CardButton'
import { Link } from 'carbon-components-react'
import { Events24, Wallet24 } from '@carbon/icons-react'

const TopParagraph = styled.p`
  margin-bottom: ${ spacing[7] };
`

const BottomParagraph = styled.p`
  margin-top: ${ spacing[7] };
`

export default () => (
  <PageLayout title="Home">
    <TopParagraph>Make a positive impact on your community — and make money, too!</TopParagraph>
    <CardButton 
      icon={ <Events24 /> }
      title="Vote Triplers" 
      description="Find, recruit, and manage potential Vote Triplers in your community" 
      onClick={() => {}}
    />
    <CardButton
      icon={ <Wallet24 /> }
      title="Earnings"
      description="Set up and view your earnings from your organizing efforts"
      onClick={() => {}}
    />
    <BottomParagraph>Have questions? <Link href="">Schedule a meeting</Link> with an Organizer.</BottomParagraph>
  </PageLayout>
)
