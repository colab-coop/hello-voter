import React, { useState, useEffect } from "react";
import filter from "lodash/filter";
import {
  Tag,
  OverflowMenu,
  OverflowMenuItem,
} from "carbon-components-react";
import { Add16, ChevronRight16 } from "@carbon/icons-react";
import styled, { createGlobalStyle } from "styled-components";
import { GridThreeUp } from "../pageStyles";
import { colors, spacing, breakpoints } from "../../theme";
import PageLayout from "../PageLayout";
import Breadcrumbs from "../Breadcrumbs";
import Button from "../Button";
import Loading from "../Loading";
import { normalizeTripler } from './AddTripler';
import { AppContext } from "../../api/AppContext";

const {
  REACT_APP_TRIPLER_PAYMENT_AMT,
  REACT_APP_AMBASSADOR_PAYMENT_AMT,
  REACT_APP_NONVOLUNTEER_PAYMENT_FEATURE,
  REACT_APP_DISABLE_TRIPLER_UPGRADE_UI,
} = process.env;

const SectionTitle = styled.h5`
  margin-top: ${spacing[7]};
  margin-bottom: ${spacing[2]};
`;

const Paragraph = styled.p`
  margin-bottom: ${spacing[5]};
`;

const TriplerRowStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${spacing[3]} ${spacing[4]};
  background-color: ${colors.gray[10]};
  border-top: 1px solid ${colors.gray[20]};
  @media (min-width: ${breakpoints.lg.width}) {
    max-width: calc(22rem - 16px);
  }
  &:hover {
    background-color: #e5e5e5;
    cursor: pointer;
  }
`;

const TriplerRowName = styled.h6`
  font-weight: normal;
`;

const TriplerRowNameAndAddress = styled.div`
  white-space: nowrap;
  overflow: hidden;
  margin-right: ${spacing[2]};
`;

const TriplerRowAddress = styled.p`
  font-size: 12px;
  margin: 2px 0 0 0;
`;

const TriplerRowButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OverflowMenuStyled = styled(OverflowMenu)`
  border-radius: 100%;
  margin-left: ${spacing[3]};
  width: ${spacing[6]};
  height: ${spacing[6]};
`;

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
`;

const GridRowSpanTwo = styled.div`
  grid-column-end: span 2;
  @media (max-width: ${breakpoints.lg.width}) {
    grid-column-end: span 3;
  }
`;

const GridRowSpanOne = styled.div`
  grid-column-end: span 1;
  @media (max-width: ${breakpoints.lg.width}) {
    grid-column-end: span 3;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.gray[20]};
  margin-top: ${spacing[5]};
  margin-bottom: ${spacing[5]};
`;

// FIXME: Hack to make table alignment better for now
const ParagraphMinHeight48 = styled(Paragraph)`
  min-height: 48px;
  @media (max-width: ${breakpoints.lg.width}) {
    min-height: auto;
  }
`;

const ParagraphMinHeight72 = styled(Paragraph)`
  min-height: 72px;
  @media (max-width: ${breakpoints.lg.width}) {
    min-height: auto;
  }
`;

const TriplerRow = ({
  name,
  address,
  id,
  unconfirmed,
  pending,
  confirmed,
  ambassadorConfirmed,
  remindTripler,
  deleteTripler,
  initiate1099DataEntryFlow
}) => (
  <TriplerRowStyled>
    <TriplerRowNameAndAddress>
      <TriplerRowName>{name}</TriplerRowName>
      <TriplerRowAddress>{address}</TriplerRowAddress>
    </TriplerRowNameAndAddress>
    <TriplerRowButtons>
      {unconfirmed && (
        <>
          <TriplerMoreMenuHack />
          <Button
            pill
            href={`/triplers/confirm/${id}`}
            trackingEvent={{ action: "TriplerAddInfo", label: "Add Info" }}
          >
            Add Info <ChevronRight16 />
          </Button>
          <OverflowMenuStyled id="tripler-more-menu">
            <OverflowMenuItem
              itemText="Remove Vote Tripler from list"
              onClick={() => deleteTripler(id)}
            />
          </OverflowMenuStyled>
        </>
      )}
      {pending && (
        <Button
          pill
          data-id={id}
          onClick={remindTripler}
          trackingEvent={{ action: "TriplerRemind", label: "Remind" }}
        >
          Remind
        </Button>
      )}
      {/*
        FIXME: Hide payments `REACT_APP_NONVOLUNTEER_PAYMENT_FEATURE` & `REACT_APP_PAYMENT_FEATURE`
        with Boolean rather than "true" and empty .env field
      */}
      {REACT_APP_NONVOLUNTEER_PAYMENT_FEATURE && confirmed && (
        <Tag type="green" style={{ margin: 0, wordBreak: 'normal' }}>
          ${REACT_APP_TRIPLER_PAYMENT_AMT}&nbsp;Earned
        </Tag>
      )}
      {REACT_APP_NONVOLUNTEER_PAYMENT_FEATURE && ambassadorConfirmed && (
        <Tag type="green" style={{ margin: 0, wordBreak: 'normal' }}>
          ${REACT_APP_AMBASSADOR_PAYMENT_AMT}&nbsp;Earned
        </Tag>
      )}
    </TriplerRowButtons>
  </TriplerRowStyled>
);

const Triplers = ({
  triplers,
  ...passThroughProps
}) => {
  return (
    <>
      {triplers.map((tripler) => {
        const { name, address } = normalizeTripler(tripler);
        return (
          <TriplerRow
            {...passThroughProps}
            key={tripler.id}
            id={tripler.id}
            name={name}
            address={address}
            onClick={() => {}}
          />
        );
      })}
    </>
  )
}

const AllTriplers = ({
  unconfirmed,
  pending,
  confirmed,
  remindTripler,
  limit,
  deleteTripler,
  ambassadors,
  initiate1099DataEntryFlow,
  user: ambassador
}) => {
  const hasTriplers = unconfirmed.length > 0 || pending.length > 0 || confirmed.length > 0;
  const showAmbassadors = ambassadors.length > 0 && !REACT_APP_DISABLE_TRIPLER_UPGRADE_UI;
  const ambassadorNotConfirmed = filter(ambassadors, { is_ambassador_and_has_confirmed: false });
  const ambassadorConfirmed = filter(ambassadors, { is_ambassador_and_has_confirmed: true });
  const atTriplerLimit = unconfirmed.length + confirmed.length + pending.length >= limit;
  const needsAdditional1099Data = ambassador && ambassador['needs_additional_1099_data'];
  // const needsPaymentAccountSetup = ambassador && ambassador['needs_primary_account_setup'];

  return (
    <>
      <GridThreeUp>
        <GridRowSpanTwo>
          <p>
            As a Voting Ambassador, your task is to recruit “Vote Triplers” from
            a list of family members and neighbors. A Vote Tripler is someone
            who agrees to remind three other people to vote in the next
            election.
          </p>
          <br />
          {REACT_APP_NONVOLUNTEER_PAYMENT_FEATURE && (
            <p>
              You will receive ${REACT_APP_TRIPLER_PAYMENT_AMT} for each Vote
              Tripler you recruit.
            </p>
          )}
        </GridRowSpanTwo>
        <GridRowSpanOne>
          {(!needsAdditional1099Data) &&
          <Button
            style={{ marginTop: 0 }}
            href="/triplers/add"
            trackingEvent={{
              action: "FindNewVoteTriplers",
              label: "Find new Vote Triplers",
            }}
            disabled={atTriplerLimit}
          >
            Find new Vote Triplers
            <Add16 />
          </Button>}
          {atTriplerLimit && !needsAdditional1099Data && "You have claimed the maximum number of Vote Triplers."}

          {needsAdditional1099Data &&
          <Button
              style={{ marginTop: 0 }}
              onClick={() => {initiate1099DataEntryFlow()}}
              trackingEvent={{
                action: "ProvideStripeKYCInformation",
                label: "Provide more information",
              }}
          >
            Provide more information
          </Button>}
          {needsAdditional1099Data && "You need to provide more information before you can claim further Vote Triplers."}
        </GridRowSpanOne>
      </GridThreeUp>
      <Divider />
      {hasTriplers && (
        <GridThreeUp>
          <GridRowSpanOne>
            <SectionTitle>Your possible Vote Triplers</SectionTitle>
            <ParagraphMinHeight48>
              Add information for a Vote Tripler. We’ll send them a text message
              to confirm.
            </ParagraphMinHeight48>
            <Triplers
              unconfirmed
              triplers={unconfirmed}
              remindTripler={remindTripler}
              deleteTripler={deleteTripler}
            />
          </GridRowSpanOne>

          <GridRowSpanOne>
            <SectionTitle>Your unconfirmed Vote Triplers</SectionTitle>
            <ParagraphMinHeight48>
              These possible Vote Triplers have not yet confirmed their
              identity.
            </ParagraphMinHeight48>
            <Triplers
              pending
              triplers={pending}
              remindTripler={remindTripler}
              deleteTripler={deleteTripler}
            />
          </GridRowSpanOne>

          <GridRowSpanOne>
            <SectionTitle>Your confirmed Vote Triplers</SectionTitle>
            <ParagraphMinHeight48>
              {REACT_APP_NONVOLUNTEER_PAYMENT_FEATURE
                ? "You'll receive payment for these Vote Triplers."
                : "These Vote Triplers have been confirmed — great work!"}
            </ParagraphMinHeight48>
            {/*!user.account ? (
              <Button
                href="/payments/add"
                trackingEvent={{ action: "AddPayment" }}
                style={{ marginBottom: 20 }}
              >
                Add Payment Method
                <Add16 />
              </Button>
            ) : (
              ""
            )*/}
            <Triplers
              confirmed
              triplers={confirmed}
              remindTripler={remindTripler}
              deleteTripler={deleteTripler}
            />
          </GridRowSpanOne>
        </GridThreeUp>
      )}

      {showAmbassadors && (
        <GridThreeUp style={{ marginTop: 24 }}>
          <GridRowSpanOne>
            <SectionTitle>Ambassadors-in-Waiting</SectionTitle>
            <Paragraph>
              These Vote Triplers have become Voting Ambassadors but have not
              yet confirmed a Vote Tripler of their own.
            </Paragraph>
            <Triplers
              triplers={ambassadorNotConfirmed}
            />
          </GridRowSpanOne>

          <GridRowSpanTwo>
            <SectionTitle>Recognition of Your Outstanding Work</SectionTitle>
            <ParagraphMinHeight72>
              {REACT_APP_NONVOLUNTEER_PAYMENT_FEATURE
                ? "You’ll receive a special bonus for all Vote Triplers who became a Voting Ambassador and confirmed at least one Vote Tripler of their own. You’ve done a great service for your community — keep it up!"
                : "These Vote Triplers have become Voting Ambassadors and confirmed at least one Vote Tripler of their own. You've done a great service for your community — keep it up!"}
            </ParagraphMinHeight72>
            <Triplers
              ambassadorConfirmed
              triplers={ambassadorConfirmed}
            />
          </GridRowSpanTwo>
        </GridThreeUp>
      )}
    </>
  );
};

export default () => {
  const [triplers, setTriplers] = useState(null);
  const [limit, setLimit] = useState(null);
  const { api, user } = React.useContext(AppContext);

  const fetchData = async () => {
    const data = await api.fetchTriplers();
    let triplerLimit = user.claim_tripler_limit;
    if (triplerLimit === null || triplerLimit === undefined) {
      const serverTriplerLimit = await api.fetchTriplersLimit();
      triplerLimit = parseInt(serverTriplerLimit.data.limit);
    }
    setLimit(triplerLimit);
    setTriplers(data.data);
  };

  const initiate1099DataEntryFlow = async () => {
    const stripeAccountLinkObject = await api.getAccount1099DataEntryLink();
    window.location.href = stripeAccountLinkObject.data.url;
  };

  useEffect(() => {
    fetchData();
  }, []);
  const sendReminder = async (el) => {
    api.sendReminder(el.target.dataset.id);
  };
  const deleteTripler = async (id) => {
    await api.deleteTripler([id]);
    await fetchData();
  };
  return triplers ? (
    <TriplersPage
      triplers={triplers}
      remindTripler={sendReminder}
      fetchData={fetchData}
      initiate1099DataEntryFlow={initiate1099DataEntryFlow}
      limit={limit}
      deleteTripler={deleteTripler}
      user={user}
    />
  ) : (
    <Loading />
  );
};

export const TriplersPage = ({
  triplers,
  remindTripler,
  initiate1099DataEntryFlow,
  limit,
  deleteTripler,
  user,
}) => {
  const confirmed = filter(triplers, { status: "confirmed" });
  const pending = filter(triplers, { status: "pending" });
  const unconfirmed = filter(triplers, { status: "unconfirmed" });
  const ambassadors = filter(triplers, { is_ambassador: true });

  return (
    <PageLayout
      title="My Vote Triplers"
      tutorialId="TRIPLERS"
      header={
        <Breadcrumbs
          items={[
            { name: "Home", route: "/home" },
            { name: "Vote Triplers" },
          ]}
        />
      }
    >
      <AllTriplers
        unconfirmed={unconfirmed}
        pending={pending}
        confirmed={confirmed}
        ambassadors={ambassadors}
        remindTripler={remindTripler}
        limit={limit}
        deleteTripler={deleteTripler}
        initiate1099DataEntryFlow={initiate1099DataEntryFlow}
        user={user}
      />
    </PageLayout>
  );
};
