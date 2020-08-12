import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { ResponsiveContainer } from './pageStyles'
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

export default () => {
  const history = useHistory()
  const redirect = async (href) => {
    history.push(href)
  }

  return (
    <PageLayout title="Home">
    <ResponsiveContainer>
      <TopParagraph>
        Make a positive impact on your community — and make money, too!
      </TopParagraph>
      <CardButton
        icon={<Events24 />}
        title="Vote Triplers"
        description="Find, recruit, and manage potential Vote Triplers in your community"
        onClick={() => {
          redirect("/triplers");
        }}
      />
      <CardButton
        icon={<Wallet24 />}
        title="Earnings"
        description="Set up and view your earnings from your organizing efforts"
        onClick={() => {
          redirect("/payments");
        }}
      />
    </ResponsiveContainer>
    </PageLayout>
  );
}
