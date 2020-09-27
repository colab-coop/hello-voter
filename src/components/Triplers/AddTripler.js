import React, {useEffect, useState, useCallback} from 'react'
import { Search, Button, Form } from 'carbon-components-react'
import styled from 'styled-components'
import { spacing, breakpoints, colors } from '../../theme'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'
import DataTable from './DataTable'
import { AppContext } from '../../api/AppContext'
import { useHistory } from 'react-router-dom'
import Loading from '../Loading'

export function normalizeTripler(tripler) {
  return {
    id: tripler.id,
    name: tripler.first_name + ' ' + tripler.last_name,
    address: tripler.address.address1 + ' ' + tripler.address.city + ' ' + tripler.address.state
  }
}

export default () => {
  const history = useHistory()
  const [triplers, setTriplers] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [searchResults, setSearchResults] = useState(null)
  // Setting default form input values
  const [searchInputs, setSearchInputs] = useState({
    firstName: '',
    lastName: ''
  })
  const { api } = React.useContext(AppContext)

  const appendAddress = (data) => {
    return data.data.map(normalizeTripler)
  }

  const search = async (firstName, lastName) => {
    setIsLoading(true)
    const data = await api.searchTriplers(firstName, lastName)
    const triplersWithAddress = appendAddress(data)
    setIsLoading(false)
    setTriplers(triplersWithAddress)
    setSearchInputs({
      firstName,
      lastName
    })
    setSearchResults(
      firstName
        ? firstName && lastName
          ? firstName + " " + lastName
          : firstName
        : lastName
    )
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.fetchFreeTriplers()
      const triplersWithAddress = data.data.map(normalizeTripler)
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

  // need "inputName" to handle HTML5 input's clear x button.
  //  onChange passes in "target.name", but not on clear x button click.
  const onSearchInputChange = useCallback((inputName) => (
    (e) => {
      setSearchInputs({
        ...searchInputs,
        [inputName]: e.target.value
      })
    }
  ), [setSearchInputs, searchInputs])

  if (isLoading) return <Loading />

  return (
    triplers ? <AddTriplersPage
      triplers={triplers}
      claimTriplers={claimTriplers}
      loading={isLoading}
      search={search}
      searchResults={searchResults}
      searchInputs={searchInputs}
      onSearchInputChange={onSearchInputChange}
    /> : <Loading />
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

export const AddTriplersPage = ({
  triplers,
  claimTriplers,
  search,
  loading,
  searchResults,
  searchInputs,
  onSearchInputChange
}) => {
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
          onChange={onSearchInputChange('firstName')}
          value={searchInputs.firstName}
          labelText=""
        />
        <SearchFieldStyled
          name="lastName"
          placeHolderText="Last Name"
          size="lg"
          onChange={onSearchInputChange('lastName')}
          value={searchInputs.lastName}
          labelText=""
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
                onClick={() => {
                  search('','')
                }}
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
