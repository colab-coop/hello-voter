import React from 'react'
import TrainingLayout from './TrainingLayout'
import { FigureContainer, FigureRow } from './styles'

export default () => {
  return (
    <TrainingLayout
      prevPage="/onboarding/04"
      nextPage="/onboarding/06"
      title="Voting for the government policies we want"
    >
      <p>
        Voting is not just about electing a President. We elect hundreds of
        other government officials who control the polices that affect our
        lives, including —
      </p>
      <FigureContainer>
        <FigureRow bgLevel={70}>Making housing more affordable</FigureRow>
        <FigureRow bgLevel={60}>Lowering the cost of healthcare</FigureRow>
        <FigureRow bgLevel={50}>Reducing racism</FigureRow>
        <FigureRow bgLevel={40}>Improving water air quality</FigureRow>
        <FigureRow bgLevel={30}>Making college more affordable</FigureRow>
        <FigureRow bgLevel={20}>Creating more higher paying jobs</FigureRow>
        <FigureRow bgLevel={10}>Making ends meet with</FigureRow>
      </FigureContainer>
    </TrainingLayout>
  );
}

