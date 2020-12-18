import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Events24, Wallet24 } from '@carbon/icons-react'
import { spacing } from '../theme'
import { GridThreeUp } from './pageStyles'
import PageLayout from './PageLayout'
import CardButton from './CardButton'

const { REACT_APP_PAYMENT_FEATURE } = process.env

const TopParagraph = styled.p`
  margin-bottom: ${ spacing[7] };
`

export default () => {
  const history = useHistory()
  const redirect = async (href) => {
    history.push(href)
  }

  return (
    <PageLayout title="Home" tutorialId="HOME">
      <TopParagraph>
        Make a positive impact on your community — and make money, too!
      </TopParagraph>
      <GridThreeUp>
      <CardButton
        icon={<Events24 />}
        title="Vote Triplers"
        description="Find, recruit, and manage potential Vote Triplers in your community"
        onClick={() => {
          redirect("/triplers");
        }}
      />
      {/* 
        FIXME: Hide payments `REACT_APP_NONVOLUNTEER_PAYMENT_FEATURE` & `REACT_APP_PAYMENT_FEATURE`
        with Boolean rather than "true" and empty .env field
      */}
      {REACT_APP_PAYMENT_FEATURE &&
        <CardButton
          icon={<Wallet24 />}
          title="Payments"
          description="Set up and view your earnings from your organizing efforts"
          onClick={() => {
            redirect("/payments");
          }}
        />
      }
      </GridThreeUp>
    </PageLayout>
  );
}
