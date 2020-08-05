import React from 'react'
import styled from 'styled-components'
import { RadioButton16 } from '@carbon/icons-react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import { spacing, colors } from '../../theme'
import { useHistory } from 'react-router-dom'
import {AppContext} from "../../api/AppContext";
import {FormGroup, TextInput} from "carbon-components-react";
import AddressForm from "../AddressForm";

const List = styled.ol`
  width: 100%;
  margin-top: ${ spacing[7] };
`

const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${ colors.gray[20] };
  padding: ${ spacing[4] } ${ spacing[5] };
`

const ListItem = ({ text, bold }) => (
  <Item>
    {
      bold ?
      <strong>{text}</strong> :
      text
    }
    <RadioButton16 />
  </Item>
)

export const SignUpPage = () => {
  const history = useHistory()
  const { user, ambassador, setAmbassador } = React.useContext(AppContext)
  user && user.signup_completed && user.onboarding_completed && history.push('/')
  return (
    <PageLayout
      onClickSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const userData = {
          first_name: formData.get('first_name'),
          last_name: formData.get('last_name'),
          email: formData.get('email'),
          phone: formData.get('phone').toString(),
          address: {
            address1: formData.get('address1'),
            state: formData.get('state'),
            zip: formData.get('zip'),
            city: formData.get('city'),
          }
        }

        setAmbassador((data) => {
          return {
            ...data,
            ...userData
          }
        })

        history.push('/ambassador/confirm')
      }}
      title="My contact information"
      submitButtonTitle="Continue"
      header={<Breadcrumbs items={
        [{
          name: "Back",
          route: "/ambassador"
        }]
      }/>}
    >
      <FormGroup>
        <TextInput
          name="first_name"
          invalidText="Invalid error message."
          labelText="First Name*"
          defaultValue={ambassador.first_name}
          required
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          name="last_name"
          invalidText="Invalid error message."
          labelText="Last Name*"
          defaultValue={ambassador.last_name}
          required
        />
      </FormGroup>
      <AddressForm ambassador={ambassador}/>
      <FormGroup>
        <TextInput
          name="email"
          invalidText="Invalid error message."
          labelText="Email"
          defaultValue={ambassador.email}
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          name="phone"
          invalidText="Invalid error message."
          labelText="Phone number*"
          defaultValue={ambassador.phone}
          required
        />
      </FormGroup>
    </PageLayout>
  )
}
