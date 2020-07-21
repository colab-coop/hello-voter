import React from 'react'
import styled from 'styled-components'
import PageLayout from '../PageLayout'
import { useHistory } from 'react-router-dom'

const {
  REACT_APP_LANDING_TITLE,
  REACT_APP_LANDING_CONTENT,
  REACT_APP_LANDING_SIGNUP,
  REACT_APP_LANDING_VIDEO,
} = process.env;

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
        {REACT_APP_LANDING_SIGNUP}
      </p>
      {REACT_APP_LANDING_VIDEO && (
        <>
          <br />
          <br />
          <VideoContainer>
            <Video
              src={REACT_APP_LANDING_VIDEO}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </VideoContainer>
        </>
      )}
    </PageLayout>
  );
}
