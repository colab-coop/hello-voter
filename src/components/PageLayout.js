import React from 'react'
import { 
  TitleContainer, 
  Container,
} from './pageStyles'

export default ({ header, title, children }) => (
  <Container>
    <div>
      { header }
    </div>
    <TitleContainer hasHeader={header !== undefined}>
      <h3>{ title }</h3>
    </TitleContainer>
    <div>
      { children }
    </div>
  </Container>
)
