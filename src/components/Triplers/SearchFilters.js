import React from 'react';
import styled from 'styled-components';
import { Button, Form, Search, Slider, Dropdown, Accordion, AccordionItem } from 'carbon-components-react';
import { breakpoints, spacing } from '../../theme';
import { track } from '../../analytics';
import './searchFilters.scss';

const AGE_OPTIONS = [
  "18-19",
  "20-29",
  "30-39",
  "40-49",
  "50-59",
  "60-69",
  "70-79",
  "80+",
  // "Unavailable" is also possible in the database.
];

const GENDER_OPTIONS = [
  "Female",
  "Male",
  // "Unspecified" is also possible in the database.
];

const MSA_OPTIONS = [
  "Jacksonville, FL area",
  "Miami, FL area",
  "Orlando, FL area",
  "Tampa, FL area",
  "FL other",
  "Atlanta, GA area",
  "GA other",
  "Charlotte, NC area",
  "Durham, NC area",
  "Fayetteville, NC area",
  "Greensboro, NC area",
  "Raleigh, NC area",
  "Winston-Salem, NC area",
  "NC other",
  "Charleston, SC area",
  "Columbia, SC area",
  "SC other",
  "Birmingham, AL area",
  "Montgomery, AL area",
  "AL other",
  "Lexington, KY area",
  "KY other",
  "Phoenix, AZ area",
  "AZ other",
  "Mansfield, OH area",
  "Milwaukee, WI",
  "WI other",
  "Detroit, MI area",
  "MI other",
  "Philadelphia, PA area",
  "Pittsburgh, PA area",
  "PA other",
];

const SearchFilterGrid = styled.div`
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
  grid-column-end: span 6;
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
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        search();
      }}
    >
      <SearchFilterGrid>
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
      </SearchFilterGrid>
      <Accordion>
        <AccordionItem title="See more search filters">
          <SearchFilterGrid style={{ marginTop: 0 }}>
            <SearchFieldStyled
              name="phone"
              placeHolderText="Mobile Phone Number"
              size="lg"
              onChange={onSearchInputChange("phone")}
              value={searchInputs.phone}
              labelText=""
            />
            <Slider
              name="distance"
              labelText="Distance"
              min={0}
              max={1}
              step={0.05}
              onChange={onSearchInputChange("distance")}
              value={searchInputs.distance}
            />
            <Dropdown
              id="age"
              name="age"
              items={AGE_OPTIONS}
              label="Choose an option"
              titleText="Age"
              onChange={onSearchInputChange("age")}
              selectedItem={searchInputs.age}
            />
            <Dropdown
              id="gender"
              name="gender"
              items={GENDER_OPTIONS}
              label="Choose an option"
              titleText="Sex"
              onChange={onSearchInputChange("gender")}
              selectedItem={searchInputs.gender}
            />
            <Dropdown
              id="msa"
              name="msa"
              items={MSA_OPTIONS}
              label="Choose an option"
              titleText="Metro area"
              onChange={onSearchInputChange("msa")}
              selectedItem={searchInputs.msa}
            />
          </SearchFilterGrid>
        </AccordionItem>
      </Accordion>

      <SearchFilterGrid>
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
      </SearchFilterGrid>
    </Form>
  )
};
