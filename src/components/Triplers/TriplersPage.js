import React, { useState, useEffect } from 'react'
import { Link, Tag, OverflowMenu, OverflowMenuItem } from 'carbon-components-react'
import { Add16, ChevronRight16 } from '@carbon/icons-react'
import styled, { createGlobalStyle } from 'styled-components'
import { GridThreeUp } from '../pageStyles'
import { colors, spacing, breakpoints } from '../../theme'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import Button from '../Button'
import Loading from '../Loading'

import { AppContext } from '../../api/AppContext'

const { REACT_APP_TRIPLER_PAYMENT_AMT, REACT_APP_AMBASSADOR_PAYMENT_AMT } = process.env

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

// FIXME: Have text truncate responsively
const TriplerColumnTruncate = styled.div`
  min-width: 0;
  max-width: 160px;
`

const TriplerRowAddress = styled.p`
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const TriplerColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`

const OverflowMenuStyled = styled(OverflowMenu)`
  border-radius: 100%;
  margin-left: ${spacing[3]};
  width: ${spacing[6]};
  height: ${spacing[6]};
`

const TriplerMoreMenuHack = createGlobalStyle`
  .bx--overflow-menu-options {
    width: auto;
    transform: translateX(calc(-100% + 24px));
  }
  .bx--overflow-menu-options__btn {
    max-width: 100%;
  }
  .bx--overflow-menu-options::after {
    display: none;
  }
`

const GridRowSpanTwo = styled.div`
  grid-column-end: span 2;
  @media (max-width: ${breakpoints.lg.width}) {
    grid-column-end: span 3;
  }
`

const GridRowSpanOne = styled.div`
  grid-column-end: span 1;
  @media (max-width: ${breakpoints.lg.width}) {
    grid-column-end: span 3;
  }
`

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.gray[20]};
  margin-top: ${spacing[5]};
  margin-bottom: ${spacing[5]};
`

const TriplerRow = ({ 
  name, 
  address, 
  id, 
  unconfirmed, 
  pending, 
  confirmed, 
  ambassadorConfirmed,
  remindTripler,
  deleteTripler 
}) => (
  <TriplerRowStyled>
    <TriplerColumnTruncate>
      <TriplerRowName>{ name }</TriplerRowName>
      <TriplerRowAddress>{ address }</TriplerRowAddress>
    </TriplerColumnTruncate>
    <TriplerColumn>
      {unconfirmed &&
      <>
        <TriplerMoreMenuHack />
        <Button pill href={`/triplers/confirm/${id}`}
          trackingEvent={{ category: 'TriplerAddInfo', label: 'Add Info'}}
          >
          Add Info <ChevronRight16 />
        </Button>
        <OverflowMenuStyled id="tripler-more-menu">
          <OverflowMenuItem 
            itemText="Remove Vote Tripler from list" 
            primaryFocus
            onClick={() => deleteTripler(id)}
          />
        </OverflowMenuStyled>
      </>
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
      {ambassadorConfirmed &&
        <Tag type="green">
          ${REACT_APP_AMBASSADOR_PAYMENT_AMT} Earned
        </Tag>
      }
    </TriplerColumn>
  </TriplerRowStyled>
)

const Triplers = ({ 
  unconfirmed, 
  pending, 
  confirmed, 
  remindTripler, 
  limit, 
  deleteTripler,
  ambassadors
}) => {
  const hasTriplers =
    unconfirmed.length > 0 || pending.length > 0 || confirmed.length > 0

  const hasAmbassadors = ambassadors.length > 0
  const ambassadorNotConfirmed = ambassadors.filter(
    (ambassador) => ambassador.is_ambassador_and_has_confirmed === false
  );
  const ambassadorConfirmed = ambassadors.filter(
    (ambassador) => ambassador.is_ambassador_and_has_confirmed === true
  );

  return (
    <>
      <GridThreeUp>
        <GridRowSpanTwo>
          <p>
            As a Voting Ambassador, your task is to recruit “Vote Triplers” from a
            list of family members and neighbors. A Vote Tripler is someone who
            agrees to remind three other people to vote in the next election.
          </p>
          <br />
          <p>
            You will receive ${REACT_APP_TRIPLER_PAYMENT_AMT} for each Vote Tripler you recruit.
          </p>
        </GridRowSpanTwo>
        <GridRowSpanOne>
          <Button
            style={{marginTop: 0}}
            href="/triplers/add"
            trackingEvent={{ category: 'FindNewVoteTriplers', label: 'Find new Vote Triplers'}}
            disabled={unconfirmed.length + confirmed.length + pending.length === limit}
          >
            Find new Vote Triplers
            <Add16 />
          </Button>
        </GridRowSpanOne>
      </GridThreeUp>
      <Divider />
      {hasTriplers && (
        <GridThreeUp>
          <div>
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
              deleteTripler={deleteTripler}
            />
          ))}
          </div>

          <div>
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
              deleteTripler={deleteTripler}
            />
          ))}
          </div>

          <div>
          <SectionTitle>Your confirmed Vote Triplers</SectionTitle>
          <Paragraph>
            You'll receive payment for these Vote Triplers.
          </Paragraph>
          {confirmed.map((tripler, i) => (
              <TriplerRow
              name={`${tripler.first_name} ${tripler.last_name}`}
              address={`${tripler.address.address1} ${tripler.address.city} ${tripler.address.state}`}
              onClick={() => {}}
              confirmed
              deleteTripler={deleteTripler}
            />
          ))}
          </div>
        </GridThreeUp>
      )}

      {hasAmbassadors && (
        <GridThreeUp style={{marginTop: 24}}>
          <div>
          <SectionTitle>Ambassadors-in-Waiting</SectionTitle>
          <Paragraph>
            These Vote Triplers have become Voting Ambassadors but have not
            yet confirmed a Vote Tripler of their own.
          </Paragraph>
          {ambassadorNotConfirmed.map((tripler) => (
            <TriplerRow
              id={tripler.id}
              name={`${tripler.first_name} ${tripler.last_name}`}
              address={`${tripler.address.address1} ${tripler.address.city} ${tripler.address.state}`}
            />
          ))}
          </div>

          <div>
          <SectionTitle>Recognition of Your Outstanding Work</SectionTitle>
          <Paragraph>
            You’ll receive a special bonus for all Vote Triplers who became a
            Voting Ambassador and confirmed at least one Vote Tripler of their
            own. You’ve done a great service for your community — keep it up!
          </Paragraph>
          {ambassadorConfirmed.map((tripler, i) => (
            <TriplerRow
              name={`${tripler.first_name} ${tripler.last_name}`}
              address={`${tripler.address.address1} ${tripler.address.city} ${tripler.address.state}`}
              ambassadorConfirmed
            />
          ))}
          </div>
        </GridThreeUp>
      )}
    </>
  );
};

export default () => {
  const [triplers, setTriplers] = useState(null)
  const [limit, setLimit] = useState(null)
  const { api } = React.useContext(AppContext)

  const fetchData = async () => {
    const data = await api.fetchTriplers()
    const triplerLimit = await api.fetchTriplersLimit()
    const triplerLimitV = parseInt(triplerLimit.data.limit)
    setLimit(triplerLimitV)
    setTriplers(data.data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  const sendReminder = async (el) => {
    api.sendReminder(el.target.dataset.id)
  }
  const deleteTripler = async (id) => {
    await api.deleteTripler([id])
    await fetchData()
  }
  return (
    triplers ? <TriplersPage
      triplers={triplers}
      remindTripler={sendReminder}
      fetchData={fetchData}
      limit={limit}
      deleteTripler={deleteTripler}
    /> : <Loading />
  )
}

const TriplersPage = ({ triplers, remindTripler, limit, deleteTripler }) => {
  const confirmed = triplers.filter((tripler) => tripler.status === 'confirmed')
  const pending = triplers.filter((tripler) => tripler.status === 'pending')
  const unconfirmed = triplers.filter((tripler) => tripler.status === 'unconfirmed')
  const ambassadors = triplers.filter((tripler) => tripler.is_ambassador === true)
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
      <Triplers
        unconfirmed={unconfirmed}
        pending={pending}
        confirmed={confirmed}
        ambassadors={ambassadors}
        remindTripler={remindTripler}
        limit={limit}
        deleteTripler={deleteTripler}
      />
    </PageLayout>
  )
}
