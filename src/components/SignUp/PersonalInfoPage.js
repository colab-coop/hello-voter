import React from 'react'
import PageLayout from '../PageLayout'
import { Form, FormGroup, TextInput, Grid, Column, Row, } from 'carbon-components-react'

export const PersonalInfoPage = () => (
  <PageLayout title="Personal Info" submitButtonTitle="Continue">
    <Form style={{ width: "100%" }}>
      <FormGroup>
        <TextInput
          id="first_name"
          invalidText="Invalid error message."
          labelText="First Name"
          placeholder="Joan"
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          id="last_name"
          invalidText="Invalid error message."
          labelText="Last Name"
          placeholder="Ambassador"
        />
      </FormGroup>
      <FormGroup style={{ width: "50%" }}>
        <TextInput
          id="dob"
          invalidText="Invalid error message."
          labelText="Date of Birth"
          placeholder="mm/dd/yyyy"
        />
      </FormGroup>
    </Form>
  </PageLayout>
)
