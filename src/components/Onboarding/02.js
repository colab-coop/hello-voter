import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import PageLayout from '../PageLayout'
import Breadcrumbs from '../Breadcrumbs'

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

export default () => {
  const history = useHistory()
  return (
    <PageLayout
      onClickSubmit={() => {
        history.push('/onboarding/03')
      }}
      title="The importance of voting"
      submitButtonTitle="Continue"
      header={<Breadcrumbs items={
        [{
          name: "Back",
          route: "/components/01"
        }]
      } />}
    >
      <VideoContainer>
        <Video src="https://www.youtube.com/embed/RRWsKMjASQ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </VideoContainer>
      <br />
      <br />
      <p>Two years ago, former President Barack Obama spoke <strong>at a college graduation</strong> about the importance of voting. His message is even more important today.</p>
    </PageLayout>
  )
}
