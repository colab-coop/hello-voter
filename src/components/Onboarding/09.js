import React from 'react'
import TrainingLayout from './TrainingLayout'
import { VideoContainer, Video } from './styles'

export default () => {
  return (
    <TrainingLayout
      prevPage="/onboarding/08"
      nextPage="/onboarding/10"
      title="Voting Fundamentals"
    >
      <VideoContainer>
        <Video src="https://drive.google.com/file/d/1C80fT2y1N49CwaNv6upZPaDznLlaVAgc/preview" />
      </VideoContainer>
      <br />
      <br />
      <p>
        This year’s election is an important one involving many different
        candidates and issues — including whether Donald Trump should be
        president for four more years....
      </p>
    </TrainingLayout>
  );
}