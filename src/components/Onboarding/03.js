import React from 'react'
import { useHistory } from 'react-router-dom'
import { TextArea } from 'carbon-components-react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'

export default () => {
  const history = useHistory()
  return (
    <PageLayout
      onClickSubmit={() => {
        history.push('/triplers')
      }}
      title="The importance of voting"
      submitButtonTitle="Continue"
      header={<Breadcrumbs items={
        [{
          name: "Back",
          route: "/components/02"
        }]
      } />}
    >
      <TextArea
        id="response_01"
        invalidText="A valid value is required"
        labelText="What did you think about President Obama’s speech?"
        placeholder="I thought..."
        rows={4}
      />
    </PageLayout>
  )
}
