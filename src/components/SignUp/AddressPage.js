import React from 'react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import AddressForm from '../AddressForm'
import { useHistory } from 'react-router-dom'

export const AddressPage = () => {
  const history = useHistory()
  return (
    <PageLayout
      onClickSubmit={() => {
        history.push('/ambassador/contact')
      }}
      title="Address"
      submitButtonTitle="Continue"
      header={<Breadcrumbs items={
        [{
          name: "Back",
          route: "/"
        }]
      }/>}
    >
      <AddressForm/>
    </PageLayout>
  )
}
