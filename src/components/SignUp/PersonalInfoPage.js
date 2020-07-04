import React from 'react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import { Form, FormGroup, TextInput, DatePicker, DatePickerInput } from 'carbon-components-react'
import { useHistory } from 'react-router-dom'

export const PersonalInfoPage = () => {
  const history = useHistory()
  return (
    <PageLayout
      title="Personal Info"
      onClickSubmit={(e) => {
        console.log(e.target)
        console.log(new FormData(e.target))
        history.push('/ambassador/address')
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
    </PageLayout>
  )
}
