import {
  FormGroup,
  TextInput,
  DatePickerInput,
  InlineNotification,
  Form,
  DatePicker,
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

export const ProfileForm = ({ user, onSubmit, loading, err, disablePhone, disableEmail, stateOptions }) => <ResponsiveContainer>
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
          defaultValue={user.first_name}
          required
        />
        <TextInput
          id="last_name"
          name="last_name"
          invalidText="Invalid error message."
          labelText="Last Name*"
          defaultValue={user.last_name}
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
        defaultValue={user.phone}
        required
        disabled={disablePhone}
      />
    </FormGroup>
    {disablePhone &&
        <input name="phone" type="hidden" value={user.phone} />}
    <FormGroup legendText="">
      <TextInput
        id="email"
        name="email"
        invalidText="Invalid error message."
        labelText="Email*"
        defaultValue={user.email}
        required
        disabled={disableEmail}
      />
    </FormGroup>
    {disableEmail &&
        <input name="email" type="hidden" value={user.email} />}
    <FormGroup legendText="">
      <Row>
        <DatePicker datePickerType="single">
          <DatePickerInput
            id="date_of_birth"
            name="date_of_birth"
            placeholder="mm/dd/yyyy"
            labelText="Date of Birth*"
            defaultValue={user.date_of_birth}
            required
          />
        </DatePicker>
      </Row>
    </FormGroup>
    <Divider />
    <AddressForm user={user} stateOptions={stateOptions} />
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
        loading={loading}
        trackingEvent={{ action: "SubmitSignupInfo", label: "Submit" }}
        isAForm
      >
        Submit
      </Button>
    </SubmissionContainer>
  </Form>
</ResponsiveContainer>;
