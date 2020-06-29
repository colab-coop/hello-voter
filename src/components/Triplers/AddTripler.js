import React from 'react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import Button from '../Button'

export default () => (
  <PageLayout
    submitButtonTitle="Add these Triplers to my list"
    title="Add Triplers to my list"
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
          name: "Add",
          route: "/"
        }
      ]
    } />}
  >
    <p>This is someone who agrees to help three others vote in the next election.</p>

  </PageLayout>
)