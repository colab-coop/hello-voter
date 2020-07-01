import React from 'react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import DataTable from '../DataTable'

const handleSelected = (selectedRows) => () => {
  console.log(selectedRows);
}

export default ({ triplers }) => (
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
        },
        {
          name: "Add",
          route: "/"
        }
      ]
    } />}
  >
    <p>A Vote Tripler is someone who agrees to help three others vote in the next election. Add anyone you know from this list.</p>
    <DataTable
      headers={[
        {
          header: 'Eligible neighbors',
          key: 'name'
        },
        {
          header: '',
          key: 'address'
        },
      ]}
      rows={triplers}
      onSelected={handleSelected}
    />
  </PageLayout>
)