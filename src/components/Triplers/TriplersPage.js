import React, { useState, useEffect } from 'react'
import { Link } from 'carbon-components-react'
import { Add16 } from '@carbon/icons-react'
import styled from 'styled-components'
import { colors, spacing } from '../../theme'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import Button from '../Button'
import Loading from '../Loading'

import { AppProvider, AppContext } from '../../api/AppContext'

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
    <Button href='/triplers/add'>Find new Triplers<Add16 /></Button>
  </>
)

const Triplers = ({ unconfirmed, pending, confirmed }) => (
  <>
    <p>
      These are your contacts that will each help 3 others vote. Confirm each
      Tripler by adding their information below
    </p>
    <Button href='/triplers/add'>Find new Triplers<Add16 /></Button>
    <SectionTitle>Your unconfirmed Triplers</SectionTitle>
    <Paragraph>Add information for a Tripler. We’ll send them a text message to confirm.</Paragraph>
    {
      unconfirmed &&
        unconfirmed.map((tripler) => (
          <TriplerRow
            name={`${tripler.first_name} ${tripler.last_name}`}
            address={`${tripler.address.address1} ${tripler.address.city} ${tripler.address.state}`}
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
            name={`${tripler.first_name} ${tripler.last_name}`}
            address={`${tripler.address.address1} ${tripler.address.city} ${tripler.address.state}`}
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
            name={`${tripler.first_name} ${tripler.last_name}`}
            address={`${tripler.address.address1} ${tripler.address.city} ${tripler.address.state}`}
            onClick={() => { }}
          />
        ))
    }
  </>
)

export default () => {
  const [triplers, setTriplers] = useState(null)
  const { api } = React.useContext(AppContext)
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.fetchTriplers()
      setTriplers(data.data)
    }
    fetchData()
  }, [])
  return (
    triplers ? <TriplersPage triplers={triplers} /> : <Loading />
  )
}

const TriplersPage = ({ triplers }) => {
  const confirmed = triplers.filter((tripler) => tripler.status === 'confirmed')
  const pending = triplers.filter((tripler) => tripler.status === 'pending')
  const unconfirmed = triplers.filter((tripler) => tripler.status === 'unconfirmed')
  console.log(confirmed)
  return (
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
      }/>}
    >
      {
        !triplers ?
          <TriplersEmpty/> :
          <Triplers
            unconfirmed={unconfirmed}
            pending={pending}
            confirmed={confirmed}
          />
      }
    </PageLayout>
  )
}