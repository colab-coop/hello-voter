import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { TriplersPage } from "../components/Triplers/TriplersPage";
import { AddTriplersPage, normalizeTripler, searchResultSummary } from "../components/Triplers/AddTripler";
import { SearchFilters } from '../components/Triplers/SearchFilters';
import { ConfirmPage } from "../components/Triplers/ConfirmPage";
import {
  TRIPLERS_UNCONFIRMED,
  TRIPLERS_PENDING,
  TRIPLERS_CONFIRMED,
  TRIPLERS_FULL,
  TRIPLERS_FULL_WITH_AMBASSADOR,
  TRIPLERS_TO_ADD,
} from './Triplers.mocks';
import { MAIN_USER } from './Home.mocks';

export default {
  title: "Triplers",
};

const noop = () => {}
const mockSearch = {
  firstName: "Foo",
  lastName: "Bar",
  phone: "313-555-1212",
  distance: 10,
  age: "20-29",
  gender: "F",
  msa: "Jacksonville, FL area",
}
const defaultTriplersPageProps = {
  triplers: [],
  limit: 10,
  remindTripler: noop,
  deleteTripler: noop
}
const defaultAddTriplersPageProps = {
  triplers: [],
  searchInputs: mockSearch,
  searchResults: searchResultSummary(mockSearch),
  loading: false,
  error: null,
  claimTriplers: noop,
  search: noop,
  onSearchInputChange: noop
}
const defaultConfirmTriplersPageProps = {
  tripler: {},
  loading: false,
  confirmTriplers: noop,
}

export const TriplersEmpty = () => (
  <>
    <Menu isApproved={true} />
    <TriplersPage {...defaultTriplersPageProps} />
  </>
);

export const TriplersUnconfirmed = () => (
  <>
    <Menu isApproved={true} />
    <TriplersPage
      {...defaultTriplersPageProps}
      triplers={TRIPLERS_UNCONFIRMED}
    />
  </>
);

export const TriplersPending = () => (
  <>
    <Menu isApproved={true} />
    <TriplersPage
      {...defaultTriplersPageProps}
      triplers={TRIPLERS_PENDING}
    />
  </>
);

export const TriplersConfirmed = () => (
  <>
    <Menu isApproved={true} />
    <TriplersPage
      {...defaultTriplersPageProps}
      triplers={TRIPLERS_CONFIRMED}
    />
  </>
);

export const TriplersFull = () => (
  <>
    <Menu isApproved={true} />
    <TriplersPage
      {...defaultTriplersPageProps}
      triplers={TRIPLERS_FULL}
    />
  </>
);

export const TriplersAmbassadorsFull = () => (
  <div style={{position:"relative", minHeight:"100vh"}}>
    <Menu isApproved={true} />
    <TriplersPage
      {...defaultTriplersPageProps}
      triplers={TRIPLERS_FULL_WITH_AMBASSADOR}
    />
    <Footer />
  </div>
);

export const AddTriplers = () => (
  <>
    <Menu isApproved={true} />
    <AddTriplersPage
      {...defaultAddTriplersPageProps}
      triplers={TRIPLERS_TO_ADD.map(normalizeTripler)}
    />
  </>
);

export const TriplerSearchFilters = () => (
  <SearchFilters
    {...defaultAddTriplersPageProps}
  />
);

export const ConfirmTriplers = () => (
  <>
    <Menu isApproved={true} />
    <ConfirmPage
      {...defaultConfirmTriplersPageProps}
      tripler={MAIN_USER}
    />
  </>
);
