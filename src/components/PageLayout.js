import React from 'react'
import {
  TitleContainer,
  Container
} from './pageStyles'

const Tutorial = ({ id }) => {
  if (id) {
    const copy = process.env[`REACT_APP_${id}_TUTORIAL_COPY`]
    const link = process.env[`REACT_APP_${id}_TUTORIAL_LINK`]
    if (copy || link) {
      return <span>{copy} {link && <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>}</span>;
    }
  }
  return null;
};

export default ({ header, title, tutorialId, children }) => (
  <Container>
    <div>
      { header }
    </div>
    <TitleContainer hasHeader={header !== undefined}>
      <h3>{ title }</h3>
      <Tutorial id={tutorialId} />
    </TitleContainer>
    <div>
      { children }
    </div>
  </Container>
)
