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
    <p>These are your contacts that will each help 3 others vote. Confirm each Tripler by adding their information below</p>
  </PageLayout>
)