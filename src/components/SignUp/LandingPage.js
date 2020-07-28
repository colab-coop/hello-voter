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

const VideoContainer = styled.video`
  position: relative;
  width: 100%;
  height: 320px;
  background-color: #000;
`

const Video = styled.source`
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
          <VideoContainer controls preload="metadata">
            <Video
              src={`${REACT_APP_LANDING_VIDEO}#t=0.1`}              
            />
          </VideoContainer>
        </>
      )}
    </PageLayout>
  );
}
