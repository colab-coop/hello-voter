import React from 'react'
import PageLayout from '../PageLayout'
import { Form, FormGroup, TextInput } from 'carbon-components-react'

export const ContactPage = () => (
  <PageLayout title="Contact" submitButtonTitle="Continue">
    <Form style={{ width: "100%" }}>
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
    </Form>
  </PageLayout>
)
