import React, {useEffect, useState} from 'react'
import { Search, Button, Form } from 'carbon-components-react'
import styled from 'styled-components'
import { spacing, breakpoints, colors } from '../../theme'
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
  const [searchResults, setSearchResults] = useState(null)
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
    setSearchResults(
      firstName
        ? firstName && lastName
          ? firstName + " " + lastName
          : firstName
        : lastName
    );
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
    if (selectedTriplers.length > 12) return alert('You can select max 12 triplers.')
    setIsLoading(true)
    await api.claimTriplers(selectedTriplers.map((c) => c.id))
    setIsLoading(false)
    history.push('/triplers')
  }

  return (
    triplers ? <AddTriplersPage triplers={triplers} claimTriplers={claimTriplers} loading={isLoading} search={search} searchResults={searchResults} /> : <Loading />
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

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.gray[20]};
  margin-top: ${spacing[5]};
  margin-bottom: ${spacing[5]};
`;

const SearchResultsContainer = styled.div`
  background-color: ${ colors.gray[10] };
  margin-top: ${ spacing[5] };
  padding: ${ spacing[3] } ${ spacing[5] };
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchResultsClearLink = styled.a`
  cursor: pointer;
`

const AddTriplersPage = ({ triplers, claimTriplers, search, loading, searchResults }) => {
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
      <p>Check the folks you know!</p>
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
        />
        <SearchFieldStyled
          name="lastName"
          placeHolderText="Last Name"
          size="lg"
          onChange={() => ([])}
        />
        <SearchButtonStyled size="field" kind="tertiary" type="submit" disabled={loading}>
          Search
        </SearchButtonStyled>
      </SearchBarContainer>
      {
        searchResults && (
          <>
            <Divider />
            <SearchResultsContainer>
              <p>Showing {triplers.length} search results for "{searchResults}"</p>
              <SearchResultsClearLink 
                onClick={() => search('','')}
              >
                Clear Search
              </SearchResultsClearLink>
            </SearchResultsContainer>
          </>
        )
      }
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
