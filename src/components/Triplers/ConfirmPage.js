import React from 'react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'

export default () => (
  <PageLayout
    title="Tripler: {Name}"
    header={<Breadcrumbs items={
      [
        {
          name: "Home",
          route: "/"
        },
        {
          name: "Triplers",
          route: "/"
        },
        {
          name: "Confirm",
          route: "/"
        }
      ]
    } />}
  >
    <p>Add \[First Name]\’s phone number so we can confirm her identity, and then we’ll send you your payment! </p>
  </PageLayout>
)
