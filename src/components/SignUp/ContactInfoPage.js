import React, { useState, useEffect } from 'react'
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
import { useHistory } from 'react-router-dom'
import { AppContext } from '../../api/AppContext'

const SectionTitle = styled.h5`
  margin-bottom: ${ spacing[5] };
`

export const ContactInfoPage = () => {
  const [err, setErr] = useState(false)
  const history = useHistory()
  const { ambassador, setAmbassador, api, fetchUser } = React.useContext(AppContext)
  useEffect(() => {
    const signup = async () => {
      const { error } = await api.signup(ambassador)
      if (error) return setErr(error.msg)
      const { userError } = await fetchUser()
      if (userError) return setErr(userError.msg)
      history.push('/triplers')
    }
    if (ambassador.signupComplete) {
      signup()
    }
  }, [ ambassador ])
  return (
    <PageLayout
      error={err}
      title="Confirm Info"
      submitButtonTitle="Submit"
      onClickSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const userData = {
          first_name: formData.get('first_name'),
          last_name: formData.get('last_name'),
          email: formData.get('email'),
          phone: formData.get('phone').toString(),
          date_of_birth: formData.get('date_of_birth'),
          address: {
            address1: formData.get('address1'),
            state: formData.get('state'),
            zip: formData.get('zip'),
            city: formData.get('city'),
          },
          signupComplete: true
        }

        setAmbassador((data) => {
          return {
            ...data,
            ...userData
          }
        })
      }}
      header={<Breadcrumbs items={
        [{
          name: "Back",
          route: "/"
        }]
      }/>}
    >
      <SectionTitle>Personal Info</SectionTitle>
      <FormGroup>
        <TextInput
          name="first_name"
          invalidText="Invalid error message."
          labelText="First Name"
          placeholder="Joan"
          value={ambassador.first_name}
          required
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          name="last_name"
          invalidText="Invalid error message."
          labelText="Last Name"
          placeholder="Ambassador"
          value={ambassador.last_name}
          required
        />
      </FormGroup>
      <FormGroup style={{width: "50%"}}>
        <DatePicker dateFormat="m/d/Y" datePickerType="single">
          <DatePickerInput
            name="date_of_birth"
            placeholder="mm/dd/yyyy"
            labelText="Date of Birth"
            type="text"
            value={ambassador.date_of_birth}
            required
          />
        </DatePicker>
      </FormGroup>
      <SectionTitle>Address</SectionTitle>
      <AddressForm ambassador={ambassador}/>
      <SectionTitle>Contact</SectionTitle>
      <FormGroup>
        <TextInput
          name="email"
          invalidText="Invalid error message."
          labelText="Email"
          placeholder="joanambassador@email.co"
          value={ambassador.email}
          required
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          name="phone"
          invalidText="Invalid error message."
          labelText="Phone number"
          placeholder="(123) 456-7890"
          value={ambassador.phone}
          required
        />
      </FormGroup>
    </PageLayout>
  )
}
