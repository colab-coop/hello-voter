import React from 'react'
import styled from 'styled-components'
import { spacing } from '../theme'
import PageLayout from './PageLayout'
import CardButton from './CardButton'
import { Link } from 'carbon-components-react'
import { Events24, Wallet24 } from '@carbon/icons-react'

const TopParagraph = styled.p`
  margin-bottom: ${ spacing[5] };
`

const BottomParagraph = styled.p`
  margin-top: ${ spacing[7] };
`

export default () => (
  <PageLayout title="Home">
    <TopParagraph>Make connections to get more progressive impact from your community.</TopParagraph>
    <CardButton 
      icon={ <Events24 /> }
      title="Triplers" 
      description="Find, recruit, and manage potential voters in your community" 
      onClick={() => {}}
    />
    <CardButton
      icon={ <Wallet24 /> }
      title="Payments"
      description="Set up and view your payments from your organizing efforts"
      onClick={() => {}}
    />
    <BottomParagraph>Have questions? <Link href="">Schedule a meeting</Link> with your community organizers.</BottomParagraph>
  </PageLayout>
)
