import React, {useEffect, useState} from 'react'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import DataTable from '../DataTable'
import { AppContext } from '../../api/AppContext'
import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()
  const [triplers, setTriplers] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { api } = React.useContext(AppContext)
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.fetchTriplers()
      const triplersWithAddress = data.data.map((p) => ({
        id: p.id,
        name: p.first_name + ' ' + p.last_name,
        address: p.first_name + ' ' + p.last_name
      }))
      setTriplers(triplersWithAddress)
    }
    fetchData()
  }, [])
  const claimTriplers = async (selectedTriplers) => {
    setIsLoading(true)
    await api.claimTriplers(selectedTriplers)
    setIsLoading(false)
    history.push('/triplers')
  }
  return (
    triplers ? <AddTriplersPage triplers={triplers} claimTriplers={claimTriplers} loading={isLoading} /> : 'Loading...'
  )
}

const AddTriplersPage = ({ triplers, claimTriplers, loading }) => {
  const [rows, setRows] = useState(null)
  const clickHandler = (selectedTriplers) => {
    setRows(selectedTriplers)
  }
  return (
    <PageLayout
      submitButtonTitle="Add these Triplers to my list"
      onClickSubmit={() => {
        claimTriplers(rows.map((c) => c.id))
      }}
      title="Add Triplers to my list"
      header={<Breadcrumbs items={
        [
          {
            name: "Home",
            route: "/"
          },
          {
            name: "Triplers",
            route: "/"
          },
          {
            name: "Add",
            route: "/"
          }
        ]
      }/>}
    >
      <p>This is someone who agrees to help three others vote in the next election.</p>
      <DataTable
        headers={[
          {
            header: 'Eligible neighbors',
            key: 'name'
          },
          {
            header: '',
            key: 'address'
          },
        ]}
        rows={triplers}
        onSelected={(selectedRows) => clickHandler(selectedRows)} />
    </PageLayout>
  )
}