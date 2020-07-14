import React from 'react'
import { Finance24, Wallet24 } from '@carbon/icons-react'
import styled from 'styled-components'
import PageLayout from '../PageLayout'
import CardButton from '../CardButton'
import Button from '../Button'
import Breadcrumbs from '../Breadcrumbs'
import chime from '../../assets/images/chime.png';

const Chime = styled.img`
  width: 24px;
  height: 24px;
`

export default () => (
  <PageLayout
    title="Add Payment Account"
    header={
      <Breadcrumbs
        items={[
          {
            name: "Home",
            route: "/",
          },
          {
            name: "Payments",
            route: "/",
          },
          {
            name: "Add",
            route: "/",
          },
        ]}
      />
    }
  >
    <CardButton
      icon={<Finance24 />}
      title="Use existing account"
      description="Connect your bank account to receive payments immediately."
      onClick={() => {}}
    />
    <CardButton
      icon={<Chime src={chime} />}
      title="Sign up for Chime"
      description="Chime is a new kind of bank. Open a free account in five minutes."
      onClick={() => {}}
    />
    <Button
      small
      kind="tertiary"
      href={"/payments"}
      trackingEvent={{
        category: "BackFromPaymentsConfirm",
        label: "Go back to Payments",
      }}
    >
      Go back to Payments
    </Button>
  </PageLayout>
);
