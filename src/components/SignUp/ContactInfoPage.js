import React from 'react'
import styled from 'styled-components'
import { spacing } from '../../theme'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import AddressForm from '../AddressForm'
import { 
  Form, 
  FormGroup, 
  TextInput, 
  Select, 
  SelectItem, 
  DatePicker, 
  DatePickerInput 
} from 'carbon-components-react'

const SectionTitle = styled.h5`
  margin-bottom: ${ spacing[5] };
`

export const ContactInfoPage = () => (
  <PageLayout 
    title="Confirm Info" 
    submitButtonTitle="Submit"
    header={<Breadcrumbs items={
      [{
        name: "Back",
        route: "/"
      }]
    } />}
  >
    <Form style={{ width: "100%" }}>
      <SectionTitle>Personal Info</SectionTitle>
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
        <DatePicker dateFormat="m/d/Y" datePickerType="single">
          <DatePickerInput
            id="dob"
            placeholder="mm/dd/yyyy"
            labelText="Date of Birth"
            type="text"
          />
        </DatePicker>
      </FormGroup>
      <SectionTitle>Address</SectionTitle>
      <AddressForm />
      <SectionTitle>Contact</SectionTitle>
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
