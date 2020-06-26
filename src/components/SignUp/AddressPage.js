import React from 'react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import AddressForm from '../AddressForm'

export const AddressPage = () => (
  <PageLayout 
    title="Address" 
    submitButtonTitle="Continue"
    header={<Breadcrumbs items={
      [{
        name: "Back",
        route: "/"
      }]
    } />}
  >
    <AddressForm />
  </PageLayout>
)
