import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { spacing } from '../../theme'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import AddressForm from '../AddressForm'
import { FormGroup, TextInput } from 'carbon-components-react'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../../api/AppContext'

const SectionTitle = styled.h5`
  margin-bottom: ${ spacing[5] };
`

const Row = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: ${spacing[5]};
  grid-template-columns: 1fr 1fr;
`;

export const ContactInfoPage = () => {
  const [err, setErr] = useState(false)
  const history = useHistory()
  const { ambassador, setAmbassador, api, fetchUser, user } = React.useContext(AppContext)
  user && user.signup_completed && user.onboarding_completed && history.push('/')
  useEffect(() => {
    const signup = async () => {
      const { error } = await api.signup(ambassador)
      if (error) return setErr(error.msg)
      const { userError } = await fetchUser()
      if (userError) return setErr(userError.msg)

      if (process.env.REACT_APP_ORG === 'NGP') {
        history.push('/onboarding/ngp/01')
      }else{
        history.push('/onboarding/01')
      }
    }
    if (ambassador.signupComplete) {
      signup()
    }
  }, [ ambassador ])
  return (
    <PageLayout
      error={err}
      title="Please Enter Your Details"
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
        <Row>
          <TextInput
            name="first_name"
            invalidText="Invalid error message."
            labelText="First Name*"
            defaultValue={ambassador.first_name}
            required
          />
          <TextInput
            name="last_name"
            invalidText="Invalid error message."
            labelText="Last Name*"
            defaultValue={ambassador.last_name}
            required
          />
        </Row>
      </FormGroup>
      <SectionTitle>Address</SectionTitle>
      <AddressForm 
        ambassador={ambassador}
      />
      <SectionTitle>Contact</SectionTitle>
      <FormGroup>
        <Row>
          <TextInput
            name="email"
            invalidText="Invalid error message."
            labelText="Email"
            defaultValue={ambassador.email}
          />
          <TextInput
            name="phone"
            invalidText="Invalid error message."
            labelText="Phone number*"
            defaultValue={ambassador.phone}
            required
          />
        </Row>
      </FormGroup>
    </PageLayout>
  )
}
