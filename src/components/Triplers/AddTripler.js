import React, {useEffect, useState} from 'react'
import { Search, Button, Form, InlineNotification } from 'carbon-components-react'
import styled from 'styled-components'
import { spacing, breakpoints } from '../../theme'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import DataTable from './DataTable'
import { AppContext } from '../../api/AppContext'
import { useHistory } from 'react-router-dom'
import Loading from '../Loading'

export default () => {
  const history = useHistory()
  const [triplers, setTriplers] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { api } = React.useContext(AppContext)

  const appendAddress = (data) => {
    return data.data.map((p) => ({
      id: p.id,
      name: p.first_name + ' ' + p.last_name,
      address: p.address.address1 + ' ' + p.address.city + ' ' + p.address.state
    }))
  }

  const search = async (firstName, lastName) => {
    setIsLoading(true)
    const data = await api.searchTriplers(firstName, lastName)
    const triplersWithAddress = appendAddress(data)
    setIsLoading(false)
    setTriplers(triplersWithAddress)
  }

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
    setIsLoading(true)
    const { error } = await api.claimTriplers(selectedTriplers.map((c) => c.id))
    setIsLoading(false)
    if (error) return alert(error.msg)
    history.push('/triplers')
  }

  return (
    triplers ? <AddTriplersPage triplers={triplers} claimTriplers={claimTriplers} loading={isLoading} search={search} /> : <Loading />
  )
}

const SearchBarContainer = styled(Form)`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: ${ spacing[5]};
  grid-row-gap: ${ spacing[5]};
  grid-template-columns: repeat(12, 1fr);
  margin-top: ${ spacing[5]};
  @media (max-width: ${breakpoints.md.width}) {
    grid-column-gap: ${ spacing[3]};
    grid-row-gap: ${ spacing[3]};
  }
`

const SearchFieldStyled = styled(Search)`
  grid-column-end: span 5;
  @media (max-width: ${breakpoints.md.width}) {
    grid-column-end: span 6;
  }
`

const SearchButtonStyled = styled(Button)`
  width: 100%;
  max-width: 100%;
  grid-column-end: span 2;
  @media (max-width: ${breakpoints.md.width}) {
    grid-column-end: span 12;
  }
`

const AddTriplersPage = ({ triplers, claimTriplers, search, loading, error }) => {
  return (
    <PageLayout
      title="Add Vote Triplers"
      header={<Breadcrumbs items={
        [
          {
            name: "Home",
            route: "/home"
          },
          {
            name: "Vote Triplers",
            route: "/triplers"
          },
          {
            name: "Add"
          }
        ]
      }/>}
    >
      <p>Here’s a list of possible Vote Triplers. Those who live closest to you are at the top. Select the people you plan to talk with.</p>
      <SearchBarContainer onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const firstName = formData.get('firstName')
        const lastName = formData.get('lastName')
        search(firstName, lastName)
      }}>
        <SearchFieldStyled
          name="firstName"
          placeHolderText="First Name"
          size="lg"
          onChange={() => ([])}
          labelText=""
        />
        <SearchFieldStyled
          name="lastName"
          placeHolderText="Last Name"
          size="lg"
          onChange={() => ([])}
          labelText=""
        />
        <SearchButtonStyled size="field" kind="tertiary" type="submit" disabled={loading}>
          Search
        </SearchButtonStyled>
      </SearchBarContainer>
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
