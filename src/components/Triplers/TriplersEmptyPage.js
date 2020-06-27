import React from 'react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'

export default () => (
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
    } />}
  >
    <p>Confirm that these people will ask 3 friends to vote and earn 50 dollars</p>
  </PageLayout>
)