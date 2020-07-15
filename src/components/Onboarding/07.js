import React from 'react'
import TrainingLayout from './TrainingLayout'
import { VideoContainer, Video } from './styles'

export default () => {
  return (
    <TrainingLayout
      prevPage="/onboarding/06"
      nextPage="/onboarding/08"
      title="Reasons to vote"
    >
      <p>There are lots of good reasons to vote.</p>
      <br />
      <br />
      <VideoContainer>
        <Video src="https://drive.google.com/file/d/1iSLQZIB_nhGuOaLAL2HNmsToYPXeLfjA/preview" />
      </VideoContainer>
    </TrainingLayout>
  );
}