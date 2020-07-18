import React from 'react'
import styled from 'styled-components'
import PageLayout from '../PageLayout'
import { useHistory } from 'react-router-dom'

const { REACT_APP_TRIPLER_PAYMENT_AMT } = process.env

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
`

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const LandingPage = () => {
  const history = useHistory()
  return (
    <PageLayout
      onClickSubmit={() => {
        history.push("/login");
      }}
      title="Earn Money as a Voting Ambassador!"
      formId="LandingPage"
      submitButtonTitle="Learn more!"
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
        Voting Ambassadors earn ${REACT_APP_TRIPLER_PAYMENT_AMT} each time they recruit a new Vote Tripler.
        At the same time, by raising awareness about voting in their community,
        Ambassadors also help improve Black turnout and give the community a
        stronger voice in our future.
      </p>
      <br />
      <br />
      <VideoContainer>
        <Video src="https://youtube.com/embed/VUf394_KJ0c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </VideoContainer>
    </PageLayout>
  );
}
