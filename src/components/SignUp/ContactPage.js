import React from 'react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import { FormGroup, TextInput } from 'carbon-components-react'
import { AppContext } from '../../api/AppContext'
import { useHistory } from 'react-router-dom'

export const ContactPage = () => {
  const history = useHistory()
  const { setAmbassador } = React.useContext(AppContext)
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

        history.push('/ambassador/confirm')
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
          labelText="Email*"
          placeholder="joanambassador@email.co"
          required
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          name="phone"
          invalidText="Invalid error message."
          labelText="Phone number*"
          placeholder="(123) 456-7890"
          required
        />
      </FormGroup>
    </PageLayout>
  )
}
