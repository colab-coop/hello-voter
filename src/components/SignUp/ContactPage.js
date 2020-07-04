import React, { useEffect, useState } from 'react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import { Form, FormGroup, TextInput } from 'carbon-components-react'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../../api/AppContext'

export const ContactPage = () => {
  const history = useHistory()
  const [isSaving, setIsSaving] = useState(false)
  const { ambassador, setAmbassador, api } = React.useContext(AppContext)
  useEffect(() => {
    const signup = async () => {
      setIsSaving(true)
      const res = await api.signup(ambassador)
      setIsSaving(false)
      history.push('/triplers')
    }

    if (ambassador.email) {
      signup()
    }
  }, [ ambassador ])
  return (
    <PageLayout
      title="Contact"
      onClickSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const userData = {
          email: formData.get('email'),
          phone: formData.get('phone').toString()
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
          route: "/"
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
