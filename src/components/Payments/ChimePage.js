import React from 'react'
import styled from 'styled-components'
import { ResponsiveContainer } from '../pageStyles'
import { spacing } from '../../theme'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import Button from '../Button'
import chime from '../../assets/images/chime-card.png'
import { useHistory } from 'react-router-dom'

const Image = styled.img`
  width: 100%;
  max-width: 320px;
`;

const Subheader = styled.h4`
  font-weight: 600;
  margin-top: ${spacing[5]};
`;

const OrderedList = styled.ol`
  list-style: decimal;
  margin-bottom: ${spacing[7]};
`;

const ListItem = styled.li`
  margin-block-start: ${spacing[5]};
  margin-block-end: ${spacing[5]};
  margin-inline-start: ${spacing[5]};
  margin-inline-end: 0;
  line-height: 1.5;
`;

export default () => {
  const history = useHistory()
  return (
    <PageLayout
      title={""}
      header={
        <Breadcrumbs
          items={[
            { name: "Home", route: "/home" },
            { name: "Payments", route: "/payments" },
            { name: "Add", route: "/payments/add" },
            { name: "Chime" },
          ]}
        />
      }
    >
    <ResponsiveContainer>
      <Image src={chime} />
      <p>Chime is a new kind of bank. Open a free account in five minutes.</p>
      <Subheader>How it works</Subheader>
      <OrderedList>
        <ListItem>Visit Chime.com and sign up for an account.</ListItem>
        <ListItem>Once your Chime account is open, return to the Add Payment Account page and click Use existing account to connect your new Chime account and receive payment.</ListItem>
      </OrderedList>
      <Button
        style={{backgroundColor: "#25C87D"}}
        href='https://chime.com'
        shouldRedirect
        onClick={() => {
          history.push("/payments/add")
        }}
        // trackingEvent={{ category: "SubmitTriplerConfirm", label: "Add" }}
      >
      Sign up for a Chime account
      </Button>
      <Button
        size="small"
        kind="tertiary"
        // trackingEvent={{
        //   category: "BackFromTriplerConfirm",
        //   label: "Go back to My Vote Triplers",
        // }}
        href='/payments/add'
      >
        Go back to Payments
      </Button>
    </ResponsiveContainer>
    </PageLayout>
  );
};
