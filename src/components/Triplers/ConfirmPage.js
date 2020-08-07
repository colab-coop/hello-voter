import React, { useState, useEffect } from 'react'
import {Form, FormGroup, TextInput, Link, Row} from 'carbon-components-react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import Button from '../Button'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../api/AppContext'
import Loading from '../Loading'
import { useHistory } from 'react-router-dom'
import { InlineNotification } from 'carbon-components-react'

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

  const confirmTriplers = async (triplerId, formData) => {
    setLoading(true)
    const { error, data } = await api.confirmTriplers(triplerId, formData)
    setLoading(false)
    return {
      error,
      data
    }
  }

  return tripler ? <ConfirmPage tripler={tripler} confirmTriplers={confirmTriplers} loading={loading}/> : <Loading />
}

const ConfirmPage = ({ tripler, confirmTriplers, loading }) => {
  const history = useHistory()
  const [err, setErr] = useState(false)
  const submit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const { error } = await confirmTriplers(tripler.id, {
      phone: formData.get('phone'),
      triplees: [formData.get('triplee1'), formData.get('triplee2'), formData.get('triplee3')],
      address: tripler.address
    })
    if (error) return setErr(error.msg)
    history.push('/triplers')
  }
  return (
    <PageLayout
      title={`Vote Tripler: ${tripler.first_name}`}
      onClickSubmit={submit}
      header={
        <Breadcrumbs
          items={[
            {
              name: "Home",
              route: "/home",
            },
            {
              name: "Vote Triplers",
              route: "/triplers",
            },
            {
              name: "Confirm"
            }
          ]}
        />
      }
    >
      <p>Add the names of three Voters the Vote Tripler will remind to vote:</p>
      <FormGroup>
        <TextInput
          name="triplee1"
          invalidText="Invalid error message."
          labelText="Name 1*"
          required
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          name="triplee2"
          invalidText="Invalid error message."
          labelText="Name 2*"
          required
        />
      </FormGroup>
      <FormGroup>
        <TextInput
          name="triplee3"
          invalidText="Invalid error message."
          labelText="Name 3*"
          required
        />
      </FormGroup>
      <p>Add the Vote Tripler's phone number so we can confirm their identity and send you your payment!</p>
      <FormGroup>
        <TextInput
          name="phone"
          invalidText="Invalid error message."
          labelText={`${tripler.first_name}'s Phone Number*`}
          required
        />
      </FormGroup>
      {err &&
      <InlineNotification
        kind="error"
        icondescription="Dismiss notification"
        subtitle={err}
        title={null}
      />
      }
      <Button 
        type="submit"
        loading={loading}
        trackingEvent={{ category: 'SubmitTriplerConfirm', label: 'Add'}}
        isAForm
      >
        Add
      </Button>
      <Button 
        small 
        kind="tertiary" 
        href={'/triplers'}
        trackingEvent={{ category: 'BackFromTriplerConfirm', label: 'Go back to My Vote Triplers'}}
      >
        Go back to My Vote Triplers
      </Button>
    </PageLayout>
  )
}
