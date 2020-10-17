import React from 'react';
import styled from 'styled-components';
import { Button, Form, Search } from 'carbon-components-react';
import { breakpoints, spacing } from '../../theme';
import { track } from '../../analytics';

const SearchBarContainer = styled(Form)`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: ${spacing[5]};
  grid-row-gap: ${spacing[5]};
  grid-template-columns: repeat(12, 1fr);
  margin-top: ${spacing[5]};
  @media (max-width: ${breakpoints.md.width}) {
    grid-column-gap: ${spacing[3]};
    grid-row-gap: ${spacing[3]};
  }
`;

const SearchFieldStyled = styled(Search)`
  grid-column-end: span 5;
  @media (max-width: ${breakpoints.md.width}) {
    grid-column-end: span 6;
  }
`;

const SearchButtonStyled = styled(Button)`
  width: 100%;
  max-width: 100%;
  grid-column-end: span 2;
  @media (max-width: ${breakpoints.md.width}) {
    grid-column-end: span 12;
  }
`;

export const SearchFilters = ({ search, loading, searchInputs, onSearchInputChange }) => {
  return (
    <SearchBarContainer
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const phone = formData.get("phone");
        search(firstName, lastName, phone);
      }}
    >
      <SearchFieldStyled
        name="firstName"
        placeHolderText="First Name"
        size="lg"
        onChange={onSearchInputChange("firstName")}
        value={searchInputs.firstName}
        labelText=""
      />
      <SearchFieldStyled
        name="lastName"
        placeHolderText="Last Name"
        size="lg"
        onChange={onSearchInputChange("lastName")}
        value={searchInputs.lastName}
        labelText=""
      />
      <SearchFieldStyled
        name="phone"
        placeHolderText="Mobile Phone Number"
        size="lg"
        onChange={onSearchInputChange("phone")}
        value={searchInputs.phone}
        labelText=""
      />

      <SearchButtonStyled
        size="field"
        kind="tertiary"
        type="submit"
        onClick={() => {
          track({
            action: "SearchTripler",
            label: "Triplers/add",
          });
        }}
        disabled={loading}
      >
        Search
      </SearchButtonStyled>
    </SearchBarContainer>
  )
}
