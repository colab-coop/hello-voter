import React from 'react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import { FormGroup, TextInput } from 'carbon-components-react'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../../api/AppContext'

export const PersonalInfoPage = () => {
  const history = useHistory()
  const { setAmbassador } = React.useContext(AppContext)
  return (
    <PageLayout
      title="Personal Info"
      onClickSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const userData = {
          first_name: formData.get('first_name'),
          last_name: formData.get('last_name'),
          date_of_birth: formData.get('dob')
        }

        setAmbassador(userData)
        history.push('/ambassador/address')
      }}
      submitButtonTitle="Continue"
      header={<Breadcrumbs items={
        [{
          name: "Back",
          route: "/ambassador/signup"
        }]
      }/>}
    >
      <FormGroup>
        <TextInput
          name="first_name"
          invalidText="Invalid error message."
          labelText="First Name*"
          required
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          name="last_name"
          invalidText="Invalid error message."
          labelText="Last Name*"
          required
        />
      </FormGroup>
    </PageLayout>
  )
}
