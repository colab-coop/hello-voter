import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { spacing, colors } from "../../theme";
import PageLayout from "../PageLayout";
import Breadcrumbs from "../Breadcrumbs";
import DataTable from "./DataTable";
import { AppContext } from "../../api/AppContext";
import { useHistory } from "react-router-dom";
import Loading from "../Loading";
import { SearchFilters } from './SearchFilters';

export function normalizeTripler(tripler) {
  return {
    id: tripler.id,
    name: tripler.first_name + " " + tripler.last_name,
    address:
      tripler.address.address1 +
      " " +
      tripler.address.city +
      " " +
      tripler.address.state,
  };
}

export function searchResultSummary({ firstName, lastName, phone, distance }) {
  const displayName = [firstName, lastName].filter(Boolean).join(" ");
  const displayDistance = distance ? `${distance} mi` : "";
  return [displayName, phone, displayDistance].filter(Boolean).join(", ");
}

export default () => {
  const history = useHistory();
  const [triplers, setTriplers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  // Setting default form input values
  const [searchInputs, setSearchInputs] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    distance: 10,
  });
  const { api } = React.useContext(AppContext);

  const appendAddress = (data) => {
    return data.data.map(normalizeTripler);
  };

  const search = async (formData) => {
    setIsLoading(true);
    const data = await api.searchTriplers(formData);
    const triplersWithAddress = appendAddress(data);
    setIsLoading(false);
    setTriplers(triplersWithAddress);
    setSearchInputs(formData);
    setSearchResults(searchResultSummary(formData));
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.fetchFreeTriplers();
      const triplersWithAddress = data.data.map(normalizeTripler);
      setTriplers(triplersWithAddress);
    };
    fetchData();
  }, []);

  const claimTriplers = (selectedTriplers) => async () => {
    setIsLoading(true);
    const { error } = await api.claimTriplers(
      selectedTriplers.map((c) => c.id)
    );
    setIsLoading(false);
    if (error) return alert(error.msg);
    history.push("/triplers");
  };

  // need "inputName" to handle HTML5 input's clear x button.
  //  onChange passes in "target.name", but not on clear x button click.
  const onSearchInputChange = useCallback(
    (inputName) => (e) => {
      setSearchInputs({
        ...searchInputs,
        // Different input types have different ways of accessing their value.
        [inputName]: e.value || e.target.value,
      });
    },
    [setSearchInputs, searchInputs]
  );

  if (isLoading) return <Loading />;

  return triplers ? (
    <AddTriplersPage
      triplers={triplers}
      claimTriplers={claimTriplers}
      loading={isLoading}
      search={search}
      searchResults={searchResults}
      searchInputs={searchInputs}
      onSearchInputChange={onSearchInputChange}
    />
  ) : (
    <Loading />
  );
};

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.gray[20]};
  margin-top: ${spacing[5]};
  margin-bottom: ${spacing[5]};
`;

const SearchResultsContainer = styled.div`
  background-color: ${colors.gray[10]};
  margin-top: ${spacing[5]};
  padding: ${spacing[3]} ${spacing[5]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchResultsClearLink = styled.a`
  cursor: pointer;
`;

export const AddTriplersPage = ({
  triplers,
  claimTriplers,
  search,
  loading,
  searchResults,
  searchInputs,
  onSearchInputChange,
}) => {
  return (
    <PageLayout
      title="Add Vote Triplers"
      header={
        <Breadcrumbs
          items={[
            { name: "Home", route: "/home" },
            { name: "Vote Triplers", route: "/triplers" },
            { name: "Add" },
          ]}
        />
      }
    >
      <p>
        Here’s a list of possible Vote Triplers. Those who live closest to you
        are at the top. Select the people you plan to talk with.
      </p>
      <SearchFilters
        search={search}
        loading={loading}
        searchInputs={searchInputs}
        onSearchInputChange={onSearchInputChange}
      />
      {searchResults && (
        <>
          <Divider />
          <SearchResultsContainer>
            <p>
              Showing {triplers.length} search results for "{searchResults}"
            </p>
            <SearchResultsClearLink
              onClick={() => {
                window.location.reload();
              }}
            >
              Clear Search
            </SearchResultsClearLink>
          </SearchResultsContainer>
        </>
      )}
      <DataTable
        headers={[
          {
            header: "Eligible people",
            key: "name",
          },
          {
            header: "",
            key: "address",
          },
        ]}
        rows={triplers}
        handleSelected={claimTriplers}
      />
    </PageLayout>
  );
};
