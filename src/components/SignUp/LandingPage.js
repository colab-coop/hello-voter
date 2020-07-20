import React from 'react'
import styled from 'styled-components'
import PageLayout from '../PageLayout'
import { useHistory } from 'react-router-dom'

export const LandingPage = () => {
  const history = useHistory()
  return (
    <PageLayout
      onClickSubmit={() => {
        history.push("/login");
      }}
      title="Earn Money as a Voting Ambassador!"
      trackingEvent={{ category: 'LandingPageContinue', label: 'Learn more!'}}
      submitButtonTitle="Learn more!"
      submitButtonTitle="Sign up now"
      hideMenuButtons
    >
      <p>
        Voting Ambassadors talk to their housemates, friends and neighbors about
        the importance of voting in the next election. Their goal is recruit
        “Vote Triplers” — people who commit to reminding three friends to vote.
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
