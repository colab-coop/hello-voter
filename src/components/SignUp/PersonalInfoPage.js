import React from 'react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import { Form, FormGroup, TextInput, DatePicker, DatePickerInput } from 'carbon-components-react'

export const PersonalInfoPage = () => (
  <PageLayout 
    title="Personal Info" 
    submitButtonTitle="Continue"
    header={ <Breadcrumbs items={
      [{
        name: "Back",
        route: "/"
      }]
    }/> }
  >
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
      <DatePicker dateFormat="m/d/Y" datePickerType="single">
        <DatePickerInput
          id="dob"
          placeholder="mm/dd/yyyy"
          labelText="Date of Birth"
          type="text"
        />
      </DatePicker>
    </Form>
  </PageLayout>
)
