import React from 'react'
import TrainingLayout from './TrainingLayout'
import { VideoContainer, Video } from './styles'

export default () => {
  return (
    <TrainingLayout
      prevPage='/onboarding/01'
      nextPage='/onboarding/03'
      title="The importance of voting"
    >
      <VideoContainer>
        <Video src="https://youtube.com/embed/lmY7pkOLjRs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </VideoContainer>
      <br />
      <br />
      <p>Two years ago, former President Barack Obama spoke at a college graduation about the importance of voting. His message is even more important today.</p>
    </TrainingLayout>
  )
}