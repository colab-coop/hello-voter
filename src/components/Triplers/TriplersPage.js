import React, { useState, useEffect } from 'react'
import { Link, Tag } from 'carbon-components-react'
import { Add16, ChevronRight16 } from '@carbon/icons-react'
import styled from 'styled-components'
import { ResponsiveContainer } from '../pageStyles'
import { colors, spacing } from '../../theme'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import Button from '../Button'
import Loading from '../Loading'

import { AppContext } from '../../api/AppContext'

const { REACT_APP_TRIPLER_PAYMENT_AMT } = process.env

const SectionTitle = styled.h5`
  margin-top: ${ spacing[7] };
  margin-bottom: ${ spacing[2] };
`

const Paragraph = styled.p`
  margin-bottom: ${ spacing[5] };
`

const TriplerRowStyled = styled.div`
  display: flex;
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

const TriplerColumn = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
  align-items: center;
`

const TriplerRow = ({ name, address, id, unconfirmed, pending, remindTripler, confirmed, tagText }) => (
  <TriplerRowStyled>
    <div>
      <TriplerRowName>{ name }</TriplerRowName>
      <TriplerRowAddress>{ address }</TriplerRowAddress>
    </div>
    <TriplerColumn>
      {unconfirmed &&
        <Button pill href={`/triplers/confirm/${id}`}
          trackingEvent={{ category: 'TriplerAddInfo', label: 'Add Info'}}
          >
          Add Info <ChevronRight16 />
        </Button>
      }
      {pending &&
        <Button pill data-id={id} onClick={remindTripler}
          trackingEvent={{ category: 'TriplerRemind', label: 'Remind'}}
          >
          Remind
        </Button>
      }
      {confirmed &&
        <Tag type="green">
          ${REACT_APP_TRIPLER_PAYMENT_AMT} Earned
        </Tag>
      }
    </TriplerColumn>
  </TriplerRowStyled>
)

const Triplers = ({ unconfirmed, pending, confirmed, remindTripler }) => {
  const hasTriplers =
    unconfirmed.length > 0 || pending.length > 0 || confirmed.length > 0;
  const hasMaxTriplers = 
    unconfirmed.length + confirmed.length + pending.length >= 12

  return (
    <>
      <p>
        As a Voting Ambassador, your task is to recruit “Vote Triplers” from a
        list of family members and neighbors. A Vote Tripler is someone who
        agrees to remind three other people to vote in the next election.
      </p>
      <br />
      <p>
        You will receive ${REACT_APP_TRIPLER_PAYMENT_AMT} for each Vote Tripler you recruit.
      </p>
      <Button
        href="/triplers/add"
        trackingEvent={{ category: 'FindNewVoteTriplers', label: 'Find new Vote Triplers'}}
        disabled={hasMaxTriplers}
      >
        Find new Vote Triplers
        <Add16 />
      </Button>
      
      {hasTriplers && (
        <>
          <SectionTitle>Your possible Vote Triplers</SectionTitle>
          <Paragraph>
            Add information for a Vote Tripler. We’ll send them a text message to
            confirm.
          </Paragraph>
          {unconfirmed.map((tripler) => (
            <TriplerRow
              id={tripler.id}
              name={`${tripler.first_name} ${tripler.last_name}`}
              address={`${tripler.address.address1} ${tripler.address.city} ${tripler.address.state}`}
              unconfirmed
              onClick={() => {}}
            />
          ))}

          <SectionTitle>Your unconfirmed Vote Triplers</SectionTitle>
          <Paragraph>
            These possible Vote Triplers have not yet confirmed their identity.
          </Paragraph>
          {pending.map((tripler) => (
            <TriplerRow
              id={tripler.id}
              name={`${tripler.first_name} ${tripler.last_name}`}
              address={`${tripler.address.address1} ${tripler.address.city} ${tripler.address.state}`}
              onClick={() => {}}
              pending
              remindTripler={remindTripler}
            />
          ))}

          <SectionTitle>Your confirmed Vote Triplers</SectionTitle>
          <Paragraph>
            Once your <Link href="#/payments">payment method is set up</Link>,
            you’ll receive payment for these Vote Triplers.
          </Paragraph>
          {confirmed.map((tripler, i) => (
              <TriplerRow
              name={`${tripler.first_name} ${tripler.last_name}`}
              address={`${tripler.address.address1} ${tripler.address.city} ${tripler.address.state}`}
              onClick={() => {}}
              confirmed
            />
          ))}
        </>
      )}
    </>
  );
};

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
  const sendReminder = async (el) => {
    api.sendReminder(el.target.dataset.id)
  }
  return (
    triplers ? <TriplersPage triplers={triplers} remindTripler={sendReminder} /> : <Loading />
  )
}

const TriplersPage = ({ triplers, remindTripler }) => {
  const confirmed = triplers.filter((tripler) => tripler.status === 'confirmed')
  const pending = triplers.filter((tripler) => tripler.status === 'pending')
  const unconfirmed = triplers.filter((tripler) => tripler.status === 'unconfirmed')
  return (
    <PageLayout
      title="My Vote Triplers"
      header={<Breadcrumbs items={
        [
          {
            name: "Home",
            route: "/home"
          },
          {
            name: "Vote Triplers"
          }
        ]
      }/>}
    >
    <ResponsiveContainer>
      <Triplers
        unconfirmed={unconfirmed}
        pending={pending}
        confirmed={confirmed}
        remindTripler={remindTripler}
      />
    </ResponsiveContainer>
    </PageLayout>
  )
}
