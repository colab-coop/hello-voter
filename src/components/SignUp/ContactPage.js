import React from 'react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import { Form, FormGroup, TextInput } from 'carbon-components-react'
import { useHistory } from 'react-router-dom'

export const ContactPage = () => {
  const history = useHistory()
  return (
    <PageLayout
      title="Contact"
      onClickSubmit={() => {
        history.push('/ambassador/confirm')
      }}
      submitButtonTitle="Continue"
      header={<Breadcrumbs items={
        [{
          name: "Back",
          route: "/"
        }]
      }/>}
    >
      <FormGroup>
        <TextInput
          id="email"
          invalidText="Invalid error message."
          labelText="Email"
          placeholder="joanambassador@email.co"
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          id="phone"
          invalidText="Invalid error message."
          labelText="Phone number"
          placeholder="(123) 456-7890"
        />
      </FormGroup>
    </PageLayout>
  )
}
