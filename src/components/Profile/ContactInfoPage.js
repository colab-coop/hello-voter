import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FormGroup,
  TextInput,
  InlineNotification,
  Form,
} from "carbon-components-react";
import { spacing, colors } from "../../theme";
import PageLayout from "../PageLayout";
import { ResponsiveContainer } from "../pageStyles";
import Button from "../Button";
import AddressForm from "./AddressForm";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../api/AppContext";
import NoNewSignupsPage from "./NoNewSignupsPage";

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

const InlineNotificationStyled = styled(InlineNotification)`
  width: 100%;
  max-width: 100%;
  margin-bottom: ${spacing[3]};
`;

const SubmissionContainer = styled.div`
  margin-top: ${spacing[8]};
`;

export const ContactInfoPage = ({ ambassador, setAmbassador, err }) => {

  if (process.env.REACT_APP_NO_NEW_SIGNUPS) {
    return <NoNewSignupsPage />;
  }

  return (
    <PageLayout title="Please Enter Your Details">
      <ResponsiveContainer>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);

            const userData = {
              first_name: formData.get("first_name"),
              last_name: formData.get("last_name"),
              email: formData.get("email"),
              phone: formData.get("phone").toString(),
              date_of_birth: formData.get("date_of_birth"),
              address: {
                address1: formData.get("address1"),
                state: formData.get("state"),
                zip: formData.get("zip"),
                city: formData.get("city"),
              },
              signupComplete: true,
            };

            await setAmbassador((data) => {
              return {
                ...data,
                ...userData,
              };
            });
          }}
        >
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
          <Divider />
          <FormGroup legendText="">
            <TextInput
              id="email"
              name="email"
              invalidText="Invalid error message."
              labelText="Email"
              defaultValue={ambassador.email}
            />
          </FormGroup>
          <FormGroup legendText="">
            <TextInput
              id="phone"
              name="phone"
              invalidText="Invalid error message."
              labelText="Phone number*"
              defaultValue={ambassador.phone}
              required
            />
          </FormGroup>
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
      </ResponsiveContainer>
    </PageLayout>
  );
};


export const DeniedPage = () => {
  return (
  <PageLayout title="Thanks for being a BlockPower Ambassador!">
    <p>
    Thanks for being a BlockPower Ambassador! With your help, we have reached over 100,000 low-propensity Black voters so they can make their voices heard at the ballot box. 
    </p>

    <p>
    Most of you should have received payment for your confirmed Triplers or heard from us about connecting to a bank account so outstanding payments can be processed. Some accounts are under review for potentially providing false information; those confirmed to have done that will not be paid out.
    </p>

    <p>
    We are now focused on get-out-the-vote efforts, so you will not be able to access the BlockPower app.  Please continue to help by reaching out to your Triplers and asking them to encourage their Triplees to vote. 
    </p>

    <p>
    We're grateful you joined us in making this model a success. You've been patient as we've made upgrades and have spread the word about BlockPower. We will build on your efforts and ideas to make BlockPower better and more responsive in the future.  Thanks again. 
    </p>

    <p>
    Onward!<br/>
    The BlockPower Team
    </p>
  </PageLayout>
  )
}

export const ProfilePageEdit = () => {
  const [err, setErr] = useState(false);
  const history = useHistory();
  const { api, fetchUser, user } = React.useContext(
    AppContext
  );
  const saveProfile = async (ambassador) => {
    const { error } = await api.saveProfile(ambassador);
    if (error) return setErr(error.msg);
    const { userError } = await fetchUser();
    if (userError) return setErr(userError.msg);
  }

if (user && user.msg==="Your account is locked.") {
    return <DeniedPage/>
  }
  return (
    <ContactInfoPage
      ambassador={user}
      setAmbassador={async (mergeData) => {
        const newAmbassador = mergeData(user);
        await saveProfile(newAmbassador);
        history.push("/");
      }}
      err={err}
    />
  );
}

export const ProfilePageSignup = () => {
  const [err, setErr] = useState(false);
  const history = useHistory();
  const { ambassador, setAmbassador, api, fetchUser, user } = React.useContext(
    AppContext
  );

  user &&
    user.signup_completed &&
    user.onboarding_completed &&
    history.push("/");
  useEffect(() => {
    const signup = async () => {
      console.log("Signing up");
      const { error } = await api.signup(ambassador);
      if (error) return setErr(error.msg);
      const { userError } = await fetchUser();
      if (userError) return setErr(userError.msg);
    };
    if (ambassador.signupComplete) {
      signup();
    }
  }, [ambassador]);


if (user && user.msg==="Your account is locked.") {
    return <DeniedPage/>
  }
  return (
    <ContactInfoPage
      ambassador={ambassador}
      setAmbassador={setAmbassador}
      err={err}
    />
  );
};
