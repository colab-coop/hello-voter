import React, {useEffect, useState} from 'react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import DataTable from '../DataTable'
import { AppContext } from '../../api/AppContext'
import { useHistory } from 'react-router-dom'
import Loading from '../Loading'

export default () => {
  const history = useHistory()
  const [triplers, setTriplers] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { api } = React.useContext(AppContext)

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.fetchFreeTriplers()
      const triplersWithAddress = data.data.map((p) => ({
        id: p.id,
        name: p.first_name + ' ' + p.last_name,
        address: p.address.address1 + ' ' + p.address.city + ' ' + p.address.state
      }))
      setTriplers(triplersWithAddress)
    }
    fetchData()
  }, [])

  const claimTriplers = (selectedTriplers) => async () => {
    if (selectedTriplers.length > 12) return alert('You can select max 12 triplers.')
    setIsLoading(true)
    await api.claimTriplers(selectedTriplers.map((c) => c.id))
    setIsLoading(false)
    history.push('/triplers')
  }

  return (
    triplers ? <AddTriplersPage triplers={triplers} claimTriplers={claimTriplers} loading={isLoading} /> : <Loading />
  )
}

const AddTriplersPage = ({ triplers, claimTriplers }) => {
  return (
    <PageLayout
      title="Add Vote Triplers"
      header={<Breadcrumbs items={
        [
          {
            name: "Home",
            route: "/"
          },
          {
            name: "Vote Triplers",
            route: "/"
          },
          {
            name: "Add",
            route: "/"
          }
        ]
      }/>}
    >
      <p>Check the folks you know!</p>
      <DataTable
        headers={[
          {
            header: 'Eligible people',
            key: 'name'
          },
          {
            header: '',
            key: 'address'
          },
        ]}
        rows={triplers}
        handleSelected={claimTriplers}
      />
    </PageLayout>
  )
}
