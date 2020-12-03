import {
  FormGroup,
  TextInput,
  InlineNotification,
  Form,
} from "carbon-components-react";
import React from 'react';
import styled from "styled-components";

import { spacing, colors } from "../../theme";
import { ResponsiveContainer } from '../pageStyles';
import Button from "../Button";
import AddressForm from "./AddressForm";

const Row = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: ${spacing[5]};
  grid-template-columns: 1fr 1fr;

  div {
    grid-column-end: unset;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.gray[20]};
  margin-bottom: ${spacing[5]};
`;

const InlineNotificationStyled = styled(InlineNotification)`
  width: 100%;
  max-width: 100%;
  margin-bottom: ${spacing[3]};
`;

const SubmissionContainer = styled.div`
  margin-top: ${spacing[8]};
`;

export const ProfileForm = ({ ambassador, onSubmit, err, disablePhone, disableEmail }) => <ResponsiveContainer>
  <Form onSubmit={(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const edits = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      phone: String(formData.get("phone") || ""),
      date_of_birth: formData.get("date_of_birth"),
      address: {
        address1: formData.get("address1"),
        state: formData.get("state"),
        zip: formData.get("zip"),
        city: formData.get("city"),
      },
      form_submitted: true,
    };

    onSubmit(edits);
  }}>
    <FormGroup legendText="">
      <Row>
        <TextInput
          id="first_name"
          name="first_name"
          invalidText="Invalid error message."
          labelText="First Name*"
          defaultValue={ambassador.first_name}
          required
        />
        <TextInput
          id="last_name"
          name="last_name"
          invalidText="Invalid error message."
          labelText="Last Name*"
          defaultValue={ambassador.last_name}
          required
        />
      </Row>
    </FormGroup>
    <FormGroup legendText="">
      <TextInput
        id="phone"
        name="phone"
        invalidText="Invalid error message."
        labelText="Phone number*"
        defaultValue={ambassador.phone}
        required
        disabled={disablePhone}
      />
    </FormGroup>
    <FormGroup legendText="">
      <TextInput
        id="email"
        name="email"
        invalidText="Invalid error message."
        labelText="Email*"
        defaultValue={ambassador.email}
        required
        disabled={disableEmail}
      />
    </FormGroup>
    <FormGroup legendText="">
      <Row>
        <TextInput
          id="date_of_birth"
          name="date_of_birth"
          placeholder="mm/dd/yyyy"
          labelText="Date of Birth*"
          type="text"
          defaultValue={ambassador.date_of_birth}
          required
        />
      </Row>
    </FormGroup>
    <Divider />
    <AddressForm ambassador={ambassador} />
    <SubmissionContainer>
      {err && (
        <InlineNotificationStyled
          hideCloseButton
          kind="error"
          icondescription="Dismiss notification"
          subtitle={err}
          title=""
        />
      )}
      <Button
        type="submit"
        trackingEvent={{ action: "SubmitSignupInfo", label: "Submit" }}
        isAForm
      >
        Submit
      </Button>
    </SubmissionContainer>
  </Form>
</ResponsiveContainer>;
