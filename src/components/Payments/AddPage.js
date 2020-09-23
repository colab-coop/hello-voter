import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import { Finance24 } from '@carbon/icons-react'
import styled from 'styled-components'
import { GridThreeUp } from '../pageStyles'
import PageLayout from '../PageLayout'
import CardButton from '../CardButton'
import Button from '../Button'
import Breadcrumbs from '../Breadcrumbs'
import chime from '../../assets/images/chime.png'
import { usePlaidLink } from 'react-plaid-link'
import { AppContext } from '../../api/AppContext'
import { useHistory } from 'react-router-dom'

const { REACT_APP_PLAID_KEY, REACT_APP_PAYMENT_TYPE } = process.env

const AACComponent = window.paypal ? window.paypal.PayoutsAAC.driver('react', {
  React,
  ReactDOM
}) : null;

const Chime = styled.img`
  width: 24px;
  height: 24px;
`

export default () => {
  const history = useHistory()
  const { api, fetchUser } = React.useContext(AppContext)
  const onSuccess = useCallback(async (token, metadata) => {
    await api.setToken(token, metadata.account_id)
    await fetchUser()
    history.push('/payments')
  }, [])
  const onPaypal = useCallback((token) => {
    // api.setTokenPaypal(token)
  }, [])
  const config = {
    clientName: 'BlockPower',
    env: 'sandbox',
    product: ['auth', 'transactions'],
    publicKey: REACT_APP_PLAID_KEY,
    onSuccess
  }
  const { open } = usePlaidLink(config);
  return (
    <PageLayout
      title="Add Payment Account"
      header={
        <Breadcrumbs
          items={[
            {
              name: "Home",
              route: "/home",
            },
            {
              name: "Payments",
              route: "/payments",
            },
            {
              name: "Add"
            },
          ]}
        />
      }
    >
    <GridThreeUp>
      {REACT_APP_PAYMENT_TYPE === 'stripe' &&
      <CardButton
        icon={<Finance24/>}
        title="Use existing account"
        description="Connect your bank account to receive payments immediately."
        onClick={(e) => {
          e.preventDefault()
          open()
        }}
      />
      }
      {REACT_APP_PAYMENT_TYPE === 'stripe' &&
      <CardButton
        icon={<Chime src={chime}/>}
        title="Sign up for Chime"
        description="Chime is a new kind of bank. Open a free account in five minutes."
        onClick={() => {
          history.push("/payments/chime")
        }}
      />
      }
      {REACT_APP_PAYMENT_TYPE === 'paypal' &&
      <AACComponent
        clientId=""
        merchantId=""
        env="sandbox"
        pageType="login"
        onLogin={onPaypal}/>
      }
      <Button
        size="small"
        style={{marginTop: 0}}
        kind="tertiary"
        href={"/payments"}
        trackingEvent={{
          category: "BackFromPaymentsConfirm",
          label: "Go back to Payments",
        }}
      >
        Go back to Payments
      </Button>
    </GridThreeUp>
    </PageLayout>
  )
}
