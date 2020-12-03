import React from 'react'
import {
  FormGroup,
  Checkbox,
  InlineNotification,
  Form,
} from "carbon-components-react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

import { AppContext } from "../api/AppContext";
import Button from "./Button";
import PageLayout from './PageLayout'

const Checklist = styled.div`
  margin: 1em 0;
`;

const StyledCheckbox = styled(Checkbox)`
  &:hover {
    background: #eee;
  }
`;


export default () => {
  const { api, user, fetchUser } = React.useContext(AppContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    api.saveProfile({...user, onboarding_completed: true}).then(() => {
      fetchUser().then(() => {
        history.push('/');  // let the router decide where to go next
      });
    });
  };

  return <PageLayout title="Before you start">
    <p>
      There are a few important things
      that we need to make sure you understand
      before you can be an Ambassador.
    </p>
    <Form onSubmit={(e) => {
      e.preventDefault();

      api.saveProfile({...user, onboarding_completed: true}).then(() => {
        fetchUser().then(() => {
          history.push('/');  // let the router decide where to go next
        });
      });
    }}>
      Please read and acknowledge each item below.
      <Checklist>
        <StyledCheckbox id="confirm1" required
          labelText="I am NOT being paid to get my friends to vote." />
        <StyledCheckbox id="confirm2" required
          labelText="I am only able to add people I know from the searchable list provided in the platform.  Friends and family whose names are not in this list cannot be added as Triplers." />
        <StyledCheckbox id="confirm3" required
          labelText="The bank account I connect to in order to be compensated must be in my name." />
        <StyledCheckbox id="confirm4" required
          labelText="I will not be paid if I submit false or incomplete information about Vote Triplers or Triplees." />
        <StyledCheckbox id="confirm5" required
          labelText="BlockPower's mission is to empower Black communities through high-quality friend-to-friend conversations to build power through voting and civic engagement." />
      </Checklist>
      <Button
        type="submit"
        trackingEvent={{ action: "Submit", label: "Acknowledgements" }}
        isAForm
      >
        I'm ready to be an Ambassador
      </Button>
    </Form>
  </PageLayout>;
};

