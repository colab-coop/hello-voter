import React from 'react'
import styled from 'styled-components'
import { FormGroup, TextInput } from 'carbon-components-react'
import { spacing, breakpoints } from '../../theme'

const Row = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: ${ spacing[5]};
  grid-template-columns: repeat(16, 1fr);
`

const RowLeft = styled.div`
  grid-column-end: span 10;
  @media (max-width: ${breakpoints.lg.width}) {
    grid-column-end: span 9;
  }
  @media (max-width: ${breakpoints.md.width}) {
    grid-column-end: span 7;
  }
`

const RowCenter = styled.div`
  grid-column-end: span 2;
  @media (max-width: ${breakpoints.lg.width}) {
    grid-column-end: span 3;
  }
  @media (max-width: ${breakpoints.md.width}) {
    grid-column-end: span 4;
  }
`

const RowRight = styled.div`
  grid-column-end: span 4;
  @media (max-width: ${breakpoints.lg.width}) {
    grid-column-end: span 4;
  }
  @media (max-width: ${breakpoints.md.width}) {
    grid-column-end: span 5;
  }
`

export default ({ ambassador }) => (
  <>
    <FormGroup legendText="">
      <TextInput
        id="address1"
        name="address1"
        invalidText="Invalid error message."
        labelText="Street Address*"
        defaultValue={ambassador.address.address1}
        required
      />
    </FormGroup>
    <FormGroup legendText="">
      <Row>
        <RowLeft>
          <TextInput
            id="city"
            name="city"
            invalidText="Invalid error message."
            labelText="City*"
            defaultValue={ambassador.address.city}
            required
          />
        </RowLeft>
        <RowCenter>
          <TextInput
            id="state"
            name="state"
            invalidText="Invalid error message."
            labelText="State*"
            defaultValue={ambassador.address.state}
            required
          />
        </RowCenter>
        <RowRight>
          <TextInput
            id="zip"
            name="zip"
            invalidText="Invalid error message."
            labelText="ZIP Code*"
            defaultValue={ambassador.address.zip}
            required
          />
        </RowRight>
      </Row>
    </FormGroup>
  </>
)
