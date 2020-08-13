import React from "react";
import Menu from "../components/Menu";
import Triplers from "../components/Triplers/TriplersPage";
import Add from "../components/Triplers/AddTripler";
import Confirm from "../components/Triplers/ConfirmPage";

export default {
  title: "Triplers",
};

export const TriplersEmpty = () => (
  <>
    <Menu isApproved={true} />
    <Triplers triplers={[]} />
  </>
);

export const TriplersUnconfirmed = () => (
  <>
    <Menu isApproved={true} />
    <Triplers
      triplers={[
        {
          status: "unconfirmed",
          first_name: "Lauren",
          last_name: "R",
          address: {
            address1: "200 Address lane",
            city: "Denver",
            state: "CO",
          },
        },
      ]}
    />
  </>
);

export const TriplersPending = () => (
  <>
    <Menu isApproved={true} />
    <Triplers
      triplers={[
        {
          status: "pending",
          first_name: "Lauren",
          last_name: "R",
          address: {
            address1: "200 Address lane",
            city: "Denver",
            state: "CO",
          },
        },
      ]}
    />
  </>
);

export const TriplersConfirmed = () => (
  <>
    <Menu isApproved={true} />
    <Triplers
      triplers={[
        {
          status: "confirmed",
          first_name: "Lauren",
          last_name: "R",
          address: {
            address1: "200 Address lane",
            city: "Denver",
            state: "CO",
          },
        },
      ]}
    />
  </>
);

export const TriplersFull = () => (
  <>
    <Menu isApproved={true} />
    <Triplers
      triplers={[
        {
          status: "unconfirmed",
          first_name: "Lauren",
          last_name: "R",
          address: {
            address1: "200 Address lane",
            city: "Denver",
            state: "CO",
          },
        },
        {
          status: "unconfirmed",
          first_name: "Edison",
          last_name: "Shepherd",
          address: { address1: "1 Good Boy Rd", city: "Denver", state: "CO" },
        },
        {
          status: "pending",
          first_name: "Michael",
          last_name: "Marsh",
          address: {
            address1: "200 Address lane",
            city: "Denver",
            state: "CO",
          },
        },
        {
          status: "pending",
          first_name: "Edison",
          last_name: "Shepherd",
          address: { address1: "1 Good Boy Rd", city: "Denver", state: "CO" },
        },
        {
          status: "pending",
          first_name: "Lauren",
          last_name: "Ralph",
          address: { address1: "1 Road Rd", city: "Denver", state: "CO" },
        },
        {
          status: "confirmed",
          first_name: "Michael",
          last_name: "Marsh",
          address: {
            address1: "200 Address lane",
            city: "Denver",
            state: "CO",
          },
        },
        {
          status: "confirmed",
          first_name: "Edison",
          last_name: "Shepherd",
          address: { address1: "1 Good Boy Rd", city: "Denver", state: "CO" },
        },
      ]}
    />
  </>
);

export const AddPage = () => (
  <>
    <Menu isApproved={true} />
    <Add
      triplers={[
        {
          id: "a",
          name: "Judy Blume",
          address: "1 Really Good Address Ln asdasdsa as das dasd ",
        },
        {
          id: "b",
          name: "Edison Shepherd",
          address: "1 Good Boy Rd",
        },
        {
          id: "d",
          name: "Lauren Ralph",
          address: "1 Road Rd",
        },
        {
          id: "e",
          name: "Pamela Jones",
          address: "1 Jones Road Rd",
        },
        {
          name: "Pamela Jones",
          address: "1 Jones Road Rd",
        },
        {
          name: "Pamela Jones",
          address: "1 Jones Road Rd",
        },
        {
          name: "Pamela Jones",
          address: "1 Jones Road Rd",
        },
        {
          name: "Pamela Jones",
          address: "1 Jones Road Rd",
        },
        {
          name: "Pamela Jones",
          address: "1 Jones Road Rd",
        },
        {
          name: "Pamela Jones",
          address: "1 Jones Road Rd",
        },
        {
          name: "Pamela Jones",
          address: "1 Jones Road Rd",
        },

        {
          name: "Pamela Jones",
          address: "1 Jones Road Rd",
        },
        {
          name: "Pamela Jones",
          address: "1 Jones Road Rd",
        },
        {
          name: "Pamela Jones",
          address: "1 Jones Road Rd",
        },
      ]}
    />
  </>
);

export const ConfirmPage = () => (
  <>
    <Menu isApproved={true} />
    <Confirm tripler={[]} />
  </>
);
