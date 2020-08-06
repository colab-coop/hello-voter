import React from "react";
import styled from "styled-components";
import { FormGroup, TextInput } from "carbon-components-react";
import { useHistory } from "react-router-dom";
import PageLayout from "../PageLayout";
import Breadcrumbs from "../Breadcrumbs";
import { spacing, colors } from "../../theme";
import { AppContext } from "../../api/AppContext";
import AddressForm from "../AddressForm";

const Row = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: ${spacing[5]};
  grid-template-columns: 1fr 1fr;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.gray[20]};
  margin-bottom: ${spacing[5]};
`;

export const SignUpPage = () => {
  const history = useHistory()
  const { user, ambassador, setAmbassador } = React.useContext(AppContext)
  user && user.signup_completed && user.onboarding_completed && history.push('/')
  return (
    <PageLayout
      onClickSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const userData = {
          first_name: formData.get('first_name'),
          last_name: formData.get('last_name'),
          email: formData.get('email'),
          phone: formData.get('phone').toString(),
          address: {
            address1: formData.get('address1'),
            state: formData.get('state'),
            zip: formData.get('zip'),
            city: formData.get('city'),
          }
        }

        setAmbassador((data) => {
          return {
            ...data,
            ...userData
          }
        })

        history.push('/ambassador/confirm')
      }}
      title="My contact information"
      submitButtonTitle="Continue"
    >
      <FormGroup>
        <Row>
          <TextInput
            name="first_name"
            invalidText="Invalid error message."
            labelText="First Name*"
            defaultValue={ambassador.first_name}
            required
          />
          <TextInput
            name="last_name"
            invalidText="Invalid error message."
            labelText="Last Name*"
            defaultValue={ambassador.last_name}
            required
          />
        </Row>
      </FormGroup>
      <Divider />
      <AddressForm 
        // ambassador={ambassador}
      />
      <Divider />
      <FormGroup>
        <Row>
          <TextInput
            name="email"
            invalidText="Invalid error message."
            labelText="Email"
            defaultValue={ambassador.email}
          />
          <TextInput
            name="phone"
            invalidText="Invalid error message."
            labelText="Phone number*"
            defaultValue={ambassador.phone}
            required
          />
        </Row>
      </FormGroup>
    </PageLayout>
  );
};
