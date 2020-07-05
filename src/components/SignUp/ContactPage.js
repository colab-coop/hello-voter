import React, { useEffect, useState } from 'react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import { Form, FormGroup, TextInput } from 'carbon-components-react'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../../api/AppContext'

export const ContactPage = () => {
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
      title="Contact"
      onClickSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const userData = {
          email: formData.get('email'),
          phone: formData.get('phone').toString(),
          signupComplete: true
        }

        setAmbassador((data) => {
          return {
            ...data,
            ...userData
          }
        })
      }}
      submitButtonTitle="Continue"
      header={<Breadcrumbs items={
        [{
          name: "Back",
          route: "/ambassador/address"
        }]
      }/>}
    >
      <FormGroup>
        <TextInput
          name="email"
          invalidText="Invalid error message."
          labelText="Email"
          placeholder="joanambassador@email.co"
          required
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          name="phone"
          invalidText="Invalid error message."
          labelText="Phone number"
          placeholder="(123) 456-7890"
          required
        />
      </FormGroup>
    </PageLayout>
  )
}
