import React from 'react'
import TrainingLayout from './TrainingLayout'
import { VideoContainer, Video } from './styles'

export default () => {
  return (
    <TrainingLayout
      prevPage="/onboarding/03"
      nextPage="/onboarding/05"
      title="A brief history of the Black vote"
    >
      <VideoContainer>
        <Video src="https://drive.google.com/file/d/1apjqZ-KnbPLgVeLfLgYkIC7wWbfu46pR/preview" />
      </VideoContainer>
      <br />
      <br />
      <p>
        Black people have been fighting for the right to vote for 150 years.
        While efforts to suppress Black voting continue, Black voters have more
        power to change America today than at any other time in our history.
      </p>
    </TrainingLayout>
  );
}