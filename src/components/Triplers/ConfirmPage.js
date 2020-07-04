import React, { useState, useEffect } from 'react'
import { Form, FormGroup, TextInput, Link } from 'carbon-components-react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import Button from '../Button'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../api/AppContext'
import Loading from '../Loading'
import { useInput } from '../../hooks/useInput'
import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()
  const [tripler, setTripler] = useState(null)
  const [loading, setLoading] = useState(false)
  let { triplerId } = useParams()
  const { api } = React.useContext(AppContext)
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.fetchTripler(triplerId)
      setTripler(data.data)
    }
    fetchData()
  }, [])

  const confirmTriplers = async (triplerId, data) => {
    setLoading(true)
    await api.confirmTriplers(triplerId, data)
    setLoading(false)
    history.push('/triplers')
  }

  return tripler ? <ConfirmPage tripler={tripler} confirmTriplers={confirmTriplers} loading={loading}/> : <Loading />
}

const ConfirmPage = ({ tripler, confirmTriplers, loading }) => {
  const { value:phoneNumber, bind:bindPhoneNumber } = useInput(tripler.phone)
  const { value:triplee1, bind:bindTriplee1 } = useInput(tripler.triplees ? tripler.triplees[0] : '')
  const { value:triplee2, bind:bindTriplee2 } = useInput(tripler.triplees ? tripler.triplees[1] : '')
  const { value:triplee3, bind:bindTriplee3 } = useInput(tripler.triplees ? tripler.triplees[2] : '')
  const submit = async (e) => {
    e.preventDefault()
    confirmTriplers(tripler.id, {
      phone: phoneNumber,
      triplees: [triplee1, triplee2, triplee3],
      address: tripler.address
    })
  }
  return (
    <PageLayout
      title={`Tripler: ${tripler.first_name}`}
      onClickSubmit={submit}
      header={
        <Breadcrumbs
          items={[
            {
              name: "Home",
              route: "/",
            },
            {
              name: "Triplers",
              route: "/",
            },
            {
              name: "Confirm",
              route: "/",
            },
          ]}
        />
      }
    >
      <p>Add {tripler.first_name}’s phone number so we can confirm her identity, and then we’ll send you your payment! </p>
      <FormGroup>
        <TextInput
          name="phone"
          invalidText="Invalid error message."
          labelText="Melody’s Phone Number"
          placeholder="123-456-7890"
          {...bindPhoneNumber}
          required
        />
      </FormGroup>
      <p>Add the names of three people that Melody will remind to vote</p>
      <FormGroup>
        <TextInput
          name="name-1"
          invalidText="Invalid error message."
          labelText="Name 1"
          placeholder="Name"
          {...bindTriplee1}
          required
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          name="name-2"
          invalidText="Invalid error message."
          labelText="Name 2"
          placeholder="Name"
          {...bindTriplee2}
          required
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          name="name-3"
          invalidText="Invalid error message."
          labelText="Name 3"
          placeholder="Name"
          {...bindTriplee3}
          required
        />
      </FormGroup>
      <Button type="submit" loading={loading}>Update Info</Button>
      <Button small kind="tertiary" href={'/triplers'}>Go back to My Vote Triplers</Button>
    </PageLayout>
  )
}
