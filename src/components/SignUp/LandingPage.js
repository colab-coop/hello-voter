import React from 'react'
import styled from 'styled-components'
import PageLayout from '../PageLayout'
import { useHistory } from 'react-router-dom'

const { REACT_APP_LANDING_TITLE, REACT_APP_LANDING_CONTENT } = process.env

export const LandingPage = () => {
  const history = useHistory()
  return (
    <PageLayout
      onClickSubmit={() => {
        history.push("/login");
      }}
      title={REACT_APP_LANDING_TITLE}
      trackingEvent={{ category: 'LandingPageContinue', label: 'Learn more!'}}
      submitButtonTitle="Learn more!"
      submitButtonTitle="Sign up now"
      hideMenuButtons
    >
      <p>
        {REACT_APP_LANDING_CONTENT}
      </p>
      <br />
      <br />
      <p>
        This page will walk you through the sign-up process. It should take no
        more than 10 minutes.
      </p>
    </PageLayout>
  );
}
