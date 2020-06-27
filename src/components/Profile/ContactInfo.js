import React from 'react'
import styled from 'styled-components'
import { spacing } from '../../theme'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import AddressForm from '../AddressForm'
import { Form, FormGroup, TextInput, Select, SelectItem } from 'carbon-components-react'

const SectionTitle = styled.h5`
  margin-bottom: ${ spacing[5] };
`

export default () => (
  <PageLayout 
    title="My Contact Info"
    header={<Breadcrumbs items={
      [
        {
          name: "My Profile",
          route: "/"
        },
        {
          name: "Contact info",
          route: "/"
        }
      ]
    } />}
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
      <SectionTitle>Address</SectionTitle>
      <AddressForm />
    </Form>
  </PageLayout>
)
