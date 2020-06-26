import React from 'react'
import styled from 'styled-components'
import { spacing } from '../../theme'
import PageLayout from '../PageLayout'
import { Form, FormGroup, TextInput, Select, SelectItem } from 'carbon-components-react'

const SectionTitle = styled.h5`
  margin-bottom: ${ spacing[5] };
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Column = styled.div`
  display: block;
  flex: 0 0 50%;
  max-width: 50%;
`

export default () => (
  <PageLayout title="My Contact Info">
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
      <FormGroup>
        <TextInput
          id="street"
          invalidText="Invalid error message."
          labelText="Street Address"
          placeholder="1234 Ambassador Lane"
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          id="city"
          invalidText="Invalid error message."
          labelText="City"
          placeholder="San Francisco"
        />
      </FormGroup>
      <FormGroup>
        <Row>
          <Column>
            <Select id="state" defaultValue="placeholder-item" labelText="State" style={{ width: "100%" }}>
              <SelectItem
                disabled
                hidden
                value="placeholder-item"
                text=" "
              />
              <SelectItem value="option-1" text="Option 1" />
              <SelectItem value="option-2" text="Option 2" />
              <SelectItem value="option-3" text="Option 3" />
            </Select>
          </Column>
          <Column>
            <TextInput
              id="last_name"
              invalidText="Invalid error message."
              labelText="Zip Code"
              placeholder="12345"
            />
          </Column>
        </Row>
      </FormGroup>
    </Form>
  </PageLayout>
)
