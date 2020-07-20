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
        lives, including:
      </p>
      <figure>
        <FigureContainer>
          <FigureRow bgLevel={70}>Making housing more affordable</FigureRow>
          <FigureRow bgLevel={60}>Lowering the cost of healthcare</FigureRow>
          <FigureRow bgLevel={50}>Reducing racism</FigureRow>
          <FigureRow bgLevel={40}>Improving water and air quality</FigureRow>
          <FigureRow bgLevel={30}>Making college more affordable</FigureRow>
          <FigureRow bgLevel={20}>Creating more higher paying jobs</FigureRow>
          <FigureRow bgLevel={10}>Making ends meet with one job</FigureRow>
        </FigureContainer>
        <br />
        <figcaption>
          *This list was sourced from
          <br />
          <a
            href="https://www.thirdway.org/memo/a-nuanced-picture-of-what-black-americans-want-in-2020"
            target="_blank"
          >
            https://www.thirdway.org/memo/a-nuanced-picture-of-what-black-americans-want-in-2020
          </a>
        </figcaption>
      </figure>
    </TrainingLayout>
  );
}

