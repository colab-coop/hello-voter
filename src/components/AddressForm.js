import React from 'react'
import styled from 'styled-components'
import { Form, FormGroup, TextInput, ComboBox } from 'carbon-components-react'
import states from '../lib/states'
import { spacing } from '../theme'

const Row = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: ${ spacing[5]};
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`

const RowLeft = styled.div`
  grid-row-start: span 1;
  grid-row-end: span 1;
  grid-column-start: span 3;
  grid-column-end: span 3;
`

const RowRight = styled.div`
  grid-row-start: span 1;
  grid-row-end: span 1;
  grid-column-start: span 5;
  grid-column-end: span 5;
`

export default ({ ambassador }) => (
  <>
    <FormGroup>
      <TextInput
        name="address1"
        invalidText="Invalid error message."
        labelText="Street Address*"
        placeholder="1234 Ambassador Lane"
        value={ambassador.address.address1}
        required
      />
    </FormGroup>
    <FormGroup>
      <TextInput
        name="city"
        invalidText="Invalid error message."
        labelText="City*"
        placeholder="San Francisco"
        value={ambassador.address.city}
        required
      />
    </FormGroup>
    <FormGroup>
      <Row>
        <RowLeft>
          <ComboBox
            ariaLabel="Choose an item"
            name="state"
            invalidText="A valid value is required"
            itemToString={(item) => (item ? item.text : '')}
            items={states}
            onChange={(value) => console.log(value)}
            placeholder=" "
            titleText="State*"
            type="default"
            selectedItem={states.find(item => {
              return item.text === ambassador.address.state
            })}
            required
          />
        </RowLeft>
        <RowRight>
          <TextInput
            name="zip"
            invalidText="Invalid error message."
            labelText="Zip Code*"
            placeholder="12345"
            value={ambassador.address.zip}
            required
          />
        </RowRight>
      </Row>
    </FormGroup>
  </>
)
