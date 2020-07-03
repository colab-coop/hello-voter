import React, { useState, useEffect } from 'react'
import { Form, FormGroup, TextInput, Link } from 'carbon-components-react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import Button from '../Button'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../api/AppContext'
import Loading from '../Loading'
import { useInput } from '../../hooks/useInput'

export default () => {
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
  }

  return tripler ? <ConfirmPage tripler={tripler} confirmTriplers={confirmTriplers} loading={loading}/> : <Loading />
}

const ConfirmPage = ({ tripler, confirmTriplers, loading }) => {
  const { value:phoneNumber, bind:bindPhoneNumber } = useInput(tripler.phone)
  const { value:triplee1, bind:bindTriplee1 } = useInput(tripler.triplees ? tripler.triplees[0] : '')
  const { value:triplee2, bind:bindTriplee2 } = useInput(tripler.triplees ? tripler.triplees[1] : '')
  const { value:triplee3, bind:bindTriplee3 } = useInput(tripler.triplees ? tripler.triplees[2] : '')
  const submit = async () => {
    confirmTriplers(tripler.id, {
      phone: phoneNumber,
      triplees: [triplee1, triplee2, triplee3],
      address: tripler.address
    })
  }
  return (
    <PageLayout
      title={`Tripler: ${tripler.first_name}`}
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
      <Form style={{width: "100%"}}>
        <p>Add {tripler.first_name}’s phone number so we can confirm her identity, and then we’ll send you your payment! </p>
        <FormGroup>
          <TextInput
            id="phone"
            invalidText="Invalid error message."
            labelText="Melody’s Phone Number"
            placeholder="123-456-7890"
            {...bindPhoneNumber}
          />
        </FormGroup>
        <p>Add the names of three people that Melody will remind to vote</p>
        <FormGroup>
          <TextInput
            id="name-1"
            invalidText="Invalid error message."
            labelText="Name 1"
            placeholder="Name"
            {...bindTriplee1}
          />
        </FormGroup>
        <FormGroup>
          <TextInput
            id="name-2"
            invalidText="Invalid error message."
            labelText="Name 2"
            placeholder="Name"
            {...bindTriplee2}
          />
        </FormGroup>
        <FormGroup>
          <TextInput
            id="name-3"
            invalidText="Invalid error message."
            labelText="Name 3"
            placeholder="Name"
            {...bindTriplee3}
          />
        </FormGroup>
        <Button onClick={submit} loading={loading}>Update Info</Button>
        <Button small kind="tertiary" href={'/triplers'}>Go back to My Vote Triplers</Button>
      </Form>
    </PageLayout>
  )
}
