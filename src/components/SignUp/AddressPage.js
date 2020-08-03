import React from 'react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import AddressForm from '../AddressForm'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../../api/AppContext'

/*
  {"address1": "1665 Logan St", "city": "Denver", "state": "CO", "zip": 80203}
*/

export const AddressPage = () => {
  const history = useHistory()
  const { setAmbassador, user } = React.useContext(AppContext)
  user && user.signup_completed && user.onboarding_completed && history.push('/')
  return (
    <PageLayout
      onClickSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const userData = {
          address: {
            address1: formData.get('address1'),
            state: formData.get('state'),
            zip: formData.get('zip'),
            city: formData.get('city')
          },
        }

        setAmbassador((data) => {
          return {
            ...data,
            ...userData
          }
        })

        history.push('/ambassador/contact')
      }}
      title="Address"
      submitButtonTitle="Continue"
      header={<Breadcrumbs items={
        [{
          name: "Back",
          route: "/ambassador/personal_info"
        }]
      }/>}
    >
      <AddressForm ambassador={{address: {}}} />
    </PageLayout>
  )
}
