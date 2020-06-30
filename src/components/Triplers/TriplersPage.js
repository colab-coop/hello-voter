import React from 'react'
import { Link } from 'carbon-components-react'
import { Add16 } from '@carbon/icons-react'
import styled from 'styled-components'
import { colors, spacing } from '../../theme'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import Button from '../Button'

const ButtonStyled = styled(Button)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  padding-right: ${ spacing[4] };
  margin-top: ${ spacing[5] };
`

const SectionTitle = styled.h5`
  margin-top: ${ spacing[7] };
  margin-bottom: ${ spacing[2] };
`

const Paragraph = styled.p`
  margin-bottom: ${ spacing[5] };
`

const TriplerRowStyled = styled.div`
  width: 100%;
  padding: ${ spacing[4] };
  background-color: ${ colors.gray[10] };
  border-top: 1px solid ${ colors.gray[20] };
  &:hover {
    background-color: #e5e5e5;
    cursor: pointer;
  } 
`

const TriplerRowName = styled.h6`
  font-weight: normal;
`

const TriplerRowAddress = styled.p`
  font-size: 12px;
`

const TriplerRow = ({ name, address }) => (
  <TriplerRowStyled>
    <TriplerRowName>{ name }</TriplerRowName>
    <TriplerRowAddress>{ address }</TriplerRowAddress>
  </TriplerRowStyled>
)

const TriplersEmpty = () => (
  <>
    <p>
      Confirm that these people will ask 3 friends to vote and earn 50 dollars
    </p>
    <ButtonStyled href='/triplers/add'>Find new Triplers<Add16 /></ButtonStyled>
  </>
)

const Triplers = ({ unconfirmed, pending, confirmed }) => (
  <>
    <p>
      These are your contacts that will each help 3 others vote. Confirm each
      Tripler by adding their information below
    </p>
    <ButtonStyled href='/triplers/add'>Find new Triplers<Add16 /></ButtonStyled>
    <SectionTitle>Your unconfirmed Triplers</SectionTitle>
    <Paragraph>Add information for a Tripler. We’ll send them a text message to confirm.</Paragraph>
    {
      unconfirmed &&
        unconfirmed.map((tripler) => (
          <TriplerRow
            name={tripler.name}
            address={tripler.address}
            onClick={() => { }}
          />
        ))
    }
    <SectionTitle>Your Triplers who haven’t replied yet</SectionTitle>
    <Paragraph>Once the Tripler confirms “YES” to our text message, you will get your reward.</Paragraph>
    {
      pending &&
        pending.map((tripler) => (
          <TriplerRow
            name={tripler.name}
            address={tripler.address}
            onClick={() => { }}
          />
        ))
    }
    <SectionTitle>Your confirmed Triplers</SectionTitle>
    <Paragraph>Once your <Link href="#">payment method is set up</Link>, you’ll receive your reward for these Triplers.</Paragraph>
    {
      confirmed &&
        confirmed.map((tripler) => (
          <TriplerRow
            name={tripler.name}
            address={tripler.address}
            onClick={() => { }}
          />
        ))
    }
  </>
)

export default ({ empty, triplers }) => (
  <PageLayout
    title="My Vote Triplers"
    header={<Breadcrumbs items={
      [
        {
          name: "Home",
          route: "/"
        },
        {
          name: "Triplers",
          route: "/"
        }
      ]
    } />}
  >
    {
      empty ? 
        <TriplersEmpty /> : 
        <Triplers 
          unconfirmed={triplers.unconfirmed} 
          pending={triplers.pending} 
          confirmed={triplers.confirmed} 
        />
    }
  </PageLayout>
)