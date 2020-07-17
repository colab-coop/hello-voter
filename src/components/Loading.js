import React from 'react'
import PageLayout from './PageLayout'
import Loading from 'carbon-components-react/lib/components/Loading'

export default  () => {
  return (
    <PageLayout
      title=""
    >
      <Loading description='Loading some awesome stuff, please wait.'/>
    </PageLayout>
  )
}