import React, { useRef } from 'react'
import styled from 'styled-components'
import { FormGroup, TextInput, Dropdown } from 'carbon-components-react'
import { spacing, breakpoints } from '../../theme'

const Row = styled.div`
  display: grid;
  align-items: end;
  grid-auto-columns: 1fr;
  grid-column-gap: ${ spacing[5]};
  grid-template-columns: repeat(16, 1fr);
`

const RowLeft = styled.div`
  grid-column-end: span 10;
  @media (max-width: ${breakpoints.lg.width}) {
    grid-column-end: span 8;
  }
  @media (max-width: ${breakpoints.md.width}) {
    grid-column-end: span 8;
  }
`

const RowCenter = styled.div`
  grid-column-end: span 3;
  @media (max-width: ${breakpoints.lg.width}) {
    grid-column-end: span 4;
  }
  @media (max-width: ${breakpoints.md.width}) {
    grid-column-end: span 4;
  }
`

const RowRight = styled.div`
  grid-column-end: span 3;
  @media (max-width: ${breakpoints.lg.width}) {
    grid-column-end: span 4;
  }
  @media (max-width: ${breakpoints.md.width}) {
    grid-column-end: span 4;
  }
`

export default ({ user, stateOptions, onStateSelected }) => {
  const stateRef = useRef();
  return <>
    <FormGroup legendText="">
      <TextInput
        id="address1"
        name="address1"
        invalidText="Invalid error message."
        labelText="Street Address*"
        helperText="Where you receive mail, including details like your apartment or unit number"
        defaultValue={user.address?.address1}
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
            defaultValue={user.address?.city}
            required
          />
        </RowLeft>
        <RowCenter>
        {
          stateOptions ? <>
            <Dropdown
              id="state"
              name="state"
              items={stateOptions}
              titleText="State*"
              initialSelectedItem={user.address?.state}
               onChange={(e) => { stateRef.current.value = e.selectedItem; }}
              required
            />
            <input name="state" type="hidden" value={user.address?.state} ref={stateRef} />
          </> : <TextInput
            id="state"
            name="state"
            invalidText="Invalid error message."
            labelText="State*"
            defaultValue={user.address?.state}
            required
          />
        }
        </RowCenter>
        <RowRight>
          <TextInput
            id="zip"
            name="zip"
            invalidText="Invalid error message."
            labelText="ZIP Code*"
            defaultValue={user.address?.zip}
            required
          />
        </RowRight>
      </Row>
    </FormGroup>
  </>
};
